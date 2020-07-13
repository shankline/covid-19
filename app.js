(function () {
  // numbers from 1 - 9
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // get four different random numbers from the numbers array

  // get the first random number and remove from the numbers array
  // get first number
  let item1 = items[Math.floor(Math.random() * items.length)];

  // remove from array
  let a = items.indexOf(item1);

  if (a > -1) {
    items.splice(a, 1);
  }

  // get the second random number and remove from the numbers array
  // get second number
  let item2 = items[Math.floor(Math.random() * items.length)];

  // remove from array
  let b = items.indexOf(item2);

  if (b > -1) {
    items.splice(b, 1);
  }

  // get the third random number and remove from the numbers array
  // get third number
  let item3 = items[Math.floor(Math.random() * items.length)];

  // remove from array
  let c = items.indexOf(item3);

  if (c > -1) {
    items.splice(c, 1);
  }

  // get the fourth random number and remove from the numbers array
  // get fourth number
  let item4 = items[Math.floor(Math.random() * items.length)];

  // remove from array
  let d = items.indexOf(item4);

  if (d > -1) {
    items.splice(d, 1);
  }

  // put inside an object
  let allNum = {
    a: item1,
    b: item2,
    c: item3,
    d: item4,
  };

  console.table(allNum);

  // Get user input
  let input = document.querySelectorAll(".input");

  // submit button
  let submit = document.querySelector(".submit");

  // alert div
  let alert = document.querySelector(".alert");

  //result
  let result = document.querySelector(".result");

  // add event listener to submit button
  submit.addEventListener("click", (event) => {
    event.preventDefault();

    // check if input fields are empty
    if (
      !input[0].value ||
      !input[1].value ||
      !input[2].value ||
      !input[3].value
    ) {
      alert.setAttribute("class", "alert-warning alert-dismissible fade show");
      alert.textContent = "Input all field";
    } else {
      // check if input length is more than one
      if (
        input[0].value.length >= 2 ||
        input[1].value.length >= 2 ||
        input[2].value.length >= 2 ||
        input[3].value.length >= 2
      ) {
        alert.setAttribute(
          "class",
          "alert-warning alert-dismissible fade show"
        );
        alert.textContent = "All input fields should contain one number only";
      } else {
        // Check if a value exists twice
        if (
          input[0].value == input[1].value ||
          input[0].value == input[2].value ||
          input[0].value == input[3].value
        ) {
          alert.setAttribute(
            "class",
            "alert-danger alert-dismissible fade show"
          );
          alert.innerHTML = `You can only use the value <b>${input[0].value}</b> once`;
        } else if (
          input[1].value == input[0].value ||
          input[1].value == input[2].value ||
          input[1].value == input[3].value
        ) {
          alert.setAttribute(
            "class",
            "alert-danger alert-dismissible fade show"
          );
          alert.innerHTML = `You can only use the value <b>${input[1].value}</b> once`;
        } else if (
          input[2].value == input[0].value ||
          input[2].value == input[1].value ||
          input[2].value == input[3].value
        ) {
          alert.setAttribute(
            "class",
            "alert-danger alert-dismissible fade show"
          );
          alert.innerHTML = `You can only use the value <b>${input[2].value}</b> once`;
        } else if (
          input[3].value == input[0].value ||
          input[3].value == input[1].value ||
          input[3].value == input[2].value
        ) {
          alert.setAttribute(
            "class",
            "alert-danger alert-dismissible fade show"
          );
          alert.innerHTML = `You can only use the value <b>${input[3].value}</b> once`;
        } else {
          // put user's input inside an object and parse to integer
          let userNum = {
            userA: parseInt(input[0].value),
            userB: parseInt(input[1].value),
            userC: parseInt(input[2].value),
            userD: parseInt(input[3].value),
          };

          console.table(userNum);

          // create empty array
          let work = [];
          let work2 = [];

          // push userNum into work array
          work.push(userNum.userA);
          work.push(userNum.userB);
          work.push(userNum.userC);
          work.push(userNum.userD);

          // push random number into work2 array
          work2.push(allNum.a);
          work2.push(allNum.b);
          work2.push(allNum.c);
          work2.push(allNum.d);

          // check if user inputs is in work2 array
          let check1 = work2.includes(work[0]);
          let check2 = work2.includes(work[1]);
          let check3 = work2.includes(work[2]);
          let check4 = work2.includes(work[3]);
          console.log(check1);
          console.log(check2);
          console.log(check3);
          console.log(check4);

          let inj = 0;
          let kill = 0;
          let killCount = 0;

          // if user inputs is inside work2 array, change to 1
          if (check1 == true) {
            check1 = 1;
          }
          if (check2 == true) {
            check2 = 1;
          }
          if (check3 == true) {
            check3 = 1;
          }
          if (check4 == true) {
            check4 = 1;
          }

          console.log(`${check1}: ${check2}: ${check3}: ${check4}`);
          inj += check1 + check2 + check3 + check4;

          // check if user input exists in work2 array and on the same index
          if (allNum.a == userNum.userA) {
            killCount++;
          }
          if (allNum.b == userNum.userB) {
            killCount++;
          }
          if (allNum.c == userNum.userC) {
            killCount++;
          }
          if (allNum.d == userNum.userD) {
            killCount++;
          }

          inj = inj - killCount;
          console.log(`${inj} Injured`);
          console.log(`${killCount} Killed`);
          // result.textContent = `${inj} Injured and ${killCount} Killed`

          let div = document.createElement("div");
          div.textContent = `${userNum.userA}${userNum.userB}${userNum.userC}${userNum.userD} = ${inj} Injured and ${killCount} Killed`;
          div.setAttribute("class", "output");
          // let button = document.createElement('button');
          // button.textContent = 'X'
          result.appendChild(div);
          // div.appendChild(button)
          //
          // button.addEventListener('click', () => {
          //   div.style.display = "none";
          // });

          if (killCount == 4) {
            // console.log(`${killCount} Killed. You Won!!!`);
            // result.textContent = `${killCount} Killed. You Won!!!`;
            let div = document.createElement("div");
            div.textContent = `You Got All Number Right`;
            div.setAttribute("class", "output");
            result.appendChild(div);
          }
        }
      }
    }
  });
})();