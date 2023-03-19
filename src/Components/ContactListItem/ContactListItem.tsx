import { IcontactItem } from "../../types";
interface Iprops {
  contact: IcontactItem;
  removeContact: (id: string) => void;
}

const ContactListItem: React.FC<Iprops> = ({ contact, removeContact }) => {
  const { name, email, phone, id } = contact;

  const hendleClick = () => {
    removeContact(id);
  };
  return (
    <li>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <button onClick={hendleClick}>dell</button>
    </li>
  );
};

export default ContactListItem;
