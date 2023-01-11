import { Component } from 'react';
import propTypes from 'prop-types';
import { WindowModal, Overlay } from 'components/Modal/Modal.styled';

export class Modal extends Component {
  static propTypes = {
    onClose: propTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = event => {
    if (this.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeModalOverlay = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImagesURL, tags } = this.props;
    return (
      <Overlay>
        <WindowModal>
          <img src={largeImagesURL} alt={tags} width="850" />
        </WindowModal>
      </Overlay>
    );
  }
}
