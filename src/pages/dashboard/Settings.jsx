import Title from '../../components/Title';
import ContactInfo from '../../features/Settings/ContactInfo';
import ShippingInfo from '../../features/Settings/ShippingInfo';

const Settings = () => {
  return (
    <>
      <Title as='h2'>Store settings</Title>
      <br />
      <ContactInfo />
      <br />
      <ShippingInfo />
    </>
  );
};

export default Settings;
