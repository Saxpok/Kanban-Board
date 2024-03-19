import { useAppSelector } from "../../store/store";

import "./Rating.style.css"

const Rating = () => {

    const stars: number = useAppSelector((store) => store.issues.stars)

    return (
        <div className="Rating">⭐️{stars / 1000} K stars</div>
    )
}

export default Rating