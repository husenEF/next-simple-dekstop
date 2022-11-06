import apiInstance from './api';

const path = '/register';

export const registerUser = (data) => apiInstance().post(path, data);

export const checkOtp = (data) => apiInstance().post(`${path}/otp/match`, data);

export const requestOtp = (data) =>
  apiInstance().post(`${path}/otp/request`, data);
