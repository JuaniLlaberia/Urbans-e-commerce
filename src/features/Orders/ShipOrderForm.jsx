import Form from '../../components/Form';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Option from '../../components/Option';
import Row from '../../components/Row';
import Button from '../../components/Button';
import SpinnerBtn from '../../components/SpinnerBtn';
import Spinner from '../../components/Spinner';
import { useForm } from 'react-hook-form';
import { useShipOrder } from './useShipOrder';
import { useGetCourriers } from '../Settings/useGetCourriers';

const ShipOrderForm = ({ onCloseModal, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { courriers, isLoading } = useGetCourriers();

  const { shipOrder, isShipping } = useShipOrder();

  const onSubmit = data => {
    const [companyName, url] = data.courrier.split('-|-');

    const courrier = {
      courrier: companyName,
      trackingNum: url + data.trackingNum,
    };

    shipOrder(
      { id, courrier },
      {
        onSuccess: () => onCloseModal(),
      }
    );
  };

  if (isLoading) return <Spinner />;

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
          {courriers.map(courrier => (
            <Option
              key={courrier.id}
              value={`${courrier.companyName}-|-${courrier.trackingUrl}`}
            >
              {courrier.companyName}
            </Option>
          ))}
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
