/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState } from "react";

import Users from "../components/Users";
import AddUser from "../components/AddUser";
import UpdateUser from "../components/UpdateUser";

const Home = () => {
  const [updateID, _updateID] = useState(null);

  return (
    <div className="space-y-6 p-6 bg-neutral-500">
      <h1>Testing</h1>
      <div className="space-y-6">
        <AddUser />
        <Users _updateID={_updateID} />
        {updateID && <UpdateUser updateID={updateID} _updateID={_updateID} />}
      </div>
    </div>
  );
};

export default Home;
