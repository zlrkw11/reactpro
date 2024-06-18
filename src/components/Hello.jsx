const name = "ZLRKW11";

function displayMessage() {
  return "Wow!";
}

function Hello({ name, message, emoji }) {
  return (
    <h1>
      {message} {name} {emoji}
    </h1>
  );
}

export default Hello;
