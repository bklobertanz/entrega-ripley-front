import React from 'react';

const GarantiaProducto = props => {
  return( 
    <div>
      <h4>Protege tu producto con Garantía Extendida*</h4>
      <li>
        <label>EXTIENDE TU GARANTIA 1 AÑO</label>
        <input type="radio" value="True"></input>
        <span>
          {props.garantias.Price[0].formattedPriceValue}
        </span>
        /
        <span>
        {props.garantias.Price[1].formattedPriceValue}
        </span>
      </li>
      <p>Descripcion garantía.</p>
    </div>
  )
}
export default GarantiaProducto;