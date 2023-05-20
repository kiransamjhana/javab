// capture the tdata  from the form on form submit

let taskList = [];

const entryElm = document.getElementById("entry");

const handlOnSubmit = (e) => {
  const formDt = new FormData(e);
  const task = formDt.get("task");
  const hr = formDt.get("hr");

  console.log(task, hr);

  const taskObj = {
    task,
    hr,
    id: randomGennerator(),
  };

  taskList.push(taskObj);
  console.log(taskList);
  displayTask();
};

// DISPLAYIG DATA IN THE BROWWER

const displayTask = () => {
  let str = "";
  taskList.map((item, i) => {
    str += `<tr>
    <td>${item.task}</td>
    <td>${item.task}</td>
    <td>
      <button class="btn btn-danger" onclick="deleteTask('${item.id}')">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button class="btn btn-success">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
    </td>
  </tr>`;
  });
  entryElm.innerHTML = str;
};

//  create unique id

const randomGennerator = (length = 6) => {
  const collection = "qwertyuiopasdfghjklzxcvbnm";
  let str = "";
  for (let i = 0; i < length; i++) {
    const ranNum = Math.round(Math.random() * collection.length - 1);
    str += collection[ranNum];
  }
  return str;
};

const deleteTask = (id) => {
  if (window.confirm("Are you sure you wanat to delete it ")) {
    taskList = taskList.filter((item) => item.id !== id);
    displayTask();
  }
};
