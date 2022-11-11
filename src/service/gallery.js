const url = 'https://picsum.photos/v2/list';

export const requestGallery = async () =>
  await fetch(url).then((res) => res.json());
