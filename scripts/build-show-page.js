
const showsContainer = document.querySelector(".shows__container");
const showHeader = document.createElement("h1");
showHeader.classList.add("shows__header");
showsContainer.prepend(showHeader);
document.querySelector(".shows__header").innerText = "Shows";


//create element where shows will display 
const showslist = document.createElement("div");
showslist.className = "showslist";
showsContainer.append(showslist);

//create empty array 
let shows = [];

function displayShows(){

  shows.forEach( (show) => {

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
  var adjustedDate = new Date (show.date).toDateString();
  showdate.innerText = adjustedDate;
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
  showvenue.innerText = show.place;
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

  })
  
}

function getShows (){

  axios
    .get("https://project-1-api.herokuapp.com/showdates?api_key=98fa176d-10bd-44e3-8d01-a688ddb725a2")
    .then((response) => {
      console.log(response);
      shows=response.data;
      displayShows();
      })
      .catch((error) => {
      console.log(error);
      showslist.innerText ='Failed to retrieve shows. Please try again later';

})
}

getShows ();
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
