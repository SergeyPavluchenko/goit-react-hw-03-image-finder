import { Button } from './Button.Styled';

export const ButtonLoad = ({ onClick }) => {
  return (
    <Button>
      <button type="button" onClick={onClick}>
        Load more
      </button>
    </Button>
  );
};
