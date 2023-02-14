import "../css/style.scss";
import axios from "axios";

document.querySelector("button").onclick = async (e) => {
  e.preventDefault();
  const { value } = document.querySelector("form input[type=text]");
  if (value.length >= 2) {
    const response = await axios(`https://www.boredapi.com/${value}`);
    if (response.data) {
      document.querySelector("section").innerHTML = response.data.activities
        .map(
          ({ activity, type }) => `
                          <aside>
                              <h2>${activity}</h2>
                              <p>${type}</p>
                          </aside>
                       `
        )
        .join("");
    }
  }
};

// de code in commentaar heb ik gevonden adhv cht gpt, ik heb deze niet gebruikt omdat ik niet veel leer door gewoon te kopiëren

// let form = document.getElementById("activity-form");
// form.addEventListener("submit", getBoredActivity);

// function getBoredActivity(event) {
//   event.preventDefault();
//   axios
//     .get("https://www.boredapi.com/api/activity")
//     .then((response) => {
//       displayActivity(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// function displayActivity(data) {
//   let container = document.getElementById("activity-container");
//   container.innerHTML = "<p>" + data.activity + "</p>";
// }
