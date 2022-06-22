export default function createBeanieBabyDetail(root) {

    const image = root.querySelector('img');
    const name = root.querySelector('h2');
    const tbody = root.querySelector('tbody');

    return ({ beanieBaby }) => {

        image.src = beanieBaby.image;
        name.textContent = beanieBaby.title;
        // name.style.backgroundColor = 'hsl(360, 50%, 40%)';
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

        const thElements = tbody.querySelectorAll('th');
        const tdElements = root.querySelectorAll('td');
        thElements.forEach(th => {
            let h = rowNum * (360 / numOfRows);
            th.style.backgroundColor = `hsl(${h}, 80%, 60%)`;
            rowNum++;
        });

        rowNum = 0;
        tdElements.forEach(td => {
            let h = rowNum * (360 / numOfRows);
            td.style.border = `5px solid hsl(${h}, 80%, 60%)`;
            rowNum++;
        });
    };
}

function tableRow(k, v) {
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