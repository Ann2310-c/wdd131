let reviews = Number(localStorage.getItem("reviews")) || 0;
reviews++;
localStorage.setItem("reviews", reviews);

document.getElementById("counter").textContent = reviews;
