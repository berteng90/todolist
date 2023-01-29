const addTask = (title, date) => {
  return {
    title: title,
    date: date,
  };
};

function generateData() {
  let data = {};
  for (i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    data[i] = localStorage.getItem(key);
  }
  return data;
}

(() => {
  const menu = document.querySelectorAll(".menu>div");
  menu.forEach((submenu) => {
    submenu.addEventListener("click", (submenu) => {
      if (submenu.target.className === "inbox") {
      } else if (submenu.target.className === "today") {
      } else if (submenu.target.className === "week") {
        const tasklist = document.querySelector(".task-list");
        const data = generateData();
        console.log(data);
      }
    });
  });
})();

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
              const date = document.createElement("input");
              date.type = "date";
              date.id = "dtpicker";
              newtask.appendChild(text);
              newtask.appendChild(date);
              tasklist.appendChild(newtask);
              div.remove();
              setDateMinimum(date);
              saveTask(taskname, date);
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

function setDateMinimum(date) {
  let range = new Date();
  let dd = range.getDate();
  let mm = range.getMonth() + 1;
  const yyyy = range.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  range = yyyy + "-" + mm + "-" + dd;
  date.setAttribute("min", range);
}

function saveTask(title, date) {
  date.addEventListener("change", () => {
    const task = {
      title: title,
      date: date.value,
    };
    console.log(task.date);
  });
}
