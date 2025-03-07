document.querySelectorAll(".completed-btn").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Task Completed");
    const card = this.closest(".task-card");
    const taskTitle = card.querySelector("h2").textContent;

    const log = document.getElementById("activity-log");

    const time = new Date().toLocaleTimeString();
    const entry = `
      <p class="bg-white p-2 mb-2 rounded shadow">
        You have completed the task: <strong>${taskTitle}</strong> at ${time}
      </p>
    `;
    log.innerHTML += entry;

    this.disabled = true;
    this.classList.add("bg-gray-400");
    this.textContent = "Completed";

    const totalTaskEl = document.getElementById("total-task");
    let totalTaskCount = parseInt(totalTaskEl.textContent, 10);
    totalTaskCount += 1;
    totalTaskEl.textContent = totalTaskCount;

    const taskAssignedElement = document.getElementById("task-assigned");
    let taskAssignedCount = parseInt(taskAssignedElement.textContent, 10);
    taskAssignedCount -= 1;
    taskAssignedElement.textContent = taskAssignedCount;
  });
});

document
  .getElementById("clear-activity-btn")
  .addEventListener("click", function () {
    document.getElementById("activity-log").innerHTML = "";
  });

document.getElementById("discover-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

const currentDateElement = document.getElementById("current-date");
function getCurrentDate() {
  const now = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return now.toLocaleDateString("en-US", options);
}
currentDateElement.textContent = getCurrentDate();

const themeBtn = document.querySelector(".theme-btn img");
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F3FF33",
  "#FF33F3",
  "#33FFF3",
];
let currentColorIndex = 0;

themeBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});

// document.getElementById("completed-btn-2").addEventListener("click", () => {
//   alert("Task Completed");
// });
// document.getElementById("completed-btn-2").addEventListener("click",  {
