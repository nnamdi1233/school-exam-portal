/* ============================================================
   FIREBASE SETUP
   ============================================================ */
const firebaseConfig = {
  apiKey: "AIzaSyAJ4u0ResZrpw6qdScmo63lAH3DplKmfik",
  authDomain: "galaxy-gems-exam-portal1.firebaseapp.com",
  databaseURL: "https://galaxy-gems-exam-portal1-default-rtdb.firebaseio.com",
  projectId: "galaxy-gems-exam-portal1",
  storageBucket: "galaxy-gems-exam-portal1.appspot.com",
  messagingSenderId: "391876465013",
  appId: "1:391876465013:web:ea7d6bcb37a8d39513433c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

/*
    FUNCTION: saveResultToFirebase
    ----------------------------------
    Stores the result in an organized structure:
    results/{class}/{admissionNumber}/{subject}
*/
function saveResultToFirebase(className, admissionNumber, subjectName, resultData) {
    const cleanAdmission = admissionNumber.trim().toUpperCase();
    const cleanSubject   = subjectName.replace(/[.#$\[\]\/\s]/g, "_");

    db.ref("results/" + className + "/" + cleanAdmission + "/" + cleanSubject).set(resultData);
}

function isAnswered(value) {
    return value !== null && value !== "" && value !== undefined;
}

function saveActiveSessionToFirebase() {
    const key = getSessionKey(currentAdmissionNumber, currentClassName, currentSubjectName);
    const safeAnswers = studentAnswers.map(function (a) { return a === null ? "" : a; });

    db.ref("activeSessions/" + key).update({
        questions: currentQuizQuestions,
        studentAnswers: safeAnswers,
        currentQuestionIndex: currentQuestionIndex,
        startedAt: quizStartTime.toISOString(),
        timeLimitSeconds: currentSubjectInfo.timeLimit,
        studentName: currentStudentName,
    });
}

    function claimDeviceToken() {
    const key = getSessionKey(currentAdmissionNumber, currentClassName, currentSubjectName);
    db.ref("activeSessions/" + key).update({
        activeDeviceToken: currentDeviceToken
    });
}


/* ============================================================
   EXAM WINDOW CONTROL
   ------------------------------------------------------------
   Subjects stay locked for regular students until this date/time.
   The admin/demo admission number (GGS00011) always bypasses this.
   ============================================================ */
const EXAM_START_DATE = new Date("2026-07-17T00:00:00"); // 9:00 AM, July 17 2026

// Manual override — set to true to force-lock everything regardless
// of date (e.g. if you need to delay exams last-minute)
const FORCE_LOCK_ALL = false;

function isExamWindowOpen() {
    if (FORCE_LOCK_ALL) return false;
    return new Date() >= EXAM_START_DATE;
}
function isSubjectOpen(subjectInfo) {
    if (FORCE_LOCK_ALL) return false;
    const openDate = subjectInfo.openDate ? new Date(subjectInfo.openDate) : EXAM_START_DATE;
    return new Date() >= openDate;
}

/* ============================================================
   PRACTICE SUBJECTS
   ------------------------------------------------------------
   These subjects are always open, regardless of EXAM_START_DATE.
   Used for demoing the portal to students before the real exam window.
   ============================================================ */
const PRACTICE_SUBJECTS = ["General Knowledge"];

function isPracticeSubject(subjectName) {
    return PRACTICE_SUBJECTS.includes(subjectName);
}

/* ============================================================
   EXAM DATA
   Each subject is either:
   - { subject: "Name", link: "Google Form URL" }  (old format)
   - { subject: "Name", timeLimit: 900, questions: [...] }  (quiz format)
   ============================================================ */
const examData = {

    "JSS1": [
        { subject: "Mathematics",                                    link: "https://forms.gle/7URWF8ysHXk2aSNL6" },
        {
    subject: "English Studies",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 1500,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Choose the sentence that is grammatically correct.", options: ["Neither of the boys have arrived.", "Neither of the boys has arrived.", "Neither of the boys were arriving.", "Neither of the boys are arriving."], correctAnswer: "B" },
        { type: "mcq", question: "Identify the adjective in the sentence: The diligent student completed the assignment.", options: ["Student", "Assignment", "Diligent", "Completed"], correctAnswer: "C" },
        { type: "mcq", question: "Choose the word nearest in meaning to generous.", options: ["Kind-hearted", "Greedy", "Careless", "Proud"], correctAnswer: "A" },
        { type: "mcq", question: "Select the correctly punctuated sentence.", options: ["My sister said \"I am tired.\"", "My sister said, \"I am tired.\"", "My sister said \"I am tired\".", "My sister said, I am tired."], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an abstract noun?", options: ["Chair", "Honesty", "School", "Teacher"], correctAnswer: "B" },
        { type: "mcq", question: "The opposite of scarce is:", options: ["Rare", "Plenty", "Few", "Limited"], correctAnswer: "B" },
        { type: "mcq", question: "Choose the correct spelling.", options: ["Accomodation", "Accommmodation", "Accommodation", "Acommodation"], correctAnswer: "C" },
        { type: "mcq", question: "Which sentence is in the passive voice?", options: ["The teacher marked the scripts.", "The scripts were marked by the teacher.", "The teacher is marking the scripts.", "The teacher marks the scripts."], correctAnswer: "B" },
        { type: "mcq", question: "The plural form of goose is:", options: ["Gooses", "Geese", "Goose", "Geeses"], correctAnswer: "B" },
        { type: "mcq", question: "Choose the correct option: If I _____ a bird, I would fly around the world.", options: ["am", "was", "were", "be"], correctAnswer: "C" },
        { type: "mcq", question: "Which word is an adverb?", options: ["Quickly", "Bright", "Beauty", "Strength"], correctAnswer: "A" },
        { type: "mcq", question: "Identify the clause in the sentence: When the rain stopped, the children continued playing.", options: ["The rain", "The children", "When the rain stopped", "Continued playing"], correctAnswer: "C" },
        { type: "mcq", question: "The past participle of write is:", options: ["Written", "Wrote", "Writing", "Writes"], correctAnswer: "A" },
        { type: "mcq", question: "Choose the correctly spelt word.", options: ["Maintenance", "Maintanance", "Maintenence", "Maintenanse"], correctAnswer: "A" },
        { type: "mcq", question: "Which of the following is a collective noun?", options: ["Team", "Child", "Teacher", "Building"], correctAnswer: "A" },
        { type: "mcq", question: "Select the sentence with the correct use of a preposition.", options: ["She is interested on music.", "She is interested at music.", "She is interested in music.", "She is interested with music."], correctAnswer: "C" },
        { type: "mcq", question: "Which literary device is used in the expression: The wind whispered through the trees.", options: ["Hyperbole", "Simile", "Personification", "Irony"], correctAnswer: "C" },
        { type: "mcq", question: "Choose the sentence with the correct concord.", options: ["The list of items are on the table.", "The list of items is on the table.", "The list of items were on the table.", "The list of items have been on the table."], correctAnswer: "B" },
        { type: "mcq", question: "The word benevolent means:", options: ["Cruel", "Kind", "Weak", "Stubborn"], correctAnswer: "B" },
        { type: "mcq", question: "Which sentence contains a relative pronoun?", options: ["She sang beautifully.", "I know the boy who won the prize.", "They arrived early.", "We are happy today."], correctAnswer: "B" },
        { type: "fill", question: "Discipline helps students to __________ their goals.", correctAnswer: "Achieve" },
        { type: "fill", question: "A disciplined student manages __________ effectively.", correctAnswer: "Time" },
        { type: "fill", question: "Hard work, punctuality and __________ are qualities of disciplined people.", correctAnswer: "Self-control" },
        { type: "fill", question: "Students who cultivate discipline often achieve academic __________.", correctAnswer: "Excellence" },
        { type: "fill", question: "Discipline should be regarded as a valuable tool for __________.", correctAnswer: "Success" },

        { type: "fill", question: "Three words with the /oi:/ sound ________ __________ ________.", correctAnswer: "boy, toy, joy" },
        { type: "fill", question: "Three words with the /ai/ sound ________ _________ ___________.", correctAnswer: "kite, time, bike" },
        { type: "fill", question: "_________ comes before _________ in active voices.", correctAnswer: "Subject, Verb" },
        { type: "fill", question: "__________ comes before _________ in passive voice.", correctAnswer: "Object, Verb" },
        { type: "fill", question: "The word INAUGURATION has ____ syllables.", correctAnswer: "Five" }
    ]
},
        {
    subject: "Digital Literacy",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 600,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Internet communication is the process of ______.", options: ["repairing computers", "sending and receiving information through the internet", "building websites", "buying computers"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an example of internet communication?", options: ["Writing on paper", "Sending an e-mail", "Reading a newspaper", "Watching television"], correctAnswer: "B" },
        { type: "mcq", question: "E-mail means ______.", options: ["Electric Mail", "Electronic Mail", "Express Mail", "Easy Mail"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is an example of an e-mail service?", options: ["Zoom", "WhatsApp", "Gmail", "Telegram"], correctAnswer: "C" },
        { type: "mcq", question: "Instant messaging allows users to communicate ______.", options: ["once a week", "in real time", "only through letters", "without the internet"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an instant messaging app?", options: ["Microsoft Word", "WhatsApp", "Paint", "Excel"], correctAnswer: "B" },
        { type: "mcq", question: "Video conferencing uses ______.", options: ["text only", "sound and video", "radio waves only", "newspapers"], correctAnswer: "B" },
        { type: "mcq", question: "Which application is commonly used for video conferencing?", options: ["Google Meet", "Calculator", "Notepad", "Paint"], correctAnswer: "A" },
        { type: "mcq", question: "Netiquette refers to ______.", options: ["internet speed", "rules for good behaviour online", "computer repairs", "computer programming"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is an example of good netiquette?", options: ["Insulting others online", "Sharing fake news", "Using respectful language", "Cyberbullying"], correctAnswer: "C" },
        { type: "mcq", question: "Spam refers to ______.", options: ["wanted messages", "unwanted messages sent online", "computer games", "internet cables"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an example of spam?", options: ["A school assignment", "A fake lottery message", "A message from your teacher", "A birthday greeting"], correctAnswer: "B" },
        { type: "mcq", question: "Phishing is an attempt to ______.", options: ["improve internet speed", "steal personal information", "repair computers", "buy airtime"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these helps protect your device from viruses?", options: ["Calculator", "Antivirus software", "Paint", "Speaker"], correctAnswer: "B" },
        { type: "mcq", question: "Malware is ______.", options: ["a good computer program", "harmful software", "a type of monitor", "an internet browser"], correctAnswer: "B" },
        { type: "mcq", question: "A strong password should contain ______.", options: ["only letters", "only numbers", "letters, numbers and symbols", "your first name only"], correctAnswer: "C" },
        { type: "mcq", question: "A screen lock helps to ______.", options: ["increase internet speed", "prevent unauthorized access", "download apps", "play games"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is NOT a type of screen lock?", options: ["PIN", "Fingerprint", "Pattern", "Projector"], correctAnswer: "D" },
        { type: "mcq", question: "Parental controls are used mainly to ______.", options: ["repair devices", "protect children online", "install games", "charge batteries"], correctAnswer: "B" },
        { type: "mcq", question: "One function of parental controls is to ______.", options: ["block harmful websites", "increase battery size", "repair damaged screens", "improve camera quality"], correctAnswer: "A" },
        { type: "mcq", question: "Which of these is a good device maintenance practice?", options: ["Deleting system files", "Keeping the device clean", "Using weak passwords", "Ignoring software updates"], correctAnswer: "B" },
        { type: "mcq", question: "Updating software regularly helps to ______.", options: ["damage the device", "improve security and performance", "reduce storage space", "slow down the device"], correctAnswer: "B" },
        { type: "mcq", question: "Before responding to suspicious messages, you should ______.", options: ["share them immediately", "verify the message first", "forward them to everyone", "ignore your antivirus"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these should never be shared online?", options: ["Your favourite colour", "Your password", "Your hobby", "Your school subject"], correctAnswer: "B" },
        { type: "mcq", question: "Deleting unwanted files from a device helps to ______.", options: ["improve device performance", "spread viruses", "damage the battery", "block the internet"], correctAnswer: "A" },

        { type: "fill", question: "__________ is the process of sending and receiving information through the internet.", correctAnswer: "Internet communication" },
        { type: "fill", question: "E-mail stands for __________ Mail.", correctAnswer: "Electronic" },
        { type: "fill", question: "Software that detects and removes viruses is called __________ software.", correctAnswer: "Antivirus" },
        { type: "fill", question: "The rules of good behaviour when using the internet are called __________.", correctAnswer: "Netiquette" },
        { type: "fill", question: "Settings that help parents monitor and control children's use of digital devices are called __________.", correctAnswer: "Parental controls" }
    ]
},
        {
    subject: "Physical & Health Education (PHE) ",
    openDate: "2026-07-15T08:20:00",
    timeLimit: 580,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Volleyball is played by ______ players on each team.", options: ["5", "6", "7", "8"], correctAnswer: "B" },
        { type: "mcq", question: "The main aim of volleyball is to ______.", options: ["kick the ball into a goal", "hit the ball over the net to the opponent's court", "carry the ball across the court", "throw the ball into a basket"], correctAnswer: "B" },
        { type: "mcq", question: "A team is allowed a maximum of ______ touches before returning the ball.", options: ["2", "3", "4", "5"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is NOT a basic volleyball skill?", options: ["Serving", "Passing", "Dribbling", "Blocking"], correctAnswer: "C" },
        { type: "mcq", question: "Which volleyball skill is used to begin play?", options: ["Spiking", "Serving", "Blocking", "Passing"], correctAnswer: "B" },
        { type: "mcq", question: "Good team play in volleyball requires ______.", options: ["selfishness", "communication and cooperation", "arguing with teammates", "playing alone"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a safety measure in volleyball?", options: ["Playing barefoot", "Skipping warm-up", "Warming up before playing", "Pushing other players"], correctAnswer: "C" },
        { type: "mcq", question: "Contact sports are sports in which ______.", options: ["players do not meet", "players make physical contact", "only one player participates", "equipment is not used"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a contact sport?", options: ["Swimming", "Badminton", "Football", "Table Tennis"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is a non-contact sport?", options: ["Boxing", "Wrestling", "Rugby", "Tennis"], correctAnswer: "D" },
        { type: "mcq", question: "Non-contact sports generally have a ______ risk of injury than contact sports.", options: ["higher", "lower", "equal", "greater"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is NOT a contact sport?", options: ["Judo", "Football", "Swimming", "Boxing"], correctAnswer: "C" },
        { type: "mcq", question: "One benefit of both contact and non-contact sports is that they improve ______.", options: ["crime", "fitness and health", "pollution", "laziness"], correctAnswer: "B" },
        { type: "mcq", question: "First aid is the ______ treatment given to an injured or sick person.", options: ["final", "immediate", "permanent", "surgical"], correctAnswer: "B" },
        { type: "mcq", question: "The purpose of first aid is to ______.", options: ["replace a doctor", "help before professional medical care arrives", "perform surgery", "ignore the injury"], correctAnswer: "B" },
        { type: "mcq", question: "A minor cut should first be ______.", options: ["covered with dirty cloth", "washed with clean water", "ignored", "rubbed with sand"], correctAnswer: "B" },
        { type: "mcq", question: "To stop bleeding from a wound, you should ______.", options: ["apply pressure with a clean cloth", "pour hot water on it", "leave it open", "scratch the wound"], correctAnswer: "A" },
        { type: "mcq", question: "A sprain is best treated using the RICE method. The letter 'R' stands for ______.", options: ["Run", "Rest", "Roll", "Raise"], correctAnswer: "A" },
        { type: "mcq", question: "A burn should be cooled with ______.", options: ["ice directly", "cool running water", "hot water", "cooking oil"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following should be kept in a first aid box?", options: ["Bandages", "Scissors", "Antiseptic", "All of the above"], correctAnswer: "D" },
        { type: "mcq", question: "If a person is seriously injured, you should ______.", options: ["leave the person alone", "call for medical help immediately", "give random medicine", "make the person run"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these helps prevent injuries during sports?", options: ["Ignoring rules", "Wearing proper sportswear", "Playing rough", "Removing safety equipment"], correctAnswer: "B" },
        { type: "mcq", question: "Keeping fingernails short during sports helps to ______.", options: ["improve speed", "prevent injuries", "increase height", "win matches"], correctAnswer: "B" },
        { type: "mcq", question: "An example of a non-contact sport is ______.", options: ["Athletics", "Rugby", "Wrestling", "Judo"], correctAnswer: "A" },
        { type: "mcq", question: "Which volleyball skill is used to stop an opponent's attack at the net?", options: ["Serving", "Passing", "Blocking", "Setting"], correctAnswer: "C" },

        { type: "fill", question: "Volleyball is played by two teams of __________ players each.", correctAnswer: "6" },
        { type: "fill", question: "Sports in which players make physical contact are called __________ sports.", correctAnswer: "contact" },
        { type: "fill", question: "The immediate care given to an injured person before medical help arrives is called __________.", correctAnswer: "first aid" },
        { type: "fill", question: "The volleyball skill used to start the game is called __________.", correctAnswer: "serving" },
        { type: "fill", question: "One important safety measure before participating in sports is to __________ up.", correctAnswer: "warm" }
    ]
},
        {
    subject: "Literature in English",
    openDate: "2026-07-16T08:20:00",
    timeLimit: 700,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Literature is primarily the expression of ______.", options: ["scientific facts", "human experiences and imagination", "mathematical ideas", "political campaigns"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is NOT a genre of literature?", options: ["Poetry", "Drama", "Prose", "Grammar"], correctAnswer: "D" },
        { type: "mcq", question: "Oral literature is transmitted through ______.", options: ["books", "newspapers", "spoken words", "magazines"], correctAnswer: "C" },
        { type: "mcq", question: "A story handed down from one generation to another is called a ______.", options: ["folktale", "novel", "play", "biography"], correctAnswer: "A" },
        { type: "mcq", question: "Which genre of literature is written in lines and stanzas?", options: ["Prose", "Poetry", "Drama", "Fiction"], correctAnswer: "B" },
        { type: "mcq", question: "A play is meant to be ______.", options: ["sung", "acted", "narrated", "memorized"], correctAnswer: "B" },
        { type: "mcq", question: "The main idea of a literary work is known as the ______.", options: ["plot", "setting", "theme", "dialogue"], correctAnswer: "C" },
        { type: "mcq", question: "The place and time a story occurs is called the ______.", options: ["setting", "conflict", "climax", "scene"], correctAnswer: "A" },
        { type: "mcq", question: "The sequence of events in a story is known as the ______.", options: ["character", "plot", "theme", "stanza"], correctAnswer: "B" },
        { type: "mcq", question: "A person or animal in a story is called a ______.", options: ["narrator", "character", "actor", "audience"], correctAnswer: "B" },
        { type: "mcq", question: "The conversation between characters in a drama is called ______.", options: ["monologue", "dialogue", "stanza", "chorus"], correctAnswer: "B" },
        { type: "mcq", question: "A poem that expresses strong personal feelings is called a ______ poem.", options: ["lyric", "dramatic", "narrative", "comic"], correctAnswer: "A" },
        { type: "mcq", question: "\"The moon smiled at me\" is an example of ______.", options: ["simile", "metaphor", "personification", "hyperbole"], correctAnswer: "C" },
        { type: "mcq", question: "\"As brave as a lion\" is an example of ______.", options: ["metaphor", "simile", "irony", "alliteration"], correctAnswer: "B" },
        { type: "mcq", question: "Repetition of initial consonant sounds is called ______.", options: ["rhyme", "rhythm", "alliteration", "metaphor"], correctAnswer: "C" },
        { type: "mcq", question: "The people who watch a drama are called the ______.", options: ["actors", "audience", "playwrights", "directors"], correctAnswer: "B" },
        { type: "mcq", question: "A humorous drama is known as a ______.", options: ["tragedy", "comedy", "epic", "ode"], correctAnswer: "B" },
        { type: "mcq", question: "The writer of a play is called a ______.", options: ["novelist", "poet", "playwright", "editor"], correctAnswer: "C" },
        { type: "mcq", question: "Which of these is an element of prose?", options: ["Plot", "Rhythm", "Stage", "Costume"], correctAnswer: "A" },
        { type: "mcq", question: "A literary work written in paragraphs is called ______.", options: ["prose", "poetry", "drama", "verse"], correctAnswer: "A" },

        { type: "fill", question: "_________ is an underlying message of a literary work.", correctAnswer: "Theme" },
        { type: "fill", question: "__________ refers to the time, background or place of a literary work.", correctAnswer: "Setting" },
        { type: "fill", question: "___________ refers to the central idea of a literary work.", correctAnswer: "Theme" },
        { type: "fill", question: "A sonnet is a poem of ________ lines.", correctAnswer: "14" },
        { type: "fill", question: "An octave is a poem of ________ lines.", correctAnswer: "8" },
        { type: "fill", question: "A sestet is a poem of ________ lines.", correctAnswer: "6" },
        { type: "fill", question: "__________ is written in stanzas, lines and verses in rhythmic patterns.", correctAnswer: "Poetry" },
        { type: "fill", question: "__________ is the juxtaposition of two contradictory ideas.", correctAnswer: "Oxymoron" },
        { type: "fill", question: "____________ are traditional stories passed on orally from generation to generation.", correctAnswer: "Folktales" },
        { type: "fill", question: "_____________ are stories having animals and birds as characters.", correctAnswer: "Fables" }
    ]
},
        {
    subject: "Intermediate Science",
    openDate: "2026-07-15T08:20:00",
    timeLimit: 700,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Entrepreneurship mainly helps people to become ______.", options: ["dependent", "self-reliant", "careless", "unemployed"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a good laboratory practice?", options: ["Tasting chemicals", "Running in the laboratory", "Wearing safety goggles", "Playing with apparatus"], correctAnswer: "C" },
        { type: "mcq", question: "A first aid box is important because it helps to ______.", options: ["punish offenders", "treat minor injuries quickly", "decorate the laboratory", "store food items"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following can cause accidents in a workshop?", options: ["Carefulness", "Obedience", "Negligence", "Cleanliness"], correctAnswer: "C" },
        { type: "mcq", question: "Goggles are mainly used for protecting the ______.", options: ["ears", "hands", "eyes", "nose"], correctAnswer: "C" },
        { type: "mcq", question: "Ceramics are commonly produced from ______.", options: ["clay", "rubber", "plastic", "leather"], correctAnswer: "A" },
        { type: "mcq", question: "The instrument used for drawing circles is called a ______.", options: ["ruler", "compass", "divider", "protractor"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a hand tool?", options: ["Hammer", "Thermometer", "Flask", "Funnel"], correctAnswer: "A" },
        { type: "mcq", question: "Proper maintenance of tools helps to ______.", options: ["damage them", "increase their usefulness", "waste money", "reduce efficiency"], correctAnswer: "B" },
        { type: "mcq", question: "Metals are generally known to be ______.", options: ["fragile", "transparent", "durable", "soft"], correctAnswer: "C" },
        { type: "mcq", question: "Ethics refers to the ______.", options: ["punishment of workers", "rules guiding good behaviour", "use of dangerous chemicals", "operation of machines"], correctAnswer: "B" },
        { type: "mcq", question: "A workshop is a place where ______ work is carried out.", options: ["practical", "theoretical", "entertainment", "domestic"], correctAnswer: "A" },
        { type: "mcq", question: "Aprons and gloves are examples of ______ equipment.", options: ["measuring", "sports", "protective", "electrical"], correctAnswer: "C" },
        { type: "mcq", question: "Freehand drawing is done ______.", options: ["with instruments only", "without drawing instruments", "under water", "with machines only"], correctAnswer: "B" },
        { type: "mcq", question: "The major purpose of skill acquisition is to ______.", options: ["waste time", "create dependency", "develop useful abilities", "encourage laziness"], correctAnswer: "C" },
        { type: "mcq", question: "Pollution is regarded as an environmental ______.", options: ["benefit", "hazard", "experiment", "material"], correctAnswer: "B" },
        { type: "mcq", question: "Lettering in technical drawing should be ______.", options: ["rough", "decorative only", "neat and clear", "oversized"], correctAnswer: "C" },
        { type: "mcq", question: "Safety signs are important because they help to prevent ______.", options: ["accidents", "rainfall", "hunger", "transportation"], correctAnswer: "A" },
        { type: "mcq", question: "Which of these materials is commonly used in building construction?", options: ["Wood", "Cotton", "Foam", "Nylon"], correctAnswer: "A" },
        { type: "mcq", question: "Scientific experiments are mainly carried out in the ______.", options: ["classroom", "library", "laboratory", "dining hall"], correctAnswer: "C" },

        { type: "fill", question: "People who own and manage businesses are called ______.", correctAnswer: "Entrepreneurs" },
        { type: "fill", question: "The room where experiments are conducted is called a ______.", correctAnswer: "Laboratory" },
        { type: "fill", question: "The careless handling of tools can lead to ______.", correctAnswer: "Accidents" },
        { type: "fill", question: "A ______ box contains materials used for treating injuries.", correctAnswer: "First aid" },
        { type: "fill", question: "Materials made from heated clay are called ______.", correctAnswer: "Ceramics" },
        { type: "fill", question: "The instrument used to measure straight lines is a ______.", correctAnswer: "Ruler" },
        { type: "fill", question: "Wearing gloves helps to protect the ______.", correctAnswer: "Hands" },
        { type: "fill", question: "Safety symbols help to warn people about possible ______.", correctAnswer: "Dangers" },
        { type: "fill", question: "Tools should be properly maintained to increase their ______.", correctAnswer: "Lifespan" },
        { type: "fill", question: "Drawing without instruments is called ______ drawing.", correctAnswer: "Freehand" }
    ]
},
        {
    subject: "History",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 800,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "History is the study of ______.", options: ["Animals", "Past events", "Future events", "Plants"], correctAnswer: "B" },
        { type: "mcq", question: "One source of history is ______.", options: ["Television only", "Oral tradition", "Printing", "Books"], correctAnswer: "B" },
        { type: "mcq", question: "Oral tradition means information passed through ______.", options: ["Writing", "Drawing", "Word of mouth", "Songs"], correctAnswer: "C" },
        { type: "mcq", question: "People who study history are called ______.", options: ["Scientists", "Historians", "Doctors", "Engineers"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a primary source of history?", options: ["Textbook", "Newspaper summary", "Artifact", "Novel"], correctAnswer: "C" },
        { type: "mcq", question: "An artifact is a ______.", options: ["Natural river", "Man-made object from the past", "Modern machine", "Building plan"], correctAnswer: "B" },
        { type: "mcq", question: "Archaeology is the study of ______.", options: ["Space", "Ancient objects and remains", "Weather", "Music"], correctAnswer: "B" },
        { type: "mcq", question: "A family consists of people related by ______.", options: ["Marriage, blood, or adoption", "Friendship only", "School only", "Religion only"], correctAnswer: "A" },
        { type: "mcq", question: "The smallest unit of society is the ______.", options: ["State", "Family", "Nation", "Village"], correctAnswer: "B" },
        { type: "mcq", question: "The father, mother, and children form a ______ family.", options: ["Extended", "Nuclear", "Large", "Royal"], correctAnswer: "B" },
        { type: "mcq", question: "An extended family includes ______.", options: ["Parents and children only", "Friends only", "Parents, children, uncles, and grandparents", "Neighbours only"], correctAnswer: "C" },
        { type: "mcq", question: "A community is a group of people living in the same ______.", options: ["Country only", "House only", "Area", "School"], correctAnswer: "C" },
        { type: "mcq", question: "The head of a traditional community may be called a ______.", options: ["Teacher", "Doctor", "Chief", "Driver"], correctAnswer: "C" },
        { type: "mcq", question: "Culture refers to the ______ of a people.", options: ["Buildings only", "Way of life", "Money only", "Language"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is an element of culture?", options: ["Language", "Rainfall", "Soil", "Wind"], correctAnswer: "A" },
        { type: "mcq", question: "Nigeria gained independence in ______.", options: ["1950", "1955", "1960", "1970"], correctAnswer: "C" },
        { type: "mcq", question: "The green colour on the Nigerian flag represents ______.", options: ["Peace", "Agriculture", "Strength", "Unity"], correctAnswer: "B" },
        { type: "mcq", question: "The white colour on the Nigerian flag stands for ______.", options: ["Peace", "War", "Wealth", "Education"], correctAnswer: "A" },
        { type: "mcq", question: "The first capital of Nigeria was ______.", options: ["Abuja", "Lagos", "Kano", "Ibadan"], correctAnswer: "B" },
        { type: "mcq", question: "The present capital of Nigeria is ______.", options: ["Lagos", "Kaduna", "Port Harcourt", "Abuja"], correctAnswer: "D" },
        { type: "mcq", question: "A migrant is a person who ______.", options: ["Refuses to travel", "Moves from one place to another", "Builds houses", "Teaches history"], correctAnswer: "B" },
        { type: "mcq", question: "One reason for migration is ______.", options: ["Employment", "Laziness", "Noisy surroundings", "Darkness"], correctAnswer: "A" },
        { type: "mcq", question: "A kingdom is usually ruled by a ______.", options: ["Farmer", "Trader", "King", "Soldier"], correctAnswer: "C" },
        { type: "mcq", question: "The study of family history is called ______.", options: ["Genealogy", "Geography", "Biology", "Sociology"], correctAnswer: "A" },
        { type: "mcq", question: "History helps us to ______.", options: ["Understand the past", "Forget the past", "Stop learning", "Avoid problems"], correctAnswer: "A" },

        { type: "fill", question: "Nigeria gained independence in the year __________.", correctAnswer: "1960" },
        { type: "fill", question: "The first capital of Nigeria was __________.", correctAnswer: "Lagos" },
        { type: "fill", question: "The present capital of Nigeria is __________.", correctAnswer: "Abuja" },
        { type: "fill", question: "A person who studies history is called a __________.", correctAnswer: "Historian" },
        { type: "fill", question: "Information about the past passed from one generation to another by word of mouth is called __________.", correctAnswer: "Tradition" }
    ]
},
        {
    subject: "Social & Citizenship Studies",
    openDate: "2026-07-16T08:20:00",
    timeLimit: 600,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Migration is the ______ of people from one place to another.", options: ["movement", "punishment", "education", "celebration"], correctAnswer: "A" },
        { type: "mcq", question: "Migration within a country is called ______ migration.", options: ["external", "international", "internal", "illegal"], correctAnswer: "C" },
        { type: "mcq", question: "Migration from Nigeria to Ghana is an example of ______ migration.", options: ["rural", "internal", "local", "international"], correctAnswer: "D" },
        { type: "mcq", question: "One major cause of migration is ______.", options: ["laziness", "employment opportunities", "playing games", "celebrations"], correctAnswer: "B" },
        { type: "mcq", question: "Overcrowding in cities is a ______ effect of migration.", options: ["positive", "negative", "social", "cultural"], correctAnswer: "B" },
        { type: "mcq", question: "Smuggling of migrants involves ______ movement across borders.", options: ["legal", "free", "illegal", "peaceful"], correctAnswer: "C" },
        { type: "mcq", question: "A person who enters another country without proper documents is involved in ______ migration.", options: ["regular", "internal", "local", "irregular"], correctAnswer: "D" },
        { type: "mcq", question: "One danger of irregular migration is ______.", options: ["scholarship", "deportation", "promotion", "employment"], correctAnswer: "B" },
        { type: "mcq", question: "Human trafficking is the illegal ______ of people.", options: ["protection", "movement and exploitation", "education", "training"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a form of human trafficking?", options: ["Farming", "Teaching", "Organ harvesting", "Banking"], correctAnswer: "C" },
        { type: "mcq", question: "Poverty is a ______ of human trafficking.", options: ["prevention", "punishment", "cause", "benefit"], correctAnswer: "C" },
        { type: "mcq", question: "The agency responsible for fighting human trafficking in Nigeria is ______.", options: ["EFCC", "FRSC", "NAPTIP", "WAEC"], correctAnswer: "C" },
        { type: "mcq", question: "International relations involve relationships between ______.", options: ["families", "schools", "countries", "villages"], correctAnswer: "C" },
        { type: "mcq", question: "Countries cooperate to maintain ______.", options: ["war", "peace", "conflict", "violence"], correctAnswer: "B" },
        { type: "mcq", question: "Nigeria is a member of ______.", options: ["WAEC only", "ECOWAS", "PTA", "FIFA only"], correctAnswer: "B" },
        { type: "mcq", question: "International cooperation promotes ______.", options: ["hatred", "disunity", "development", "fighting"], correctAnswer: "C" },
        { type: "mcq", question: "Respecting the culture of other countries promotes ______.", options: ["conflict", "mutual respect", "violence", "hatred"], correctAnswer: "B" },
        { type: "mcq", question: "A document used for international travel is a ______.", options: ["library card", "passport", "report card", "identity card"], correctAnswer: "B" },
        { type: "mcq", question: "One positive effect of migration is ______.", options: ["overcrowding", "unemployment", "cultural exchange", "housing shortage"], correctAnswer: "C" },
        { type: "mcq", question: "Peaceful settlement of disagreements between countries is called ______.", options: ["negotiation", "fighting", "punishment", "migration"], correctAnswer: "A" },

        { type: "fill", question: "Migration is the movement of people from one place to another.", correctAnswer: "Movement" },
        { type: "fill", question: "Migration within a country is called ______ migration.", correctAnswer: "Internal" },
        { type: "fill", question: "Migration from one country to another is called ______ migration.", correctAnswer: "International" },
        { type: "fill", question: "Human trafficking involves the illegal exploitation of people.", correctAnswer: "Human trafficking" },
        { type: "fill", question: "The agency that fights human trafficking in Nigeria is ______.", correctAnswer: "NAPTIP" },
        { type: "fill", question: "Entering another country without proper documents is called ______.", correctAnswer: "Irregular migration" },
        { type: "fill", question: "A document needed for international travel is a ______.", correctAnswer: "Passport" },
        { type: "fill", question: "Countries working together is known as ______.", correctAnswer: "International cooperation" },
        { type: "fill", question: "One major cause of migration is ______.", correctAnswer: "Unemployment" },
        { type: "fill", question: "______ and understanding between countries promote mutual respect.", correctAnswer: "Peace" }
    ]
},
    {
    subject: "Christian Religious Studies",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 800,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "A family is the ______ unit of society.", options: ["largest", "smallest", "strongest", "weakest"], correctAnswer: "B" },
        { type: "mcq", question: "A nuclear family consists of:", options: ["Father, mother, and children", "Grandparents and cousins", "Uncles and aunts", "Neighbours"], correctAnswer: "A" },
        { type: "mcq", question: "The head of the family is usually the:", options: ["Child", "Mother", "Father", "Grandmother"], correctAnswer: "C" },
        { type: "mcq", question: "Children are expected to ______ their parents.", options: ["insult", "avoid", "obey", "challenge"], correctAnswer: "C" },
        { type: "mcq", question: "\"Honour thy father and thy mother\" is found in:", options: ["Exodus 20:12", "Matthew 5:10", "Luke 2:1", "Genesis 1:1"], correctAnswer: "A" },
        { type: "mcq", question: "Which of these is a characteristic of a good family?", options: ["Quarrelling", "Love", "Hatred", "Disobedience"], correctAnswer: "B" },
        { type: "mcq", question: "The mother is primarily responsible for:", options: ["Nurturing the family", "Building roads", "Conducting elections", "Making laws"], correctAnswer: "A" },
        { type: "mcq", question: "A family that includes grandparents, uncles, and cousins is called:", options: ["Nuclear family", "Single-parent family", "Extended family", "Blended family"], correctAnswer: "C" },
        { type: "mcq", question: "One way children contribute to the family is by:", options: ["Disobeying rules", "Helping with chores", "Fighting siblings", "Wasting resources"], correctAnswer: "B" },
        { type: "mcq", question: "A good family is built on:", options: ["Love and unity", "Pride and hatred", "Anger and violence", "Selfishness"], correctAnswer: "A" },
        { type: "mcq", question: "The primary purpose of a school is:", options: ["Trading", "Learning", "Farming", "Recreation only"], correctAnswer: "B" },
        { type: "mcq", question: "Students should relate with teachers through:", options: ["Respect", "Disobedience", "Mockery", "Violence"], correctAnswer: "A" },
        { type: "mcq", question: "A good friend should be:", options: ["Dishonest", "Lazy", "Trustworthy", "Troublesome"], correctAnswer: "C" },
        { type: "mcq", question: "\"He that walketh with wise men shall be wise\" is found in:", options: ["Proverbs 13:20", "Psalm 23:1", "John 3:16", "Matthew 6:9"], correctAnswer: "A" },
        { type: "mcq", question: "Which of the following is a school member?", options: ["Principal", "Teacher", "Student", "All of the above"], correctAnswer: "D" },
        { type: "mcq", question: "Good friends help one another to:", options: ["Cheat in examinations", "Improve academically", "Break school rules", "Fight teachers"], correctAnswer: "B" },
        { type: "mcq", question: "David and Jonathan are examples of:", options: ["Enemies", "Brothers", "Friends", "Cousins"], correctAnswer: "C" },
        { type: "mcq", question: "One consequence of bad friendship is:", options: ["Academic excellence", "Good behavior", "Indiscipline", "Honesty"], correctAnswer: "C" },
        { type: "mcq", question: "School prefects help to:", options: ["Maintain discipline", "Sell goods", "Farm", "Build houses"], correctAnswer: "A" },
        { type: "mcq", question: "Evil communication corrupts:", options: ["Good manners", "Good food", "Good roads", "Good weather"], correctAnswer: "A" },
        { type: "mcq", question: "A community is a group of people living:", options: ["In different countries", "In the same area", "In different planets", "In different schools"], correctAnswer: "B" },
        { type: "mcq", question: "Traditional rulers are examples of:", options: ["Community leaders", "Students", "Farmers", "Traders"], correctAnswer: "A" },
        { type: "mcq", question: "One duty of community leaders is to:", options: ["Promote peace", "Cause conflicts", "Encourage crime", "Break laws"], correctAnswer: "A" },
        { type: "mcq", question: "Cooperation in the community promotes:", options: ["Development", "Violence", "Hatred", "Division"], correctAnswer: "A" },
        { type: "mcq", question: "Respect for one another helps to:", options: ["Sustain good relationships", "Create conflicts", "Encourage crime", "Promote hatred"], correctAnswer: "A" },

        { type: "fill", question: "__________ is the head of the family.", correctAnswer: "Father" },
        { type: "fill", question: "A family consisting of father, mother, and children is called a __________ family.", correctAnswer: "Nuclear" },
        { type: "fill", question: "The commandment \"Honour thy father and thy mother\" is found in the book of __________.", correctAnswer: "Exodus" },
        { type: "fill", question: "The mother is responsible for __________ the children.", correctAnswer: "Nurturing" },
        { type: "fill", question: "Christians are expected to show __________ toward one another.", correctAnswer: "Love" }
    ]
},
    {
    subject: "Cultural and Creative Arts",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 780,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Music is the art of organizing ______ into meaningful patterns.", options: ["Colours", "Sounds", "Pictures", "Letters"], correctAnswer: "B" },
        { type: "mcq", question: "The distance between two musical notes is called ______.", options: ["Pitch", "Tone", "Interval", "Harmony"], correctAnswer: "C" },
        { type: "mcq", question: "A staff consists of ______ lines and spaces.", options: ["4", "5", "6", "7"], correctAnswer: "B" },
        { type: "mcq", question: "The treble clef is also known as the ______ clef.", options: ["F", "Alto", "G", "Bass"], correctAnswer: "C" },
        { type: "mcq", question: "A semibreve receives ______ beats in common time.", options: ["1", "2", "3", "4"], correctAnswer: "D" },
        { type: "mcq", question: "The symbol placed at the beginning of the staff is called ______.", options: ["Rest", "Clef", "Bar line", "Note"], correctAnswer: "B" },
        { type: "mcq", question: "The time signature 4/4 means ______ beats per measure.", options: ["2", "3", "4", "5"], correctAnswer: "C" },
        { type: "mcq", question: "A minim receives ______ beats in common time.", options: ["1", "2", "3", "4"], correctAnswer: "B" },
        { type: "mcq", question: "Ear training helps musicians to identify ______.", options: ["Food", "Sounds", "Costumes", "Paintings"], correctAnswer: "B" },
        { type: "mcq", question: "Harmony occurs when ______ notes are sounded together.", options: ["No", "Different", "Similar", "Three"], correctAnswer: "B" },
        { type: "mcq", question: "Singing the correct pitch requires good ______.", options: ["Ear training", "Dancing", "Acting", "Drawing"], correctAnswer: "A" },
        { type: "mcq", question: "Harmony adds ______ to music.", options: ["Confusion", "Beauty", "Noise", "Silence"], correctAnswer: "B" },
        { type: "mcq", question: "A group of three notes played together is called a ______.", options: ["Scale", "Chord", "Staff", "Clef"], correctAnswer: "B" },
        { type: "mcq", question: "Sol-fa syllables include all except ______.", options: ["Do", "Re", "Fa", "Ta"], correctAnswer: "D" },
        { type: "mcq", question: "The highest voice part in choral music is ______.", options: ["Bass", "Tenor", "Alto", "Soprano"], correctAnswer: "D" },
        { type: "mcq", question: "The lowest male voice is ______.", options: ["Alto", "Soprano", "Bass", "Treble"], correctAnswer: "C" },
        { type: "mcq", question: "The basic principles of music are known as ______.", options: ["Rudiments", "Stories", "Dramas", "Drawings"], correctAnswer: "A" },
        { type: "mcq", question: "A musical instrument used for rhythm is the ______.", options: ["Drum", "Flute", "Violin", "Recorder"], correctAnswer: "A" },
        { type: "mcq", question: "Instruments are generally grouped into ______ families.", options: ["2", "3", "4", "5"], correctAnswer: "C" },
        { type: "mcq", question: "The piano belongs to the ______ family.", options: ["Keyboard", "Wind", "Brass", "Percussion"], correctAnswer: "A" },
        { type: "mcq", question: "The violin is a ______ instrument.", options: ["Wind", "String", "Brass", "Percussion"], correctAnswer: "B" },
        { type: "mcq", question: "Instruments played by blowing belong to the ______ family.", options: ["String", "Brass/Wind", "Keyboard", "Percussion"], correctAnswer: "B" },
        { type: "mcq", question: "Proper posture helps in ______ instruments correctly.", options: ["Damaging", "Playing", "Hiding", "Storing"], correctAnswer: "B" },
        { type: "mcq", question: "The drum is classified as a ______ instrument.", options: ["Wind", "Brass", "Percussion", "String"], correctAnswer: "C" },
        { type: "mcq", question: "The recorder belongs to the ______ family.", options: ["String", "Wind", "Keyboard", "Percussion"], correctAnswer: "B" },
        
        { type: "fill", question: "__________ is the art of organizing sounds.", correctAnswer: "Music" },
        { type: "fill", question: "The __________ clef is also known as the G clef.", correctAnswer: "Treble" },
        { type: "fill", question: "Ear training helps musicians identify different __________.", correctAnswer: "Sounds" },
        { type: "fill", question: "Two or more notes sounded together produce __________.", correctAnswer: "Harmony" },
        { type: "fill", question: "The basic principles of music are called __________.", correctAnswer: "Rudiments" },

    ]
},
    ],

    "JSS2": [
        { subject: "Mathematics",                                    link: "https://forms.gle/7URWF8ysHXk2aSNL6" },
        {
    subject: "Digital Literacy",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 800,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "A robot is a machine that can perform tasks by following ______.", options: ["guesses", "instructions", "dreams", "luck"], correctAnswer: "B" },
        { type: "mcq", question: "The part of a robot that detects objects and its surroundings is called a ______.", options: ["controller", "sensor", "battery", "speaker"], correctAnswer: "B" },
        { type: "mcq", question: "Sensors help a robot to ______.", options: ["cook food", "detect objects and obstacles", "draw pictures", "charge its battery"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these can a sensor detect?", options: ["Light", "Heat", "Sound", "All of the above"], correctAnswer: "D" },
        { type: "mcq", question: "The controller is known as the ______ of a robot.", options: ["heart", "brain", "eye", "hand"], correctAnswer: "B" },
        { type: "mcq", question: "The controller receives information from the ______.", options: ["keyboard", "monitor", "sensors", "printer"], correctAnswer: "C" },
        { type: "mcq", question: "After processing information, the controller ______.", options: ["switches off the robot", "sends instructions to other parts", "plays music", "connects to the internet"], correctAnswer: "B" },
        { type: "mcq", question: "Software is a set of ______ that tells a robot what to do.", options: ["wires", "instructions", "batteries", "screens"], correctAnswer: "B" },
        { type: "mcq", question: "Software helps a robot to ______.", options: ["perform specific tasks", "change colour", "grow bigger", "produce electricity"], correctAnswer: "A" },
        { type: "mcq", question: "A robot vacuum uses sensors mainly to ______.", options: ["play music", "avoid obstacles", "send emails", "browse the internet"], correctAnswer: "B" },
        { type: "mcq", question: "Artificial Intelligence (AI) is the ability of a machine to perform tasks that normally require ______.", options: ["electricity", "human intelligence", "television", "fuel"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an example of Artificial Intelligence?", options: ["Calculator", "ChatGPT", "Flash drive", "Projector"], correctAnswer: "B" },
        { type: "mcq", question: "Siri is an example of a ______.", options: ["computer virus", "voice assistant", "printer", "web browser"], correctAnswer: "B" },
        { type: "mcq", question: "AI designed to perform only one specific task is called ______.", options: ["General AI", "Narrow AI", "Machine Language", "Robotics"], correctAnswer: "B" },
        { type: "mcq", question: "General AI is ______.", options: ["used only in schools", "still being developed", "found only in robots", "the weakest type of AI"], correctAnswer: "B" },
        { type: "mcq", question: "AI helps students learn through ______.", options: ["educational apps", "television only", "radio only", "newspapers"], correctAnswer: "A" },
        { type: "mcq", question: "In healthcare, AI helps doctors to ______.", options: ["build hospitals", "diagnose diseases", "sell medicines", "drive ambulances"], correctAnswer: "B" },
        { type: "mcq", question: "Google Maps uses AI mainly for ______.", options: ["typing documents", "navigation", "editing videos", "printing"], correctAnswer: "B" },
        { type: "mcq", question: "Facial recognition is commonly used for ______.", options: ["entertainment", "security", "farming", "cooking"], correctAnswer: "B" },
        { type: "mcq", question: "One advantage of Artificial Intelligence is that it ______.", options: ["gets tired quickly", "works faster and more accurately", "cannot solve problems", "always needs sleep"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is an AI-powered voice assistant?", options: ["Microsoft Word", "Siri", "Paint", "Excel"], correctAnswer: "B" },
        { type: "mcq", question: "AI recommends movies and music in the field of ______.", options: ["banking", "entertainment", "agriculture", "construction"], correctAnswer: "B" },
        { type: "mcq", question: "The main work of a sensor is to ______.", options: ["process information", "detect information from the environment", "charge the robot", "store files"], correctAnswer: "B" },
        { type: "mcq", question: "The controller makes decisions after ______.", options: ["receiving and processing data", "charging the battery", "connecting to Wi-Fi", "playing sounds"], correctAnswer: "A" },
        { type: "mcq", question: "Which of these is NOT an application of AI?", options: ["Education", "Healthcare", "Communication", "Manual typewriting"], correctAnswer: "D" },

        { type: "fill", question: "The __________ is the brain of a robot.", correctAnswer: "controller" },
        { type: "fill", question: "Devices that help a robot detect its surroundings are called __________.", correctAnswer: "sensors" },
        { type: "fill", question: "AI stands for __________ Intelligence.", correctAnswer: "Artificial" },
        { type: "fill", question: "AI designed to perform one specific task is called __________ AI.", correctAnswer: "Narrow" },
        { type: "fill", question: "__________ is a popular AI chatbot that can answer questions and generate text.", correctAnswer: "ChatGPT" }
    ]
},
        {
  subject: "English Studies",
  openDate: "2026-07-14T08:20:00",
  timeLimit: 800,
  totalMarks: 60,
  marksPerQuestion: 2,
  questions: [
    {
      type: "mcq",
      question: "Neither the teacher nor the students _____ present.",
      options: ["was", "were", "is", "be"],
      correctAnswer: "B"
    },
    {
      type: "mcq",
      question: "The synonym of diligent is:",
      options: ["Lazy", "Hardworking", "Careless", "Weak"],
      correctAnswer: "B"
    },
    {
      type: "mcq",
      question: "Choose the correctly spelt word.",
      options: ["Necessary", "Necesary", "Neccessary", "Necessary"],
      correctAnswer: "A"
    },
    {
      type: "mcq",
      question: "Which of the following is a collective noun?",
      options: ["Team", "River", "Table", "House"],
      correctAnswer: "A"
    },
    {
      type: "mcq",
      question: "The opposite of expand is:",
      options: ["Stretch", "Increase", "Contract", "Extend"],
      correctAnswer: "C"
    },
    {
      type: "mcq",
      question: "Identify the figure of speech: The stars danced in the sky.",
      options: ["Simile", "Metaphor", "Personification", "Irony"],
      correctAnswer: "C"
    },
    {
      type: "mcq",
      question: "The past participle of choose is:",
      options: ["Chose", "Choosing", "Chosen", "Chooses"],
      correctAnswer: "C"
    },
    {
      type: "mcq",
      question: "Which sentence is correctly punctuated?",
      options: [
        "\"Where are you going\"? asked James.",
        "\"Where are you going?\" asked James.",
        "\"Where are you going\", asked James.",
        "Where are you going? asked James."
      ],
      correctAnswer: "B"
    },
    {
      type: "mcq",
      question: "Which of these words is an adverb?",
      options: ["Happiness", "Beautiful", "Carefully", "Strength"],
      correctAnswer: "C"
    },
    {
      type: "mcq",
      question: "Select the correct sentence.",
      options: [
        "The news are interesting.",
        "The news is interesting.",
        "The news were interesting.",
        "The news have been interesting."
      ],
      correctAnswer: "B"
    },
    {
      type: "mcq",
      question: "Which of the following is a simple sentence?",
      options: [
        "Although it rained, we played.",
        "We played and we sang.",
        "The boys played football.",
        "We played because it was sunny."
      ],
      correctAnswer: "C"
    },
    {
      type: "mcq",
      question: "The plural form of analysis is:",
      options: ["Analysises", "Analysis", "Analyses", "Analyses"],
      correctAnswer: "C"
    },
    {
      type: "mcq",
      question: "Identify the main clause: When the bell rang, the students entered the classroom.",
      options: [
        "When the bell rang",
        "The bell rang",
        "The students entered the classroom",
        "Entered the classroom"
      ],
      correctAnswer: "C"
    },
    {
      type: "mcq",
      question: "The word frugal means:",
      options: ["Wasteful", "Economical", "Rich", "Proud"],
      correctAnswer: "B"
    },
    {
      type: "mcq",
      question: "Which sentence contains a relative pronoun?",
      options: [
        "The man who called is my uncle.",
        "She arrived yesterday.",
        "They are singing.",
        "We shall travel tomorrow."
      ],
      correctAnswer: "A"
    },
    {
      type: "mcq",
      question: "The correct indirect speech form of: John said, \"I am hungry.\" is:",
      options: [
        "John said that he is hungry.",
        "John said that he was hungry.",
        "John says he was hungry.",
        "John said he hungry."
      ],
      correctAnswer: "B"
    },
    {
      type: "mcq",
      question: "Choose the correct preposition: The manager congratulated her _____ her success.",
      options: ["on", "in", "with", "for"],
      correctAnswer: "A"
    },
    {
      type: "mcq",
      question: "Which literary genre is written mainly for stage performance?",
      options: ["Poetry", "Prose", "Drama", "Biography"],
      correctAnswer: "C"
    },
    {
      type: "mcq",
      question: "The word optimistic means:",
      options: ["Hopeful", "Fearful", "Angry", "Doubtful"],
      correctAnswer: "A"
    },
    {
      type: "mcq",
      question: "Choose the sentence in the passive voice.",
      options: [
        "The mechanic repaired the car.",
        "The car was repaired by the mechanic.",
        "The mechanic is repairing the car.",
        "The mechanic repairs the car."
      ],
      correctAnswer: "B"
    },
    {
      type: "fill",
      question: "____________ is one valuable habit mentioned in the passage.",
      correctAnswer: "Reading"
    },
    {
      type: "fill",
      question: "____________ and ____________ are benefits of reading.",
      correctAnswer: "Improved vocabulary and knowledge"
    },
    {
      type: "fill",
      question: "Why do students who read regularly often perform better academically _________.",
      correctAnswer: "Because they understand concepts more easily and express themselves more effectively"
    },
    {
      type: "fill",
      question: "____________ and ______________skills improved by reading.",
      correctAnswer: "Concentration and critical thinking"
    },
    {
      type: "fill",
      question: "According to the passage,__________ is required to develop a reading culture?",
      correctAnswer: "Commitment and consistency"
    },
    {
      type: "fill",
      question: "Government provides infrastructures like __________ __________ and _________.",
      correctAnswer: "roads, hospitals and schools"
    },
    {
      type: "fill",
      question: "Synonyms of obstinate _____________.",
      correctAnswer: "stubborn"
    },
    {
      type: "fill",
      question: "Give words with sound /dz/ their medial positions ___________ __________ and ____________.",
      correctAnswer: "beds, heads, roads"
    },
    {
      type: "fill",
      question: "Give words with /ɔɪ/ sound ____________ ____________ and __________.",
      correctAnswer: "boy, toy, joy"
    },
    {
      type: "fill",
      question: "Give words with /aɪ/ sound ___________ ______________ and ____________.",
      correctAnswer: "time, kite, bike"
    }
  ]
},
        {
    subject: "Physical & Health Education",
    openDate: "2026-07-15T08:20:00",
    timeLimit: 600,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Volleyball is played by ______.", options: ["two teams of five players", "two teams of six players", "three teams of six players", "two teams of seven players"], correctAnswer: "B" },
        { type: "mcq", question: "The main aim of volleyball is to ______.", options: ["kick the ball into a goal", "hit the ball over the net into the opponent's court", "throw the ball into a basket", "carry the ball across the court"], correctAnswer: "B" },
        { type: "mcq", question: "Which volleyball skill is used to begin the game?", options: ["Blocking", "Serving", "Passing", "Spiking"], correctAnswer: "B" },
        { type: "mcq", question: "Which skill is used to prepare the ball for a teammate to attack?", options: ["Setting", "Serving", "Blocking", "Passing"], correctAnswer: "A" },
        { type: "mcq", question: "A forceful hit into the opponent's court is called ______.", options: ["Passing", "Serving", "Blocking", "Spiking"], correctAnswer: "D" },
        { type: "mcq", question: "A team is allowed a maximum of ______ touches before returning the ball.", options: ["2", "3", "4", "5"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is NOT allowed in volleyball?", options: ["Passing", "Serving", "Holding the ball", "Blocking"], correctAnswer: "C" },
        { type: "mcq", question: "A point is scored when ______.", options: ["the ball lands in the opponent's court", "a player catches the ball", "the referee blows the whistle", "the game starts"], correctAnswer: "A" },
        { type: "mcq", question: "Which of these is a safety measure in volleyball?", options: ["Playing barefoot", "Warming up before playing", "Ignoring the referee", "Rough play"], correctAnswer: "B" },
        { type: "mcq", question: "First aid is the ______ treatment given before professional medical help arrives.", options: ["final", "immediate", "permanent", "surgical"], correctAnswer: "B" },
        { type: "mcq", question: "The first step in treating a minor cut is to ______.", options: ["cover it immediately", "wash it with clean water", "apply powder", "leave it uncovered"], correctAnswer: "B" },
        { type: "mcq", question: "For a burn, the affected area should be cooled with ______.", options: ["hot water", "cooking oil", "clean, cool water", "butter"], correctAnswer: "C" },
        { type: "mcq", question: "During a nosebleed, the person should ______.", options: ["lie flat", "tilt the head backward", "sit upright and lean forward", "run around"], correctAnswer: "C" },
        { type: "mcq", question: "A sprain should be treated by ______.", options: ["massaging immediately", "applying a cold compress", "pouring hot water", "forcing movement"], correctAnswer: "B" },
        { type: "mcq", question: "If a person has a suspected fracture, you should ______.", options: ["move the injured part often", "support it with a splint or sling", "ask the person to run", "ignore the injury"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an item found in a first aid box?", options: ["Football", "Bandage", "Whistle", "Jersey"], correctAnswer: "B" },
        { type: "mcq", question: "One importance of first aid is that it ______.", options: ["causes more injuries", "prevents injuries from getting worse", "replaces hospital treatment", "stops all diseases"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is NOT an item in a first aid box?", options: ["Cotton wool", "Antiseptic", "Gloves", "Television"], correctAnswer: "D" },
        { type: "mcq", question: "A sports injury is ______.", options: ["an injury that occurs during sports or exercise", "an illness caused by food", "a type of medicine", "a sports competition"], correctAnswer: "A" },
        { type: "mcq", question: "Which of the following is a common sports injury?", options: ["Sprain", "Malaria", "Tooth decay", "Cough"], correctAnswer: "A" },
        { type: "mcq", question: "Which sports injury involves stretching or tearing of ligaments?", options: ["Fracture", "Burn", "Sprain", "Cut"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following can help prevent sports injuries?", options: ["Skipping warm-up", "Wearing proper sportswear", "Playing rough", "Ignoring safety rules"], correctAnswer: "B" },
        { type: "mcq", question: "Which sports injury involves a break in a bone?", options: ["Sprain", "Fracture", "Burn", "Bruise"], correctAnswer: "B" },
        { type: "mcq", question: "A bruise is usually caused by ______.", options: ["direct impact or a blow", "drinking cold water", "lack of sleep", "reading for too long"], correctAnswer: "A" },
        { type: "mcq", question: "The best way to reduce the risk of sports injuries is to ______.", options: ["ignore instructions", "warm up and follow safety rules", "play without shoes", "rush into the game"], correctAnswer: "B" },

        { type: "fill", question: "The volleyball skill used to stop an opponent's attack is called __________.", correctAnswer: "blocking" },
        { type: "fill", question: "The immediate treatment given before professional medical help arrives is called __________.", correctAnswer: "first aid" },
        { type: "fill", question: "A broken bone is called a __________.", correctAnswer: "fracture" },
        { type: "fill", question: "A __________ is used to support an injured arm during first aid.", correctAnswer: "sling" },
        { type: "fill", question: "Warming up before sports helps to prevent __________.", correctAnswer: "injuries" }
    ]
},
        {
    subject: "Literature in English",
    openDate: "2026-07-16T08:20:00",
    timeLimit: 780,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Literature is best defined as the artistic expression of ______.", options: ["calculations", "human thoughts, feelings, and experiences", "scientific experiments", "political activities"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is NOT a genre of literature?", options: ["Poetry", "Drama", "Prose", "Geography"], correctAnswer: "D" },
        { type: "mcq", question: "A long fictional prose narrative is called a ______.", options: ["poem", "novel", "play", "folktale"], correctAnswer: "B" },
        { type: "mcq", question: "The central message of a literary work is known as the ______.", options: ["setting", "theme", "climax", "conflict"], correctAnswer: "B" },
        { type: "mcq", question: "The struggle between opposing forces in a story is called ______.", options: ["conflict", "dialogue", "setting", "stanza"], correctAnswer: "A" },
        { type: "mcq", question: "The highest point of interest in a story is known as the ______.", options: ["exposition", "climax", "setting", "resolution"], correctAnswer: "B" },
        { type: "mcq", question: "A character who opposes the hero is called the ______.", options: ["protagonist", "narrator", "antagonist", "actor"], correctAnswer: "C" },
        { type: "mcq", question: "The main character in a story is the ______.", options: ["antagonist", "protagonist", "audience", "villain"], correctAnswer: "B" },
        { type: "mcq", question: "A poem that tells a story is called a ______ poem.", options: ["lyric", "narrative", "dramatic", "sonnet"], correctAnswer: "B" },
        { type: "mcq", question: "The repetition of similar ending sounds in poetry is called ______.", options: ["rhythm", "stanza", "rhyme", "imagery"], correctAnswer: "C" },
        { type: "mcq", question: "\"The classroom was a zoo\" is an example of ______.", options: ["simile", "metaphor", "irony", "hyperbole"], correctAnswer: "B" },
        { type: "mcq", question: "\"He runs like a cheetah\" is an example of ______.", options: ["metaphor", "simile", "personification", "alliteration"], correctAnswer: "B" },
        { type: "mcq", question: "Giving human qualities to non-living things is called ______.", options: ["irony", "imagery", "personification", "rhyme"], correctAnswer: "C" },
        { type: "mcq", question: "The writer of a novel is called a ______.", options: ["playwright", "novelist", "poet", "actor"], correctAnswer: "B" },
        { type: "mcq", question: "A tragedy is a play that ______.", options: ["ends happily", "contains songs only", "ends in sorrow or disaster", "is written in stanzas"], correctAnswer: "C" },
        { type: "mcq", question: "The instructions to actors in a play are known as ______.", options: ["stage directions", "dialogue", "conflict", "monologue"], correctAnswer: "A" },
        { type: "mcq", question: "A speech made by one character alone on stage is called a ______.", options: ["dialogue", "soliloquy", "stanza", "chorus"], correctAnswer: "B" },
        { type: "mcq", question: "A collection of related poems is called a ______.", options: ["chapter", "volume", "anthology", "scene"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is an example of oral literature?", options: ["Novel", "Newspaper", "Folktale", "Magazine"], correctAnswer: "C" },
        { type: "mcq", question: "The person who tells a story is called the ______.", options: ["narrator", "audience", "playwright", "actor"], correctAnswer: "A" },

        { type: "fill", question: "A __________ character does not change.", correctAnswer: "static" },
        { type: "fill", question: "A __________ is the thoughts, feelings or plans of a character heard aloud by the audience.", correctAnswer: "soliloquy" },
        { type: "fill", question: "A __________ character has few traits.", correctAnswer: "flat" },
        { type: "fill", question: "The __________ is the conclusion of a story.", correctAnswer: "resolution" },
        { type: "fill", question: "A literary work that criticizes society is called __________.", correctAnswer: "satire" },
        { type: "fill", question: "A __________ character is one who is not constant throughout the story.", correctAnswer: "dynamic" },
        { type: "fill", question: "A comment said aloud by a character but unheard by other characters, except the audience, is called an __________.", correctAnswer: "aside" },
        { type: "fill", question: "A __________ character is complex and fully develops as the story unfolds.", correctAnswer: "round" },
        { type: "fill", question: "A group of lines in a poem similar to paragraphs in prose is called a __________.", correctAnswer: "stanza" },
        { type: "fill", question: "The mistake or weakness of a protagonist that leads to his or her downfall is called a tragic __________.", correctAnswer: "flaw" }
    ]
},
        {
    subject: "Intermediate Science",
    openDate: "2026-07-15T08:20:00",
    timeLimit: 700,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Energy is defined as the ability to ______.", options: ["eat food", "sing songs", "do work", "sleep"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is a renewable source of energy?", options: ["Coal", "Solar energy", "Diesel", "Petrol"], correctAnswer: "B" },
        { type: "mcq", question: "Heat causes most substances to ______.", options: ["disappear", "contract permanently", "expand", "freeze instantly"], correctAnswer: "C" },
        { type: "mcq", question: "Reflection occurs when light ______.", options: ["bends", "bounces back", "melts", "disappears"], correctAnswer: "B" },
        { type: "mcq", question: "Refraction is the ______ of light.", options: ["absorption", "reflection", "bending", "scattering"], correctAnswer: "C" },
        { type: "mcq", question: "Materials that allow electricity to pass through them are called ______.", options: ["insulators", "conductors", "semiconductors", "resistors"], correctAnswer: "B" },
        { type: "mcq", question: "Plastic is commonly used as an electrical ______.", options: ["conductor", "magnet", "insulator", "battery"], correctAnswer: "C" },
        { type: "mcq", question: "Sound is produced by ______.", options: ["evaporation", "vibration", "condensation", "friction only"], correctAnswer: "B" },
        { type: "mcq", question: "Loudness and pitch are properties of ______.", options: ["heat", "light", "sound", "electricity"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following simple machines makes lifting loads easier?", options: ["Pulley", "Spoon", "Flask", "Thermometer"], correctAnswer: "A" },
        { type: "mcq", question: "A simple electrical circuit must contain a ______.", options: ["battery", "ruler", "nail only", "eraser"], correctAnswer: "A" },
        { type: "mcq", question: "Materials that do not allow light to pass through are called ______ objects.", options: ["transparent", "translucent", "opaque", "reflective"], correctAnswer: "C" },
        { type: "mcq", question: "Excessive noise in the environment causes ______ pollution.", options: ["air", "water", "sound", "land"], correctAnswer: "C" },
        { type: "mcq", question: "A thermometer is used for measuring ______.", options: ["rainfall", "pressure", "temperature", "wind speed"], correctAnswer: "C" },
        { type: "mcq", question: "The inclined plane is a machine that makes work ______.", options: ["harder", "easier", "slower", "dangerous"], correctAnswer: "B" },
        { type: "mcq", question: "Iron is regarded as a ______ material.", options: ["non-metallic", "magnetic", "transparent", "wooden"], correctAnswer: "B" },
        { type: "mcq", question: "One major advantage of vocational skills is that they promote ______.", options: ["dependency", "self-reliance", "laziness", "unemployment"], correctAnswer: "B" },
        { type: "mcq", question: "Technology has both positive and ______ effects.", options: ["dangerous", "educational", "negative", "useful"], correctAnswer: "C" },
        { type: "mcq", question: "Transparent objects allow light to pass through them ______.", options: ["partially", "completely", "slightly", "indirectly"], correctAnswer: "B" },
        { type: "mcq", question: "School-based projects help students to develop ______ skills.", options: ["practical", "destructive", "artistic only", "theoretical only"], correctAnswer: "A" },

        { type: "fill", question: "Coal and petroleum are ______ sources of energy.", correctAnswer: "Non-renewable" },
        { type: "fill", question: "The bouncing back of light is called ______.", correctAnswer: "Reflection" },
        { type: "fill", question: "The bending of light is known as ______.", correctAnswer: "Refraction" },
        { type: "fill", question: "Unwanted loud sound is called ______.", correctAnswer: "Noise" },
        { type: "fill", question: "Electricity flows through a complete ______.", correctAnswer: "Circuit" },
        { type: "fill", question: "Materials that attract iron are called ______ materials.", correctAnswer: "Magnetic" },
        { type: "fill", question: "A pulley is an example of a simple ______.", correctAnswer: "Machine" },
        { type: "fill", question: "Solar energy comes from the ______.", correctAnswer: "Sun" },
        { type: "fill", question: "Materials that do not conduct electricity are called ______.", correctAnswer: "Insulators" },
        { type: "fill", question: "Science and technology contribute to national ______.", correctAnswer: "Development" }
    ]
},
        {
    subject: "History",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 850,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Nigeria gained independence on ______.", options: ["October 1, 1950", "October 1, 1960", "October 1, 1963", "October 1, 1970"], correctAnswer: "B" },
        { type: "mcq", question: "The first Prime Minister of Nigeria was ______.", options: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Abubakar Tafawa Balewa", "Yakubu Gowon"], correctAnswer: "C" },
        { type: "mcq", question: "The first President of Nigeria was ______.", options: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Shehu Shagari", "Olusegun Obasanjo"], correctAnswer: "A" },
        { type: "mcq", question: "Nigeria became a republic in ______.", options: ["1957", "1960", "1963", "1966"], correctAnswer: "C" },
        { type: "mcq", question: "The amalgamation of the Northern and Southern Protectorates took place in ______.", options: ["1900", "1914", "1922", "1960"], correctAnswer: "B" },
        { type: "mcq", question: "The Governor-General responsible for the amalgamation was ______.", options: ["Hugh Clifford", "Frederick Lugard", "James Robertson", "Arthur Richards"], correctAnswer: "B" },
        { type: "mcq", question: "The Nigerian Civil War started in ______.", options: ["1960", "1963", "1967", "1970"], correctAnswer: "C" },
        { type: "mcq", question: "The Nigerian Civil War ended in ______.", options: ["1968", "1969", "1970", "1971"], correctAnswer: "C" },
        { type: "mcq", question: "The slogan used at the end of the Civil War was ______.", options: ["Peace and Unity", "No Victor, No Vanquished", "One Nation Forever", "United We Stand"], correctAnswer: "B" },
        { type: "mcq", question: "The first military Head of State in Nigeria was ______.", options: ["Yakubu Gowon", "Johnson Aguiyi-Ironsi", "Murtala Mohammed", "Olusegun Obasanjo"], correctAnswer: "B" },
        { type: "mcq", question: "The capital of Nigeria was moved from Lagos to Abuja in ______.", options: ["1980", "1985", "1991", "1999"], correctAnswer: "C" },
        { type: "mcq", question: "Nigeria is located on the continent of ______.", options: ["Europe", "Asia", "Africa", "America"], correctAnswer: "C" },
        { type: "mcq", question: "The national anthem promotes ______.", options: ["Division", "Patriotism", "Conflict", "Tribalism"], correctAnswer: "B" },
        { type: "mcq", question: "The highest law in Nigeria is the ______.", options: ["Constitution", "Bible", "Gazette", "Decree"], correctAnswer: "A" },
        { type: "mcq", question: "Democracy is a government of the people, by the people and for the ______.", options: ["Soldiers", "Chiefs", "People", "Politicians"], correctAnswer: "C" },
        { type: "mcq", question: "The legislative arm of government makes ______.", options: ["Laws", "Roads", "Policies", "Teaching"], correctAnswer: "A" },
        { type: "mcq", question: "The executive arm of government is responsible for ______.", options: ["Interpreting laws", "Implementing laws", "Making laws", "Teaching laws"], correctAnswer: "B" },
        { type: "mcq", question: "The judiciary is responsible for ______.", options: ["Interpreting laws", "Implementing laws", "Making laws", "Electing leaders"], correctAnswer: "A" },
        { type: "mcq", question: "The National Assembly consists of the Senate and the ______.", options: ["House of Chiefs", "House of Representatives", "Supreme Court", "Federal Council"], correctAnswer: "B" },
        { type: "mcq", question: "Nigeria currently operates a ______ system of government.", options: ["Monarchy", "Parliamentary", "Federal", "Military"], correctAnswer: "C" },
        { type: "mcq", question: "One major reason for the amalgamation of Nigeria was ______.", options: ["Religion", "Convenience", "Sports development", "Tourism"], correctAnswer: "B" },
        { type: "mcq", question: "Citizenship can be acquired by ______.", options: ["Birth", "Registration", "Naturalization", "All of the above"], correctAnswer: "D" },
        { type: "mcq", question: "A good citizen should ______.", options: ["Obey laws", "Destroy public property", "Avoid paying taxes", "Encourage violence"], correctAnswer: "A" },
        { type: "mcq", question: "The green-white-green flag is the national flag of ______.", options: ["Ghana", "Niger", "Nigeria", "Kenya"], correctAnswer: "C" },
        { type: "mcq", question: "One importance of History is that it helps people to ______.", options: ["Understand past events", "Ignore their education", "Forget national heroes", "Avoid culture"], correctAnswer: "A" },

        { type: "fill", question: "The Nigerian flag was designed by __________________.", correctAnswer: "Michael Taiwo Akinkunmi" },
        { type: "fill", question: "The green colour on the Nigerian flag represents __________________.", correctAnswer: "Agriculture" },
        { type: "fill", question: "The white colour on the Nigerian flag represents __________________.", correctAnswer: "Peace" },
        { type: "fill", question: "The smallest unit of society is the __________________.", correctAnswer: "Family" },
        { type: "fill", question: "A family made up of parents and their children is called a __________________ family.", correctAnswer: "Nuclear" }
    ]
},
        {
    subject: "Social and Citizenship Studies",
    openDate: "2026-07-16T08:20:00",
    timeLimit: 700,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "The careful use of money and resources is called ______.", options: ["Investment", "Saving", "Thrift", "Spending"], correctAnswer: "C" },
        { type: "mcq", question: "Keeping money for future use is known as ______.", options: ["Saving", "Trading", "Borrowing", "Spending"], correctAnswer: "A" },
        { type: "mcq", question: "A person who starts and manages a business is called a ______.", options: ["Teacher", "Entrepreneur", "Farmer", "Banker"], correctAnswer: "B" },
        { type: "mcq", question: "Money paid by citizens to the government is called ______.", options: ["Salary", "Profit", "Tax", "Loan"], correctAnswer: "C" },
        { type: "mcq", question: "Paying taxes is a ______.", options: ["Civic duty", "Crime", "Right", "Privilege"], correctAnswer: "A" },
        { type: "mcq", question: "Keeping the environment clean is known as ______.", options: ["Pollution", "Sanitation", "Recreation", "Agriculture"], correctAnswer: "B" },
        { type: "mcq", question: "The process of collecting and disposing waste properly is called ______.", options: ["Waste management", "Recycling", "Sanitation", "Pollution"], correctAnswer: "A" },
        { type: "mcq", question: "The government agency that protects human rights in Nigeria is ______.", options: ["WAEC", "NHRC", "NNPC", "CBN"], correctAnswer: "B" },
        { type: "mcq", question: "The Legal Aid Council provides ______ services.", options: ["Medical", "Agricultural", "Free legal", "Banking"], correctAnswer: "C" },
        { type: "mcq", question: "NGOs means ______.", options: ["Nigerian Government Office", "National Group of Officers", "Non-Governmental Organisations", "Nigerian Government Organisation"], correctAnswer: "C" },
        { type: "mcq", question: "The misuse of public office for personal gain is called ______.", options: ["Transparency", "Accountability", "Corruption", "Development"], correctAnswer: "C" },
        { type: "mcq", question: "Reporting corruption to the authorities is known as ______.", options: ["Voting", "Whistleblowing", "Taxation", "Campaigning"], correctAnswer: "B" },
        { type: "mcq", question: "The anti-corruption agency that fights financial crimes is ______.", options: ["ICPC", "NHRC", "EFCC", "FRSC"], correctAnswer: "C" },
        { type: "mcq", question: "The overall growth and progress of a country is called ______.", options: ["National development", "Industrialization", "Urbanization", "Civilization"], correctAnswer: "A" },
        { type: "mcq", question: "Which of these is an indicator of national development?", options: ["Illiteracy", "Poor roads", "Good healthcare", "Corruption"], correctAnswer: "C" },
        { type: "mcq", question: "The first social institution a child belongs to is the ______.", options: ["School", "Family", "Church", "Government"], correctAnswer: "B" },
        { type: "mcq", question: "Education helps to reduce ______.", options: ["Honesty", "Literacy", "Illiteracy", "Patriotism"], correctAnswer: "C" },
        { type: "mcq", question: "The inability to read and write is called ______.", options: ["Poverty", "Illiteracy", "Unemployment", "Corruption"], correctAnswer: "B" },
        { type: "mcq", question: "The condition of not having a job is called ______.", options: ["Poverty", "Illiteracy", "Unemployment", "Development"], correctAnswer: "C" },
        { type: "mcq", question: "Which of these is a cause of poverty?", options: ["Employment", "Education", "Corruption", "Investment"], correctAnswer: "C" },

        { type: "fill", question: "The careful use of money and resources is called __________.", correctAnswer: "Thrift" },
        { type: "fill", question: "Money kept for future use is called __________.", correctAnswer: "Saving" },
        { type: "fill", question: "The act of starting and managing a business is called __________.", correctAnswer: "Entrepreneurship" },
        { type: "fill", question: "Money paid to the government by citizens is called __________.", correctAnswer: "Tax" },
        { type: "fill", question: "Keeping the environment clean is known as __________.", correctAnswer: "Sanitation" },
        { type: "fill", question: "The National Human Rights Commission is abbreviated as __________.", correctAnswer: "NHRC" },
        { type: "fill", question: "The act of reporting corruption is called __________.", correctAnswer: "Whistleblowing" },
        { type: "fill", question: "The anti-corruption agency that fights financial crimes is __________.", correctAnswer: "EFCC" },
        { type: "fill", question: "The inability to read and write is called __________.", correctAnswer: "Illiteracy" },
        { type: "fill", question: "The condition in which people cannot find jobs is called __________.", correctAnswer: "Unemployment" }
    ]
},
        {
    subject: "Christian Religious Studies",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 700,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Jesus entered Jerusalem riding on a ______.", options: ["Horse", "Camel", "Donkey", "Chariot"], correctAnswer: "C" },
        { type: "mcq", question: "The people spread ______ on the road during Jesus' triumphal entry.", options: ["Flowers", "Palm branches", "Garments only", "Leaves"], correctAnswer: "B" },
        { type: "mcq", question: "The crowd shouted ______ as Jesus entered Jerusalem.", options: ["Hallelujah", "Hosanna", "Amen", "Glory"], correctAnswer: "B" },
        { type: "mcq", question: "The Last Supper was celebrated during the ______ feast.", options: ["Pentecost", "Passover", "Tabernacles", "First Fruits"], correctAnswer: "C" },
        { type: "mcq", question: "When Jesus broke the bread, He said, \"This is my ______.\"", options: ["Blood", "Body", "Spirit", "Life"], correctAnswer: "A" },
        { type: "mcq", question: "Jesus described the cup as the ______.", options: ["Blood of Abraham", "New covenant", "Cup of blessing", "Kingdom of God"], correctAnswer: "B" },
        { type: "mcq", question: "Who betrayed Jesus?", options: ["Peter", "John", "Judas Iscariot", "Thomas"], correctAnswer: "C" },
        { type: "mcq", question: "Judas betrayed Jesus for ______.", options: ["Twenty pieces of silver", "Thirty pieces of silver", "Forty pieces of silver", "Fifty pieces of silver"], correctAnswer: "B" },
        { type: "mcq", question: "Jesus prayed before His arrest in the Garden of ______.", options: ["Eden", "Gethsemane", "Jericho", "Bethany"], correctAnswer: "C" },
        { type: "mcq", question: "Judas identified Jesus by giving Him a ______.", options: ["Handshake", "Kiss", "Hug", "Wave"], correctAnswer: "C" },
        { type: "mcq", question: "The servant whose ear was cut off was ______.", options: ["Caiaphas", "Malchus", "Pilate", "Cornelius"], correctAnswer: "B" },
        { type: "mcq", question: "Jesus was tried before ______.", options: ["King Herod", "Pontius Pilate", "Caesar", "Annas"], correctAnswer: "C" },
        { type: "mcq", question: "The crowd asked for the release of ______.", options: ["Peter", "Stephen", "Barabbas", "John"], correctAnswer: "B" },
        { type: "mcq", question: "Jesus was crucified at ______.", options: ["Bethlehem", "Jerusalem Temple", "Golgotha", "Nazareth"], correctAnswer: "C" },
        { type: "mcq", question: "The meaning of Golgotha is ______.", options: ["Holy Hill", "Place of a Skull", "City of David", "House of Bread"], correctAnswer: "B" },
        { type: "mcq", question: "Jesus was crucified between ______.", options: ["Two soldiers", "Two disciples", "Two thieves", "Two priests"], correctAnswer: "C" },
        { type: "mcq", question: "The inscription on Jesus' cross read ______.", options: ["King of Israel", "Jesus Christ the Lord", "Jesus of Nazareth, King of the Jews", "The Son of God"], correctAnswer: "C" },
        { type: "mcq", question: "\"It is finished\" were among Jesus' ______.", options: ["First words", "Teachings", "Last words", "Parables"], correctAnswer: "B" },
        { type: "mcq", question: "Darkness covered the land for ______ during the crucifixion.", options: ["One hour", "Two hours", "Three hours", "Six hours"], correctAnswer: "C" },
        { type: "mcq", question: "The temple curtain was torn ______.", options: ["From bottom to top", "Into three parts", "From top to bottom", "By the priests"], correctAnswer: "D" },
        { type: "mcq", question: "The centurion declared, \"Truly this was the ______.\"", options: ["King of Israel", "Son of God", "Messiah", "Prophet"], correctAnswer: "B" },
        { type: "mcq", question: "Jesus' body was buried by ______.", options: ["Nicodemus", "Joseph of Arimathea", "Peter", "John"], correctAnswer: "B" },
        { type: "mcq", question: "A large ______ was rolled across the entrance of the tomb.", options: ["Door", "Tree", "Stone", "Gate"], correctAnswer: "C" },
        { type: "mcq", question: "Jesus rose from the dead on the ______.", options: ["First day of the week", "Second day", "Third day after Sabbath", "Seventh day"], correctAnswer: "A" },
        { type: "mcq", question: "Who was the first to see the risen Jesus?", options: ["Mary the mother of Jesus", "Mary Magdalene", "Martha", "Salome"], correctAnswer: "B" },

        { type: "fill", question: "__________ entered Jerusalem riding on a donkey.", correctAnswer: "Jesus" },
        { type: "fill", question: "The crowd shouted __________ during the triumphal entry.", correctAnswer: "Hosanna" },
        { type: "fill", question: "The Last Supper took place during the __________ feast.", correctAnswer: "Passover" },
        { type: "fill", question: "Women played important roles by supporting the __________ of Jesus.", correctAnswer: "ministry" },
        { type: "fill", question: "The resurrection of Jesus gives believers hope of __________ life.", correctAnswer: "eternal" }
    ]
},
        {
    subject: "Cultural and Creative Arts",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 750,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "The act of producing musical sounds with the voice is called ______.", options: ["Acting", "Singing", "Dancing", "Drawing"], correctAnswer: "B" },
        { type: "mcq", question: "Proper breathing is important for good ______.", options: ["Drawing", "Singing", "Painting", "Acting"], correctAnswer: "B" },
        { type: "mcq", question: "The design of scenery and stage setting is called ______ design.", options: ["Costume", "Graphic", "Scenic", "Interior"], correctAnswer: "B" },
        { type: "mcq", question: "The person who designs costumes for actors is a ______ designer.", options: ["Stage", "Costume", "Graphic", "Fashion"], correctAnswer: "B" },
        { type: "mcq", question: "The process of practising a performance before presentation is called ______.", options: ["Rehearsal", "Presentation", "Audition", "Training"], correctAnswer: "A" },
        { type: "mcq", question: "The person in charge of rehearsals is the ______.", options: ["Actor", "Director", "Producer", "Audience"], correctAnswer: "B" },
        { type: "mcq", question: "A rehearsal conducted with full costumes is called a ______ rehearsal.", options: ["Dress", "Final", "Costume", "Stage"], correctAnswer: "A" },
        { type: "mcq", question: "Dance is the movement of the body in response to ______.", options: ["Exercise", "Music", "Games", "Stories"], correctAnswer: "B" },
        { type: "mcq", question: "Bata is an example of a ______ dance.", options: ["Modern", "Traditional", "Contemporary", "Ballet"], correctAnswer: "C" },
        { type: "mcq", question: "Ballet is a type of ______ dance.", options: ["Traditional", "Contemporary", "Classical", "Folk"], correctAnswer: "B" },
        { type: "mcq", question: "A person who arranges dance movements is called a ______.", options: ["Dancer", "Choreographer", "Director", "Singer"], correctAnswer: "B" },
        { type: "mcq", question: "Dance can be pursued as a ______.", options: ["Career", "Punishment", "Game", "Holiday"], correctAnswer: "A" },
        { type: "mcq", question: "Basketball is an example of a ______.", options: ["Sport", "Dance", "Song", "Drama"], correctAnswer: "A" },
        { type: "mcq", question: "One benefit of dancing is ______.", options: ["Illness", "Exercise", "Weakness", "Laziness"], correctAnswer: "B" },
        { type: "mcq", question: "The stage area where actors perform is called the ______.", options: ["Audience", "Stage", "Gallery", "Hall"], correctAnswer: "B" },
        { type: "mcq", question: "Music is made up of rhythm, melody and ______.", options: ["Harmony", "Football", "Reading", "Drawing"], correctAnswer: "A" },
        { type: "mcq", question: "Which of the following is a sport?", options: ["Basketball", "Tennis", "Football", "All of the above"], correctAnswer: "D" },
        { type: "mcq", question: "Ballet dance originated from ______.", options: ["Europe", "Africa", "Asia", "America"], correctAnswer: "A" },
        { type: "mcq", question: "Contemporary dance combines different dance ______.", options: ["Foods", "Styles", "Colours", "Games"], correctAnswer: "B" },
        { type: "mcq", question: "Cultural dances help preserve a people's ______.", options: ["Heritage", "Money", "Market", "Farm"], correctAnswer: "A" },
        { type: "mcq", question: "A professional dancer earns a living through ______.", options: ["Dancing", "Farming", "Fishing", "Trading"], correctAnswer: "A" },
        { type: "mcq", question: "A dance instructor teaches people how to ______.", options: ["Read", "Dance", "Cook", "Paint"], correctAnswer: "B" },
        { type: "mcq", question: "One requirement for a successful dance career is ______.", options: ["Laziness", "Discipline", "Anger", "Carelessness"], correctAnswer: "B" },
        { type: "mcq", question: "Dance can create employment opportunities in the ______ industry.", options: ["Entertainment", "Mining", "Construction", "Agriculture"], correctAnswer: "A" },
        { type: "mcq", question: "A choreographer is a person who ______ dance movements.", options: ["Designs", "Eats", "Buys", "Sells"], correctAnswer: "A" },
        
        { type: "fill", question: "__________ is the act of producing musical sounds with the voice.", correctAnswer: "Singing" },
        { type: "fill", question: "A person who sings is called a __________.", correctAnswer: "Singer" },
        { type: "fill", question: "Proper __________ is necessary for good singing.", correctAnswer: "Breathing" },
        { type: "fill", question: "The design of scenery and stage setting is called __________ design.", correctAnswer: "Scenic" },
        { type: "fill", question: "The person who designs costumes for actors is a __________ designer.", correctAnswer: "Costume" },
    ]
},

    ],

    "SS1": [
        {
    subject: "Mathematics",
    timeLimit: 1500,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "The length of an arc subtending an angle of 120° at the centre of a circle of radius 21 cm is:", options: ["22 cm", "44 cm", "14 cm", "28 cm"], correctAnswer: "B" },
        { type: "mcq", question: "A sector of a circle has radius 14 cm and angle 90°. Its area is:", options: ["49 cm²", "98 cm²", "154 cm²", "616 cm²"], correctAnswer: "C" },
        { type: "mcq", question: "A closed cylindrical tank has a radius of 7 cm and a height of 20 cm. The total surface area of the tank is:", options: ["924 cm²", "1,188 cm²", "1,188 cm²", "1,540 cm²"], correctAnswer: "B" },
        { type: "mcq", question: "A cone is formed by rolling a sector of radius 12 cm and angle 150°. The curved surface area of the cone is:", options: ["60π cm²", "72π cm²", "90π cm²", "108π cm²"], correctAnswer: "A" },
        { type: "mcq", question: "The total surface area of a cube of edge 8 cm is:", options: ["256 cm²", "384 cm²", "512 cm²", "768 cm²"], correctAnswer: "B" },
        { type: "mcq", question: "A cuboid measures 10 cm by 8 cm by 6 cm. Its total surface area is:", options: ["256 cm²", "376 cm²", "496 cm²", "960 cm²"], correctAnswer: "B" },
        { type: "mcq", question: "The curved surface area of a cylinder of radius 5 cm and height 12 cm is:", options: ["60π cm²", "120π cm²", "170π cm²", "240π cm²"], correctAnswer: "B" },
        { type: "mcq", question: "A cone has radius 7 cm and slant height 25 cm. Its curved surface area is:", options: ["175π cm²", "350π cm²", "490π cm²", "875π cm²"], correctAnswer: "A" },
        { type: "mcq", question: "A triangular prism has a triangular cross-section of area 24 cm² and length 15 cm. Its volume is:", options: ["39 cm³", "180 cm³", "360 cm³", "720 cm³"], correctAnswer: "C" },
        { type: "mcq", question: "The volume of a cylinder of radius 7 cm and height 10 cm is:", options: ["220 cm³", "490π cm³", "700π cm³", "980π cm³"], correctAnswer: "B" },
        { type: "mcq", question: "A pyramid has a square base of side 12 cm and height 9 cm. Its volume is:", options: ["216 cm³", "324 cm³", "432 cm³", "1296 cm³"], correctAnswer: "C" },
        { type: "mcq", question: "The volume of a cone with radius 6 cm and height 14 cm is:", options: ["168π cm³", "252π cm³", "504π cm³", "1008π cm³"], correctAnswer: "A" },
        { type: "mcq", question: "A frustum of a cone has radii 10 cm and 6 cm, and height 8 cm. The volume is:", options: ["(992π/3) cm³", "496π cm³", "992π cm³", "1488π cm³"], correctAnswer: "A" },
        { type: "mcq", question: "The mean of the numbers 4, 8, 10, 12 and 16 is:", options: ["8", "9", "10", "12"], correctAnswer: "C" },
        { type: "mcq", question: "The modal value of the data set 2, 5, 3, 5, 6, 5, 7, 8, 5 is:", options: ["2", "5", "6", "7"], correctAnswer: "B" },
        { type: "mcq", question: "The median of 7, 3, 11, 15, 5, 9, 13 is:", options: ["7", "8", "9", "11"], correctAnswer: "C" },
        { type: "mcq", question: "In a class of 80 students, 20 study French. The angle representing French in a pie chart is:", options: ["45°", "60°", "90°", "120°"], correctAnswer: "C" },
        { type: "mcq", question: "If the frequencies of values 1, 2, 3, and 4 are 2, 5, 7, and 6 respectively, the total frequency is:", options: ["18", "19", "20", "21"], correctAnswer: "C" },
        { type: "mcq", question: "The graph best suited for displaying continuous grouped data is:", options: ["Pie chart", "Histogram", "Bar chart", "Pictogram"], correctAnswer: "B" },
        { type: "mcq", question: "The angle of a sector whose area is one-fifth of the area of the circle is:", options: ["36°", "60°", "72°", "90°"], correctAnswer: "C" },

        { type: "fill", question: "The length of an arc of a circle is given by __________.", correctAnswer: "(θ/360) × 2πr" },
        { type: "fill", question: "The area of a sector of a circle is __________.", correctAnswer: "(θ/360) × πr²" },
        { type: "fill", question: "The total surface area of a cube of edge length a is __________.", correctAnswer: "6a²" },
        { type: "fill", question: "The volume of a cuboid is equal to __________ × __________ × __________.", correctAnswer: "length × breadth × height" },
        { type: "fill", question: "The curved surface area of a cylinder is __________.", correctAnswer: "2πrh" },
        { type: "fill", question: "The volume of a cylinder is given by the formula __________.", correctAnswer: "πr²h" },
        { type: "fill", question: "The volume of a cone is __________.", correctAnswer: "(1/3)πr²h" },
        { type: "fill", question: "The volume of a pyramid is __________ of the product of its base area and height.", correctAnswer: "one-third" },
        { type: "fill", question: "The average obtained by dividing the sum of observations by the number of observations is called the __________.", correctAnswer: "mean" },
        { type: "fill", question: "The graph used to represent continuous grouped data is called a __________.", correctAnswer: "histogram" }
    ]
},
        {
    subject: "Literature in English",
    openDate: "2026-07-15T08:20:00",
    timeLimit: 780,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Which of the following is NOT an element of plot?", options: ["Exposition", "Climax", "Diction", "Resolution"], correctAnswer: "C" },
        { type: "mcq", question: "A character that undergoes significant change in the course of a story is known as a ______.", options: ["Flat character", "Dynamic character", "Static character", "Stock character"], correctAnswer: "B" },
        { type: "mcq", question: "The use of a part to represent a whole is called ______.", options: ["Metonymy", "Synecdoche", "Euphemism", "Oxymoron"], correctAnswer: "B" },
        { type: "mcq", question: "In literature, verisimilitude refers to ______.", options: ["Exaggeration", "Realism or lifelikeness", "Humour", "Suspense"], correctAnswer: "B" },
        { type: "mcq", question: "A literary work that ridicules human weaknesses with the aim of correcting them is ______.", options: ["Elegy", "Satire", "Epic", "Ode"], correctAnswer: "B" },
        { type: "mcq", question: "Which literary device is present in the expression, \"The wind whispered through the trees\"?", options: ["Hyperbole", "Irony", "Personification", "Pun"], correctAnswer: "C" },
        { type: "mcq", question: "The narrator who knows the thoughts and feelings of all characters is ______.", options: ["First-person narrator", "Objective narrator", "Omniscient narrator", "Limited narrator"], correctAnswer: "C" },
        { type: "mcq", question: "The opposite of climax in plot structure is ______.", options: ["Denouement", "Rising action", "Exposition", "Conflict"], correctAnswer: "A" },
        { type: "mcq", question: "A tragic hero is usually brought down by ______.", options: ["Bad luck alone", "A fatal flaw", "Society only", "Poverty"], correctAnswer: "B" },
        { type: "mcq", question: "The atmosphere of a literary work is mainly created through ______.", options: ["Mood and setting", "Publisher and editor", "Paragraphing", "Chapter titles"], correctAnswer: "A" },
        { type: "mcq", question: "Which of the following is an example of dramatic irony?", options: ["A character says the opposite of what he means", "Readers know what a character does not know", "A character exaggerates a situation", "A writer mocks society"], correctAnswer: "B" },
        { type: "mcq", question: "An epic is usually characterized by ______.", options: ["Short length and humour", "Heroic deeds and grand scale", "Sad songs", "Animal characters"], correctAnswer: "B" },
        { type: "mcq", question: "The repetition of vowel sounds within nearby words is ______.", options: ["Assonance", "Alliteration", "Consonance", "Rhyme"], correctAnswer: "A" },
        { type: "mcq", question: "\"The pen is mightier than the sword\" contains ______.", options: ["Metaphor", "Metonymy", "Irony", "Simile"], correctAnswer: "B" },
        { type: "mcq", question: "The character against whom the protagonist struggles is the ______.", options: ["Narrator", "Foil", "Antagonist", "Dynamic character"], correctAnswer: "C" },
        { type: "mcq", question: "A poem mourning the death of a person is called ______.", options: ["Ode", "Sonnet", "Ballad", "Elegy"], correctAnswer: "D" },
        { type: "mcq", question: "Which of the following best defines a foil character?", options: ["A character who narrates the story", "A character who contrasts with another character", "A character who never changes", "A character who appears once"], correctAnswer: "B" },
        { type: "mcq", question: "A work written in dialogue and meant for performance is ______.", options: ["Novel", "Essay", "Drama", "Biography"], correctAnswer: "C" },
        { type: "mcq", question: "The main idea explored throughout a literary work is its ______.", options: ["Tone", "Theme", "Style", "Plot"], correctAnswer: "B" },
        { type: "mcq", question: "In poetry, a stanza is equivalent to a ______.", options: ["Chapter in a novel", "Scene in a play", "Paragraph in prose", "Plot in a story"], correctAnswer: "C" },

        { type: "fill", question: "\"Does my sexiness upset you?\" is taken from the poem __________________.", correctAnswer: "Still I Rise" },
        { type: "fill", question: "\"One shade the more, one ray the less\" is taken from the poem __________________.", correctAnswer: "She Walks in Beauty" },
        { type: "fill", question: "\"After our blood century, the sea will groan\" is taken from the poem __________________.", correctAnswer: "The Grieved Lands" },
        { type: "fill", question: "\"Good bye\" when I mean \"Good riddance\" is taken from the poem __________________.", correctAnswer: "Raider of the Treasure Trove" },
        { type: "fill", question: "\"I feel the top of my head has floated off, out through the window, revolving like a flying saucer\" is taken from the poem __________________.", correctAnswer: "Bat" },
        { type: "fill", question: "\"So long they don't take the yam from my savouring mouth\" is taken from the poem __________________.", correctAnswer: "The Leader and the Led" },
        { type: "fill", question: "\"Minds battered into new modes and shapes\" is taken from the poem __________________.", correctAnswer: "The Grieved Lands" },
        { type: "fill", question: "\"Your hand is heavy upon my brow\" is taken from the poem __________________.", correctAnswer: "Abiku" },
        { type: "fill", question: "\"It is the gainful twilight of fulfilled dreams\" is taken from the poem __________________.", correctAnswer: "Raider of the Treasure Trove" },
        { type: "fill", question: "\"By God, the old man could handle a spade just like his old man\" is taken from the poem __________________.", correctAnswer: "Digging" }
    ]
},
        {
    subject: "Biology",
    timeLimit: 1500,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "The branch of Biology that deals with the study of living organisms and their environment is known as ______.", options: ["Anatomy", "Ecology", "Physiology", "Genetics"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is NOT a characteristic of living things?", options: ["Respiration", "Growth", "Photosynthesis", "Excretion"], correctAnswer: "C" },
        { type: "mcq", question: "The smallest unit of life is the ______.", options: ["Organ", "Cell", "Tissue", "Organism"], correctAnswer: "B" },
        { type: "mcq", question: "Animals that feed on plants are called ______.", options: ["Carnivores", "Omnivores", "Herbivores", "Scavengers"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is an example of a vertebrate?", options: ["Earthworm", "Cockroach", "Fish", "Snail"], correctAnswer: "C" },
        { type: "mcq", question: "The process by which green plants manufacture their food is called ______.", options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a producer in a food chain?", options: ["Goat", "Lion", "Grass", "Fungi"], correctAnswer: "C" },
        { type: "mcq", question: "The movement of water through a semi-permeable membrane is called ______.", options: ["Diffusion", "Respiration", "Osmosis", "Excretion"], correctAnswer: "C" },
        { type: "mcq", question: "An organism that obtains food from dead organic matter is known as a ______.", options: ["Producer", "Parasite", "Saprophyte", "Predator"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is NOT an example of a habitat?", options: ["Forest", "Desert", "River", "Classroom"], correctAnswer: "D" },
        { type: "mcq", question: "Which of these is an example of an aquatic habitat?", options: ["Savannah", "Forest", "River", "Grassland"], correctAnswer: "C" },
        { type: "mcq", question: "The process by which green plants lose water through their leaves is called ______.", options: ["Respiration", "Transpiration", "Excretion", "Photosynthesis"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following organisms reproduces by budding?", options: ["Hydra", "Man", "Bird", "Fish"], correctAnswer: "A" },
        { type: "mcq", question: "Which habitat contains mainly salt water?", options: ["Pond", "Lagoon", "River", "Estuary"], correctAnswer: "C" },
        { type: "mcq", question: "Reproduction involving two parents is known as ______ reproduction.", options: ["Asexual", "Vegetative", "Sexual", "Budding"], correctAnswer: "C" },
        { type: "mcq", question: "Hygiene mainly refers to proper ______.", options: ["Feeding", "Sanitation and cleanliness", "Exercise", "Housing"], correctAnswer: "B" },
        { type: "mcq", question: "Rotting of dead plants and animals is known as ______.", options: ["Fermentation", "Digestion", "Decay", "Germination"], correctAnswer: "C" },
        { type: "mcq", question: "Grassland habitats are dominated mainly by ______.", options: ["Shrubs", "Grasses", "Rivers", "Mountains"], correctAnswer: "B" },
        { type: "mcq", question: "Disease-causing micro-organisms are generally referred to as ______.", options: ["Vectors", "Pathogens", "Saprophytes", "Fungi"], correctAnswer: "B" },
        { type: "mcq", question: "The study of micro-organisms is called ______.", options: ["Botany", "Microbiology", "Ecology", "Genetics"], correctAnswer: "B" },

        { type: "fill", question: "Tiny living things that cannot be seen with the naked eye are called ______.", correctAnswer: "Micro-organisms" },
        { type: "fill", question: "The breaking down of dead organic matter is known as ______.", correctAnswer: "Decay" },
        { type: "fill", question: "The practice of keeping the body and environment clean is called ______.", correctAnswer: "Hygiene" },
        { type: "fill", question: "Animals that live in water are called ______ organisms.", correctAnswer: "Aquatic" },
        { type: "fill", question: "Forests, deserts, and grasslands are examples of ______ habitats.", correctAnswer: "Terrestrial" },
        { type: "fill", question: "Amoeba reproduces asexually by ______ fission.", correctAnswer: "Binary" },
        { type: "fill", question: "Fungi commonly reproduce using ______.", correctAnswer: "Spores" },
        { type: "fill", question: "The process involving fusion of male and female gametes is called ______ reproduction.", correctAnswer: "Sexual" },
        { type: "fill", question: "Organisms without backbones are called ______.", correctAnswer: "Invertebrates" },
        { type: "fill", question: "Adaptation helps organisms to ______ in their habitats.", correctAnswer: "Survive" }
    ]
},
        {
    subject: "Digital Literacy",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 800,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Word processing is the use of computer software to ______.", options: ["browse the internet", "create, edit and format text documents", "design buildings", "repair computers"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a word processing application?", options: ["Microsoft Excel", "Microsoft Word", "Microsoft Access", "CorelDRAW"], correctAnswer: "B" },
        { type: "mcq", question: "Which application allows multiple users to edit a document at the same time?", options: ["Microsoft Paint", "Google Docs", "Calculator", "Notepad"], correctAnswer: "B" },
        { type: "mcq", question: "Formatting in word processing means ______.", options: ["deleting documents", "changing the appearance of text", "printing documents", "sending emails"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is an example of character formatting?", options: ["Margins", "Font size", "Page orientation", "Page size"], correctAnswer: "B" },
        { type: "mcq", question: "Which alignment places text evenly along both left and right margins?", options: ["Left", "Center", "Right", "Justify"], correctAnswer: "D" },
        { type: "mcq", question: "Microsoft Excel is mainly used for ______.", options: ["typing letters", "working with numbers and calculations", "creating presentations", "editing videos"], correctAnswer: "B" },
        { type: "mcq", question: "The default file extension for Microsoft Word documents is ______.", options: [".xlsx", ".pptx", ".docx", ".accdb"], correctAnswer: "C" },
        { type: "mcq", question: "Copyright protects ______.", options: ["company logos", "original creative works", "computer hardware", "internet connections"], correctAnswer: "B" },
        { type: "mcq", question: "A trademark is used to protect a company's ______.", options: ["password", "logo or brand name", "computer", "email"], correctAnswer: "B" },
        { type: "mcq", question: "Plagiarism means ______.", options: ["creating original work", "copying another person's work and claiming it as yours", "editing documents", "sharing files online"], correctAnswer: "B" },
        { type: "mcq", question: "Respecting digital content ownership means ______.", options: ["copying freely", "giving credit to the original owner", "removing the author's name", "selling another person's work"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is presentation software?", options: ["Microsoft PowerPoint", "Microsoft Access", "Microsoft Excel", "Notepad"], correctAnswer: "A" },
        { type: "mcq", question: "A single page in a presentation is called a ______.", options: ["worksheet", "slide", "record", "field"], correctAnswer: "B" },
        { type: "mcq", question: "Animation in PowerPoint is applied to ______.", options: ["the entire presentation", "objects on a slide", "only pictures", "only charts"], correctAnswer: "B" },
        { type: "mcq", question: "A slide transition is an effect that occurs ______.", options: ["between two slides", "inside a paragraph", "on a spreadsheet", "while saving a file"], correctAnswer: "A" },
        { type: "mcq", question: "Which animation effect makes an object gradually appear?", options: ["Fade", "Delete", "Rotate Disk", "Compress"], correctAnswer: "A" },
        { type: "mcq", question: "A database is ______.", options: ["a computer game", "an organized collection of related data", "a web browser", "a programming language"], correctAnswer: "B" },
        { type: "mcq", question: "DBMS stands for ______.", options: ["Database Management System", "Digital Business Management Software", "Data Backup Management Service", "Database Monitoring Solution"], correctAnswer: "A" },
        { type: "mcq", question: "Which of the following is an example of a DBMS?", options: ["Microsoft Access", "Microsoft Word", "PowerPoint", "Google Chrome"], correctAnswer: "A" },
        { type: "mcq", question: "In a database table, a row is called a ______.", options: ["field", "record", "column", "cell"], correctAnswer: "B" },
        { type: "mcq", question: "In a database table, a column is called a ______.", options: ["record", "table", "field", "sheet"], correctAnswer: "C" },
        { type: "mcq", question: "Which of these can be stored in a database?", options: ["Student records", "Employee details", "Hospital records", "All of the above"], correctAnswer: "D" },
        { type: "mcq", question: "One function of a DBMS is to ______.", options: ["create and manage databases", "design websites", "edit videos", "repair hardware"], correctAnswer: "A" },
        { type: "mcq", question: "Which of these is an importance of a database?", options: ["Reduces data duplication", "Damages stored information", "Slows down data retrieval", "Increases paper usage"], correctAnswer: "A" },

        { type: "fill", question: "__________ is software used to create, edit, format, save and print text documents.", correctAnswer: "Word processing" },
        { type: "fill", question: "Copying another person's work and claiming it as your own is called __________.", correctAnswer: "Plagiarism" },
        { type: "fill", question: "A single page in a PowerPoint presentation is called a __________.", correctAnswer: "Slide" },
        { type: "fill", question: "A __________ is software used to create, store and manage databases.", correctAnswer: "DBMS" },
        { type: "fill", question: "A complete row of information in a database table is called a __________.", correctAnswer: "Record" }
    ]
},
        {
    subject: "Citizenship Education",
    openDate: "2026-07-16T08:20:00",
    timeLimit: 800,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "The love and loyalty a person has for his country is called ______.", options: ["Nationalism", "Patriotism", "Federalism", "Democracy"], correctAnswer: "B" },
        { type: "mcq", question: "The movement of people from one country to another is called ______.", options: ["Tourism", "Communication", "Migration", "Civilization"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is an example of community service?", options: ["Fighting in school", "Environmental sanitation", "Examination malpractice", "Vandalism"], correctAnswer: "B" },
        { type: "mcq", question: "The process of choosing leaders during elections is called ______.", options: ["Campaigning", "Voting", "Census", "Registration"], correctAnswer: "B" },
        { type: "mcq", question: "A person who offers services freely without payment is called a ______.", options: ["Politician", "Volunteer", "Tourist", "Judge"], correctAnswer: "B" },
        { type: "mcq", question: "The responsible use of technology and the internet is known as ______.", options: ["Online marketing", "Digital citizenship", "Cybercrime", "Communication"], correctAnswer: "B" },
        { type: "mcq", question: "Long-term changes in weather patterns are known as ______.", options: ["Climate change", "Rainfall", "Weather forecast", "Erosion"], correctAnswer: "A" },
        { type: "mcq", question: "Which institution protects human rights in Nigeria?", options: ["NHRC", "NNPC", "WAEC", "NECO"], correctAnswer: "A" },
        { type: "mcq", question: "NHRC means ______.", options: ["National Human Rights Commission", "National Health Reform Commission", "Nigerian Human Resource Council", "National Housing Rights Committee"], correctAnswer: "A" },
        { type: "mcq", question: "An organization that works independently to protect rights is called ______.", options: ["NGO", "PTA", "NBA", "NYSC"], correctAnswer: "A" },
        { type: "mcq", question: "Tourism helps a country by ______.", options: ["Increasing unemployment", "Destroying culture", "Generating revenue", "Encouraging crime"], correctAnswer: "C" },
        { type: "mcq", question: "Cultural heritage includes ______.", options: ["Drug trafficking", "Traditions and customs", "Cybercrime", "Kidnapping"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is a tourist attraction in Nigeria?", options: ["Aso Rock Villa", "Olumo Rock", "Central Bank", "National Assembly"], correctAnswer: "B" },
        { type: "mcq", question: "The arm of government responsible for interpreting laws is the ______.", options: ["Executive", "Legislature", "Judiciary", "Media"], correctAnswer: "C" },
        { type: "mcq", question: "Planting trees helps to reduce ______.", options: ["Inflation", "Climate change", "Migration", "Unemployment"], correctAnswer: "B" },
        { type: "mcq", question: "Helping to clean your community is an example of ______.", options: ["Corruption", "Community service", "Electoral fraud", "Protest"], correctAnswer: "B" },
        { type: "mcq", question: "One importance of patriotism is that it promotes ______.", options: ["Violence", "Corruption", "National unity", "Tribalism"], correctAnswer: "C" },
        { type: "mcq", question: "A person visiting another country for pleasure is called a ______.", options: ["Citizen", "Tourist", "Volunteer", "Voter"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an anti-patriotic behaviour?", options: ["Voting", "Paying taxes", "Corruption", "Community service"], correctAnswer: "C" },
        { type: "mcq", question: "The sharing of traditions and customs between different people is called ______.", options: ["Globalization", "Cultural exchange", "Urbanization", "Industrialization"], correctAnswer: "B" },

        { type: "fill", question: "The love and loyalty to one's country is called __________.", correctAnswer: "Patriotism" },
        { type: "fill", question: "The process of choosing leaders in an election is called __________.", correctAnswer: "Voting" },
        { type: "fill", question: "The movement of people from one place to another is called __________.", correctAnswer: "Migration" },
        { type: "fill", question: "Responsible use of the internet is known as __________.", correctAnswer: "Digital Citizenship" },
        { type: "fill", question: "Long-term changes in weather patterns are called __________.", correctAnswer: "Climate Change" },
        { type: "fill", question: "NHRC stands for __________.", correctAnswer: "National Human Rights Commission" },
        { type: "fill", question: "A person who works freely without payment is called a __________.", correctAnswer: "Volunteer" },
        { type: "fill", question: "The sharing of cultures between different countries is called __________.", correctAnswer: "Cultural Exchange" },
        { type: "fill", question: "Activities done to improve a community without payment are called __________.", correctAnswer: "Community Service" },
        { type: "fill", question: "The arm of government that protects citizens' rights through the courts is the __________.", correctAnswer: "Judiciary" }
    ]
},
        {
    subject: "Christian Religious Studies",
    openDate: "2026-07-15T08:20:00",
    timeLimit: 780,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Effective prayer must be offered in ______.", options: ["pride", "faith", "anger", "doubt"], correctAnswer: "B" },
        { type: "mcq", question: "Jesus taught His disciples to pray using the ______.", options: ["Prayer of Jabez", "Apostles' Creed", "Lord's Prayer", "Psalm of David"], correctAnswer: "C" },
        { type: "mcq", question: "One condition for answered prayer is ______.", options: ["disobedience", "faithfulness", "selfishness", "hatred"], correctAnswer: "B" },
        { type: "mcq", question: "Christians witness to Christ primarily through their ______.", options: ["wealth", "appearance", "lifestyle", "position"], correctAnswer: "C" },
        { type: "mcq", question: "The Great Commission is found in ______.", options: ["Matthew 28:19-20", "Genesis 1:1", "Exodus 20:1", "Psalm 23"], correctAnswer: "A" },
        { type: "mcq", question: "Christians are expected to preach the gospel to ______.", options: ["selected people", "only relatives", "all nations", "church workers only"], correctAnswer: "C" },
        { type: "mcq", question: "When persecuted, Christians should ______.", options: ["seek revenge", "curse their enemies", "pray for their persecutors", "stop serving God"], correctAnswer: "C" },
        { type: "mcq", question: "Jesus said those persecuted for righteousness' sake are ______.", options: ["foolish", "blessed", "weak", "rejected"], correctAnswer: "B" },
        { type: "mcq", question: "Stephen was persecuted because he ______.", options: ["stole money", "denied Christ", "preached Christ", "left Jerusalem"], correctAnswer: "C" },
        { type: "mcq", question: "Impartiality means ______.", options: ["favouring friends", "judging fairly", "discriminating", "showing prejudice"], correctAnswer: "B" },
        { type: "mcq", question: "God does not show ______.", options: ["mercy", "justice", "favouritism", "love"], correctAnswer: "C" },
        { type: "mcq", question: "According to James, believers should not discriminate against the ______.", options: ["rich", "poor", "rulers", "teachers"], correctAnswer: "B" },
        { type: "mcq", question: "The sovereignty of God means that God ______.", options: ["depends on man", "rules over all creation", "changes with time", "fears Satan"], correctAnswer: "B" },
        { type: "mcq", question: "God's sovereignty is seen in His ______.", options: ["weakness", "authority", "ignorance", "limitation"], correctAnswer: "B" },
        { type: "mcq", question: "Nebuchadnezzar acknowledged God's sovereignty after ______.", options: ["his dream", "his sickness and restoration", "a battle", "his coronation"], correctAnswer: "B" },
        { type: "mcq", question: "The resurrection of Christ took place on the ______.", options: ["first day of the week", "Sabbath day", "Friday", "Thursday"], correctAnswer: "A" },
        { type: "mcq", question: "Jesus rose from the dead on the ______.", options: ["third day", "fifth day", "seventh day", "tenth day"], correctAnswer: "A" },
        { type: "mcq", question: "The resurrection of Jesus proves His ______.", options: ["weakness", "divinity and victory over death", "poverty", "humanity only"], correctAnswer: "B" },
        { type: "mcq", question: "Before ascending to heaven, Jesus appeared to His disciples for ______.", options: ["10 days", "20 days", "30 days", "40 days"], correctAnswer: "D" },
        { type: "mcq", question: "The second coming of Christ will be ______.", options: ["secret forever", "visible and glorious", "impossible", "uncertain"], correctAnswer: "B" },
        { type: "mcq", question: "At Christ's second coming, believers will ______.", options: ["be forgotten", "receive rewards", "be condemned", "remain unchanged"], correctAnswer: "B" },
        { type: "mcq", question: "Christians are advised to be watchful because ______.", options: ["Christ will come unexpectedly", "they know the exact date", "angels will announce it first", "nobody will see Him"], correctAnswer: "A" },
        { type: "mcq", question: "One evidence of effective prayer is ______.", options: ["spiritual growth", "pride", "selfishness", "hatred"], correctAnswer: "A" },
        { type: "mcq", question: "A Christian who witnesses to Christ should demonstrate ______.", options: ["dishonesty", "humility and love", "pride", "hatred"], correctAnswer: "B" },
        { type: "mcq", question: "The final judgment will take place after ______.", options: ["Christ's second coming", "creation", "Pentecost", "the Exodus"], correctAnswer: "A" },

        { type: "fill", question: "__________ is talking and communicating with God.", correctAnswer: "Prayer" },
        { type: "fill", question: "Christians are commanded to be witnesses of Christ in __________ and to the ends of the earth.", correctAnswer: "Jerusalem" },
        { type: "fill", question: "When Christians face persecution, they should respond with __________ and prayer.", correctAnswer: "Love" },
        { type: "fill", question: "The __________ of God refers to His supreme authority over all creation.", correctAnswer: "Sovereignty" },
        { type: "fill", question: "Jesus Christ rose from the dead on the __________ day after His crucifixion.", correctAnswer: "Third" }
    ]
},
        {
    subject: "Physics",
    openDate: "2026-07-15T08:20:00",
    timeLimit: 1320,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "What is a vector quantity?", options: ["A quantity with magnitude only", "A quantity with magnitude and direction", "A quantity without unit", "A quantity measured in kilograms"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following quantities is a vector?", options: ["Speed", "Distance", "Energy", "Momentum"], correctAnswer: "D" },
        { type: "mcq", question: "Which of the following is NOT a vector quantity?", options: ["Momentum", "Force", "Velocity", "Temperature"], correctAnswer: "D" },
        { type: "mcq", question: "Which of the following pairs of physical quantities is made up of vectors?", options: ["Speed and displacement", "Mass and force", "Displacement and acceleration", "Momentum and length"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following pairs of physical quantities comprises vectors?", options: ["Capacitance and inductance", "Force ratio and velocity ratio", "Friction and momentum", "Electric field potential and electric field intensity"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is a scalar quantity?", options: ["Tension", "Weight", "Impulse", "Distance"], correctAnswer: "D" },
        { type: "mcq", question: "Which of the following is a scalar quantity?", options: ["Momentum", "Acceleration", "Displacement", "Distance"], correctAnswer: "D" },
        { type: "mcq", question: "Which classification is correct?", options: ["Electric potential (Vector)", "Momentum (Scalar)", "Gravitational field intensity (Scalar)", "Magnetic flux density (Scalar)"], correctAnswer: "A" },
        { type: "mcq", question: "Which of the following quantities is a vector?", options: ["Volume", "Momentum", "Energy", "Speed"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following set of quantities are all vectors?", options: ["Pressure, energy and force", "Force, displacement and momentum", "Distance, acceleration and work", "Density, volume and weight"], correctAnswer: "B" },

        { type: "mcq", question: "Water does not drip through an open silk umbrella unless the inside is touched because of ______.", options: ["Surface tension", "Hydrostatic upthrust", "Viscosity", "Diffusion"], correctAnswer: "A" },
        { type: "mcq", question: "The frictional effect between the layers of a moving fluid is called ______.", options: ["Capillarity", "Turbulence", "Diffusion", "Viscosity"], correctAnswer: "D" },
        { type: "mcq", question: "Viscosity in a liquid does NOT depend on the ______.", options: ["Nature of the liquid", "Relative velocity between layers", "Area of contact", "Normal reaction between layers"], correctAnswer: "D" },
        { type: "mcq", question: "Palm oil flows out more easily after heating because ______.", options: ["Molecules gain potential energy", "Friction between oil layers is reduced", "Oil molecules force each other out", "Adhesion increases"], correctAnswer: "B" },
        { type: "mcq", question: "A ball falling through a viscous liquid before terminal velocity ______.", options: ["Its acceleration decreases", "Fluid acceleration becomes zero", "There is no resultant force", "Its velocity decreases"], correctAnswer: "A" },
        { type: "mcq", question: "Which statement about viscosity is correct?", options: ["I and III only", "I and II only", "II and IV only", "III and IV only"], correctAnswer: "A" },
        { type: "mcq", question: "Which substance is most viscous at room temperature?", options: ["Water", "Alcohol", "Petrol", "Palm oil"], correctAnswer: "D" },

        { type: "mcq", question: "The concave meniscus of water in glass is because ______.", options: ["Adhesion is greater than cohesion", "Cohesion is greater than adhesion", "Water molecules move faster", "Water is attracted to the centre"], correctAnswer: "A" },
        { type: "mcq", question: "Capillarity in narrow tubes is caused by ______.", options: ["Viscosity", "Surface tension", "Osmosis", "Brownian motion"], correctAnswer: "B" },
        { type: "mcq", question: "Knowledge of surface tension is applied in all except ______.", options: ["Manufacturing raincoats", "Production of palm oil", "Floating a needle on water", "Washing plates with soapy water"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is NOT an effect of surface tension?", options: ["Water droplets from a tap", "Mercury forming spherical droplets", "An insect walking on water", "Water flowing more easily than engine oil"], correctAnswer: "D" },
        { type: "mcq", question: "Which of the following will NOT lower the surface tension of water?", options: ["Detergent", "Methylated spirit", "Soap solution", "Grease"], correctAnswer: "D" },
        { type: "mcq", question: "The force between molecules of the same substance is called ______.", options: ["Elastic force", "Repulsive force", "Cohesive force", "Adhesive force"], correctAnswer: "C" },
        { type: "mcq", question: "Which substance lowers the surface tension of water?", options: ["Metal", "Sand", "Detergent", "Paper"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following has the highest surface tension?", options: ["Cold water", "Soapy water", "Warm water", "Oily water"], correctAnswer: "A" },
        { type: "mcq", question: "The rising of liquid in a narrow tube is known as ______.", options: ["Osmosis", "Adhesion", "Capillarity", "Surface tension"], correctAnswer: "C" },
        { type: "mcq", question: "The force between molecules of a liquid and a solid is called ______.", options: ["Adhesive", "Cohesive", "Magnetic", "Repulsive"], correctAnswer: "A" },
        { type: "mcq", question: "Which of the following is NOT a surface phenomenon?", options: ["Condensation", "Evaporation", "Photoemission", "Thermionic emission"], correctAnswer: "D" },
        { type: "mcq", question: "Paint brush bristles stick together after removal from water because of ______.", options: ["Air viscosity", "Low density of water", "Surface tension", "Weight of the bristles"], correctAnswer: "C" },
        { type: "mcq", question: "Movement of fluid in a narrow tube is called ______.", options: ["Osmosis", "Brownian motion", "Capillarity", "Diffusion"], correctAnswer: "C" },
        { type: "mcq", question: "The wave emitted by a loudspeaker is ______.", options: ["Transverse", "Longitudinal", "Gamma", "Radio"], correctAnswer: "B" }
    ]
},
        {
    subject: "Government",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 900,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "The principle of checks and balances is necessary because it?", options: ["prevents government from becoming dictatorial", "leaves each organ of government independent of the judiciary", "makes the three organs hate one another", "prevents the executive from functioning"], correctAnswer: "A" },
        { type: "mcq", question: "Unwritten constitution means that the constitution is?", options: ["based only on conventions", "not contained in a single book", "not written as double books", "not approved"], correctAnswer: "B" },
        { type: "mcq", question: "In a presidential system of government, the head of government is called the?", options: ["Prime Minister", "Governor-General", "Executive President", "Mayor"], correctAnswer: "C" },
        { type: "mcq", question: "The laws made by the legislators normally pass through:", options: ["the executive", "some committees in the civil service", "the judiciary", "the process of deliberations"], correctAnswer: "D" },
        { type: "mcq", question: "A good citizen must be ______.", options: ["ready to assist law enforcement agents in crime prevention", "non-educated and non-obedient to the law", "educated and ready to assist the poor", "wealthy and ready to pay tax"], correctAnswer: "A" },
        { type: "mcq", question: "Citizenship may be changed by ______.", options: ["employment", "birth", "divorce", "conviction"], correctAnswer: "A" },
        { type: "mcq", question: "There are _____ Local Government Area Councils in Nigeria.", options: ["976", "844", "774", "747"], correctAnswer: "C" },
        { type: "mcq", question: "There are ______ geopolitical zones in Nigeria.", options: ["5", "36", "12", "6"], correctAnswer: "D" },
        { type: "mcq", question: "Who was the President of Nigeria in 2006?", options: ["Umaru Musa Yar'Adua", "Olusegun Obasanjo", "Goodluck Ebele Jonathan", "Sani Abacha"], correctAnswer: "B" },
        { type: "mcq", question: "Upon reaching the airport to travel outside Nigeria, what item is issued?", options: ["Photograph", "Passport", "Documents to fill", "Telephone"], correctAnswer: "C" },
        { type: "mcq", question: "Handcuffs are generally associated with which profession?", options: ["Army officer", "Teacher", "Police officer", "Navy officer"], correctAnswer: "C" },
        { type: "mcq", question: "The letters NIG are used by which country in West Africa?", options: ["Algeria", "Niger Republic", "Cameroon", "Nigeria"], correctAnswer: "D" },
        { type: "mcq", question: "Which of the following is a major limitation to the operational effectiveness of the public service?", options: ["Corruption", "Nepotism", "Bureaucratic red-tapism", "Change of government"], correctAnswer: "C" },
        { type: "mcq", question: "One major factor that hinders women from participating actively in politics is ______.", options: ["their educational background", "social discrimination and belief system", "their religious belief", "lack of funds and financial power"], correctAnswer: "D" },
        { type: "mcq", question: "A process where each arm of government serves as watchdog over one another's activities is known as ______.", options: ["political control", "national controls", "checks and balances", "financial checks"], correctAnswer: "C" },
        { type: "mcq", question: "One of the following is NOT a reason for the adoption of indirect rule by the British.", options: ["lack of British personnel", "insufficient fund", "poor climate", "respect for native authority"], correctAnswer: "D" },
        { type: "mcq", question: "Who took over the seat of power in Nigeria after Lord Lugard during the colonial era?", options: ["Clifford", "Richards", "Macpherson", "Lyttleton"], correctAnswer: "A" },
        { type: "mcq", question: "The two agencies in Nigeria that fight against financial misappropriation are ______.", options: ["EFCC and NFF", "ICPC and EFCC", "NFFC and NPC", "ICPC and NNPC"], correctAnswer: "B" },
        { type: "mcq", question: "The process by which information is exchanged between individuals is known as ______.", options: ["Communication skills", "Communiqué", "Integrity", "Manipulation skills"], correctAnswer: "A" },
        { type: "mcq", question: "Democracy could be described as a form of government in which people ______.", options: ["develop interest in good governance", "contribute to political liberation", "participate in the decision-making process", "produce sound political manifesto"], correctAnswer: "C" },
        { type: "mcq", question: "Members of society are expected to adhere to societal values for the following reasons EXCEPT ______.", options: ["enhancement of development", "improvement of self dignity", "reduction of social vices", "relegation of morality"], correctAnswer: "D" },
        { type: "mcq", question: "Who was the first military Head of State in Nigeria?", options: ["General J.T.U. Aguiyi Ironsi", "Dr. Nnamdi Azikiwe", "Chief Obafemi Awolowo", "Herbert Macaulay"], correctAnswer: "A" },
        { type: "mcq", question: "The first President of Nigeria was ______.", options: ["General Yakubu Gowon", "Dr. Nnamdi Azikiwe", "Chief Obafemi Awolowo", "Tafawa Balewa"], correctAnswer: "B" },
        { type: "mcq", question: "The legislature has the power to amend the ______ of the country.", options: ["legislative house", "constitution", "government", "judiciary"], correctAnswer: "B" },

        { type: "fill", question: "What is the full meaning of INEC?", correctAnswer: "Independent National Electoral Commission" },
        { type: "fill", question: "One of the three most prominent nationalist leaders of Nigeria at independence was __________________.", correctAnswer: "Nnamdi Azikiwe" },
        { type: "fill", question: "Another prominent nationalist leader at independence was __________________.", correctAnswer: "Obafemi Awolowo" },
        { type: "fill", question: "The third prominent nationalist leader at independence was __________________.", correctAnswer: "Ahmadu Bello" },
        { type: "fill", question: "Nigeria became a Republican state in the year __________.", correctAnswer: "1963" },
        { type: "fill", question: "W.H.O. stands for __________________.", correctAnswer: "World Health Organization" },
        { type: "fill", question: "The level of government in charge of people at the grassroots is the __________ government.", correctAnswer: "Local" },
        { type: "fill", question: "The military Head of State in Nigeria in 1966 was __________________.", correctAnswer: "J.T.U. Aguiyi Ironsi" }
    ]
},
    {
    subject: "English Studies",
    openDate: "2026-07-14T08:20:00",
    timeLimit: 900,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "The phrasal verb \"give up\" means ______.", options: ["to continue trying", "to stop trying", "to wear", "to visit"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following phrasal verbs means \"to postpone\"?", options: ["Put on", "Put up", "Put off", "Give away"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is the correct spelling?", options: ["Recieve", "Receive", "Receeve", "Receve"], correctAnswer: "B" },
        { type: "mcq", question: "Choose the correctly spelt word.", options: ["Accomodation", "Acommodation", "Accommodation", "Accommondation"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following words is correctly spelt?", options: ["Begining", "Beggining", "Beginning", "Begininning"], correctAnswer: "C" },
        { type: "mcq", question: "The antonym of \"temporary\" is ______.", options: ["short", "weak", "permanent", "old"], correctAnswer: "C" },
        { type: "mcq", question: "English is described as a ______ language.", options: ["syllable-timed", "stress-timed", "sound-timed", "rhythm-less"], correctAnswer: "B" },
        { type: "mcq", question: "In spoken English, important words are usually ______.", options: ["ignored", "whispered", "stressed", "omitted"], correctAnswer: "C" },
        { type: "mcq", question: "Voice modulation involves changing the ______.", options: ["handwriting", "spelling", "tone and pitch", "grammar"], correctAnswer: "C" },
        { type: "mcq", question: "The teacher worked hard to ____ change in the school system.", options: ["bring up", "bring about", "bring back", "take in"], correctAnswer: "B" },
        { type: "mcq", question: "She decided to ____ dancing as a new hobby.", options: ["take off", "take away", "take up", "bring back"], correctAnswer: "C" },
        { type: "mcq", question: "I could not ____ the information because it was too complex.", options: ["take in", "bring up", "take off", "bring about"], correctAnswer: "A" },
        { type: "mcq", question: "HIV/AIDS can be prevented through ______.", options: ["ignorance", "proper education", "fighting", "isolation"], correctAnswer: "B" },
        { type: "mcq", question: "People living with HIV should not be ______.", options: ["supported", "educated", "discriminated against", "encouraged"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is NOT a feature of a newspaper article?", options: ["Headline", "Byline", "Stanza", "Lead paragraph"], correctAnswer: "C" },
        { type: "mcq", question: "The main purpose of a newspaper article is to ______.", options: ["entertain only", "inform or report events", "tell stories in verses", "confuse readers"], correctAnswer: "B" },
        { type: "mcq", question: "Dignity in labour means ______.", options: ["avoiding work", "respecting honest work", "stealing", "begging"], correctAnswer: "B" },
        { type: "mcq", question: "Farmers contribute to ______.", options: ["society", "corruption", "laziness", "crime"], correctAnswer: "A" },
        { type: "mcq", question: "Exam malpractice is ______.", options: ["studying hard", "reading books", "cheating in examinations", "attending classes"], correctAnswer: "C" },
        { type: "mcq", question: "All the following are features of speech writing EXCEPT", options: ["Opening Greeting", "Introduction", "Body", "Sender's Address"], correctAnswer: "D" },
        { type: "mcq", question: "Bribery is an example of ______.", options: ["honesty", "corruption", "patriotism", "education"], correctAnswer: "B" },
        { type: "mcq", question: "An adjunct of place tells ______.", options: ["why", "when", "how", "where"], correctAnswer: "D" },
        { type: "mcq", question: "In the sentence \"He slept outside\", the word \"outside\" is an adjunct of ______.", options: ["time", "place", "reason", "manner"], correctAnswer: "B" },
        { type: "mcq", question: "An adjunct of time tells ______.", options: ["how", "where", "when", "why"], correctAnswer: "C" },
        { type: "mcq", question: "In the sentence \"They spoke softly\", the word \"softly\" is an adjunct of ______.", options: ["place", "reason", "manner", "time"], correctAnswer: "C" },

        { type: "fill", question: "A debate is a formal __________ where speakers present arguments for or against a topic.", correctAnswer: "Discussion" },
        { type: "fill", question: "Patriotism means love and __________ to one's country.", correctAnswer: "Loyalty" },
        { type: "fill", question: "The title of a newspaper article is called a __________.", correctAnswer: "Headline" },
        { type: "fill", question: "A speech is delivered to an audience of __________.", correctAnswer: "People" },
        { type: "fill", question: "A letter usually begins with an address and a __________.", correctAnswer: "Salutation" }
    ]
},
        {
    subject: "Chemistry",
    timeLimit: 1500,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Organic chemistry is the study of compounds containing mainly ______.", options: ["Oxygen", "Nitrogen", "Carbon", "Sulphur"], correctAnswer: "C" },
        { type: "mcq", question: "The general formula of alkanes is ______.", options: ["CnH₂n", "CnH₂n+₂", "CnH₂n−₂", "CnH₂n−₁"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an alkene?", options: ["CH₄", "C₂H₆", "C₂H₄", "C₂H₂"], correctAnswer: "C" },
        { type: "mcq", question: "Ethyne belongs to the family of ______.", options: ["Alkanes", "Alkenes", "Alkynes", "Alcohols"], correctAnswer: "C" },
        { type: "mcq", question: "Compounds having the same molecular formula but different structures are called ______.", options: ["Homologues", "Isotopes", "Isomers", "Elements"], correctAnswer: "C" },
        { type: "mcq", question: "The process of separating crude oil into different fractions is called ______.", options: ["Cracking", "Distillation", "Fractional distillation", "Condensation"], correctAnswer: "C" },
        { type: "mcq", question: "Which petroleum fraction is used as fuel for cars?", options: ["Bitumen", "Petrol", "Lubricating oil", "Fuel oil"], correctAnswer: "B" },
        { type: "mcq", question: "A reaction in which two substances combine to form one product is called ______.", options: ["Decomposition reaction", "Displacement reaction", "Combination reaction", "Neutralization reaction"], correctAnswer: "C" },
        { type: "mcq", question: "In a decomposition reaction, one compound breaks into ______.", options: ["A single product", "Simpler substances", "An element only", "Water only"], correctAnswer: "B" },
        { type: "mcq", question: "A reaction that releases heat is called ______.", options: ["Endothermic", "Reversible", "Exothermic", "Catalytic"], correctAnswer: "C" },
        { type: "mcq", question: "Photosynthesis is an example of a(n) ______ reaction.", options: ["Exothermic", "Endothermic", "Neutralization", "Combination"], correctAnswer: "B" },
        { type: "mcq", question: "Which factor increases the rate of a chemical reaction?", options: ["Lower temperature", "Lower concentration", "Catalyst", "Larger particle size"], correctAnswer: "C" },
        { type: "mcq", question: "The minimum energy required for a reaction to occur is called ______.", options: ["Kinetic energy", "Heat energy", "Potential energy", "Activation energy"], correctAnswer: "D" },
        { type: "mcq", question: "A reversible reaction proceeds in ______ directions.", options: ["One", "Two", "Three", "Four"], correctAnswer: "B" },
        { type: "mcq", question: "At equilibrium, the rate of the forward reaction is ______ the rate of the backward reaction.", options: ["Greater than", "Less than", "Equal to", "Twice"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is a metal?", options: ["Sulphur", "Chlorine", "Copper", "Oxygen"], correctAnswer: "C" },
        { type: "mcq", question: "Metals are good conductors of ______.", options: ["Water only", "Heat and electricity", "Air only", "Acids"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a non-metal?", options: ["Iron", "Zinc", "Aluminium", "Carbon"], correctAnswer: "D" },
        { type: "mcq", question: "The process of breaking large petroleum molecules into smaller molecules is called ______.", options: ["Refining", "Distillation", "Cracking", "Condensation"], correctAnswer: "C" },
        { type: "mcq", question: "The general formula of alkynes is ______.", options: ["CnH₂n+₂", "CnH₂n", "CnH₂n−₂", "CnH₂n+₄"], correctAnswer: "C" },

        { type: "fill", question: "Organic compounds contain mainly __________.", correctAnswer: "Carbon" },
        { type: "fill", question: "The general formula of alkenes is __________.", correctAnswer: "CnH₂n" },
        { type: "fill", question: "Methane belongs to the __________ family of hydrocarbons.", correctAnswer: "Alkane" },
        { type: "fill", question: "The process of separating crude oil into fractions is called __________ distillation.", correctAnswer: "Fractional" },
        { type: "fill", question: "A reaction that absorbs heat is called an __________ reaction.", correctAnswer: "Endothermic" },
        { type: "fill", question: "A substance that increases the rate of a reaction without being used up is called a __________.", correctAnswer: "Catalyst" },
        { type: "fill", question: "The state at which the forward and backward reactions occur at equal rates is called chemical __________.", correctAnswer: "Equilibrium" },
        { type: "fill", question: "According to Le Chatelier's Principle, an equilibrium system opposes any __________ made to it.", correctAnswer: "Change" },
        { type: "fill", question: "Metals are usually __________ and can be hammered into sheets.", correctAnswer: "Malleable" },
        { type: "fill", question: "Oxygen and sulphur are examples of __________.", correctAnswer: "Non-metals" }
    ]
},
        {
    subject: "Economics",
    openDate: "2026-07-14T08:00:00",
    timeLimit: 950,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "A firm's total cost is the sum of its ______.", options: ["fixed cost and average cost", "variable cost and marginal cost", "fixed cost and variable cost", "average cost and marginal cost"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following costs remains constant irrespective of the level of output?", options: ["Variable cost", "Fixed cost", "Marginal cost", "Average cost"], correctAnswer: "B" },
        { type: "mcq", question: "If the total cost of producing 100 units is ₦50,000, the average cost is ______.", options: ["₦5", "₦50", "₦500", "₦5,000"], correctAnswer: "C" },
        { type: "mcq", question: "The additional cost incurred when one more unit of output is produced is known as ______.", options: ["Average cost", "Total cost", "Marginal cost", "Fixed cost"], correctAnswer: "C" },
        { type: "mcq", question: "A firm's revenue obtained from selling all its output is called ______.", options: ["Average revenue", "Marginal revenue", "Total revenue", "Net revenue"], correctAnswer: "C" },
        { type: "mcq", question: "A major feature of capitalism is ______.", options: ["Collective ownership of resources", "Government ownership of all businesses", "Private ownership of means of production", "Equal distribution of income"], correctAnswer: "C" },
        { type: "mcq", question: "In a socialist economic system, the means of production are mainly owned by ______.", options: ["Individuals", "Government", "Foreign investors", "Consumers"], correctAnswer: "B" },
        { type: "mcq", question: "A mixed economy combines the features of ______.", options: ["Capitalism and socialism", "Socialism and communism only", "Capitalism and feudalism", "Communism and traditional economy"], correctAnswer: "A" },
        { type: "mcq", question: "The demand for labour is referred to as derived demand because it depends on ______.", options: ["Population growth alone", "Demand for goods and services produced by labour", "Government regulations", "Workers' preferences"], correctAnswer: "B" },
        { type: "mcq", question: "Wages are determined in a competitive labour market through the interaction between ______.", options: ["Money supply and price level", "Demand and supply of labour", "Capital and entrepreneurship", "Consumers and producers"], correctAnswer: "B" },
        { type: "mcq", question: "According to the law of diminishing marginal utility, as more units of a commodity are consumed, marginal utility ______.", options: ["Increases continuously", "Remains constant", "Eventually decreases", "Becomes negative immediately"], correctAnswer: "C" },
        { type: "mcq", question: "The satisfaction derived from consuming a commodity is called ______.", options: ["Utility", "Revenue", "Production", "Demand"], correctAnswer: "A" },
        { type: "mcq", question: "Equilibrium price is determined where ______.", options: ["Supply is greater than demand", "Demand is greater than supply", "Demand equals supply", "Production equals consumption"], correctAnswer: "C" },
        { type: "mcq", question: "A shortage in the market will normally cause price to ______.", options: ["Fall", "Rise", "Remain unchanged", "Become zero"], correctAnswer: "B" },
        { type: "mcq", question: "A market structure where there is only one seller of a product is known as ______.", options: ["Oligopoly", "Monopoly", "Perfect competition", "Monopolistic competition"], correctAnswer: "B" },
        { type: "mcq", question: "One major feature of perfect competition is ______.", options: ["Existence of a single seller", "Product differentiation", "Free entry and exit of firms", "Strong government control"], correctAnswer: "C" },
        { type: "mcq", question: "An industry dominated by a few large firms is called ______.", options: ["Monopoly", "Oligopoly", "Perfect competition", "Socialism"], correctAnswer: "B" },
        { type: "mcq", question: "The extraction of crude oil and mining activities belong to the ______.", options: ["Primary sector", "Secondary sector", "Tertiary sector", "Service sector only"], correctAnswer: "A" },
        { type: "mcq", question: "One major importance of industries in Nigeria is that they ______.", options: ["Reduce employment opportunities", "Discourage economic growth", "Provide employment and income", "Eliminate international trade"], correctAnswer: "C" },
        { type: "mcq", question: "A major problem facing industries in Nigeria is ______.", options: ["Availability of raw materials", "Adequate power supply", "Poor infrastructure", "High level of skilled labour"], correctAnswer: "C" },

        { type: "fill", question: "A firm's cost of production that increases as output increases but falls when output decreases is known as __________ cost.", correctAnswer: "Variable" },
        { type: "fill", question: "When the average cost of production is at its minimum point, it is equal to the firm's __________ cost.", correctAnswer: "Marginal" },
        { type: "fill", question: "If a firm's total revenue increases as more units of output are sold, the relationship between price and quantity sold is reflected in its __________ revenue.", correctAnswer: "Total" },
        { type: "fill", question: "A firm reaches the break-even point when its total revenue is exactly equal to its __________.", correctAnswer: "Total cost" },
        { type: "fill", question: "In a capitalist economy, the mechanism through which resources are allocated is mainly the __________ mechanism.", correctAnswer: "Price" },
        { type: "fill", question: "An economic system in which decisions concerning production, distribution and consumption are based on customs and traditions is called a __________ economy.", correctAnswer: "Traditional" },
        { type: "fill", question: "The responsiveness of the quantity demanded of labour to changes in wage rates is known as the __________ of demand for labour.", correctAnswer: "Elasticity" },
        { type: "fill", question: "The price of labour is determined in the labour market by the interaction between the __________ and supply of labour.", correctAnswer: "Demand" },
        { type: "fill", question: "A consumer achieves maximum satisfaction when the marginal utility derived from the last unit consumed is equal to the __________ of money.", correctAnswer: "Marginal utility" },
        { type: "fill", question: "A market structure where firms are interdependent because the actions of one firm affect others is known as __________.", correctAnswer: "Oligopoly" }
    ]
},

    ],

    "SS2": [
        {
    subject: "Mathematics",
    timeLimit: 1500,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "A manufacturer produces two products X and Y. Each unit of X contributes ₦40 profit and each unit of Y contributes ₦30 profit. If the objective function is P = 40x + 30y, the value of P when x = 6 and y = 8 is:", options: ["₦420", "₦460", "₦480", "₦500"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following points satisfies both inequalities x + y ≤ 8 and x ≥ 3?", options: ["(2,5)", "(3,6)", "(4,5)", "(5,4)"], correctAnswer: "D" },
        { type: "mcq", question: "The feasible region in linear programming is:", options: ["The region satisfying all constraints", "The region outside all constraints", "The region containing the origin only", "The region with maximum area"], correctAnswer: "A" },
        { type: "mcq", question: "A ship sails from a port on a bearing of 135°. This bearing is equivalent to:", options: ["S45°E", "N45°E", "S45°W", "N45°W"], correctAnswer: "A" },
        { type: "mcq", question: "The three-digit bearing of North-West is:", options: ["045°", "135°", "225°", "315°"], correctAnswer: "D" },
        { type: "mcq", question: "A town B is on a bearing of 060° from town A. The bearing of A from B is:", options: ["120°", "240°", "300°", "330°"], correctAnswer: "B" },
        { type: "mcq", question: "From a point 40 m from the foot of a tower, the angle of elevation of the top is 45°. The height of the tower is:", options: ["20 m", "28.3 m", "40 m", "56.6 m"], correctAnswer: "C" },
        { type: "mcq", question: "The angle of depression from the top of a building to a point on the ground is 35°. The angle of elevation from the point to the top of the building is:", options: ["25°", "35°", "55°", "145°"], correctAnswer: "B" },
        { type: "mcq", question: "A ladder 10 m long leans against a wall making an angle of 60° with the ground. The height reached on the wall is:", options: ["5 m", "6.2 m", "8.7 m", "10 m"], correctAnswer: "C" },
        { type: "mcq", question: "The sum of all frequencies in a frequency distribution table is called:", options: ["Mean", "Modal frequency", "Total frequency", "Cumulative frequency"], correctAnswer: "C" },
        { type: "mcq", question: "The cumulative frequency corresponding to the last class interval is always:", options: ["The mean", "The total frequency", "The median", "The mode"], correctAnswer: "B" },
        { type: "mcq", question: "The median class in grouped data is the class whose cumulative frequency:", options: ["Is highest", "Contains N/2", "Is equal to the mean", "Is lowest"], correctAnswer: "B" },
        { type: "mcq", question: "An ogive is mainly used to estimate:", options: ["Mean and mode", "Range and variance", "Median, quartiles and percentiles", "Frequency only"], correctAnswer: "C" },
        { type: "mcq", question: "The median of the distribution below is:\n\nClass: 0–10, 10–20, 20–30, 30–40\nFrequency: 4, 8, 12, 6", options: ["18.5", "22.5", "24.0", "26.5"], correctAnswer: "B" },
        { type: "mcq", question: "The probability of obtaining an even number when a fair die is thrown is:", options: ["1/6", "1/3", "1/2", "2/3"], correctAnswer: "C" },
        { type: "mcq", question: "Two events are mutually exclusive if:", options: ["They occur together always", "They cannot occur at the same time", "They have equal probabilities", "One causes the other"], correctAnswer: "B" },
        { type: "mcq", question: "A bag contains 5 red balls and 7 blue balls. The probability of selecting a red ball is:", options: ["5/7", "5/12", "7/12", "1/2"], correctAnswer: "B" },
        { type: "mcq", question: "If P(A) = 0.4, then the probability of the complementary event A' is:", options: ["0.2", "0.4", "0.6", "1.4"], correctAnswer: "C" },
        { type: "mcq", question: "Two fair coins are tossed simultaneously. The probability of obtaining exactly one head is:", options: ["1/4", "1/2", "3/4", "1"], correctAnswer: "B" },
        { type: "mcq", question: "A card is drawn at random from a standard deck of 52 cards. The probability of drawing a king or a queen is:", options: ["1/13", "2/13", "4/13", "8/13"], correctAnswer: "D" },

        { type: "fill", question: "The process of finding the maximum or minimum value of an objective function subject to certain constraints is called __________.", correctAnswer: "Linear Programming" },
        { type: "fill", question: "The region that satisfies all the given inequalities in a linear programming problem is called the __________ region.", correctAnswer: "Feasible" },
        { type: "fill", question: "Bearings are measured in a __________ direction from North.", correctAnswer: "Clockwise" },
        { type: "fill", question: "The bearing S30°E is equivalent to __________° in three-digit bearing notation.", correctAnswer: "150" },
        { type: "fill", question: "The angle between the horizontal and the line of sight when an observer looks upward at an object is called the angle of __________.", correctAnswer: "Elevation" },
        { type: "fill", question: "The angle between the horizontal and the line of sight when an observer looks downward at an object is called the angle of __________.", correctAnswer: "Depression" },
        { type: "fill", question: "The running total of frequencies in a frequency distribution table is called the __________ frequency.", correctAnswer: "Cumulative" },
        { type: "fill", question: "A cumulative frequency curve is also known as an __________.", correctAnswer: "Ogive" },
        { type: "fill", question: "The set of all possible outcomes of a random experiment is called the __________ space.", correctAnswer: "Sample" },
        { type: "fill", question: "The probability of an impossible event is __________.", correctAnswer: "0" }
    ]
},
        {
    subject: "English Studies",
    openDate: "2026-07-14T08:00:00",
    timeLimit: 1000,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Rising tone is often used to show ______.", options: ["anger", "politeness and uncertainty", "sadness", "excitement"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an environmental word?", options: ["Acclaim", "Recycling", "Canvas", "Exigent"], correctAnswer: "B" },
        { type: "mcq", question: "A poem expresses feelings and ideas using ______.", options: ["laws", "diagrams", "rhythm and imagery", "statistics"], correctAnswer: "C" },
        { type: "mcq", question: "The word 'Paucity' means ______.", options: ["abundance", "scarcity", "happiness", "courage"], correctAnswer: "B" },
        { type: "mcq", question: "Which pair of consonant sounds has voice vibration in the second sound?", options: ["/p/ and /b/", "/s/ and /t/", "/p/ and /t/", "/s/ and /p/"], correctAnswer: "A" },
        { type: "mcq", question: "Which sentence correctly illustrates the sequence of tenses?", options: ["He said he is tired.", "He said he was tired.", "He says he was tired yesterday.", "He says he tired."], correctAnswer: "B" },
        { type: "mcq", question: "A group of words that can stand alone as a complete sentence is called a ______.", options: ["subordinate clause", "phrase", "main clause", "idiom"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is a subordinate clause?", options: ["She is happy", "They played football", "because she was tired", "The boy laughed"], correctAnswer: "C" },
        { type: "mcq", question: "\"Look up to\" means ______.", options: ["punish someone", "admire someone", "avoid someone", "deceive someone"], correctAnswer: "B" },
        { type: "mcq", question: "\"Put up with\" means to ______.", options: ["tolerate", "build", "admire", "remove"], correctAnswer: "A" },
        { type: "mcq", question: "The base on which a building stands is called ______.", options: ["scaffold", "beam", "foundation", "brick"], correctAnswer: "C" },
        { type: "mcq", question: "An article is written mainly for ______.", options: ["one person", "a specific friend", "a general audience", "a family member"], correctAnswer: "C" },
        { type: "mcq", question: "Which of these is NOT a feature of an article?", options: ["Title", "Salutation", "Body paragraphs", "Conclusion"], correctAnswer: "B" },
        { type: "mcq", question: "A word formed from initials is called an ______.", options: ["acronym", "ardour", "troupe", "compliment"], correctAnswer: "A" },
        { type: "mcq", question: "Which tense shows an action happening now?", options: ["Past tense", "Future tense", "Present tense", "Perfect tense"], correctAnswer: "C" },
        { type: "mcq", question: "Which conditional clause expresses an imaginary situation?", options: ["First conditional", "Second conditional", "Third conditional", "Present conditional"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a feature of speech writing?", options: ["Salutation", "Address", "Sender's address", "Date"], correctAnswer: "A" },
        { type: "mcq", question: "The person who prepares and corrects a text before publication is called a ______.", options: ["publisher", "editor", "printer", "author"], correctAnswer: "B" },
        { type: "mcq", question: "The prefix 'un-' means ______.", options: ["before", "again", "not", "wrongly"], correctAnswer: "C" },
        { type: "mcq", question: "Which word contains a prefix?", options: ["play", "happy", "unhappy", "act"], correctAnswer: "C" },
        { type: "mcq", question: "A summary should contain ______.", options: ["all details", "only the main points", "examples only", "direct quotations only"], correctAnswer: "B" },
        { type: "mcq", question: "In the sentence 'The boy kicked the ball,' the sentence is in the ______ voice.", options: ["passive", "indirect", "active", "reported"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is a use of a dictionary?", options: ["Measuring weight", "Finding pronunciation", "Drawing maps", "Counting money"], correctAnswer: "B" },
        { type: "mcq", question: "Most two-syllable nouns are stressed on the ______ syllable.", options: ["second", "third", "first", "last"], correctAnswer: "C" },
        { type: "mcq", question: "In the sentence 'The boys run fast,' the verb agrees with a ______ subject.", options: ["singular", "plural", "collective", "indefinite"], correctAnswer: "B" },

        { type: "fill", question: "A speech begins with a proper ____________.", correctAnswer: "salutation" },
        { type: "fill", question: "The phrase 'If it rains, we will stay indoors' is an example of a ____________ conditional clause.", correctAnswer: "first" },
        { type: "fill", question: "The word 'rewrite' is formed by adding the prefix ____________ to the root word 'write.'", correctAnswer: "re" },
        { type: "fill", question: "In a passive sentence, the subject ____________ the action.", correctAnswer: "receives" },
        { type: "fill", question: "The group of words that begins with a preposition and ends with a noun or pronoun is called a ____________.", correctAnswer: "prepositional phrase" }
    ]
},
        {
    subject: "Literature-in-English",
    openDate: "2026-07-15T08:20:00",
    timeLimit: 780,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "A character whose traits contrast with those of another character in order to highlight certain qualities is called a ______.", options: ["protagonist", "foil", "confidant", "stock character"], correctAnswer: "B" },
        { type: "mcq", question: "The tragic flaw that leads to the downfall of a tragic hero is known as ______.", options: ["catharsis", "hubris", "hamartia", "peripeteia"], correctAnswer: "C" },
        { type: "mcq", question: "In drama, the emotional purification experienced by the audience is called ______.", options: ["denouement", "catharsis", "climax", "suspense"], correctAnswer: "B" },
        { type: "mcq", question: "A narrative that begins in the middle of events is said to start ______.", options: ["in medias res", "expository style", "retrospectively", "chronologically"], correctAnswer: "A" },
        { type: "mcq", question: "Which of the following is NOT a feature of a Shakespearean tragedy?", options: ["Noble hero", "Fatal flaw", "Comic relief", "Happy ending"], correctAnswer: "D" },
        { type: "mcq", question: "A statement that appears contradictory but contains truth is known as ______.", options: ["irony", "paradox", "satire", "euphemism"], correctAnswer: "B" },
        { type: "mcq", question: "The repetition of vowel sounds within nearby words is called ______.", options: ["consonance", "alliteration", "assonance", "refrain"], correctAnswer: "C" },
        { type: "mcq", question: "The author's choice and arrangement of words is referred to as ______.", options: ["diction", "imagery", "plot", "suspense"], correctAnswer: "A" },
        { type: "mcq", question: "A narrative poem that tells a story is called a ______.", options: ["lyric", "ode", "sonnet", "ballad"], correctAnswer: "D" },
        { type: "mcq", question: "The use of ridicule to expose human weaknesses or social vices is known as ______.", options: ["satire", "parody", "allegory", "irony"], correctAnswer: "A" },
        { type: "mcq", question: "A play in which the audience laughs at human weaknesses is a ______.", options: ["tragedy", "melodrama", "comedy", "masque"], correctAnswer: "C" },
        { type: "mcq", question: "Which stage direction indicates that a character should leave the stage?", options: ["Aside", "Enter", "Exit", "Soliloquy"], correctAnswer: "C" },
        { type: "mcq", question: "The climax of a literary work is best described as ______.", options: ["the introduction of characters", "the highest point of tension", "the conclusion of events", "the moral lesson"], correctAnswer: "B" },
        { type: "mcq", question: "A story with two simultaneous plot lines is said to contain a ______.", options: ["subplot", "flashback", "motif", "setting"], correctAnswer: "A" },
        { type: "mcq", question: "The use of an object, person, or event to represent a deeper meaning is called ______.", options: ["symbolism", "imagery", "allusion", "parody"], correctAnswer: "A" },
        { type: "mcq", question: "\"The crown\" used to represent a king or monarchy is an example of ______.", options: ["synecdoche", "irony", "metaphor", "euphemism"], correctAnswer: "A" },
        { type: "mcq", question: "Which literary device involves a reference to a well-known person, event, or work?", options: ["Allusion", "Hyperbole", "Pun", "Refrain"], correctAnswer: "A" },
        { type: "mcq", question: "A character who remains unchanged throughout a work is known as a ______.", options: ["dynamic character", "round character", "static character", "major character"], correctAnswer: "C" },
        { type: "mcq", question: "The aspect of literature that deals with moral values and ideas is known as ______.", options: ["style", "theme", "setting", "structure"], correctAnswer: "B" },
        { type: "mcq", question: "The sudden reversal of fortune in a tragedy is called ______.", options: ["catharsis", "peripeteia", "exposition", "denouement"], correctAnswer: "B" },

        { type: "fill", question: "\"I have learned to wear many faces like dresses\" is taken from the poem __________________.", correctAnswer: "Abiku Girl" },
        { type: "fill", question: "\"A new generation, careless of bonds\" is taken from the poem __________________.", correctAnswer: "Raider of the Treasure Trove" },
        { type: "fill", question: "\"Hide me now, when children haunt the earth\" is taken from the poem __________________.", correctAnswer: "Bat" },
        { type: "fill", question: "\"So long they don't take the yam from my savouring mouth\" is taken from the poem __________________.", correctAnswer: "The Leader and the Led" },
        { type: "fill", question: "\"March on, old boy, do, and clinch yonder untamed gain\" is taken from the poem __________________.", correctAnswer: "The Journey of the Magi" },
        { type: "fill", question: "\"Filled with toxins, her belly will not yield new islands\" is taken from the poem __________________.", correctAnswer: "The Grieved Lands" },
        { type: "fill", question: "\"The smile that wins, the tint that glows\" is taken from the poem __________________.", correctAnswer: "She Walks in Beauty" },
        { type: "fill", question: "\"Between my fingers and my thumb, the squat pen rests\" is taken from the poem __________________.", correctAnswer: "Digging" },
        { type: "fill", question: "\"I dance like I've got diamonds at the meeting of my thighs\" is taken from the poem __________________.", correctAnswer: "Still I Rise" },
        { type: "fill", question: "\"It isn't every day you hear that you're going to get a million pounds\" is taken from the play __________________.", correctAnswer: "The Million Pound Bank Note" }
    ]
},
        {
    subject: "Digital Literacy",
    openDate: "2026-07-14T08:00:00",
    timeLimit: 900,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "A mobile application is a software program designed to run on ______.", options: ["desktop computers", "mobile devices", "television sets", "Platforms"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an example of a mobile application?", options: ["WhatsApp", "Microsoft Paint", "Notepad", "Windows Explorer"], correctAnswer: "A" },
        { type: "mcq", question: "Mobile application development is the process of ______.", options: ["repairing smartphones", "creating and testing mobile apps", "building computer software", "installing operating systems"], correctAnswer: "B" },
        { type: "mcq", question: "Which type of mobile app is built specifically for one platform?", options: ["Hybrid app", "Native app", "Web app", "Cloud app"], correctAnswer: "B" },
        { type: "mcq", question: "A web app runs mainly through a ______.", options: ["Platform", "web browser", "Web Platform", "Mobile Application"], correctAnswer: "B" },
        { type: "mcq", question: "Hybrid apps combine features of ______.", options: ["hardware and software", "native and web apps", "Android and Windows", "Platforms and browsers"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a mobile operating system?", options: ["Android", "Linux", "Ubuntu Server", "MS-DOS"], correctAnswer: "A" },
        { type: "mcq", question: "Which development tool is commonly used for Android app development?", options: ["Android Studio", "Adobe Reader", "PowerPoint", "Notepad"], correctAnswer: "A" },
        { type: "mcq", question: "Android Studio is mainly used for ______.", options: ["database management", "mobile app development", "video editing", "computer networking"], correctAnswer: "B" },
        { type: "mcq", question: "One advantage of mobile applications is that they ______.", options: ["are always free", "provide fast access to services", "cannot be hacked", "never require updates"], correctAnswer: "B" },
        { type: "mcq", question: "Artificial Intelligence (AI) is the ability of a machine to ______.", options: ["produce electricity", "perform tasks requiring human intelligence", "Handle Multiple Tasks", "increase internet speed"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an AI-powered chatbot?", options: ["ARE-GPT", "ChatGPT", "Paint", "Excel"], correctAnswer: "B" },
        { type: "mcq", question: "Generative AI can create ______.", options: ["Data & numbers", "new content such as text and images", "computer cables", "Complex Data"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is an example of Generative AI?", options: ["ChatGPT", "Google Chrome", "Calculator", "Windows Explorer"], correctAnswer: "A" },
        { type: "mcq", question: "AI used for only one specific task is called ______.", options: ["General AI", "Narrow AI", "Adaptive AI", "Machine AI"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is an application of AI in healthcare?", options: ["Diagnosing diseases", "Building roads", "Performing Surgeries", "Repairing engines"], correctAnswer: "A" },
        { type: "mcq", question: "AI learns from ______.", options: ["dreams", "training data", "electricity only", "luck"], correctAnswer: "B" },
        { type: "mcq", question: "Training data is ______.", options: ["a computer virus", "information used to teach AI", "an internet browser", "a mobile phone"], correctAnswer: "B" },
        { type: "mcq", question: "After studying training data, AI mainly learns by finding ______.", options: ["colours", "patterns", "music", "games"], correctAnswer: "B" },
        { type: "mcq", question: "Which type of machine learning uses labeled data?", options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Deep browsing"], correctAnswer: "A" },
        { type: "mcq", question: "Big Data refers to ______.", options: ["small collections of data", "very large and complex collections of data", "only paper records", "computer hardware"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a source of Big Data?", options: ["Social media", "Online shopping", "Banks", "All of the above"], correctAnswer: "D" },
        { type: "mcq", question: "Data analysis is the process of ______.", options: ["deleting data", "examining and interpreting data", "printing documents", "formatting text"], correctAnswer: "B" },
        { type: "mcq", question: "One purpose of data analysis is to ______.", options: ["support decision-making", "damage databases", "reduce storage permanently", "increase computer viruses"], correctAnswer: "A" },
        { type: "mcq", question: "Which of the following is a benefit of Artificial Intelligence?", options: ["Works continuously without getting tired", "Always has emotions", "Can replace all humans", "Never makes mistakes"], correctAnswer: "A" },

        { type: "fill", question: "A mobile app designed for only one operating system is called a __________ app.", correctAnswer: "Native" },
        { type: "fill", question: "__________ AI is capable of creating new content such as text, images and code.", correctAnswer: "Generative" },
        { type: "fill", question: "The information used to teach an AI system is known as __________ data.", correctAnswer: "training" },
        { type: "fill", question: "Extremely large collections of data are known as __________ Data.", correctAnswer: "Big" },
        { type: "fill", question: "The process of examining and interpreting data to make decisions is called  __________.", correctAnswer: "data analysis" }
    ]
},
        {
    subject: "Biology",
    timeLimit: 1500,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Which part of a neuron receives impulses from other neurons?", options: ["Axon", "Myelin sheath", "Dendrite", "Node of Ranvier"], correctAnswer: "C" },
        { type: "mcq", question: "The medulla oblongata mainly controls ______ activities.", options: ["Voluntary", "Involuntary", "Reproductive", "Sensory"], correctAnswer: "B" },
        { type: "mcq", question: "The image formed on the retina is usually ______.", options: ["Upright and magnified", "Virtual and erect", "Inverted and diminished", "Upright and diminished"], correctAnswer: "C" },
        { type: "mcq", question: "The defect of the eye in which distant objects cannot be seen clearly is called ______.", options: ["Hypermetropia", "Astigmatism", "Myopia", "Presbyopia"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following factors can increase population size?", options: ["Emigration", "Death rate", "Immigration", "Predation"], correctAnswer: "C" },
        { type: "mcq", question: "A population growth curve that levels off due to limited resources is called a ______ curve.", options: ["J-shaped", "S-shaped", "Zig-zag", "Straight-line"], correctAnswer: "B" },
        { type: "mcq", question: "Organisms occupying the same trophic level in a food web are referred to as ______.", options: ["Communities", "Niches", "Consumers", "Guilds"], correctAnswer: "D" },
        { type: "mcq", question: "Which of the following is an example of a decomposer?", options: ["Grasshopper", "Mushroom", "Hawk", "Goat"], correctAnswer: "B" },
        { type: "mcq", question: "Energy transfer from one trophic level to another is usually accompanied by loss of energy as ______.", options: ["Water", "Minerals", "Heat", "Oxygen"], correctAnswer: "C" },
        { type: "mcq", question: "The structure that temporarily nourishes the developing foetus is the ______.", options: ["Placenta", "Ovary", "Cervix", "Oviduct"], correctAnswer: "A" },
        { type: "mcq", question: "Implantation in humans occurs in the ______.", options: ["Ovary", "Vagina", "Uterus", "Fallopian tube"], correctAnswer: "C" },
        { type: "mcq", question: "The fluid-filled sac surrounding the embryo is known as the ______.", options: ["Chorion", "Amnion", "Placenta", "Yolk sac"], correctAnswer: "B" },
        { type: "mcq", question: "Pollination differs from fertilization because pollination involves the transfer of ______.", options: ["Ovules", "Pollen grains", "Seeds", "Fruits"], correctAnswer: "B" },
        { type: "mcq", question: "The part of a seed that develops into the shoot system is the ______.", options: ["Radicle", "Plumule", "Cotyledon", "Testa"], correctAnswer: "B" },
        { type: "mcq", question: "Aggregate fruits develop from ______.", options: ["Many ovaries of one flower", "One ovary of one flower", "Many flowers fused together", "Dry ovaries only"], correctAnswer: "A" },
        { type: "mcq", question: "Which characteristic is most common in animal-dispersed fruits?", options: ["Winged structures", "Feathery appendages", "Bright colour and fleshy covering", "Very light seeds"], correctAnswer: "C" },
        { type: "mcq", question: "Courtship behaviour in animals mainly helps to ______.", options: ["Reduce feeding", "Attract mates", "Increase migration", "Prevent moulting"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is an example of parental care?", options: ["Nest building by birds", "Hibernation", "Camouflage", "Territorial behaviour"], correctAnswer: "A" },
        { type: "mcq", question: "The junction between two neurons is called a ______.", options: ["Node", "Ganglion", "Synapse", "Receptor"], correctAnswer: "C" },
        { type: "mcq", question: "The hormone primarily responsible for the development of female secondary sexual characteristics is ______.", options: ["Testosterone", "Progesterone", "Estrogen", "Adrenaline"], correctAnswer: "C" },

        { type: "fill", question: "The insulating layer around the axon of a neuron is called the ______ sheath.", correctAnswer: "Myelin" },
        { type: "fill", question: "The retina contains light-sensitive cells called rods and ______.", correctAnswer: "Cones" },
        { type: "fill", question: "Movement of organisms out of a population is known as ______.", correctAnswer: "Emigration" },
        { type: "fill", question: "Green plants occupy the first ______ level in a food chain.", correctAnswer: "Trophic" },
        { type: "fill", question: "Organisms that feed directly on producers are called primary ______.", correctAnswer: "Consumers" },
        { type: "fill", question: "The fusion of male and female gametes produces a ______.", correctAnswer: "Zygote" },
        { type: "fill", question: "The structure through which nutrients and oxygen pass from mother to foetus is the ______.", correctAnswer: "Placenta" },
        { type: "fill", question: "The protective outer covering of a seed is known as the ______.", correctAnswer: "Testa" },
        { type: "fill", question: "Fruits formed from an entire inflorescence are called ______ fruits.", correctAnswer: "Multiple" },
        { type: "fill", question: "Behaviour patterns associated with mating are called ______ behaviours.", correctAnswer: "Reproductive" }
    ]
},
        {
    subject: "Citizenship Education",
    openDate: "2026-07-16T08:20:00",
    timeLimit: 800,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "In Nigeria, public servants are expected to be ______.", options: ["Political", "Ambitious", "Apolitical", "Non-partisan"], correctAnswer: "C" },
        { type: "mcq", question: "A system of government that listens to the opinion of the people and tolerates opposition is ______.", options: ["Dictatorial regime", "Capitalist regime", "Democratic regime", "Socialist regime"], correctAnswer: "C" },
        { type: "mcq", question: "The responsibilities of government to its citizens include the following EXCEPT ______.", options: ["Creating employment opportunities", "Payment of property tax to citizens", "Protection of lives and property", "Maintenance of law and order"], correctAnswer: "B" },
        { type: "mcq", question: "One of the aims of citizenship education is to produce students with ______.", options: ["High sense of patriotism", "Manipulative skills", "Creative skills", "Scientific ideas"], correctAnswer: "A" },
        { type: "mcq", question: "The MOST effective approach towards the elimination of sexually transmitted diseases is ______.", options: ["Casual sex", "Use of condom", "Withdrawal system", "Abstinence"], correctAnswer: "D" },
        { type: "mcq", question: "The following are factors that guarantee employment and alleviate poverty EXCEPT ______.", options: ["Granting loans", "Creation of industries", "Creation of more financial institutions", "Good governance"], correctAnswer: "C" },
        { type: "mcq", question: "Human rights abuse can be prevented through the following means EXCEPT ______.", options: ["Court of law", "Military means", "Mass literacy", "Constitutional means"], correctAnswer: "B" },
        { type: "mcq", question: "The public service is a branch of the ______ arm of government.", options: ["Executive", "Civilian", "Judiciary", "Legislature"], correctAnswer: "A" },
        { type: "mcq", question: "The ideal means of transferring power into authority is through ______.", options: ["Force", "Influence", "Prayers", "Legitimacy"], correctAnswer: "D" },
        { type: "mcq", question: "NAPTIP is an initiative of the ______.", options: ["USAID", "United Nations Office on Drugs and Crime", "Federal Government of Nigeria", "Women Trafficking and Child Labour Eradication"], correctAnswer: "C" },
        { type: "mcq", question: "In order to avoid undue interference in governance, there should be ______.", options: ["Proper fusion of governmental powers", "Clear separation of governmental powers", "More roles for traditional rulers", "Additional responsibilities for local governments"], correctAnswer: "B" },
        { type: "mcq", question: "HIV/AIDS is generally described as terminal because it is ______.", options: ["Incurable", "Preventable", "Transmittable", "Avertable"], correctAnswer: "A" },
        { type: "mcq", question: "The ability that helps individuals handle objects skilfully in order to produce something new is called ______.", options: ["Interactive", "Intellectual", "Elective", "Skills"], correctAnswer: "D" },
        { type: "mcq", question: "Freedom to act as one pleases, but within the law, is described as ______.", options: ["Democracy", "Separation of powers", "Human rights", "Civic responsibility"], correctAnswer: "C" },
        { type: "mcq", question: "Any attempt to remove a government through illegal means is called ______.", options: ["Impeachment", "Coup", "Libel", "Perjury"], correctAnswer: "B" },
        { type: "mcq", question: "One of the civic responsibilities of a citizen is to ______.", options: ["Participate in governmental matters", "Join social clubs", "Participate in social gatherings", "Participate in public discussions"], correctAnswer: "A" },
        { type: "mcq", question: "Citizenship education influences an individual to be ______.", options: ["Competent", "Complacent", "Educated", "Patriotic"], correctAnswer: "D" },
        { type: "mcq", question: "_______ is an economic, social and political system in which people elect representatives to govern them.", options: ["Representative democracy", "Socialism", "Capitalist democracy", "Capitalism"], correctAnswer: "A" },
        { type: "mcq", question: "Citizens can compete for political office through the following means EXCEPT ______.", options: ["Campaign", "Veto power", "Manifesto", "Slogan"], correctAnswer: "B" },
        { type: "mcq", question: "Cult members are particularly hostile to ______.", options: ["Perceived members", "Their group members", "Lecturers", "All students"], correctAnswer: "C" },
        { type: "mcq", question: "Youth empowerment promotes ______.", options: ["Foreign scholarship", "Pursuit of higher education", "Youthful exuberance", "Self-reliance"], correctAnswer: "D" },
        { type: "mcq", question: "Which of the following cannot easily be abused?", options: ["Stimulants", "Narcotics", "Cosmetics", "Tobacco"], correctAnswer: "C" },
        { type: "mcq", question: "The most important place for building good values is the ______.", options: ["Social media", "Family", "Workplace", "National level"], correctAnswer: "B" },
        { type: "mcq", question: "A situation whereby citizens do not participate in political affairs is known as ______.", options: ["Political apathy", "Political awareness", "Political participation", "Political party"], correctAnswer: "A" },
        { type: "mcq", question: "What is the total number of members of the Nigerian National Assembly?", options: ["360", "400", "469", "109"], correctAnswer: "C" },

        { type: "fill", question: "The protection of citizens' rights can best be guaranteed when there is __________________.", correctAnswer: "Rule of law" },
        { type: "fill", question: "Constructive criticism of government policies and actions in a democratic state is best promoted by __________________.", correctAnswer: "Official opposition" },
        { type: "fill", question: "Smooth transition of government in a democratic state is ensured when there is __________________.", correctAnswer: "Free, fair and periodic election" },
        { type: "fill", question: "Citizens also have the right to freedom of __________________.", correctAnswer: "movement" },
        { type: "fill", question: "Citizens also have the right to freedom of __________________.", correctAnswer: "religion" }
    ]
},
        {
    subject: "Christian Religious Studies",
    openDate: "2026-07-15T08:20:00",
    timeLimit: 780,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Jesus called His first disciples while they were ______.", options: ["Praying", "Fishing", "Sleeping", "Farming"], correctAnswer: "B" },
        { type: "mcq", question: "Which two brothers were among the first disciples called by Jesus?", options: ["Peter and Andrew", "James and John", "Philip and Thomas", "Matthew and Judas"], correctAnswer: "A" },
        { type: "mcq", question: "Jesus said, \"Follow me and I will make you ______.\"", options: ["Great leaders", "Fishers of men", "Rich men", "Teachers"], correctAnswer: "B" },
        { type: "mcq", question: "How many disciples did Jesus choose?", options: ["10", "11", "12", "14"], correctAnswer: "C" },
        { type: "mcq", question: "Who was a tax collector before becoming a disciple?", options: ["Peter", "John", "Matthew", "Thomas"], correctAnswer: "C" },
        { type: "mcq", question: "The primary mission of the disciples was to ______.", options: ["Build houses", "Preach the Gospel", "Rule Israel", "Collect taxes"], correctAnswer: "B" },
        { type: "mcq", question: "Jesus sent His disciples out in pairs to ______.", options: ["Trade", "Preach and heal", "Fish", "Farm"], correctAnswer: "B" },
        { type: "mcq", question: "The disciples were commanded to preach to ______.", options: ["Kings only", "Priests only", "All nations", "Jews only"], correctAnswer: "C" },
        { type: "mcq", question: "Jesus gave His disciples power over ______.", options: ["Animals", "Unclean spirits", "Rivers", "Mountains"], correctAnswer: "B" },
        { type: "mcq", question: "Which disciple doubted Jesus' resurrection at first?", options: ["Peter", "Andrew", "Thomas", "Philip"], correctAnswer: "C" },
        { type: "mcq", question: "Jesus was arrested in the Garden of ______.", options: ["Eden", "Gethsemane", "Jericho", "Nazareth"], correctAnswer: "B" },
        { type: "mcq", question: "Who betrayed Jesus?", options: ["Peter", "Thomas", "Judas Iscariot", "Matthew"], correctAnswer: "C" },
        { type: "mcq", question: "Jesus was tried before the Roman governor named ______.", options: ["Herod", "Caiaphas", "Pilate", "Nero"], correctAnswer: "C" },
        { type: "mcq", question: "The crowd asked for the release of ______ instead of Jesus.", options: ["Peter", "Barabbas", "John", "Stephen"], correctAnswer: "B" },
        { type: "mcq", question: "Jesus was crucified at a place called ______.", options: ["Bethlehem", "Nazareth", "Golgotha", "Capernaum"], correctAnswer: "C" },
        { type: "mcq", question: "How many days after His death did Jesus rise again?", options: ["One day", "Two days", "Three days", "Seven days"], correctAnswer: "C" },
        { type: "mcq", question: "Who first discovered that Jesus had risen?", options: ["The disciples", "Roman soldiers", "The women", "The priests"], correctAnswer: "C" },
        { type: "mcq", question: "Jesus appeared to His disciples for ______ days after His resurrection.", options: ["20", "30", "40", "50"], correctAnswer: "C" },
        { type: "mcq", question: "Jesus ascended into heaven from the Mount of ______.", options: ["Carmel", "Olives", "Sinai", "Zion"], correctAnswer: "B" },
        { type: "mcq", question: "The second coming of Jesus refers to His ______.", options: ["Birth", "Death", "Return to earth", "Baptism"], correctAnswer: "C" },
        { type: "mcq", question: "Members of the early church shared their possessions with one another because they lived in ______.", options: ["Competition", "Fear", "Fellowship", "Isolation"], correctAnswer: "C" },
        { type: "mcq", question: "The early believers devoted themselves to the apostles' ______.", options: ["Farming", "Teaching", "Trading", "Fishing"], correctAnswer: "B" },
        { type: "mcq", question: "Fellowship in the early church included breaking of ______.", options: ["Stones", "Bread", "Wood", "Pots"], correctAnswer: "B" },
        { type: "mcq", question: "The early church prayed together ______.", options: ["Occasionally", "Rarely", "Regularly", "Never"], correctAnswer: "C" },
        { type: "mcq", question: "The fellowship of the early church helped believers to grow in ______.", options: ["Wealth only", "Faith and unity", "Politics", "Power"], correctAnswer: "B" },

        { type: "fill", question: "Jesus said, \"Follow me and I will make you __________________.\"", correctAnswer: "Fishers of men" },
        { type: "fill", question: "__________________ betrayed Jesus to the chief priests.", correctAnswer: "Judas Iscariot" },
        { type: "fill", question: "Jesus was crucified at a place called __________________.", correctAnswer: "Golgotha" },
        { type: "fill", question: "Jesus rose from the dead on the __________________ day.", correctAnswer: "Third" },
        { type: "fill", question: "The believers in the early church shared their possessions and lived in __________________.", correctAnswer: "Unity" }
    ]
},
        {
    subject: "Physics",
    openDate: "2026-07-15T08:20:00",
    timeLimit: 1320,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "The motion of a body is simple harmonic if the", options: ["acceleration is always directed towards a fixed point.", "path of motion is a straight line.", "acceleration is directed towards a fixed point and proportional to its distance from the point.", "acceleration is proportional to the square of the distance from a fixed point."], correctAnswer: "C" },

        { type: "mcq", question: "An oscillating pendulum has a velocity of 2 m s⁻¹ at the equilibrium position O and zero velocity at point P. Calculate the height of P above O (g = 10 m s⁻²).", options: ["5.0 m", "2.0 m", "0.4 m", "0.2 m"], correctAnswer: "D" },

        { type: "mcq", question: "Which of the following statements about simple harmonic motion is correct?", options: ["Total mechanical energy is always conserved.", "Linear acceleration is directed to any variable point.", "Linear acceleration varies inversely with displacement.", "Period of oscillation varies linearly as acceleration due to gravity."], correctAnswer: "A" },

        { type: "mcq", question: "A simple pendulum makes 50 oscillations in one minute. What is its period of oscillation?", options: ["0.02 s", "0.20 s", "0.83 s", "1.20 s"], correctAnswer: "D" },

        { type: "mcq", question: "The period of a simple pendulum X is 5 s. What is the period of a simple pendulum Y which makes 50 vibrations in the same time it takes X to make 20 vibrations?", options: ["12.5 s", "2.5 s", "2.0 s", "1.2 s"], correctAnswer: "C" },

        { type: "mcq", question: "In a wave, the maximum displacement of particles from their equilibrium positions is called", options: ["frequency", "amplitude", "period", "wavelength"], correctAnswer: "B" },

        { type: "mcq", question: "The S.I. units of frequency, period and amplitude of a wave are respectively", options: ["hertz, second and centimetre", "second, metre and hertz", "metre, hertz and second", "hertz, second and metre"], correctAnswer: "D" },

        { type: "mcq", question: "A stone is dropped into the middle of a pool of water. Which statement is correct?", options: ["I only", "II only", "III only", "II and III only"], correctAnswer: "C" },

        { type: "mcq", question: "The amplitude of a wave is the", options: ["distance between two successive troughs", "separation of two adjacent particles vibrating in phase", "maximum displacement from equilibrium position", "distance travelled in one cycle"], correctAnswer: "C" },

        { type: "mcq", question: "Thunder is usually heard some seconds after lightning because", options: ["the eye is more sensitive than the ear", "sound and light travel in different media", "thunder occurs after lightning", "light travels faster than sound"], correctAnswer: "D" },

        { type: "mcq", question: "Which statement about wave fronts is correct?", options: ["I only", "II only", "III only", "I and III only"], correctAnswer: "D" },

        { type: "mcq", question: "The maximum displacement of a vibrating tuning fork is its", options: ["amplitude", "frequency", "period", "wavelength"], correctAnswer: "A" },

        { type: "mcq", question: "The inverse of the time required for one complete cycle is called", options: ["wavelength", "period", "frequency", "amplitude"], correctAnswer: "C" },

        { type: "mcq", question: "Lightning is seen before thunder because", options: ["air pressure is higher", "the speed of sound is less than that of light", "temperature decreases with altitude", "air density decreases with altitude"], correctAnswer: "B" },

        { type: "mcq", question: "Frequency is measured in", options: ["metre per second", "second", "hertz", "farad"], correctAnswer: "C" },

        { type: "mcq", question: "Which property of a wave remains constant when it enters another medium?", options: ["Amplitude", "Velocity", "Frequency", "Wavelength"], correctAnswer: "C" },

        { type: "mcq", question: "A string 50 cm long has a wave speed of 300 m s⁻¹. Calculate the number of vibrations per second.", options: ["3", "6", "150", "600"], correctAnswer: "D" },

        { type: "mcq", question: "A note of frequency 2000 Hz travels at 400 m s⁻¹. Calculate its wavelength.", options: ["5.0 m", "2.0 m", "0.5 m", "0.2 m"], correctAnswer: "D" },

        { type: "mcq", question: "The distance between successive crests is 25 cm and wave speed is 20 m s⁻¹. Calculate the frequency.", options: ["0.8 Hz", "5.0 Hz", "50.0 Hz", "80.0 Hz"], correctAnswer: "D" },

        { type: "mcq", question: "Sixty complete waves pass a point in 4 s. If the distance between three successive troughs is 15 m, calculate the wave speed.", options: ["300.0 m s⁻¹", "225.0 m s⁻¹", "112.5 m s⁻¹", "75.0 m s⁻¹"], correctAnswer: "B" },

        { type: "mcq", question: "A ball is projected horizontally at 20 m s⁻¹ and lands after 4 s. Calculate the height of the hill (g = 10 m s⁻²).", options: ["20 m", "40 m", "80 m", "160 m"], correctAnswer: "C" },

        { type: "mcq", question: "The time taken by a projectile to reach maximum height is", options: ["u sinθ / g", "u cosθ / g", "2u sinθ / g", "2u cosθ / g"], correctAnswer: "A" },

        { type: "mcq", question: "A cork travels 4.50 m horizontally in 1.25 s after being projected at 60°. Calculate its initial speed.", options: ["4.2 m s⁻¹", "4.7 m s⁻¹", "5.6 m s⁻¹", "7.1 m s⁻¹"], correctAnswer: "A" },

        { type: "mcq", question: "When a body is thrown vertically upward, its velocity at maximum height is", options: ["maximum", "zero", "double the initial value", "half the initial value"], correctAnswer: "B" },

        { type: "mcq", question: "A body returns to its point of projection after 1.2 s. Calculate the speed of projection (g = 10 m s⁻²).", options: ["0.6 m s⁻¹", "1.2 m s⁻¹", "6.0 m s⁻¹", "12.0 m s⁻¹"], correctAnswer: "C" },

        { type: "mcq", question: "For a body projected horizontally, which statements are correct?", options: ["I only", "II only", "I and III only", "II and III only"], correctAnswer: "D" },

        { type: "mcq", question: "A body is projected horizontally from a 45 m cliff and lands 30 m away. Calculate the speed of projection.", options: ["10 m s⁻¹", "15 m s⁻¹", "20 m s⁻¹", "30 m s⁻¹"], correctAnswer: "A" },

        { type: "mcq", question: "A body can have constant speed but still accelerate if it", options: ["moves in a straight line", "moves in a circle", "oscillates", "is in equilibrium"], correctAnswer: "B" },

        { type: "mcq", question: "The time rate of change of displacement is known as", options: ["speed", "velocity", "impulse", "acceleration"], correctAnswer: "B" },

        { type: "mcq", question: "An orange falls from a tree 45 m high. How long does it take to reach the ground?", options: ["3.0 s", "4.5 s", "6.0 s", "7.5 s"], correctAnswer: "A" },

        { type: "mcq", question: "Knowledge of surface tension is applied in the following except", options: ["manufacturing rain coats", "production of palm oil", "floating a needle on water", "washing plates with soapy water"], correctAnswer: "B" }
    ]
},
        {
    subject: "Chemistry",
    timeLimit: 1500,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "The process of joining many small molecules to form a large molecule is called ______.", options: ["Esterification", "Polymerization", "Hydrolysis", "Distillation"], correctAnswer: "B" },
        { type: "mcq", question: "The functional group of alcohols is ______.", options: ["–COOH", "–CHO", "–OH", "–COO–"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is an alkene?", options: ["CH₄", "C₂H₆", "C₂H₄", "C₂H₂"], correctAnswer: "C" },
        { type: "mcq", question: "The catalyst used in the Haber Process is ______.", options: ["Platinum", "Iron", "Nickel", "Vanadium(V) oxide"], correctAnswer: "B" },
        { type: "mcq", question: "Sulphuric acid is manufactured by the ______.", options: ["Frasch Process", "Solvay Process", "Contact Process", "Haber Process"], correctAnswer: "C" },
        { type: "mcq", question: "Which gas is released when a carbonate reacts with an acid?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], correctAnswer: "C" },
        { type: "mcq", question: "The formula of ethanoic acid is ______.", options: ["CH₃OH", "CH₃COOH", "CH₄", "C₂H₅OH"], correctAnswer: "B" },
        { type: "mcq", question: "Which of these is a thermosetting plastic?", options: ["PVC", "Polyethene", "Bakelite", "Polystyrene"], correctAnswer: "C" },
        { type: "mcq", question: "Bromine water is used to test for ______.", options: ["Acids", "Salts", "Saturated hydrocarbons", "Unsaturated hydrocarbons"], correctAnswer: "D" },
        { type: "mcq", question: "The poisonous oxide of carbon is ______.", options: ["Carbon dioxide", "Carbon monoxide", "Sulphur dioxide", "Nitrogen dioxide"], correctAnswer: "B" },
        { type: "mcq", question: "The functional group of carboxylic acids is ______.", options: ["–OH", "–COOH", "–COO–", "–NH₂"], correctAnswer: "B" },
        { type: "mcq", question: "Which of the following is a ketone?", options: ["Methanal", "Ethanal", "Propanone", "Ethanoic acid"], correctAnswer: "C" },
        { type: "mcq", question: "The general formula of alkanes is ______.", options: ["CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₂", "CₙHₙ"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is an ester?", options: ["CH₃COOH", "CH₃OH", "CH₃COOC₂H₅", "CH₄"], correctAnswer: "C" },
        { type: "mcq", question: "The monomer used to produce polyethene is ______.", options: ["Ethane", "Ethene", "Ethanol", "Ethanoic acid"], correctAnswer: "B" },
        { type: "mcq", question: "The gas used in the manufacture of ammonia is ______.", options: ["Chlorine", "Carbon dioxide", "Nitrogen", "Sulphur dioxide"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is a natural polymer?", options: ["Nylon", "PVC", "Cellulose", "Polystyrene"], correctAnswer: "C" },
        { type: "mcq", question: "The functional group of aldehydes is ______.", options: ["–COOH", "–CHO", "–OH", "–COO–"], correctAnswer: "B" },
        { type: "mcq", question: "The process by which an ester is formed is called ______.", options: ["Polymerization", "Hydrolysis", "Esterification", "Neutralization"], correctAnswer: "C" },
        { type: "mcq", question: "The gas responsible for acid rain is mainly ______.", options: ["Oxygen", "Nitrogen", "Sulphur dioxide", "Hydrogen"], correctAnswer: "C" },

        { type: "fill", question: "The smallest unit from which a polymer is formed is called a ______.", correctAnswer: "Monomer" },
        { type: "fill", question: "The functional group present in alcohols is ______.", correctAnswer: "–OH" },
        { type: "fill", question: "The industrial manufacture of ammonia is called the ______.", correctAnswer: "Haber Process" },
        { type: "fill", question: "Sulphuric acid is manufactured by the ______.", correctAnswer: "Contact Process" },
        { type: "fill", question: "Hydrocarbons containing only single bonds are called ______.", correctAnswer: "Alkanes" },
        { type: "fill", question: "The functional group of carboxylic acids is ______.", correctAnswer: "–COOH" },
        { type: "fill", question: "The pleasant smell of many fruits is due to compounds called ______.", correctAnswer: "Esters" },
        { type: "fill", question: "The orange colour of bromine water disappears in the presence of ______ hydrocarbons.", correctAnswer: "Unsaturated" },
        { type: "fill", question: "Plastics that can be softened and remoulded are called ______.", correctAnswer: "Thermoplastics" },
        { type: "fill", question: "Carbon monoxide is a ______ gas.", correctAnswer: "Poisonous" }
    ]
},
        {
    subject: "Economics",
    openDate: "2026-07-14T08:00:00",
    timeLimit: 900,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Economic planning involves the deliberate efforts of a government to ______.", options: ["eliminate all private businesses", "achieve specific economic objectives within a given period", "prevent international trade activities", "control only the banking sector"], correctAnswer: "B" },
        { type: "mcq", question: "The main reason for adopting economic planning in developing countries is to ______.", options: ["increase dependence on foreign nations", "achieve rapid economic transformation", "discourage industrial activities", "reduce government participation"], correctAnswer: "B" },
        { type: "mcq", question: "A plan designed to cover a period of one year is referred to as ______.", options: ["long-term plan", "perspective plan", "annual plan", "rolling plan"], correctAnswer: "C" },
        { type: "mcq", question: "One major limitation to effective economic planning in Nigeria is ______.", options: ["availability of skilled manpower", "accurate statistical information", "political instability", "adequate financial resources"], correctAnswer: "C" },
        { type: "mcq", question: "The National Development Plans in Nigeria were mainly aimed at ______.", options: ["reducing economic activities", "promoting economic growth and development", "preventing foreign investment", "encouraging only agricultural production"], correctAnswer: "B" },
        { type: "mcq", question: "The International Monetary Fund (IMF) mainly assists member countries by ______.", options: ["providing balance of payment support", "controlling their political systems", "owning their industries", "fixing the prices of all goods"], correctAnswer: "A" },
        { type: "mcq", question: "The World Bank provides loans mainly for ______.", options: ["military expansion", "development projects", "election campaigns", "private consumption"], correctAnswer: "B" },
        { type: "mcq", question: "A major condition often attached to IMF loans is the adoption of ______.", options: ["economic reform programmes", "military policies", "trade restrictions", "population control measures"], correctAnswer: "A" },
        { type: "mcq", question: "The major objective of ECOWAS is to promote ______.", options: ["political domination of West Africa", "economic integration among member states", "military cooperation only", "restriction of regional trade"], correctAnswer: "B" },
        { type: "mcq", question: "The World Trade Organization (WTO) promotes ______.", options: ["free and fair international trade", "government ownership of industries", "restriction of imports", "national economic planning"], correctAnswer: "A" },
        { type: "mcq", question: "The major objective of NEEDS in Nigeria was to ______.", options: ["reduce poverty and create wealth", "discourage private investment", "increase government ownership of firms", "eliminate foreign trade"], correctAnswer: "A" },
        { type: "mcq", question: "Economic growth differs from economic development because development involves ______.", options: ["increase in population only", "improvement in people's welfare and living standards", "increase in prices of goods", "increase in government expenditure alone"], correctAnswer: "B" },
        { type: "mcq", question: "A major indicator of economic development is ______.", options: ["high inflation rate", "improved standard of living", "increase in unemployment", "persistent poverty"], correctAnswer: "B" },
        { type: "mcq", question: "Corruption affects economic development by ______.", options: ["encouraging efficient resource allocation", "diverting resources meant for development", "increasing productivity automatically", "reducing government expenditure"], correctAnswer: "B" },
        { type: "mcq", question: "One major challenge of economic development in Nigeria is ______.", options: ["adequate infrastructure", "high level of unemployment", "efficient policy implementation", "stable electricity supply"], correctAnswer: "B" },
        { type: "mcq", question: "The Structural Adjustment Programme (SAP) was introduced in Nigeria to ______.", options: ["promote economic efficiency and reduce government control", "increase government ownership of enterprises", "stop foreign investment", "prevent private sector participation"], correctAnswer: "A" },
        { type: "mcq", question: "Privatization involves the ______.", options: ["transfer of public enterprises to private ownership", "establishment of more government companies", "cancellation of all business activities", "restriction of private investment"], correctAnswer: "A" },
        { type: "mcq", question: "Commercialization of public enterprises means ______.", options: ["making them operate on profit-making principles", "transferring them completely to foreigners", "closing down government businesses", "removing all management structures"], correctAnswer: "A" },
        { type: "mcq", question: "Deregulation of an economy involves ______.", options: ["increasing government restrictions", "removing unnecessary controls from economic activities", "preventing competition", "banning private enterprises"], correctAnswer: "B" },
        { type: "mcq", question: "A major reason why economic reforms may fail in developing countries is ______.", options: ["poor implementation of policies", "excessive availability of resources", "high level of industrialization", "adequate infrastructure"], correctAnswer: "A" },

        { type: "fill", question: "Economic development planning involves the deliberate effort of the government to achieve specific __________ and social objectives.", correctAnswer: "economic" },
        { type: "fill", question: "One major problem facing economic planning in Nigeria is inadequate and unreliable __________.", correctAnswer: "statistics" },
        { type: "fill", question: "The __________ provides short-term financial assistance to countries facing balance of payments problems.", correctAnswer: "IMF" },
        { type: "fill", question: "The World Bank mainly grants __________ loans for development projects.", correctAnswer: "long-term" },
        { type: "fill", question: "The regional economic organization that promotes cooperation among West African countries is __________.", correctAnswer: "ECOWAS" },
        { type: "fill", question: "The World Trade Organization (WTO) replaced the __________ in 1995.", correctAnswer: "GATT" },
        { type: "fill", question: "The acronym NEEDS stands for National Economic Empowerment and Development __________.", correctAnswer: "Strategy" },
        { type: "fill", question: "Corruption, unemployment, and poverty are major __________ to economic development in Nigeria.", correctAnswer: "challenges" },
        { type: "fill", question: "The transfer of government-owned enterprises to private individuals is called __________.", correctAnswer: "privatization" },
        { type: "fill", question: "The Structural Adjustment Programme (SAP) encouraged __________ and trade liberalization in Nigeria.", correctAnswer: "privatization" }
    ]
},
        {
    subject: "Government",
    openDate: "2026-07-14T08:00:00",
    timeLimit: 900,
    totalMarks: 60,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Government refers to all the following EXCEPT ______.", options: ["The act of civil disobedience", "An institution of a state", "The process of ruling a political community", "The exercise of power and authority"], correctAnswer: "A" },
        { type: "mcq", question: "Which of the following is NOT a public corporation?", options: ["Nigerian Steel Development Authority", "Nigerian Teachers Institute", "National Electric Power Authority", "Nigerian National Shipping Line"], correctAnswer: "B" },
        { type: "mcq", question: "Public corporations are controlled by all the following EXCEPT ______.", options: ["Judges", "Ministers", "Convicts", "Legislators"], correctAnswer: "C" },
        { type: "mcq", question: "Local governments are essential because they ______.", options: ["Check abuse of office by government functionaries", "Implement government policies at all levels", "Encourage division of the country", "Train local people in the art of governance"], correctAnswer: "D" },
        { type: "mcq", question: "Local government laws are known as ______.", options: ["Bye-laws", "Acts", "Orders", "Bills"], correctAnswer: "A" },
        { type: "mcq", question: "The section of the executive responsible for implementing government policies is known as the ______.", options: ["Public administration", "Civil service", "Civil Service Commission", "Public corporation"], correctAnswer: "B" },
        { type: "mcq", question: "The executive body established by the constitution to administer public employees is the ______.", options: ["Public service", "Civil service", "Public Service Commission", "Civil corporation"], correctAnswer: "C" },
        { type: "mcq", question: "For local government elections, local areas are divided into ______.", options: ["Zones", "States", "Constituencies", "Wards"], correctAnswer: "D" },
        { type: "mcq", question: "Local governments can raise funds through ______.", options: ["Property rates", "Income duties", "Import duties", "Company tax"], correctAnswer: "A" },
        { type: "mcq", question: "The first Head of State and Head of Government in Nigeria was ______.", options: ["General J.T.U. Aguiyi Ironsi", "Alhaji Shehu Shagari", "Lord Frederick Lugard", "Alhaji Abubakar Tafawa Balewa"], correctAnswer: "D" },
        { type: "mcq", question: "ECOWAS is ______.", options: ["An inter-ethnic association", "A cultural association", "An economic association", "A political association"], correctAnswer: "C" },
        { type: "mcq", question: "Nigeria belongs to all the following international organizations EXCEPT ______.", options: ["United Nations", "African Union", "OPEC", "NATO"], correctAnswer: "D" },
        { type: "mcq", question: "The rule of law refers to the principle of ______.", options: ["Legality and impartiality", "The supreme power of rulers", "The immunity of judges", "The orderly execution of government policies"], correctAnswer: "A" },
        { type: "mcq", question: "Freedom of speech may be limited if ______.", options: ["Loyalty is not shown to the ruling party", "It endangers the security of the state", "It exposes government wrongdoing", "It embarrasses the judiciary"], correctAnswer: "B" },
        { type: "mcq", question: "Veto power in a presidential system lies with the ______.", options: ["Attorney General", "Chief of Army Staff", "Executive President", "Prime Minister"], correctAnswer: "C" },
        { type: "mcq", question: "Which of the following is supreme in a federal system?", options: ["Judiciary", "Legislature", "Executive", "Constitution"], correctAnswer: "D" },
        { type: "mcq", question: "The programme of a political party is called its ______.", options: ["Manifesto", "Constitution", "Propaganda", "Document"], correctAnswer: "A" },
        { type: "mcq", question: "The Nigerian federal legislature is called the ______.", options: ["Congress", "National Assembly", "Senate", "House of Representatives"], correctAnswer: "B" },
        { type: "mcq", question: "A system that allows private ownership of the means of production is called ______.", options: ["Socialism", "Fascism", "Capitalism", "Communism"], correctAnswer: "C" },
        { type: "mcq", question: "The appointment, promotion and discipline of civil servants are the responsibility of the ______.", options: ["Civil Service Union", "Electoral Commission", "Judicial Service Commission", "Civil Service Commission"], correctAnswer: "D" },
        { type: "mcq", question: "The administrative head of a public corporation is the ______.", options: ["Managing Director", "Secretary", "Board of Directors", "Chairman"], correctAnswer: "A" },
        { type: "mcq", question: "Which of these is NOT a system of government?", options: ["Monarchy", "Anarchy", "Oligarchy", "Socialism"], correctAnswer: "D" },
        { type: "mcq", question: "The laws made by the third tier of government in Nigeria are called ______.", options: ["Bye-laws", "Decrees", "Constitutional laws", "Edicts"], correctAnswer: "A" },
        { type: "mcq", question: "How many members constitute the House of Representatives in Nigeria?", options: ["450", "109", "302", "360"], correctAnswer: "D" },
        { type: "mcq", question: "Which body is responsible for defending Nigeria against external aggression?", options: ["Army", "Civil Defence", "Police", "Politicians"], correctAnswer: "A" },

        { type: "fill", question: "The formation and implementation of policies are the major duties of the __________________.", correctAnswer: "Executive" },
        { type: "fill", question: "Franchise is the political right to __________________.", correctAnswer: "vote and be voted for" },
        { type: "fill", question: "The present Constitution of Nigeria came into operation in __________.", correctAnswer: "1999" },
        { type: "fill", question: "The judiciary is the arm of government that __________________.", correctAnswer: "interprets the law and administers justice" },
        { type: "fill", question: "One function of the judiciary is to __________________.", correctAnswer: "interpret the law" },
        { type: "fill", question: "Another function of the judiciary is to __________________.", correctAnswer: "settle disputes" }
    ]
},

    ]
};

/*
    SUBJECT STREAM RULES
    ----------------------
    Defines which subjects are accessible to each stream.
    "all" means every student in that class can access it.
    "science" and "art" are stream-specific.
    JSS students always get "general" stream which means all subjects.
*/
const subjectStreamMap = {
    "SS1": {
        "Mathematics":                          "all",
        "English Studies":                      "all",
        "Biology":                              "all",
        "Citizenship Education":                "all",
        "Digital Literacy":                     "all",
        "Christian Religious Studies (CRS)":    "art",
        "Physics":                              "science",
        "Chemistry":                            "science",
        "Economics":                            "all",
        "Government":                           "art",
        "Literature in English":                "art"
    },
    "SS2": {
        "Mathematics":                          "all",
        "English Studies":                      "all",
        "Biology":                              "all",
        "Citizenship Education":                "all",
        "Digital Literacy":                     "all",
        "Christian Religious Studies (CRS)":    "art",
        "Physics":                              "science",
        "Chemistry":                            "science",
        "Economics":                            "all",
        "Government":                           "art",
        "Literature in English":                "art"
    }
};


/* ============================================================
   STUDENT REGISTRY
   Admission numbers mapped to student names, per class.
   GGS00011 is the master demo/admin key.
   ============================================================ */
const studentRegistry = {

    "MASTER": {
        "GGS00011": { name: "Admin / Demo", stream: "all" }
    },

    "JSS1": {
        "GGS12336": { name: "Chinaka Maryjane",          stream: "general" },
        "GGS12316": { name: "Chukwuagozie Goodness",     stream: "general" },
        "GGS12310": { name: "Chukwurah Chibuike",        stream: "general" },
        "GGS12373": { name: "Esonwune Ngozi",            stream: "general" },
        "GGS12766": { name: "Torlowei	Alexis ",        stream: "general" },
        "GGS12765": { name: "Azubuike Chinyere ",        stream: "general" },
        "GGS12347": { name: "Francis Emmanuel",          stream: "general" },
        "GGS12344": { name: "Ifeanyichukwu Chioma",      stream: "general" },
        "GGS12348": { name: "Igboneme Chidera",          stream: "general" },
        "GGS12337": { name: "Nwanya Precious",           stream: "general" },
        "GGS12315": { name: "Obi Oluebube",              stream: "general" },
        "GGS12376": { name: "Ofere Samuel",              stream: "general" },
        "GGS12342": { name: "Ogonna Daniel",             stream: "general" },
        "GGS12314": { name: "Ojukwu Esther",             stream: "general" },
        "GGS12312": { name: "Okeke Vivian",              stream: "general" },
        "GGS12685": { name: "Okereke Destiny",           stream: "general" },
        "GGS12374": { name: "Okoli Chimamkpam",          stream: "general" },
        "GGS12313": { name: "Stanley Blessing",          stream: "general" },
        "GGS12311": { name: "Sunday Precious",           stream: "general" },
        "GGS12375": { name: "Udeze Chidalu",             stream: "general" },
        "GGS11112": { name: "Mr Nnamdi",                 stream: "general" },
        "GGS12352": { name: "Ugo Chidera",               stream: "general" },
        "GGS12349": { name: "Ugo Ebube",                 stream: "general" },
        "GGS12338": { name: "Uwaezuoke Annabel",         stream: "general" }
    },

    "JSS2": {
        "GGS12298": { name: "Adetona Jamiu",             stream: "general" },
        "GGS12767": { name: "Akunna Adaeze",             stream: "general" },
        "GGS12286": { name: "Amadi Somtochukwu",         stream: "general" },
        "GGS12304": { name: "Aniukwu Kosisochukwu",      stream: "general" },
        "GGS12293": { name: "Anya Esther",               stream: "general" },
        "GGS12308": { name: "Chime Favour",              stream: "general" },
        "GGS12292": { name: "Ekere Raymond",             stream: "general" },
        "GGS12294": { name: "Emeka Miracle",             stream: "general" },
        "GGS12283": { name: "Emeka-Obi Promise",         stream: "general" },
        "GGS12299": { name: "Ezeukwu Chidera",           stream: "general" },
        "GGS12291": { name: "Ezeukwu Mmesoma",           stream: "general" },
        "GGS12303": { name: "Hilary Pascal",             stream: "general" },
        "GGS12295": { name: "Imo Deborah",               stream: "general" },
        "GGS12290": { name: "Joseph Chidubem",           stream: "general" },
        "GGS12287": { name: "Mbah Adaeze",               stream: "general" },
        "GGS12297": { name: "Michael Chidinma",          stream: "general" },
        "GGS12300": { name: "Nnamah Favour",             stream: "general" },
        "GGS12296": { name: "Nwaeze Chinaza",            stream: "general" },
        "GGS12289": { name: "Ogbu Amanda",               stream: "general" },
        "GGS00000": { name: "Mr Nnamdi",                 stream: "general" },
        "GGS1230888": { name: "Oguchi Chidiuso",           stream: "general" },
        "GGS12284": { name: "Okeke Praise",              stream: "general" },
        "GGS12301": { name: "Okelue Munachi",            stream: "general" },
        "GGS12305": { name: "Okoli Miracle",             stream: "general" },
        "GGS12309": { name: "Okonkwo Miracle",           stream: "general" },
        "GGS12285": { name: "Onyekachi Promise",         stream: "general" }
    },

    "SS1": {
        // Science students
        "GGS12398": { name: "Stanley Dominion",          stream: "science" },
        "GGS12392": { name: "Okebaram Jennifer",         stream: "science" },
        "GGS12394": { name: "Obiakor Francisca",         stream: "science" },
        "GGS12150": { name: "Ilobi Chidera",             stream: "science" },
        "GGS00000": { name: "Mr Nnamdi",                 stream: "art" },
        "GGS12402": { name: "Ezeifeka Johnkennedy",      stream: "science" },
        "GGS12388": { name: "Eze Maryann",               stream: "science" },
        "GGS12386": { name: "Eze Goodluck",              stream: "science" },
        "GGS12382": { name: "Chimezie Charity",          stream: "science" },
        "GGS12401": { name: "Nweke Victoria",            stream: "science" },
        "GGS12764": { name: "Ikeokwu Samuel",            stream: "science" },
        // Art students
        "GGS12149": { name: "Onwuaso Chinenye",          stream: "art" },
        "GGS12391": { name: "Okonkwo Precious",          stream: "art" },
        "GGS12395": { name: "Okoli Precious",            stream: "art" },
        "GGS12397": { name: "Okeke Favour",              stream: "art" },
        "GGS12390": { name: "Nwovu Shedrack",            stream: "art" },
        "GGS12404": { name: "Michael Miracle",           stream: "art" },
        "GGS12389": { name: "Fedrick Ogbuchie",          stream: "art" },
        "GGS12407": { name: "Ejike Emmanuella",          stream: "art" },
        "GGS12763": { name: "Nwakozor Emmanuel",         stream: "art" },
        "GGS12383": { name: "Ebenyi Beatrice",           stream: "art" }
    },

    "SS2": {
        // Science students
        "GGS12714": { name: "Amaechi Ebuka",             stream: "science" },
        "GGS12702": { name: "Aniukwu Chinemerem",        stream: "science" },
        "GGS12703": { name: "Chikaodili Chioma",         stream: "science" },
        "GGS12707": { name: "Ezeabayi Paschal",          stream: "science" },
        "GGS00000": { name: "Mr Nnamdi",                 stream: "science" },
        "GGS12712": { name: "Okeke Chiemerie",           stream: "science" },
        "GGS12713": { name: "Uche Chizoba",              stream: "science" },
        // Art students
        "GGS12704": { name: "Chukwuebuka David",         stream: "art" },
        "GGS12705": { name: "Enuma Chinaemelum",         stream: "art" },
        "GGS12706": { name: "Ewurum Norah",              stream: "art" },
        "GGS12708": { name: "Imo Miracle",               stream: "art" },
        "GGS12709": { name: "John Blessed",              stream: "art" },
        "GGS12710": { name: "Nwaeze Blessing",           stream: "art" }
    }
};


/* ============================================================
   ELEMENT REFERENCES
   ============================================================ */
const classListContainer    = document.getElementById("class-list");
const subjectListContainer  = document.getElementById("subject-list");
const classSection          = document.getElementById("class-selection");
const examSection           = document.getElementById("exam");
const examClassTitle        = document.getElementById("exam-class-title");
const backButton            = document.getElementById("back-button");
const subjectSearchInput    = document.getElementById("subject-search");
const admissionInput        = document.getElementById("admission-input");
const admissionFeedback     = document.getElementById("admission-feedback");
const quizScreen            = document.getElementById("quiz-screen");
const quizSubjectTitle      = document.getElementById("quiz-subject-title");
const quizTimerDisplay      = document.getElementById("quiz-timer");
const questionText          = document.getElementById("question-text");
const questionNavGrid       = document.getElementById("question-nav-grid");
const optionsContainer      = document.getElementById("options-container");
const nextQuestionButton    = document.getElementById("next-question-button");
const prevQuestionButton    = document.getElementById("prev-question-button");
const exitQuizButton        = document.getElementById("exit-quiz-button");
const siteHeader            = document.getElementById("site-header");
const modalOverlay          = document.getElementById("modal-overlay");
const modalMessage          = document.getElementById("modal-message");
const welcomeSection        = document.getElementById("welcome");
const footerEl              = document.querySelector("footer");
const themeToggle           = document.getElementById("theme-toggle");
const connectionStatus      = document.getElementById("connection-status");


/* ============================================================
   QUIZ STATE
   ============================================================ */
let currentQuizQuestions  = [];
let currentQuestionIndex  = 0;
let studentAnswers        = [];
let timeRemaining         = 0;
let timerInterval         = null;
let currentSubjectName    = "";
let currentClassName      = "";
let isNavigating          = false;
let quizInProgress        = false;
let quizStartTime         = null;
let warningsFired         = { fiveMin: false, oneMin: false };
let currentSubjectInfo    = null;
let currentSelectedClass  = "";
let currentStudentName    = "";
let currentAdmissionNumber = "";
let tabSwitchCount        = 0;


/* ============================================================
   UTILITY: shuffleArray
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

/* ============================================================
   UTILITY: generateDeviceToken
   ============================================================ */
function generateDeviceToken() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
let currentDeviceToken = null;


/* ============================================================
   UTILITY: showModal
   ============================================================ */
function showModal(message, onOkCallback, onCancelCallback, onOkLabel, onCancelLabel) {
    modalMessage.textContent = message;

    const box = document.getElementById("modal-box");
    box.style.animation = "none";
    void box.offsetWidth;
    box.style.animation = "";

    modalOverlay.style.display = "flex";

    const currentOkButton     = document.getElementById("modal-ok-button");
    const currentCancelButton = document.getElementById("modal-cancel-button"); 

    const freshOkButton = currentOkButton.cloneNode(true);
    currentOkButton.parentNode.replaceChild(freshOkButton, currentOkButton);

    const freshCancelButton = currentCancelButton.cloneNode(true);
    currentCancelButton.parentNode.replaceChild(freshCancelButton, currentCancelButton);

    if (typeof onCancelCallback === "function") {
        freshCancelButton.style.display = "inline-block";
        freshOkButton.textContent     = onOkLabel    || "Yes";
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
   ============================================================ */
function switchSection(sectionToHide, sectionToShow) {
    if (sectionToHide === classSection) {
        welcomeSection.style.display = "none";
        footerEl.style.display       = "none";
    }
    if (sectionToShow === classSection) {
        welcomeSection.style.display = "block";
        footerEl.style.display       = "block";
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
   UTILITY: validateAdmissionNumber
   Returns student name if valid, null if not.
   ============================================================ */
function validateAdmissionNumber(admissionNumber, className) {
    const upper = admissionNumber.trim().toUpperCase();

    if (studentRegistry["MASTER"][upper]) {
        return studentRegistry["MASTER"][upper]; // returns { name, stream }
    }

    if (studentRegistry[className] && studentRegistry[className][upper]) {
        return studentRegistry[className][upper]; // returns { name, stream }
    }

    return null;
}


/* ============================================================
   UTILITY: Completed exams tracking
   Uses admission number as the unique identifier.
   ============================================================ */
/* ============================================================
   FIREBASE: Exam session tracking (cross-device duplicate guard)
   ------------------------------------------------------------
   Keys are sanitized (Firebase paths can't contain . # $ [ ])
   ============================================================ */
function getSessionKey(admissionNumber, className, subjectName) {
    const raw = admissionNumber.trim().toUpperCase() + "_" + className + "_" + subjectName;
    return raw.replace(/[.#$\[\]\/\s]/g, "_");
}

/* ============================================================
   FIREBASE: Exam session tracking (cross-device duplicate guard)
   ------------------------------------------------------------
   Keys are sanitized (Firebase paths can't contain . # $ [ ])
   ============================================================ */
function checkAndStartExamSession(admissionNumber, className, subjectName, callback) {
    const key = getSessionKey(admissionNumber, className, subjectName);
    const ref = db.ref("examSessions/" + key);

    // transaction() prevents a race condition where two devices
    // both check "empty" at the exact same millisecond and both proceed
    ref.transaction(function (currentData) {
        if (currentData === null) {
            // Nobody has started this yet — claim it now
            return {
                admissionNumber: admissionNumber.trim().toUpperCase(),
                className: className,
                subjectName: subjectName,
                status: "STARTED",
                startedAt: new Date().toISOString()
            };
        }
        // Already exists — don't touch it, abort the transaction
        return; // returning undefined aborts, leaves data unchanged
    }, function (error, committed, snapshot) {
        if (error) {
            console.error("Firebase check failed:", error);
            // Fail-safe: if Firebase itself errors out, we still let
            // the local offline queue handle it rather than blocking a student outright
            callback(true, null);
            return;
        }

        if (committed) {
            // We successfully claimed it — nobody had it before
            callback(true, null);
        } else {
            // Someone else already has a session for this — blocked
            const existing = snapshot.val();
            callback(false, existing);
        }
    });
}

/*
    FUNCTION: markExamSessionCompleted
    ----------------------------------------
    Updates the Firebase record once the exam is actually submitted.
*/
function markExamSessionCompleted(admissionNumber, className, subjectName) {
    const key = getSessionKey(admissionNumber, className, subjectName);
    db.ref("examSessions/" + key).update({
        status: "COMPLETED",
        completedAt: new Date().toISOString()
    });
}


/* ============================================================
   UTILITY: updateProgressBar
   Fills based on answered questions, not current position.
   ============================================================ */
function updateProgressBar() {
    const answeredCount = studentAnswers.filter(isAnswered).length;
    const progress      = (answeredCount / currentQuizQuestions.length) * 100;
    document.getElementById("progress-bar-fill").style.width = progress + "%";
}


/* ============================================================
   UTILITY: lock / unlock subject cards
   ============================================================ */
function lockAllSubjectCards(cards) {
    for (let i = 0; i < cards.length; i++) { cards[i].classList.add("locked"); }
}

function unlockAllSubjectCards(cards) {
    for (let i = 0; i < cards.length; i++) { cards[i].classList.remove("locked"); }
}

/*
    ADMIN UTILITY: releaseExamSession
    ----------------------------------------
    Run this manually from the browser console (F12) if a student's
    session got stuck on "STARTED" and needs to be freed up.
    Example: releaseExamSession("GGS12398", "SS1", "Chemistry")
*/
function releaseExamSession(admissionNumber, className, subjectName) {
    const key = getSessionKey(admissionNumber, className, subjectName);
    db.ref("examSessions/" + key).remove().then(function () {
        console.log("Session released for", admissionNumber, subjectName);
    });
}

/* ============================================================
   OFFLINE PROTECTION
   ============================================================ */
function updateConnectionUI() {
    connectionStatus.style.display = navigator.onLine ? "none" : "flex";
}

updateConnectionUI();
window.addEventListener("online",  function () { updateConnectionUI(); retryPendingResults(); });
window.addEventListener("offline", updateConnectionUI);


function savePendingResult(studentName, admissionNumber, className, subjectName, score, tabSwitches, startText, durationText) {
    let pending = [];
    try {
        const saved = localStorage.getItem("pendingResults");
        pending = saved ? JSON.parse(saved) : [];
    } catch (e) { pending = []; }

    pending.push({ studentName, admissionNumber, className, subjectName, score, tabSwitches, startText, durationText, savedAt: new Date().toISOString() });
    localStorage.setItem("pendingResults", JSON.stringify(pending));
    console.log("Result saved locally (no internet). Will retry when connection returns.");
}


function retryPendingResults() {
    let pending = [];
    try {
        const saved = localStorage.getItem("pendingResults");
        pending = saved ? JSON.parse(saved) : [];
    } catch (e) { return; }

    if (pending.length === 0) return;

    console.log("Connection restored. Retrying " + pending.length + " pending result(s)...");

    const formBaseURL = "https://docs.google.com/forms/d/e/1FAIpQLSeaIiCn-S-zr56SkrEkLxkAVGESvzu9XPnp_kgGw90vFkastg/formResponse";

    for (let i = 0; i < pending.length; i++) {
        const r   = pending[i];
        const img = new Image();
    img.src = formBaseURL +
        "?entry.989513760="  + encodeURIComponent(r.studentName) +
        "&entry.572955960="  + encodeURIComponent(r.admissionNumber) +
        "&entry.649845269="  + encodeURIComponent(r.className) +
        "&entry.1080095985=" + encodeURIComponent(r.subjectName) +
        "&entry.671914243="  + encodeURIComponent(r.score) +
        "&entry.216522547="  + encodeURIComponent(r.tabSwitches) +
        "&entry.1781815021=" + encodeURIComponent(r.startText) +
        "&entry.367340230="  + encodeURIComponent(r.durationText) +
        "&submit=Submit";
        console.log("Retried result for:", r.studentName, r.subjectName);
    }

    localStorage.removeItem("pendingResults");
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
   THEME TOGGLE
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
    themeToggle.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});


/* ============================================================
   FUNCTION: displayClassCards
   ============================================================ */
function displayClassCards() {
    const classNames = Object.keys(examData);
    for (let i = 0; i < classNames.length; i++) {
        const className = classNames[i];
        const card      = document.createElement("div");
        card.className  = "class-card";
        card.textContent = className;
        card.addEventListener("click", function () { showSubjects(className); });
        classListContainer.appendChild(card);
    }
}


/* ============================================================
   FUNCTION: showSubjects
   ============================================================ */
function showSubjects(className) {
    currentSelectedClass = className;
    subjectListContainer.innerHTML  = "";
    subjectSearchInput.value        = "";
    admissionInput.value            = "";
    admissionFeedback.textContent   = "";
    admissionFeedback.className     = "";

    examClassTitle.textContent = "Subjects for " + className;

    const subjects = examData[className];

    for (let i = 0; i < subjects.length; i++) {
        const subjectInfo = subjects[i];
        const subjectCard = document.createElement("div");
        subjectCard.className  = "subject-card locked";
        subjectCard.textContent = subjectInfo.subject;
        // Store which stream this subject belongs to (for filtering later)
        const streamRule = subjectStreamMap[className]
            ? (subjectStreamMap[className][subjectInfo.subject] || "all")
            : "all";
        subjectCard.dataset.stream = streamRule;

        subjectCard.addEventListener("click", function () {

    const entered     = admissionInput.value.trim();
    const studentData = validateAdmissionNumber(entered, className);

    if (!studentData) {
        showModal("Please enter a valid admission number before starting an exam.");
        return;
    }

    // NEW: block access to quiz-based subjects until exam window opens,
    // unless this is the admin/demo key (stream === "all")
    const isAdmin = studentData.stream === "all";

    if (subjectInfo.questions && !isAdmin && !isPracticeSubject(subjectInfo.subject) && !isSubjectOpen(subjectInfo)) {
    const openDate = subjectInfo.openDate ? new Date(subjectInfo.openDate) : EXAM_START_DATE;
    const formattedDate = openDate.toLocaleString("en-GB", {
        weekday: "long", year: "numeric", month: "long", day: "numeric",
        hour: "2-digit", minute: "2-digit"
    });
    showModal(
        "This Exam is not open yet.🔒\n\n" +
        subjectInfo.subject + " will become available on:\n" +
        formattedDate + "\n\nPlease check back then."
    );
    return;
}


    if (!subjectInfo.questions) {
        window.open(subjectInfo.link, "_blank");
        return;
    }

    // Show a quick "checking..." state so the student isn't staring at nothing
    if (isAdmin) {
    // Admin bypasses Firebase session tracking entirely — can retake anytime
    showModal(
        "Please confirm your details before starting:\n\n" +
        "Name: "          + studentData.name      + "\n" +
        "Admission No: "  + entered.toUpperCase() + "\n" +
        "Class: "         + className             + "\n" +
        "Subject: "       + subjectInfo.subject   +
        "\n\nIs this correct?",
        function () {
            startQuiz(subjectInfo, className, studentData.name, entered.toUpperCase());
        },
        function () {},
        "Yes, Start Exam",
        "Go Back, Check Number"
    );
    return;
}

// Show a quick "checking..." state so the student isn't staring at nothing
subjectCard.textContent = "Checking...";

checkAndStartExamSession(entered, className, subjectInfo.subject, function (allowed, existing) {

    subjectCard.textContent = subjectInfo.subject;

    if (!allowed) {
    if (existing && existing.status === "COMPLETED") {
        showModal(
            studentData.name + " has already completed the " +
            subjectInfo.subject + " exam for " + className +
            ". If this is a mistake, please contact your exam supervisor."
        );
        return;
    }

    // Status is STARTED — offer to resume on this device
    const key = getSessionKey(entered, className, subjectInfo.subject);
    db.ref("activeSessions/" + key).once("value").then(function (snap) {
        const saved = snap.val();
        if (!saved) {
            showModal(
                studentData.name + " already started this exam but no progress was found. Please contact your exam supervisor."
            );
            return;
        }

        const elapsedSeconds = Math.floor((new Date() - new Date(saved.startedAt)) / 1000);
        const timeLimitToUse = saved.timeLimitSeconds || subjectInfo.timeLimit;
        const remaining = timeLimitToUse - elapsedSeconds;

        if (remaining <= 0) {
            showModal("Your time for this exam has already expired.");
            markExamSessionCompleted(entered, className, subjectInfo.subject);
            db.ref("activeSessions/" + key).remove();
            return;
        }

        showModal(
            "It looks like " + saved.studentName + " already started this exam on another device.\n\nResume from where you left off?",
        function () {
        warningsFired = { fiveMin: false, oneMin: false };
        isNavigating = false;
        clearInterval(timerInterval);
        
        currentQuizQuestions   = saved.questions;
        studentAnswers         = saved.studentAnswers;
        currentQuestionIndex   = saved.currentQuestionIndex;
        currentClassName       = className;
        currentSubjectName     = subjectInfo.subject;
        currentSubjectInfo     = subjectInfo;
        currentStudentName     = saved.studentName;
        currentAdmissionNumber = entered.toUpperCase();
        quizStartTime          = new Date(saved.startedAt);
        timeRemaining          = remaining;
        quizInProgress         = true;
        tabSwitchCount         = 0;

        quizSubjectTitle.textContent = subjectInfo.subject;
        switchSection(examSection, quizScreen);
        buildQuestionNavPanel();
        renderQuestion();
        updateQuestionNavPanel();
        updateProgressBar();
        startTimer();
        claimDeviceToken();
        saveActiveSessionToFirebase();
        },
            function () {},
            "Yes, Resume",
            "Cancel"
            );
        });
        return;
        }

    // We've claimed the session — safe to proceed
    showModal(
        "Please confirm your details before starting:\n\n" +
        "Name: "          + studentData.name      + "\n" +
        "Admission No: "  + entered.toUpperCase() + "\n" +
        "Class: "         + className             + "\n" +
        "Subject: "       + subjectInfo.subject   +
        "\n\nIs this correct?",
        function () {
            startQuiz(subjectInfo, className, studentData.name, entered.toUpperCase());
        },
        function () {
            const key = getSessionKey(entered, className, subjectInfo.subject);
            db.ref("examSessions/" + key).remove();
        },
        "Yes, Start Exam",
        "Go Back, Check Number"
    );
});
});

        subjectListContainer.appendChild(subjectCard);
    }

    switchSection(classSection, examSection);
    savePageState();
}


/* ============================================================
   EVENT LISTENER: Back button
   ============================================================ */
backButton.addEventListener("click", function () {
    switchSection(examSection, classSection);
});


/* ============================================================
   EVENT LISTENER: Admission number input
   Validates in real time, shows student name, locks/unlocks cards.
   ============================================================ */
admissionInput.addEventListener("input", function () {
    const allSubjectCards = subjectListContainer.querySelectorAll(".subject-card");
    const entered         = admissionInput.value.trim();

    if (entered === "") {
        admissionFeedback.textContent = "";
        admissionFeedback.className   = "";
        // Hide all cards and re-show them (reset any stream filtering)
        for (let i = 0; i < allSubjectCards.length; i++) {
            allSubjectCards[i].style.display = "block";
        }
        lockAllSubjectCards(allSubjectCards);
        return;
    }

    const studentData = validateAdmissionNumber(entered, currentSelectedClass);

    if (studentData) {
        admissionFeedback.textContent = "✓ Welcome, " + studentData.name +
            (studentData.stream !== "general" && studentData.stream !== "all"
                ? " (" + studentData.stream.charAt(0).toUpperCase() + studentData.stream.slice(1) + " student)"
                : "");
        admissionFeedback.className = "valid";

        // Show/hide cards based on student's stream
        for (let i = 0; i < allSubjectCards.length; i++) {
            const cardStream = allSubjectCards[i].dataset.stream || "all";

            if (
                studentData.stream === "all" ||     // admin/master key sees everything
                studentData.stream === "general" ||  // JSS sees everything
                cardStream === "all" ||              // subject is for everyone
                cardStream === studentData.stream    // subject matches student's stream
            ) {
                allSubjectCards[i].style.display = "block";
                allSubjectCards[i].classList.remove("locked");
            } else {
                // Hide subjects that don't belong to this student's stream
                allSubjectCards[i].style.display = "none";
            }
        }
        // NEW: if this student is NOT the admin, re-apply the exam-locked look
        // to any subject that has questions but isn't open yet
    const isAdminUser = studentData.stream === "all";
    for (let i = 0; i < allSubjectCards.length; i++) {
    const card = allSubjectCards[i];
    const subjectName = card.textContent.replace(/\s*\(Opens.*\)$/, "");
    const classSubjects = examData[currentSelectedClass] || [];
    const matchingSubject = classSubjects.find(function (s) { return s.subject === subjectName; });

    if (matchingSubject && matchingSubject.questions && !isAdminUser && !isPracticeSubject(matchingSubject.subject) && !isSubjectOpen(matchingSubject)) {
    card.classList.add("exam-locked");
} else {
    card.classList.remove("exam-locked");
}
}
    } else {
        admissionFeedback.textContent = "✗ Admission number not found for this class.";
        admissionFeedback.className   = "invalid";
        for (let i = 0; i < allSubjectCards.length; i++) {
            allSubjectCards[i].style.display = "block"; // show all but locked
        }
        lockAllSubjectCards(allSubjectCards);
    }
});

/* ============================================================
   EVENT LISTENER: Subject search/filter
   ============================================================ */
subjectSearchInput.addEventListener("input", function () {
    const searchTerm      = subjectSearchInput.value.toLowerCase();
    const allSubjectCards = subjectListContainer.querySelectorAll(".subject-card");
    for (let i = 0; i < allSubjectCards.length; i++) {
        const cardText = allSubjectCards[i].textContent.toLowerCase();
        allSubjectCards[i].style.display = cardText.includes(searchTerm) ? "block" : "none";
    }
});


/* ============================================================
   ANTI-CHEATING: right-click and copy blocked during quiz
   ============================================================ */
quizScreen.addEventListener("contextmenu", function (e) { e.preventDefault(); });
quizScreen.addEventListener("copy",        function (e) { e.preventDefault(); });


/* ============================================================
   ANTI-CHEATING: tab switch detection
   ============================================================ */
document.addEventListener("visibilitychange", function () {
    if (!quizInProgress) return;

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
   FUNCTION: startQuiz
   ============================================================ */
function startQuiz(subjectInfo, className, studentName, admissionNumber) {
    quizInProgress        = true;
    quizStartTime         = new Date();
    warningsFired         = { fiveMin: false, oneMin: false };
    currentClassName      = className;
    currentSubjectName    = subjectInfo.subject;
    currentSubjectInfo    = subjectInfo;
    currentQuestionIndex  = 0;
    isNavigating          = false;
    tabSwitchCount        = 0;
    currentStudentName    = studentName;
    currentAdmissionNumber = admissionNumber;

    const letters = ["A", "B", "C", "D"];

    currentQuizQuestions = shuffleArray(subjectInfo.questions).map(function (q) {

        if (q.type === "fill") {
            return { type: "fill", question: q.question, correctAnswer: q.correctAnswer };
        }

        const originalOptions = q.options.map(function (optionText, idx) {
            return { text: optionText, wasCorrect: letters[idx] === q.correctAnswer };
        });

        const shuffledOptions = shuffleArray(originalOptions);

        let newCorrectLetter = "A";
        for (let i = 0; i < shuffledOptions.length; i++) {
            if (shuffledOptions[i].wasCorrect) { newCorrectLetter = letters[i]; break; }
        }

        return {
            type:          "mcq",
            question:      q.question,
            options:       shuffledOptions.map(function (o) { return o.text; }),
            correctAnswer: newCorrectLetter
        };
    });

    studentAnswers             = new Array(currentQuizQuestions.length).fill(null);
    timeRemaining              = subjectInfo.timeLimit;
    quizSubjectTitle.textContent = subjectInfo.subject;
    currentDeviceToken = generateDeviceToken();
    claimDeviceToken();
    saveActiveSessionToFirebase();

    switchSection(examSection, quizScreen);
    buildQuestionNavPanel();
    renderQuestion();
    startTimer();
}


/* ============================================================
   FUNCTION: buildQuestionNavPanel
   ============================================================ */
function buildQuestionNavPanel() {
    questionNavGrid.innerHTML = "";
    for (let i = 0; i < currentQuizQuestions.length; i++) {
        const btn       = document.createElement("button");
        btn.className   = "question-nav-btn";
        btn.textContent = i + 1;
        btn.addEventListener("click", function () {
            if (isNavigating) return;
            isNavigating         = true;
            currentQuestionIndex = i;
            renderQuestion();
        });
        questionNavGrid.appendChild(btn);
    }
}


/* ============================================================
   FUNCTION: updateQuestionNavPanel
   ============================================================ */
function updateQuestionNavPanel() {
    const allNavBtns = questionNavGrid.querySelectorAll(".question-nav-btn");
    for (let i = 0; i < allNavBtns.length; i++) {
        allNavBtns[i].classList.remove("answered", "current");
        if (i === currentQuestionIndex)    allNavBtns[i].classList.add("current");
        if (isAnswered(studentAnswers[i])) allNavBtns[i].classList.add("answered");
    }
}


/* ============================================================
   FUNCTION: renderQuestion
   ============================================================ */
function renderQuestion() {
    const question = currentQuizQuestions[currentQuestionIndex];
    const letters  = ["A", "B", "C", "D"];

    questionText.textContent =
        "Question " + (currentQuestionIndex + 1) +
        " of "      + currentQuizQuestions.length +
        ": "        + question.question;

    optionsContainer.innerHTML = "";

    const container = document.getElementById("question-container");
    container.classList.remove("question-enter");
    void container.offsetWidth;
    container.classList.add("question-enter");

    if (question.type === "fill") {
        const input       = document.createElement("input");
        input.type        = "text";
        input.id          = "fill-answer-input";
        input.placeholder = "Type your answer here...";

        if (studentAnswers[currentQuestionIndex] !== null) {
            input.value = studentAnswers[currentQuestionIndex];
        }

        input.addEventListener("input", function () {
            const typed = input.value.trim();
            studentAnswers[currentQuestionIndex] = typed === "" ? null : typed;
            updateQuestionNavPanel();
            updateProgressBar();
            saveQuizProgress();
            saveActiveSessionToFirebase();
        });

        optionsContainer.appendChild(input);
        setTimeout(function () { input.focus(); }, 50);

    } else {
        for (let i = 0; i < question.options.length; i++) {
            const optionButton       = document.createElement("button");
            optionButton.className   = "option-button option-enter";
            optionButton.style.animationDelay = (i * 0.06) + "s";
            optionButton.textContent = letters[i] + ". " + question.options[i];

            if (studentAnswers[currentQuestionIndex] === letters[i]) {
                optionButton.classList.add("selected");
                optionButton.style.animationDelay = "0s";
            }

            optionButton.addEventListener("click", function () {
                studentAnswers[currentQuestionIndex] = letters[i];
                const allOptions = optionsContainer.querySelectorAll(".option-button");
                for (let j = 0; j < allOptions.length; j++) {
                    allOptions[j].classList.remove("selected", "option-enter");
                }
                optionButton.classList.add("selected");
                updateQuestionNavPanel();
                updateProgressBar();
                saveQuizProgress();
                saveActiveSessionToFirebase();
            });

            optionsContainer.appendChild(optionButton);
        }
    }

    const isFirst = currentQuestionIndex === 0;
    const isLast  = currentQuestionIndex === currentQuizQuestions.length - 1;

    prevQuestionButton.style.display = isFirst ? "none" : "inline-block";
    nextQuestionButton.textContent   = isLast  ? "Submit" : "Next";

    saveQuizProgress();
    updateQuestionNavPanel();
    updateProgressBar();
    isNavigating = false;
}


/* ============================================================
   EVENT LISTENER: Next / Submit button
   ============================================================ */
nextQuestionButton.addEventListener("click", function () {
    if (isNavigating) return;
    isNavigating = true;

    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
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


/* ============================================================
   EVENT LISTENER: Exit Exam button
   ============================================================ */
exitQuizButton.addEventListener("click", function () {
    showModal(
        "Are you sure you want to exit this exam? Your progress will be lost.",
        function () {
            quizInProgress = false;
            clearInterval(timerInterval);
            try { localStorage.removeItem("examProgress"); } catch (e) {}
            resetPortal();
        },
        function () {},
        "Yes, Exit",
        "Cancel"
    );
});


/* ============================================================
   FUNCTION: startTimer
   ============================================================ */
function startTimer() {
    updateTimerDisplay();

    timerInterval = setInterval(function () {
        if (modalOverlay.style.display === "flex") return;

        // Check if another device has taken over this session
        const key = getSessionKey(currentAdmissionNumber, currentClassName, currentSubjectName);
        db.ref("activeSessions/" + key + "/activeDeviceToken").once("value").then(function (snap) {
            const liveToken = snap.val();
            if (liveToken && currentDeviceToken && liveToken !== currentDeviceToken) {
                clearInterval(timerInterval);
                quizInProgress = false;
                showModal(
                    "This exam session has been resumed on another device. This browser can no longer continue.",
                    function () { resetPortal(); }
                );
            }
        });

        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 300 && !warningsFired.fiveMin) {
            warningsFired.fiveMin = true;
            showModal("⏰ 5 minutes remaining! Please review your answers and submit soon.");
        } else if (timeRemaining <= 60 && !warningsFired.oneMin) {
            warningsFired.oneMin = true;
            showModal("⚠️ Only 1 minute left! Submit your exam now.");
        }

        if (timeRemaining % 5 === 0) { saveQuizProgress(); }
        saveActiveSessionToFirebase();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}


/* ============================================================
   FUNCTION: updateTimerDisplay
   ============================================================ */
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    quizTimerDisplay.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    if (timeRemaining <= 60) {
        quizTimerDisplay.style.color       = "#ff4444";
        quizTimerDisplay.style.borderColor = "#ff4444";
    } else {
        quizTimerDisplay.style.color       = "";
        quizTimerDisplay.style.borderColor = "";
    }
}


/* ============================================================
   FUNCTION: saveQuizProgress
   ============================================================ */
function saveQuizProgress() {
    const progressData = {
        subjectName:      currentSubjectName,
        className:        currentClassName,
        studentName:      currentStudentName,
        admissionNumber:  currentAdmissionNumber,
        questions:        currentQuizQuestions,
        currentQuestionIndex: currentQuestionIndex,
        studentAnswers:   studentAnswers,
        timeRemaining:    timeRemaining,
        startTime:        quizStartTime ? quizStartTime.toISOString() : null
    };
    localStorage.setItem("examProgress", JSON.stringify(progressData));
}


/* ============================================================
   FUNCTION: checkForSavedQuiz
   ============================================================ */
function checkForSavedQuiz() {
    let savedData;
    try { savedData = localStorage.getItem("examProgress"); } catch (e) { return; }
    if (!savedData) return;

    const progress = JSON.parse(savedData);

    currentQuizQuestions   = progress.questions;
    currentQuestionIndex   = progress.currentQuestionIndex;
    studentAnswers         = progress.studentAnswers;
    timeRemaining          = progress.timeRemaining;
    currentSubjectName     = progress.subjectName;
    currentClassName       = progress.className;
    currentStudentName     = progress.studentName    || "";
    currentAdmissionNumber = progress.admissionNumber || "";
    quizStartTime          = progress.startTime ? new Date(progress.startTime) : new Date();

    quizSubjectTitle.textContent = progress.subjectName;

    welcomeSection.style.display = "none";
    footerEl.style.display       = "none";
    classSection.style.display   = "none";
    examSection.style.display    = "none";
    quizScreen.style.display     = "flex";

    buildQuestionNavPanel();
    renderQuestion();
    updateQuestionNavPanel();
    updateProgressBar();
    startTimer();
}


/* ============================================================
   FUNCTION: checkUnansweredAndSubmit
   ============================================================ */
function checkUnansweredAndSubmit() {
    const unanswered = [];
    for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] === null) unanswered.push(i + 1);
    }

    if (unanswered.length === 0) {
        showModal(
            "You have answered all questions. Are you ready to submit your exam?",
            function () { finishQuiz(); },
            function () { isNavigating = false; },
            "Yes, Submit",
            "Cancel"
        );
    } else {
        const questionList = unanswered.join(", ");
        const plural       = unanswered.length === 1 ? "question" : "questions";
        showModal(
            "You have " + unanswered.length + " unanswered " + plural +
            " (Question " + questionList + "). Do you still want to submit?",
            function () { finishQuiz(); },
            function () {
                isNavigating         = true;
                currentQuestionIndex = unanswered[0] - 1;
                renderQuestion();
            },
            "Yes, Submit",
            "Go Back"
        );
    }
}

/*
    SAVE / RESTORE PAGE STATE
    ---------------------------
    Saves which section the student is on + which class was selected,
    so a refresh brings them back to the same place instead of the homepage.
    Only saves the subject-picker state (not the quiz, which already
    has its own crash-recovery via "examProgress").
*/
function savePageState() {
    const state = {
        section:      "exam",
        className:    currentSelectedClass,
        admission:    admissionInput.value.trim()
    };
    sessionStorage.setItem("pageState", JSON.stringify(state));
}

function clearPageState() {
    sessionStorage.removeItem("pageState");
}

function checkForSavedPageState() {
    // Don't restore page state if a quiz is already being resumed
    if (localStorage.getItem("examProgress")) return;

    let state;
    try {
        const saved = sessionStorage.getItem("pageState");
        state = saved ? JSON.parse(saved) : null;
    } catch (e) { return; }

    if (!state || state.section !== "exam") return;

    // Restore the subject picker for the same class
    showSubjects(state.className);

    // Restore the admission number if they'd typed one
    if (state.admission) {
        admissionInput.value = state.admission;
        admissionInput.dispatchEvent(new Event("input")); // triggers validation + unlock
    }
}


/* ============================================================
   FUNCTION: finishQuiz
   ============================================================ */
function finishQuiz() {
    quizInProgress = false;
    clearInterval(timerInterval);
    try { localStorage.removeItem("examProgress"); } catch (e) {}
    if (currentAdmissionNumber.toUpperCase() !== "GGS00011") {
    markExamSessionCompleted(currentAdmissionNumber, currentClassName, currentSubjectName);
    const cleanupKey = getSessionKey(currentAdmissionNumber, currentClassName, currentSubjectName);
    db.ref("activeSessions/" + cleanupKey).remove();
        }

    let rawScore = 0;
    for (let i = 0; i < currentQuizQuestions.length; i++) {
        const question     = currentQuizQuestions[i];
        const studentAnswer = studentAnswers[i];
        if (studentAnswer === null) continue;

        if (question.type === "fill") {
            if (studentAnswer.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase()) rawScore++;
        } else {
            if (studentAnswer === question.correctAnswer) rawScore++;
        }
    }

    const marksPerQuestion = currentSubjectInfo && currentSubjectInfo.marksPerQuestion ? currentSubjectInfo.marksPerQuestion : 1;
    const totalMarks       = currentSubjectInfo && currentSubjectInfo.totalMarks       ? currentSubjectInfo.totalMarks       : currentQuizQuestions.length;
    const totalScore       = rawScore * marksPerQuestion;
    const scoreText        = totalScore + "/" + totalMarks;

    console.log("=== EXAM RESULT ===");
    console.log("Student :",    currentStudentName);
    console.log("Admission:",   currentAdmissionNumber);
    console.log("Class :",      currentClassName);
    console.log("Subject :",    currentSubjectName);
    console.log("Score :",      scoreText);
    console.log("===================");

    submitResultToSheet(currentStudentName, currentAdmissionNumber, currentClassName, currentSubjectName, scoreText, totalScore, totalMarks);
}


/* ============================================================
   FUNCTION: submitResultToSheet
   ============================================================ */
function submitResultToSheet(studentName, admissionNumber, className, subjectName, score, rawScore, totalMarks) {
    const endTime         = new Date();
    const durationMs      = endTime - quizStartTime;
    const durationMinutes = Math.floor(durationMs / 60000);
    const durationSeconds = Math.floor((durationMs % 60000) / 1000);
    const durationText    = durationMinutes + "m " + durationSeconds + "s";

    const startText = quizStartTime.toLocaleString("en-GB", {
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
    });

    console.log("Start time :", startText);
    console.log("Duration   :", durationText);

    // Save to Firebase in an organized structure, alongside the Google Form submission
    saveResultToFirebase(className, admissionNumber, subjectName, {
    studentName: studentName,
    score: rawScore,
    totalMarks: totalMarks,
    tabSwitches: tabSwitchCount,
    startTime: startText,
    duration: durationText,
    submittedAt: new Date().toISOString()
    });

    if (!navigator.onLine) {
        savePendingResult(studentName, admissionNumber, className, subjectName, score, tabSwitchCount, startText, durationText);
        showModal(
            "Your exam answers have been saved, but we couldn't connect to the server right now. " +
            "Your result will be submitted automatically once the connection is restored. " +
            "Please let your exam supervisor know.",
            resetPortal
        );
        return;
    }

    const formBaseURL    = "https://docs.google.com/forms/d/e/1FAIpQLSeaIiCn-S-zr56SkrEkLxkAVGESvzu9XPnp_kgGw90vFkastg/formResponse";
    const submissionURL  = formBaseURL +
    "?entry.989513760="  + encodeURIComponent(studentName)    +
    "&entry.572955960="  + encodeURIComponent(admissionNumber) +
    "&entry.649845269="  + encodeURIComponent(className)       +
    "&entry.1080095985=" + encodeURIComponent(subjectName)     +
    "&entry.671914243="  + encodeURIComponent(score)           +
    "&entry.216522547="  + encodeURIComponent(tabSwitchCount)  +
    "&entry.1781815021=" + encodeURIComponent(startText)       +
    "&entry.367340230="  + encodeURIComponent(durationText)    +
    "&submit=Submit";

    const img = new Image();
    img.src   = submissionURL;

    showModal(
        "Your exam has been submitted successfully. Results will be released by school management.",
        resetPortal
    );
}


/* ============================================================
   FUNCTION: resetPortal
   ============================================================ */
function resetPortal() {
    clearPageState();
    admissionInput.value          = "";
    admissionFeedback.textContent = "";
    admissionFeedback.className   = "";
    subjectSearchInput.value      = "";
    currentQuizQuestions          = [];
    currentQuestionIndex          = 0;
    studentAnswers                = [];
    isNavigating                  = false;
    currentStudentName            = "";
    currentAdmissionNumber        = "";

    quizScreen.style.display = "none";
    switchSection(quizScreen, classSection);
}


/* ============================================================
   PARTICLE BACKGROUND
   ============================================================ */
const particleCanvas = document.getElementById("particle-canvas");
const ctx            = particleCanvas.getContext("2d");

function resizeCanvas() {
    particleCanvas.width  = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles     = [];
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

window.addEventListener("mousemove", function (e) { mouseX = e.clientX; mouseY = e.clientY; });

function animateParticles() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0)                     p.x = particleCanvas.width;
        if (p.x > particleCanvas.width)   p.x = 0;
        if (p.y < 0)                     p.y = particleCanvas.height;
        if (p.y > particleCanvas.height)  p.y = 0;

        const dx       = p.x - mouseX;
        const dy       = p.y - mouseY;
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
            const dx       = particles[i].x - particles[j].x;
            const dy       = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = "rgba(107, 76, 222, " + (1 - distance / 100) * 0.3 + ")";
                ctx.lineWidth   = 1;
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
checkForSavedPageState();
displayClassCards();