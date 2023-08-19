import { useState } from 'react';
import DobleInput from '../../components/DobleInput';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputContainer from '../../components/InputContainer';
import Title from '../../components/Title';
import CheckoutBtns from './CheckoutBtns';
import ProductsSummary from './ProductsSummary';
import { useGetShippingPrices } from '../Settings/useGetShippingPrices';
import Select from '../../components/Select';
import Option from '../../components/Option';
import { formatCurrency } from '../../utils/formatCurrency';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getCart } from '../Cart/cartSlice';
import { useCreateOrder } from './useCreateOrder';
import LoadingPage from './LoadingPage';
import { styled } from 'styled-components';

const CheckoutSkeleton = styled.section`
  border-radius: var(--raidius-sm);
  width: 60vw;
  min-width: 300px;
  max-width: 700px;
  background-color: #9c9797;
  height: 700px;

  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: #e0e0e0;
    }
    100% {
      background-color: hsl(0, 0%, 72.54901960784314%);
    }
  }
`;

const CheckoutInfo = () => {
  const [shippingType, setShippingType] = useState('Regular');
  const { shippingCosts, isLoading } = useGetShippingPrices();
  const { createOrder, isCreating } = useCreateOrder();
  const cartProducts = useSelector(getCart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (isLoading) return <CheckoutSkeleton />;

  const totalPrice = cartProducts.reduce(
    (acc, crr) => acc + crr.price * crr.quantity,
    0
  );

  const priceShipment =
    shippingType === 'Regular' && totalPrice > 70
      ? 0
      : shippingType === 'Express'
      ? shippingCosts.expressPrice
      : shippingCosts.regularPrice;

  const onSubmit = data => {
    const { email, fullName, address, postalCode, apartment, country, city } =
      data;

    const newOrder = {
      shipmentType: shippingType,
      isPaid: false,
      shipmentAddress: `${address} - ${apartment}. ${city}, ${postalCode}`,
      status: 'Pending',
      totalPrice: totalPrice + priceShipment,
      customerName: fullName,
      customerEmail: email,
      country,
      trackingNum: '',
      courrier: '',
    };

    createOrder({ newOrder, orderProducts: cartProducts });
  };

  if (isCreating) return <LoadingPage />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h3'>Personal Information</Title>
      <InputContainer
        type='vertical'
        label='Email address'
        error={errors?.email?.message}
      >
        <Input
          type='email'
          {...register('email', { required: 'This field is required' })}
        />
      </InputContainer>
      <DobleInput>
        <InputContainer
          type='vertical'
          label='Full name'
          error={errors?.fullName?.message}
        >
          <Input
            type='text'
            {...register('fullName', { required: 'This field is required' })}
          />
        </InputContainer>
        <InputContainer
          type='vertical'
          label='Phone number'
          error={errors?.phoneNum?.message}
        >
          <Input
            type='phone'
            {...register('phoneNum', { required: 'This field is required' })}
          />
        </InputContainer>
      </DobleInput>

      <Title as='h3'>Shipping Information</Title>
      <InputContainer
        type='vertical'
        label='Address'
        error={errors?.address?.message}
      >
        <Input
          type='text'
          {...register('address', { required: 'This field is required' })}
        />
      </InputContainer>
      <DobleInput>
        <InputContainer
          type='vertical'
          label='Apartment #'
          error={errors?.apartment?.message}
        >
          <Input
            type='text'
            {...register('apartment', { required: 'This field is required' })}
          />
        </InputContainer>
        <InputContainer
          type='vertical'
          label='Postal Code'
          error={errors?.postalCode?.message}
        >
          <Input
            type='text'
            {...register('postalCode', { required: 'This field is required' })}
          />
        </InputContainer>
      </DobleInput>
      <DobleInput>
        <InputContainer
          type='vertical'
          label='Country'
          error={errors?.country?.message}
        >
          <Input
            type='text'
            {...register('country', { required: 'This field is required' })}
          />
        </InputContainer>
        <InputContainer
          type='vertical'
          label='City'
          error={errors?.city?.message}
        >
          <Input
            type='text'
            {...register('city', { required: 'This field is required' })}
          />
        </InputContainer>
      </DobleInput>

      <InputContainer type='vertical' label='Shipping type'>
        <Select onChange={e => setShippingType(e.target.value)}>
          <Option value='Regular'>
            Regular -{' '}
            {formatCurrency(totalPrice > 70 ? 0 : shippingCosts.regularPrice)}{' '}
            (4-7 days)
          </Option>
          <Option value='Express'>
            Express - {formatCurrency(shippingCosts.expressPrice)} (2-3 days)
          </Option>
        </Select>
      </InputContainer>

      <ProductsSummary
        shippingType={shippingType}
        shippingCosts={priceShipment}
        cartProducts={cartProducts}
        totalPrice={totalPrice}
      />
      <CheckoutBtns />
    </Form>
  );
};

export default CheckoutInfo;
