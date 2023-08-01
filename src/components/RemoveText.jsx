import { styled } from 'styled-components';
import Button from './Button';
import Row from './Row';
import SpinnerBtn from './SpinnerBtn';

const StyledRemoveBox = styled.div`
  padding: 1.25rem 0.75rem;
  min-width: 250px;
`;
const StyledMsg = styled.p`
  font-size: 0.9rem;
  color: var(--color-white-5);
  margin-bottom: 25px;

  & span {
    font-weight: 800;
    color: var(--color-white-6);
  }
`;

export const RemoveText = ({
  onConfirm,
  resource,
  isDeleting,
  onCloseModal,
}) => {
  return (
    <StyledRemoveBox>
      <StyledMsg>
        You are about to delete: <span>{resource}</span>. Are you sure? (this is
        irreversible)
      </StyledMsg>
      <Row>
        <Button type='outline' onClick={onCloseModal}>
          Cancel
        </Button>
        <Button type='alert' onClick={onConfirm} disabled={isDeleting}>
          {isDeleting ? <SpinnerBtn /> : 'Confirm'}
        </Button>
      </Row>
    </StyledRemoveBox>
  );
};
