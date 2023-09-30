import React, { useState } from "react";
import "./Style.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/actions";


const Listofproducts = ({ title }) => {
  const [iconState, setIconState] = useState({});

  const toggleIcon = (index) => {
    setIconState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };


  const [productData, setproductData] = useState([])

  fetch('https://bunchabackend.onrender.com/data').then((res) => {
    return res.json();
  }).then((res) => {
    // console.log(res)
    setproductData(res)
  }).catch((err) => {
    console.log(err)
  })



  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const removeFromCartHandler = (product) => {
    dispatch(removeFromCart({ productId: product.id }));
  };

  return (

    <>
   
    <div className="produce">
      <div className="produce-title">
        <h1>{title}</h1>
        <img src="/svgs/arrow.svg" alt="Share Icon" />
      </div>
      <div className="product-cards-container">
        {productData.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-container">
              <img
                src={product.image}
                alt={`Product ${index}`}
                className="product-image"
              />
              <div
                className="add-to-cart-icon"
                onClick={() => toggleIcon(index)}
              >
                {iconState[index] ? (
                  <img
                    src="/svgs/minusIcon.svg"
                    alt="Minus Icon"
                    onClick={() => removeFromCartHandler(product)}
                  />
                ) : (
                  <img
                    src="/svgs/plusicon.svg"
                    alt="Plus Icon"
                    onClick={() => addToCartHandler(product)}
                  />
                )}
              </div>
            </div>
            <h2>{product.price}</h2>
            <h3>{product.name}</h3>
             <p>{product.data1}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Listofproducts;



