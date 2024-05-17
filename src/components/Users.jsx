/* eslint-disable react/prop-types */

import { useUserStore } from "../store/store";
import { deleteUser } from "../api/users";

const Users = ({ _updateID }) => {
  const { users } = useUserStore();

  const handleDelete = async (id) => {
    deleteUser(id);
  };

  return (
    <div className="max-w-[500px]">
      {users.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user) => {
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
