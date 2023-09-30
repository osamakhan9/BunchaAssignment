import React,{ useRef } from 'react'
import './Style.css'
import im1 from '../Svg/im1.png'




const TopNavProducts = () => {

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
	<>
	<div className='TopNavProducts'>
	<div className='prod_nav'>
		<div
		onClick={() => handleScrollToProduct("Produce")}
		 className='toPro'
		>
           <img src={im1} alt="" />
		</div>

		<div
		 onClick={() => handleScrollToProduct("PreparedFoods")}
		className='toPro'
		>
		<img src={im1} alt="" />
		</div>

		<div
		onClick={() => handleScrollToProduct("CannedFoods")}
		className='toPro'
		>
		<img src={im1} alt="" />
		</div>

		<div
			onClick={() => handleScrollToProduct("Bakery")}
			className='toPro'
		>
		<img src={im1} alt="" />
		</div>

		<div
			onClick={() => handleScrollToProduct("Dairy")}
			className='toPro'
		>
		<img src={im1} alt="" />
		</div>
		
	</div>
	</div>
	</>
  )
}

export default TopNavProducts