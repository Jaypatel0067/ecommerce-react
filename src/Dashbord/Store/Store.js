import React from "react";
import Product_card from "./Product_card";
import "./store.css";
import Cartt from "../Cart/Product_cart";

import Header from "../Header/Header";
function Store(props) {
  let unique = props.users;
  const key = "category";
  const arrayUniqueByKey = [
    ...new Map(unique.map((item) => [item[key], item])).values(),
  ];

  return (
    <>
      <section>
        <Header
          setmode={props.setmode}
          addcart={props.addcart}
          Sign_user={props.Sign_user}
        />
        <Cartt
          selectmode={props.selectmode}
          setmode={props.setmode}
          setcart={props.setcart}
          addcart={props.addcart}
        />
        <h1 className="section_title text-4xl text-center  ">Store</h1>

        {arrayUniqueByKey.map((product) => (
          <div key={product.key}>
            <p className="  section_title text-2xl cursor-pointer  bg-gray-800 h-10 flex items-center justify-left p-8 text-white  ">
              {product.category.toUpperCase()}
            </p>
            <Product_card
              key={product.key}
              unique={unique}
              setcart={props.setcart}
              cate={product.category}
            />
          </div>
        ))}
      </section>
    </>
  );
}

export default Store;
