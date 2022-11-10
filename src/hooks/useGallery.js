import { useQuery } from '@tanstack/react-query';

import { requestGallery } from '../service/gallery';

export const useGallery = () => {
  const gallery = useQuery(['gallery'], () => requestGallery());
  
  return {...gallery}
};
