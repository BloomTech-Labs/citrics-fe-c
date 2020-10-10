import React, { useState } from 'react';
import { Card } from 'antd';
import { Collapse } from 'antd';
import { CloseOutlined, HeartOutlined } from '@ant-design/icons';

function CityCard({
  cityImage,
  cityAlt,
  cityName,
  cityState,
  cityColor,
  cityAttr_1,
  cityAttr_2,
  cityAttr_3,
  cityAttr_4,
}) {
  const { Meta } = Card;
  const { Panel } = Collapse;
  const [open, setOpen] = useState(false);

  function openCard() {
    setOpen(!open);
  }

  let card_class = open ? 'openCard' : 'closeCard';

  return (
    <div className="city-card-wrapper">
      <div
        style={{ background: { cityColor } }}
        className={card_class}
        onClick={openCard}
      >
        <div className="card-header-container">
          <p>
            {cityName}, {cityState}
          </p>
          <div className="card-icons">
            <HeartOutlined />
            <CloseOutlined style={{ marginLeft: '.5rem' }} />
          </div>
        </div>
        <ul>
          <li>Population Density Rating: {cityAttr_1}</li>
          <li> Average Age: {cityAttr_2}</li>
          <li> Average Household Income: {cityAttr_3}</li>
          <li> Average Temperature: {cityAttr_4}</li>
        </ul>
      </div>
    </div>
  );
}

export default CityCard;
