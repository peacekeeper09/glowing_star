let stars = [];
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      let star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.width = Math.random() * 3 + "px";
      star.style.height = star.style.width;
      star.style.opacity = Math.random() * 0.7 + 0.3;

      if (Math.random() < 0.2) {
        star.style.animationDelay = Math.random() * 3 + "s";
      }

      document.getElementById("stars").appendChild(star);
    }
