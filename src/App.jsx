import React from 'react'

import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import Main from "./components/Main";
import JsxRules from "./components/JsxRules";
import ProductInfo from "./components/ProductInfo";
import Numbers from "./components/Numbers";
import UserInfo from "./components/UserInfo";
import ProductList from "./components/ProductList";
import Mutembei from "./components/Mutembei";
import Product from './components/Product';
import Card from './components/Card';
import Item from './components/Item';
import Cart from './components/Cart';
import Weather from './components/Weather';
import UserStatus from './components/UserStatus';


const App = () => {


  return(

   
   <div>
      <Header />
      <Greet />
      <Main />
      <JsxRules />
      <ProductInfo />
      <ProductList /> 
      <Numbers />
      <UserInfo />
      <Mutembei />
      <Product />
      <Card >
            <h5>This is my first Card.</h5>
            <p>I am thrilled to build more!!</p>

      </Card>
      <Item >
                 <h5>This is my first Item.</h5>
                 <p>I am thrilled to build more!!</p>
      </Item> 
      <Cart />
      < Weather />
      <UserStatus loggedIn={true} isAdmin={false} >
        
        
      </UserStatus>

     
      <Footer />
      
    </div>
   );
};



export default App;