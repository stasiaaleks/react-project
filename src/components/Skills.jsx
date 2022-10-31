function Skills() {
  return (
    <div className="skills">
      <h2 className="skills-headline">Умения и навыки</h2>

      <div className="abilities">
        <span className="abilities__item">
          Вдохновение барда + магическое вдохновение
        </span>
        <span className="abilities__item">Темное зрение на 60 футов</span>
        <span className="abilities__item">Свирепая атака от расы</span>
        <span className="abilities__item">Контрочарование - 1 действие</span>
        <span className="abilities__item">
          Песнь отдыха - на коротком отдыхе
        </span>
      </div>

      <div className="general-skills">
        <span className="skill">Акробатика</span>
        <span className="skill skill_prof">Атлетика</span>
        <span className="skill skill_prof">Выступление</span>
        <span className="skill">Ловкость рук</span>
        <span className="skill skill_prof">Запугивание</span>
        <span className="skill">Обман</span>
        <span className="skill">Религия</span>
        <span className="skill">Магия</span>
        <span className="skill">Выживание</span>
        <span className="skill skill_prof">Убеждение</span>
      </div>
    </div>
  );
}

export default Skills;
