import './Gallery.css';
import photo_1 from '../assets/Delicious.jpg';
import photo_2 from '../assets/ChinaFood.jpg';
import photo_3 from '../assets/dessert.jpeg';
import photo_4 from '../assets/Desert.jpg';
import darkArrow from '../assets/dark-arrow.png';

const Gallery = () => {
    return (
        <div className="delicous-gourn">
            <div className="gallery">
                <div className="image-container">
                    <img src={photo_1} alt="Food 1" />
                    <div className="content"><p>A burst of rich flavors in every bite.</p></div>
                </div>
                <div className="image-container">
                    <img src={photo_2} alt="Food 2" />
                    <div className="content"><p>Experience the authentic taste of Asia.</p></div>
                </div>
                <div className="image-container">
                    <img src={photo_3} alt="Food 3" />
                    <div className="content"><p>Sweet, creamy, and absolutely irresistible.</p></div>
                </div>
                <div className="image-container">
                    <img src={photo_4} alt="Food 4" />
                    <div className="content"><p>A treat so good, you’ll crave more.</p></div>
                </div>
            </div>
            <button className='btn'><img src={darkArrow} alt="Arrow" /></button>
        </div>
    );
};

export default Gallery;
