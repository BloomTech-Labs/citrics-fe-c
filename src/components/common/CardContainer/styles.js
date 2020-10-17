export const desktopStyles = () => {
  return {
    plotlyCardContainer: {
      width: '100%',
    },
    cityCardContainer: {
      width: '100%',
    },
  };
};

export const mobileStyles = (desktop = desktopStyles()) => {
  let mobileStyleObj = {
    plotlyCardContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cityCardContainer: {
      // display: 'flex',
    },
  };

  const mobileStyle = {
    ...desktop,
    ...mobileStyleObj,
  };

  return mobileStyle;
};

export const tabletStyles = {};
export const notebookStyles = {};
export const xlStyles = {};
