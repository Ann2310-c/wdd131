// Arrays
const highlights = [
    {
        title: "Historic Architecture",
        description: "Popayán is known for its beautiful white colonial buildings."
    },
    {
        title: "Traditional Gastronomy",
        description: "The city is famous for empanadas, tamales, and carantanta."
    },
    {
        title: "Holy Week Festival",
        description: "Popayán’s Holy Week is recognized by UNESCO as Intangible Cultural Heritage."
    }
];

const planvisit = [
    {
        title: "Weather",
        description: "The city has a mild climate throughout the year with average temperatures between 17°C and 22°C."
    },
    {
        title: "Best Time to Visit",
        description: "The best time to visit is during Holy Week when cultural events take place."
    },
    {
        title: "How to Get There",
        description: "Popayán can be reached by plane or by bus from major Colombian cities like Cali and Bogotá."
    }
];

// display cards
function displayCards(data, containerId) {
    const container = document.querySelector(containerId);

    if (container) {
        container.innerHTML = ""; // limpia antes de mostrar

        data.forEach(item => {
            container.innerHTML += `
                <div class="card">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
        });
    }
}

displayCards(highlights, "#highlight-container");
displayCards(planvisit, "#visit-container");


//array
const cultureData = [
    {
        title: "Holy Week Processions",
        category: "events",
        description: "Holy Week is the most important religious event in the city. The processions are famous for their beauty and tradition, and many tourists visit every year.",
        image: "images/holy-week.webp"
    },
    {
        title: "Pubenza Carnival",
        category: "events",
        description: "This is a cultural celebration in Popayán with music, dance, parades, and traditional costumes. It celebrates the history and identity of the region.",
        image: "images/pubenza-carnival.webp"
    },
    {
        title: "National Gastronomy Congress",
        category: "events",
        description: "This is an important food festival where chefs and visitors celebrate traditional Colombian cuisine. It promotes culture and local food traditions.",
        image: "images/gastronomy-congress.webp"
    },
    {
        title: "Humilladero Bridge",
        category: "historical",
        description: "This colonial bridge is one of the most famous landmarks in Popayán. It was built in the 19th century and connects important parts of the historic center.",
        image: "images/humilladero-bridge.webp"
    },
    {
        title: "Guillermo Valencia House Museum",
        category: "historical",
        description: "This historic house was the home of the Colombian poet Guillermo Valencia. Today, it is a museum where visitors can learn about his life and see old furniture, books, and art.",
        image: "images/guillermo-valencia.webp"
    },
    {
        title: "Pueblito Patojo",
        category: "historical",
        description: "This is a small park that shows miniature versions of important landmarks of Popayán. It is a popular place for visitors and photos.",
        image: "images/pueblito-patojo.webp"
    },
    {
        title: "Pipián Empanadas",
        category: "gastronomy",
        description: "These are traditional fried pastries filled with pipián and potatoes. They are usually served with peanut sauce and are very popular in the region.",
        image: "images/empanada-pipian.webp"
    },
    {
        title: "Salpicón Payanés",
        category: "gastronomy",
        description: "Salpicón Payanés is a traditional sweet fruit drink made with chopped fruit, fruit juice, and soda. It is very refreshing and popular in Popayán.",
        image: "images/salpicon-payanes.webp"
    },
    {
        title: "Pipián Tamal",
        category: "gastronomy",
        description: "This traditional dish is made with corn dough filled with pipián (a mixture of potatoes and peanuts) and meat. It is wrapped in banana leaves and cooked slowly.",
        image: "images/tamal-pipian.webp"
    }
];

const container = document.getElementById("culture-container");

// FUNCTION TO DISPLAY CARDS
function displayCulture(items) {
    container.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("culture-card");

        card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <h3>${item.title}</h3>
        <p>${item.description}</p>`;

        container.appendChild(card);
    });
}

if (container) {
    displayCulture(cultureData);

    const buttons = document.querySelectorAll(".culture-filters button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;

            if (category === "all") {
                displayCulture(cultureData);
            } else {
                const filtered = cultureData.filter(item => item.category === category);
                displayCulture(filtered);
            }
        });
    });
}


// FILTER BUTTONS
const buttons = document.querySelectorAll(".culture-filters button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        if (category === "all") {
            displayCulture(cultureData);
        } else {
            const filtered = cultureData.filter(item => item.category === category);
            displayCulture(filtered);
        }
    });
});


// VISIT PAGE
const form = document.querySelector(".visit-form form");
const message = document.getElementById("form-message");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        message.textContent = "Thank you! Your message has been sent.";
        message.style.color = "green";
        form.reset();
    });
}

//FOOTER

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (year) {
    year.textContent = new Date().getFullYear();
} if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}
