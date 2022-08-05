import React from 'react'
import './store.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
 
function Product_card({unique,cate,setcart}) {
   
  return (
    <Carousel responsive={responsive}  swipeable={true}
    
       
 
 draggable={true}
   showDots={false}
   ssr={true} // means to render carousel on server-side.
   infinite={true}
   autoPlay={false}>  
     
    {unique.filter((product)=>product.category === cate).filter((product,index)=>index < 4).map((product) => (
        
        <div key={product.id} className="group relative  border-2	p-2 ">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={product.image} alt={product.title} className='w-full h-full object-center object-cover lg:w-full lg:h-full'></img>
          
          </div>
          <div className="mt-4 flex flex-col	 justify-between ">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.category}>
                      
                     <b className=''> {product.title.toUpperCase().slice(0, 20)}...</b> 
                     <b className=''>{product.category.toUpperCase().slice(0, 15)}...</b>
                    
                    </a>
                  </h3>
                  <p className="mt-1 text-justify text-sm  text-gray-500">{product.description.slice(0, 50)}...</p>
                </div>
                <p className=" text-right">${product.price}</p>
              </div>
              <div className="product_btn"><input type="button" className='inline-block w-full cursor-pointer	text-center bg-gray-800 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-600 cart-btn' onClick={() => setcart(prev => ([...prev, product]))}    value="Add to cart"></input></div>
            </div>
          
      ))} 
  
 
    </Carousel>
)  
  }

export default Product_card