
const searchIcon = document.querySelector('.search-icon');
const searchContainers = document.querySelectorAll('.search, .search-desktop');
const searchBox = document.getElementById("search_input");
const searchBoxDesktop = document.getElementById('search-input-desktop');
const closeSearch = document.querySelector('.js-close-mobile-search');


    searchIcon.addEventListener('click', function () {
        searchContainers.forEach(searchContainer => {
            searchContainer.classList.toggle('searchdisplay');
            searchBox.focus();
            searchIcon.style.opacity = '0';
            searchIcon.style.transition = 'opacity 0.3s ease'
        })
    });


closeSearch.addEventListener('click', function() {
    searchContainers.forEach(searchContainer => {
            searchContainer.classList.remove('searchdisplay');
            searchBox.value = '';
            searchIcon.style.opacity = '1';
        })
});

const posts = [
    {
        title: "Introduction to HTML",
        link: "../../posts/EvansPosts-HTML/Introduction_to_HTML_My_First_Step_Into_Web_Development.html",
        description: "My First Step Into Web Development"
    },
    {
        title: "Understanding the HTML Document Structure",
        link: "../../posts/EvansPosts-HTML/Understanding_the_HTML_Document_Structure.html",
        description: "Understand how to create good HTML structure."
    }
];

// searchPosts function
if (window.innerWidth < 1000) {

    function searchPostsMobile() {
        // const searchBox = document.getElementById("search_input");

        const searchTerm = searchBox.value.toLowerCase();
        const resultsContainer = document.getElementById("search-result");


        resultsContainer.innerHTML = "";

        if (searchTerm.trim() === "") {
            return;
        }

        const matchingPosts = posts.filter(post =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.description.toLowerCase().includes(searchTerm)
        );

        if (matchingPosts.length > 0) {
            matchingPosts.forEach(post => {
                const resultItem = document.createElement("div");
                resultItem.classList.add("mini-search-result");
                resultItem.innerHTML = `
        <a href="${post.link}" style="font-weight: bold; color: blue;">${post.title}</a>
        <p>${post.description}</p>
      `;

                resultsContainer.appendChild(resultItem);
            });
        } else {

            resultsContainer.innerHTML = "<p>No results found.</p>";
        }
    }
} else if (window.innerWidth >= 1000) {
    function searchPostsDesktop() {
        const searchTerm = searchBoxDesktop.value.toLowerCase();
        const resultsContainer = document.getElementById("search-result-desktop");

        resultsContainer.innerHTML = "";

        if (searchTerm.trim() === "") {
            return;
        }

        const matchingPosts = posts.filter(post =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.description.toLowerCase().includes(searchTerm)
        );

        if (matchingPosts.length > 0) {
            matchingPosts.forEach(post => {

                const resultItemDesktop = document.createElement("div");
                resultItemDesktop.classList.add("mini-search-result");

                resultItemDesktop.innerHTML = `
        <a href="${post.link}" style="font-weight: bold; color: blue;">${post.title}</a>
        <p>${post.description}</p>
      `;

                resultsContainer.appendChild(resultItemDesktop);
            });
        } else {

            resultsContainer.innerHTML = "<p>No results found.</p>";
        }



    }
}



// const mobileSearchContainer = document.getElementById('search-input-mobile');
// if(window.innerWidth >= 1000) {
//     mobileSearchContainer.style.display = 'none';
// }
