export default function createBeanieBabyDetail(root) {

    const image = root.querySelector('img');
    const nameDisplay = root.querySelector('h2');
    const tbody = root.querySelector('tbody');
    const displaySection = root.querySelector('#display');
    const a = root.querySelector('a');

    return ({ beanieBaby }) => {

        image.src = beanieBaby.image;
        a.href = beanieBaby.link;

        if (beanieBaby.title.includes('(')) {
            const splitName = beanieBaby.title.split('(');
            const name = splitName[0].slice(0, -1);
            const size = splitName[1].slice(0, -1);

            nameDisplay.textContent = name;
            const sizeDisplay = document.createElement('h3');
            sizeDisplay.textContent = size;
            displaySection.append(sizeDisplay);
        }
        else {
            nameDisplay.textContent = beanieBaby.title;
        }

        let numOfRows = 0;
        for (const v of Object.values(beanieBaby)) {
            if (v) {
                numOfRows++;
            }
        }
        let rowNum = 0;
        for (const [k, v] of Object.entries(beanieBaby)) {
            if (v) {
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
        k = k.split(/(?=[A-Z])/).join(' ').toLowerCase();
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