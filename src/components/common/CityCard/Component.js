import React, { useState, useEffect } from 'react';

//style
import { CloseOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Skeleton } from 'antd';

//custom hooks
import useVisibilityToggler from '../../../hooks/useVisibilityToggler';

//redux
import { cardContainerActs } from '../../../state/actions';
import { cityCardActs } from '../../../state/actions';
import { useDispatch, useSelector } from 'react-redux';

export default ({ city, styles }) => {
  const [open, setOpen] = useState(false);
  const [heartIcon, toggleIcon] = useVisibilityToggler(
    <HeartOutlined />,
    <HeartFilled />,
    true
  );

  const { cityImages, cityImageLoading } = useSelector(state => state.cityCard);

  const dispatch = useDispatch();

  const { removeCity } = cardContainerActs;
  const { fetchCityCardImage } = cityCardActs;

  const handleRemove = () => dispatch(removeCity(city.cityid));

  const cityImage = cityImages[city.citynamestate];

  const openCard = () => setOpen(!open);

  const toggleOnClick = e => {
    e.stopPropagation();
    toggleIcon();
  };

  useEffect(() => {
    if (city) {
      dispatch(fetchCityCardImage(city.citynamestate));
    }
  }, [city]);

  return (
    <div style={styles.cityCardWrapper}>
      {cityImageLoading ? (
        <Skeleton.Input
          style={{
            height: 100,
            width: 500,
            background: city.color,
            borderRadius: 20,
          }}
          active
        />
      ) : (
        <div
          style={open ? styles.openCard : styles.closeCard}
          onClick={openCard}
        >
          <div style={styles.cardHeaderContainer}>
            <h3 style={styles.cityNameText}>{city.citynamestate}</h3>
            <div style={styles.cardIcons}>
              <div onClick={toggleOnClick}>{heartIcon}</div>
              <div onClick={handleRemove}>
                <CloseOutlined style={{ marginLeft: '.5rem' }} />
              </div>
            </div>
          </div>
          <div style={styles.cityCardBodyContainer}>
            <img
              style={styles.cityCardBodyWrapperImg}
              src={cityImage}
              alt="city"
            />
            <ul style={styles.cityCardBodyWrapperUl}>
              <li>Population Density Rating: {city.populationdensityrating}</li>
              <li> Average Age: {city.averageage}</li>
              <li> Average Household Income: {city.averagehouseholdincome}</li>
              <li> Average Temperature: {city.averagetemperature}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
