const addTask = (title, date) => {
  return {
    title: title,
    date: date,
  };
};

(() => {
  const task = document.querySelector(".task");
  task.addEventListener("click", () => {
    if (document.querySelector(".addtask")) {
    } else {
      const tasklist = document.querySelector(".task-list");
      const div = document.createElement("div");
      const wrapper = document.createElement("div");
      wrapper.classList.add("button-wrapper");
      const add = document.createElement("button");
      add.classList.add("add");
      add.textContent = add.className.toUpperCase();
      const cancel = document.createElement("button");
      cancel.classList.add("cancel");
      cancel.textContent = cancel.className.toUpperCase();
      const textbox = document.createElement("input");
      textbox.classList.add("task-name");
      textbox.type = "text";
      div.classList.add("addtask");
      div.appendChild(textbox);
      div.appendChild(wrapper);
      wrapper.appendChild(add);
      wrapper.appendChild(cancel);
      tasklist.appendChild(div);
      task.setAttribute("style", "visibility:hidden");
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          if (button.className === "add") {
            if (textbox.value === "") {
              alert("Task name should not be empty!");
            } else {
              const taskname = textbox.value;
              const newtask = document.createElement("div");
              newtask.classList.add("newtask");
              newtask.id = taskname;
              const text = document.createElement("p");
              text.classList.add("newtask-name");
              text.textContent = taskname;
              newtask.appendChild(text);
              tasklist.appendChild(newtask);
              div.remove();
              task.setAttribute("style", "visibility:visible");
            }
          } else if (button.className === "cancel") {
            task.setAttribute("style", "visibility:visible");
            div.remove();
          }
        });
      });
    }
  });
})();

function createTask(title, date) {}
createTask();
