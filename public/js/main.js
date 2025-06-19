history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
    });

    const elementsToAnimate = document.querySelectorAll('.js-scroll');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });


    /**
     * Adds a new experience item to the portfolio.
     * @param {object} item - An object containing experience details.
     * @param {string} item.title - The job title (e.g., "Mobile Developer").
     * @param {string} item.meta - The company and dates (e.g., "Mozaik | Sep 2024 - UNTIL NOW").
     * @param {string[]} item.duties - An array of bullet points describing duties.
     */
    window.addExperienceItem = (item) => {
        const experienceList = document.querySelector('.experience-list');
        if (!experienceList) {
            console.error('Experience list container not found.');
            return;
        }

        const experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item', 'js-scroll');

        const h3 = document.createElement('h3');
        h3.textContent = item.title;
        experienceItem.appendChild(h3);

        const pMeta = document.createElement('p');
        pMeta.classList.add('experience-meta');
        pMeta.textContent = item.meta;
        experienceItem.appendChild(pMeta);

        const ul = document.createElement('ul');
        item.duties.forEach(duty => {
            const li = document.createElement('li');
            li.textContent = duty;
            ul.appendChild(li);
        });
        experienceItem.appendChild(ul);

        experienceList.appendChild(experienceItem);

        observer.observe(experienceItem);
    };

    /**
     * Adds a new project card to the portfolio.
     * @param {object} item - An object containing project details.
     * @param {string} item.title - The project title.
     * @param {string} item.description - A brief description of the project.
     * @param {string[]} item.technologies - An array of technologies used (e.g., ["Flutter", "API Integration"]).
     */
    window.addProjectItem = (item) => {
        const projectGrid = document.querySelector('.project-grid');
        if (!projectGrid) {
            console.error('Project grid container not found.');
            return;
        }

        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card', 'js-scroll');

        const h3 = document.createElement('h3');
        h3.textContent = item.title;
        projectCard.appendChild(h3);

        const pDesc = document.createElement('p');
        pDesc.textContent = item.description;
        projectCard.appendChild(pDesc);

        const techTagsDiv = document.createElement('div');
        techTagsDiv.classList.add('tech-tags');
        item.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            techTagsDiv.appendChild(span);
        });
        projectCard.appendChild(techTagsDiv);

        projectGrid.appendChild(projectCard);

        observer.observe(projectCard);
    };

    // --- DATA FOR DYNAMIC CONTENT ---
    const experienceData = [
        {
            title: "Mobile Developer, Laravel full stack",
            meta: "Mozaik | Sep 2024 - UNTIL NOW",
            duties: [
                "Currently engaged as a Mobile Developer and Laravel Full Stack Developer."
            ]
        },
        {
            title: "Flutter Developer",
            meta: "VRoad IIc | Sep 2023 - Mar 2024",
            duties: [
                "Developed a comprehensive billing system named ATHEK, designed for sellers and buyers to organize expenditures.",
                "Implemented features for analyzing spending by category with detailed charts.",
                "Successfully launched the application on both Google Play and the App Store.",
                "Contributed to main projects including Postajji (delivery, store: E-commerce Application) and Box To Go."
            ]
        },
        {
            title: "Flutter Mobile Developer",
            meta: "90-Soft | Nov 2022 - Jul 2023",
            duties: [
                "Developed and maintained several large-scale applications, including an e-commerce platform (WASEL delivery, store, wholesaler), a task management system (Syriatel Task Management), and 'ABO,' an e-commerce application for the Iraqi market.",
                "Gained extensive experience in the full development lifecycle, leading to multiple successful launches on Google Play and the App Store."
            ]
        },
        {
            title: "Project Manager",
            meta: "Freelancing",
            duties: [
                "Managed a team of four developers (two backend, two frontend for React and Flutter) for the MNIN-CHARITY project, a charity system which organizes donations and beneficiaries.",
                "Was responsible for customer service, financial oversight, and managing the development process as Software Engineer.",
                "Oversaw the development of the 'QURAN INSTITUTION' application, designed to make the teaching process easier and more enjoyable for kids, with a team of two developers (mobile and backend)."
            ]
        },
    ];

    // Define all your project items here
    const projectData = [
        {
            title: "ATHEK: Billing System",
            description: "A billing application that allows customers, including sellers and buyers, to organize their spending. It features analysis charts to track expenditures across different categories.",
            technologies: ["Flutter", "State Management", "API Integration"]
        },
        {
            title: "Shipping Master",
            description: "An application designed to manage the process of shipping cars, including both imports and exports. A key feature is the ability to scan the vehicle number for tracking.",
            technologies: ["Flutter", "Google Play", "App Store"]
        },
        {
            title: "MNIN-CHARITY",
            description: "A comprehensive charity system built for both web and mobile platforms to organize donations and manage beneficiaries effectively, my role was the project owner, flutter developer and team leader.",
            technologies: ["Flutter", "React", "Project Management"]
        },
        {
            title: "Personal Portfolio Website",
            description: "This very website! Designed to showcase my skills, experience, and projects. Built with a focus on responsive design.",
            technologies: ["HTML", "CSS", "JavaScript", "Animate.css"]
        }
    ];

    experienceData.forEach(item => {
        window.addExperienceItem(item);
    });

    projectData.forEach(item => {
        window.addProjectItem(item);
    });

});