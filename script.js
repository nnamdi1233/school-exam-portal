/*
    EXAM DATA STRUCTURE
    --------------------
    This object holds all the classes, and inside each class,
    a list of subjects with their Google Forms exam link.

    Structure:
    examData = {
        "ClassName": [
            { subject: "Subject Name", link: "Google Form URL" },
            { subject: "Subject Name", link: "Google Form URL" },
            ...
        ]
    }
*/

/*
    GRABBING ELEMENTS FROM THE HTML
    --------------------------------
    We need references to the HTML containers so JavaScript
    can insert content into them later.
*/

const classListContainer = document.getElementById("class-list");
const subjectListContainer = document.getElementById("subject-list");
const classSection = document.getElementById("class-selection");
const examSection = document.getElementById("exam");
const examClassTitle = document.getElementById("exam-class-title");
const backButton = document.getElementById("back-button");
const subjectSearchInput = document.getElementById("subject-search");

const examData = {

    // ---------- JSS1 SUBJECTS ----------
    "JSS1": [
        { subject: "Mathematics", link: "https://forms.gle/7URWF8ysHXk2aSNL6" },
        { subject: "English Language", link: "https://forms.gle/example" },
        { subject: "Information and Communication Technology (ICT)", link: "https://forms.gle/example" },
        { subject: "Physical and Health Education (PHE)", link: "https://forms.gle/example" },
        { subject: "Literature in English", link: "https://forms.gle/example" },
        { subject: "Integrated Science", link: "https://forms.gle/example" },
        { subject: "History", link: "https://forms.gle/example" },
        { subject: "Citizenship Education", link: "https://forms.gle/example" },
        { subject: "Christian Religious Studies (CRS)", link: "https://forms.gle/example" },
        { subject: "Cultural and Creative Arts (CCA)", link: "https://forms.gle/example" }
    ],

    // ---------- JSS2 SUBJECTS ----------
    "JSS2": [
        { subject: "Mathematics", link: "https://forms.gle/example" },
        { subject: "English Language", link: "https://forms.gle/example" },
        { subject: "Information and Communication Technology (ICT)", link: "https://forms.gle/example" },
        { subject: "Physical and Health Education (PHE)", link: "https://forms.gle/example" },
        { subject: "Literature in English", link: "https://forms.gle/example" },
        { subject: "Integrated Science", link: "https://forms.gle/example" },
        { subject: "History", link: "https://forms.gle/example" },
        { subject: "Citizenship Education", link: "https://forms.gle/example" },
        { subject: "Christian Religious Studies (CRS)", link: "https://forms.gle/example" },
        { subject: "Cultural and Creative Arts (CCA)", link: "https://forms.gle/example" }
    ],

    // ---------- SS1 SUBJECTS ----------
    "SS1": [
        { subject: "Mathematics", link: "https://forms.gle/example" },
        { subject: "English Language", link: "https://forms.gle/example" },
        { subject: "Literature in English", link: "https://forms.gle/example" },
        { subject: "Biology", link: "https://forms.gle/example" },
        { subject: "History", link: "https://forms.gle/example" },
        { subject: "Citizenship Education", link: "https://forms.gle/example" },
        { subject: "Christian Religious Studies (CRS)", link: "https://forms.gle/example" },
        { subject: "Physics", link: "https://forms.gle/example" },
        { subject: "Chemistry", link: "https://forms.gle/example" },
        { subject: "Economics", link: "https://forms.gle/example" },
        { subject: "Government", link: "https://forms.gle/example" }
    ],

    // ---------- SS2 SUBJECTS ----------
    "SS2": [
        { subject: "Mathematics", link: "https://forms.gle/example" },
        { subject: "English Language", link: "https://forms.gle/example" },
        { subject: "Literature in English", link: "https://forms.gle/example" },
        { subject: "Biology", link: "https://forms.gle/example" },
        { subject: "History", link: "https://forms.gle/example" },
        { subject: "Citizenship Education", link: "https://forms.gle/example" },
        { subject: "Christian Religious Studies (CRS)", link: "https://forms.gle/example" },
        { subject: "Physics", link: "https://forms.gle/example" },
        { subject: "Chemistry", link: "https://forms.gle/example" },
        { subject: "Economics", link: "https://forms.gle/example" },
        { subject: "Government", link: "https://forms.gle/example" }
    ]

};
/*
    FUNCTION: displayClassCards
    ----------------------------
    This function reads the class names from examData
    and creates a clickable card for each one inside classListContainer.
*/
/*
    SCROLL-AWARE HEADER
    ---------------------
    Watches how far the page has scrolled. Past 50px, it adds
    a "scrolled" class to the header, which triggers the
    glass/blur styling we defined in CSS.
*/
const siteHeader = document.getElementById("site-header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
});

function displayClassCards() {

    // Get an array of class names, e.g. ["JSS1", "JSS2", "SS1", "SS2"]
    const classNames = Object.keys(examData);

    // Loop through each class name one at a time
    for (let i = 0; i < classNames.length; i++) {

        const className = classNames[i]; // e.g. "JSS1"

        // Create a new <div> element to act as the card
        const card = document.createElement("div");

        // Give it a CSS class so we can style all cards the same way later
        card.className = "class-card";

        // Put the class name as the visible text inside the card
        card.textContent = className;

        // Listen for clicks on this specific card
        card.addEventListener("click", function () {
            showSubjects(className); // we'll write this function next
        });

        // Add the finished card into the class-list container in the HTML
        classListContainer.appendChild(card);
    }
}
/*
    FUNCTION: showSubjects
    ------------------------
    This function takes a class name (like "JSS1"),
    finds its subjects in examData, and displays them as cards.
*/
/*
    FUNCTION: switchSection
    --------------------------
    Smoothly transitions from one visible section to another,
    instead of instantly snapping between display:none / display:block.
*/
function switchSection(sectionToHide, sectionToShow) {

    // Step 1: start fading the current section out
    sectionToHide.classList.add("fade-out");

    // Step 2: wait for the fade-out animation to finish (400ms, matching our CSS transition time)
    setTimeout(function () {

        // Now that it's invisible, actually remove it from layout
        sectionToHide.style.display = "none";
        sectionToHide.classList.remove("fade-out");

        // Step 3: prepare the new section — make it visible but starting invisible/slid-down
        sectionToShow.style.display = "block";
        sectionToShow.classList.add("fade-in");

        // Step 4: tiny delay so the browser registers the starting state,
        // then remove the class — this triggers the transition to play
        setTimeout(function () {
            sectionToShow.classList.remove("fade-in");
        }, 20);

    }, 400);
}

function showSubjects(className) {

    // Clear out any subject cards from a previous selection
    subjectListContainer.innerHTML = "";
    subjectSearchInput.value = ""; // reset any old search text when switching classes

    // Update the heading to show which class we're viewing
    examClassTitle.textContent = "Subjects for " + className;

    // Get the array of subjects for this specific class
    const subjects = examData[className];

    // Loop through each subject object in the array
    for (let i = 0; i < subjects.length; i++) {

        const subjectInfo = subjects[i]; // e.g. { subject: "Mathematics", link: "..." }

        // Create a card for this subject
        const subjectCard = document.createElement("div");
        subjectCard.className = "subject-card";
        subjectCard.textContent = subjectInfo.subject;

        // NEW: Listen for a click on this specific subject card
        subjectCard.addEventListener("click", function () {
            // Open this subject's Google Form link in a new browser tab
            window.open(subjectInfo.link, "_blank");
        });

        // Add the card into the subject-list container
        subjectListContainer.appendChild(subjectCard);
    }

// Smoothly transition from the class section to the exam section
    switchSection(classSection, examSection);
}
/*
    EVENT LISTENER: Back button
    -----------------------------
    When clicked, this hides the subjects and shows
    the class selection again.
*/
backButton.addEventListener("click", function () {
    switchSection(examSection, classSection);
});

/*
    EVENT LISTENER: Subject search
    --------------------------------
    Every time the student types in the search box, this checks
    each visible subject card and hides the ones that don't match.
*/
subjectSearchInput.addEventListener("input", function () {

    // Get whatever the student typed, lowercase (so search isn't case-sensitive)
    const searchTerm = subjectSearchInput.value.toLowerCase();

    // Grab every subject card currently on the page
    const allSubjectCards = subjectListContainer.querySelectorAll(".subject-card");

    // Check each card: does its text contain the typed search term?
    for (let i = 0; i < allSubjectCards.length; i++) {
        const cardText = allSubjectCards[i].textContent.toLowerCase();

        if (cardText.includes(searchTerm)) {
            allSubjectCards[i].style.display = "block"; // keep it visible
        } else {
            allSubjectCards[i].style.display = "none";  // hide it
        }
    }
});

/*
    RUN ON PAGE LOAD
    -----------------
    This is the starting point — it builds the class cards
    as soon as the page loads.
*/
/*
    PARTICLE BACKGROUND SETUP
    ----------------------------
    Sets up the canvas and its drawing toolkit ("context"),
    and keeps it sized to match the full browser window.
*/
const particleCanvas = document.getElementById("particle-canvas");
const ctx = particleCanvas.getContext("2d");

// Keeps the canvas the same size as the visible window
function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}

resizeCanvas(); // run once immediately when the page loads
window.addEventListener("resize", resizeCanvas); // run again any time the window is resized
/*
    CREATING PARTICLES
    ---------------------
    Each particle is just a plain object holding its position (x, y)
    and how fast it drifts (speedX, speedY). We create an array
    full of these, then animate all of them every frame.
*/
const particles = [];
const particleCount = 70; // how many dots appear on screen

for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * particleCanvas.width,   // random starting horizontal position
        y: Math.random() * particleCanvas.height,  // random starting vertical position
        speedX: (Math.random() - 0.5) * 0.6,        // slow random drift left/right
        speedY: (Math.random() - 0.5) * 0.6         // slow random drift up/down
    });
}
/*
    MOUSE TRACKING
    ----------------
    Keeps track of where the mouse currently is, so particles
    can react to it (gently pushed away) in the animation loop.
*/
let mouseX = -9999; // start far off-screen so nothing reacts until the mouse actually moves
let mouseY = -9999;

window.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});
/*
    ANIMATION LOOP
    -----------------
    This function runs roughly 60 times per second. Each time, it:
    1. Clears the previous frame
    2. Moves every particle slightly
    3. Pushes particles away if the mouse is near them
    4. Draws each particle as a small dot
    5. Draws faint lines between particles that are close together
*/
function animateParticles() {

    // Step 1: clear the entire canvas before redrawing this frame
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    // Step 2 & 3: update every particle's position
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move the particle by its speed
        p.x += p.speedX;
        p.y += p.speedY;

        // If a particle drifts off any edge, wrap it back around the other side
        if (p.x < 0) p.x = particleCanvas.width;
        if (p.x > particleCanvas.width) p.x = 0;
        if (p.y < 0) p.y = particleCanvas.height;
        if (p.y > particleCanvas.height) p.y = 0;

        // Check distance from the mouse
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the mouse is close (within 120px), gently push the particle away
        if (distance < 120) {
            const pushStrength = (120 - distance) / 120; // closer = stronger push
            p.x += (dx / distance) * pushStrength * 2;
            p.y += (dy / distance) * pushStrength * 2;
        }

        // Step 4: draw this particle as a small glowing dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(155, 127, 232, 0.8)"; // light purple dot
        ctx.fill();
    }

    // Step 5: draw faint connecting lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Only draw a line if these two particles are close enough together
            if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                // The further apart, the fainter the line (fades out smoothly)
                ctx.strokeStyle = "rgba(107, 76, 222, " + (1 - distance / 100) * 0.3 + ")";
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    // Schedule the next frame — this is what makes the animation loop forever
    requestAnimationFrame(animateParticles);
}

animateParticles(); // kick off the loop
displayClassCards();