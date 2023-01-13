import { Button } from 'components/Button/Button.Styled';
import PropTypes from 'prop-types';

export const ButtonLoad = ({ handleLoadMore }) => {
  return (
    <Button type="button" onClick={handleLoadMore}>
      Load More
    </Button>
  );
};
Button.PropTypes = { onClick: PropTypes.func };
