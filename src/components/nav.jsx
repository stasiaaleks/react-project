function Logo() {
  return (
    <img
      className="nav__logo"
      src="https://logos-world.net/wp-content/uploads/2021/12/DnD-Symbol.png"
      alt=""
    />
  );
}

function Nav() {
  return (
    <ul className="nav">
      <li className="nav__item">
        <a className="nav__link" href="#">
          Персонаж
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">
          Статистики
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">
          Снаряжение
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">
          Навыки
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">
          Предыстория
        </a>
      </li>
    </ul>
  );
}

export { Logo, Nav };
