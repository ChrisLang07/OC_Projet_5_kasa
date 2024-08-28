import Stars from './Stars';
import greyStar from '../assets/grey-star.png';
import redStar from '../assets/red-star.png';

export default function Rating({rating}) {

  const redStars = rating
  const greyStars = 5 - redStars;
      
    return (
        <div className="rating-stars">
          <div className="red-stars">
            <Stars number={redStars} starImg={redStar}/>
            <Stars number={greyStars} starImg={greyStar} />
          </div>
        </div>
    );
};