import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <form>
        <input
          onChange={function demo(e) {
            return handleChange(e);
          }}
          type="text"
          value={name}
        ></input>
      </form>
    </div>
  );
}
