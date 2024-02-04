
// import Contacts from 'pages/Contacts';
// import Home from 'pages/Home';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Route>
      </Routes>

  
  );
};

export default App;
