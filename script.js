document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const mobileNavBackground = document.getElementById("mobile-nav-background");

  // Initialize mobileNavBackground style properties
  mobileNavBackground.style.display = "none";
  mobileNavBackground.style.opacity = "0";
  mobileNavBackground.style.transform = "scale(0.8)";

  menuButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to document.body
    if (mobileNavBackground.style.display === "none") {
      mobileNavBackground.style.display = "flex";
      setTimeout(function () {
        mobileNavBackground.style.opacity = "1";
        mobileNavBackground.style.transform = "scale(1.1)"; // Slightly larger scale for pop effect
        setTimeout(function () {
          mobileNavBackground.style.transform = "scale(1)"; // Revert back to normal scale
        }, 200); // Duration of pop effect
      }, 10); // Delay to ensure transition starts properly
    } else {
      mobileNavBackground.style.transform = "scale(1.2)"; // Slightly larger scale for pop-out effect
      setTimeout(function () {
        mobileNavBackground.style.transform = "scale(1.5)"; // Larger scale for pop-out effect
        setTimeout(function () {
          mobileNavBackground.style.transform = "scale(0)"; // Disappear effect
          setTimeout(function () {
            mobileNavBackground.style.display = "none";
          }, 200); // Duration of pop-out effect
        }, 100); // Duration before scaling down to 0
      }, 10); // Delay to ensure transition starts properly
    }
  });

  document.body.addEventListener("click", function (event) {
    if (mobileNavBackground.style.display !== "none") {
      mobileNavBackground.style.transform = "scale(1.2)"; // Slightly larger scale for pop-out effect
      setTimeout(function () {
        mobileNavBackground.style.transform = "scale(1.5)"; // Larger scale for pop-out effect
        setTimeout(function () {
          mobileNavBackground.style.transform = "scale(0)"; // Disappear effect
          setTimeout(function () {
            mobileNavBackground.style.display = "none";
          }, 1); // Duration of pop-out effect
        }, 100); // Duration before scaling down to 0
      }, 10); // Delay to ensure transition starts properly
    }
  });
});
