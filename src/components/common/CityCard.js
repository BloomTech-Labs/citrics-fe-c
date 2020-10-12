import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Collapse } from 'antd';
import { CloseOutlined, HeartOutlined } from '@ant-design/icons';
import '../../styles/style.less';
import axios from 'axios';

function CityCard({ city }) {
  const { Meta } = Card;
  const { Panel } = Collapse;
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();
  const openCard = () => setOpen(!open);

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
            <HeartOutlined />
            <CloseOutlined style={{ marginLeft: '.5rem' }} />
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
