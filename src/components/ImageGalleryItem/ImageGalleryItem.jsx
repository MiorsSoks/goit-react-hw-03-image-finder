import { GalleryItem, ImageGallery } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ small, name }) => {
  return (
    <GalleryItem>
      <ImageGallery src={small} alt={name} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
