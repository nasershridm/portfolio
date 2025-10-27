import { profileData, experienceData, projectData } from './data.js';

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

    // Header
    document.getElementById("header").innerHTML = `
    <div class="row">
    <div>
    <h1 class="animate__animated animate__fadeInDown">Hi, I'm ${profileData.name}.</h1>
    <p class="animate__animated animate__fadeInDown" style="animation-delay: 0.4s;">
        ${profileData.summary}
    </p>
    <a href="#contact" class="btn animate__animated animate__fadeInUp" style="animation-delay: 0.8s;">Get in Touch</a></div>
    <img src="${profileData.imageUrl}" alt="personal"
        class="personal-image animate__animated animate__zoomIn">
    </div>`;

    // Education
    document.getElementById("education-content").innerHTML = `
    <h3>${profileData.education.degree}</h3>
    <p class="education-meta">${profileData.education.school} | ${profileData.education.years}</p>
    <p>Specialization: ${profileData.education.specialization}</p>
    <p>Status: ${profileData.education.status}</p>`;

    // Contact
    document.getElementById("contact-content").innerHTML = `
    <p>I'm currently seeking new opportunities. Feel free to reach out!</p>
    <a href="mailto:${profileData.contactEmail}" class="btn js-scroll">${profileData.contactEmail}</a>
    <p style="margin-top: 15px;">${profileData.phone}</p>
    <p style="margin-top: 30px;">
        <a href="${profileData.linkedIn}" target="_blank">LinkedIn</a>
    </p>`;

    document.getElementById("footer").innerHTML = `<p>${profileData.footer}</p>`;

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


