import React from "react";
import IMG from "../../images/img01.jpg";

export const  ProductoItem = ({
    id,
    title,
    price,
    image,
    category,
    
}) => {


    return (
        <div className="producto">
        <a href="#">
          <div className="producto__img">
            <img src={image.defaul} alt={title} />
          </div>
        </a>
        <div className="producto__footer">
          <h2> {title} </h2>
          <p> {category} </p>
          <p className="price">${price}</p>
        </div>
        <div className="buttom">
          <button className="btn">Añadir al carrito</button>
          <div>
            <a href="#" className="btn">
              Vista
            </a>
          </div>
        </div>
      </div>
    )
}

export default ProductoItem