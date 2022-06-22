// import services and utilities
import { getBeanieBabies } from './services/beanie-service.js';
// import component creators
import createBeanieBabies from './components/BeanieBabyList.js';
// declare state variables
let beanieBabies = [];
let colors = [];
// write handler functions
async function handlePageLoad() {
    beanieBabies = await getBeanieBabies();
    for (const beanieBaby of beanieBabies) {
        if (!colors.includes(beanieBaby.color)) {
            colors.push(beanieBaby.color);
        }
    }
    console.log(colors);
    display();
}


// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const CreateBeanieBabies = createBeanieBabies(document.querySelector('#bb-list'));
// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    CreateBeanieBabies({ beanieBabies });
}

// Call display on page load
handlePageLoad();