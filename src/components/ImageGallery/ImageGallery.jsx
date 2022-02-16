import { Component } from 'react';
import axios from 'axios';
import { ImageGalleryList } from './ImageGallery.styled';
const PIXABAY_KEY = '24537625-47620fa03ad46ed0668a7b060';

class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    const prewName = prevProps.value;
    const newName = this.props.value
    if (prewName !== newName) {

      axios
        .get(
          `https://pixabay.com/api/?q=${newName}&page=1&key=${PIXABAY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .catch(error => console.log('Error', error.message))
        .then(function (response) {
          console.log(response.data);
        });
    }
  }

  render() {
    return <ImageGalleryList></ImageGalleryList>;
  }
}

export default ImageGallery;
