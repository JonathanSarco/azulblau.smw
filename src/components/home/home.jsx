import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { getAllPhotos } from "../../services/storage";
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
    const urls = await getAllPhotos();
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

      return (
        <div key={index} className={"murals__item " + size}>
          {/* <Link to="/mural/1"> */}
          <img src={url} alt={url} />
          {/* </Link> */}
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
