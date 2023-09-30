
import React, { useRef } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const scrollbarRef = useRef(null);

  const handleScrollToProduct = (product) => {
    const productElement = document.getElementById(product);
    if (productElement && scrollbarRef.current) {
      const offset = 80;
      const elementPosition = productElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      
      scrollbarRef.current.scrollTop = offsetPosition;
    }
  };

  return (
    <div className="sidebar"  >
      <div className="scrollbar" ref={scrollbarRef}>
        <div
          onClick={() => handleScrollToProduct("Produce")}
          className="product"
        >
          Produce
        </div>
        <div
          onClick={() => handleScrollToProduct("PreparedFoods")}
          className="product"
        >
          Prepared Foods
        </div>
        <div
          onClick={() => handleScrollToProduct("CannedFoods")}
          className="product"
        >
          Canned Foods
        </div>
        <div
          onClick={() => handleScrollToProduct("Bakery")}
          className="product"
        >
          Bakery
        </div>
        <div onClick={() => handleScrollToProduct("Dairy")} className="product">
          Dairy
        </div>
        <div
          onClick={() => handleScrollToProduct("FrozenMeat")}
          className="product"
        >
          Frozen Meat
        </div>
        <div
          onClick={() => handleScrollToProduct("MeatAndSeafood")}
          className="product"
        >
          Meat and Seafood
        </div>
        <div
          onClick={() => handleScrollToProduct("DairyAndEggs")}
          className="product"
        >
          Dairy & Eggs
        </div>
        <div
          onClick={() => handleScrollToProduct("PreparedFoods2")}
          className="product"
        >
          Prepared Foods
        </div>
        <div
          onClick={() => handleScrollToProduct("CannedFoodsAndSoups")}
          className="product"
        >
          Canned Foods and Soups
        </div>
        <div
          onClick={() => handleScrollToProduct("Produce")}
          className="product"
        >
          Produce
        </div>
        <div
          onClick={() => handleScrollToProduct("PreparedFoods")}
          className="product"
        >
          Prepared Foods
        </div>
        <div
          onClick={() => handleScrollToProduct("CannedFoods")}
          className="product"
        >
          Canned Foods
        </div>
        <div
          onClick={() => handleScrollToProduct("Bakery")}
          className="product"
        >
          Bakery
        </div>
        <div onClick={() => handleScrollToProduct("Dairy")} className="product">
          Dairy
        </div>
        <div
          onClick={() => handleScrollToProduct("FrozenMeat")}
          className="product"
        >
          Frozen Meat
        </div>
        <div
          onClick={() => handleScrollToProduct("MeatAndSeafood")}
          className="product"
        >
          Meat and Seafood
        </div>
        <div
          onClick={() => handleScrollToProduct("DairyAndEggs")}
          className="product"
        >
          Dairy & Eggs
        </div>
        <div
          onClick={() => handleScrollToProduct("PreparedFoods2")}
          className="product"
        >
          Prepared Foods
        </div>
        <div
          onClick={() => handleScrollToProduct("CannedFoodsAndSoups")}
          className="product"
        >
          Canned Foods and Soups
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
