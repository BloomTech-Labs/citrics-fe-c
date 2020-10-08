import React from 'react';
import { Card } from 'antd';
import { Collapse } from 'antd';

function CityCard({
  cityImage,
  cityAlt,
  cityName,
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
          title={cityName}
          description={
            <Collapse defaultActiveKey={['1']}>
              <Panel
                style={{ background: '#F759AB' }}
                header="View Details"
                key="1"
              >
                <ul>
                  <li>{cityAttr_1}</li>
                  <li>{cityAttr_2}</li>
                  <li>{cityAttr_3}</li>
                  <li>{cityAttr_4}</li>
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
