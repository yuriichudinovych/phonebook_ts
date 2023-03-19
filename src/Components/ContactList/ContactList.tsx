import ContactListItem from "../ContactListItem";
import { IcontactItem } from "../../types";
interface Iprops {
  contacts: IcontactItem[];
  removeContact: (id: string) => void;
}

const ContactList: React.FC<Iprops> = ({ contacts, removeContact }) => {
  console.log("contacts", contacts);
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <ContactListItem
            key={contact.id}
            contact={contact}
            removeContact={removeContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
