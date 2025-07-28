import { useState, useEffect } from 'react';
import { getGifs } from '../api/getGifs';

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getGifs(category).then(gifs => {
            setGifs(gifs);
            setIsLoading(false);
        });
    }, [category]);

    return {
        images: gifs,
        isLoading
    };
}


