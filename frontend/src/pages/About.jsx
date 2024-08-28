import "../css/about.css";
import Navbar from "../components/Navbar";
import HamburgerMenu from "../components/HamburgerMenu";

const About = () => {
  return (
    <div className="about-container">
      <Navbar h1="About" className="about-navbar">
        <HamburgerMenu />
      </Navbar>
      <div className="about-text-container">
        <p className="about-p">
          Hello and thank you for visiting. TCG vault is an application for
          trading card collectors such as yourself. With so many cards in your
          collection, it is difficult to keep track of them all. You may ask
          yourself, how many copies of each card do I have? Are any of my cards
          currently sent for grading? What is the value of my entire collection?
          I hope that this application can help you keep track of all the cards
          in your possession and make card collecting a more enjoyable hobby.
        </p>
      </div>
    </div>
  );
};

export default About;
