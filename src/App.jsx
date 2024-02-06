import Choice from "./Component/Choice"
import Coursel from "./Component/Coursel"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Product from "./Component/Product"
function App() {

  return (
    <>
    <Navbar/>
    <Coursel num={1}/>
    <Coursel num={2}/>
    <Choice/>
    <Footer/>
    </>
  )
}

export default App
