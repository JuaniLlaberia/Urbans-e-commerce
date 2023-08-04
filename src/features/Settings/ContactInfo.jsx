import Box from '../../components/Box';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import Form from '../../components/Form';
import Spinner from '../../components/Spinner';
import { useGetContactInfo } from './useGetContactInfo';
import { useUpdateFieldContact } from './useUpdateFieldContact';

const ContactInfo = () => {
  const { contactInfo: { email, phoneNumber } = {}, isLoading } =
    useGetContactInfo();
  const { updateField, isUpdating } = useUpdateFieldContact(
    'contact-info',
    'contact-info'
  );

  if (isLoading) return <Spinner />;

  const handleUpdate = (e, field) => {
    const value = e.target.value;
    if (!value) return;
    if (value === email || value === phoneNumber) return;

    //Update field
    updateField({ [field]: value });
  };

  return (
    <Box>
      <Box.Head>Contact information</Box.Head>
      <Box.Body>
        <Form>
          <InputContainer type='vertical' label='Email address' id='email'>
            <Input
              disabled={isUpdating}
              id='email'
              type='email'
              defaultValue={email}
              onBlur={e => handleUpdate(e, 'email')}
            />
          </InputContainer>
          <InputContainer type='vertical' label='Phone number' id='phone'>
            <Input
              id='phone'
              disabled={isUpdating}
              type='phone'
              defaultValue={phoneNumber}
              onBlur={e => handleUpdate(e, 'phoneNumber')}
            />
          </InputContainer>
        </Form>
      </Box.Body>
    </Box>
  );
};

export default ContactInfo;
