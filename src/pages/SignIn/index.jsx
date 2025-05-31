import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Page from '../../components/Page';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import { Container, Row, Title, Label } from '../../components/Auth';
import UserContext from '../../contexts/UserContext';
import useSignIn from '../../hooks/api/useSignIn';

import logo from '../../assets/logo.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loadingSignIn, signIn } = useSignIn();
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    try {
      if (!email || !password) {
        toast('All fields are required!');
        return;
      } else {
        const userData = await signIn(email, password);
        setUserData(userData);
        toast('Login with sucess!');
        navigate('/home');
      }
    } catch (err) {
      toast('Something is wrong!,' + err.message);
    }
  }

  return (
    <Page >
      <Container>
        <Row>
          <img src={logo} alt="Ride Connect Logo" width="140px" />
          <Title>Ride Connect</Title>
        </Row>
        <Row>
          <Label></Label>
          <form onSubmit={submit}>
            <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
            <Input label="Password" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
            <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>LOGIN</Button>
          </form>
        </Row>
        <Row>
          <Link to="/Sign-up">Create a account here!</Link>
        </Row>
      </Container>
    </Page>
  );
}
