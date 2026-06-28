/*
    EXAM DATA STRUCTURE
    --------------------
    This object holds all the classes, and inside each class,
    a list of subjects with their Google Forms exam link.

    Structure:
    examData = {
        "ClassName": [
            { subject: "Subject Name", link: "Google Form URL" },
            -- OR (for fully converted subjects) --
            { subject: "Subject Name", timeLimit: 300, questions: [...] }
        ]
    }
*/

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
        {
            subject: "Chemistry",
            timeLimit: 60, // seconds — change to 900 for 15 mins in production
            questions: [
                {
                    question: "Fats and oils belong to a group of compounds known as",
                    options: ["Glycerols", "Caustic alkalis", "Lipids", "Detergents"],
                    correctAnswer: "C"
                },
                {
                    question: "Fats and oils are complex mixture of esters of",
                    options: ["Trihydric alkanol", "Tetrahydric alkanol, butane-1,2,3-triol", "Polyhydric alkanol, propane-2,3,4-triol", "Monohhdric alkanal, Pentane-1,2,3-triol"],
                    correctAnswer: "A"
                },
                {
                    question: "Fatty acid are classified into how many groups",
                    options: ["1", "2", "3", "4"],
                    correctAnswer: "A"
                },
                {
                    question: "Which of these fatty acid has one or more double bonds in their hydrocarbon chain",
                    options: ["Hydrocarbon fatty acid", "Saturated fatty acid", "Unsaturated fatty acid", "Alkanoate fatty acid"],
                    correctAnswer: "A"
                },
                {
                    question: "The hydrolysis of fats and oils with caustic alkali yields",
                    options: ["Ethane-1,2,3-triol", "Buthane-1,2,3-triol", "Propane-1,2,3-triol", "Pentane-1,2,3-triol"],
                    correctAnswer: "A"
                },
                {
                    question: "Linseed oil is a raw material used in the manufacture of",
                    options: ["Margarine and soap", "Ingredients of food", "Glycerol and candles", "Paints and varnishes"],
                    correctAnswer: "A"
                },
                {
                    question: "The rays in the radioactivity process is known as",
                    options: ["Radioactive decay", "Radioactivity", "Radioactive element", "Radioactive reaction"],
                    correctAnswer: "A"
                },
                {
                    question: "The spontaneous decay of the radioactive element to emit radiation is called",
                    options: ["Half Life", "Emission", "Radiation", "Radioactivity"],
                    correctAnswer: "A"
                },
                {
                    question: "Radioactivity was first observed and investigated in 1896 by",
                    options: ["Pierre Curie", "Henri Bacquerel", "Mendeleev", "Marie Curie"],
                    correctAnswer: "A"
                },
                {
                    question: "In what year did Pierre and Marie Curie detect some radioactivity in the element thorium",
                    options: ["1894", "1896", "1898", "1890"],
                    correctAnswer: "A"
                },
                {
                    question: "The time taken for the intensity of radiation to fall to half its original value is known as",
                    options: ["Emission", "Half Life", "Decay constant", "Radiation"],
                    correctAnswer: "A"
                },
                {
                    question: "A process in which the nucleus of a heavy element is split into two nuclei, with a release of energy and several neutrons, is known as",
                    options: ["Fission", "Fusion", "Transmutation", "Bombardment"],
                    correctAnswer: "A"
                },
                {
                    question: "Astatine belongs to the family of elements called",
                    options: ["Chalcogen", "Alkaline metal", "Halogen", "Transition metals"],
                    correctAnswer: "A"
                },
                {
                    question: "Who Built Rome?",
                    options: ["Chlorine", "Florine", "Bromine", "Lodine"],
                    correctAnswer: "A"
                },
                {
                    question: "Which of the gases does chlorine water liberate when exposed to sunlight",
                    options: ["Nitrogen", "Hydrogen", "Carbon(IV) oxide", "Oxygen"],
                    correctAnswer: "A"
                },
                {
                    question: "All of these gases are not bleaching agents except",
                    options: ["Neon", "Chlorine", "Lodine", "Astatine"],
                    correctAnswer: "A"
                },
                {
                    question: "The elements in group I are collectively called",
                    options: ["Alkali earth metals", "Alkali metals", "Transition metals", "Metalloid"],
                    correctAnswer: "A"
                },
                {
                    question: "Which of these elements reacts explosively with water",
                    options: ["Lithium", "Sodium", "Potassium", "Calcium"],
                    correctAnswer: "A"
                },
                {
                    question: "Which of these metals are strongly electropositive metals",
                    options: ["Alkali metal", "Non-metal", "Halogens", "Lantinides"],
                    correctAnswer: "A"
                },
                {
                    question: "Alkali metals react vigorously with dilute acids, liberating",
                    options: ["Acid gas", "Nitrogen gas", "Oxygen gas", "Hydrogen gas"],
                    correctAnswer: "A"
                }
            ]
        },
        { subject: "Economics", link: "https://forms.gle/example" },
        { subject: "Government", link: "https://forms.gle/example" }
    ]
};


/* ============================================================
   GRABBING ELEMENTS FROM THE HTML
   ============================================================ */
const classListContainer    = document.getElementById("class-list");
const subjectListContainer  = document.getElementById("subject-list");
const classSection          = document.getElementById("class-selection");
const examSection           = document.getElementById("exam");
const examClassTitle        = document.getElementById("exam-class-title");
const backButton            = document.getElementById("back-button");
const subjectSearchInput    = document.getElementById("subject-search");
const studentNameInput      = document.getElementById("student-name");
const quizScreen            = document.getElementById("quiz-screen");
const quizSubjectTitle      = document.getElementById("quiz-subject-title");
const quizTimerDisplay      = document.getElementById("quiz-timer");
const questionText          = document.getElementById("question-text");
const optionsContainer      = document.getElementById("options-container");
const nextQuestionButton    = document.getElementById("next-question-button");
const prevQuestionButton    = document.getElementById("prev-question-button");
const siteHeader            = document.getElementById("site-header");
const modalOverlay          = document.getElementById("modal-overlay");
const modalMessage          = document.getElementById("modal-message");
const modalOkButton         = document.getElementById("modal-ok-button");


/* ============================================================
   QUIZ STATE
   Variables shared across all quiz functions.
   ============================================================ */
let currentQuizQuestions  = [];   // shuffled question array for the active quiz
let currentQuestionIndex  = 0;    // which question is showing right now
let studentAnswers        = [];   // student's chosen letter per question index
let timeRemaining         = 0;    // seconds left on the countdown
let timerInterval         = null; // reference to the running timer so we can stop it
let currentSubjectName    = "";   // stored for results submission
let currentClassName      = "";   // stored for results submission
let isNavigating          = false;// double-click guard: true while changing questions


/* ============================================================
   UTILITY: shuffleArray
   Returns a NEW randomly-ordered copy of any array.
   Uses the Fisher-Yates algorithm — the standard correct way
   to shuffle, giving every permutation an equal chance.
   ============================================================ */
function shuffleArray(array) {
    // Copy the array so we never modify the original examData
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at positions i and j
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}


/* ============================================================
   UTILITY: showModal
   Displays a styled custom modal instead of the browser's
   ugly built-in alert(). Pass a message string and an optional
   callback function that runs when the student clicks OK.
   ============================================================ */
function showModal(message, onOkCallback) {
    modalMessage.textContent = message;

    // Reset animation so it replays every time the modal opens
    const box = document.getElementById("modal-box");
    box.style.animation = "none";
    void box.offsetWidth; // force reflow
    box.style.animation = "";

    modalOverlay.style.display = "flex";

    const freshOkButton = modalOkButton.cloneNode(true);
    modalOkButton.parentNode.replaceChild(freshOkButton, modalOkButton);

    freshOkButton.addEventListener("click", function () {
        modalOverlay.style.display = "none";
        if (typeof onOkCallback === "function") {
            onOkCallback();
        }
    });
}


/* ============================================================
   SCROLL-AWARE HEADER
   ============================================================ */
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
});


/* ============================================================
   FUNCTION: switchSection
   Smoothly fades and slides between two sections.
   ============================================================ */
function switchSection(sectionToHide, sectionToShow) {
    sectionToHide.classList.add("fade-out");

    setTimeout(function () {
        sectionToHide.style.display = "none";
        sectionToHide.classList.remove("fade-out");

        sectionToShow.style.display = "block";
        sectionToShow.classList.add("fade-in");

        setTimeout(function () {
            sectionToShow.classList.remove("fade-in");
        }, 20);
    }, 400);
}


/* ============================================================
   FUNCTION: displayClassCards
   Reads class names from examData and builds a card for each.
   ============================================================ */
function displayClassCards() {
    const classNames = Object.keys(examData);

    for (let i = 0; i < classNames.length; i++) {
        const className = classNames[i];

        const card = document.createElement("div");
        card.className = "class-card";
        card.textContent = className;

        card.addEventListener("click", function () {
            showSubjects(className);
        });

        classListContainer.appendChild(card);
    }
}


/* ============================================================
   FUNCTION: showSubjects
   Shows subject cards for the selected class.
   All functions it calls are defined at the top level — NOT
   nested inside this function (that was the original bug).
   ============================================================ */
function showSubjects(className) {
    subjectListContainer.innerHTML = "";
    subjectSearchInput.value = "";
    studentNameInput.value = "";   // always blank for shared computers

    examClassTitle.textContent = "Subjects for " + className;

    const subjects = examData[className];

    for (let i = 0; i < subjects.length; i++) {
        const subjectInfo = subjects[i];

        const subjectCard = document.createElement("div");
        subjectCard.className = "subject-card locked";
        subjectCard.textContent = subjectInfo.subject;

        subjectCard.addEventListener("click", function () {
            if (studentNameInput.value.trim() === "") {
                showModal("Please enter your full name before starting an exam.");
                return;
            }

            if (subjectInfo.questions) {
                // Fully converted subject — launch the in-portal quiz
                startQuiz(subjectInfo, className);
            } else {
                // Still using a Google Form link
                window.open(subjectInfo.link, "_blank");
            }
        });

        subjectListContainer.appendChild(subjectCard);
    }

    switchSection(classSection, examSection);
}


/* ============================================================
   EVENT LISTENER: Back button
   ============================================================ */
backButton.addEventListener("click", function () {
    switchSection(examSection, classSection);
});


/* ============================================================
   EVENT LISTENER: Name input
   Unlocks subject cards as soon as a name is typed.
   ============================================================ */
studentNameInput.addEventListener("input", function () {
    const allSubjectCards = subjectListContainer.querySelectorAll(".subject-card");
    const hasName = studentNameInput.value.trim() !== "";

    for (let i = 0; i < allSubjectCards.length; i++) {
        if (hasName) {
            allSubjectCards[i].classList.remove("locked");
        } else {
            allSubjectCards[i].classList.add("locked");
        }
    }
});


/* ============================================================
   EVENT LISTENER: Subject search / filter
   ============================================================ */
subjectSearchInput.addEventListener("input", function () {
    const searchTerm = subjectSearchInput.value.toLowerCase();
    const allSubjectCards = subjectListContainer.querySelectorAll(".subject-card");

    for (let i = 0; i < allSubjectCards.length; i++) {
        const cardText = allSubjectCards[i].textContent.toLowerCase();
        allSubjectCards[i].style.display = cardText.includes(searchTerm) ? "block" : "none";
    }
});


/* ============================================================
   FUNCTION: startQuiz
   Sets up all quiz state, shuffles questions and options,
   then shows the first question and starts the timer.
   ============================================================ */
function startQuiz(subjectInfo, className) {
    currentClassName    = className;
    currentSubjectName  = subjectInfo.subject;
    currentQuestionIndex = 0;
    isNavigating        = false;

    /*
        SHUFFLING QUESTIONS
        We deep-copy each question object so we can also shuffle
        its options without modifying the original examData.
        For each question we track which letter (A/B/C/D) was
        originally correct BEFORE shuffling, then figure out
        which new position that answer ended up in AFTER shuffling.
    */
    const originalQuestions = subjectInfo.questions;
    const letters = ["A", "B", "C", "D"];

    currentQuizQuestions = shuffleArray(originalQuestions).map(function (q) {
        // Build an array of {letter, text} pairs so we can shuffle options
        // while keeping track of which was the correct one
        const originalOptions = q.options.map(function (optionText, idx) {
            return {
                text: optionText,
                wasCorrect: letters[idx] === q.correctAnswer
            };
        });

        const shuffledOptions = shuffleArray(originalOptions);

        // After shuffling, the correct answer is whichever new position has wasCorrect === true
        let newCorrectLetter = "A";
        for (let i = 0; i < shuffledOptions.length; i++) {
            if (shuffledOptions[i].wasCorrect) {
                newCorrectLetter = letters[i];
                break;
            }
        }

        return {
            question: q.question,
            options: shuffledOptions.map(function (o) { return o.text; }),
            correctAnswer: newCorrectLetter
        };
    });

    // One null slot per question — null means "not answered yet"
    studentAnswers = new Array(currentQuizQuestions.length).fill(null);

    timeRemaining = subjectInfo.timeLimit;
    quizSubjectTitle.textContent = subjectInfo.subject;

    switchSection(examSection, quizScreen);
    renderQuestion();
    startTimer();
}


/* ============================================================
   FUNCTION: renderQuestion
   Displays the current question and its (already-shuffled) options.
   Also updates Prev/Next button states.
   ============================================================ */
function renderQuestion() {
    const question = currentQuizQuestions[currentQuestionIndex];
    const letters  = ["A", "B", "C", "D"];

    questionText.textContent =
        "Question " + (currentQuestionIndex + 1) +
        " of " + currentQuizQuestions.length +
        ": " + question.question;

    optionsContainer.innerHTML = "";

    // Trigger the slide-in animation on the question container
    const container = document.getElementById("question-container");
    container.classList.remove("question-enter");
    // Force browser to register the removal before re-adding
    void container.offsetWidth;
    container.classList.add("question-enter");

    for (let i = 0; i < question.options.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.className = "option-button option-enter";

        // Stagger each option's animation so they pop in one after another
        optionButton.style.animationDelay = (i * 0.06) + "s";

        optionButton.textContent = letters[i] + ". " + question.options[i];

        if (studentAnswers[currentQuestionIndex] === letters[i]) {
            // Already answered — show as selected but skip the pop-in delay
            optionButton.classList.add("selected");
            optionButton.style.animationDelay = "0s";
        }

        optionButton.addEventListener("click", function () {
            studentAnswers[currentQuestionIndex] = letters[i];

            const allOptions = optionsContainer.querySelectorAll(".option-button");
            for (let j = 0; j < allOptions.length; j++) {
                allOptions[j].classList.remove("selected");
                allOptions[j].classList.remove("option-enter");
            }

            optionButton.classList.add("selected");
            saveQuizProgress();
        });

        optionsContainer.appendChild(optionButton);
    }

    const isFirst = currentQuestionIndex === 0;
    const isLast  = currentQuestionIndex === currentQuizQuestions.length - 1;

    prevQuestionButton.style.display = isFirst ? "none" : "inline-block";
    nextQuestionButton.textContent   = isLast  ? "Submit" : "Next";

    saveQuizProgress();
    isNavigating = false;
}


/* ============================================================
   EVENT LISTENER: Next / Submit button
   The isNavigating guard prevents double-click skipping.
   ============================================================ */
nextQuestionButton.addEventListener("click", function () {
    if (isNavigating) return; // block rapid double-clicks
    isNavigating = true;

    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        finishQuiz();
    }
});


/* ============================================================
   EVENT LISTENER: Previous button
   Lets students go back and change an answer.
   ============================================================ */
prevQuestionButton.addEventListener("click", function () {
    if (isNavigating) return; // block rapid double-clicks
    if (currentQuestionIndex === 0) return; // already on first question
    isNavigating = true;

    currentQuestionIndex--;
    renderQuestion();
});


/* ============================================================
   FUNCTION: startTimer
   Counts down once per second and auto-submits at zero.
   ============================================================ */
function startTimer() {
    updateTimerDisplay(); // show starting time immediately

    timerInterval = setInterval(function () {
        timeRemaining--;
        updateTimerDisplay();

        // Save progress every 5 seconds so timeRemaining stays accurate on resume
        if (timeRemaining % 5 === 0) {
            saveQuizProgress();
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}


/* ============================================================
   FUNCTION: updateTimerDisplay
   Converts raw seconds into "MM:SS" format.
   Turns red when under 60 seconds to warn the student.
   ============================================================ */
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    quizTimerDisplay.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    // Visual warning when time is running low
    if (timeRemaining <= 60) {
        quizTimerDisplay.style.color  = "#ff4444";
        quizTimerDisplay.style.borderColor = "#ff4444";
    } else {
        quizTimerDisplay.style.color  = "";
        quizTimerDisplay.style.borderColor = "";
    }
}


/* ============================================================
   FUNCTION: saveQuizProgress
   Persists everything needed to resume to localStorage.
   ============================================================ */
function saveQuizProgress() {
    const progressData = {
        subjectName:          currentSubjectName,
        className:            currentClassName,
        studentName:          studentNameInput.value,
        questions:            currentQuizQuestions,
        currentQuestionIndex: currentQuestionIndex,
        studentAnswers:       studentAnswers,
        timeRemaining:        timeRemaining
    };
    localStorage.setItem("examProgress", JSON.stringify(progressData));
}


/* ============================================================
   FUNCTION: checkForSavedQuiz
   Runs on page load. Resumes an interrupted quiz if one exists.
   ============================================================ */
function checkForSavedQuiz() {
    let savedData;
    try {
        savedData = localStorage.getItem("examProgress");
    } catch (e) {
        return; // localStorage unavailable — just show the homepage
    }

    if (!savedData) return;

    const progress = JSON.parse(savedData);

    // Restore state
    currentQuizQuestions  = progress.questions;
    currentQuestionIndex  = progress.currentQuestionIndex;
    studentAnswers        = progress.studentAnswers;
    timeRemaining         = progress.timeRemaining;
    currentSubjectName    = progress.subjectName;
    currentClassName      = progress.className;

    studentNameInput.value      = progress.studentName;
    quizSubjectTitle.textContent = progress.subjectName;

    // Skip straight to the quiz screen
    classSection.style.display = "none";
    examSection.style.display  = "none";
    quizScreen.style.display   = "block";

    renderQuestion();
    startTimer();
}


/* ============================================================
   FUNCTION: finishQuiz
   Calculates score silently, shows the custom modal,
   then resets the portal for the next student.
   ============================================================ */
function finishQuiz() {
    clearInterval(timerInterval);
    try { localStorage.removeItem("examProgress"); } catch (e) {}

    // Calculate score silently
    let score = 0;
    for (let i = 0; i < currentQuizQuestions.length; i++) {
        if (studentAnswers[i] === currentQuizQuestions[i].correctAnswer) {
            score++;
        }
    }

    const scoreText = score + "/" + currentQuizQuestions.length;

    // Console log for your own reference
    console.log("=== EXAM RESULT ===");
    console.log("Student :", studentNameInput.value);
    console.log("Class   :", currentClassName);
    console.log("Subject :", currentSubjectName);
    console.log("Score   :", scoreText);
    console.log("===================");

    // Submit silently to Google Sheets in the background
    submitResultToSheet(studentNameInput.value, currentClassName, currentSubjectName, scoreText);
}

/*
    FUNCTION: submitResultToSheet
    --------------------------------
    Silently submits the student's result to your Google Form,
    which automatically saves it to the linked Google Sheet.
    The student never sees this happen — they only see the modal.

    HOW IT WORKS:
    Google Forms accepts submissions via a plain URL with the
    answers as query parameters. We send this using a hidden
    <iframe> — the browser loads the submission URL invisibly,
    Google records the response, and nothing changes on screen.
    No redirects, no popups, no new tabs.
*/
function submitResultToSheet(studentName, className, subjectName, score) {

    const formBaseURL = "https://docs.google.com/forms/d/e/1FAIpQLSeaIiCn-S-zr56SkrEkLxkAVGESvzu9XPnp_kgGw90vFkastg/formResponse";

    // Build the URL with answers as query parameters
    const submissionURL = formBaseURL +
        "?entry.989513760="  + encodeURIComponent(studentName) +
        "&entry.572955960="  + encodeURIComponent(className) +
        "&entry.649845269="  + encodeURIComponent(subjectName) +
        "&entry.1080095985=" + encodeURIComponent(score) +
        "&submit=Submit";

    /*
        WHY AN IMAGE TAG?
        -----------------
        Browsers block cross-origin form POSTs from localhost (CORS policy).
        But loading an image src has no such restriction — the browser
        fires a GET request to the URL silently. Google Forms accepts
        GET submissions, records the response, and returns a redirect
        page which the browser tries to load as an "image" — it fails
        silently (no visible error), but the submission already landed
        in your Sheet before that happens.
    */
    const img = new Image();
    img.src = submissionURL;

    // Show the modal immediately
    showModal(
        "Your exam has been submitted successfully. Results will be released by school management.",
        resetPortal
    );
}

/* ============================================================
   FUNCTION: resetPortal
   Wipes all state and returns to the homepage for the next student.
   ============================================================ */
function resetPortal() {
    studentNameInput.value   = "";
    subjectSearchInput.value = "";
    currentQuizQuestions     = [];
    currentQuestionIndex     = 0;
    studentAnswers           = [];
    isNavigating             = false;

    quizScreen.style.display = "none";
    switchSection(quizScreen, classSection);
}


/* ============================================================
   MODAL: OK button reference update
   (modalOkButton may be replaced by cloneNode in showModal,
   so we keep a live reference via the overlay's querySelector)
   ============================================================ */


/* ============================================================
   PARTICLE BACKGROUND SETUP
   ============================================================ */
const particleCanvas = document.getElementById("particle-canvas");
const ctx = particleCanvas.getContext("2d");

function resizeCanvas() {
    particleCanvas.width  = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
const particleCount = 70;

for (let i = 0; i < particleCount; i++) {
    particles.push({
        x:      Math.random() * particleCanvas.width,
        y:      Math.random() * particleCanvas.height,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6
    });
}

let mouseX = -9999;
let mouseY = -9999;

window.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animateParticles() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0)                   p.x = particleCanvas.width;
        if (p.x > particleCanvas.width) p.x = 0;
        if (p.y < 0)                   p.y = particleCanvas.height;
        if (p.y > particleCanvas.height) p.y = 0;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
            const pushStrength = (120 - distance) / 120;
            p.x += (dx / distance) * pushStrength * 2;
            p.y += (dy / distance) * pushStrength * 2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(155, 127, 232, 0.8)";
        ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = "rgba(107, 76, 222, " + (1 - distance / 100) * 0.3 + ")";
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animateParticles);
}

animateParticles();

/* ============================================================
   STARTUP
   ============================================================ */
checkForSavedQuiz();
displayClassCards();