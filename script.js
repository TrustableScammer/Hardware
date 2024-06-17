document.addEventListener("DOMContentLoaded", function() {
    // Function to show selected hardware section
    function showHardwareSection(sectionId) {
      // Hide all sections
      var sections = document.querySelectorAll(".hardware-section");
      sections.forEach(function(section) {
        section.classList.remove("active");
      });
  
      // Show selected section
      var selectedSection = document.getElementById(sectionId);
      selectedSection.classList.add("active");
    }
  
    // Event listeners for menu items
    var cpuMenu = document.getElementById("menu-cpu");
    var gpuMenu = document.getElementById("menu-gpu");
    var ramMenu = document.getElementById("menu-ram");
  
    cpuMenu.addEventListener("click", function(event) {
      event.preventDefault();
      showHardwareSection("cpu-section");
      updateHardwareDescription("cpu-description", "Central Processing Unit (CPU) handles computations and instructions in a computer.");
    });
  
    gpuMenu.addEventListener("click", function(event) {
      event.preventDefault();
      showHardwareSection("gpu-section");
      updateHardwareDescription("gpu-description", "Graphics Processing Unit (GPU) processes graphics and visual data, essential for gaming and multimedia tasks.");
    });
  
    ramMenu.addEventListener("click", function(event) {
      event.preventDefault();
      showHardwareSection("ram-section");
      updateHardwareDescription("ram-description", "Random Access Memory (RAM) provides temporary storage for data and instructions, allowing fast access for the CPU.");
    });
  
    // Function to update hardware descriptions
    function updateHardwareDescription(elementId, description) {
      var descriptionElement = document.getElementById(elementId);
      descriptionElement.textContent = description;
    }
  });
  