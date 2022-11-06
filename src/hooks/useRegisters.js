import { useMutation } from '@tanstack/react-query';

import { registerUser } from '../service/register';

export const useRegister = (data) => {
  return useMutation(() => registerUser(data));
};
