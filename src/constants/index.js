const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    // {
    //     name: "Testimonials",
    //     link: "#testimonials",
    // },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 500, suffix: "+", label: "Hours of Practical Learning" },
    { value: 12, suffix: "+", label: "Technical Certifications Earned" },
    { value: 20, suffix: "+", label: "Tools & Technologies Used" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
];

const abilities = [
    {
        imgPath: "/images/code2.png",
        title: "Creative Developer",
        desc: "From game mechanics to front-end animations, I build interactive projects using vanilla JavaScript and React.",
    },
    {
        imgPath: "/images/ai.png",
        title: "AI & ML Enthusiast",
        desc: "I’ve worked on projects like sentiment analysis and handwriting recognition, combining AI with real-world use cases.",
    },
    {
        imgPath: "/images/curious.png",
        title: "Fast Learner",
        desc: "I love diving into new frameworks, APIs, and tech stacks — whether it's sprite animation or neural networks.",
    },
    {
        imgPath: "/images/focus.png",
        title: "Detail-Oriented",
        desc: "I pay attention to the polish — clean UI, smooth animations, and consistent logic — for a quality user experience.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Development (React.js)",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "AI/ML Practitioner (Python)",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Development (Node.js)",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Development (Three.js)",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Managment (Git)",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "As a B.Tech student specializing in AI, ML, and DL, I’ve been actively exploring both the theoretical and practical aspects of intelligent technologies. My coursework and hands-on projects have deepened my understanding and fueled my passion for innovation in this field.",
        imgPath: "/images/download.png", // update with a TMU-related image
        logoPath: "/images/download2.jpeg", // TMU logo
        title: "B.Tech CSE Student (AI, ML, DL)",
        date: "August 2022 - Present",
        responsibilities: [
            "Currently pursuing B.Tech in Computer Science and Engineering with a specialization in AI, ML, and DL at Teerthanker Mahaveer University, Moradabad.",
            "Studying subjects like Machine Learning, Deep Learning, Pattern Recognition, and Natural Language Processing.",
            "Engaged in self-driven learning and hands-on experimentation with intelligent systems.",
        ],
    },
    {
        review: "My time at CETPA, Noida was incredibly enriching. I gained practical exposure to core AI concepts and tools like Python, TensorFlow, and OpenCV. This training laid the foundation for my interest in intelligent systems and real-world AI applications.",
        imgPath: "/images/download4.png", // update with a CETPA-related image
        logoPath: "/images/download3.jpg", // CETPA logo
        title: "Artificial Intelligence Intern",
        date: "June 2024 - August 2024",
        responsibilities: [
            "Completed practical training in Artificial Intelligence at CETPA, Noida.",
            "Learned key AI tools and technologies including Python, OpenCV, and TensorFlow.",
            "Built a solid foundation in machine learning algorithms and neural networks.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review: "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review: "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review: "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review: "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review: "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/adi_jain_aj_/",
        imgPath: "/images/insta.png",
    },
    {
        name: "github",
        url: "https://www.github.com/Adi15Jain/",
        imgPath: "/images/github.png",
    },
    // {
    //     name: "x",
    //     imgPath: "/images/x.png",
    // },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/adi-jain-73334724b/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
