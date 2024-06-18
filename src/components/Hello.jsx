const name = "ZLRKW11";

function displayMessage() {
  return "Wow!";
}

function Hello() {
  return (
    <h1>
      Hello from a component! {displayMessage()} {name}
    </h1>
  );
}

export default Hello;
