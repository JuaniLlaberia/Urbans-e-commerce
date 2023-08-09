import Box from '../../components/Box';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import Form from '../../components/Form';
import Spinner from '../../components/Spinner';
import Button from '../../components/Button';
import Row from '../../components/Row';
import Modal from '../../components/Modal';
import { useUpdateFieldContact } from './useUpdateFieldContact';
import { useGetShippingPrices } from './useGetShippingPrices';
import { useGetCourriers } from './useGetCourriers';
import { styled } from 'styled-components';
import { HiXMark } from 'react-icons/hi2';
import Title from '../../components/Title';
import { useRemoveCourrier } from './useRemoveCourrier';
import NewCourrierForm from './NewCourrierForm';

const ItemsList = styled.ul`
  display: flex;
  gap: 0.8rem;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.4rem;
  background-color: var(--color-white-3);
  padding: 0.3rem 0.4rem;
  color: var(--color-white-5);
  border-radius: var(--raidius-sm);

  & svg {
    color: var(--icons-color);
    cursor: pointer;
  }
`;

const SalesInfo = () => {
  const {
    shippingCosts: { regularPrice, expressPrice } = {},
    isLoading: isLoading1,
  } = useGetShippingPrices();

  const { courriers, isLoading: isLoading2 } = useGetCourriers();

  const { updateField, isUpdating } = useUpdateFieldContact(
    'shipping-info',
    'shipping-costs'
  );

  const { removeCourrier, isRemoving } = useRemoveCourrier();

  if (isLoading1 || isLoading2) return <Spinner />;

  const handleUpdate = (e, field) => {
    const value = Number(e.target.value);
    if (!value) return;
    if (value === regularPrice || value === expressPrice) return;

    updateField({ [field]: Number(value) });
  };

  return (
    <Box>
      <Box.Head>Shipping information</Box.Head>
      <Box.Body>
        <Form>
          <InputContainer type='vertical' label='Regular shipping ($)'>
            <Input
              disabled={isUpdating}
              type='number'
              defaultValue={regularPrice}
              onBlur={e => handleUpdate(e, 'regularPrice')}
            />
          </InputContainer>
          <InputContainer type='vertical' label='Express shipping ($)'>
            <Input
              type='number'
              disabled={isUpdating}
              defaultValue={expressPrice}
              onBlur={e => handleUpdate(e, 'expressPrice')}
            />
          </InputContainer>
        </Form>
        <div style={{ padding: '.4rem 1.25rem' }}>
          <Row space='separate'>
            <Title as='h3'>Courriers</Title>
            <Modal>
              <Modal.Open opens='newCourrier'>
                <Button variation='regular' disabled={isRemoving}>
                  Add
                </Button>
              </Modal.Open>
              <Modal.Window windowName='newCourrier'>
                <NewCourrierForm courriers={courriers} />
              </Modal.Window>
            </Modal>
          </Row>
          <br />
          <ItemsList>
            {courriers.map(courrier => (
              <Item key={courrier.id}>
                {courrier.companyName}{' '}
                <HiXMark
                  onClick={() => removeCourrier(courrier.id)}
                  disabled={isRemoving}
                />
              </Item>
            ))}
          </ItemsList>
        </div>
      </Box.Body>
    </Box>
  );
};

export default SalesInfo;
