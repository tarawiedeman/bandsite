
const commentscontainer=document.querySelector(".commentbox");
const commentsheader=document.createElement("h1");
commentsheader.classList.add("commentbox__header");
commentscontainer.prepend(commentsheader);
document.querySelector(".commentbox__header").innerText="Join the Conversation";

const form=document.createElement("form");
form.classList.add("form");
commentscontainer.append(form);

const imgrowcontainer=document.createElement("div");
imgrowcontainer.classList.add("commentbox__rowcontainer");
form.append(imgrowcontainer);


const avatar=document.createElement("img");
avatar.classList.add("avatar");
avatar.src="./assets/images/Mohan-muruge.jpg";
imgrowcontainer.append(avatar);


const namelabel=document.createElement("label");
namelabel.classList.add("commentbox__namelabel");
imgrowcontainer.append(namelabel);
document.querySelector(".commentbox__namelabel").innerText="NAME";

const nameinput=document.createElement("input");
nameinput.classList.add("commentbox__nameinput");
nameinput.setAttribute("placeholder","Enter your name");
nameinput.setAttribute("name","name");
form.append(nameinput);


const commentlabel=document.createElement("label");
commentlabel.classList.add("commentbox__commentlabel");
form.append(commentlabel);
document.querySelector(".commentbox__commentlabel").innerText="COMMENT";

const commentinput=document.createElement("input");
commentinput.classList.add("commentbox__commentinput");
commentinput.setAttribute("placeholder","Add a new comment");
commentinput.setAttribute("name","comment");
form.append(commentinput);

const commentbutton=document.createElement("button");
commentbutton.className="button";
commentbutton.innerText="COMMENT";
form.append(commentbutton);

const usercomments= [{
    name: "Connor Walton",
    date: "02/17/2021",
    comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
  },
  
{
    name:"Emilie Beach",
    date:"01/09/2021",
    comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
  },

{
    name:"Miles Acosta",
    date:"12/20/2020",
    comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
  }];


  // function called displayComment() that takes in one comment 
// object as a parameter and displays it on the page using JavaScript DOM manipulation.



//event listener also needs to call displayComment and display new comment from form and then it should disappear on page reload 
//within a function you can clear out existing content with innerHTML ""; 
//when button is clicked, clear content, and go to array
//get into from object push to array and run function

const formdata = document.querySelector(".usercommentContainer");


const formlistener=document.querySelector("form");
formlistener.addEventListener('submit',callbackFunction);



function callbackFunction(e) {
    e.preventDefault();
    console.log(e.target.name.value,e.target.comment.value);
    const commentersname=e.target.name.value;
    const commenterscomment=e.target.comment.value;

    if (commentersname !== '' && commenterscomment != '') {

      usercomments.push({
        name: commentersname,
        comment: commenterscomment,
      });
      console.log(usercomments);
      e.target.reset();
      formdata.innerHTML='';
      displayComment();
    } else {
      alert ('please enter some text');
    }
  }

  // const formdata = commentersname;
  // formdata.innerHTML='';
  //target newly created element 
  //what are comments inside of

  function displayComment(){


  usercomments.forEach (onecomment => {

        
        // formdata.append();

        //create a card
        const commentcard=document.createElement("div");
        commentcard.className="commentcard";
        formdata.append(commentcard);

        //create a row container
        const rowcontainer=document.createElement("div");
        rowcontainer.className="commentcard__rowcontainer";
        commentcard.append(rowcontainer);

        // //create a div to hold the avatar 
        // const avatarcontainer=document.createElement("div");
        // avatarcontainer.className="avatar";
        // rowcontainer.prepend(avatarcontainer);
        

        //create an avatar
        const useravatar=document.createElement("img");
        useravatar.classList.add("commentcard__avatar");
        useravatar.src="./assets/images/Mohan-muruge.jpg";
        rowcontainer.append(useravatar);

        //create a name
        const commentersname=document.createElement("h3");
        commentersname.className="commentcard__name";
        commentersname.innerText= onecomment.name;
        rowcontainer.append(commentersname);

        // //create a date 
        // const commentdate=document.createElement("h3");
        // commentdate.className="commentcard__date";
        // commentdate.innerText= onecomment.date;
        // rowcontainer.append(commentdate);

        //create a comment 
        const usercomment=document.createElement("p");
        usercomment.className="commentcard__comment";
        usercomment.innerText= onecomment.comment;
        commentcard.append(usercomment);

      
        
    
  }
  )
}
displayComment();















