
//Create the form to allow for comment inputs
const commentscontainer = document.querySelector(".commentbox");

const commentsheader = document.createElement("h1");
commentsheader.classList.add("commentbox__header");
commentscontainer.prepend(commentsheader);
document.querySelector(".commentbox__header").innerText =
  "Join the Conversation";

const form = document.createElement("form");
form.classList.add("form");
commentscontainer.append(form);

const imgrowcontainer = document.createElement("div");
imgrowcontainer.classList.add("commentbox__rowcontainer");
form.append(imgrowcontainer);

const avatar = document.createElement("img");
avatar.classList.add("avatar");
avatar.src = "./assets/images/Mohan-muruge.jpg";
imgrowcontainer.append(avatar);

const namelabel = document.createElement("label");
namelabel.classList.add("commentbox__namelabel");
imgrowcontainer.append(namelabel);
document.querySelector(".commentbox__namelabel").innerText = "NAME";

const nameinput = document.createElement("input");
nameinput.classList.add("commentbox__nameinput");
nameinput.setAttribute("placeholder", "Enter your name");
nameinput.setAttribute("name", "name");
form.append(nameinput);

const commentlabel = document.createElement("label");
commentlabel.classList.add("commentbox__commentlabel");
form.append(commentlabel);
document.querySelector(".commentbox__commentlabel").innerText = "COMMENT";

const commentinput = document.createElement("input");
commentinput.classList.add("commentbox__commentinput");
commentinput.setAttribute("placeholder", "Add a new comment");
commentinput.setAttribute("name", "comment");
form.append(commentinput);

const commentbutton = document.createElement("button");
commentbutton.className = "button";
commentbutton.innerText = "COMMENT";
form.append(commentbutton);


//Get element where user comments will live 
const formdata = document.querySelector(".usercommentContainer");

//Create empty array 

const usercomments = [];
 
function displayComment() {

  formdata.innerHTML = ""; // clear the list before appending data to it 

  usercomments.forEach((onecomment) => {
    //create a card
    const commentcard = document.createElement("div");
    commentcard.className = "commentcard";
    formdata.append(commentcard);

    //create a row container
    const rowcontainer = document.createElement("div");
    rowcontainer.className = "commentcard__rowcontainer";
    commentcard.append(rowcontainer);

    //create an avatar
    const useravatar = document.createElement("img");
    useravatar.classList.add("commentcard__avatar");
    useravatar.src = "./assets/images/Mohan-muruge.jpg";
    rowcontainer.append(useravatar);

    //create a name
    const commentersname = document.createElement("h3");
    commentersname.className = "commentcard__name";
    commentersname.innerText = onecomment.name;
    rowcontainer.append(commentersname);

    //create a date
    const commentdate = document.createElement("h3");
    commentdate.className = "commentcard__date";
    commentdate.innerText = onecomment.date;
    rowcontainer.append(commentdate);

    //create a comment
    const usercomment = document.createElement("p");
    usercomment.className = "commentcard__comment";
    usercomment.innerText = onecomment.comment;
    commentcard.append(usercomment);
  });
}

function getComment (){

  axios
    .get("https://project-1-api.herokuapp.com/comments?api_key=98fa176d-10bd-44e3-8d01-a688ddb725a2")
    .then((response) => {
      console.log(response);
      usercomments=response.data;
      displayComment();
      })
    .catch((error) => {
      console.log(error);
      _____.innerText ='Failed to retrieve comments. Please try again later'

})
}

getComment ();

//POST COMMENTS


//create a listener for a form submit
const formlistener = document.querySelector("form");
formlistener.addEventListener("submit", callbackFunction);

function callbackFunction(e) {
  e.preventDefault();
  console.log(e.target.name.value, e.target.comment.value);
  // const commentersname = 
  // const commenterscomment = ;
  // const commentersdate = ;
  const newComment = {
    name:e.target.name.value,
    comment:e.target.comment.value,
    date:new Date(e.timeStamp).toLocaleDateString("en-UK")
  };

  if (commentersname !== "" && commenterscomment != "") {
//POST IT TO THE API 
      axios
      .post("https://project-1-api.herokuapp.com/comments?api_key=98fa176d-10bd-44e3-8d01-a688ddb725a2", newComment)
      .then ( (response) => {
        getComment();
      });
      .catch( (error) => {
        console.log(error);
        _____.innerText ='Failed to capture comment. Please try again later'
  
  });
  console.log(usercomments);
    e.target.reset();
    // formdata.innerHTML = "";
    displayComment();
  } else {
    alert("please enter some text");
  }
}

    // usercomments.unshift({
    //   name: commentersname,
    //   comment: commenterscomment,
    //   date: commentersdate,
    // });
    






