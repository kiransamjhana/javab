// work flow
//  1 fetch the user from api
//2 store those user in global array
//3 display user in  the UI

let userList = [];
const apiEp = "https://randomuser.me/api?";
const displayElm = document.getElementById("list");
const fetchUser = async (path = "results=20") => {
  //   //promise

  //   fetch(apiEp).then((response) => {
  //     return response.json();
  //     console.log(response);
  //   });

  //   then((data) => {
  //     console.log(data);
  //   });

  //  .catch((error) =>{
  //     console.log(error)
  //   })
  //   //   const user = fetch(apiEp);
  //   //   console.log(user);

  //asyc await

  try {
    const response = await fetch(apiEp + path);
    const data = await response.json();
    userList = data.results;
    displayUser();
    console.log(userList);
  } catch (error) {
    console.log(error);
  }
};
fetchUser();

const displayUser = () => {
  let str = "";
  userList.forEach((usr) => {
    str += `<div class="card" style="width: 18rem;">
    <img src="${usr?.picture?.large}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-text"> ${usr?.name?.title} ${usr?.name?.first} ${usr?.name?.last}</h5>
   <div class="card-text">
<div> ${usr?.phone}</div>
<div> ${usr?.email}</div>
<div> ${usr?.location?.street?.number}
${usr?.location?.street?.name}
${usr?.location?.country}</div>

   
   </div>

    </div>
  </div>`;
  });
  displayElm.innerHTML = str;
};

document.getElementById("select").addEventListener("change", (e) => {
  const { value } = e.target;

  const path = "results=20&gender=" + value;
  fetchUser(path);
  console.log(value);
});
