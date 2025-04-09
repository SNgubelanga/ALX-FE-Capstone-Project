import './App.css'
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter } from "react-router-dom";
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
    <div className="main__wrapper">
      <SideBar />
      <NavBar/>
      <div className="main__content__section">
        <div className="section__content">
          <AnimatedRoutes/>
        </div>
      </div>
      <Footer/>
    </div>
  </BrowserRouter>
  )
}

export default App
