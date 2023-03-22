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
showsContainer.prepend(showHeader);
document.querySelector(".showHeader").innerText="Shows";


const showslist=document.createElement("div");
showslist.className="showslist";
showsContainer.append(showslist);

for (let index = 0; index < shows.length; index++) {
  const show = shows[index];

//the showEl or showcard is the element that contains each date, venue, location and button for a show
const showEl=document.createElement("div");
showEl.className = "showel";

const dateshowcard=document.createElement("div");
dateshowcard.className="showcard";
showEl.append(dateshowcard);

const dateheader=document.createElement("h2")
dateheader.className="showsubheader";
dateheader.innerText="DATE";
dateshowcard.append(dateheader);

const showdate=document.createElement("h3");
showdate.className="showdate";
showdate.innerText= show.date;
dateshowcard.append(showdate);

const venueshowcard=document.createElement("div");
venueshowcard.className="showcard";
showEl.append(venueshowcard);

const venueheader=document.createElement("h2")
venueheader.className="showsubheader";
venueheader.innerText="VENUE";
venueshowcard.append(venueheader);

const showvenue=document.createElement("h3");
showvenue.className="showvenue";
showvenue.innerText= show.venue;
venueshowcard.append(showvenue);

const locationshowcard=document.createElement("div");
locationshowcard.className="showcard";
showEl.append(locationshowcard);

const locationheader=document.createElement("h2")
locationheader.className="showsubheader";
locationheader.innerText="LOCATION";
locationshowcard.append(locationheader);

const showlocation=document.createElement("h3");
showlocation.className="showlocation";
showlocation.innerText= show.location;
locationshowcard.append(showlocation);

const showbutton=document.createElement("button");
showbutton.className="button";
showbutton.innerText="BUY TICKETS";
showEl.append(showbutton);

showslist.append(showEl);


}







