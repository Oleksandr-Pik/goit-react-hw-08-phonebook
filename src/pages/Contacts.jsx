import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
// import { Container } from './App.styled';

export default function Contacts() {
  return (
    <>
      <div>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    </>
  );
}
