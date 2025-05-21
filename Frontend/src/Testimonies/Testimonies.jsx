import './Testimonies.css';
import next_icon from '../assets/next-icon.png';
import back_icon from '../assets/back-icon.png';
import User_1 from '../assets/user_1.jpg';
import User_2 from '../assets/User_2.jpg';
import User_3 from '../assets/User_3.jpg';
import User_4 from '../assets/User_4.jpg';
import { useRef } from 'react';

const Testimonies = () => {
    const slider = useRef();
    let tx=0;
    const next_slide = ()=>{
         if(tx > -50){
            tx -= 25
         }
         slider.current.style.transform = `translateX(${tx}%)`
    }
    const Back_slide = ()=>{
        if(tx >= -50){
           if(tx == 0){
            return;
           }else{
            tx += 25
           }
        }
        slider.current.style.transform = `translateX(${tx}%)`
   }
    return (
        <div className="testimonies">
            <img src={next_icon} className="next-icon" alt="Next" onClick={next_slide}/>
            <img src={back_icon} className="back-icon" alt="Back" onClick={Back_slide}/>
            
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_1} alt="User 1" />
                                <div>
                                <h3>Lilian Brian Muhizi</h3>
                                <span>Kinshasa, DRC</span>
                                </div>
                            </div>
                            <p>
                                <i>
                                    "DishUp has made food delivery so convenient! The app is easy to use, offers a great variety of restaurants, 
                                    and ensures fresh and timely deliveries. The real-time tracking keeps me updated, making the experience stress-free."
                                </i>
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_2} alt="User 2" />
                                <div>
                                <h3>Kayiranga Simbi Kelia</h3>
                                <span>California, USA</span>
                                </div> 
                            </div>
                            <p>
                                <i>
                                    "Ordering with DishUp is effortless! The app runs smoothly, deliveries are fast, and customer service is fantastic. 
                                    I love the variety of dishes available, from local favorites to international cuisine."
                                </i>
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_3} alt="User 3" />
                                <div>
                                    <h3>Iribagiza Fanny</h3>
                                    <span>Mombasa, Kenya</span>
                                </div>
                            </div>
                            <p>
                                <i>
                                    "DishUp is a game-changer! The app is user-friendly, and I always find great restaurant options. 
                                    The ordering process is seamless, and my meals arrive fresh and hot every time."
                                </i>
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_4} alt="User 4" />
                                <div>
                                <h3>Cyizere Happy</h3>
                                <span>Harvard University, USA</span>
                                </div>
                            </div>
                            <p>
                                <i>
                                    "What stands out most about DishUp is its excellent customer service! Any issues are quickly resolved, 
                                    and the food quality is always top-notch. I trust my orders will be perfect every time."
                                </i>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonies;
