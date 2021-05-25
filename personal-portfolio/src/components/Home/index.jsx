import { Link } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Muhammed Ashfaq</p>
          <p>Full Stack Software Developer</p>
        </h1>
        <Link to="/about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/ashfaq.JPG`}
          alt="person "
        />
      </div>
    </div>
  );
};

export default Home;