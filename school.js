function renderHeadPhoto(head) {
  if (head.image) {
    return `<img src="${head.image}" alt="${head.name}" class="head-image" loading="eager" />`;
  }

  return `<span class="head-placeholder" aria-hidden="true">👤</span>`;
}

function renderSchoolHeads(heads) {
  const container = document.getElementById("school-heads");
  if (!container) return;

  const headList = Array.isArray(heads) ? heads.filter(Boolean) : [];

  if (headList.length === 0) {
    container.innerHTML = `
      <article class="head-card">
        <div class="head-photo"><span class="head-placeholder" aria-hidden="true">👤</span></div>
        <p class="head-name">School Head</p>
      </article>
    `;
    return;
  }

  container.innerHTML = headList
    .map(
      (head) => `
        <article class="head-card">
          <div class="head-photo">${renderHeadPhoto(head)}</div>
          <p class="head-name">${head.name}</p>
          ${head.role ? `<p class="head-role">${head.role}</p>` : ""}
        </article>
      `
    )
    .join("");
}

function renderActionButtons(documents = {}, actions = schoolActions) {
  const container = document.getElementById("action-buttons");
  if (!container) return;

  container.innerHTML = actions
    .map((action) => {
      const url = documents[action.key];
      const disabled = !url;

      return `
        <button
          type="button"
          class="action-btn${disabled ? " action-btn--disabled" : ""}"
          data-url="${url || ""}"
          ${disabled ? "disabled aria-disabled=\"true\"" : ""}
        >${action.label}</button>
      `;
    })
    .join("");

  container.querySelectorAll(".action-btn:not([disabled])").forEach((button) => {
    button.addEventListener("click", () => {
      const url = button.dataset.url;
      if (url) window.open(url, "_blank", "noopener,noreferrer");
    });
  });
}

function initSchoolPage() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const districtId = Number(params.get("district"));
  const schoolNameElement = document.getElementById("school-name");
  const headsContainer = document.getElementById("school-heads");

  const districtList = Array.isArray(districts) ? districts : [];
  const district = districtList.find((d) => d.id === districtId);

  if (district) {
    document.title = `${district.name} — PIR Dashboard`;
    if (schoolNameElement) {
      schoolNameElement.textContent = district.name;
      schoolNameElement.style.webkitTextFillColor = "#1e3a8a";
    }

    if (headsContainer) {
      headsContainer.style.display = "none";
    }

    renderActionButtons(district.documents || {}, districtActions);
    return;
  }

  const schoolList = Array.isArray(schools) ? schools : [];
  const school = schoolList.find((s) => s.id === id) || schoolList[0];

  if (!school) {
    if (schoolNameElement) schoolNameElement.textContent = "School";
    renderSchoolHeads([]);
    renderActionButtons({});
    return;
  }

  document.title = `${school.name} — PIR Dashboard`;
  if (schoolNameElement) {
    schoolNameElement.textContent = school.name;
    schoolNameElement.style.webkitTextFillColor = "#1e3a8a";
  }

  renderSchoolHeads(school.heads);
  renderActionButtons(school.documents || {});
}

document.addEventListener("DOMContentLoaded", initSchoolPage);
