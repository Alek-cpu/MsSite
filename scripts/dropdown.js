const dropdowns = document.querySelectorAll('ul');

const handleClickListItem = (e) => {
    for (let i = 0; i< e.target.children.length; i++) {
        e.target.children.item(i).classList.value.includes('open') ?
            e.target.children.item(i).classList.remove('open') :
            e.target.children.item(i).classList.add('open');
    }
};

const enumeration = (dropdown) => {
    for (let i = 0; i < dropdown.length; i++) {
        dropdown.item(i).addEventListener('click', handleClickListItem)
    }
};

dropdowns.forEach((dropdown) => enumeration(dropdown.children));