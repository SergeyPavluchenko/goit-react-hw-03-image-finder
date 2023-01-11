import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryUl } from 'components/ImageGallery/ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryUl>
      {images.map(({ id, webformatURL, largeImagesURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImagesURL={largeImagesURL}
          tags={tags}
        />
      ))}
    </ImageGalleryUl>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImagesURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ).isRequired,
};
