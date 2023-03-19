import { useState } from "react";
import { Icontact } from "../../types";

interface Iprops {
  addContact: (contact: Icontact) => void;
}

const ContactForm: React.FC<Iprops> = ({ addContact }) => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "contactName":
        setContactName(value);
        break;
      case "email":
        setContactEmail(value);
        break;
      case "phone":
        setContactPhone(value);
        break;
      default:
        throw new Error("Cannot find fild");
    }
  };
  const hendleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addContact({
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
    });
    setContactName("");
    setContactEmail("");
    setContactPhone("");
  };
  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="contactName"
            onChange={handleChange}
            value={contactName}
            required
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={contactEmail}
            required
          />
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={contactPhone}
            required
          />
        </label>
        <button type="submit">add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
