import '../styles/Banner.scss';

export default function Banner({ img, title, alt }) {
    return (
        <div className="banner">
            <img className="banner-img" src={img} alt={alt} />
            <div className="banner-title">
                <h1 className='title'>{title}</h1>
            </div>
        </div>
    );
};
