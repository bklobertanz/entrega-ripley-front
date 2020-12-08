import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Producto from '../Producto/Producto';
import GarantiaProducto from '../GarantiaProducto/GarantiaProducto';

//obtener info del producto desde el back
const Ficha = () => {
    // eslint-disable-next-line no-unused-vars
    const [producto, setProduct] = useState({});

    useEffect(() => {
      const endPoint = "http://localhost:8080/api/product";
      axios.get(endPoint).then(response =>{
        setProduct(response.data.product);
      }).catch(err =>{
        console.log(err);
      })
    }, [])
    return (<div>
              <img src={"http:" + producto.fullImage} alt="imagenProducto"></img>
              <Producto nombre={producto.name} descripcion={producto.shortDescription} precios={producto.prices} />
              <GarantiaProducto garantias={producto.warranties[0]} />
              <button>Favorito</button>
              <button>Agregar a la bolsa</button>
            </div>)
}
export default Ficha;