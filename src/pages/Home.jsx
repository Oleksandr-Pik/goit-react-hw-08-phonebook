import React from 'react';
import { Helmet } from 'react-helmet';

export default function Home () {
  return (
    <div>
      <Helmet>
        <title>Your PhoneBook</title>
      </Helmet>
      <h1>Welcome to Your PhoneBook</h1>
      <p>
        This is phonebook app for your contacts. Here you can log in and save
        the necessary numbers of people you need in your account. You can
        register several times to create separate accounts that will store the
        phones of colleagues,friends or relatives separately.
      </p>
    </div>
  );
};
