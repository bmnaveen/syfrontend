
import './App.css'
import {Routes,Route} from "react-router-dom"
import SignIn from "./components/signin.jsx"
import SignUp from "./components/signup.jsx"
import Home from "./components/home.jsx"
import {useNavigate} from "react-router-dom"
import Products from './components/products'
import Allproducts from './components/allproducts'
function App() {
  const navigate=useNavigate()

  const routeHost=(x)=>{
    if(x.target.id=="home") return navigate(`/`)
return navigate(`/${x.target.id}`)
  }

  return (
    <div className="App">
      <nav className="top-navbar"><div><button  onClick={routeHost} id='home'>Home</button></div><div><button  onClick={routeHost} id='products'>Products</button></div><div><button  onClick={routeHost} id='addproduct'>Add product</button></div><div><button  onClick={routeHost} id='signup'>SignUp</button><button onClick={routeHost} id='signin'>SignIn</button></div></nav>
      <Routes>
      <Route path='/products' element={<Allproducts></Allproducts>}/> 
      <Route path='/addproduct' element={<Products></Products>}/> 
        <Route path='/signin' element={<SignIn></SignIn>}/> 
         <Route path='/signup' element={<SignUp></SignUp>}/>
           <Route path='/' element={<Home></Home>}/>
      </Routes>
    </div>
  );
}

export default App;
