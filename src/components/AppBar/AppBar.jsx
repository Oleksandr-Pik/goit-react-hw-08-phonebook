// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
import Navigation from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import AuthNav from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Header >
      <Navigation />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </Header>
  );
};