import Input from '../../components/Input';
import Form from '../../components/Form';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Row from '../../components/Row';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrackOrder = ({ onCloseModal }) => {
  const [orderNum, setOrderNum] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!orderNum) return;

    navigate(`order/track/${orderNum}`);
    onCloseModal();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title as='h3'>Track your order </Title>
      <InputContainer type='vertical'>
        <Input
          placeholder='Order Num (without #)'
          type='number'
          value={orderNum}
          onChange={e => setOrderNum(e.target.value)}
        />
      </InputContainer>
      <Row>
        <Button variation='outline' aria-label='close' onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation='regular' aria-label='submit'>
          Search
        </Button>
      </Row>
    </Form>
  );
};

export default TrackOrder;
