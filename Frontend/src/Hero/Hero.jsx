import './Hero.css'
import darkArrow from '../assets/dark-arrow.png'
const Hero = ()=>{
    return(
      <div className="Hero contain">
           <div className="hero-text">
            <p>Welcome to DishUp, your go-to food delivery app<br></br> for a convenient and delightful dining<br></br>experience.</p>
            <button className='btn'>Explore more <img src={darkArrow}/></button>
           </div>
      </div>
    )
}
export default Hero;