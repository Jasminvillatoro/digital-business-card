import '../styles.css';
import twitter from '../Images/Twitter Icon.png';
import facebook from '../Images/Facebook Icon.png';
import instagram from '../Images/Instagram Icon.png';
import github from '../Images/GitHub Icon.png';
const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://twitter.com/Jas_codes">
          <img src={twitter} alt="twitter icon" />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/jasmin.villatoro.3">
          <img src={facebook} alt="facebook icon" />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/jasminvillatoro99/">
          <img src={instagram} alt="instagram icon" />
        </a>
      </div>
      <div>
        <a href="https://github.com/Jasminvillatoro">
          <img src={github} alt="github icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
