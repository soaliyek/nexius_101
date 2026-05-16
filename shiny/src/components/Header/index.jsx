import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/freelancers">Freelancers</Link>
        <Link to="/survey/1">Survey</Link>
      </nav>
    </header>
  );
}

export default Header;
