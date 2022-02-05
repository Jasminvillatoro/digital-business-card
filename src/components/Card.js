import email from '../Images/Mail.png';
import linkedin from '../Images/linkedin.png';
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
            <img src={linkedin} alt="linkedin icon" />
            <p className="btn-txt">LinkedIn</p>
          </button>
        </a>
      </div>
      <main>
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ea dignissimos nam, minima reiciendis velit excepturi vero maxime
          exercitationem? Soluta ullam saepe ex deleniti maiores voluptas
          recusandae, veritatis quod quia. Eaque esse voluptatum voluptatem
          optio ipsa molestiae accusantium magnam fugiat temporibus sapiente
          vero atur quibusdam ipsa fugit esse,
        </p>
        <h3>Interests</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          blanditiis saepe autem, sed alias recusandae, aspernatur numquam quos
          consequuntur eos neque quo veniam vero nesciunt impedit laboriosam,
          modi ex repudiandae? Voluptatibus libero corporis neque voluptas quis,
          facilis aliquid fugiat nesciunt, quia deserunt ratione cumque ea v
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Card;
