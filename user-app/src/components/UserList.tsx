import React from 'react';
import { User } from '../redux/reducers';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import "../styles/user-list.css";


const UserList: React.FC = () => {
  const users = useSelector((state: RootState) => state.users);

  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const filteredUsers: User[] = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="user-list-container">
      <h1>Users List</h1>
      <input
        type="text"
        placeholder="Search user by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {searchQuery === ''
            ? users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                  <td>{user.city}</td>
                  <td>{user.pincode}</td>
                </tr>
              ))
            : filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                  <td>{user.city}</td>
                  <td>{user.pincode}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
