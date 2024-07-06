import Features from "../Features/Features";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-banner">
      <header>
        <div className="logo">
          <img src="logo.png" alt="logo" />
          Book Store
        </div>
        <div className="right-div">
          <nav>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Courses</a>
            <a href="#">Our Service</a>
            <a href="#">Contact us</a>
          </nav>
          <a href="#" className="sign-in">
            Sign in
          </a>
        </div>
      </header>
      <section className="hero">
        <div className="hero-text">
          <h1>
            The <span>Smart</span> <br /> Choice For <span>Future</span>
          </h1>
          <p>
            Elearn is a global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush
            the...
          </p>
          <div className="search">
            <input type="text" placeholder="Search for a location..." />
            <button>Continue</button>
          </div>
        </div>
        <img src="banner-img.png" alt="Hero Image" className="hero-image" />
      </section>
      <Features />
    </div>
  );
};

export default Header;
