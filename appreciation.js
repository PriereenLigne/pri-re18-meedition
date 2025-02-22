// Récupérer les éléments HTML
const testimonialForm = document.getElementById('testimonial-form');
const testimonialInput = document.getElementById('testimonial-input');
const testimonialsList = document.getElementById('testimonials');
const commentsList = document.getElementById('comments-list');
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');

// Chargement des témoignages existants depuis LocalStorage
document.addEventListener('DOMContentLoaded', function() {
    loadTestimonials();
    loadComments();
    loadLikes();
});

// Fonction pour charger les témoignages
function loadTestimonials() {
    const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    testimonialsList.innerHTML = '';
    testimonials.forEach(testimonial => {
        const li = document.createElement('li');
        li.textContent = testimonial;
        testimonialsList.appendChild(li);
    });
}

// Fonction pour charger les commentaires
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    commentsList.innerHTML = '';
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = comment;
        commentsList.appendChild(li);
    });
}

// Fonction pour charger le nombre de "J'aime"
function loadLikes() {
    const likes = localStorage.getItem('likes') || 0;
    likeCount.textContent = likes;
}

// Soumettre un témoignage
testimonialForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTestimonial = testimonialInput.value;
    if (newTestimonial) {
        const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
        testimonials.push(newTestimonial);
        localStorage.setItem('testimonials', JSON.stringify(testimonials));
        testimonialInput.value = '';
        loadTestimonials();
    }
});

// Réagir avec un "J'aime"
likeBtn.addEventListener('click', function() {
    let likes = parseInt(localStorage.getItem('likes')) || 0;
    likes += 1;
    localStorage.setItem('likes', likes);
    loadLikes();
});