import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";

function starRating(rating) {
  const ratingFive = rating / 2; 
  const fullStars = Math.floor(ratingFive); 
  const halfStar = ratingFive - fullStars >= 0.5; 
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<IoIosStar key={`full-${i}`} />);
  }

  if (halfStar) {
    stars.push(<FaStarHalf key="half-star" />);
  }

  const emptyStarsCount = 5 - stars.length;

  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(<IoIosStar key={i} className="text-gray-400" />);
  }

  return (
    <div className="inline-flex items-center space-x-1 text-yellow-400">
      {stars}
    </div>
  );
}

export default starRating;
