import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Navigate } from "react-router-dom";

function Stripebutton({price}) {
  const stripeprice=price*100;
  function handleclick(){
    <Navigate to="/"/>
  }
  const onToken = token=>{
    console.log(token)
    alert('Payment successful')
    handleclick()
  }
  return (
    <StripeCheckout
    label='Pay Now'
    name='E-commerce Website'
     
    amount={stripeprice}
    token={onToken}
    stripeKey="pk_test_51LQc1QCemDWQNWoNrPue86M8aUgmAqDuzT62Gl2sQT8A586xgHQZ5W0QI64DOuvOmMcz1cYI7BcGCdw6gqtiIGad00KeVRuEwm"
  />
  
  )
}

export default Stripebutton