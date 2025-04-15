import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-30 flex w-screen justify-between px-8 py-5">
      <div className="flex items-center gap-1">
        <img src="./assets/estatery-logo.svg" alt="Estatery Logo" />
        <h1 className="text-xl font-bold">Estatery</h1>
      </div>
      <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export default Navbar;
