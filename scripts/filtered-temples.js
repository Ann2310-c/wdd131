const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Trujillo Peru Temple",
        location: "Trujillo, Perú",
        dedicated: "2015, June, 21",
        area: 28200,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3717-main.jpg"
    },
    {
        templeName: "Bogotá Colombia Temple",
        location: "Bogota, Colombia",
        dedicated: "1999, April, 24",
        area: 53500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
    }
];

// ---- Utilities ----
function getDedicatedYear(dedicatedString) {
    // Dedicated strings are in format "YYYY, Month, DD" — take first item
    const parts = dedicatedString.split(",");
    const year = parseInt(parts[0], 10);
    return isNaN(year) ? null : year;
}

// ---- DOM references ----
const gallery = document.getElementById("templeGallery");
const navLinks = document.querySelectorAll("nav a");
const menuButton = document.getElementById("menu");
const header = document.querySelector("header");

// ---- Render function ----
function displayTemples(list) {

    gallery.innerHTML = "";
    if (!Array.isArray(list) || list.length === 0) {
        gallery.innerHTML = "<p>No temples to display.</p>";
        return;
    }

    list.forEach((t) => {
        const fig = document.createElement("figure");
        fig.className = "temple-card";

        const img = document.createElement("img");
        img.setAttribute("src", t.imageUrl);
        img.setAttribute("alt", t.templeName);
        img.setAttribute("loading", "lazy"); // native lazy loading
        img.width = 400; // hint (optional)
        img.height = 250;

        const figcap = document.createElement("div");
        figcap.className = "meta";

        const h3 = document.createElement("h3");
        h3.textContent = t.templeName;

        const pLoc = document.createElement("p");
        pLoc.textContent = t.location;

        const pDed = document.createElement("p");
        pDed.textContent = `Dedicated: ${t.dedicated}`;

        const pArea = document.createElement("p");
        pArea.textContent = `Area: ${t.area.toLocaleString()} sq ft`;

        figcap.appendChild(h3);
        figcap.appendChild(pLoc);
        figcap.appendChild(pDed);
        figcap.appendChild(pArea);

        fig.appendChild(img);
        fig.appendChild(figcap);

        gallery.appendChild(fig);
    });
}

// ---- Initial display (Home = all) ----
displayTemples(temples);

// ---- Filter ----
function handleFilter(filterName) {
    let result = temples.slice();

    if (filterName === "old") {
        result = result.filter(t => {
        const y = getDedicatedYear(t.dedicated);
        return y !== null && y < 1900;
        });
    } else if (filterName === "new") {
        result = result.filter(t => {
        const y = getDedicatedYear(t.dedicated);
        return y !== null && y > 2000;
        });
    } else if (filterName === "large") {
        result = result.filter(t => t.area > 90000);
    } else if (filterName === "small") {
        result = result.filter(t => t.area < 10000);
    }

    displayTemples(result);
}

// bind nav links
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;
        handleFilter(filter);
        // close mobile menu if open
        header.classList.remove("menu-open");
    });
});

// hamburger button toggle
menuButton.addEventListener("click", () => {
    header.classList.toggle("menu-open");

    // Change icon
     if (menuButton.textContent === "☰") {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});

// footer: year & last modified
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

