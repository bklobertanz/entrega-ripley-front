import React from 'react';

const listadoImagenes = props =>{
  return(
    <div>
      <ul>
         // eslint-disable-next-line array-callback-return
         {props.imagenes.map((imagen) => {
           <li>
             <img src={imagen} alt="imagen-product"></img>
           </li>
         })}
      </ul>
    </div>
  ) 
}
export default listadoImagenes;