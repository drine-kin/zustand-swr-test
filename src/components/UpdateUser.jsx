/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { updateUser, useUser } from "../api/users";
import { toast } from "react-toastify";

const UpdateUser = ({ updateID, _updateID }) => {
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { data, isError, isLoading } = useUser(updateID);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  if (isError) {
    return (
      <div className="w-full max-w-[500px] h-[400px] flex justify-center items-center">
        <h1 className="text-destructive-500 text-title-1">
          Unexpected Error Occured
        </h1>
        <p>{isError}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full max-w-[500px] h-[400px] flex justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (name || email) {
        updateUser(updateID, { name, email });
        setName("");
        setEmail("");
        _updateID(null);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="max-w-[500px]">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <label htmlFor="name" className="min-w-[60px]">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex space-x-4">
          <label htmlFor="email" className="min-w-[60px]">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>
        <input
          type="submit"
          value="Update"
          className="bg-primary-500 text-white"
        />
      </form>
    </div>
  );
};

export default UpdateUser;
