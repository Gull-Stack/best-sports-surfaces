# BestSportsSurfaces.com Deployment Guide

## Critical Environment Variables (Vercel)

These must ALWAYS be set in Vercel dashboard:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
NEXT_PUBLIC_SITE_URL=https://bestsportssurfaces.com
NEXT_PUBLIC_SITE_NAME=BestSportsSurfaces.com
```

## ⚠️ NEVER DELETE ENVIRONMENT VARIABLES

**If the site breaks:**
1. Check Vercel logs first
2. Check Supabase connection
3. DO NOT delete environment variables
4. Contact Bryce before making infrastructure changes

## Emergency Contacts
- Bryce Morgan: (540) 424-0317
- Repository: github.com/Gull-Stack/best-sports-surfaces
- Supabase Dashboard: [link]
- Vercel Dashboard: [link]

## Incident History
- **2026-03-04:** Environment variables accidentally deleted, causing site outage