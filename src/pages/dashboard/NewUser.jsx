import SignUpForm from '../../features/Authentication/SignUpForm';
import Title from '../../components/Title';

const NewUser = () => {
  return (
    <>
      <Title as='h2'>Sign Up Admin</Title>
      <SignUpForm />
    </>
  );
};

export default NewUser;
