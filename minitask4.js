function toLowerManual(str) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdeefghijklmnopqrstuvwxyz";

  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = -1;

    for (let j = 0; j < str.length; j++) {
      if (char === upper[j]) {
        index = j;
        break;
      }
    }if(index !== -1){
        result += lower[index]
    }else{
        result +=char
    }
  }return result
}

const url = "https://jsonplaceholder.typicode.com/users";

// handling than-catch
// Tanpa built-in
fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let arr = [];
    for (let x = 0; x < res.length; x++) {
      arr = [...arr, toLowerManual(res[x].email)];
    }
    console.log(arr);
  });

// handling async-await
// Mengganakan built-in
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  let email = [];
  data.forEach(function (data) {
    email = [...email, data.email.toLowerCase()];
  });
  console.log(email);
}

getData();

const hurufKecil = [""];
