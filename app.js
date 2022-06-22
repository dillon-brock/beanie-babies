// import services and utilities
import { getBeanieBabies } from './services/beanie-service.js';
// import component creators

// declare state variables
let beanieBabies = [];
// write handler functions
async function handlePageLoad() {
    beanieBabies = await getBeanieBabies();
    display();
}

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
}

// Call display on page load
handlePageLoad();
