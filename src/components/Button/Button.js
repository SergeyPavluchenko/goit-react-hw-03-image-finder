import { Button } from './Button.Styled';
import PropTypes from 'prop-types';

export const ButtonLoad = ({ onClick }) => {
  return (
    <Button>
      <button type="button" onClick={onClick}>
        Load more
      </button>
    </Button>
  );
};

Button.PropTypes = { onClick: PropTypes.func };
