const name = "ZLRKW11";

function displayMessage() {
  return "Wow!";
}

function Hello(props) {
  return (
    <h1>
      {props.message} {props.name} {props.emoji}
    </h1>
  );
}

export default Hello;
