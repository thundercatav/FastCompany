import React, { useState } from "react";
import Users from "./components/users";

function App({ users, handleDelete, handleToggleBookMark }) {
  return (
    <div>
      <Users
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
        users={users}
      />
    </div>
  );
}

export default App;
