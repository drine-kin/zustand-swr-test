import { RouterProvider } from "react-router-dom";

import { routes } from "./routes";
import { useUserStore } from "./store/store";
import { useUser } from "./api/users";

const App = () => {
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

  return <RouterProvider router={routes} />;
};

export default App;
