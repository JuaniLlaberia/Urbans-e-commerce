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
import StatusTag from './StatusTag';
import DetailsBtns from './DetailsBtns';
import { useGetShippingPrices } from '../Settings/useGetShippingPrices';

const StyledDetails = styled.section`
  margin-bottom: 25px;
`;

const Boxes = styled.section`
  display: grid;
  column-gap: 2rem;
  row-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const DetailsBox = ({ id, children, isCustomer }) => {
  const { order, isLoading: isLoading1 } = useGetOrder(id);
  const { shippingCosts, isLoading: isLoading2 } = useGetShippingPrices();

  if (isLoading1 || isLoading2) return <Spinner />;

  if (!order)
    return (
      <p style={{ textAlign: 'justify' }}>
        No order found with ID: <span>{id}</span>. Please try again and ensure
        that you type the correct number. (Do not include the #)
      </p>
    );

  const {
    shipmentAddress: address,
    shipmentType,
    status,
    isPaid,
    totalPrice,
    customerName,
    customerEmail,
    country,
  } = order;

  return (
    <>
      <StyledDetails>
        <Top>
          <Title as='h2'>Order #{id}</Title>
          <div style={{ display: 'flex', gap: '.4rem' }}>
            <StatusTag type={shipmentType}>
              {shipmentType === 'Express' ? (
                <HiOutlineBolt />
              ) : (
                <HiOutlineStar />
              )}
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
                <HiOutlineUser /> <span>{customerName}</span>
              </Box.Item>
              <Box.Item>
                <HiOutlineHome /> <span>{address}</span>
              </Box.Item>
              <Box.Item>
                <HiOutlineEnvelope /> <span>{customerEmail}</span>
              </Box.Item>
              <Box.Item>
                <HiOutlineFlag /> <span>{country}</span>
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
                <span>
                  {formatCurrency(
                    totalPrice -
                      (shipmentType === 'Regular'
                        ? shippingCosts.regularPrice
                        : shippingCosts.expressPrice)
                  )}
                </span>
              </Box.Item>
              <Box.Item space='between'>
                <span>
                  Shipment ({shipmentType === 'Regular' ? 'Regular' : 'Express'}
                  )
                </span>
                <span>
                  {shipmentType === 'Regular'
                    ? formatCurrency(shippingCosts.regularPrice)
                    : formatCurrency(shippingCosts.expressPrice)}
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
      {children}
      {isCustomer && <DetailsBtns id={id} status={status} />}
    </>
  );
};

export default DetailsBox;
