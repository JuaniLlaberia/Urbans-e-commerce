import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Accordion from '../../components/AccordionText';
import ContactInfo from '../../components/ContactInfo';
import { useGetMainCategories } from '../../features/Categories/useGetMainCategories';
import Spinner from '../../components/Spinner';

const StyledFooter = styled.footer`
  background-color: var(--color-white-2);
  border-top: var(--border-sm);
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const FooterList = styled.ul`
  list-style: none;

  & li a {
    text-decoration: none;
    color: var(--color-white-5);
    opacity: 0.85;
  }

  & li a:hover {
    text-decoration: underline;
    color: var(--color-white-5);
    opacity: 1;
  }
`;

const CopyRow = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & svg {
    font-size: 1.5rem;
    color: var(--color-white-5);
    transition: all 0.3s ease;
  }

  & svg:hover {
    color: var(--color-white-6);
    cursor: pointer;
  }
`;

const CopyRight = styled.p`
  font-size: 0.8rem;
  color: var(--color-white-5);
`;

const Footer = () => {
  const { mainCategories, isLoading } = useGetMainCategories();

  if (isLoading) return <Spinner />;

  return (
    <StyledFooter>
      <Accordion>
        <Accordion.Opener title='Collections' opens='collections' />
        <Accordion.Body id='collections'>
          <FooterList>
            {mainCategories?.map(category => (
              <li key={category.id}>
                <Link to={`/products/${category.name}`}>{category.name}</Link>
              </li>
            ))}
          </FooterList>
        </Accordion.Body>
      </Accordion>
      <Accordion>
        <Accordion.Opener title='Help' opens='help' />
        <Accordion.Body id='help'>
          <FooterList>
            <li>
              <Link to='/orders'>Tack my orders</Link>
            </li>
            <li>
              <Link to='/products/saved'>Saved products</Link>
            </li>
            <li>
              <Link to='/cart'>My cart</Link>
            </li>
            <li>
              <Link to='/'>FaQ</Link>
            </li>
            <li>
              <Link to='/complains/new'>Problem with order</Link>
            </li>
          </FooterList>
        </Accordion.Body>
      </Accordion>
      <Accordion>
        <Accordion.Opener title='About Us' opens='about' />
        <Accordion.Body id='about'>
          <p style={{ textAlign: 'justify' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </Accordion.Body>
      </Accordion>
      <ContactInfo />
      <CopyRow>
        <CopyRight>
          Copyright @Juanillaberia {new Date().getFullYear()}
        </CopyRight>
        <IconsContainer>
          <a
            href='https://www.linkedin.com/in/juan-ignacio-llaberia-241b351b3/'
            target='blank'
          >
            <FaLinkedin />
          </a>
          <a href='https://github.com/JuaniLlaberia' target='blank'>
            <FaGithub />
          </a>
        </IconsContainer>
      </CopyRow>
    </StyledFooter>
  );
};

export default Footer;
