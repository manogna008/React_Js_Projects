import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2 className="name">Name: {name}</h2>
      <h3>Location: Vizag</h3>
      <h4>Contact: manogna008</h4>
    </div>
  );
};

export default User;
