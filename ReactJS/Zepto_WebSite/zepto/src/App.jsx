import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Components/style.css'
import Hero from './Components/Hero'
import Delivery from './Components/Delivery'
import ProductSlider from './Components/ProductSlider'
import Products from './Components/Products'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Hero />
    <Delivery />
    <ProductSlider />
    <Products />
    <Footer />
    </>
  )
}

export default App