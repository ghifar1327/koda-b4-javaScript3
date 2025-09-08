const antrian = (queue, time) => {
  return new Promise((resolve, reject) => {
    if (typeof queue != "string") {
      reject("ERROR: nilai harus string!");
    } else {
      setTimeout(() => {
        resolve(queue);
      }, time);
    }
  });
};

antrian("John", 1500).then((res) => {
  console.log(res);
  antrian('Edd', 2000)
    .then((res) => {
      console.log(res);
      antrian("Jane", 500)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    }).catch((err)=>{console.log(err)})
});

async function antri() {
    try{

        const antri1 = await antrian("John", 1500);
        console.log(antri1);
        const antri2 = await antrian("Edd", 2000);
        console.log(antri2);
        const antri3 = await antrian('Jane', 500);
        console.log(antri3);
    }catch(err){
        console.log(err)
    }
}

antri()
