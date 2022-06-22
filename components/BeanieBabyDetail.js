export default function createBeanieBabyDetail(root) {

    const image = root.querySelector('img');
    const name = root.querySelector('h2');
    const tbody = root.querySelector('tbody');

    return ({ beanieBaby }) => {

        image.src = beanieBaby.image;
        name.textContent = beanieBaby.title;

        let numOfRows = 0;
        for (const v of Object.values(beanieBaby)) {
            if (v && v !== 'N/A' && v !== '-') {
                numOfRows++;
            }
        }
        let rowNum = 0;
        for (const [k, v] of Object.entries(beanieBaby)) {
            if (v && v !== 'N/A' && v !== '-') {
                const tr = tableRow(k, v);
                tbody.append(tr);
            }
        }

        const trElements = tbody.querySelectorAll('tr');
        trElements.forEach(tr => {
            const th = tr.querySelector('th');
            const td = tr.querySelector('td');
            let h = rowNum * (360 / numOfRows);

            th.style.backgroundColor = `hsl(${h}, 80%, 60%)`;
            td.style.border = `6px solid hsl(${h}, 80%, 60%)`;

            rowNum++;
        });
    };
}

function tableRow(k, v) {
    if (/[A-Z]/.test(k)) {
        const words = k.split(/(?=[A-Z])/).join(' ');
        k = words.toLowerCase();
    }

    const tr = document.createElement('tr');

    const tk = document.createElement('th');
    tk.classList.add('key');
    tk.textContent = k;

    const tv = document.createElement('td');
    tv.classList.add('value');
    tv.textContent = v;

    tr.append(tk, tv);

    return tr;
}