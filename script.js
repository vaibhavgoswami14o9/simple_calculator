let string = "";
let buttons = document.querySelectorAll(".numbuttons");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "=":
        try {
          string = eval(string.replace(/÷/g, "/"));
          document.querySelector(".displaytext").textContent = string;
        } catch (error) {
          document.querySelector(".displaytext").textContent = "Error";
        }
        break;
      case "AC":
        string = "";
        document.querySelector(".displaytext").textContent = "0";
        break;
      case "DEL":
        string = string.slice(0, -1);
        document.querySelector(".displaytext").textContent = string || "0";
        break;
      default:
        string += e.target.textContent;
        document.querySelector(".displaytext").textContent = string;
    }
  });
});