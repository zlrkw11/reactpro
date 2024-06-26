import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <form>
        <input
          // onChange={function demo(e) {
          //   return handleChange(e);
          // }}
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          value={name}
        ></input>
      </form>
    </div>
  );
}
