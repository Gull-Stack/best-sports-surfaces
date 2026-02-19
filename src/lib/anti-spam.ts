// Anti-spam utilities for forms

export interface HoneypotData {
  email_confirm?: string; // Honeypot field - should be empty
  timestamp?: number; // Form load timestamp
}

export interface SpamCheckResult {
  isSpam: boolean;
  reason?: string;
}

/**
 * Check if form submission appears to be spam
 */
export function checkSpam(data: HoneypotData, minTimeMs: number = 3000): SpamCheckResult {
  // Check honeypot field - if filled, it's a bot
  if (data.email_confirm && data.email_confirm.trim() !== '') {
    return {
      isSpam: true,
      reason: 'Honeypot field filled'
    };
  }

  // Check submission speed - too fast = bot
  if (data.timestamp) {
    const submissionTime = Date.now();
    const timeDiff = submissionTime - data.timestamp;
    
    if (timeDiff < minTimeMs) {
      return {
        isSpam: true,
        reason: `Form submitted too quickly (${timeDiff}ms < ${minTimeMs}ms)`
      };
    }
  }

  return { isSpam: false };
}

/**
 * Generate honeypot props for form fields
 */
export function getHoneypotProps() {
  return {
    name: 'email_confirm',
    autoComplete: 'off',
    tabIndex: -1,
    style: {
      position: 'absolute',
      left: '-9999px',
      top: '-9999px',
      opacity: 0,
      pointerEvents: 'none',
      fontSize: '0px',
      lineHeight: '0px',
      height: '0px',
      width: '0px',
      padding: '0px',
      margin: '0px',
      border: 'none',
      outline: 'none',
    } as React.CSSProperties
  };
}

/**
 * Simple rate limiting using in-memory store
 * In production, use Redis or database
 */
const rateLimitStore = new Map<string, number[]>();

export function checkRateLimit(
  identifier: string, 
  maxRequests: number = 5, 
  windowMs: number = 60000 // 1 minute
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  // Get existing requests for this identifier
  const requests = rateLimitStore.get(identifier) || [];
  
  // Remove old requests outside the window
  const recentRequests = requests.filter(time => time > windowStart);
  
  // Check if limit exceeded
  const allowed = recentRequests.length < maxRequests;
  
  if (allowed) {
    // Add this request
    recentRequests.push(now);
    rateLimitStore.set(identifier, recentRequests);
  }
  
  return {
    allowed,
    remaining: Math.max(0, maxRequests - recentRequests.length),
    resetTime: windowStart + windowMs
  };
}

/**
 * Get client IP from request headers (with proxy support)
 */
export function getClientIP(request: Request): string {
  // Try Vercel/Cloudflare headers first
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfIP = request.headers.get('cf-connecting-ip');
  
  if (cfIP) return cfIP;
  if (realIP) return realIP;
  if (forwarded) return forwarded.split(',')[0].trim();
  
  return 'unknown';
}