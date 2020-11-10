import axios from 'axios';

// we will define a bunch of API calls here.
// const apiUrl = `${process.env.REACT_APP_API_URI}/profiles`;
const apiUrl = `${process.env.REACT_APP_API_URI}/users/getuserinfo`;
// const apiUrl = `http://localhost:3000/profiles`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const apiAuthGet = authHeader => {
  console.log('hitting api inputs');
  return axios.get(apiUrl, { headers: authHeader });
};

const getProfileData = (authState, authService) => {
  try {
    if (authState.isAuthenticated) {
      return authService.getUser().then(response => response);
    }
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

export { sleep, getExampleData, getProfileData, getDSData };
