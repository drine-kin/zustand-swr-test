import { useUserStore } from "../store/store";

const AboutUs = () => {
  const users = useUserStore((state) => state.users);

  return (
    <div className="max-w-[500px] py-6">
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

export default AboutUs;
