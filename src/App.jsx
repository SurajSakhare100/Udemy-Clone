import Coursel from "./Component/Coursel"
import Navbar from "./Component/Navbar"
import Product from "./Component/Product"
function App() {

  return (
    <>
    <Navbar/>
    <Coursel num={1}/>
    <Coursel num={2}/>
    </>
  )
}

export default App
