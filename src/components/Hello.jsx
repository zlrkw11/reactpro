const name = "ZLRKW11";

function displayMessage() {
  return "Wow!";
}

function Hello({ person }) {
  return (
    <h1>
      {person.name}
      {person.message}
      {person.food}
      {person.seatNumbers}
    </h1>
  );
}

export default Hello;
