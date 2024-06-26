import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            setName({ firstName: e.target.value });
          }}
          type="text"
          value={name.firstName}
        ></input>

        <input
          onChange={(e) => {
            setName({ firstName: e.target.value });
          }}
          type="text"
          value={name.firstName}
        ></input>
      </form>
    </div>
  );
}
