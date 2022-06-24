export default function createFilter(form, { handleFilter }) {

    const input = form.querySelector('input');
    const select = form.querySelector('select');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleFilter({
            title: formData.get('title'),
            astroSign: formData.get('astro-sign')
        });
    });

    return ({ title, astroSign }) => {
        input.value = title;
        select.value = astroSign;
    };
}