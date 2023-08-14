import React, { useState } from "react";
import { RootState } from "../redux/store";
import { addUser } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../redux/reducers";
import { Toaster, toast } from "react-hot-toast";
import "../styles/registration-form.css";

const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password:"",
    dob: "",
    city: "",
    pincode: 0,
  });

  const handleRegistration = (event: React.FormEvent) => {
    event.preventDefault();

    const birthDate = new Date(user.dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
      toast.error("You must be 18 years or older to register.");
      return;
    }

    const isEmailUnique =
      users?.length > 0 && users?.find((u) => u.email === user.email);
    console.log(isEmailUnique, users?.length, users);
    if (isEmailUnique) {
      toast.error("Email is already registered.");
      return;
    }

    if (!user.email.includes(".com")) {
      toast.error("Email must be a valid email.");
      return;
    }

    if (`${user.pincode}`.length !== 6 && user.pincode > 0) {
      toast.error("Pincode must be 6 digits long.");
      return;
    }

    dispatch(addUser(user));
    toast.success("Registration successful!");
    setUser({
      name: "",
      email: "",
      password:"",
      dob: "",
      city: "",
      pincode: 0,
    });
  };

  return (
    <div className="registration-form">
      <Toaster />
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <label>Name:</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          value={user.dob}
          onChange={(e) => setUser({ ...user, dob: e.target.value })}
          required
        />

        <label>City:</label>
        <input
          type="text"
          value={user.city}
          onChange={(e) => setUser({ ...user, city: e.target.value })}
          required
        />

        <label>Pincode:</label>
        <input
          type="number"
          value={user.pincode === 0 ? "" : user.pincode}
          onChange={(e) =>
            setUser({ ...user, pincode: Number(e.target.value) })
          }
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
