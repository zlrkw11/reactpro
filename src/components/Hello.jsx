const name = "ZLRKW11";

function displayMessage() {
  return "Wow!";
}

function Hello(props) {
  console.log(props);
  return (
    <h1>
      {props.message} {props.name}
    </h1>
  );
}

export default Hello;
