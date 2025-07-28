import { useState } from "react"
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; // No agregar si la categoría ya existe
        setCategories([newCategory, ...categories]);
    };

    return (
        <>

            {/* Título */}
            <h1>Gif Expert App</h1>
            {/* Input */}
            <AddCategory onAddCategory={onAddCategory} />
            {/* Listado Gif */}
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
            {/* git Item */}
        </>
    )
}
