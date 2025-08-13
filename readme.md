# TwoGood Co Website 

This project is a **clone of the TwoGood website** (https://twogood.com.au/), created to learn and practice **HTML, CSS, JavaScript, and GSAP animations**. It is a responsive web design project with interactive elements inspired by the original site.

## Features

| Feature | Description |
|---------|-------------|
| Smooth Scroll Animations | Implemented using **GSAP** and **Locomotive Scroll** for a fluid scrolling experience. |
| Custom Navbar Animations | Navbar elements animate on scroll for a dynamic header effect. |
| Interactive Video Container | Video section with **hover effects** and a **moving play button**. |
| Custom Cursor | Animated cursor that reacts when hovering specific elements. |
| Responsive Design | Fully responsive for **mobile devices** with adjusted layouts and font sizes. |
| Multi-section Layout | Includes pages `#page1` to `#page4` with headings, images, content, and footer. |
| Hover Text Animations | Elements display alternate text on hover for better interactivity. |

---

## Project Structure

### HTML
- `#nav` — Navbar with **logo (`#nav1`)** and **links/icons (`#nav2`)**.
- `#page1` — Hero section with large heading and video container.
- `#page2` — Section with image elements and hover text.
- `#page3` — Flexible content section with images.
- `#page4` — Footer and acknowledgment section.

### CSS
- Global reset and font settings.
- Page-specific styling and **responsive adjustments** (`@media` queries for screens < 600px).
- Hover effects for `.dets` elements with `.default-text` and `.hover-text`.
- Custom cursor styling (`#cursor`).

### JavaScript
- **Locomotive Scroll** initialization for smooth scrolling.
- **ScrollTrigger** integration for navbar animations.
- **Video hover effects** with GSAP scaling and positioning.
- **Page load animations** for headings and video container.
- **Custom cursor animations** with scaling effects on hover.

## Technologies Used

- HTML5 & CSS3  
- JavaScript (ES6)  
- [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)  
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/)  
- [Font Awesome](https://fontawesome.com/)  

## Usage

1. Clone or download the repository.
2. Open `index.html` in a modern browser (Chrome, Firefox, Edge).
3. Scroll through the sections to see animations in action.
4. Hover over the video container to reveal the play button.
5. Hover over images in page sections to see the custom cursor and hover text effects.


## Responsive Design

The webpage adjusts for mobile devices:

- Navbar shrinks and hides links.
- Hero heading scales up for smaller screens.
- Page sections become full-width with stacked layouts.
- Footer and acknowledgments text adjust for smaller devices.

## 🎓 Credits

- Original website: [TwoGood](https://twogood.com.au/)  
- Tutorial inspiration: [Shreyians Coding School](https://youtu.be/bVyigcIt-ac)  

> **Note:** This project is created solely for educational purposes. It is a clone made for practice and learning, and no commercial claims are intended.

---
