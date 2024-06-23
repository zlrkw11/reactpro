import Civic from "./Civic";
import Lancer from "./Lancer";

export default function Cars() {
  let Car1 = <h1>Car1</h1>;
  let Car2 = <h1>Car2</h1>;
  let Car;
  const display = true;
  if (display) {
    Car = Car1;
  } else {
    Car = Car2;
  }
  return Car;
}
