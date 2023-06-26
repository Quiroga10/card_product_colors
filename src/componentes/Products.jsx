import '../hojas de estilo/Product.css';
import React, {useState} from "react";


function Products(props) {
    const [color, setColor] = useState(props.color);
    const [currentImage, setCurrentImage] = useState(props.imagen);
    const [currentColorText, setCurrentColorText] = useState(props.color);

    const handleColorChange = (newColor, newImage) => {
        setColor(newColor);
        setCurrentImage(newImage);
        // Actualizar el texto del color actual
        setCurrentColorText(newColor);
    };

    return (
        <div className='product-card'>
            <div className="product-image">
                <p className="nombre-producto">
                    <strong>Camiseta color: {currentColorText}</strong>
                </p>
                <img
                    className="imagen-product"
                    src={require(`../imagenes/camiseta_${currentImage}.png`)}
                    alt={`Camiseta color ${color}`}
                />
            </div>
            <div className="color-buttons">
                <div className="color-button">
                    <button
                        className={`color-button button-rojo ${color === 'rojo' && 'active'}`}
                        onClick={() => handleColorChange('rojo', 'roja')}
                        >
                    </button>
                    <button
                        className={`color-button button-azul ${color === 'azul' && 'active'}`}
                        onClick={() => handleColorChange('azul', 'azul')}
                        >
                    </button>
                    <button
                        className={`color-button button-blanco ${color === 'blanco' && 'active'}`}
                        onClick={() => handleColorChange('blanco', 'blanca')}
                    >
                    </button>
                    <button
                        className={`color-button button-negro ${color === 'negro' && 'active'}`}
                        onClick={() => handleColorChange('negro', 'negra')}
                    >
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Products;