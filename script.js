fetch("https://fw-backend.vercel.app/year")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#year").textContent = data.currentYear;
  });
