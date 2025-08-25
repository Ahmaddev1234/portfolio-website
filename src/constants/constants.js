
import {Code, Cookie,Zap,Camera,Layers,Verified,Sprout,Brain,Cloud,Settings,Database, Trophy,  Presentation, Users, LocateIcon, Phone, MessageSquare, TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon, Github  } from 'lucide-react'


export const Herocards = [
  { icon: Code, name: "Development",location:{top:30,left:-30 }, animate:{y:[0,30,0]} },
  { icon: Cookie, name: "UI/UX Design",location:{right:-30 ,bottom:130}, animate:{y:[0,30,0]} },
  { icon: Zap, name: "Creative Ideas", location:{left:-30, bottom:90}, animate:{y:[30,0,30]} },
];


export const AboutCardItems = [
    { icon: Cookie, name: "UI/UX Design", Desc: "Great UI and UX design blends clarity with beauty, ensuring flow" },
    { icon: Code, name: "Frontend Dev", Desc: "A frontend developer builds fast, responsive, and modern apps" },
    { icon: Camera, name: "Photography", Desc: "Choosing the right images defines mood, style, and impact" }
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
    {Icon:Layers, name:"Digital Solutions", desc:"Delivering innovative digital solutions that transform businesses, enhance customer engagement, and create seamless experiences across all platforms."},
    {Icon:Verified, name:"Secure Systems", desc:"Building secure systems with strong protection, encryption, and compliance, ensuring data privacy, safe transactions, and reliable digital infrastructures."},
    {Icon:Sprout, name:"Growth Strategy", desc:"Crafting growth strategies to maximize market potential, increase brand presence, and help organizations achieve sustainable success."},
    {Icon:Brain, name:"Ai Integertion", desc:"Enabling businesses to harness AI integration for smarter insights, automation, personalization, and efficiency, unlocking new opportunities for innovation."},
    {Icon:Cloud, name:"Cloud Services", desc:"Providing scalable cloud services that improve flexibility, reduce costs, and empower organizations with modern infrastructure, storage, and reliable access."},
    {Icon:Settings, name:"Process Automation", desc:"Designing process automation that minimizes errors, accelerates workflows, and increases productivity while freeing teams to focus on innovation and growth."},
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
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-10.webp", 
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-11.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-5.webp"
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
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-1.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-11.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-5.webp"
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
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-10.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-1.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-5.webp"
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
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-4.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-5.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-5.webp"
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
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-2.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-5.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-10.webp"
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
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-4.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-2.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-10.webp"
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
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-1.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-5.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-10.webp"
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
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-2.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-5.webp",
        "https://bootstrapmade.com/content/demo/Style/assets/img/portfolio/portfolio-10.webp"
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









  export const TESTIMONIALS = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager, BrightTech",
      message:
        "The customer segmentation system helped us understand our audience better and boosted our campaign performance by 40%.",
      rating: 5,
      source: "BrightTech"
    },
    {
      name: "David Chen",
      role: "Founder, InnovateHub",
      message:
        "I was impressed with how easy it was to analyze data and identify our premium customers. The insights are priceless.",
      rating: 4,
      source: "InnovateHub"
    },
    {
      name: "Emily Carter",
      role: "Operations Lead, Nexa Solutions",
      message:
        "The interface is intuitive and the clustering results saved us weeks of manual work. Highly recommended!",
      rating: 5,
      source: "Nexa Solutions"
    }
  ];




  export const TESTIMONIALS2 = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager, BrightTech",
      message:
        "The customer segmentation system helped us understand our audience better and boosted our campaign performance by 40%.",
      rating: 5,
      source: "BrightTech"
    },
    {
      name: "David Chen",
      role: "Founder, InnovateHub",
      message:
        "I was impressed with how easy it was to analyze data and identify our premium customers. The insights are priceless.",
      rating: 4,
      source: "InnovateHub"
    },
    {
      name: "Emily Carter",
      role: "Operations Lead, Nexa Solutions",
      message:
        "The interface is intuitive and the clustering results saved us weeks of manual work. Highly recommended!",
      rating: 5,
      source: "Nexa Solutions"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager, BrightTech",
      message:
        "The customer segmentation system helped us understand our audience better and boosted our campaign performance by 40%.",
      rating: 5,
      source: "BrightTech"
    },
    {
      name: "David Chen",
      role: "Founder, InnovateHub",
      message:
        "I was impressed with how easy it was to analyze data and identify our premium customers. The insights are priceless.",
      rating: 4,
      source: "InnovateHub"
    },
    {
      name: "Emily Carter",
      role: "Operations Lead, Nexa Solutions",
      message:
        "The interface is intuitive and the clustering results saved us weeks of manual work. Highly recommended!",
      rating: 5,
      source: "Nexa Solutions"
    }

  ];
  


  export const FAQs = [
    {
      question: "What technologies do you specialize in as a frontend developer?",
      answer:
        "I specialize in building modern, responsive, and user-friendly interfaces using React.js, Next.js, and Tailwind CSS, with strong expertise in JavaScript/TypeScript. I also ensure seamless integration with backend APIs from Express.js and MongoDB.",
    },
    {
      question: "How do you make sure your frontend applications are performant?",
      answer:
        "I follow best practices like code splitting, lazy loading, memoization, optimizing React re-renders, and image optimization. I also use tools like Lighthouse and React Profiler to measure performance and continuously improve it.",
    },
    {
      question: "Do you also handle backend development, or only frontend?",
      answer:
        "While my main strength is frontend development, I’m also comfortable working with the backend part of the MERN stack. This includes setting up REST APIs, managing MongoDB databases, and building authentication systems with Express and JWT.",
    },
    {
      question: "What kind of frontend projects have you worked on?",
      answer:
        "I’ve worked on projects like customer segmentation dashboards, LMS systems, personalized AI apps, and interactive web platforms. Most of these projects focus on responsive UIs, data visualization, and smooth user experiences.",
    },
    {
      question: "How do you stay updated with the latest frontend technologies?",
      answer:
        "I stay updated by following React and Next.js official releases, reading frontend blogs, exploring new libraries in the JavaScript ecosystem, and building side projects to practice and implement new trends like server components, shadcn/ui, and animations with Framer Motion.",
    },
  ];


  export const ContactDetails=[
    {Icon:LocateIcon, title:"Our Location", desc:"P-111 National Colony Manawala Faisalabad"},
    {Icon:Phone, title:"Phone Number", desc:"03017802697"},
    {Icon:MessageSquare, title:"Email Address", desc:"ahmadhassan282013@gmail.com"}
  ]

  export const Icons=[
    {Icon:Github,href:"https://github.com/Ahmaddev1234"},
    {Icon:FacebookIcon,href:"https://www.facebook.com/profile.php?id=100082479317911"},
    {Icon:InstagramIcon,href:"https://www.instagram.com/artistic_aura12/"},
    {Icon:LinkedinIcon, href:"https://www.linkedin.com/in/ahmad-hassan-268839298/"}
  ]
  
  
  