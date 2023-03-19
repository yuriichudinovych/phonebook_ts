import React, { useState } from "react";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList/ContactList";
import { Icontact, IcontactItem } from "../../types";
import { nanoid } from "nanoid";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<IcontactItem[]>([]);

  const addContact = (contactInfo: Icontact) => {
    const newContact = { ...contactInfo, id: nanoid() };
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const removeContact = (id: string) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== id);
    });
  };
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} removeContact={removeContact} />
    </div>
  );
};

export default App;
