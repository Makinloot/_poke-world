let pagesLength = document.getElementById('last-page').href.split('=')[1];
const paginationLinks = document.querySelectorAll('.pag-link');

// hide first elements in pagination if user is on first page
paginationLinks.forEach((item, i) => {

    const hrefValue = item.href.split('=')[1];
    if(hrefValue <= 0) {
        item.classList.add('hidden');
    } 

});

const pageEndPoint = window.location.href.split('?')[1];
const pagEndButtons = [
    document.getElementById('next'),
    document.getElementById('after-next'),
    document.getElementById('next-icon'),
    document.getElementById('last-page'),
]
// hide last elements in pagination if user is on last page
if(pageEndPoint === `page=${pagesLength}`) {
    console.log('red');
    pagEndButtons.forEach(item => item.classList.add('hidden'));
} else if(pageEndPoint === `page=1`) {
    document.getElementById('first-page').classList.add('hidden');
}