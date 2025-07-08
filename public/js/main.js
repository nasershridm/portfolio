
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

        if (item.googlePlayUrl || item.appStoreUrl) {
            const storeWrapper = document.createElement('div');
            storeWrapper.classList.add('project-footer');

            if (item.googlePlayUrl) {
                const gpBtn = document.createElement('a');
                gpBtn.href = item.googlePlayUrl;
                gpBtn.textContent = "Google Play";
                gpBtn.classList.add('btn', 'store-btn');
                gpBtn.target = "_blank";
                storeWrapper.appendChild(gpBtn);
            }

            if (item.appStoreUrl) {
                const iosBtn = document.createElement('a');
                iosBtn.href = item.appStoreUrl;
                iosBtn.textContent = "App Store";
                iosBtn.classList.add('btn', 'store-btn');
                iosBtn.target = "_blank";
                storeWrapper.appendChild(iosBtn);
            }

            projectCard.appendChild(storeWrapper);
        }
        if (item.website) {
            const websiteWrapper = document.createElement('div');
            websiteWrapper.classList.add('project-footer');
            const visitBtn = document.createElement('a');
            visitBtn.href = item.website;
            visitBtn.textContent = "Visit";
            visitBtn.classList.add('btn', 'store-btn');
            visitBtn.target = "_blank";
            websiteWrapper.appendChild(visitBtn);
            projectCard.appendChild(websiteWrapper);

        }

        projectGrid.appendChild(projectCard);
        observer.observe(projectCard);
    };


    experienceData.forEach(item => {
        window.addExperienceItem(item);
    });

    projectData.forEach(item => {
        window.addProjectItem(item);
    });

});


/// my data 

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

const projectData = [
    {
        title: "ATHEK: Billing System",
        description: "A billing application that allows customers, including sellers and buyers, to organize their spending. It features analysis charts to track expenditures across different categories.",
        technologies: ["Flutter Mobile", "Flutter Web", "Google Maps", "Google Play", "App Store"],
        googlePlayUrl: "https://play.google.com/store/apps/details?id=com.vroad.athekllc",
        appStoreUrl: "https://apps.apple.com/nl/app/athek-%D8%A3%D8%AB%D9%82/id6478430128"

    },
    {
        title: "BoxToGo: e-commerce",
        description: "An e-commerce platform with a unique gift feature, built for Syria and Lebanon. It provides a smooth, reliable experience for buying diverse products and sending thoughtful gifts across the region.",
        technologies: ["Flutter", "Google Maps", "Google Play", "App Store"],
        googlePlayUrl: "https://play.google.com/store/apps/details?id=com.vroad.boxtogo",
        appStoreUrl: "https://apps.apple.com/us/app/boxtogo/id1630559306?platform=iphone"

    },
    {
        title: "Wasel",
        description: "comprehensive platform providing e-commerce and delivery services. It allows users to shop online for various products and have them delivered, simplifying the process of buying and receiving goods.",
        technologies: ["Flutter", "Google Maps", "Google Play", "App Store"],
        googlePlayUrl: "https://play.google.com/store/apps/details?id=com.ixcoders.wasel&hl=en",
        appStoreUrl: "https://apps.apple.com/us/app/wasel-%D9%88%D8%A7%D8%B5%D9%84/id6443812195"

    },
    {
        title: "Postajji",
        description: "comprehensive platform providing e-commerce and delivery services. It allows users to shop online for various products and have them delivered, simplifying the process of buying and receiving goods.",
        technologies: ["Flutter", "Google Maps", "Google Play", "App Store"],
        googlePlayUrl: "https://play.google.com/store/apps/details?id=com.vroad.postajjistore",
        appStoreUrl: "https://apps.apple.com/app/id123456789"

    },
    {
        title: "ABO",
        description: "Abo represents a dynamic clothing brand in Iraq,It provides a convenient online shopping experience, bringing the latest fashion trends directly to customers across Iraq.",
        technologies: ["Flutter", "Google Maps", "Google Play", "App Store"],
        googlePlayUrl: "https://play.google.com/store/apps/details?id=com.soft.ABO",
        appStoreUrl: "https://apps.apple.com/us/app/abo-store/id6444841672"

    },
    {
        title: "CSEU",
        description: "The Civil Society Empowerment Unit prioritizes human capital to strengthen civil society and foster civic space, aiming for a dignified, rights-based, and participative civil system.",
        technologies: ["laravel", "blade", "Html Css Js", "Project Management"],
        website: "https://cseu.org/"
    },
    {
        title: "Fly Damascus",
        description: "An application offers a seamless and intuitive experience for managing all aspects of air travel to and from Syria. Users can effortlessly organize their flights, ensuring a smooth and convenient journey.",
        technologies: ["Flutter", "State Management", "API Integration"]
    },
    {
        title: "MNIN-CHARITY",
        description: "A comprehensive charity system built for both web and mobile platforms to organize donations and manage beneficiaries effectively, my role was the project owner, flutter developer and team leader.",
        technologies: ["Flutter", "React", "Project Management"]
    },
    {
        title: "Pharma App",
        description: "A mobile application that allows users to explore a wide range of medicines, view detailed information, and easily add products to their cart for ordering. It simplifies the medicine shopping experience.",
        technologies: ["Flutter", "API Integration", "QR Scanning"]
    },
    {
        title: "Shipping Master",
        description: "An application designed to manage the process of shipping cars, including both imports and exports. A key feature is the ability to scan the vehicle number for tracking.",
        technologies: ["Flutter", "API Integration", "QR Scanning"]
    },


];
