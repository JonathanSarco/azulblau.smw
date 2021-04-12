import React from "react";
import { Link } from "react-router-dom";
import IMAGE_1 from "../../assets/image_1.png";
import IMAGE_2 from "../../assets/image_2.png";
import IMAGE_3 from "../../assets/image_3.png";
import IMAGE_4 from "../../assets/image_4.png";
import "./home.scss";

function Home() {
  return (
    <div className="murals">
      <div className="murals__item large">
        <Link to="/mural/1">
          <img src={IMAGE_1} alt="First" />
        </Link>
      </div>

      <div className="murals__item medium">
        <Link to="/mural/1">
          <img src={IMAGE_2} alt="2nd" />
        </Link>
      </div>

      <div className="murals__item medium">
        <Link to="/mural/1">
          <img src={IMAGE_3} alt="3rd" />
        </Link>
      </div>

      <div className="murals__item large">
        <Link to="/mural/1">
          <img src={IMAGE_4} alt="First" />
        </Link>
      </div>

      <div className="murals__item medium">
        <Link to="/mural/1">
          <img src={IMAGE_2} alt="2nd" />
        </Link>
      </div>

      <div className="murals__item medium">
        <Link to="/mural/1">
          <img src={IMAGE_3} alt="3rd" />
        </Link>
      </div>

      <div className="murals__item large">
        <Link to="/mural/1">
          <img src={IMAGE_1} alt="First" />
        </Link>
      </div>

      <div className="murals__item medium">
        <Link to="/mural/1">
          <img src={IMAGE_2} alt="2nd" />
        </Link>
      </div>

      <div className="murals__item medium">
        <Link to="/mural/1">
          <img src={IMAGE_3} alt="3rd" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
