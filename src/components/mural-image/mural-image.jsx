import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getDataFromArtistId } from "../../services/database";
import { getAllPhotosByArtistsId } from '../../services/storage';
import Backdrop from "../UI/backdrop/backdrop";
import Spinner from "../UI/spinner/spinner";
import {
  DATE,
  TAGS
} from './constants';

import "./mural-image.scss";

function MuralImage() {
  let { id } = useParams();

  const [urlPhotos, setUrlPhotos] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      
      const urls = await getAllPhotosByArtistsId(id).catch(err => console.log('Error on FetchAllPhotos: ', err));
      const responseData = await getDataFromArtistId('george_rose').catch(err => console.log('Error on FetchDescription: ', err));
      setUrlPhotos(urls);
      setImageData(responseData);
      
      setLoading(false);
    }
    fetchData();
  }, [id]);

  let murals = (
    <>
      <Backdrop show={true} />
      <Spinner />
    </>
  );

  if (!loading) {
    murals = (
      urlPhotos.map(url => (
        <div className="mural-image__item" key={url}>
          <img src={url} alt={url} />
        </div>
      ))
    )
  }

  return (
    <div className="single-mural-container">
      <div className="mural-image">
        {murals}
      </div>

      { imageData ?
        (<div className="mural-text">
          <div className="mural-text__date">
            <h2>{DATE}</h2>
            <span>{imageData ? imageData.date : ''}</span>
          </div>

          <div className="mural-text__tags">
            <h2>{TAGS}</h2>
            <span>{imageData ? imageData.tags : ''}</span>
          </div>

          <div className="mural-text__main">
            <h1>{imageData ? imageData.title : ''}</h1>
            <p>{imageData ? imageData.titleDescription : ''}
            </p>
          </div>

          <div className="mural-text__extra">
            <h2 className="mural-text__extra__title">{imageData ? imageData.subtitle : ''}</h2>
            <p>{imageData ? imageData.subtitleDescription : ''}
            </p>
          </div>
        </div>)
        : ''
      }

    </div>

  );
}

export default MuralImage;
