# My Portfolio Website

## Description

This is my personal portfolio website, designed to showcase my projects, skills, and experience as a Full-Stack Developer. It focuses on clean UI design, responsive layouts, and interactive elements to deliver a modern and engaging user experience.

## Features

- Fully responsive design across different screen sizes
- Smooth scrolling and hover interactions
- Mobile-friendly navigation menu
- Interactive contact form with validation and success feedback
- Project showcase with live demo and GitHub links
- Consistent design system using CSS variables

## Technologies Used

- HTML5
- CSS3
- JavaScript (DOM manipulation, form handling)

## Key Implementation Details
#### Responsive Navigation Toggle

```js
menu.addEventListener("click", () => {
  navigation.classList.toggle("show-menu");
});
```

#### Form Validation & Success Feedback

```js
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (contactForm.checkValidity()) {
    popupBox.classList.add("success-message");
  } else {
    contactForm.reportValidity();
  }
});
```

## Demo

Click [here](https://fejiro001.github.io/my-portfolio/) to demo
