// import services and utilities
import { getBeanieBabies } from './services/beanie-service.js';
// import component creators
import createBeanieBabies from './components/BeanieBabyList.js';
import createPaging from './components/Paging.js';
import createFilter from './components/Filter.js';
// declare state variables
let beanieBabies = [];

let title = '';
let astroSign = '';
let page = 1;
let pageSize = 10;
let totalPages = 0;

// handler functions
async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);

    title = params.get('title') || '';
    astroSign = params.get('astroSign') || '';
    if (astroSign === 'null') astroSign = '';

    page = Number(params.get('page')) || 1;
    pageSize = Number(params.get('pageSize')) || 10;

    const start = (page - 1) * pageSize;
    const end = (page * pageSize) - 1;

    const { data, count } = await getBeanieBabies(title, astroSign, { start, end });    
    beanieBabies = data;
    totalPages = Math.ceil(count / pageSize);
    display();
}

function handlePaging(change, size) {
    const params = new URLSearchParams(window.location.search);

    page = Number(size) === pageSize ? Math.max(1, page + change) : 1;
    params.set('page', page);
    params.set('pageSize', size);
    window.location.search = params.toString();
}

function handleFilter(filter) {
    const params = new URLSearchParams(window.location.search);

    params.set('title', filter.title);
    params.set('astroSign', filter.astroSign);
    params.set('page', 1);
    window.location.search = params.toString();
}


const CreateBeanieBabies = createBeanieBabies(document.querySelector('#bb-list'));
const Paging = createPaging(document.getElementById('paging'), { handlePaging });
const Filter = createFilter(document.getElementById('filter'), { handleFilter });
// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    CreateBeanieBabies({ beanieBabies });
    Paging({ page, pageSize, totalPages });
    Filter({ title, astroSign });
}

handlePageLoad();