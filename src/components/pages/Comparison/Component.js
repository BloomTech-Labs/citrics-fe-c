import React from 'react';
import SearchPanel from '../../common/SearchPanel';
import CardContainer from '../../common/CardContainer';
import '../../../styles/ComparisonPage.less';
import { PlotlyCard } from '../../common';
import { useSelector } from 'react-redux';

export default ({ styles }) => {
  const cityData = useSelector(state => state.cardContainer.cityData);
  const Blank = () => <div></div>;
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(rgba(17, 26, 34, .95), rgba(20, 30, 34, .95)), url('https://images.unsplash.com/photo-1561488111-5d800fd56b8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 1,
          minHeight: '100vh',
        }}
      >
        <div
          className="compare_search_wrapper"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            height: 'fit-content',
            marginTop: '2rem',
          }}
        >
          <div style={{ margin: 'auto', width: '60%' }}>
            <SearchPanel />
          </div>
          <div style={{ width: '60%' }}>
            {cityData.length ? <CardContainer Card={PlotlyCard} /> : Blank}
          </div>
        </div>
      </div>
    </>
  );
};
