import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import classes from './App.module.css';
import UpHeader from './UpHeader';
import Navbar from './Navbar/Navbar';
import Main from './Main';
import Catalog from './Catalog/Catalog';
import Footer from './Footer/Footer';
import DetailProduct from './DetailProduct/DetailProduct';
import Contacts from './Contacts/Contacts';
import { Data } from '../Data'



/**
 *  Компонент App получает props из App.js при помощи 
 *  connect
 */
function App(props) {
  const { products } = props;
  console.info('PROPS: ', products)

  /**
   *  promiseProducts получает аргумент Data из файла с базой товаров.
   *  возвращает Promise с массивом товаров products
   */
  const promiseProducts = (Data) => {
    return new Promise((resolve, reject) => {
      let products = [];
      Data.map((item) => {
        return (
          products.push(item)
        )
      })
      resolve(
        products
      )
    })
  }
  /**
   *  При первом запуске сайта весь массив product товаров
   *  передается с помощью функции setProduct (которая описана
   *  в actions/products.js ) передается в Store. Reducer products
   */
  React.useState(() => {
    const { setProducts } = props;
    promiseProducts(Data).then(result => setProducts(result))
  })


  return (
    <>
      <div
      //className={classes.Main}
      >
        {
          products.map((product, key) => {
            console.log('products')
            console.log(product.model)
          })
        }
        asdfasdf
        {/* <div className={classes.Header}>
          <UpHeader />
        </div>
        <div className={classes.Navbar}>
          <Navbar />
        </div>
        <div className={classes.Content_Rout}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/contacts/adress" component={Contacts} />
            <Route exact path="/:model" component={DetailProduct} />
            <Route exact path="/catalog/all" component={Catalog} />
            <Route exact path="/catalog/all/:model" component={DetailProduct} />
            <Route exact path="/catalog/:cat" component={Catalog} />
            <Route exact path="/catalog/:cat/:type" component={Catalog} />
            <Route exact path="/catalog/:cat/:type/:brand" component={Catalog} />
            <Route exact path="/catalog/:cat/:type/:brand/:model" component={DetailProduct} />
                </Switch>
        </div>
        <Footer /> */}
      </div>
    </>
  );
};
export default App;
