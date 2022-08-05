import React from 'react'
import './product_slider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from '../../Component/Title'

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
 
function product_slider(props) {
  
  return (
    <section>
      
      <Title title={`Today's deal`}/>
    <Carousel responsive={responsive}  swipeable={true}
 
draggable={true}
  showDots={false}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}>
    
    {props.users.map((product) => (
       
         <div className='group relative product_card  border-2	p-2 rounded-md' key={product.id}><img src={product.image} alt={product.title} className='slider_img bg-white dark:bg-slate-900 rounded-lg   ring-1 ring-slate-900/5 '></img>
         <div className='row_item'><div className="product_price w-full	inline-block text-center bg-gray-800  border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-700 hover:border-2 transition-all	">${product.price}.00</div>
         <div className="product_btn"><input type="button" className='inline-block w-full	text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700 cart-btn' onClick={() => props.setcart(prev => ([...prev, product]))} value="Add to cart"></input></div>
         </div>
         </div>
    
    ))} 
   
</Carousel>
</section>
  )
}

export default product_slider