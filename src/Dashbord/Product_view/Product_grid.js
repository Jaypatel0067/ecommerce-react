import React from 'react';
import './product_grid.css'
import Title from '../../Component/Title'
import {
  Link
  
} from 'react-router-dom';
 
 
function Product_grid(props) {
 
  return ( 
    <>
    <Title title={'Hot selling Product'}/>
    <section className='product_grid '>
     
       
      <div className="bg-white ">
      <div className="max-w-2xl mx-auto py-16 px-4 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          
          {props.users.filter((product,index)=>index < 8).map((product) => (
          
            <div key={product.id} className="group relative product_card  border-2	p-2 rounded-md">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image} 
                  alt={product.image}
                  className="w-full rounded-md h-full object-center object-cover lg:w-full lg:h-full"
                />
                 
              </div>
              <div className="mt-4 flex flex-col	 justify-between ">
                <div>
                  <h3 className="text-sm text-gray-700">
                     
                      
                     <button className='' onClick={() => props.select_product([product])} > <Link to="/product"> {product.title.toUpperCase().slice(0, 15)}...</Link></button> - {product.category.toUpperCase().slice(0, 15)}...
                     
                  </h3>
                  <p className="mt-1 text-justify text-sm  text-gray-500">{product.description.slice(0, 50)}...</p>
                </div>
                <p className="text-right ">${product.price}</p>
              </div>
              <div className="product_btn"><input type="button" className='inline-block w-full cursor-pointer	text-center bg-gray-800 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-600 hover:border-2 cart-btn'  onClick={() => props.setcart(prev => ([...prev, product]))}  value="Add to cart"></input></div>
            </div>
          ))}
           

        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Product_grid