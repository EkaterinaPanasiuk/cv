document.addEventListener("DOMContentLoaded", (e) => {
  document.addEventListener("click", (e) => {
    searchEvent(e);
  });
});
function searchEvent(e) {
  const id = e.target.id;
  switch (true) {
    case id === "project":
      {
        showTab(id);
        actiweTab(id);
      }
      break;

    case id === "email":
      {
        showTab(id);
        actiweTab(id);
      }
      break;
    case id === "rs-school":
      {
        showTab(id);
        actiweTab(id);
      }
      break;
  }
}

function showTab(id) {
  const tabCollection = document.querySelectorAll(".tabs");
  tabCollection.forEach((i) => i.classList.add("hidden"));
  const tab = document.getElementById(`${id}-wrapper`);
  tab.classList.remove("hidden");
}
function actiweTab(id) {
  console.log("input");
  const inputCollection = document.querySelectorAll("input");
  inputCollection.forEach((i) => (i.checked = false));
  const input = document.getElementById(`${id}`);
  console.log(input);
  input.checked = true;

  // input.setAttribute("checked", "checked");
}
