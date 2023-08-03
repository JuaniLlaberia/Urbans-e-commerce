import { styled } from 'styled-components';
import Spinner from '../../components/Spinner';
import { useGetOrder } from './useGetOrder';
import Title from '../../components/Title';
import Top from '../../components/Top';
import Box from '../../components/Box';
import {
  HiOutlineBanknotes,
  HiOutlineBolt,
  HiOutlineEnvelope,
  HiOutlineFlag,
  HiOutlineHome,
  HiOutlineStar,
  HiOutlineTruck,
  HiOutlineUser,
} from 'react-icons/hi2';
import { formatCurrency } from '../../utils/formatCurrency';
import { expressPrice } from '../../utils/constants';
import StatusTag from './StatusTag';

const StyledDetails = styled.section`
  margin-bottom: 25px;
`;

const Boxes = styled.section`
  display: grid;
  column-gap: 2rem;
  row-gap: 1rem;
`;

const DetailsBox = ({ id }) => {
  const { order, isLoading } = useGetOrder(id);

  if (isLoading) return <Spinner />;

  const {
    shipmentAddress: address,
    shipmentType,
    status,
    isPaid,
    totalPrice,
    customerId,
  } = order;

  return (
    <StyledDetails>
      <Top>
        <Title as='h2'>Order #{String(id).padStart(4, '0')}</Title>
        <div style={{ display: 'flex', gap: '.4rem' }}>
          <StatusTag type={shipmentType}>
            {shipmentType === 'Express' ? <HiOutlineBolt /> : <HiOutlineStar />}
            <span>{shipmentType}</span>
          </StatusTag>
          <StatusTag type={status}>
            <HiOutlineTruck />
            <span>{status}</span>
          </StatusTag>
        </div>
      </Top>
      <Boxes>
        <Box>
          <Box.Head>Order information</Box.Head>
          <Box.Body>
            <Box.Item>
              <HiOutlineUser /> <span>{customerId.fullName}</span>
            </Box.Item>
            <Box.Item>
              <HiOutlineHome /> <span>{address}</span>
            </Box.Item>
            <Box.Item>
              <HiOutlineEnvelope /> <span>{customerId.email}</span>
            </Box.Item>
            <Box.Item>
              <HiOutlineFlag /> <span>{customerId.country}</span>
            </Box.Item>
            <Box.Item>
              <HiOutlineBanknotes />
              <span>Payment status:</span>{' '}
              <span>{isPaid ? 'Approved' : 'Declined'}</span>
            </Box.Item>
          </Box.Body>
        </Box>
        <Box>
          <Box.Head>Payment information</Box.Head>
          <Box.Body>
            <Box.Item space='between'>
              <span>Products price</span>
              <span>{formatCurrency(totalPrice - expressPrice)}</span>
            </Box.Item>
            <Box.Item space='between'>
              <span>
                Shipment ({shipmentType === 'Regular' ? 'Regular' : 'Express'})
              </span>
              <span>
                {shipmentType === 'Regular'
                  ? formatCurrency(0)
                  : formatCurrency(expressPrice)}
              </span>
            </Box.Item>
            <br />
            <Box.Item space='between'>
              <span>Total</span>
              <span>{formatCurrency(totalPrice)}</span>
            </Box.Item>
          </Box.Body>
        </Box>
      </Boxes>
    </StyledDetails>
  );
};

export default DetailsBox;
