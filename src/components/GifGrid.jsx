import PropTypes from 'prop-types';
import { GiftItem } from './GiftItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    return (
        <>
            <h1>{category}</h1>
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GiftItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};
