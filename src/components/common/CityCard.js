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
      .get('https://rickandmortyapi.com/api/character/2')
      .then(res => {
        setImage(res.data.image);
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
          <p>
            {city.cityname}, {city.citystate}
          </p>
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
