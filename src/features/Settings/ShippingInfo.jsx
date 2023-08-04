import Box from '../../components/Box';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import Form from '../../components/Form';
import Spinner from '../../components/Spinner';
import { useUpdateFieldContact } from './useUpdateFieldContact';
import { useGetShippingPrices } from './useGetShippingPrices';

const SalesInfo = () => {
  const { shippingCosts: { regularPrice, expressPrice } = {}, isLoading } =
    useGetShippingPrices();
  const { updateField, isUpdating } = useUpdateFieldContact(
    'shipping-info',
    'shipping-costs'
  );

  if (isLoading) return <Spinner />;

  const handleUpdate = (e, field) => {
    const value = Number(e.target.value);
    if (!value) return;
    if (value === regularPrice || value === expressPrice) return;

    updateField({ [field]: Number(value) });
  };

  // const handleUpdateColor = e => {
  //   e.preventDefault();

  //   const color = newColor.slice(0, 1).toUpperCase().concat(newColor.slice(1));

  //   if (colors.includes(color) || !newColor) return;

  //   const newColors = [...colors, color];

  //   //Update color
  // };

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
        <p>COURRIERS</p>
      </Box.Body>
    </Box>
  );
};

export default SalesInfo;
