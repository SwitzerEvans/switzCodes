
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


closeSearch.addEventListener('click', function () {
    searchContainers.forEach(searchContainer => {
        searchContainer.classList.remove('searchdisplay');
        searchBox.value = '';
        searchIcon.style.opacity = '1';
    })
});

const posts = [
    {
        title: "Introduction to HTML",
        link: "./Introduction_to_HTML_My_First_Step_Into_Web_Development.html",
        description: "My First Step Into Web Development"
    },
    {
        title: "Understanding the HTML Document Structure",
        link: "./Understanding_the_HTML_Document_Structure.html",
        description: "Building the Foundation of Every Web Page"
    },
    {
        title: "Headings and Paragraphs",
        link: "./HTML_Text_Formatting.html",
        description: "Writing Basic Page Content"
    },
    {
        title: "HTML Text Formatting",
        link: "./HTML_Text_Formatting.html",
        description: "Bold, Italic, Underline and More"
    },
    {
        title: "Creating Links with the &lt;a&gt; Tag",
        link: "./Creating_Links_with_the_a_Tag.html",
        description: "Linking Web Pages"
    },
    {
        title: "Adding Images with &lt;img&gt;",
        link: "./Adding_Images_with_img.html",
        description: "Making Web Pages Visual"
    },
    {
        title: "Lists in HTML",
        link: "./Lists_in_HTML.html",
        description: "Ordered and Unordered Lists"
    },
    {
        title: "Creating Tables",
        link: "./Creating_Tables.html",
        description: "Organizing Data in HTML"
    },
    {
        title: "HTML Forms",
        link: "./HTML_Forms.html",
        description: "Text, Radio, Checkbox, Button"
    },
    {
        title: "Input Types and Form Elements",
        link: "./Input_Types_and_Form_Elements.html",
        description: "Writing Basic Page Content"
    },
    {
        title: "HTML Attributes",
        link: "./HTML_Attributes.html",
        description: "What Makes Tags More Powerful"
    },
    {
        title: "HTML Semantic Tags",
        link: "./HTML_Semantic_Tags.html",
        description: "Writing Clean and Meaningful Code"
    },
    {
        title: "HTML Entities",
        link: "./HTML_Entities.html",
        description: "Displaying Special Characters"
    },
    {
        title: "Embedding Videos and Audio",
        link: "./Embedding_Videos_and_Audio.html",
        description: "Making Pages Multimedia"
    },
    {
        title: "Using &lt;div&gt; and &lt;span&gt;",
        link: "./Using_div_and_span.html",
        description: "Grouping and Styling Elements"
    },
    {
        title: "How I Learned to Comment My Code in HTML",
        link: "./How_I_Learned_to_Comment_My_Code_in_HTML.html",
        description: "Making Code Easy to Read and Maintain"
    },
    {
        title: "HTML Meta Tags",
        link: "./HTML_Meta_Tags.html",
        description: "Controlling How My Page Appears in Search Engines"
    },
    {
        title: "Creating Navigation Menus with HTML",
        link: "./Creating_Navigation_Menus_with_HTML.html",
        description: "Making Site Easy to Explore"
    },
    {
        title: "HTML Best Practices I’m Following as a Beginner",
        link: "./HTML_Best_Practices_I’m_Following_as_a_Beginner.html",
        description: "Simple Rules for Better Web Pages"
    },
    {
        title: "Building My First Full HTML Page",
        link: "./Building_My_First_Full_HTML_Page.html",
        description: "What I Learned"
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
