import { Nav, Burger } from "./nav";

function Header() {
  return (
    <header className="header">
      <a href="#">LOGO</a>
      <Nav></Nav>
      <Burger></Burger>
    </header>
  );
}

export default Header;
