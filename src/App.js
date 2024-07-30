import './App.css';
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newContactNumber, setNewContactNumber] = useState(0);
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, last_name: newLastName, email: newEmail, contact_number: newContactNumber, city: newCity, state: newState  });
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  },);

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div class="container">
            {" "}
            <h1>Registered Users</h1>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact Number</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact_number}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                </tr>
              </tbody>
            </table>

          </div>
        );
      })}
      <input placeholder='Name...'
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input placeholder='Last Name...'
        onChange={(event) => {
          setNewLastName(event.target.value);
        }} />
      <input placeholder='Email...'
        onChange={(event) => {
          setNewEmail(event.target.value);
        }} />
      <input type="number" placeholder='Mobile...'
        onChange={(event) => {
          setNewContactNumber(event.target.value);
        }} />
      <input placeholder='City...'
        onChange={(event) => {
          setNewCity(event.target.value);
        }}
      />
      <input placeholder='State...'
        onChange={(event) => {
          setNewState(event.target.value);
        }}
      />
      <button onClick={createUser}>Create User</button>
    </div>
  );
}

export default App;
