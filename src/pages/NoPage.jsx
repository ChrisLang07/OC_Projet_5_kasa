import { Link } from 'react-router-dom';
import '../assets/styles/components/NoPage.scss';

export default function NoPage() {
  return (
    <div className="error-page">
      <h1 className="number">404</h1>
      <span className="oups">Oups! La page que vous demandez n'existe pas</span>
      <Link to={"/"} className="back-to-home">Retrouner sur la page d'accueil</Link>
    </div>
  );
};


  