import "./App.css";
import Login from "./Login/Sign_in";
import React, { useEffect, useState } from "react";
import Product_details from "./Dashbord/Product_details/Product_details";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sign_Up from "./Registration/Sign_up";
import Store from "./Dashbord/Store/Store";
import Checkout from "./Dashbord/Checkout/chekout";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.util";
import Dashbord from "./Dashbord";
function App() {
  const [selectmode, setmode] = useState(false);
  //firebase signin usestate.
  const [Sign_user, set_Sign_user] = useState(null);

  const [users, setUsers] = useState([]);

  const [product_details, select_product] = useState([]);
  const [addcart, setcart] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => {
        return response.json();
      })
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchData();
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userref = await createUserProfileDocument(userAuth);
        userref.onSnapshot(
          (snapshot) => {
            set_Sign_user({ id: snapshot.id, ...snapshot.data() });
          },
          () => {}
        );
      }
      set_Sign_user({ userAuth });

      return () => {
        unsubscribeFromAuth();
        // Anything in here is fired on component unmount.
      };
    });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Dashbord
              setmode={setmode}
              selectmode={selectmode}
              Sign_user={Sign_user}
              product_details={product_details}
              setcart={setcart}
              addcart={addcart}
              setUsers={setUsers}
              users={users}
              select_product={select_product}
              set_Sign_user={set_Sign_user}
            />
          }
        />
        <Route
          exact
          path="/Sign_in"
          element={
            !Sign_user ? <Navigate to="/" /> : <Login Sign_user={Sign_user} />
          }
        />

        <Route exact path="/Sign_Up" element={<Sign_Up />} />
        <Route
          exact
          path="/Store"
          element={
            <Store
              users={users}
              selectmode={selectmode}
              setmode={setmode}
              setcart={setcart}
              addcart={addcart}
              Sign_user={Sign_user}
            />
          }
        />
        <Route
          exact
          path="/product"
          element={
            <Product_details
              product_details={product_details}
              setcart={setcart}
              addcart={addcart}
            />
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            addcart.length == 0 ? (
              <Navigate to="/" />
            ) : (
              <Checkout
                setcart={setcart}
                Sign_user={Sign_user}
                addcart={addcart}
              />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
