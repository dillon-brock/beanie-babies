export default function createBeanieBabyDetail(root) {

    const image = root.querySelector('img');
    const p = root.querySelector('p');
    const name = root.querySelector('h2');

    return ({ beanieBaby }) => {

        image.src = beanieBaby.image;
        const article = beanieBaby.astroSign.charAt(0) === 'A' ? 'an' : 'a';
        name.textContent = beanieBaby.title;
        p.textContent = `${beanieBaby.name} was born on ${beanieBaby.birthday} and is ${article} ${beanieBaby.astroSign}`;

    };
}