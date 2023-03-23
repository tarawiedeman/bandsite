
const commentscontainer=document.querySelector(".comments");
const commentsheader=document.createElement("h1");
commentsheader.classList.add("comments__header");
commentscontainer.prepend(commentsheader);
document.querySelector(".comments__header").innerText="Join the Conversation";

const form=document.createElement("form");
form.classList.add("form");
commentscontainer.append(form);

const imgrowcontainer=document.createElement("div");
imgrowcontainer.classList.add("comments__rowcontainer");
form.append(imgrowcontainer);


const avatar=document.createElement("img");
avatar.classList.add("avatar");
avatar.setAttribute("src","../assets/images/Mohan-muruge.jpg");
imgrowcontainer.append(avatar);


const namelabel=document.createElement("label");
namelabel.classList.add("comments__namelabel");
imgrowcontainer.append(namelabel);
document.querySelector(".comments__namelabel").innerText="NAME";

const nameinput=document.createElement("input");
nameinput.classList.add("comments__nameinput");
nameinput.setAttribute("placeholder","Enter your name");
form.append(nameinput);


const commentlabel=document.createElement("label");
commentlabel.classList.add("comments__commentlabel");
form.append(commentlabel);
document.querySelector(".comments__commentlabel").innerText="COMMENT";

const commentinput=document.createElement("input");
commentinput.classList.add("comments__commentinput");
commentinput.setAttribute("placeholder","Add a new comment");
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

  function displayComment(){
  usercomments.forEach (onecomment => {

        //create a card
        const commentcard=document.createElement("div");
        commentcard.className="commentcard";
        form.append(commentcard);

        //create a row container
        const rowcontainer=document.createElement("div");
        rowcontainer.className="commentcard__rowcontainer";
        commentcard.append(rowcontainer);

        //create an avatar
        const useravatar=document.createElement("img");
        useravatar.classList.add("commentcard__avatar");
        rowcontainer.append(useravatar);

        //create a name
        const commentersname=document.createElement("h3");
        commentersname.className="commentcard__name";
        commentersname.innerText= onecomment.name;
        rowcontainer.append(commentersname);

        //create a date 
        const commentdate=document.createElement("h3");
        commentdate.className="commentcard__date";
        commentdate.innerText= onecomment.date;
        rowcontainer.append(commentdate);

        //create a comment 
        const usercomment=document.createElement("p");
        usercomment.className="commentcard__comment";
        usercomment.innerText= onecomment.comment;
        commentcard.append(usercomment);

      
        
    
  }
  )
}
displayComment();

//   function called displayComment() that takes in one comment 
// object as a parameter and displays it on the page using JavaScript DOM manipulation.