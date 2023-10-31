import Onion from "../onion/Onion";
import Pizza from "../pizza/Pizza";
import Salad from "../salad/Salad";

export default function Resturnat() {
  return (
    <div>
        <div class="bg-dark">
            <h2 class="bg-danger text-center">Onion</h2>
        <Onion />

        </div>
        <div class="bg-danger ">
            <h2 class="bg-success text-center">Pizza</h2>
            <Pizza />

        </div>
        <div class="bg-success text-center">
            <h2 class="bg-warning">Salad</h2>
            <Salad />

        </div>
    </div>
  )
}
