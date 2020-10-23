import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles';

//style
import {
  CloseOutlined,
  HeartOutlined,
  HeartFilled,
  InfoCircleOutlined,
  MinusOutlined,
  LoadingOutlined,
  AlignCenterOutlined,
} from '@ant-design/icons';
import FadeIn from 'react-fade-in';
import { Skeleton, Collapse } from 'antd';

//helper
import useVisibilityToggler from '../../../hooks/useVisibilityToggler';
import { shortNum } from '../../../utils/helpers';

//Redux
import { cardContainerActs } from '../../../state/actions';
import { cityCardActs } from '../../../state/actions';
import { userActs } from '../../../state/actions';
import { useDispatch, useSelector } from 'react-redux';

const icons = [HeartOutlined, CloseOutlined];
const makeButtons = (Icon, handleIcon, Icon2, handleIcon2, currentLocation) => {
  return Icon2 ? (
    <>
      <Icon
        style={
          currentLocation != '/favorites'
            ? { margin: '0 4px' }
            : { margin: '0 4px', display: 'none' }
        }
        onClick={handleIcon}
      />
      <Icon2 style={{ margin: '0 8px' }} onClick={handleIcon2} />
    </>
  ) : (
    <Icon
      style={{ position: 'absolute', margin: '12px 12px' }}
      onClick={handleIcon}
    />
  );
};

export default ({ city, display }) => {
  //Redux
  const theme = useSelector(state => state.theme);
  const cardCount = useSelector(state => state.cardContainer.cityData.length);
  const dispatch = useDispatch();
  const { removeCity } = cardContainerActs;
  const { fetchCityCardImage } = cityCardActs;
  const { saveFavorite, removeFavorite } = userActs;
  const currentLocation = useLocation().pathname;

  //Toggles
  const [HeartIcon, toggleHeartIcon] = useVisibilityToggler(
    HeartOutlined,
    HeartFilled,
    true
  );
  const [InfoIcon, toggleInfoIcon] = useVisibilityToggler(
    InfoCircleOutlined,
    MinusOutlined,
    false
  );

  //Destructuring
  const { Panel } = Collapse;
  const sty = styles(display, theme, city);

  //handlers
  const handleRemove = e => {
    e.stopPropagation();
    currentLocation != '/favorites'
      ? dispatch(removeCity(city.cityid))
      : dispatch(removeFavorite(city.cityid));
  };

  const handleFavorite = e => {
    e.stopPropagation();
    toggleHeartIcon();
    dispatch(saveFavorite(city));
  };

  const handleInfo = e => toggleInfoIcon();
  //helpers
  const isCityCard = city => city.colorIdx >= 0;

  useEffect(() => {
    if (city) {
      dispatch(fetchCityCardImage(city.citynamestate));
    }
  }, [city]);

  return (
    <FadeIn>
      <Collapse
        className={
          isCityCard(city)
            ? `cityCard-${city.colorIdx} sCard`
            : 'cityCard-3 sCard'
        }
        defaultActiveKey={display == 'desktop' && city.cityid ? ['1'] : ['0']}
        ghost
        style={
          display
            ? sty.outerCollapse
            : { ...sty.outerCollapse, width: `${100 / cardCount - cardCount}%` }
        }
      >
        <Panel
          disabled={!isCityCard(city)}
          header={city.citynamestate}
          key="1"
          extra={
            isCityCard(city) && display
              ? makeButtons(
                  HeartIcon,
                  handleFavorite,
                  CloseOutlined,
                  handleRemove,
                  currentLocation
                )
              : false
          }
          showArrow={false}
          style={sty.outerPanel}
        >
          <div className={'cityCardImg'} style={sty.cityCardImg}>
            <Collapse
              className={
                isCityCard(city)
                  ? `sCardInner innerInfo-${city.colorIdx}`
                  : 'sCardInner'
              }
              style={{ background: 'unset' }}
              defaultActiveKey={['2']}
              bordered={false}
            >
              <Panel
                key="2"
                showArrow={false}
                extra={makeButtons(InfoIcon, handleInfo)}
                style={sty.innerPanel}
              >
                <ul style={sty.unorderedList}>
                  {city.population && (
                    <li> Population: {shortNum(city.population)}</li>
                  )}
                  {city.densitymisq && (
                    <li>
                      {' '}
                      Population Density: {shortNum(city.densitymisq)} PPSM{' '}
                    </li>
                  )}
                  {city.averageage && (
                    <li>
                      {' '}
                      Average Age: {Math.round(shortNum(city.averageage))}{' '}
                    </li>
                  )}
                  {city.costoflivingindex && (
                    <li> Cost of Living Index: {city.costoflivingindex}</li>
                  )}
                  {city.individualincome && (
                    <li> Annual Income: ${shortNum(city.individualincome)}</li>
                  )}
                  {city.householdincome && (
                    <li>
                      {' '}
                      Household Income: ${shortNum(city.householdincome)}
                    </li>
                  )}
                  {city.averagehouse && (
                    <li> House Price: ${shortNum(city.averagehouse)}</li>
                  )}
                  {city.rent && <li> Monthly Rent: ${shortNum(city.rent)}</li>}

                  {city.historicalweather == true && (
                    <li>
                      {' '}
                      Precipitation: {
                        city.historicalweather[0].precipitation
                      }{' '}
                      (placeholder){' '}
                    </li>
                  )}
                  {city.historicalweather == true && (
                    <li>
                      {' '}
                      Temperature: {city.historicalweather[0].temperature}
                      &deg;F(placeholder)
                    </li>
                  )}
                  {city.covid == true && (
                    <li>Covid score? {city.covid[0]} (placeholder)</li>
                  )}
                </ul>
              </Panel>
            </Collapse>
          </div>
        </Panel>
      </Collapse>
    </FadeIn>
  );
};
