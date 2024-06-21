const name = "ZLRKW11";

function displayMessage() {
  return "Wow!";
}

function Hello({ name, message, emoji, seatNumber }) {
  return (
    <h1>
      {name} {message} {emoji} {seatNumber}
    </h1>
  );
}

export default Hello;
