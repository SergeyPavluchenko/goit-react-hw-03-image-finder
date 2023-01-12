import { Component } from 'react';
import { fetchPictureHits } from 'components/API';
import { FeedBack } from './App.styled';
import { ButtonLoad } from 'components/Button/Button.Styled.js';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Spiner } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    isLoader: false,
    query: '',
    error: null,
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const { query: currentQuery, page: currentPage } = this.state;
    const { query: prevQuery, page: prevPage } = prevState;

    if (prevQuery !== currentQuery || prevPage !== currentPage) {
      this.setState({ isLoading: true });
      fetchPictureHits(currentPage, currentQuery)
        .then(images => {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
          }));
        })
        .catch(error =>
          this.setState({ error: error.message, isLoading: false })
        )
        .finaly(() => this.setState({ isLoading: false }));
    }
  }

  hendleFormSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
    });
  };

  hendleLoadMore = () => {
    this.setSate(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <FeedBack>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        {this.state.isLoading && <Spiner />}
        {this.state.images.length > 0 && (
          <>
            <ImageGallery images={this.state.images} />
            <ButtonLoad onClick={this.hendleLoadMore} />
          </>
        )}
      </FeedBack>
    );
  }
}
