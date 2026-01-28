import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
  showValue?: boolean;
  count?: number;
}

export default function StarRating({ rating, size = 16, showValue = false, count }: StarRatingProps) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<Star key={i} className="text-amber-400 fill-amber-400" size={size} />);
    } else if (rating >= i - 0.5) {
      stars.push(<StarHalf key={i} className="text-amber-400 fill-amber-400" size={size} />);
    } else {
      stars.push(<Star key={i} className="text-gray-300" size={size} />);
    }
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      {showValue && <span className="text-sm font-medium text-gray-700 ml-1">{rating.toFixed(1)}</span>}
      {count !== undefined && <span className="text-sm text-gray-500">({count})</span>}
    </div>
  );
}
