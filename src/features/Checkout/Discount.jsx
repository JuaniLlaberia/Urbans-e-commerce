import Input from '../../components/Input';
import InputContainer from '../../components/InputContainer';
import FilterBtn from '../StoreProducts/FilterBtn';

export const Discount = ({
  // discount,
  //  setDiscount,
  validateDiscount,
}) => {
  return (
    <InputContainer label='Have a discount code?' type='vertical'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          gap: '.75rem',
        }}
      >
        <Input
          type='text'
          // value={discount?.code}
          // onChange={e => setDiscount(e.target.value)}
        />
        <FilterBtn onClick={validateDiscount}>Validate</FilterBtn>
      </div>
    </InputContainer>
  );
};
