import Choice from "./Component/Choice"
import Coursel from "./Component/Coursel"
import Footer from "./Component/Footer"
import HeroInstructor from "./Component/HeroInstructor"
import Navbar from "./Component/Navbar"
import Product from "./Component/Product"
function App() {

  return (
    <>
    <Navbar/>
    <Coursel num={1}/>
    <Coursel num={2}/>
    <Choice/>
    <HeroInstructor/>
    <Footer/>
    </>
  )
}

export default App
