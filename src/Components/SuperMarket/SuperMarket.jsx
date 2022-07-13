import { useState } from 'react';
import '../../styles/super-market.css'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'

// Components & Data
import { products } from '../../data/market-data'


const SuperMarket = () => {
  
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Produce')
  
  const addToCart = (item) => {
    const isItemInCart = cart.some((prod) => prod.id === item.id)
    if (isItemInCart) {
      setCart(cart.map((prod) => prod.id === item.id
        ? { ...prod, quantity: prod.quantity + 1 }
        : prod
      ))
    } else {
      setCart([{ ...item, quantity: 1 }, ...cart])
    }
  }
  
  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory}/>
        <DisplayProducts products={products} productCategory={productCategory} addToCart={addToCart}/>
      </section>

      <Cart cart={cart}/>

    </div>
  )
}

export default SuperMarket