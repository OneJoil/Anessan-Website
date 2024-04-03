window.addEventListener("load", () => {
    const loader = document.getElementById("loaderArea");

    setTimeout(function() {
        loader.classList.add("loader-white");
    }, 2500);

    setTimeout(function() {
        loader.classList.add("hidden");
    }, 3680);

    setTimeout(function() {
        loader.classList.add("loader-none");
    }, 4950);
})

window.addEventListener("load", () => {
    const loader = document.getElementById("loader_logo");

    setTimeout(function() {
        loader.classList.add("logo-hidden");
    }, 2900)
})