document.getElementById("addBtn").addEventListener("click", function() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
});

let timer;
let seconds = 0;

function updateDisplay() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById("timer").textContent = `${mins}:${secs}`;
}

document.getElementById("startBtn").addEventListener("click", function() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
});

document.getElementById("stopBtn").addEventListener("click", function() {
  clearInterval(timer);
  timer = null;
});

document.getElementById("resetBtn").addEventListener("click", function() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateDisplay();
});
