function MainStats() {
  return (
    <div className="stats">
      <h2 className="stats-headline">Статистики</h2>
      <div className="main-stats">
        <span className="main-stats__item">Сила: 15</span>
        <span className="main-stats__item">Ловкость: 15</span>
        <span className="main-stats__item">Телосложение: 15</span>
        <span className="main-stats__item">Интеллект: 11</span>
        <span className="main-stats__item">Мудрость: 12</span>
        <span className="main-stats__item">Харизма: 16</span>
      </div>
      <div className="other-stats">
        <span className="other-stats__item">Класс доспеха: 17</span>
        <span className="other-stats__item">Максимальные хиты: 41</span>
        <span className="other-stats__item">Скорость: 30 футов</span>
      </div>
    </div>
  );
}

export { MainStats };
