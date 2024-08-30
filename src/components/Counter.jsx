import { useState, useEffect } from "react";
import '../assets/styles/components/Counter.scss'

export default function Counter({ imageIndex, array }) {
    const [index, setIndex] = useState({imageIndex});

    useEffect(() => {
        setIndex(imageIndex);
    }, [imageIndex]);

    return (
        <span className="counter">{index + 1}/{array.length}</span>
    );
}

