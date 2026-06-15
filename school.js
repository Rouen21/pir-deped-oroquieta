function initSchoolPage() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const school = schools.find((s) => s.id === id);

  if (!school) {
    window.location.href = "index.html";
    return;
  }

  document.title = `${school.name} — PIR Dashboard`;

  const nameEl = document.getElementById("school-name");
  const typeEl = document.getElementById("school-type");

  nameEl.textContent = school.name;

  const typeLabel = school.type === "integrated" ? "Integrated School" : "Elementary School";
  typeEl.textContent = typeLabel;
  typeEl.className = `welcome-type ${school.type}`;
}

document.addEventListener("DOMContentLoaded", initSchoolPage);
