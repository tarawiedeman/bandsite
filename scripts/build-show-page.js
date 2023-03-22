//are we allowed to have the parent already living in our HTML? 

// let hero = document.querySelector(".hero"); 
//   let heroSubheader = document.createElement("h2"); 
//   heroSubheader.classList.add('hero__subheader');
//   hero.appendChild(heroSubheader);
//   document.querySelector(".hero__subheader").innerHTML="Beautiful Beasts Album";


//   let heroHeader = document.createElement("h1"); 
//   heroHeader.classList.add('hero__header');
//   hero.appendChild(heroHeader);
//   document.querySelector(".hero__header").innerHTML="Queen of Yellow x For The Stings";


const shows = [
  {date: "Mon Sept 06 2021",
  venue: "Ronald Lane",
  location:"San Francisco,CA"
},

{
  date:"Tue Sept 21 2021",
  venue:"Pier 3 East",
  location:"San Francisco, CA"
},
{
  date:"Fri Oct 15 2021",
  venue:"View Lounge",
  location:"San Francisco, CA "
},
{
  date:"Sat Nov 06 2021 ",
  venue:"Hyatt Agency",
  location:"San Francisco, CA "
},
{
  date:"Fri Nov 26 2021",
  venue:"Moscow Center ",
  location:"San Francisco, CA"

},
{
  date:"Wed Dec 15 2021 ",
  venue:"Press Club ",
  location:"San Francisco, CA"

}
]
const showsContainer = document.querySelector(".showscontainer");
const showHeader = document.createElement("h1");
showHeader.classList.add("showHeader");
showsContainer.appendChild(showHeader);
document.querySelector(".showHeader").innerText="Shows";


const showslist=document.querySelector(".showslist");

for (let index = 0; index < shows.length; index++) {
  const show = shows[index];

//the showEl or showcard is the element that contains each date, venue, location and button for a show
  const showEl=document.createElement("div");
  showEl.className = "showcard";


const showdate=document.createElement("h3");
showdate.className="showdate";
showdate.innerText= show.date;
showEl.append(showdate);

const showvenue=document.createElement("h3");
showvenue.className="showvenue";
showvenue.innerText= show.venue;
showEl.append(showvenue);

const showlocation=document.createElement("h3");
showlocation.className="showlocation";
showlocation.innerText= show.location;
showEl.append(showlocation);

const showbutton=document.createElement("button");
showbutton.className="button";
showbutton.innerText="BUY TICKETS";
showEl.append(showbutton);

showslist.append(showEl);


}







