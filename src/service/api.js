import axios from 'axios';

const apiInstance = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://pretest-qa.dcidev.id/api/v1',
  });
  return axiosInstance;
};

export default apiInstance;
