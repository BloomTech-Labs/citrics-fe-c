import React, { useState, useEffect } from 'react';

//style
import {
  CloseOutlined,
  HeartOutlined,
  HeartFilled,
  InfoCircleOutlined,
  MinusOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { Skeleton } from 'antd';

//custom hooks
import useVisibilityToggler from '../../../hooks/useVisibilityToggler';

//redux
import { cardContainerActs } from '../../../state/actions';
import { cityCardActs } from '../../../state/actions';
import { useDispatch, useSelector } from 'react-redux';

export default ({ city, styles }) => {
  const [cityCardOpen, setCityCardOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
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

  const openCard = () => setCityCardOpen(!cityCardOpen);
  const openInfo = () => setInfoOpen(!infoOpen);

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
        // <Skeleton.Input
        //   style={{
        //     height: 100,
        //     width: 500,
        //     background: city.color,
        //     borderRadius: 20,
        //   }}
        //   active
        // />
        <div style={styles.closeCard}>
          <LoadingOutlined style={styles.loadingIcon} />
        </div>
      ) : (
        <div style={cityCardOpen ? styles.openCard : styles.closeCard}>
          <div style={styles.cardHeaderContainer} onClick={openCard}>
            <div style={styles.cityNameText}>{city.citynamestate}</div>
            <div style={styles.cardIcons}>
              <div onClick={toggleOnClick}>{heartIcon}</div>
              <div onClick={handleRemove}>
                <CloseOutlined style={{ marginLeft: '.3rem' }} />
              </div>
            </div>
          </div>
          <div style={styles.cityCardBodyContainer}>
            <img
              style={styles.cityCardBodyWrapperImg}
              src={cityImage}
              alt="city"
            />
            <ul
              onClick={openInfo}
              style={
                infoOpen
                  ? styles.cityCardBodyWrapperUlOpen
                  : styles.cityCardBodyWrapperUlClose
              }
            >
              {infoOpen ? (
                <MinusOutlined style={styles.infoIcon} />
              ) : (
                <InfoCircleOutlined style={styles.infoIcon} />
              )}
              <li>Population: {city.population}</li>
              <li> Average Age: {city.averageage}</li>
              <li> Average Household Income: ${city.householdincome}</li>
              <li> Average Monthly Rent: ${city.rent}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
