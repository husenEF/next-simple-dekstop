import axios from 'axios';

const apiInstance = () => {
  const axiosInstance = axios.create({ url: 'http://pretest-qa.dcidev.id/' });

  return axiosInstance;
};

export default apiInstance;
