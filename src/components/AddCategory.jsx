import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length > 0) {
            onAddCategory(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={onInputChange}
                placeholder="Nueva Categoria"
            />
            <button type="submit">Agregar</button>
        </form>
    );
}
