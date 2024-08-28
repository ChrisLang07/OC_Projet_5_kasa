import { Link } from "react-router-dom";
import '../styles/Card.scss';

export default function Card({ location }) {

    return (
        <>
            <Link to={'/apartment/' + location.id} className="card-link">
                <article className="grid-card">
                    <img className="grid-card--img" src={location.cover} alt={location.title}/>
                    <span className="grid-card-title">{location.title}</span>
                </article>
            </Link>
        </>
    )
}