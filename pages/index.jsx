import Image from 'next/image';

import MainLayout from '../src/components/Layout';

export default function Home() {
  return (
    <MainLayout rightContainer="relative">
      <div className="absolute left-0 top-0 right-0 h-80">
        <Image
          src="https://picsum.photos/seed/picsum/800/300"
          alt="background"
          // width={800}
          // height={300}
          fill
        />
        {/* <img src="https://picsum.photos/seed/picsum/200/300" alt="Image" /> */}
      </div>
    </MainLayout>
  );
}
