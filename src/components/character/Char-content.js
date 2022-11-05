import Character from "./Char-brief";
import { MainStats } from "./Stats";
import Equipment from "./Equipment";
import Skills from "./Skills";
import { Origin } from "./Origin";

function CharContent() {
  return (
    <div className="character">
      <Character></Character>
      <MainStats></MainStats>
      <Equipment></Equipment>
      <Skills></Skills>
      <Origin></Origin>
    </div>
  );
}

export default CharContent;
