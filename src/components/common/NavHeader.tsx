export default function NavHeader() {
  return (
    <nav className="nav-header text-2xl">
      <ul className="flex flex-row gap-25">
        <li>
          <a className="cursor-pointer">Sobre nós</a>
        </li>
        <li>
          <a className="cursor-pointer">Apoie o projeto</a>
        </li>
      </ul>
    </nav>
  );
}
