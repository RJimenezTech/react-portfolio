import React from "react";

function Header() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Robert Jimenez
        </a>
      </h2>
    </header>
  );
}

export default Header;
