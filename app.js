

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", () => {
  const glowElements = document.querySelectorAll('.glow');
  glowElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1; 
      el.style.animation = `glow 1s ease forwards`; 
    }, index * 300);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const headingText = "WHERE YOUR CREATIVE IDEAS MEET INNOVATION !!";
  const headingElement = document.getElementById("innovation-heading");
  
  let index = 0;
  
  function typeContinuous() {
      if (index < headingText.length) {
          headingElement.innerHTML += headingText.charAt(index);
          index++;
      } else {
          index = 0;
          headingElement.innerHTML = "";
      }
      setTimeout(typeContinuous, 200); 
  }
  
  typeContinuous();
});

document.addEventListener("DOMContentLoaded", () => {
  const text = "TechSparks is an ideation event that celebrates innovative tech ideas, including startups, products, and solutions. It offers a platform for creative minds to collaborate, brainstorm, and present transformative concepts addressing real-world challenges. Participants gain opportunities to network, showcase their vision, and explore impactful technological advancements, driving the future of innovation and entrepreneurship.";
  const textContent = document.getElementById("text-content");
  
  let index = 0;
  
  function type() {
      if (index < text.length) {
          textContent.innerHTML += text.charAt(index);
          index++;
      } else {
          index = 0;
          textContent.innerHTML = "";
      }
      setTimeout(type, 30); 
  }
  
  type();
});


document.addEventListener("DOMContentLoaded", () => {
  const text = "Fill your details to Participate in TechSparks !!"; // The text to type out
  const typingElement = document.getElementById("typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
    } else {
      index = 0;
      typingElement.innerHTML = "";
    }
    setTimeout(type, 150);
  }

  type(); 
});
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
// Form submission handler
document.querySelectorAll("form").forEach((form) => {
  form.onsubmit = (e) => {
    e.preventDefault(); 

   
    const inputs = form.querySelectorAll("input, select");
    let allFilled = true;

    inputs.forEach((input) => {
      if (
        input.type !== "submit" &&
        (input.value.trim() === "" || input.value === "Choose an Event" || input.value === "Choose a Domain ")
      ) {
        allFilled = false; 
      }
    });

    if (!allFilled) {
      const validationModal = document.getElementById("validationModal");
      validationModal.style.display = "flex";

     
      document.getElementById("closeValidationModal").onclick = () => {
        validationModal.style.display = "none";
      };
      return; 
    }

  
    const successModal = document.getElementById("successModal");
    successModal.style.display = "flex";

    // Clear all input fields and dropdowns in the form
    inputs.forEach((input) => {
      if (input.type === "text" || input.type === "email" || input.type === "tel") {
        input.value = ""; 
      } else if (input.tagName.toLowerCase() === "select") {
        input.selectedIndex = 0; 
      }
    });

    
    document.getElementById("closeSuccessModal").onclick = () => {
      successModal.style.display = "none";
    };
  };
});
