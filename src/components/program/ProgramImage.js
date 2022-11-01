import React from 'react'

import ProGallery from './ProGallery';

const ProgramImage = () => {
 const galleryImages = [
  {
    img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    className: ' row-span-1 col-span-1 bg-white hover:opacity-[.4]',
  },
  {
    img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    className: 'col-span-1 bg-white hover:opacity-[.4]',
  },
  {
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    className: 'row-span-2 col-span-2 bg-white hover:opacity-[.4]',
  },
  {
    img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    className: 'col-span-1 bg-white hover:opacity-[.4]',
  },
  {
    img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    className: 'col-span-1 bg-white hover:opacity-[.4]',
  },
]

return (
  <div className="my-[40px]">
    <ProGallery galleryImages={galleryImages} />
  </div>
);
}

export default ProgramImage;