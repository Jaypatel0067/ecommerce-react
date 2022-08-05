import Footer from "./Dashbord/Footer/footer";
import Newslatter from "./Dashbord/Newslatter/newslatter";
import Delivery from "./Dashbord/delivery_time/delivery";
import Banner from "./Dashbord/Banner/banner";
import Header from "./Dashbord/Header/Header";
import Slider from "./Dashbord/Main_Slider/main_slider";
import Product_grid from "./Dashbord/Product_view/Product_grid";
import Product_slider from "./Dashbord/product_slider/product_slider";
import Cartt from "./Dashbord/Cart/Product_cart";

function Dashbord(props) {
  
  return (
    <>
      <Cartt
        selectmode={props.selectmode}
        setmode={props.setmode}
        setcart={props.setcart}
        addcart={props.addcart}
      />
      <Header
        setmode={props.setmode}
        addcart={props.addcart}
        Sign_user={props.Sign_user}
      />
      <Slider />
      <Product_grid
        users={props.users}
        setcart={props.setcart}
        addcart={props.addcart}
        select_product={props.select_product}
      />
      <Product_slider
        users={props.users}
        setcart={props.setcart}
        addcart={props.addcart}
      />
      <Banner />
      <Delivery />
      <Newslatter />
      <Footer />
    </>
  );
}

export default Dashbord;
