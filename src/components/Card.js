import email from '../Images/Mail.png';
import linkedinlogo from '../Images/linkedinlogo.webp';
import Footer from './Footer';
import '../styles.css';

const Card = () => {
  return (
    <div className="card-cnt">
      <div className="img-cnt"></div>
      <h1>Jasmin Villatoro</h1>
      <h4>Frontend Developer</h4>
      <div className="btn-cnt">
        <a href="mailto:jasminvilla321@gmail.com? subject=message from online card ">
          <button className="contact-btn">
            <img src={email} alt="email icon" />
            <p className="btn-txt">Email</p>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/jasmin-villatoro/">
          <button className="contact-btn blue">
            <img
              className="linkedin-logo"
              src={linkedinlogo}
              alt="linkedin icon"
            />
            <p className="btn-txt">LinkedIn</p>
          </button>
        </a>
      </div>
      <main>
        <h3>About</h3>
        <p>
          I am a Frontend Developer who loves to create beautiful User
          Interfaces. I am a friendly and humble person. I'm currently expanding
          my knowledge of Html, Css, Javascript, and React by building personal
          projects for my portfolio.
        </p>
        <h3>Interests</h3>
        <p>
          I like a little bit of everything, especially if it piques my
          curiosity. Reading, Technology, Movies, Animation, Cultures,
          Documentaries, Outdoors, and most importantly Food.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Card;
