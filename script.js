document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addTaskBtn").addEventListener("click", () => {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
      input.value = "";
    }
  });

  let timer = null;
  let seconds = 0;

  function updateTimerDisplay() {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${mins}:${secs}`;
  }

  document.getElementById("startTimerBtn").addEventListener("click", () => {
    if (!timer) {
      timer = setInterval(() => {
        seconds++;
        updateTimerDisplay();
      }, 1000);
    }
  });

  document.getElementById("stopTimerBtn").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
  });

  document.getElementById("resetTimerBtn").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateTimerDisplay();
  });
});
