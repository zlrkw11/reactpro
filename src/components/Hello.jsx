const name = "ZLRKW11";

function displayMessage() {
  return "Wow!";
}

function Hello({ name, message }) {
  return (
    <h1>
      {message} {name}
    </h1>
  );
}

export default Hello;
