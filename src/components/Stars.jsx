import '../assets/styles/components/Stars.scss';

export default function Stars({number, starImg}) {

    const stars = ([]);
    let i = 0
    while (i < number) {
        stars.push(i);
        i++;
    }
        
    return (
        stars.map((star, key) => (
            <img className='star' key={key} src={starImg} alt="rating stars" />
    )));
}