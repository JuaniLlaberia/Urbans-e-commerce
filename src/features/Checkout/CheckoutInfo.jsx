import { useState } from 'react';
import DobleInput from '../../components/DobleInput';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputContainer from '../../components/InputContainer';
import Title from '../../components/Title';
import CheckoutBtns from './CheckoutBtns';
import ProductsSummary from './ProductsSummary';
import { useGetShippingPrices } from '../Settings/useGetShippingPrices';
import Spinner from '../../components/Spinner';
import Select from '../../components/Select';
import Option from '../../components/Option';
import { formatCurrency } from '../../utils/formatCurrency';

const CheckoutInfo = () => {
  const [shippingType, setShippingType] = useState('Regular');
  const { shippingCosts, isLoading } = useGetShippingPrices();

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <Title as='h3'>Personal Information</Title>
      <InputContainer type='vertical' label='Email address'>
        <Input type='email' />
      </InputContainer>
      <DobleInput>
        <InputContainer type='vertical' label='Full name'>
          <Input type='text' />
        </InputContainer>
        <InputContainer type='vertical' label='Phone number'>
          <Input type='phone' />
        </InputContainer>
      </DobleInput>
      <Title as='h3'>Shipping Information</Title>
      <InputContainer type='vertical' label='Address'>
        <Input type='text' />
      </InputContainer>
      <DobleInput>
        <InputContainer type='vertical' label='Apartment #'>
          <Input type='text' />
        </InputContainer>
        <InputContainer type='vertical' label='Postal Code'>
          <Input type='phone' />
        </InputContainer>
      </DobleInput>
      <DobleInput>
        <InputContainer type='vertical' label='Country'>
          <Input type='text' />
        </InputContainer>
        <InputContainer type='vertical' label='City'>
          <Input type='phone' />
        </InputContainer>
      </DobleInput>
      <InputContainer type='vertical' label='Shipping type'>
        <Select onChange={e => setShippingType(e.target.value)}>
          <Option value='Regular'>
            Regular - {formatCurrency(shippingCosts.regularPrice)} (4-7 days)
          </Option>
          <Option value='Express'>
            Express - {formatCurrency(shippingCosts.expressPrice)} (2-3 days)
          </Option>
        </Select>
      </InputContainer>
      <ProductsSummary
        shippingType={shippingType}
        shippingCosts={shippingCosts}
      />
      <CheckoutBtns />
    </Form>
  );
};

export default CheckoutInfo;
