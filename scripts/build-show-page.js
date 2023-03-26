const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco,CA",
  },

  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA ",
  },
  {
    date: "Sat Nov 06 2021 ",
    venue: "Hyatt Agency",
    location: "San Francisco, CA ",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center ",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021 ",
    venue: "Press Club ",
    location: "San Francisco, CA",
  },
];
const showsContainer = document.querySelector(".shows__container");
const showHeader = document.createElement("h1");
showHeader.classList.add("shows__header");
showsContainer.prepend(showHeader);
document.querySelector(".shows__header").innerText = "Shows";

const showslist = document.createElement("div");
showslist.className = "showslist";
showsContainer.append(showslist);

for (let index = 0; index < shows.length; index++) {
  const show = shows[index];

  //the showEl or showcard is the element that contains each date, venue, location and button for a show
  const showEl = document.createElement("div");
  showEl.className = "shows__el";

  const dateshowcard = document.createElement("div");
  dateshowcard.className = "shows__card";
  showEl.append(dateshowcard);

  const dateheader = document.createElement("h2");
  dateheader.className = "shows__subheader";
  dateheader.innerText = "DATE";
  dateshowcard.append(dateheader);

  const showdate = document.createElement("h3");
  showdate.className = "shows__date";
  showdate.innerText = show.date;
  dateshowcard.append(showdate);

  const venueshowcard = document.createElement("div");
  venueshowcard.className = "shows__card";
  showEl.append(venueshowcard);

  const venueheader = document.createElement("h2");
  venueheader.className = "shows__subheader";
  venueheader.innerText = "VENUE";
  venueshowcard.append(venueheader);

  const showvenue = document.createElement("h3");
  showvenue.className = "shows__venue";
  showvenue.innerText = show.venue;
  venueshowcard.append(showvenue);

  const locationshowcard = document.createElement("div");
  locationshowcard.className = "shows__card";
  showEl.append(locationshowcard);

  const locationheader = document.createElement("h2");
  locationheader.className = "shows__subheader";
  locationheader.innerText = "LOCATION";
  locationshowcard.append(locationheader);

  const showlocation = document.createElement("h3");
  showlocation.className = "shows__location";
  showlocation.innerText = show.location;
  locationshowcard.append(showlocation);

  const showbutton = document.createElement("button");
  showbutton.className = "button";
  showbutton.innerText = "BUY TICKETS";
  showEl.append(showbutton);

  showslist.append(showEl);
}

//create an onclick function to add class that turns showEl grey?

// Object.onclick =
// function() {
//   add.className="showElclick"

// }

//use query selector all to select multiple elements and it creates a nodelist (i.e. 6 shows rows). Loop through nodelist and
//add an event listener onto each row to wait for a click. In the listener, should be a click and add style (add class for this)
//and remove this class from other rows. ex. showslist is a var -make it into a node list, loop thorough it, and add an event listener
//to add a class and remove classes
//check out dom review (jons)

//when any other row is clicked on unhighlight above row, and highlight this one
