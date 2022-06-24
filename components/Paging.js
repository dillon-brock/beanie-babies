export default function createPaging(root, { handlePaging }) {

    const [prev, next] = root.querySelectorAll('button');
    const pageDisplay = root.querySelector('span');
    const pageSelect = root.querySelector('select');

    prev.addEventListener('click', () => {
        handlePaging(-1, pageSelect.value);
    });

    next.addEventListener('click', () => {
        handlePaging(1, pageSelect.value);
    });

    pageSelect.addEventListener('change', () => {
        handlePaging(0, pageSelect.value);
    });

    return ({ page, pageSize, totalPages }) => {
        pageSelect.value = pageSize;
        pageDisplay.textContent = `page ${page} of ${totalPages}`;

        next.disabled = page >= totalPages;
        prev.disabled = page <= 0;
    };
}