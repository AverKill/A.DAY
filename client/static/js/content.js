function createHabitElement(b) {
  if (!b) {
    throw "No data provided";
  }

  const elem = document.createElement("div");
  elem.className = "card"
  const t = document.createElement("div")
  t.className = "card-body"
  t.textContent = b;
  elem.append(t)
  return elem;

}

function collect() {
  fetch(`http://localhost:3001/habits/${localStorage.getItem("username")}`)
    .then((res) => res.json())
    .then((data) => {
      data.habit.habit.forEach((b) => {
        const x = createHabitElement(b);
        
        document.querySelector("#data").appendChild(x);
      });
    })
    .catch((err) => console.log(err));
}
collect();
