export default function Form() {
  function handleChange() {
    console.log("Change occured");
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" value="Name"></input>
      </form>
    </div>
  );
}
