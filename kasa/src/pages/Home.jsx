import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Background from '../assets/images/background_home.png';

export default function Home() {
  return (
    <div >
      <Banner img={Background} title="Chez vous, partout et ailleurs" alt="falaises en bord de mer" />
      <Gallery />
    </div>
  )
};
  