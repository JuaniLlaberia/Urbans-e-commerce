import Button from '../../components/Button';
import Form from '../../components/Form';
import SpinnerBtn from '../../components/SpinnerBtn';
import Input from '../../components/Input';
import InputContainer from '../../components/InputContainer';
import Row from '../../components/Row';
import Title from '../../components/Title';
import { useCreateCourrier } from './useCreateCourrier';
import { useForm } from 'react-hook-form';

const NewCourrierForm = ({ courriers, onCloseModal }) => {
  const { createCourrier, isCreating } = useCreateCourrier();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const companyName = data.companyName;

    const isNew = courriers.find(
      courrier => courrier.companyName === companyName
    );

    if (isNew) return;

    createCourrier(data, {
      onSuccess: () => onCloseModal(),
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h3'>Create new courrier</Title>
      <InputContainer
        type='vertical'
        id='courrierName'
        label='Courrier name'
        error={errors?.companyName?.message}
      >
        <Input
          disabled={isCreating}
          type='text'
          id='courrierName'
          {...register('companyName', {
            required: 'This field is required',
          })}
        />
      </InputContainer>
      <InputContainer type='vertical' id='courrierLink' label='Tracking URL'>
        <Input
          disabled={isCreating}
          type='text'
          id='courrierLink'
          {...register('trackingUrl', {
            required: 'This field is required',
          })}
        />
      </InputContainer>
      <Row>
        <Button type='regular' disabled={isCreating}>
          {isCreating ? <SpinnerBtn /> : 'Add'}
        </Button>
      </Row>
    </Form>
  );
};

export default NewCourrierForm;
