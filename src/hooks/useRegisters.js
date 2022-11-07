import { useMutation } from '@tanstack/react-query';

import { registerUser } from '../service/register';

export const useRegister = () => {
  return useMutation((data) => {
    console.log({ registerUser: data });
    return registerUser(data);
  });
};
