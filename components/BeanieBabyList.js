export default function createBeanieBabies(root) {

    return ({ beanieBabies }) => {
        for (const beanieBaby of beanieBabies) {
            root.append(beanieBabyCard({ beanieBaby }));
        }
    };

}

function beanieBabyCard({ beanieBaby }) {

    const li = document.createElement('li');
    li.classList.add('bb-card');

    const a = document.createElement('a');
    a.href = a.href = `../detail/?id=${beanieBaby.id}`;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const img = document.createElement('img');
    img.src = beanieBaby.image;
    imageContainer.append(img);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    const h2 = document.createElement('h2');
    h2.textContent = beanieBaby.title;
    const span = document.createElement('span');
    span.textContent = `[Astrological Sign: ${beanieBaby.astroSign}]`;
    textContainer.append(h2, span);

    a.append(imageContainer, textContainer);

    li.append(a);

    return li;
}