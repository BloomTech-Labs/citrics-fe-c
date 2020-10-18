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
      margin: '5% 0',
      color: cityColor,
      userSelect: 'none',
    },
    cardHeaderContainer: {
      width: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '1% 2%',
    },
    cityNameText: {
      color: city.color,
      alignSelf: 'center',
      fontSize: '1.2rem',
    },
    closeCard: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'transparent',
      borderRadius: '30px',
      width: 'auto',
      height: '45px',
      padding: '30px, 0px, 2px, 24px',
      overflow: 'hidden',
      border: `3px solid ${cityColor}`,
    },
    openCard: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'transparent',
      borderRadius: '30px',
      width: 'auto',
      height: 'auto',
      justifyContent: 'top',
      border: `3px solid ${cityColor}`,
      overflow: 'hidden',
    },
    cardIcons: {
      display: 'flex',
      alignContent: 'center',
      fontSize: '1rem',
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
      height: '200px',
      backgroundColor: 'rgba(0, 0, 0, 0.664)',
      position: 'absolute',
      top: '20px',
      right: '10px',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2%',
      margin: '0',
      color: 'white',
      cursor: 'pointer',
    },
    cityCardBodyWrapperUlClose: {
      listStyleType: 'none',
      height: '30px',
      backgroundColor: 'rgba(0, 0, 0, 0.664)',
      position: 'absolute',
      top: '20px',
      right: '10px',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2%',
      margin: '0',
      color: 'transparent',
      cursor: 'pointer',
      overflow: 'hidden',
      width: '15%',
    },
    infoIcon: {
      color: 'white',
      position: 'absolute',
      top: '5px',
      right: '10px',
      fontSize: '1.2rem',
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
  const mobileStyle = desktop;

  return desktop;
};

////////////////////////////////////////////////////////////////////
export const tabletStyles = {};
export const notebookStyles = {};
export const xlStyles = {};
