import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMainPhotos } from "../../services/storage";
import Backdrop from "../UI/backdrop/backdrop";
import Spinner from "../UI/spinner/spinner";
import "./home.scss";

function Home() {
  const [urlPhotos, setUrlPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true)
    const urls = await getAllMainPhotos();
    setUrlPhotos(urls);
    setLoading(false)
  }

  let murals = (
    <>
      <Backdrop show={true}/>
      <Spinner />
    </>
  );

  if (!loading) {
    murals = urlPhotos.map((url, index) => {
      let size = index % 3 === 0 ? 'large' : 'medium';
      let urlToImage = url.split('main%2F').pop().split('.jpg')[0];
      return (
        <div key={index} className={`murals__item ${size}`}>
          <Link to={`/mural/${urlToImage}`}>
            <img src={url} alt={urlToImage} />
          </Link>
        </div>
      )
    })
  }

  return (
    <div className="murals">
      { murals}
    </div>
  );
}

export default Home;
