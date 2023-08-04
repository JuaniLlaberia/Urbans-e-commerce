import Form from '../../components/Form';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Option from '../../components/Option';
import Row from '../../components/Row';
import Button from '../../components/Button';
import SpinnerBtn from '../../components/SpinnerBtn';
import { useForm } from 'react-hook-form';
import { useShipOrder } from './useShipOrder';

const ShipOrderForm = ({ onCloseModal, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { shipOrder, isShipping } = useShipOrder();

  const onSubmit = data => {
    shipOrder(
      { id, data },
      {
        onSuccess: () => onCloseModal(),
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer
        type='vertical'
        label='Courrier'
        id='courrier'
        error={errors?.courrier?.message}
      >
        <Select
          disabled={isShipping}
          id='courrier'
          {...register('courrier', {
            required: 'This field is required',
          })}
        >
          <Option value=''>Choose a company</Option>
          <Option>Adreani</Option>
          <Option>UPS</Option>
          <Option>OCA</Option>
        </Select>
      </InputContainer>
      <InputContainer
        id='trackingNum'
        error={errors?.trackingNum?.message}
        type='vertical'
        label='Tracking number'
      >
        <Input
          disabled={isShipping}
          type='text'
          id='trackingNum'
          {...register('trackingNum', {
            required: 'This field is required',
          })}
        />
      </InputContainer>
      <Row>
        <Button type='alert' onClick={onCloseModal} disabled={isShipping}>
          Cancel
        </Button>
        <Button type='regular' disabled={isShipping}>
          {isShipping ? <SpinnerBtn /> : 'Confirm'}
        </Button>
      </Row>
    </Form>
  );
};

export default ShipOrderForm;
