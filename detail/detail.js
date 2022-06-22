import { getBeanieBaby } from '../services/beanie-service.js';
import createBeanieBabyDetail from '../components/BeanieBabyDetail.js';

let beanieBaby;

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) window.location = '/';

    beanieBaby = await getBeanieBaby(id);
    if (!beanieBaby) window.location = '/';

    display();
}

const CreateBeanieBabyDetail = createBeanieBabyDetail(document.querySelector('#beanie-baby'));

function display() {
    CreateBeanieBabyDetail({ beanieBaby });
}

handlePageLoad();