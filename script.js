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
        { subject: "Cultural and Creative Arts (CCA)",               link: "https://forms.gle/example" },
        {
    subject: "Entertainment & Sports Quiz",
    timeLimit: 1000,
    totalMarks: 100,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Which club is known as 'The Red Devils'?", options: ["Liverpool", "Arsenal", "Manchester United", "Bayern Munich"], correctAnswer: "C" },
        { type: "mcq", question: "Which country has won the FIFA World Cup five times?", options: ["Germany", "Brazil", "Italy", "Argentina"], correctAnswer: "B" },
        { type: "mcq", question: "A football match normally lasts ______ minutes.", options: ["80", "85", "90", "95"], correctAnswer: "C" },
        { type: "mcq", question: "Which football position is allowed to handle the ball inside the penalty area?", options: ["Defender", "Midfielder", "Goalkeeper", "Striker"], correctAnswer: "C" },
        { type: "mcq", question: "The UEFA Champions League trophy is often nicknamed ______.", options: ["The Silver Star", "Big Cup", "The Big Ears", "Golden Trophy"], correctAnswer: "C" },
        { type: "mcq", question: "Which African country won AFCON in 2013?", options: ["Egypt", "Nigeria", "Cameroon", "Ghana"], correctAnswer: "B" },
        { type: "mcq", question: "A player shown a red card must ______.", options: ["Sit on the bench", "Leave the pitch", "Change jersey", "Take a penalty"], correctAnswer: "B" },
        { type: "mcq", question: "Which club plays its home matches at Camp Nou?", options: ["Real Madrid", "Barcelona", "PSG", "Juventus"], correctAnswer: "B" },
        { type: "mcq", question: "Which country hosted the 2010 FIFA World Cup?", options: ["Brazil", "Germany", "South Africa", "Russia"], correctAnswer: "C" },
        { type: "mcq", question: "Which footballer is nicknamed 'CR7'?", options: ["Kylian Mbappé", "Cristiano Ronaldo", "Kevin De Bruyne", "Neymar"], correctAnswer: "B" },
        { type: "mcq", question: "How many players does each football team have on the pitch at kickoff?", options: ["9", "10", "11", "12"], correctAnswer: "C" },
        { type: "mcq", question: "Which competition is played between European national teams?", options: ["AFCON", "Copa América", "UEFA Euro", "Club World Cup"], correctAnswer: "C" },
        { type: "mcq", question: "Which English club is nicknamed 'The Gunners'?", options: ["Chelsea", "Arsenal", "Everton", "Leicester City"], correctAnswer: "B" },
        { type: "mcq", question: "Which Nigerian footballer won the CAF Player of the Year award in 2023?", options: ["Victor Osimhen", "Ahmed Musa", "Wilfred Ndidi", "Alex Iwobi"], correctAnswer: "A" },
        { type: "mcq", question: "Which color card is shown as a warning in football?", options: ["Blue", "Yellow", "Green", "Black"], correctAnswer: "B" },

        { type: "mcq", question: "Afrobeats originated mainly from which country?", options: ["Kenya", "South Africa", "Nigeria", "Ghana"], correctAnswer: "C" },
        { type: "mcq", question: "Which Nigerian artist released the hit song 'Calm Down'?", options: ["Fireboy DML", "Rema", "Asake", "Burna Boy"], correctAnswer: "B" },
        { type: "mcq", question: "Which instrument usually has black and white keys?", options: ["Drums", "Trumpet", "Piano", "Saxophone"], correctAnswer: "C" },
        { type: "mcq", question: "Which streaming platform is mainly used for listening to music?", options: ["Spotify", "WhatsApp", "Zoom", "Google Maps"], correctAnswer: "A" },
        { type: "mcq", question: "Who is popularly known as the 'African Giant'?", options: ["Davido", "Burna Boy", "Wizkid", "Omah Lay"], correctAnswer: "B" },
        { type: "mcq", question: "Which Nigerian artist is known by the nickname 'Starboy'?", options: ["Wizkid", "Ruger", "Joeboy", "Zinoleesky"], correctAnswer: "A" },
        { type: "mcq", question: "Which music award is presented annually in the United States?", options: ["Oscars", "Grammys", "Emmys", "Ballon d'Or"], correctAnswer: "B" },
        { type: "mcq", question: "Which symbol is commonly used to represent music?", options: ["Heart", "Musical note", "Star", "Triangle"], correctAnswer: "B" },
        { type: "mcq", question: "Which artist released the album 'Made in Lagos'?", options: ["Davido", "Asake", "Wizkid", "Kizz Daniel"], correctAnswer: "C" },
        { type: "mcq", question: "Which Nigerian singer is famous for the song 'Buga'?", options: ["Rema", "Kizz Daniel", "Spyro", "Seyi Vibez"], correctAnswer: "B" },

        { type: "mcq", question: "Which superhero is also known as the Dark Knight?", options: ["Iron Man", "Batman", "Superman", "Flash"], correctAnswer: "B" },
        { type: "mcq", question: "Which fictional wizard attends Hogwarts?", options: ["Harry Potter", "Percy Jackson", "Frodo", "Luke Skywalker"], correctAnswer: "A" },
        { type: "mcq", question: "Which movie franchise features Dominic Toretto?", options: ["Mission Impossible", "Fast & Furious", "Transformers", "John Wick"], correctAnswer: "B" },
        { type: "mcq", question: "Which Marvel hero carries a shield?", options: ["Thor", "Captain America", "Hulk", "Spider-Man"], correctAnswer: "B" },
        { type: "mcq", question: "The yellow characters called Minions first appeared in which movie series?", options: ["Toy Story", "Despicable Me", "Cars", "Frozen"], correctAnswer: "B" },

        { type: "mcq", question: "Which app is mainly used for short-form videos?", options: ["Excel", "TikTok", "Word", "Chrome"], correctAnswer: "B" },
        { type: "mcq", question: "ChatGPT is an example of a(n) ______.", options: ["Operating system", "Artificial Intelligence", "Web browser", "Antivirus"], correctAnswer: "B" },
        { type: "mcq", question: "Which company develops Android?", options: ["Apple", "Microsoft", "Google", "Samsung"], correctAnswer: "C" },
        { type: "mcq", question: "Which device is mainly used to take selfies?", options: ["Printer", "Smartphone", "Router", "Projector"], correctAnswer: "B" },
        { type: "mcq", question: "Which social media platform is owned by Meta?", options: ["TikTok", "Instagram", "Snapchat", "Telegram"], correctAnswer: "B" },

        { type: "mcq", question: "Which game lets players build with blocks and survive in a pixel world?", options: ["Minecraft", "Roblox", "PUBG", "FC 25"], correctAnswer: "A" },
        { type: "mcq", question: "In EA Sports FC, the main sport featured is ______.", options: ["Basketball", "Cricket", "Football", "Tennis"], correctAnswer: "C" },
        { type: "mcq", question: "Which battle royale game begins with players jumping from an airplane?", options: ["Candy Crush", "PUBG", "Subway Surfers", "Temple Run"], correctAnswer: "B" },
        { type: "mcq", question: "Which company created the PlayStation?", options: ["Microsoft", "Sony", "Nintendo", "Dell"], correctAnswer: "B" },
        { type: "mcq", question: "Roblox allows users to ______.", options: ["Create and play games", "Edit videos only", "Write essays", "Watch TV channels"], correctAnswer: "A" },

        { type: "fill", question: "The nickname of Nigeria's national football team is the Super __________.", correctAnswer: "Eagles" },
        { type: "fill", question: "The home stadium of FC Barcelona is __________ Nou.", correctAnswer: "Camp" },
        { type: "fill", question: "The music award known as the Grammys is presented every __________.", correctAnswer: "year" },
        { type: "fill", question: "The fictional city protected by Batman is __________ City.", correctAnswer: "Gotham" },
        { type: "fill", question: "The red play button is the logo of __________.", correctAnswer: "YouTube" },
        { type: "fill", question: "The green messaging app owned by Meta is __________.", correctAnswer: "WhatsApp" },
        { type: "fill", question: "Minecraft was originally created by __________.", correctAnswer: "Mojang" },
        { type: "fill", question: "The captain of a football team usually wears an __________.", correctAnswer: "armband" },
        { type: "fill", question: "The Nigerian currency is the __________.", correctAnswer: "Naira" },
        { type: "fill", question: "The world's largest video-sharing platform is __________.", correctAnswer: "YouTube" }
    ]
}
    ],

    "JSS2": [
        { subject: "Mathematics",                                    link: "https://forms.gle/7URWF8ysHXk2aSNL6" },
        { subject: "English Language",                               link: "https://forms.gle/example" },
        { subject: "Information and Communication Technology (ICT)", link: "https://forms.gle/example" },
        { subject: "Physical and Health Education (PHE)",            link: "https://forms.gle/example" },
        { subject: "Literature in English",                          link: "https://forms.gle/example" },
        { subject: "Integrated Science",                             link: "https://forms.gle/example" },
        { subject: "History",                                        link: "https://forms.gle/example" },
        { subject: "Citizenship Education",                          link: "https://forms.gle/example" },
        { subject: "Christian Religious Studies (CRS)",              link: "https://forms.gle/example" },
        { subject: "Cultural and Creative Arts (CCA)",               link: "https://forms.gle/example" },
        {
    subject: "Entertainment & Sports Quiz",
    timeLimit: 1000,
    totalMarks: 100,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Which club is known as 'The Red Devils'?", options: ["Liverpool", "Arsenal", "Manchester United", "Bayern Munich"], correctAnswer: "C" },
        { type: "mcq", question: "Which country has won the FIFA World Cup five times?", options: ["Germany", "Brazil", "Italy", "Argentina"], correctAnswer: "B" },
        { type: "mcq", question: "A football match normally lasts ______ minutes.", options: ["80", "85", "90", "95"], correctAnswer: "C" },
        { type: "mcq", question: "Which football position is allowed to handle the ball inside the penalty area?", options: ["Defender", "Midfielder", "Goalkeeper", "Striker"], correctAnswer: "C" },
        { type: "mcq", question: "The UEFA Champions League trophy is often nicknamed ______.", options: ["The Silver Star", "Big Cup", "The Big Ears", "Golden Trophy"], correctAnswer: "C" },
        { type: "mcq", question: "Which African country won AFCON in 2013?", options: ["Egypt", "Nigeria", "Cameroon", "Ghana"], correctAnswer: "B" },
        { type: "mcq", question: "A player shown a red card must ______.", options: ["Sit on the bench", "Leave the pitch", "Change jersey", "Take a penalty"], correctAnswer: "B" },
        { type: "mcq", question: "Which club plays its home matches at Camp Nou?", options: ["Real Madrid", "Barcelona", "PSG", "Juventus"], correctAnswer: "B" },
        { type: "mcq", question: "Which country hosted the 2010 FIFA World Cup?", options: ["Brazil", "Germany", "South Africa", "Russia"], correctAnswer: "C" },
        { type: "mcq", question: "Which footballer is nicknamed 'CR7'?", options: ["Kylian Mbappé", "Cristiano Ronaldo", "Kevin De Bruyne", "Neymar"], correctAnswer: "B" },
        { type: "mcq", question: "How many players does each football team have on the pitch at kickoff?", options: ["9", "10", "11", "12"], correctAnswer: "C" },
        { type: "mcq", question: "Which competition is played between European national teams?", options: ["AFCON", "Copa América", "UEFA Euro", "Club World Cup"], correctAnswer: "C" },
        { type: "mcq", question: "Which English club is nicknamed 'The Gunners'?", options: ["Chelsea", "Arsenal", "Everton", "Leicester City"], correctAnswer: "B" },
        { type: "mcq", question: "Which Nigerian footballer won the CAF Player of the Year award in 2023?", options: ["Victor Osimhen", "Ahmed Musa", "Wilfred Ndidi", "Alex Iwobi"], correctAnswer: "A" },
        { type: "mcq", question: "Which color card is shown as a warning in football?", options: ["Blue", "Yellow", "Green", "Black"], correctAnswer: "B" },

        { type: "mcq", question: "Afrobeats originated mainly from which country?", options: ["Kenya", "South Africa", "Nigeria", "Ghana"], correctAnswer: "C" },
        { type: "mcq", question: "Which Nigerian artist released the hit song 'Calm Down'?", options: ["Fireboy DML", "Rema", "Asake", "Burna Boy"], correctAnswer: "B" },
        { type: "mcq", question: "Which instrument usually has black and white keys?", options: ["Drums", "Trumpet", "Piano", "Saxophone"], correctAnswer: "C" },
        { type: "mcq", question: "Which streaming platform is mainly used for listening to music?", options: ["Spotify", "WhatsApp", "Zoom", "Google Maps"], correctAnswer: "A" },
        { type: "mcq", question: "Who is popularly known as the 'African Giant'?", options: ["Davido", "Burna Boy", "Wizkid", "Omah Lay"], correctAnswer: "B" },
        { type: "mcq", question: "Which Nigerian artist is known by the nickname 'Starboy'?", options: ["Wizkid", "Ruger", "Joeboy", "Zinoleesky"], correctAnswer: "A" },
        { type: "mcq", question: "Which music award is presented annually in the United States?", options: ["Oscars", "Grammys", "Emmys", "Ballon d'Or"], correctAnswer: "B" },
        { type: "mcq", question: "Which symbol is commonly used to represent music?", options: ["Heart", "Musical note", "Star", "Triangle"], correctAnswer: "B" },
        { type: "mcq", question: "Which artist released the album 'Made in Lagos'?", options: ["Davido", "Asake", "Wizkid", "Kizz Daniel"], correctAnswer: "C" },
        { type: "mcq", question: "Which Nigerian singer is famous for the song 'Buga'?", options: ["Rema", "Kizz Daniel", "Spyro", "Seyi Vibez"], correctAnswer: "B" },

        { type: "mcq", question: "Which superhero is also known as the Dark Knight?", options: ["Iron Man", "Batman", "Superman", "Flash"], correctAnswer: "B" },
        { type: "mcq", question: "Which fictional wizard attends Hogwarts?", options: ["Harry Potter", "Percy Jackson", "Frodo", "Luke Skywalker"], correctAnswer: "A" },
        { type: "mcq", question: "Which movie franchise features Dominic Toretto?", options: ["Mission Impossible", "Fast & Furious", "Transformers", "John Wick"], correctAnswer: "B" },
        { type: "mcq", question: "Which Marvel hero carries a shield?", options: ["Thor", "Captain America", "Hulk", "Spider-Man"], correctAnswer: "B" },
        { type: "mcq", question: "The yellow characters called Minions first appeared in which movie series?", options: ["Toy Story", "Despicable Me", "Cars", "Frozen"], correctAnswer: "B" },

        { type: "mcq", question: "Which app is mainly used for short-form videos?", options: ["Excel", "TikTok", "Word", "Chrome"], correctAnswer: "B" },
        { type: "mcq", question: "ChatGPT is an example of a(n) ______.", options: ["Operating system", "Artificial Intelligence", "Web browser", "Antivirus"], correctAnswer: "B" },
        { type: "mcq", question: "Which company develops Android?", options: ["Apple", "Microsoft", "Google", "Samsung"], correctAnswer: "C" },
        { type: "mcq", question: "Which device is mainly used to take selfies?", options: ["Printer", "Smartphone", "Router", "Projector"], correctAnswer: "B" },
        { type: "mcq", question: "Which social media platform is owned by Meta?", options: ["TikTok", "Instagram", "Snapchat", "Telegram"], correctAnswer: "B" },

        { type: "mcq", question: "Which game lets players build with blocks and survive in a pixel world?", options: ["Minecraft", "Roblox", "PUBG", "FC 25"], correctAnswer: "A" },
        { type: "mcq", question: "In EA Sports FC, the main sport featured is ______.", options: ["Basketball", "Cricket", "Football", "Tennis"], correctAnswer: "C" },
        { type: "mcq", question: "Which battle royale game begins with players jumping from an airplane?", options: ["Candy Crush", "PUBG", "Subway Surfers", "Temple Run"], correctAnswer: "B" },
        { type: "mcq", question: "Which company created the PlayStation?", options: ["Microsoft", "Sony", "Nintendo", "Dell"], correctAnswer: "B" },
        { type: "mcq", question: "Roblox allows users to ______.", options: ["Create and play games", "Edit videos only", "Write essays", "Watch TV channels"], correctAnswer: "A" },

        { type: "fill", question: "The nickname of Nigeria's national football team is the Super __________.", correctAnswer: "Eagles" },
        { type: "fill", question: "The home stadium of FC Barcelona is __________ Nou.", correctAnswer: "Camp" },
        { type: "fill", question: "The music award known as the Grammys is presented every __________.", correctAnswer: "year" },
        { type: "fill", question: "The fictional city protected by Batman is __________ City.", correctAnswer: "Gotham" },
        { type: "fill", question: "The red play button is the logo of __________.", correctAnswer: "YouTube" },
        { type: "fill", question: "The green messaging app owned by Meta is __________.", correctAnswer: "WhatsApp" },
        { type: "fill", question: "Minecraft was originally created by __________.", correctAnswer: "Mojang" },
        { type: "fill", question: "The captain of a football team usually wears an __________.", correctAnswer: "armband" },
        { type: "fill", question: "The Nigerian currency is the __________.", correctAnswer: "Naira" },
        { type: "fill", question: "The world's largest video-sharing platform is __________.", correctAnswer: "YouTube" }
    ]
}
    ],

    "SS1": [
        { subject: "Mathematics",                       link: "https://forms.gle/example" },
        { subject: "Mathematics",                       link: "https://forms.gle/7URWF8ysHXk2aSNL6" },
        { subject: "Literature in English",             link: "https://forms.gle/example" },
        { subject: "Biology",                           link: "https://forms.gle/example" },
        { subject: "Biology",                           link: "https://forms.gle/example" },
        { subject: "Digital Literacy",                  link: "https://forms.gle/example" },
        { subject: "Citizenship Education",             link: "https://forms.gle/example" },
        { subject: "Christian Religious Studies (CRS)", link: "https://forms.gle/example" },
        { subject: "Physics",                           link: "https://forms.gle/example" },
        { subject: "Chemistry",                         link: "https://forms.gle/example" },
        { subject: "Economics",                         link: "https://forms.gle/example" },
        { subject: "Government",                        link: "https://forms.gle/example" },
        {
    subject: "Entertainment & Sports Quiz",
    timeLimit: 1000,
    totalMarks: 100,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Which club is known as 'The Red Devils'?", options: ["Liverpool", "Arsenal", "Manchester United", "Bayern Munich"], correctAnswer: "C" },
        { type: "mcq", question: "Which country has won the FIFA World Cup five times?", options: ["Germany", "Brazil", "Italy", "Argentina"], correctAnswer: "B" },
        { type: "mcq", question: "A football match normally lasts ______ minutes.", options: ["80", "85", "90", "95"], correctAnswer: "C" },
        { type: "mcq", question: "Which football position is allowed to handle the ball inside the penalty area?", options: ["Defender", "Midfielder", "Goalkeeper", "Striker"], correctAnswer: "C" },
        { type: "mcq", question: "The UEFA Champions League trophy is often nicknamed ______.", options: ["The Silver Star", "Big Cup", "The Big Ears", "Golden Trophy"], correctAnswer: "C" },
        { type: "mcq", question: "Which African country won AFCON in 2013?", options: ["Egypt", "Nigeria", "Cameroon", "Ghana"], correctAnswer: "B" },
        { type: "mcq", question: "A player shown a red card must ______.", options: ["Sit on the bench", "Leave the pitch", "Change jersey", "Take a penalty"], correctAnswer: "B" },
        { type: "mcq", question: "Which club plays its home matches at Camp Nou?", options: ["Real Madrid", "Barcelona", "PSG", "Juventus"], correctAnswer: "B" },
        { type: "mcq", question: "Which country hosted the 2010 FIFA World Cup?", options: ["Brazil", "Germany", "South Africa", "Russia"], correctAnswer: "C" },
        { type: "mcq", question: "Which footballer is nicknamed 'CR7'?", options: ["Kylian Mbappé", "Cristiano Ronaldo", "Kevin De Bruyne", "Neymar"], correctAnswer: "B" },
        { type: "mcq", question: "How many players does each football team have on the pitch at kickoff?", options: ["9", "10", "11", "12"], correctAnswer: "C" },
        { type: "mcq", question: "Which competition is played between European national teams?", options: ["AFCON", "Copa América", "UEFA Euro", "Club World Cup"], correctAnswer: "C" },
        { type: "mcq", question: "Which English club is nicknamed 'The Gunners'?", options: ["Chelsea", "Arsenal", "Everton", "Leicester City"], correctAnswer: "B" },
        { type: "mcq", question: "Which Nigerian footballer won the CAF Player of the Year award in 2023?", options: ["Victor Osimhen", "Ahmed Musa", "Wilfred Ndidi", "Alex Iwobi"], correctAnswer: "A" },
        { type: "mcq", question: "Which color card is shown as a warning in football?", options: ["Blue", "Yellow", "Green", "Black"], correctAnswer: "B" },

        { type: "mcq", question: "Afrobeats originated mainly from which country?", options: ["Kenya", "South Africa", "Nigeria", "Ghana"], correctAnswer: "C" },
        { type: "mcq", question: "Which Nigerian artist released the hit song 'Calm Down'?", options: ["Fireboy DML", "Rema", "Asake", "Burna Boy"], correctAnswer: "B" },
        { type: "mcq", question: "Which instrument usually has black and white keys?", options: ["Drums", "Trumpet", "Piano", "Saxophone"], correctAnswer: "C" },
        { type: "mcq", question: "Which streaming platform is mainly used for listening to music?", options: ["Spotify", "WhatsApp", "Zoom", "Google Maps"], correctAnswer: "A" },
        { type: "mcq", question: "Who is popularly known as the 'African Giant'?", options: ["Davido", "Burna Boy", "Wizkid", "Omah Lay"], correctAnswer: "B" },
        { type: "mcq", question: "Which Nigerian artist is known by the nickname 'Starboy'?", options: ["Wizkid", "Ruger", "Joeboy", "Zinoleesky"], correctAnswer: "A" },
        { type: "mcq", question: "Which music award is presented annually in the United States?", options: ["Oscars", "Grammys", "Emmys", "Ballon d'Or"], correctAnswer: "B" },
        { type: "mcq", question: "Which symbol is commonly used to represent music?", options: ["Heart", "Musical note", "Star", "Triangle"], correctAnswer: "B" },
        { type: "mcq", question: "Which artist released the album 'Made in Lagos'?", options: ["Davido", "Asake", "Wizkid", "Kizz Daniel"], correctAnswer: "C" },
        { type: "mcq", question: "Which Nigerian singer is famous for the song 'Buga'?", options: ["Rema", "Kizz Daniel", "Spyro", "Seyi Vibez"], correctAnswer: "B" },

        { type: "mcq", question: "Which superhero is also known as the Dark Knight?", options: ["Iron Man", "Batman", "Superman", "Flash"], correctAnswer: "B" },
        { type: "mcq", question: "Which fictional wizard attends Hogwarts?", options: ["Harry Potter", "Percy Jackson", "Frodo", "Luke Skywalker"], correctAnswer: "A" },
        { type: "mcq", question: "Which movie franchise features Dominic Toretto?", options: ["Mission Impossible", "Fast & Furious", "Transformers", "John Wick"], correctAnswer: "B" },
        { type: "mcq", question: "Which Marvel hero carries a shield?", options: ["Thor", "Captain America", "Hulk", "Spider-Man"], correctAnswer: "B" },
        { type: "mcq", question: "The yellow characters called Minions first appeared in which movie series?", options: ["Toy Story", "Despicable Me", "Cars", "Frozen"], correctAnswer: "B" },

        { type: "mcq", question: "Which app is mainly used for short-form videos?", options: ["Excel", "TikTok", "Word", "Chrome"], correctAnswer: "B" },
        { type: "mcq", question: "ChatGPT is an example of a(n) ______.", options: ["Operating system", "Artificial Intelligence", "Web browser", "Antivirus"], correctAnswer: "B" },
        { type: "mcq", question: "Which company develops Android?", options: ["Apple", "Microsoft", "Google", "Samsung"], correctAnswer: "C" },
        { type: "mcq", question: "Which device is mainly used to take selfies?", options: ["Printer", "Smartphone", "Router", "Projector"], correctAnswer: "B" },
        { type: "mcq", question: "Which social media platform is owned by Meta?", options: ["TikTok", "Instagram", "Snapchat", "Telegram"], correctAnswer: "B" },

        { type: "mcq", question: "Which game lets players build with blocks and survive in a pixel world?", options: ["Minecraft", "Roblox", "PUBG", "FC 25"], correctAnswer: "A" },
        { type: "mcq", question: "In EA Sports FC, the main sport featured is ______.", options: ["Basketball", "Cricket", "Football", "Tennis"], correctAnswer: "C" },
        { type: "mcq", question: "Which battle royale game begins with players jumping from an airplane?", options: ["Candy Crush", "PUBG", "Subway Surfers", "Temple Run"], correctAnswer: "B" },
        { type: "mcq", question: "Which company created the PlayStation?", options: ["Microsoft", "Sony", "Nintendo", "Dell"], correctAnswer: "B" },
        { type: "mcq", question: "Roblox allows users to ______.", options: ["Create and play games", "Edit videos only", "Write essays", "Watch TV channels"], correctAnswer: "A" },

        { type: "fill", question: "The nickname of Nigeria's national football team is the Super __________.", correctAnswer: "Eagles" },
        { type: "fill", question: "The home stadium of FC Barcelona is __________ Nou.", correctAnswer: "Camp" },
        { type: "fill", question: "The music award known as the Grammys is presented every __________.", correctAnswer: "year" },
        { type: "fill", question: "The fictional city protected by Batman is __________ City.", correctAnswer: "Gotham" },
        { type: "fill", question: "The red play button is the logo of __________.", correctAnswer: "YouTube" },
        { type: "fill", question: "The green messaging app owned by Meta is __________.", correctAnswer: "WhatsApp" },
        { type: "fill", question: "Minecraft was originally created by __________.", correctAnswer: "Mojang" },
        { type: "fill", question: "The captain of a football team usually wears an __________.", correctAnswer: "armband" },
        { type: "fill", question: "The Nigerian currency is the __________.", correctAnswer: "Naira" },
        { type: "fill", question: "The world's largest video-sharing platform is __________.", correctAnswer: "YouTube" }
    ]
}
    ],

    "SS2": [
        { subject: "Mathematics",                       link: "https://forms.gle/example" },
        { subject: "English Language",                  link: "https://forms.gle/example" },
        { subject: "Literature in English",             link: "https://forms.gle/example" },
        { subject: "Digital Literacy",                  link: "https://forms.gle/example" },
        { subject: "Biology",                           link: "https://forms.gle/example" },
        { subject: "History",                           link: "https://forms.gle/example" },
        { subject: "Citizenship Education",             link: "https://forms.gle/example" },
        { subject: "Christian Religious Studies (CRS)", link: "https://forms.gle/example" },
        { subject: "Physics",                           link: "https://forms.gle/example" },
        { subject: "Chemistry",                         link: "https://forms.gle/example" },
        { subject: "Economics",                         link: "https://forms.gle/example" },
        { subject: "Government",                        link: "https://forms.gle/example" },
        {
    subject: "Entertainment & Sports Quiz",
    timeLimit: 1000,
    totalMarks: 100,
    marksPerQuestion: 2,
    questions: [
        { type: "mcq", question: "Which club is known as 'The Red Devils'?", options: ["Liverpool", "Arsenal", "Manchester United", "Bayern Munich"], correctAnswer: "C" },
        { type: "mcq", question: "Which country has won the FIFA World Cup five times?", options: ["Germany", "Brazil", "Italy", "Argentina"], correctAnswer: "B" },
        { type: "mcq", question: "A football match normally lasts ______ minutes.", options: ["80", "85", "90", "95"], correctAnswer: "C" },
        { type: "mcq", question: "Which football position is allowed to handle the ball inside the penalty area?", options: ["Defender", "Midfielder", "Goalkeeper", "Striker"], correctAnswer: "C" },
        { type: "mcq", question: "The UEFA Champions League trophy is often nicknamed ______.", options: ["The Silver Star", "Big Cup", "The Big Ears", "Golden Trophy"], correctAnswer: "C" },
        { type: "mcq", question: "Which African country won AFCON in 2013?", options: ["Egypt", "Nigeria", "Cameroon", "Ghana"], correctAnswer: "B" },
        { type: "mcq", question: "A player shown a red card must ______.", options: ["Sit on the bench", "Leave the pitch", "Change jersey", "Take a penalty"], correctAnswer: "B" },
        { type: "mcq", question: "Which club plays its home matches at Camp Nou?", options: ["Real Madrid", "Barcelona", "PSG", "Juventus"], correctAnswer: "B" },
        { type: "mcq", question: "Which country hosted the 2010 FIFA World Cup?", options: ["Brazil", "Germany", "South Africa", "Russia"], correctAnswer: "C" },
        { type: "mcq", question: "Which footballer is nicknamed 'CR7'?", options: ["Kylian Mbappé", "Cristiano Ronaldo", "Kevin De Bruyne", "Neymar"], correctAnswer: "B" },
        { type: "mcq", question: "How many players does each football team have on the pitch at kickoff?", options: ["9", "10", "11", "12"], correctAnswer: "C" },
        { type: "mcq", question: "Which competition is played between European national teams?", options: ["AFCON", "Copa América", "UEFA Euro", "Club World Cup"], correctAnswer: "C" },
        { type: "mcq", question: "Which English club is nicknamed 'The Gunners'?", options: ["Chelsea", "Arsenal", "Everton", "Leicester City"], correctAnswer: "B" },
        { type: "mcq", question: "Which Nigerian footballer won the CAF Player of the Year award in 2023?", options: ["Victor Osimhen", "Ahmed Musa", "Wilfred Ndidi", "Alex Iwobi"], correctAnswer: "A" },
        { type: "mcq", question: "Which color card is shown as a warning in football?", options: ["Blue", "Yellow", "Green", "Black"], correctAnswer: "B" },

        { type: "mcq", question: "Afrobeats originated mainly from which country?", options: ["Kenya", "South Africa", "Nigeria", "Ghana"], correctAnswer: "C" },
        { type: "mcq", question: "Which Nigerian artist released the hit song 'Calm Down'?", options: ["Fireboy DML", "Rema", "Asake", "Burna Boy"], correctAnswer: "B" },
        { type: "mcq", question: "Which instrument usually has black and white keys?", options: ["Drums", "Trumpet", "Piano", "Saxophone"], correctAnswer: "C" },
        { type: "mcq", question: "Which streaming platform is mainly used for listening to music?", options: ["Spotify", "WhatsApp", "Zoom", "Google Maps"], correctAnswer: "A" },
        { type: "mcq", question: "Who is popularly known as the 'African Giant'?", options: ["Davido", "Burna Boy", "Wizkid", "Omah Lay"], correctAnswer: "B" },
        { type: "mcq", question: "Which Nigerian artist is known by the nickname 'Starboy'?", options: ["Wizkid", "Ruger", "Joeboy", "Zinoleesky"], correctAnswer: "A" },
        { type: "mcq", question: "Which music award is presented annually in the United States?", options: ["Oscars", "Grammys", "Emmys", "Ballon d'Or"], correctAnswer: "B" },
        { type: "mcq", question: "Which symbol is commonly used to represent music?", options: ["Heart", "Musical note", "Star", "Triangle"], correctAnswer: "B" },
        { type: "mcq", question: "Which artist released the album 'Made in Lagos'?", options: ["Davido", "Asake", "Wizkid", "Kizz Daniel"], correctAnswer: "C" },
        { type: "mcq", question: "Which Nigerian singer is famous for the song 'Buga'?", options: ["Rema", "Kizz Daniel", "Spyro", "Seyi Vibez"], correctAnswer: "B" },

        { type: "mcq", question: "Which superhero is also known as the Dark Knight?", options: ["Iron Man", "Batman", "Superman", "Flash"], correctAnswer: "B" },
        { type: "mcq", question: "Which fictional wizard attends Hogwarts?", options: ["Harry Potter", "Percy Jackson", "Frodo", "Luke Skywalker"], correctAnswer: "A" },
        { type: "mcq", question: "Which movie franchise features Dominic Toretto?", options: ["Mission Impossible", "Fast & Furious", "Transformers", "John Wick"], correctAnswer: "B" },
        { type: "mcq", question: "Which Marvel hero carries a shield?", options: ["Thor", "Captain America", "Hulk", "Spider-Man"], correctAnswer: "B" },
        { type: "mcq", question: "The yellow characters called Minions first appeared in which movie series?", options: ["Toy Story", "Despicable Me", "Cars", "Frozen"], correctAnswer: "B" },

        { type: "mcq", question: "Which app is mainly used for short-form videos?", options: ["Excel", "TikTok", "Word", "Chrome"], correctAnswer: "B" },
        { type: "mcq", question: "ChatGPT is an example of a(n) ______.", options: ["Operating system", "Artificial Intelligence", "Web browser", "Antivirus"], correctAnswer: "B" },
        { type: "mcq", question: "Which company develops Android?", options: ["Apple", "Microsoft", "Google", "Samsung"], correctAnswer: "C" },
        { type: "mcq", question: "Which device is mainly used to take selfies?", options: ["Printer", "Smartphone", "Router", "Projector"], correctAnswer: "B" },
        { type: "mcq", question: "Which social media platform is owned by Meta?", options: ["TikTok", "Instagram", "Snapchat", "Telegram"], correctAnswer: "B" },

        { type: "mcq", question: "Which game lets players build with blocks and survive in a pixel world?", options: ["Minecraft", "Roblox", "PUBG", "FC 25"], correctAnswer: "A" },
        { type: "mcq", question: "In EA Sports FC, the main sport featured is ______.", options: ["Basketball", "Cricket", "Football", "Tennis"], correctAnswer: "C" },
        { type: "mcq", question: "Which battle royale game begins with players jumping from an airplane?", options: ["Candy Crush", "PUBG", "Subway Surfers", "Temple Run"], correctAnswer: "B" },
        { type: "mcq", question: "Which company created the PlayStation?", options: ["Microsoft", "Sony", "Nintendo", "Dell"], correctAnswer: "B" },
        { type: "mcq", question: "Roblox allows users to ______.", options: ["Create and play games", "Edit videos only", "Write essays", "Watch TV channels"], correctAnswer: "A" },

        { type: "fill", question: "The nickname of Nigeria's national football team is the Super __________.", correctAnswer: "Eagles" },
        { type: "fill", question: "The home stadium of FC Barcelona is __________ Nou.", correctAnswer: "Camp" },
        { type: "fill", question: "The music award known as the Grammys is presented every __________.", correctAnswer: "year" },
        { type: "fill", question: "The fictional city protected by Batman is __________ City.", correctAnswer: "Gotham" },
        { type: "fill", question: "The red play button is the logo of __________.", correctAnswer: "YouTube" },
        { type: "fill", question: "The green messaging app owned by Meta is __________.", correctAnswer: "WhatsApp" },
        { type: "fill", question: "Minecraft was originally created by __________.", correctAnswer: "Mojang" },
        { type: "fill", question: "The captain of a football team usually wears an __________.", correctAnswer: "armband" },
        { type: "fill", question: "The Nigerian currency is the __________.", correctAnswer: "Naira" },
        { type: "fill", question: "The world's largest video-sharing platform is __________.", correctAnswer: "YouTube" }
    ]
}
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
        "English Language":                     "all",
        "Biology":                              "all",
        "History":                              "all",
        "Citizenship Education":                "all",
        "Christian Religious Studies (CRS)":    "art",
        "Physics":                              "science",
        "Chemistry":                            "science",
        "Economics":                            "all",
        "Government":                           "art",
        "Literature in English":                "art"
    },
    "SS2": {
        "Mathematics":                          "all",
        "English Language":                     "all",
        "Biology":                              "all",
        "History":                              "all",
        "Citizenship Education":                "all",
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
   GGS00000 is the master demo/admin key.
   ============================================================ */
const studentRegistry = {

    "MASTER": {
        "GGS00000": { name: "Admin / Demo", stream: "all" }
    },

    "JSS1": {
        "GGS12336": { name: "Chinaka Maryjane",          stream: "general" },
        "GGS12316": { name: "Chukwuagozie Goodness",     stream: "general" },
        "GGS12310": { name: "Chukwurah Chibuike",        stream: "general" },
        "GGS12373": { name: "Esonwune Ngozi",            stream: "general" },
        "GGS12354": { name: "Ewurum Stephanie",          stream: "general" },
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
        "GGS12352": { name: "Ugo Chidera",               stream: "general" },
        "GGS12349": { name: "Ugo Ebube",                 stream: "general" },
        "GGS12338": { name: "Uwaezuoke Annabel",         stream: "general" }
    },

    "JSS2": {
        "GGS12298": { name: "Adetona Jamiu",             stream: "general" },
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
        "GGS12295": { name: "Imoh Deborah",              stream: "general" },
        "GGS12290": { name: "Joseph Chidubem",           stream: "general" },
        "GGS12287": { name: "Mbah Adaeze",               stream: "general" },
        "GGS12297": { name: "Michael Chidinma",          stream: "general" },
        "GGS12300": { name: "Nnamah Favour",             stream: "general" },
        "GGS12296": { name: "Nwaeze Chinaza",            stream: "general" },
        "GGS12289": { name: "Ogbu Amanda",               stream: "general" },
        "GGS12302": { name: "Oguchi Chidiuso",           stream: "general" },
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
        "GGS12402": { name: "Ezeifeka Johnkennedy",      stream: "science" },
        "GGS12388": { name: "Eze Maryann",               stream: "science" },
        "GGS12386": { name: "Eze Goodluck",              stream: "science" },
        "GGS12382": { name: "Chimezie Charity",          stream: "science" },
        // Art students
        "GGS12149": { name: "Onwuaso Chinenye",          stream: "art" },
        "GGS12391": { name: "Okonkwo Precious",          stream: "art" },
        "GGS12395": { name: "Okoli Precious",            stream: "art" },
        "GGS12397": { name: "Okeke Favour",              stream: "art" },
        "GGS12390": { name: "Nwovu Shedrack",            stream: "art" },
        "GGS12401": { name: "Nweke Victoria",            stream: "art" },
        "GGS12404": { name: "Michael Miracle",           stream: "art" },
        "GGS12389": { name: "Fedrick Ogbuchie",          stream: "art" },
        "GGS12407": { name: "Ejike Emmanuella",          stream: "art" },
        "GGS12383": { name: "Ebenyi Beatrice",           stream: "art" }
    },

    "SS2": {
        // Science students
        "GGS12714": { name: "Amaechi Ebuka",             stream: "science" },
        "GGS12702": { name: "Aniukwu Chinemerem",        stream: "science" },
        "GGS12703": { name: "Chikaodili Chioma",         stream: "science" },
        "GGS12707": { name: "Ezeabayi Paschal",          stream: "science" },
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
function getSubmissionKey(admissionNumber, className, subjectName) {
    return admissionNumber.trim().toUpperCase() + "|" + className + "|" + subjectName;
}

function getCompletedExams() {
    try {
        const saved = localStorage.getItem("completedExams");
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
}

function markExamAsCompleted(admissionNumber, className, subjectName) {
    const key       = getSubmissionKey(admissionNumber, className, subjectName);
    const completed = getCompletedExams();
    if (!completed.includes(key)) {
        completed.push(key);
        localStorage.setItem("completedExams", JSON.stringify(completed));
    }
}

function hasAlreadyCompleted(admissionNumber, className, subjectName) {
    const key = getSubmissionKey(admissionNumber, className, subjectName);
    return getCompletedExams().includes(key);
}


/* ============================================================
   UTILITY: updateProgressBar
   Fills based on answered questions, not current position.
   ============================================================ */
function updateProgressBar() {
    const answeredCount = studentAnswers.filter(function (a) { return a !== null; }).length;
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

    // Must have a valid admission number
    if (!studentData) {
        showModal("Please enter a valid admission number before starting an exam.");
        return;
    }

    // Block duplicate attempts
    if (subjectInfo.questions && hasAlreadyCompleted(entered, className, subjectInfo.subject)) {
        showModal(
            studentData.name + " has already completed the " +
            subjectInfo.subject + " exam for " + className +
            ". If this is a mistake, please contact your exam supervisor."
        );
        return;
    }

    if (subjectInfo.questions) {
        // Show confirmation before starting
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
    } else {
        window.open(subjectInfo.link, "_blank");
    }
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
        if (studentAnswers[i] !== null)    allNavBtns[i].classList.add("answered");
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
    markExamAsCompleted(currentAdmissionNumber, currentClassName, currentSubjectName);

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

    submitResultToSheet(currentStudentName, currentAdmissionNumber, currentClassName, currentSubjectName, scoreText);
}


/* ============================================================
   FUNCTION: submitResultToSheet
   ============================================================ */
function submitResultToSheet(studentName, admissionNumber, className, subjectName, score) {
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
        "&entry.=" + encodeURIComponent(durationText) +
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