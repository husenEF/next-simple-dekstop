import { useQuery } from '@tanstack/react-query';

import { requestGallery } from '../service/gallery';

export const useGallery = () => {
  // return useQuery
  return useQuery(['gallery'], () => requestGallery());
};
