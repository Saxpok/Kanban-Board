import { RatingProps } from "types/uiPropsTypes/uiPropsTypes";

import "./Rating.style.css";

const Rating = ({ stars }: RatingProps) => {
  return <div className="Rating">⭐️{stars / 1000} K stars</div>;
};

export default Rating;