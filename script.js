/* ============================================================
   EXAM DATA
   Each subject is either:
   - { subject: "Name", link: "Google Form URL" }  (old format)
   - { subject: "Name", timeLimit: 900, questions: [...] }  (quiz format)
   ============================================================ */
const examData = {

    "JSS1": [
        { subject: "Mathematics",                                    link: "https://forms.gle/7URWF8ysHXk2aSNL6" },
        { subject: "English Language",                               link: "https://forms.gle/example" },
        { subject: "Information and Communication Technology (ICT)", link: "https://forms.gle/example" },
        { subject: "Physical and Health Education (PHE)",            link: "https://forms.gle/example" },
        { subject: "Literature in English",                          link: "https://forms.gle/example" },
        { subject: "Integrated Science",                             link: "https://forms.gle/example" },
        { subject: "History",                                        link: "https://forms.gle/example" },
        { subject: "Citizenship Education",                          link: "https://forms.gle/example" },
        { subject: "Christian Religious Studies (CRS)",              link: "https://forms.gle/example" },
        { subject: "Cultural and Creative Arts (CCA)",               link: "https://forms.gle/example" }
    ],

    "JSS2": [
        { subject: "Mathematics",                                    link: "https://forms.gle/example" },
        { subject: "English Language",                               link: "https://forms.gle/example" },
        { subject: "Information and Communication Technology (ICT)", link: "https://forms.gle/example" },
        { subject: "Physical and Health Education (PHE)",            link: "https://forms.gle/example" },
        { subject: "Literature in English",                          link: "https://forms.gle/example" },
        { subject: "Integrated Science",                             link: "https://forms.gle/example" },
        { subject: "History",                                        link: "https://forms.gle/example" },
        { subject: "Citizenship Education",                          link: "https://forms.gle/example" },
        { subject: "Christian Religious Studies (CRS)",              link: "https://forms.gle/example" },
        { subject: "Cultural and Creative Arts (CCA)",               link: "https://forms.gle/example" }
    ],

    "SS1": [
        { subject: "Mathematics",                       link: "https://forms.gle/example" },
        { subject: "English Language",                  link: "https://forms.gle/example" },
        { subject: "Literature in English",             link: "https://forms.gle/example" },
        { subject: "Biology",                           link: "https://forms.gle/example" },
        { subject: "History",                           link: "https://forms.gle/example" },
        { subject: "Citizenship Education",             link: "https://forms.gle/example" },
        { subject: "Christian Religious Studies (CRS)", link: "https://forms.gle/example" },
        { subject: "Physics",                           link: "https://forms.gle/example" },
        { subject: "Chemistry",                         link: "https://forms.gle/example" },
        { subject: "Economics",                         link: "https://forms.gle/example" },
        { subject: "Government",                        link: "https://forms.gle/example" }
    ],

    "SS2": [
        { subject: "Mathematics",                       link: "https://forms.gle/example" },
        { subject: "English Language",                  link: "https://forms.gle/example" },
        { subject: "Literature in English",             link: "https://forms.gle/example" },
        { subject: "Biology",                           link: "https://forms.gle/example" },
        { subject: "History",                           link: "https://forms.gle/example" },
        { subject: "Citizenship Education",             link: "https://forms.gle/example" },
        { subject: "Christian Religious Studies (CRS)", link: "https://forms.gle/example" },
        { subject: "Physics",                           link: "https://forms.gle/example" },
        {
            subject: "Chemistry",
            timeLimit: 60, // change to e.g. 900 for 15 mins in production
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
        { subject: "Economics",  link: "https://forms.gle/example" },
        { subject: "Government", link: "https://forms.gle/example" }
    ]
};


/* ============================================================
   ELEMENT REFERENCES
   ============================================================ */
const classListContainer = document.getElementById("class-list");
const subjectListContainer = document.getElementById("subject-list");
const classSection = document.getElementById("class-selection");
const examSection = document.getElementById("exam");
const examClassTitle = document.getElementById("exam-class-title");
const backButton = document.getElementById("back-button");
const subjectSearchInput = document.getElementById("subject-search");
const studentNameInput = document.getElementById("student-name");
const quizScreen = document.getElementById("quiz-screen");
const quizSubjectTitle = document.getElementById("quiz-subject-title");
const quizTimerDisplay = document.getElementById("quiz-timer");
const questionText = document.getElementById("question-text");
const questionNavGrid = document.getElementById("question-nav-grid");
const optionsContainer = document.getElementById("options-container");
const nextQuestionButton = document.getElementById("next-question-button");
const prevQuestionButton = document.getElementById("prev-question-button");
const exitQuizButton = document.getElementById("exit-quiz-button");
const modalCancelButton = document.getElementById("modal-cancel-button");
const siteHeader = document.getElementById("site-header");
const modalOverlay = document.getElementById("modal-overlay");
const modalMessage = document.getElementById("modal-message");
const modalOkButton = document.getElementById("modal-ok-button");
const welcomeSection = document.getElementById("welcome");
const footerEl = document.querySelector("footer");
const themeToggle = document.getElementById("theme-toggle");


/* ============================================================
   QUIZ STATE
   ============================================================ */
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let studentAnswers = [];
let timeRemaining = 0;
let timerInterval = null;
let currentSubjectName = "";
let currentClassName = "";
let isNavigating = false;
let quizInProgress = false;
let quizStartTime = null;
let warningsFired = { fiveMin: false, oneMin: false };


/* ============================================================
   UTILITY: shuffleArray
   Fisher-Yates shuffle — returns a new randomly ordered copy.
   Never modifies the original array.
   ============================================================ */
function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}


/*
    UTILITY: showModal
    -----------------------
    Shows the modal with a message and an OK button.
    If onCancelCallback is provided, a Cancel button also appears —
    this turns the modal into a Yes/Cancel confirmation instead of
    a plain one-button notice.
*/
function showModal(message, onOkCallback, onCancelCallback, onOkLabel, onCancelLabel) {
    modalMessage.textContent = message;

    const box = document.getElementById("modal-box");
    box.style.animation = "none";
    void box.offsetWidth;
    box.style.animation = "";

    modalOverlay.style.display = "flex";

    // Always grab whichever OK/Cancel button currently exists in the DOM right now —
    // never rely on an old reference that may have already been replaced
    const currentOkButton = document.getElementById("modal-ok-button");
    const currentCancelButton = document.getElementById("modal-cancel-button");

    const freshOkButton = currentOkButton.cloneNode(true);
    currentOkButton.parentNode.replaceChild(freshOkButton, currentOkButton);

    const freshCancelButton = currentCancelButton.cloneNode(true);
    currentCancelButton.parentNode.replaceChild(freshCancelButton, currentCancelButton);

    if (typeof onCancelCallback === "function") {
        freshCancelButton.style.display = "inline-block";
        // Use custom labels if provided, otherwise default
        freshOkButton.textContent = onOkLabel || "Yes, Submit";
        freshCancelButton.textContent = onCancelLabel || "Go Back";
    } else {
        freshCancelButton.style.display = "none";
        freshOkButton.textContent = "OK";
    }

    freshOkButton.addEventListener("click", function () {
        modalOverlay.style.display = "none";
        if (typeof onOkCallback === "function") onOkCallback();
    });

    freshCancelButton.addEventListener("click", function () {
        modalOverlay.style.display = "none";
        if (typeof onCancelCallback === "function") onCancelCallback();
    });
}


/* ============================================================
   UTILITY: switchSection
   Fades and slides between two page sections.
   Also controls welcome text and footer visibility.
   ============================================================ */
function switchSection(sectionToHide, sectionToShow) {

    // Show welcome + footer only on the homepage
    if (sectionToHide === classSection) {
        welcomeSection.style.display = "none";
        footerEl.style.display = "none";
    }
    if (sectionToShow === classSection) {
        welcomeSection.style.display = "block";
        footerEl.style.display = "block";
    }

    sectionToHide.classList.add("fade-out");

    setTimeout(function () {
        sectionToHide.style.display = "none";
        sectionToHide.classList.remove("fade-out");

        sectionToShow.style.display = "flex";
        sectionToShow.classList.add("fade-in");

        setTimeout(function () {
            sectionToShow.classList.remove("fade-in");
        }, 20);
    }, 400);
}


/* ============================================================
   SCROLL-AWARE HEADER
   Adds a frosted glass effect once the user scrolls down.
   ============================================================ */
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
});


/* ============================================================
   FUNCTION: displayClassCards
   Builds one clickable card per class from examData.
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
   Resets name + search fields for shared computers.
   ============================================================ */
function showSubjects(className) {
    subjectListContainer.innerHTML = "";
    subjectSearchInput.value = "";
    studentNameInput.value = "";

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
                startQuiz(subjectInfo, className);
            } else {
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

/*
    ANTI-CHEATING: Disable right-click and copy during the quiz
    -----------------------------------------------------------
    Only applies inside the quiz screen — the rest of the site
    behaves completely normally.
*/
quizScreen.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // blocks the right-click menu
});

quizScreen.addEventListener("copy", function (event) {
    event.preventDefault(); // blocks copying selected text
});

/* ============================================================
   EVENT LISTENER: Name input
   Unlocks subject cards once a name is typed.
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
   EVENT LISTENER: Subject search/filter
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
   Shuffles questions and options, sets up state,
   then shows the first question and starts the timer.
   ============================================================ */
function startQuiz(subjectInfo, className) {
    quizInProgress = true;
    quizStartTime = new Date();
    warningsFired = { fiveMin: false, oneMin: false };
    currentClassName = className;
    currentSubjectName = subjectInfo.subject;
    currentQuestionIndex = 0;
    isNavigating = false;
    tabSwitchCount = 0;

    const letters = ["A", "B", "C", "D"];

    // Shuffle question order, and shuffle each question's options
    // while tracking which answer is correct after shuffling
    currentQuizQuestions = shuffleArray(subjectInfo.questions).map(function (q) {
        const originalOptions = q.options.map(function (optionText, idx) {
            return {
                text: optionText,
                wasCorrect: letters[idx] === q.correctAnswer
            };
        });

        const shuffledOptions = shuffleArray(originalOptions);

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

    studentAnswers = new Array(currentQuizQuestions.length).fill(null);
    timeRemaining = subjectInfo.timeLimit;
    quizSubjectTitle.textContent = subjectInfo.subject;

    switchSection(examSection, quizScreen);
    buildQuestionNavPanel();
    renderQuestion();
    startTimer();
}
/*
    ANTI-CHEATING: Tab/window switch detection
    ----------------------------------------------
    Fires whenever the browser tab is hidden or shown again
    (switching tabs, minimizing, switching apps). We only care
    about this WHILE a quiz is actively in progress.
*/
let tabSwitchCount = 0;

document.addEventListener("visibilitychange", function () {

    if (!quizInProgress) {
        return;
    }

    if (document.hidden) {
        tabSwitchCount++;
        console.log("Tab switch detected. Count:", tabSwitchCount);
    } else {
        showModal(
            "Switching tabs or windows during an exam is not allowed and has been recorded (" +
            tabSwitchCount + " time" + (tabSwitchCount > 1 ? "s" : "") + ")."
        );
    }
});

/* ============================================================
   FUNCTION: buildQuestionNavPanel
   Builds the numbered button grid once when a quiz starts.
   Only needs to run once — updateQuestionNavPanel() handles
   the visual state updates as the student moves around.
   ============================================================ */
function buildQuestionNavPanel() {
    questionNavGrid.innerHTML = "";

    for (let i = 0; i < currentQuizQuestions.length; i++) {
        const btn = document.createElement("button");
        btn.className = "question-nav-btn";
        btn.textContent = i + 1;

        // Clicking jumps directly to that question
        btn.addEventListener("click", function () {
            if (isNavigating) return;
            isNavigating = true;
            currentQuestionIndex = i;
            renderQuestion();
        });

        questionNavGrid.appendChild(btn);
    }
}


/* ============================================================
   FUNCTION: updateQuestionNavPanel
   Called every time a question is rendered or an answer changes.
   Updates the answered/current visual states on each button.
   ============================================================ */
function updateQuestionNavPanel() {
    const allNavBtns = questionNavGrid.querySelectorAll(".question-nav-btn");

    for (let i = 0; i < allNavBtns.length; i++) {
        allNavBtns[i].classList.remove("answered", "current");

        if (i === currentQuestionIndex) {
            allNavBtns[i].classList.add("current");
        }

        if (studentAnswers[i] !== null) {
            allNavBtns[i].classList.add("answered");
        }
    }
}

/* ============================================================
   FUNCTION: renderQuestion
   Displays the current question with animated option buttons.
   ============================================================ */
function renderQuestion() {
    const question = currentQuizQuestions[currentQuestionIndex];
    const letters = ["A", "B", "C", "D"];

    questionText.textContent =
        "Question " + (currentQuestionIndex + 1) +
        " of " + currentQuizQuestions.length +
        ": " + question.question;

    optionsContainer.innerHTML = "";

    // Trigger slide-in animation on the question box
    const container = document.getElementById("question-container");
    container.classList.remove("question-enter");
    void container.offsetWidth; // force browser to re-register the animation
    container.classList.add("question-enter");

    for (let i = 0; i < question.options.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.className = "option-button option-enter";
        optionButton.style.animationDelay = (i * 0.06) + "s";
        optionButton.textContent = letters[i] + ". " + question.options[i];

        // If student already answered this question, restore their selection
        if (studentAnswers[currentQuestionIndex] === letters[i]) {
            optionButton.classList.add("selected");
            optionButton.style.animationDelay = "0s";
        }

        optionButton.addEventListener("click", function () {
            studentAnswers[currentQuestionIndex] = letters[i];

            // Clear all options then highlight the chosen one
            const allOptions = optionsContainer.querySelectorAll(".option-button");
            for (let j = 0; j < allOptions.length; j++) {
                allOptions[j].classList.remove("selected", "option-enter");
            }

            optionButton.classList.add("selected");
            updateQuestionNavPanel();
            saveQuizProgress();
        });

        optionsContainer.appendChild(optionButton);
    }

    const isFirst = currentQuestionIndex === 0;
    const isLast = currentQuestionIndex === currentQuizQuestions.length - 1;

    prevQuestionButton.style.display = isFirst ? "none" : "inline-block";
    nextQuestionButton.textContent = isLast ? "Submit" : "Next";

    saveQuizProgress();
    updateQuestionNavPanel();
    isNavigating = false;
}


/* ============================================================
   EVENT LISTENER: Next / Submit button
   isNavigating guard prevents double-click question skipping.
   ============================================================ */
nextQuestionButton.addEventListener("click", function () {
    if (isNavigating) return;
    isNavigating = true;

    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        // Not the last question — just move forward normally
        currentQuestionIndex++;
        renderQuestion();
    } else {
        // Last question — check for unanswered before submitting
        checkUnansweredAndSubmit();
    }
});


/* ============================================================
   EVENT LISTENER: Previous button
   ============================================================ */
prevQuestionButton.addEventListener("click", function () {
    if (isNavigating || currentQuestionIndex === 0) return;
    isNavigating = true;

    currentQuestionIndex--;
    renderQuestion();
});

/*
    EVENT LISTENER: Exit Exam button
    -------------------------------------
    Asks for confirmation before actually leaving the quiz,
    so an accidental click doesn't wipe a student's progress.
*/
exitQuizButton.addEventListener("click", function () {
    showModal(
        "Are you sure you want to exit this exam? Your progress will be lost.",
        function () {
            quizInProgress = false;
            clearInterval(timerInterval);
            try { localStorage.removeItem("examProgress"); } catch (e) {}
            resetPortal();
        },
        function () {
            // do nothing
        },
        "Yes, Exit",  // OK button label
        "Cancel"      // Cancel button label
    );
});


/* ============================================================
   FUNCTION: startTimer
   Counts down once per second. Auto-submits when time hits zero.
   Saves progress every 5 seconds.
   ============================================================ */
function startTimer() {
    updateTimerDisplay();

    timerInterval = setInterval(function () {
        if (modalOverlay.style.display === "flex") return;

        timeRemaining--;
        updateTimerDisplay();

        // Check warnings — fire if time has passed the threshold and not shown yet
        if (timeRemaining <= 45 && !warningsFired.fiveMin) {
            warningsFired.fiveMin = true;
            showModal("⏰ 5 minutes remaining! Please review your answers and submit soon.");
        } else if (timeRemaining <= 20 && !warningsFired.oneMin) {
            warningsFired.oneMin = true;
            showModal("⚠️ Only 1 minute left! Submit your exam now.");
        }

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
   Converts seconds to MM:SS. Turns red under 60 seconds.
   ============================================================ */
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    quizTimerDisplay.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    if (timeRemaining <= 60) {
        quizTimerDisplay.style.color = "#ff4444";
        quizTimerDisplay.style.borderColor = "#ff4444";
    } else {
        quizTimerDisplay.style.color = "";
        quizTimerDisplay.style.borderColor = "";
    }
}


/* ============================================================
   FUNCTION: saveQuizProgress
   Saves all quiz state to localStorage so it survives
   a refresh, crash, or power cut.
   ============================================================ */
function saveQuizProgress() {
    const progressData = {
        subjectName: currentSubjectName,
        className: currentClassName,
        studentName: studentNameInput.value,
        questions: currentQuizQuestions,
        currentQuestionIndex: currentQuestionIndex,
        studentAnswers: studentAnswers,
        timeRemaining: timeRemaining,
        startTime: quizStartTime ? quizStartTime.toISOString() : null
    };
    localStorage.setItem("examProgress", JSON.stringify(progressData));
}

/* ============================================================
   THEME TOGGLE
   Switches between dark (default) and light mode.
   Remembers preference in localStorage across visits.
   ============================================================ */
function initTheme() {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "☀️";
    } else {
        document.body.classList.remove("light-mode");
        themeToggle.textContent = "🌙";
    }
}

themeToggle.addEventListener("click", function () {
    const isLight = document.body.classList.toggle("light-mode");

    if (isLight) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});

/* ============================================================
   FUNCTION: checkForSavedQuiz
   Runs on page load. If an unfinished quiz exists in
   localStorage, resumes it instead of showing the homepage.
   ============================================================ */
function checkForSavedQuiz() {
    let savedData;
    try {
        savedData = localStorage.getItem("examProgress");
    } catch (e) {
        return;
    }

    if (!savedData) return;

    const progress = JSON.parse(savedData);

    currentQuizQuestions = progress.questions;
    currentQuestionIndex = progress.currentQuestionIndex;
    studentAnswers = progress.studentAnswers;
    timeRemaining = progress.timeRemaining;
    currentSubjectName = progress.subjectName;
    currentClassName = progress.className;
    quizStartTime = progress.startTime ? new Date(progress.startTime) : new Date(); // NEW

    studentNameInput.value = progress.studentName;
    quizSubjectTitle.textContent = progress.subjectName;

    // Hide welcome + footer since we're jumping straight to the quiz
    welcomeSection.style.display = "none";
    footerEl.style.display = "none";

    classSection.style.display = "none";
    examSection.style.display = "none";
    quizScreen.style.display = "flex";

    renderQuestion();
    buildQuestionNavPanel();
    updateQuestionNavPanel();
    startTimer();
}

/* ============================================================
   FUNCTION: checkUnansweredAndSubmit
   Counts unanswered questions before final submission.
   If any are skipped, warns the student and gives them
   a chance to go back. If all answered, submits directly.
   ============================================================ */
function checkUnansweredAndSubmit() {
    const unanswered = [];

    for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] === null) {
            unanswered.push(i + 1);
        }
    }

    if (unanswered.length === 0) {
        // All questions answered — ask for final confirmation
        showModal(
            "You have answered all questions. Are you ready to submit your exam?",
            function () {
                finishQuiz();
            },
            function () {
                // Cancelled — stay on current question
                isNavigating = false;
            },
            "Yes, Submit",
            "Cancel"
        );
    } else {
        // Some questions unanswered — warn and give options
        const questionList = unanswered.join(", ");
        const plural = unanswered.length === 1 ? "question" : "questions";

        showModal(
            "You have " + unanswered.length + " unanswered " + plural +
            " (Question " + questionList + "). Do you still want to submit?",
            function () {
                finishQuiz();
            },
            function () {
                // Jump to first unanswered question
                isNavigating = true;
                currentQuestionIndex = unanswered[0] - 1;
                renderQuestion();
            },
            "Yes, Submit",
            "Go Back"
        );
    }
}

/* ============================================================
   FUNCTION: finishQuiz
   Calculates score silently, submits to Google Sheet,
   shows the modal, then resets for the next student.
   ============================================================ */
function finishQuiz() {
    quizInProgress = false;
    clearInterval(timerInterval);
    try { localStorage.removeItem("examProgress"); } catch (e) {}

    let score = 0;
    for (let i = 0; i < currentQuizQuestions.length; i++) {
        if (studentAnswers[i] === currentQuizQuestions[i].correctAnswer) {
            score++;
        }
    }

    const scoreText = score + "/" + currentQuizQuestions.length;

    // Admin-only: visible in browser console (F12 → Console tab)
    console.log("=== EXAM RESULT ===");
    console.log("Student :", studentNameInput.value);
    console.log("Class   :", currentClassName);
    console.log("Subject :", currentSubjectName);
    console.log("Score   :", scoreText);
    console.log("===================");

    submitResultToSheet(studentNameInput.value, currentClassName, currentSubjectName, scoreText);
}


/* ============================================================
   FUNCTION: submitResultToSheet
   Silently submits the result to Google Forms/Sheets using
   an image GET request (bypasses CORS restrictions).
   Student only sees the modal — never the score.
   ============================================================ */
function submitResultToSheet(studentName, className, subjectName, score) {
    const formBaseURL = "https://docs.google.com/forms/d/e/1FAIpQLSeaIiCn-S-zr56SkrEkLxkAVGESvzu9XPnp_kgGw90vFkastg/formResponse";

    // Calculate how long the student spent
    const endTime = new Date();
    const durationMs = endTime - quizStartTime;
    const durationMinutes = Math.floor(durationMs / 60000);
    const durationSeconds = Math.floor((durationMs % 60000) / 1000);
    const durationText = durationMinutes + "m " + durationSeconds + "s";

    // Format start time as readable string e.g. "2026-06-27 10:35:42"
    const startText = quizStartTime.toLocaleString("en-GB", {
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: false
    });

    // Log for admin reference
    console.log("Start time :", startText);
    console.log("Duration   :", durationText);

    const submissionURL = formBaseURL +
        "?entry.989513760="  + encodeURIComponent(studentName) +
        "&entry.572955960="  + encodeURIComponent(className) +
        "&entry.649845269="  + encodeURIComponent(subjectName) +
        "&entry.1080095985=" + encodeURIComponent(score) +
        "&entry.671914243="  + encodeURIComponent(tabSwitchCount) +
        "&entry.216522547="  + encodeURIComponent(startText) +
        "&entry.1781815021="  + encodeURIComponent(durationText) +
        "&submit=Submit";

    const img = new Image();
    img.src = submissionURL;

    showModal(
        "Your exam has been submitted successfully. Results will be released by school management.",
        resetPortal
    );
}


/* ============================================================
   FUNCTION: resetPortal
   Clears all state and returns to the homepage,
   ready for the next student.
   ============================================================ */
function resetPortal() {
    studentNameInput.value = "";
    subjectSearchInput.value = "";
    currentQuizQuestions = [];
    currentQuestionIndex = 0;
    studentAnswers = [];
    isNavigating = false;

    quizScreen.style.display = "none";
    switchSection(quizScreen, classSection);
}


/* ============================================================
   PARTICLE BACKGROUND
   Interactive network of dots that react to mouse movement.
   ============================================================ */
const particleCanvas = document.getElementById("particle-canvas");
const ctx = particleCanvas.getContext("2d");

function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
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

        // Wrap particles around screen edges
        if (p.x < 0)                    p.x = particleCanvas.width;
        if (p.x > particleCanvas.width)  p.x = 0;
        if (p.y < 0)                    p.y = particleCanvas.height;
        if (p.y > particleCanvas.height) p.y = 0;

        // Push particles away from the mouse cursor
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
            const pushStrength = (120 - distance) / 120;
            p.x += (dx / distance) * pushStrength * 2;
            p.y += (dy / distance) * pushStrength * 2;
        }

        // Draw the dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(155, 127, 232, 0.8)";
        ctx.fill();
    }

    // Draw connecting lines between nearby particles
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
initTheme();
checkForSavedQuiz();
displayClassCards();
