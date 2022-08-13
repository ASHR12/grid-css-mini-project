document.addEventListener("DOMContentLoaded", function (event) {
  // ********** set date ************
  // select span
  const date = (document.getElementById("date").innerHTML =
    new Date().getFullYear());

  // ********** nav toggle ************
  // select button and links
  const navBtn = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  // add event listener
  navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
  });

  // ********** smooth scroll ************
  // select links
  const scrollLinks = document.querySelectorAll(".scroll-link");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // prevent default
      e.preventDefault();
      links.classList.remove("show-links");

      const id = e.target.getAttribute("href").slice(1);
      console.log(
        "🚀 ~ file: main.js ~ line 26 ~ link.addEventListener ~ id",
        id
      );
      const element = document.getElementById(id);
      //
      console.log(element);
      // the 60 value is actual hight of navbar.
      let position = element.offsetTop - 60.8;
      console.log(position);

      window.scrollTo({
        left: 0,
        // top: element.offsetTop,
        top: position,
        behavior: "smooth",
      });
    });
  });
});
