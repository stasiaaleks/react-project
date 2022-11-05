function Character() {
  return (
    <>
      <h1 className="headline">Краткий лист персонажа</h1>

      <div className="char-brief">
        <img
          src="https://i.redd.it/9xpx92a0js831.png"
          alt=""
          className="char-brief__photo"
        />
        <div className="char-brief__info">
          <span className="char-brief__name char-brief__item">
            Имя: Триксагар
          </span>
          <span className="char-brief__race char-brief__item">
            Раса: Полуорк
          </span>
          <span className="char-brief__class char-brief__item">
            Класс: Бард
          </span>
          <span className="char-brief__level char-brief__item">Уровень: 6</span>
        </div>
      </div>
    </>
  );
}

export default Character;
