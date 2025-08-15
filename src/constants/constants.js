
import {Code, Cookie,Zap,Camera,Layers,Verified,Sprout,Brain,Cloud,Settings,Database, Trophy,  Presentation, Users  } from 'lucide-react'


export const Herocards = [
  { icon: Code, name: "Development",location:{top:30,left:-30 }, animate:{y:[0,30,0]} },
  { icon: Cookie, name: "UI/UX Design",location:{right:-30 ,bottom:130}, animate:{y:[0,30,0]} },
  { icon: Zap, name: "Creative Ideas", location:{left:-30, bottom:90}, animate:{y:[30,0,30]} },
];


export const AboutCardItems = [
    { icon: Cookie, name: "UI/UX Design", Desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar" },
    { icon: Code, name: "Frontend Dev", Desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar" },
    { icon: Camera, name: "Photography", Desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar" }
]

export const AboutEduItems=[
    {year:2019, desc:"Graduated with B.A. in Digital Design from Creative University"},
    {year:2021, desc:"Graduated with M.A. in Digital Design from Creative University"},
    {year:2023, desc:"Graduated with M.Phill. in Digital Design from Creative University"}
]



// Resume section

export const AcademicStats = [
    {
        name: "Master of Computer Science", Institution: "GC University", desc: `Advanced studies in computer science focusing on algorithms, software development, and emerging technologies`, duration: "2021-2025"
    },
    {
        name: "FSC Pre Engineering", Institution: "Govt Post Graduate College Faisalabad", desc: `Completed FSc Pre-Engineering, covering physics, chemistry, and mathematics as a foundation for engineering and technology studies.`, duration: "2019 - 2021"
    },
    {
        name: "Matric", Institution: "Government Higher Secondary School", desc: `Completed my matric, covering physics, chemistry, and mathematics as a foundation for engineering and technology studies.`, duration: "2017 - 2019"
    }
]



export const ProfessionalStats = [
    {
        name: "Frontend Engineer", company: "Sapient Compiles", desc: `Built responsive, interactive UIs with React.js, Tailwind CSS, and Framer Motion, delivering smooth animations and optimized performance.
        `, responsibilities: ["Build responsive UIs with React and Tailwind CSS.", "Add smooth animations using Framer Motion.", "Integerate APIs for dynamic data"], duration: "2025 - Present"
    },
    {
        name: "MernStack Intern", company: "Sapient Compiles", desc: `Developed full-stack web features using MongoDB, Express, React, and Node.js, contributing to both frontend UI and backend APIs.`, duration: "2025 - 2025"
    }
]




// Services section


export const services=[
    {Icon:Layers, name:"Digital Solutions", desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa."},
    {Icon:Verified, name:"Secure Systems", desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."},
    {Icon:Sprout, name:"Growth Strategy", desc:"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem."},
    {Icon:Brain, name:"Ai Integertion", desc:"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem."},
    {Icon:Cloud, name:"Cloud Services", desc:"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem."},
    {Icon:Settings, name:"Process Automation", desc:"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem."},
]



// Skills section



export const SkillCardItems = [
    { Icon: Code, skill: "Frontend Development", technology: [{ name: "HTML/CSS", percentage: "95" }, { name: "Javascript", percentage: "90" }, { name: "Reactjs/Nextjs", percentage: "85" }] },
    { Icon: Database, skill: "Backend Development", technology: [{ name: "javascript", percentage: "90" }, { name: "Nodejs", percentage: "88" }, { name: "MongoDB", percentage: "70" }] },
    { Icon: Cookie, skill: "Design & Tools", technology: [{ name: "Figma", percentage: "80" }, { name: "Illustrator", percentage: "75" }, { name: "Photoshop", percentage: "83" }] },
    { Icon: Cloud, skill: "Cloud & DevOps", technology: [{ name: "Vercel", percentage: "90" }, { name: "Git", percentage: "89" }, { name: "Github", percentage: "95" }] }
]

export const SkillStats=[
    {Icon:Trophy, title:"Years Experience", stats:"5"},
    {Icon:Presentation, title:"Projects Completed", stats:"150"},
    {Icon:Users, title:"Happy Clients", stats:"100"},
]

export const SkillTags=["Ui/Ux Design","Reactjs Developer","Nextjs Expert","Frontend Expert"]













// Portfolio dummy projects
export const PrrojectCategories=["All Projects","development","UI/UX","Photography","marketing"]


export const PROJECTS = [
    {
      id: "proj-001",
      images: [
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-1.webp", 
        "https://images.unsplash.com/photo-1505236735602-3813fdee7c1d", 
        "https://images.unsplash.com/photo-1518770660439-4636190af475"
      ],
      name: "SmartHome Automation",
      link: "https://example.com/smarthome",
      description: "Web dashboard to control smart home devices with real-time updates and intuitive layout.",
      technologiesUsed: ["react", "tailwind", "mongodb", "nodejs", "expressjs"],
      categories: ["development", "UI/UX"],
      keyFeatures: [
        "Real-time device toggles",
        "Custom themes",
        "Voice control support",
        "Mobile responsive",
        "Secure auth system",
        "Energy analytics"
      ],
      projectOverview: "Unifies IoT device control with a consistently designed dashboard.",
      challenge: "Integrating multiple device protocols into one interface.",
      solution: "Built a modular API to standardize all device communication.",
      date: "September 2024"
    },
    {
      id: "proj-002",
      images: [
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-10.webp",
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1f",
        "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1"
      ],
      name: "EcoTravel Portal",
      link: "https://example.com/ecotravel",
      description: "Travel platform that tracks carbon footprint and highlights eco-certified stays.",
      technologiesUsed: ["react", "tailwind", "mongodb", "nodejs", "expressjs"],
      categories: ["development", "marketing"],
      keyFeatures: [
        "Eco filters",
        "Footprint tracker",
        "Interactive maps",
        "Secure checkout",
        "Ratings & reviews",
        "Personalized suggestions"
      ],
      projectOverview: "Encourages eco-friendly travel by offering sustainable choices.",
      challenge: "Balancing design with sustainability goals.",
      solution: "Gamified UI encourages green choices while keeping UX engaging.",
      date: "October 2024"
    },
    {
      id: "proj-003",
      images: [
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-11.webp",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        "https://images.unsplash.com/photo-1433846595002-c3b07a2b8f94"
      ],
      name: "Agency Portfolio",
      link: "https://example.com/agency",
      description: "Creative agency site with animated showcases and quick CMS updates.",
      technologiesUsed: ["react", "tailwind", "mongodb", "nodejs", "expressjs"],
      categories: ["UI/UX", "marketing"],
      keyFeatures: [
        "Animated portfolios",
        "CMS control panel",
        "SEO optimized",
        "Video sections",
        "Client testimonials",
        "Contact forms"
      ],
      projectOverview: "Showcases campaigns with animation and performance first design.",
      challenge: "Keeping animations smooth without sacrificing speed.",
      solution: "Lazy loading assets and optimized media delivery.",
      date: "August 2024"
    },
    {
      id: "proj-004",
      images: [
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-2.webp",
        "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
        "https://images.unsplash.com/photo-1445285621357-dcb30fcd6984"
      ],
      name: "FoodieLens Gallery",
      link: "https://example.com/foodielens",
      description: "Minimal culinary photo gallery with book-style image display and client bookings.",
      technologiesUsed: ["react", "tailwind", "mongodb", "nodejs", "expressjs"],
      categories: ["Photography", "UI/UX"],
      keyFeatures: [
        "Hi-res viewer",
        "Lightbox mode",
        "Filter categories",
        "Tips section",
        "Booking form",
        "Responsive layout"
      ],
      projectOverview: "Highlights culinary photography with elegant, clean styling.",
      challenge: "Large image sizes slowed loading.",
      solution: "Implemented CDN images with adaptive sizing.",
      date: "July 2024"
    },
    {
      id: "proj-005",
      images: [
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-4.webp",
        "https://images.unsplash.com/photo-1526403222624-dfd9058c5737",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0"
      ],
      name: "FitTrack App",
      link: "https://example.com/fittrack",
      description: "Fitness tracker with workout logs, AI suggestions, and meal planning.",
      technologiesUsed: ["react", "tailwind", "mongodb", "nodejs", "expressjs"],
      categories: ["development", "UI/UX"],
      keyFeatures: [
        "AI insights",
        "Workout tracker",
        "Meal planner",
        "Challenges",
        "Device sync",
        "Achievements"
      ],
      projectOverview: "Personalizes fitness with adaptive AI and nutrition plotting.",
      challenge: "Syncing wearable APIs smoothly.",
      solution: "Unified handler for all device data.",
      date: "June 2024"
    },
    {
      id: "proj-006",
      images: [
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-5.webp",
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
        "https://images.unsplash.com/photo-1507868244993-3da2e0a44e11"
      ],
      name: "BrandBoost Platform",
      link: "https://example.com/brandboost",
      description: "Campaign tool for SMBs—email, social, analytics, and templates in one place.",
      technologiesUsed: ["react", "tailwind", "mongodb", "nodejs", "expressjs"],
      categories: ["marketing", "UI/UX"],
      keyFeatures: [
        "Campaign dashboard",
        "Email automation",
        "Social scheduler",
        "A/B testing",
        "Template gallery",
        "Lead forms"
      ],
      projectOverview: "Makes campaign creation easy without steep learning curve.",
      challenge: "Designing for inexperienced users.",
      solution: "Guided UI with tooltips and examples.",
      date: "May 2024"
    },
    {
      id: "proj-007",
      images: [
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-2.webp",
        "https://images.unsplash.com/photo-1473187983305-f615310e7daa",
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
      ],
      name: "CityScape Drone Shots",
      link: "https://example.com/cityscape",
      description: "4K aerial drone shots of cityscapes, with maps and licensing options.",
      technologiesUsed: ["react", "tailwind", "mongodb", "nodejs", "expressjs"],
      categories: ["Photography", "Marketing"],
      keyFeatures: [
        "4K galleries",
        "Interactive maps",
        "Video player",
        "Licensing options",
        "Booking flow",
        "Blog section"
      ],
      projectOverview: "Showcases urban beauty via high-quality aerial visuals.",
      challenge: "Handling massive media files.",
      solution: "Cloud storage with adaptive streaming.",
      date: "April 2024"
    },
    {
      id: "proj-008",
      images: [
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-1.webp",
        "https://images.unsplash.com/photo-1554774853-b9911b4b5a6c",
        "https://images.unsplash.com/photo-1521791136064-7986c2920216"
      ],
      name: "EduSphere Platform",
      link: "https://example.com/edusphere",
      description: "Learning portal with courses, quizzes, forums, and instructor tools.",
      technologiesUsed: ["react", "tailwind", "mongodb", "nodejs", "expressjs"],
      categories: ["development", "UI/UX"],
      keyFeatures: [
        "Live classes",
        "Interactive quizzes",
        "Progress tracking",
        "Certifications",
        "Forums",
        "Instructor dashboards"
      ],
      projectOverview: "Offers scalable, interactive education experiences online.",
      challenge: "Managing high session traffic.",
      solution: "Implemented scalable streaming with load balancing.",
      date: "March 2024"
    }
  ];
  
  