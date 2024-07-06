import "./features.css";
const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="features">
        <div className="feature">
          <div className="icon">
            <img src="online-test-1.png" alt="online-test-1" />
          </div>
          <div className="feature-text">
            <h2>Learn The Latest Skills</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="exam-1.png" alt="" />
          </div>
          <div className="feature-text">
            <h2>Get Ready For a Career</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="certification-1.png" alt="" />
          </div>
          <div className="feature-text">
            <h2>Earn a Certificate</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
