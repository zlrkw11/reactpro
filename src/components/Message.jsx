export default function () {
  function handleClick() {
    console.log("Button is clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click here to get a message</button>
    </div>
  );
}
