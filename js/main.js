document.addEventListener("DOMContentLoaded", () => {

  const engineers = [
    { name: "Abdirahman Cabdi", desc: "Visionary, analytical, detail-oriented, and passionate about clean, scalable software." },
    { name: "Abdullahi Arab", desc: "Structured, solution-driven, collaborative, and consistent in delivering excellence." },
    { name: "Calton", desc: "Creative thinker with strong attention to detail." },
    { name: "Aucxley", desc: "Organized, diligent, delivers clean solutions." },
    { name: "Bryan", desc: "Innovative, adaptable, consistently striving for excellence." },
    { name: "Abdulhadi", desc: "Proactive, focused, ensures high standards." },
    { name: "Andy Kimathi", desc: "Team-oriented, reliable, maintains consistency." },
    { name: "Abdullahi", desc: "Detail-oriented, communicative, dedicated to goals." },
    { name: "Edwin", desc: "Analytical thinker, persistent, brings creative solutions." },
    { name: "Phoebe", desc: "Energetic, collaborative, produces high-quality work." },
    { name: "Aurelia", desc: "Methodical, professional, strong attention to UX." },
    { name: "Bakari", desc: "Innovative, precise, highly committed to excellence." },
    { name: "Eugene Kuria", desc: "Reliable, efficient, and supportive of team productivity." },
    { name: "Gideon Lelei", desc: "Motivated, proactive, demonstrates strong work ethic." },
    { name: "Alvin", desc: "Organized, adaptable, delivers clean professional results." },
    { name: "Isaiah", desc: "Persistent, detail-oriented, and disciplined." }
  ];

  const grid = document.getElementById("engineers-grid");

  if (!grid) {
    console.error("❌ engineers-grid not found in DOM");
    return;
  }

  engineers.forEach(engineer => {
    const card = document.createElement("div");
    card.className = "engineer-card";

    card.innerHTML = `
      <h4>${engineer.name}</h4>
      <p>${engineer.desc}</p>
    `;

    grid.appendChild(card);
  });

  console.log("✅ Engineers grid loaded successfully");

});
