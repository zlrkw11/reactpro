import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <h3>
          {name.firstName} - {name.lastName}
        </h3>
        <input
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value });
          }}
          type="text"
          value={name.firstName}
        ></input>

        <input
          onChange={(e) => {
            setName({ ...name, lastName: e.target.value });
          }}
          type="text"
          value={name.lastName}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}
