import { format } from 'date-fns';

export const formatDate = (date, pattern = 'yyyy-MM-dd') => {
  return format(date, pattern);
};
