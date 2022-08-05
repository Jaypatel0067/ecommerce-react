import React from "react";
import "./Chekout.css";
import { Link } from "react-router-dom";
import Stripebutton from './stripe_button/Stripebutton';
function chekout({ addcart,Sign_user,setcart }) {
  let shiping;
let Tax ;
let order_total ;
  let sr = 0;
  const sum = addcart.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);
  
  if(sum == 0){
shiping = 0;Tax=0;order_total=0;
  }else if(sum>100){
    shiping=0;Tax=5;order_total=(sum+(sum*Tax/100)+shiping).toFixed(2);
  }else{
    shiping=10;Tax=5;order_total=(sum+(sum*Tax/100)+shiping).toFixed(2);
  }
  console.log(Sign_user.userAuth)
  return (
    <>
    <div class="px-4 py-5 sm:px-6 ">
          <h3 class="  leading-6 text-3xl	m-4 text-center font-medium text-gray-900">
            Thanks for Ordering
          </h3>
          {sum<100?<p class="text-gray-300 text-center p-2 overflow-hidden  bg-zinc-900	">Add item of more then {Math.round(100-sum).toFixed(2)} for free Shipping</p>:null}
         
          <p class="mt-1 max-w-2xl text-xl text-gray-500">Order Summaries</p>
        </div>
    <div className="container">
      
      <div className="row">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        
        <div class="border-t border-gray-200"></div>
        <div class="px-4 py-5 sm:px-6">
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                
                {addcart.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.image}
                        alt={product.image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <p>{product.title} </p>
                          </h3>
                          <p className="ml-4">{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                       
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {product.quantity}</p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => {
                              setcart((prev) =>
                                prev.filter((pre) => {
                                  return pre.id !== product.id;
                                })
                              );
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      <div className="row">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Name : {Sign_user.displayName}</p>
           
            <p>Email: {Sign_user.email}</p>
          </div>
        <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Addess :</p>
            <p>$262.00</p>
          </div>
        </div>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${(sum).toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Shipping</p>
            <p>{shiping===0?<p>free Shipping</p>:`$${shiping}`}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Tax</p>
            <p>{Tax}%</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Order Total</p>
            <p>${order_total}</p>
          </div>
         
          <div className="mt-6">
            
            {<Stripebutton price={order_total}/>}
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <Link to="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
     
        </div>
      
    </div>
   
    </>
  );
}

export default chekout;
