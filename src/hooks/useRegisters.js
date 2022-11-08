import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { requestOtp, registerUser, checkOtp } from '../service/register';

export const useRegister = () => {
  return useMutation((data) => {
    console.log({ registerUser: data });
    return registerUser(data);
  });
};

export const useOtp = () => {
  const [data, setData] = useState({ otp1: '', otp2: '', otp3: '', otp4: '' });

  const otpRequest = useMutation((data) => requestOtp(data));
  const otpCheck = useMutation((data) => checkOtp(data));

  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const resetError = () => {
    setIsError(false);
    setError(null);
  };

  useEffect(() => {
    if (isError === null) setIsError(otpCheck.isError || otpRequest.isError);
  }, [otpCheck.isError, otpRequest.isError, isError]);

  useEffect(() => {
    console.log({ error, L32: otpCheck.error, L33: otpRequest.error });
    if (error === null) {
      if (otpCheck.error !== null) setError(otpCheck.error);
      if (otpRequest.error === null) setError(otpRequest.error);
    }
  }, [otpCheck.error, otpRequest.error, error]);

  console.log({ L39: otpCheck.isError || otpRequest.isError });
  return { otpRequest, otpCheck, data, setData, isError, error, resetError };
};
