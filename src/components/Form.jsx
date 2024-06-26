import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        {name.firstName}
        <input
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value });
          }}
          type="text"
          value={name.firstName}
        ></input>
        {name.lastName}
        <input
          onChange={(e) => {
            setName({ ...name, lastName: e.target.value });
          }}
          type="text"
          value={name.lastName}
        ></input>
      </form>
    </div>
  );
}
