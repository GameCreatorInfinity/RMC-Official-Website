document.addEventListener("DOMContentLoaded", () => {

    // EVENTS DATA
    const events = [
        {
            img: "/img/member1.jpg",
            title: "Tech Workshop",
            desc: "Hands-on workshop on latest technologies conducted by RMC club."
        },
        {
            img: "/img/member1.jpg",
            title: "Cultural Fest",
            desc: "A vibrant cultural event with performances and competitions."
        },
        {
            img: "/img/member1.jpg",
            title: "Hackathon",
            desc: "24-hour coding challenge organized by RMC members."
        }
    ];

    let index = 0;

    const img = document.getElementById("eventImage");
    const title = document.getElementById("eventTitle");
    const desc = document.getElementById("eventDesc");

    function updateEvent() {
        img.src = events[index].img;
        title.textContent = events[index].title;
        desc.textContent = events[index].desc;
    }

    function nextEvent() {
        index = (index + 1) % events.length;
        updateEvent();
    }

    function prevEvent() {
        index = (index - 1 + events.length) % events.length;
        updateEvent();
    }

    // BUTTONS
    document.querySelector(".nav-btn.right")
        .addEventListener("click", nextEvent);

    document.querySelector(".nav-btn.left")
        .addEventListener("click", prevEvent);

    // AUTO SCROLL
    let autoScroll = setInterval(nextEvent, 4000);

    // PAUSE ON HOVER (important)
    document.querySelector(".event-box").addEventListener("mouseenter", () => {
        clearInterval(autoScroll);
    });

    document.querySelector(".event-box").addEventListener("mouseleave", () => {
        autoScroll = setInterval(nextEvent, 2500);
    });

    // MENU
    document.querySelector(".menu-icon").addEventListener("click", () => {
        document.getElementById("sideMenu").classList.toggle("active");
    });
});
