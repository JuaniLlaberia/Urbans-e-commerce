import { styled } from 'styled-components';
import Title from '../../components/Title';
import Spinner from '../../components/Spinner';
import { HiOutlineCheck } from 'react-icons/hi2';
import { useGetValidDiscounts } from '../Discount/useGetValidDiscounts';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const StyledCartSummary = styled.aside`
  background-color: var(--color-white-2);
  width: 30vw;
  border-radius: var(--raidius-sm);
  box-shadow: var(--shadow-light);
  padding: 1rem 0.8rem;
  margin-bottom: 10px;

  @media (max-width: 650px) {
    width: 100%;
    margin-top: 25px;
  }
`;

const StyledBtn = styled.button`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0.5rem;
  background-color: #2b2929;
  color: #f8f5f5;
  border: none;
  border-radius: var(--raidius-md);
  cursor: pointer;
`;

const DiscountInput = styled.input`
  width: 100%;
  border: none;
  border-radius: var(--raidius-md);
  padding: 0.5rem 0.4rem;
  box-shadow: var(--shadow-light);
  background-color: var(--color-white-1);
  color: var(--color-white-6);
  &:focus {
    outline-color: var(--icons-color);
    outline-offset: 2px;
  }
`;

const DiscountBox = () => {
  const { discounts, isLoading } = useGetValidDiscounts();
  const [code, setCode] = useState('');

  if (isLoading) return <Spinner />;

  const validateCode = () => {
    if (!code) return;

    const isValid = discounts.find(discount => discount.code === code);

    if (isValid) {
      sessionStorage.setItem(
        'DISCOUNT',
        JSON.stringify({ code: isValid.code, amount: isValid.amount })
      );
    }

    setCode('');
  };

  return (
    <StyledCartSummary>
      <Title as='h4'>DISCOUNT</Title>
      <div style={{ display: 'flex', gap: '.3rem', marginTop: '10px' }}>
        <DiscountInput value={code} onChange={e => setCode(e.target.value)} />
        <StyledBtn onClick={validateCode}>
          <HiOutlineCheck />
        </StyledBtn>
      </div>
    </StyledCartSummary>
  );
};

export default DiscountBox;
