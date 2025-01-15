
import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";


function starRating( rating ){
    const stars = [];
    const fullStars = Math.floor(rating);
    const HalfStar = false;

    let floatingPart = rating.split(".")[1];

    if(floatingPart >= 5){
        HalfStar = true;
    }

    for(let i = 0; i < fullStars; i++){
        stars.push(<IoIosStar key={i} />);
    }

    if(HalfStar){
        stars.push(<FaStarHalf key={fullStars} />);
    }

    return stars; 
}

export default starRating;