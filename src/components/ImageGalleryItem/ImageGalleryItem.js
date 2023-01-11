import { Component } from 'react';
import propTypes from 'prop-types';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImg,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    id: propTypes.number,
    webformatURL: propTypes.string.isRequired,
    largeImagesURL: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { id, webformatURL, largeImagesURL, tags } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <ImageGalleryItemLi key={id} onClick={this.toggleModal}>
          <ImageGalleryItemImg src={webformatURL} alt={tags} width="400" />
        </ImageGalleryItemLi>
        {showModal && (
          <Modal
            largeImagesURL={largeImagesURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}
