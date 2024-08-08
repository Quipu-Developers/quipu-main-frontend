import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = 'http://localhost:3001';

export const sendGeneral = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/data1`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.reposne) {
      const { status } = error.response;
      console.error(`Error ${status}`);
      return { status };
    } else {
      console.error('Unknown error occurred.');
      return { status: 500, data: null };
    }
  }
};

export const sendDevelopment = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/data2`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.reposne) {
      const { status } = error.response;
      console.error(`Error ${status}`);
      return { status };
    } else {
      console.error('Unknown error occurred.');
      return { status: 500, data: null };
    }
  }
};
