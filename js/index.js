const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

/* ==========
  Header
========== */

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// add navbar
let navbarItems = document.querySelectorAll('header nav a');
navbarItems.forEach((item, i) => item.textContent = siteContent["nav"]["nav-item-"+`${i+1}`]);
navbarItems.forEach(item => item.style.color = "green");

let navbar = document.querySelector('header nav');
// prepend navbar item
let preElement = document.createElement('a');
preElement.setAttribute('href', "#");
preElement.textContent = "preElement";
navbar.prepend(preElement);

//add navbar item
let postElement = document.createElement('a');
postElement.setAttribute('href', "#");
postElement.textContent = "postElement";
navbar.appendChild(postElement);

/* ==========
    Call to Action Section (Title)
========== */

document.querySelector('.cta .cta-text h1').innerHTML = siteContent["cta"]["h1"];
document.querySelector('.cta .cta-text button').textContent = siteContent["cta"]["button"];
document.querySelector('.cta #cta-img').setAttribute('src', siteContent["cta"]["img-src"]);

/* ==========
    Main Content
========== */

document.querySelectorAll('.top-content .text-content h4')[0].textContent = siteContent["main-content"]["features-h4"];
document.querySelectorAll('.top-content .text-content p')[0].textContent = siteContent["main-content"]["features-content"];
document.querySelectorAll('.top-content .text-content h4')[1].textContent = siteContent["main-content"]["about-h4"];
document.querySelectorAll('.top-content .text-content p')[1].textContent = siteContent["main-content"]["about-content"];

document.querySelector('.middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

document.querySelectorAll('.bottom-content .text-content h4')[0].textContent = siteContent["main-content"]["services-h4"];
document.querySelectorAll('.bottom-content .text-content p')[0].textContent = siteContent["main-content"]["services-content"];
document.querySelectorAll('.bottom-content .text-content h4')[1].textContent = siteContent["main-content"]["product-h4"];
document.querySelectorAll('.bottom-content .text-content p')[1].textContent = siteContent["main-content"]["product-content"];
document.querySelectorAll('.bottom-content .text-content h4')[2].textContent = siteContent["main-content"]["vision-h4"];
document.querySelectorAll('.bottom-content .text-content p')[2].textContent = siteContent["main-content"]["vision-content"];

/* ==========
    Contact Section
========== */

document.querySelector('.contact h4').textContent = siteContent["contact"]["contact-h4"];
document.querySelectorAll('.contact p')[0].innerHTML = siteContent["contact"]["address"];
document.querySelectorAll('.contact p')[1].textContent = siteContent["contact"]["phone"];
document.querySelectorAll('.contact p')[2].textContent = siteContent["contact"]["email"];

/* ==========
    Footer
========== */

document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];