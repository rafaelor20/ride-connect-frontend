import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <p>&copy; 2024 Ride Connect. All rights reserved.</p>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #888;
  p{
    color: white;
  }
`;
