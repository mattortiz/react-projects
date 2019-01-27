import React, { Component } from "react";
import { Transition } from "react-spring";

import logo from "./logo.svg";
import "./App.css";
import { Toggle, colors } from "Utilities";
import { Card, Modal } from "Elements";
import User from "./User";
import UserProvider from "./UserProvider";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <User />
          <section>
            <Toggle>
              {({ on, toggle }) => (
                <>
                  <button onClick={toggle}>Show / Hide</button>
                  <Transition
                    items={on}
                    from={{ opacity: 0, bg: colors.white, height: "0px" }}
                    enter={{ opacity: 1, bg: colors.purple, height: "100px" }}
                    leave={{ opacity: 0, bg: colors.white, height: "0px" }}
                  >
                    <button onClick={toggle}>Login</button>
                    {on => on && LoginWrapper}
                  </Transition>
                </>
              )}
            </Toggle>
          </section>
          <Toggle>{({ on, toggle }) => UserModal}</Toggle>
        </div>
      </UserProvider>
    );
  }
}

const UserModal = (on, toggle) => (
  <Modal on={on} toggle={toggle}>
    <h1>What's up this is Matt</h1>
  </Modal>
);

const LoginWrapper = style => (
  <Card
    style={{
      opactity: style.opacity,
      background: style.bg,
      overflow: "hidden",
      height: style.height
    }}
  >
    <h1>Show me</h1>
  </Card>
);

export default App;
