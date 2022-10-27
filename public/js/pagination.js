let pagesLength = document.getElementById('last-page').href.split('=')[1];
const paginationLinks = document.querySelectorAll('.pag-link');

// TODO: fix pagination
paginationLinks.forEach((item, i) => {

    const itemHrefValue = item.href.split('=')[1];

    if(itemHrefValue <= 0) {
        item.classList.add('hidden');
    }
    
});