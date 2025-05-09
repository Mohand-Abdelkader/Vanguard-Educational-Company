import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--color-grey-50);
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: var(--color-primary-600);
  margin-bottom: 1rem;
  line-height: 1;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: var(--color-grey-700);
  margin-bottom: 2rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: var(--color-grey-600);
  margin-bottom: 3rem;
  max-width: 600px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: var(--color-primary-600);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-primary-700);
    transform: translateY(-2px);
  }
`;

function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Message>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Message>
      <StyledLink to="/">Return to Home</StyledLink>
    </Container>
  );
}

export default NotFound;
