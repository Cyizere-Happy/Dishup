import './About.css';
import about_img from "../assets/About.jpg";
import play_btn from "../assets/play-icon.png";
import pause_btn from "../assets/pause_icon.png";
import video1 from "../assets/video.mp4";

const About = ({ playStatus, setPlaystatus }) => {
  const aboutContent = (
    <div className="about-right">
      <h3>About us</h3>
      <h2>You will find happiness here</h2>
      <p>
        Craving something delicious? With FlavorDash, your favorite meals are just a tap away! 
        Enjoy piping hot dishes from top-rated restaurants, delivered straight to your door in no time.
        <br />
        Whether it's breakfast, lunch, dinner, or a midnight snack, we're here to satisfy your 
        hunger 24/7. Fast, fresh, and hassle-free—because great food should not wait!
      </p>
      <p>
        We serve freshly crafted dishes with locally sourced ingredients, combining exceptional 
        taste and elegant presentation for an unforgettable dining experience. We are proudly 
        certified for excellence in food safety and quality, ensuring every meal meets the 
        highest standards.
      </p>
      <p>
        <b>Exclusive recipies:</b> Discover a world of culinary inspiration with thousands of 
        recipes at your fingertips, from quick weeknight dinners to gourmet meals and everything 
        in between.
      </p>
    </div>
  );

  return (
    <div className="about">
      <div className="about-left">
        {playStatus ? (
          <video className="background" autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
        ) : (
          <img src={about_img} alt="About Us" className='image' />
        )}
        <img
          src={playStatus ? pause_btn : play_btn}
          onClick={() => setPlaystatus(!playStatus)}
          className="play-icon"
          alt={playStatus ? "Pause" : "Play"}
        />
      </div>
      {aboutContent}
    </div>
  );
};

export default About;