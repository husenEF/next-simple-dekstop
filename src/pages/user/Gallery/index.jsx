import { PlusIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import BoxBorder from '../../../components/Layout/box';
import Logo from '../../../components/Icons/Logo';
//https://jsonplaceholder.typicode.com/photos
const GalleryTab = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhoto = async () => {
    await fetch('https://picsum.photos/v2/list')
      .then((res) => res.json())
      .then((result) => {
        // logger.info({ result });
        setPhotos(result);
      });
  };
  useEffect(() => {
    fetchPhoto();
  }, []);
  return (
    <BoxBorder>
      <div className="flex flex-row mb-8">
        <div className="flex-1">
          <h2 className="text-lg text-basic-primary font-semibold">Gallery</h2>
          <span className="font-light text-xs text-basic-secondary">
            Upload your special moment
          </span>
        </div>
        <button>
          <PlusIcon className="w-5 h-5 text-accent-primary" />
        </button>
      </div>
      <div className="gallery grid-cols-3 grid gap-4 relative">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="block rounded-md aspect-square overflow-hidden relative">
            <Image
              src={photo.download_url}
              alt={photo.author}
              fill
              className="w-full max-w-full"
              objectFit="cover"
              quality={100}
              placeholder="blur"
              blurDataURL={
                'https://dummyimage.com/300x300/000/fff&text=placeholder'
              }
            />
          </div>
        ))}
      </div>
    </BoxBorder>
  );
};
export default GalleryTab;
