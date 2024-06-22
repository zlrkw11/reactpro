import Civic from "./Civic";
import Lancer from "./Lancer";

export default function Cars() {
  const display = false;
  if (display) {
    return <Civic />;
  } else {
    return <Lancer />;
  }
}
