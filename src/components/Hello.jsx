const name = "ZLRKW11";

function displayMessage() {
  return "Wow!";
}

function Hello(props) {
  return (
    <h1>
      {props.person.name}
      {props.person.message}
      {props.person.food}
      {props.person.seatNumbers}
    </h1>
  );
}

export default Hello;
