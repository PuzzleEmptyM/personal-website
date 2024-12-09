export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const headerOffset = 35; // Adjust this value to match your header height
    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
