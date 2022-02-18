
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images !== '' &&
        images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              name={image.tags}
              small={image.webformatURL}
              // large={image.largeImageURL}
            />
          );
        })}
    </ImageGalleryList>
  );
};

export default ImageGallery;
