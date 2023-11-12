import React from 'react';
import users from '../data/users';

const UserDropdown = () => {
  return (
    <select>
      {users.map(user => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserDropdown;