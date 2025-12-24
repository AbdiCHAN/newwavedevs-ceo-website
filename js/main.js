// ==========================
// ENGINEERS DATA & MODAL JS
// ==========================

const engineers = [
 {name: "Abdirahman Cabdi", desc: "Demonstrates leadership, vision, and high professionalism in all projects."},
  {name: "Abdullahi Arab", desc: "Known for reliability, problem-solving skills, and collaborative work ethic."},
  {name: "Calton", desc: "Creative thinker with strong attention to detail and high-quality output."},
  {name: "Aucxley", desc: "Organized, diligent, and committed to delivering clean and efficient solutions."},
  {name: "Bryan", desc: "Innovative, adaptable, and consistently strives for excellence."},
  {name: "Abdulhadi", desc: "Proactive, focused, and ensures high standards in every task."},
  {name: "Andy Kimathi", desc: "Team-oriented, reliable, and maintains consistency under pressure."},
  {name: "Abdullahi", desc: "Detail-oriented, communicative, and dedicated to achieving goals."},
  {name: "Edwin", desc: "Analytical thinker, persistent, and brings creative solutions to challenges."},
  {name: "Phoebe", desc: "Energetic, collaborative, and consistently produces high-quality work."},
  {name: "Aurelia", desc: "Methodical, professional, and maintains strong attention to user experience."},
  {name: "Bakari", desc: "Innovative, precise, and highly committed to delivering excellence."},
  {name: "Eugene Kuria", desc: "Leadership qualities, reliable, and ensures team efficiency and quality."},
  {name: "Gideon Lelei", desc: "Motivated, proactive, and demonstrates a strong work ethic."},
  {name: "Alvin", desc: "Organized, adaptable, and focused on delivering clean, professional results."},
  {name: "Isaiah", desc: "Persistent, detail-oriented, and maintains high standards in every project."},
];

// Select the grid container
const grid = document.querySelector(".grid");

// Generate engineer cards dynamically
engineers.forEach((eng, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${eng.name}</h3>
    <p>${eng.desc}</p>
  `;
  card.onclick = () => openModal(index);
  grid.appendChild(card);
});

// ==========================
// MODAL FUNCTIONS
// ==========================
function openModal(index) {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  document.getElementById("modalTitle").innerText = engineers[index].name;
  document.getElementById("modalDescription").innerText = engineers[index].desc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal on clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};
