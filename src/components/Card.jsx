import Count from "./Count";
import CountButtons from "./CountButtons";
import Reset from "./Reset";
import Title from "./Title";

export default function Card(){
    return(<>
    <div className="card">
      <Title/>
      <Count/>
      <Reset/>
      <CountButtons/>
    </div>
    </>)
}