// capture the tdata  from the form on form submit

let taskList = [];

const entryElm = document.getElementById("entry");
const badElm = document.getElementById("bad");

const handlOnSubmit = (e) => {
  const formDt = new FormData(e);
  const task = formDt.get("task");
  const hr = +formDt.get("hr");

  // console.log(task, hr);

  const taskObj = {
    task,
    hr,
    id: randomGennerator(),
    type: "entry",
  };

  if (totalHours() + hr > 168) {
    return alert(
      "sorry mates, you dont have enought time to left to do this task"
    );
  }

  taskList.push(taskObj);

  displayTask();
};

// DISPLAYIG DATA IN THE BROWWER

const displayTask = () => {
  const entryList = taskList.filter((item) => item.type === "entry");
  let str = "";
  entryList.map((item, i) => {
    str += `
    <tr>
    <td>${item.task}</td>
    <td>${item.hr} hrs</td>
    <td>
      <button class="btn btn-danger" onclick="deleteTask('${item.id}')">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button class="btn btn-warning btn -sm" onclick= "switchTask('${item.id}', 'entry')">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </td>
  </tr>`;
  });
  entryElm.innerHTML = str;
  displayTask();
};
const displayBadTask = () => {
  const badList = taskList.filter((item) => item.type === "bad");
  let str = "";
  badList.map((item, i) => {
    str += `
<tr>
<td>${item.task}</td>
<td>${item.hr} hrs</td>
<td>

<button class="btn btn-warning btn-sm"
  onclick="swithcTask('${item.id}', 'entry' )"
  >
    <i class="fa-solid fa-arrow-left"></i>
  </button>
  <button class="btn btn-danger btn-sm" onclick="deleteTask('${item.id}')">
    <i class="fa-solid fa-trash"></i>
  </button>
  
</td>
</tr>`;
  });
  badElm.innerHTML = str;

  const badHrs = badList.reduce((acc, item) => acc + +item.hr, 0);
  document.getElementById("badHrs");
  innerText = badHrs;
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
// swirtch task from entry to bad type or vice VideoColorSpace

const switchTask = (id, type) => {
  taskList = taskList.map((item) => {
    if (item.id === id) {
      item.type = type;
    }
    return item;
  });
  displayTask();
};

const totalHours = () => {
  const ttlHrs = taskList.reduce((acc, { hr }) => acc + +hr, 0);

  document.getElementById("total").innerText = ttlHrs;
  return ttlHrs;
};

let x = "Hello world";
let y = x.replace("Hell", "kii");
console.log(y);
