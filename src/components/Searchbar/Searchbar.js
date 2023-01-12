import { Component } from 'react';
import propTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchbarBlock,
  SearchFormButtonLabel,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  static propTypes = {
    onSubmit: propTypes.func.isRequired,
  };
  handleImageNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.setState.imageName.trim() === '') {
      toast(`enter the name of the photo or picture`);
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <SearchbarBlock>
        <SearchForm>
          <SearchFormButton type="submit">
            <div>
              <BsSearch size={30} />
            </div>
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleImageNameChange}
          />
        </SearchForm>
        <Toaster position="top-center" />
      </SearchbarBlock>
    );
  }
}

// FcSearch;