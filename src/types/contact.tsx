export interface Icontact {
  name: string;
  email: string;
  phone: string;
}

export interface IcontactItem extends Icontact {
  id: string;
}
