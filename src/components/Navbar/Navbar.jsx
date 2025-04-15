import BurgerIcon from "./BurgerIcon";

function Navbar() {
  return (
    <nav className="flex w-screen justify-between px-8 py-5">
      <div className="flex items-center gap-1">
        <img src="./assets/estatery-logo.svg"></img>
        <h1 className="text-xl font-bold text-black">Estatery</h1>
      </div>
      <BurgerIcon />
    </nav>
  );
}

export default Navbar;
