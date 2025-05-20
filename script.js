let taskList = document.getElementById("taskList");
function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    taskList.appendChild(li);
    input.value = "";
  }
}

let timer;
let seconds = 0;

function formatTime(sec) {
  const mins = String(Math.floor(sec / 60)).padStart(2, "0");
  const secs = String(sec % 60).padStart(2, "0");
  return \`\${mins}:\${secs}\`;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      document.getElementById("timer").textContent = formatTime(seconds);
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  document.getElementById("timer").textContent = "00:00";
}
