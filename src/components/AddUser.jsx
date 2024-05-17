import { useState } from "react";

import { addUser } from "../api/users";
import { toast } from "react-toastify";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (name && email) {
        addUser({ name, email });
        setName("");
        setEmail("");
      } else {
        toast.warning("Both Name and Email required");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <label htmlFor="userName" className="min-w-[60px]">
            Name
          </label>
          <input
            type="text"
            name="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex space-x-4">
          <label htmlFor="userEmail" className="min-w-[60px]">
            Email
          </label>
          <input
            type="email"
            name="userEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>
        <input
          type="submit"
          value="Add"
          className="bg-primary-500 text-white"
        />
      </form>
    </div>
  );
};

export default AddUser;
