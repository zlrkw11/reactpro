import Civic from "./Civic";
import Lancer from "./Lancer";

export default function Cars() {
  let display = false;
  {
    return display ? <Civic /> : <Lancer />;
  }
}
