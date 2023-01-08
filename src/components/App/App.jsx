import { GlobalStyle } from 'GlobalStyles';
import { Component } from 'react';
import { FeedBack } from './App.styled';
import { ButtonLoad } from 'components/Button/Button';

export class App extends Component {
  state = {
    image: [],
    isLoader: false,
    query: '',
    error: null,
    page: 1,
  };

  hendleLoadMore = () => {
    this.setSate(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <FeedBack>
        <form>
          <input type="text" name="query" />
          <button type="submit">Search</button>
        </form>
        <ButtonLoad onClick={this.hendleLoadMore} />
        <GlobalStyle />
      </FeedBack>
    );
  }
}
