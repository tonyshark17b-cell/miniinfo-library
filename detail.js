// Read the topic from the URL
const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");

// Store all topic information
const library = {
    "Computer Learning": {
        image: "image3.jpg",
        title: "Computer Learning",
        subtitle: "Learn everything about computers.",
        intro: "A computer is an electronic device that accepts data, processes it, stores it and produces useful information.",

        learn: [
            "Computer Basics",
            "Hardware",
            "Software",
            "Operating System",
            "Internet",
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },

    "Mobile Function": {
        image: "mobile.jpg",
        title: "Mobile Function",
        subtitle: "Learn about smartphones and their features.",
        intro: "A smartphone is a portable computer that lets you communicate, browse the internet, take photos, and use apps.",

        learn: [
            "Android",
            "iPhone",
            "Apps",
            "Camera",
            "Settings",
            "Battery"
        ]
    },

    "Communication Skill": {
        image: "communication.jpg",
        title: "Communication Skill",
        subtitle: "Improve your communication skills.",
        intro: "Communication is the process of exchanging information, ideas, and feelings with other people.",

        learn: [
            "Speaking",
            "Listening",
            "Body Language",
            "Confidence",
            "Presentation"
        ]
    },

    "Chemical": {
        image: "chemical.jpg",
        title: "Chemicals",
        subtitle: "Introduction to chemistry.",
        intro: "Chemistry is the branch of science that studies matter, its properties, and how substances interact.",

        learn: [
            "Atoms",
            "Molecules",
            "Elements",
            "Compounds",
            "Chemical Reactions"
        ]
    },

    "Electricity": {
        image: "electricity.jpg",
        title: "Electricity",
        subtitle: "Learn the basics of electricity.",
        intro: "Electricity is the movement of electric charge used to power devices.",

        learn: [
            "Current",
            "Voltage",
            "Resistance",
            "Circuits",
            "Power"
        ]
    },

    "Music": {
    image: "music.jpg",
    title: "Music",
    subtitle: "Discover the world of music and sound.",
    intro: "Music is the art of arranging sounds in a way that expresses emotions, ideas, and creativity. It has been a part of human culture for thousands of years and is enjoyed in every country. Music can entertain, inspire, relax, and bring people together.",

    learn: [
        "What is Music?",
        "History of Music",
        "Musical Notes",
        "Rhythm and Beat",
        "Melody and Harmony",
        "Musical Instruments",
        "Genres of Music",
        "Famous Composers",
        "Benefits of Music",
        "Modern Music Technology"
    ]
},

    "Planets": {
        image: "solar system.jpg",
        title: "Planets",
        subtitle: "Explore our solar system.",
        intro: "Planets are celestial bodies that orbit the Sun and have enough gravity to maintain their shape.",

        learn: [
            "Mercury",
            "Venus",
            "Earth",
            "Mars",
            "Jupiter"
        ]
    },

    "Geography": {
        image:"geography.jpg",
        title: "Geography",
        subtitle: "Study the Earth and its features.",
        intro: "Geography studies places, environments, and the relationship between people and their surroundings.",

        learn: [
            "Countries",
            "Mountains",
            "Rivers",
            "Climate",
            "Maps"
        ]
    }
};

// Get the selected topic
const data = library[topic];

// If topic exists
if (data) {
console.log(data.image)
    document.getElementById("topicImage").src = data.image;
    document.getElementById("topicTitle").textContent = data.title;
    document.getElementById("topicSubtitle").textContent = data.subtitle;
    document.getElementById("intro").textContent = data.intro;

    const learnList = document.getElementById("learnList");

    learnList.innerHTML = "";

    data.learn.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        learnList.appendChild(li);

    });

} else {

    document.getElementById("topicTitle").textContent = "Topic Not Found";
    document.getElementById("topicSubtitle").textContent = "";
    document.getElementById("intro").textContent =
        "Sorry, no information is available for this topic.";

}