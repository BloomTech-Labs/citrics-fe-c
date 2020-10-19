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
  const [isNationalAverage, setIsNationalAverage] = useState(false);

  const { cityImages, cityImageLoading } = useSelector(state => state.cityCard);

  const dispatch = useDispatch();

  const { removeCity } = cardContainerActs;
  const { fetchCityCardImage } = cityCardActs;

  const handleRemove = () => dispatch(removeCity(city.cityid));

  const cityImage = cityImages[city.citynamestate];

  const openCard = () => !isNationalAverage && setCityCardOpen(!cityCardOpen);
  const openInfo = () => setInfoOpen(!infoOpen);

  const handleFavorite = e => {
    e.stopPropagation();
    toggleIcon();
    window.localStorage.getItem('okta-token-storage')
      ? console.log('this is where I would put an axios call')
      : console.log('this is where other stuff will happen');
  };

  const checkNationalAverage = city => {
    city.citynamestate === 'National Average, USA' && setIsNationalAverage(true);
  };

  useEffect(() => {
    if (city) {
      dispatch(fetchCityCardImage(city.citynamestate));
      checkNationalAverage(city);
    }
  }, [city]);

  return (
    <div style={styles.cityCardWrapper}>
      {cityImageLoading ? (
        <div style={styles.closeCard}>
          <LoadingOutlined style={styles.loadingIcon} />
        </div>
      ) : (
        <div style={cityCardOpen ? styles.openCard : styles.closeCard}>
          <div
            style={
              cityCardOpen
                ? styles.cardHeaderContainerOpen
                : styles.cardHeaderContainerClose
            }
            onClick={openCard}
          >
            <div style={styles.cityNameText}>{city.citynamestate}</div>
            {!isNationalAverage && (
              <div style={styles.cardIcons}>
                <div onClick={handleFavorite}>{heartIcon}</div>
                <div onClick={handleRemove}>
                  <CloseOutlined style={{ marginLeft: '.3rem' }} />
                </div>
              </div>
            )}
          </div>

          <div style={styles.cityCardBodyContainer}>
            <img
              style={
                cityCardOpen
                  ? styles.cityCardBodyWrapperImg
                  : { display: 'none' }
              }
              src={city.wikiimgurl}
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
