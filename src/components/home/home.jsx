import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMAGE_1 from "../../assets/image_1.png";
import IMAGE_2 from "../../assets/image_2.png";
import IMAGE_3 from "../../assets/image_3.png";
import IMAGE_4 from "../../assets/image_4.png";
import { getAllPhotos } from "../../services/storage";
import "./home.scss";

function Home() {
  const [urlPhotos, setUrlPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true)
    const urls = await getAllPhotos();
    setUrlPhotos(urls);
    setLoading(false)
  }

  let murals = <p>Empty</p>;
  
  if (!loading) {
    console.log('inside')
    murals = urlPhotos.map((url, index) => {
      let size = 'medium';
      if (index % 3 === 0) {
        size = 'large';
      }
      
      url = url.split('?');
      console.log('here', index, url)
      return (
        <div key={index} className="murals__item large">
          {/* <Link to="/mural/1"> */}
          <img src={url[0]} alt={url} />
          {/* </Link> */}
        </div>
      )
    })
  }




  return (
    <div className="murals">
      { murals}
      {/* <div className="murals__item large">
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
      </div> */}
    </div>
  );
}

export default Home;
