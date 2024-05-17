/* eslint-disable react/prop-types */

import { useUserStore } from "../store/store";
import { deleteUser, useUser } from "../api/users";

const Users = ({ _updateID }) => {
  const setUsers = useUserStore((state) => state.setUsers);

  const { data, isError, isLoading } = useUser();

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

  if (data) {
    setUsers(data);
  }

  const handleDelete = async (id) => {
    deleteUser(id);
  };

  return (
    <div className="max-w-[500px]">
      {data.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((user) => {
              return (
                <tr key={user.name}>
                  <td className="">{user.id}</td>
                  <td className="">{user.name}</td>
                  <td className="">{user.email}</td>
                  <td
                    className="cursor-pointer"
                    onClick={() => _updateID(user.id)}
                  >
                    <span className="bg-destructive-500 text-white">
                      Update
                    </span>
                  </td>
                  <td
                    className="cursor-pointer"
                    onClick={() => handleDelete(user.id)}
                  >
                    <span className="bg-destructive-500 text-white">
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No Users found</p>
      )}
    </div>
  );
};

export default Users;
