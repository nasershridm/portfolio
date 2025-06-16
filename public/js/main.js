
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