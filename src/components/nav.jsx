const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <a className="nav__link" href="#">
          link
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">
          link
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">
          link
        </a>
      </li>
    </ul>
  );
};

function Burger() {
  return (
    <>
      <div>line</div>
      <div>line</div>
      <div>line</div>
    </>
  );
}

export { Nav, Burger };
