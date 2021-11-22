import { useState } from 'react';
import Filter from '../Filter/Filter';
import UsersList from '../UsersList/UsersList';
import './Users.css';

export default function Users() {
  const defaultGender = 'all';
  let [selectedGender, setSelectedGender] = useState(defaultGender);
  return (
    <section className="users">
      <Filter selectedGender={selectedGender} setSelectedGender={setSelectedGender} />
      <UsersList selectedGender={selectedGender} defaultGender={defaultGender} />
    </section>
  );
}
