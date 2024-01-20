//inspiration from https://dev.to/icesofty/firebase-x-axios-x-js-let-s-create-a-simple-synchronized-clicks-counter-41co
//the ideas are mine and mine alone (especially meta refresh, binary, and UX)
const pagebtn = document.getElementById("pagebtn");
const counterID = document.getElementById("page");

const reversebtn = document.getElementById("reversebtn");
const reversecounterID = document.getElementById("reverse");

const colourbtn = document.getElementById("colourbtn");
const counterID2 = document.getElementById("colour");

const bckgrndbtn = document.getElementById("bckgrndbtn");
const counterID2b = document.getElementById("bckgrnd");

const grammarbtn = document.getElementById("grammarbtn");
const counterID3 = document.getElementById("grammar");


const alignmentbtn = document.getElementById("alignmentbtn");
const counterID4 = document.getElementById("alignment");

const finishedbtn = document.getElementById("finishedbtn");
const counterID5 = document.getElementById("finished");


const firebase = "https://test-6e2a8-default-rtdb.firebaseio.com/"; //Uses Firebase RealTime Database.


//Page Counter
function init() {
  axios.get(firebase + "my-online-counter.json").then((respond) => { //Requests a file to be sent from the specified URL above.
    page = respond.data.page; //
    incrementpageCounter(); //Calls the page increment counter below.
  });
}

function incrementpageCounter() {
  counterID.innerHTML = `${page}`; //Writes "Go to Page XYZ" on index.html.
}

pagebtn.addEventListener("click", function (e) {
  axios
    .put(firebase + "my-online-counter.json", {//Requests resources or information to be updated or created.
      page: page + 1  //Increments the page counter by 1. 
    })

    .then(() => {
      init(); //Uses the init function again.
    })
});

init();

/*
//Page Counter Reverse
function initreverse() {
  axios.get(firebase + "my-online-counter-reverse.json").then((respond) => { //Requests a file to be sent from the specified URL above.
    reverse = respond.data.reverse; //
    reversepageCounter(); //Calls the page reverse counter below.
  });
}

function reversepageCounter() {
  newreverse = page - 1;
  //reversecounterID.innerHTML = `${newreverse}:`; //Writes on index.html.
}

reversebtn.addEventListener("click", function (e) {
  axios
    .put(firebase + "my-online-counter-reverse.json", {//Requests resources or information to be updated or created.
      reverse: page - 1  //Decrements the reverse counter by 1. 
    })

    .then(() => {
      initreverse(); //Uses the init function again.
    })
});

initreverse();
*/

//Finisb Counter
function init2b() {
  axios.get(firebase + "my-online-counter2b.json").then((respond) => { //Requests a file to be sent from the specified URL above.
    bckgrnd = respond.data.bckgrnd; //
    incrementbckgrndCounter(); //Calls the alignment increment counter below.
  });
}

function incrementbckgrndCounter() {
  newbckgrnd = bckgrnd.toString(2); //from decimal to binary
  newbckgrnd = newbckgrnd & 1; //AND to show only the least significant bit 
  counterID2b.innerHTML = `  ${newbckgrnd} `; //Writes on index.html.
}

bckgrndbtn.addEventListener("click", function (e) {
  axios
    .put(firebase + "my-online-counter2b.json", {//Requests resources or information to be updated or created.
      bckgrnd: bckgrnd + 1  //Increments the counter by 1. 
    })

    .then(() => {
      init2b(); //Uses the init5 function again.
    })
});

init2b();

//Colour Counter
function init2() {
  axios.get(firebase + "my-online-counter2.json").then((respond) => { //Requests a file to be sent from the specified URL above.
    colour = respond.data.colour; //
    incrementcolourCounter(); //Calls the colour increment counter below.
  });
}


function incrementcolourCounter() {
  newcolour = colour.toString(2); //from decimal to binary
  newcolour = newcolour & 1; //AND to show only the least significant bit 
  counterID2.innerHTML = `${newcolour}`; //Writes on index.html.
}



colourbtn.addEventListener("click", function (e) {
  axios
    .put(firebase + "my-online-counter2.json", {//Requests resources or information to be updated or created.
      colour: colour + 1  //Increments the counter by 1. 
    })
    
    .then(() => {
      init2(); //Uses the init2 function again.
    })
});

init2();

//Grammar Counter
function init3() {
  axios.get(firebase + "my-online-counter3.json").then((respond) => { //Requests a file to be sent from the specified URL above.
    grammar = respond.data.grammar; //
    incrementgrammarCounter(); //Calls the grammar increment counter below.
  });
}

function incrementgrammarCounter() {
  newgrammar = grammar.toString(2); //from decimal to binary
  newgrammar = newgrammar & 1; //AND to show only the least significant bit 
  counterID3.innerHTML = `${newgrammar} `; //Writes on index.html.
}

grammarbtn.addEventListener("click", function (e) {
  axios
    .put(firebase + "my-online-counter3.json", {//Requests resources or information to be updated or created.
      grammar: grammar + 1  //Increments the counter by 1. 
    })

    .then(() => {
      init3(); //Uses the init3 function again.
    })
});

init3();

//Alignment Counter
function init4() {
  axios.get(firebase + "my-online-counter4.json").then((respond) => { //Requests a file to be sent from the specified URL above.
    alignment = respond.data.alignment; //
    incrementalignmentCounter(); //Calls the alignment increment counter below.
  });
}

function incrementalignmentCounter() {
  newalignment = alignment.toString(2); //from decimal to binary
  newalignment = newalignment & 1; //AND to show only the least significant bit 
  counterID4.innerHTML = `${newalignment} `; //Writes on index.html.
}

alignmentbtn.addEventListener("click", function (e) {
  axios
    .put(firebase + "my-online-counter4.json", {//Requests resources or information to be updated or created.
      alignment: alignment + 1  //Increments the counter by 1. 
    })

    .then(() => {
      init4(); //Uses the init4 function again.
    })
});

init4();


