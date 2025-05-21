import './Navbar.css'
import { useState, useEffect } from "react";
import 'boxicons/css/boxicons.min.css';
import Logo from '../assets/Dishup 1.png'
const Navbar = ()=>{
    const [changeColor, setChangeColor] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 200 ? setChangeColor(true) : setChangeColor(false)
        })
    },[])
    return(
       <nav  className={`navbar-container ${changeColor? 'dark-navbar' : ''}`}>
          <div className="logo">
           <img src={Logo} alt="logo"/>
          </div>
          <div className="links">
            <ul className='links-container'>
                <li>Home</li>
                <li>shop</li>
                <li>Our services</li>
                <li>Contact us</li>
                <li>Help</li>
            </ul>
          </div>
          <button className="btn" id="Reg">
                <i class='bx bxs-user-circle' style={{ fontSize: '25px' }}></i>
            </button>
       </nav>
    );
}
export default Navbar