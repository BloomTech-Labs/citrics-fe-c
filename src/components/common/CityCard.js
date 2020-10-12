import React, { useState } from 'react';
import { Card } from 'antd';
import { Collapse } from 'antd';
import { CloseOutlined, HeartOutlined } from '@ant-design/icons';
import '../../styles/style.less';

function CityCard({ city }) {
  const { Meta } = Card;
  const { Panel } = Collapse;
  const [open, setOpen] = useState(false);
  const openCard = () => setOpen(!open);

  return (
    <div className="city-card-wrapper">
      <div
        style={{ background: city.color }}
        className={open ? 'openCard' : 'closeCard'}
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
        <ul>
          <li>Population Density Rating: {city.populationdensityrating}</li>
          <li> Average Age: {city.averageage}</li>
          <li> Average Household Income: {city.averagehouseholdincome}</li>
          <li> Average Temperature: {city.averagetemperature}</li>
        </ul>
      </div>
    </div>
  );
}

export default CityCard;
