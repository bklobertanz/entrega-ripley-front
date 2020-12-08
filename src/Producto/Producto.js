import React from 'react';

const Producto = props => {
  return(
    <div>
      <header>
        <h1>{props.nombre}</h1>
        <h3>{props.descripcion}</h3>
      </header>
      <div>
        <p>Precio normal: {props.precios.formattedListPrice}</p>
        <p>Precio internet: {props.precios.formattedOfferPrice}</p>
        <p>Precio tarjeta ripley: {props.precios.formattedCardPrice}</p>
        <p>Con tarjeta Ripley acumulas {props.precios.ripleyPuntos} RipleyPuntos</p>
      </div>
    </div>
  )
}

export default Producto;