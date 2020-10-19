export const desktopStyles = city => {
  function getColor(c) {
    let res = c.split(' ');

    for (let i = 0; i < res.length; i++) {
      if (res[i][0] == '#') {
        return res[i];
      }
    }
    return c;
  }

  const cityColor = getColor(city.color);

  return {
    cityCardWrapper: {
      margin: '.5rem 0',
      color: cityColor,
      userSelect: 'none',
    },
    cardHeaderContainerClose: {
      width: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '.25rem 1rem 0 1rem',
    },

    cardHeaderContainerOpen: {
      width: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '.5rem 1rem .5rem 1rem',
    },

    cityNameText: {
      color: city.color,
      alignSelf: 'center',
      fontSize: '.9rem',
    },
    closeCard: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'transparent',
      borderRadius: '30px',
      width: 'auto',
      height: '34px',
      overflow: 'hidden',
      border: `2px solid ${cityColor}`,
    },

    openCard: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'transparent',
      borderRadius: '30px',
      width: 'auto',
      height: 'auto',
      justifyContent: 'top',
      border: `2px solid ${cityColor}`,
      overflow: 'hidden',
    },
    cardIcons: {
      display: 'flex',
      alignContent: 'center',
      fontSize: '.8rem',
      paddingTop: '2px',
    },
    cityCardBodyContainer: {
      width: '100%',
      height: '240px',
      position: 'relative',
    },
    cityCardBodyWrapperImg: {
      width: '100%',
      height: '100%',
      marginBottom: '4%',
      objectFit: 'fill',
    },
    cityCardBodyWrapperUlOpen: {
      listStyleType: 'none',
      height: 'auto',
      backgroundColor: 'rgba(0, 0, 0, 0.664)',
      position: 'absolute',
      top: '20px',
      right: '10px',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      // alignItems: 'center',
      padding: '2%',
      margin: '0',
      color: 'white',
      cursor: 'pointer',
    },
    cityCardBodyWrapperUlClose: {
      listStyleType: 'none',
      height: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.664)',
      position: 'absolute',
      top: '20px',
      right: '10px',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // padding: '2%',
      paddingBottom: '5%',
      paddingLeft: '7.5%',
      margin: '0',
      color: 'transparent',
      cursor: 'pointer',
      overflow: 'hidden',
      width: '.2rem',
    },
    infoIcon: {
      color: 'white',
      position: 'absolute',
      top: '5px',
      right: '10px',
      fontSize: '.8rem',
    },
    loadingIcon: {
      width: '478px',
      fontSize: '1.8rem',
      textAlign: 'center',
      margin: 'auto auto',
    },
  };
};

////////////////////////////////////////////////////////////////////
export const mobileStyles = (city, desktop = desktopStyles(city)) => {
  let mobileStyleObj = {};

  const mobileStyle = {
    ...desktop,
    ...mobileStyleObj,
  };

  return mobileStyle;
};

////////////////////////////////////////////////////////////////////
export const tabletStyles = (city, mobile = mobileStyles(city)) => {
  const tabletStyle = {
    ...mobile,
  };

  return tabletStyle;
};
export const notebookStyles = {};
export const xlStyles = {};
