import React, { useState, useEffect } from 'react';
import { CloseOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import '../../styles/style.less';
import axios from 'axios';

import useVisibilityToggler from '../../hooks/useVisibilityToggler';

import { cardContainerActs } from '../../state/actions';
import { useDispatch } from 'react-redux';

function CityCard({ city }) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();
  const [heartIcon, toggleIcon] = useVisibilityToggler(
    <HeartOutlined />,
    <HeartFilled />,
    true
  );

  const dispatch = useDispatch();

  const { removeCity } = cardContainerActs;

  const handleRemove = () => dispatch(removeCity(city.cityid));

  const openCard = () => setOpen(!open);

  const toggleOnClick = e => {
    e.stopPropagation();
    toggleIcon();
  };

  useEffect(() => {
    axios
      .get(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURI(
          city.citynamestate
        )}`
      )
      .then(res => {
        axios
          .get(
            `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&titles=${encodeURI(
              res.data.query.search[0].title
            )}`
          )
          .then(res2 => {
            setImage(res2.data.query.pages[0].original.source);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="city-card-wrapper">
      <div
        style={{ background: city.color }}
        className={open ? 'openCard' : 'closeCardDesktop'}
        onClick={openCard}
      >
        <div className="card-header-container">
          <p>{city.citynamestate}</p>
          <div className="card-icons">
            <div onClick={toggleOnClick}>{heartIcon}</div>
            <div onClick={handleRemove}>
              <CloseOutlined style={{ marginLeft: '.5rem' }} />
            </div>
          </div>
        </div>
        <div className="city-card-body-wrapper">
          <img src={image} alt="city" />
          <ul>
            <li>Population Density Rating: {city.populationdensityrating}</li>
            <li> Average Age: {city.averageage}</li>
            <li> Average Household Income: {city.averagehouseholdincome}</li>
            <li> Average Temperature: {city.averagetemperature}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
