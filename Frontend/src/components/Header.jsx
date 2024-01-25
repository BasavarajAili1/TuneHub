import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="http://localhost:3000/">
          <pre> Tune Hub</pre>
        </a>
        <a
          class="btn btn-primary"
          href="/http://localhost:3000/"
          role="button"
          tabindex="-1"
        >
          Home
        </a>
        <form class="form-inline my-2 my-lg-0 d-inline-flex gap-2">
          <a class="btn btn-primary" href="/login" role="button">
            Login
          </a>
          <a class="btn btn-primary" href="/logout" role="button">
            Logout
          </a>
          <a class="btn btn-primary" href="/registration" role="button">
            Sign Up
          </a>
        </form>
      </nav>
    </header>
  );
}

export default Header