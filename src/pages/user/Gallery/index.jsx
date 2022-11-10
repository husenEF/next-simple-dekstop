import Image from 'next/image';
import { PlusIcon } from '@heroicons/react/24/solid';

import BoxBorder from '../../../components/Layout/box';
import { useGallery } from '../../../hooks/useGallery';

const GalleryTab = () => {
  const { data, isError, isLoading, error } = useGallery();

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
      <div className="gallery lg:grid-cols-3 grid-cols-2 grid gap-4 relative">
        {!isError &&
          data?.map((photo) => (
            <div
              key={photo.id}
              className="block rounded-md aspect-square overflow-hidden relative">
              <Image
                src={photo.download_url}
                alt={photo.author}
                fill={true}
                className="w-full max-w-full"
                quality={100}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
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
