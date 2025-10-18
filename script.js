//Get the button by its ID
const MarketplaceButton = document.getElementById("MarketplaceLink");
const ForumButton = document.getElementById("Forum"); 
const HomeButton = document.getElementById("header")

//Add an event listener for the button
MarketplaceButton.addEventListener("click", function() {
  //Call the function when the button is clicked
  openMarketplace();
});

ForumButton.addEventListener("click", function() {
  //Call the function when the button is clicked
  openForum();
});

//This function will open the marketplace. 
function openMarketplace() {
  //Your code here
  alert("Redirecting to the marketplace.");
  console.log();
}

function openForum() {
  //Your code here
  alert("The form is under construction. Please check back later.");
  console.log();
}
