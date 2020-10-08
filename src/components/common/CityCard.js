import React from 'react';
import { Card } from 'antd';
import { Collapse } from 'antd';

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
  return (
    <div className="city-card-wrapper">
      <Card
        hoverable
        style={{ background: `${cityColor}` }}
        cover={<img alt={cityAlt} src={cityImage} />}
      >
        <Meta
          title={
            <div>
              {cityName}, {cityState}
            </div>
          }
          description={
            <Collapse defaultActiveKey={['1']}>
              <Panel
                style={{ background: '#F759AB' }}
                header="View Details"
                key="1"
              >
                <ul>
                  <li>Population Density Rating: {cityAttr_1}</li>
                  <li> Average Age: {cityAttr_2}</li>
                  <li> Average Household Income: {cityAttr_3}</li>
                  <li> Average Temperature: {cityAttr_4}</li>
                </ul>
              </Panel>
            </Collapse>
          }
        />
      </Card>
    </div>
  );
}

export default CityCard;
