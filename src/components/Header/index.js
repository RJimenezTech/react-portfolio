import React from "react";

function Header() {
  return (
    <header className="flex-row px-1 main-link">
      <h2 className="main-link">
        <a data-testid="link" href="/" className="main-link">
          Robert Jimenez
        </a>
      </h2>
    </header>
  );
}

export default Header;
