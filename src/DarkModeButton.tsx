import React from "react";
import { Checkbox } from "semantic-ui-react";

class DarkModeButton extends React.Component {
  btn: any;
  state = { checked: false };
  constructor(props: any) {
    super(props);

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
      document.body.classList.toggle("dark-theme");
    } else if (currentTheme == "light") {
      document.body.classList.toggle("light-theme");
    }

    this.btn = (
      <Checkbox
        className="btn-toggle"
        value="מצב חשוך"
        toggle
        defaultChecked={currentTheme == "light" ? false : true}
        onClick={this.clicked}
      ></Checkbox>
    );
  }
  clicked() {
    const btn = document.querySelector(".btn-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light-theme");
      var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
      document.body.classList.toggle("dark-theme");
      var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }
    localStorage.setItem("theme", theme);
  }
  render() {
    return (
      <>
        <div
          className="form-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p>מצב חשוך</p>
          {this.btn}
        </div>
      </>
    );
  }
}
export default DarkModeButton;
