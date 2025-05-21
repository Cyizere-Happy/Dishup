import './service.css';
import dessert from '../assets/Drinks.jpg';
import FastFood from '../assets/FastFood.jpg';
import Delivery from '../assets/Delivery.jpg';
import Drinks from '../assets/Drinks.png';
import FoodDelivery from '../assets/Food-Delivery.png';
import Food from '../assets/Food.png'

const Service = () => {
    return (
        
            <div className='container'>
                <div className="service">
                    <img src={Delivery} alt="Dessert" />
                    <div className="caption">
                        <img src={FoodDelivery}/>
                        <p>Fast Delivery</p>
                    </div>
                </div>
                <div className="service">
                    <img src={FastFood} alt="Fast Food" />
                    <div className="caption">
                        <img src={Food}/>
                        <p>Delicious Gournments</p>
                    </div>
                </div>
                <div className="service">
                    <img src={dessert} alt="Delivery" />
                    <div className="caption">
                        <img src={Drinks}/>
                        <p>Refreshing Drinks</p>
                    </div>
                </div>
            </div>
    );
};

export default Service;
