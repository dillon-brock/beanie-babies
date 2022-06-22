export default function createBeanieBabyDetail(root) {

    const image = root.querySelector('img');
    const name = root.querySelector('h2');
    const tbody = root.querySelector('tbody');

    return ({ beanieBaby }) => {

        image.src = beanieBaby.image;
        name.textContent = beanieBaby.title;
        for (const [k, v] of Object.entries(beanieBaby)) {
            tbody.append(tableRow(k, v));
        }
    };
}

function tableRow(k, v) {
    const tr = document.createElement('tr');

    const tk = document.createElement('td');
    tk.classList.add('key');
    tk.textContent = k;

    const tv = document.createElement('td');
    tv.classList.add('value');
    tv.textContent = v;

    tr.append(tk, tv);

    return tr;
}