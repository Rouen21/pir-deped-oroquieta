const markerColors = {
  integrated: "#1d4ed8",
  elementary: "#f97316",
};

let map;
let markers = {};
let activeSchoolId = null;

function createIcon(type, highlighted = false) {
  const color = markerColors[type];
  const size = highlighted ? 22 : 16;
  const border = highlighted ? 4 : 3;

  return L.divIcon({
    className: "custom-marker",
    html: `<span style="
      display: block;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border: ${border}px solid #fff;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.35);
      transition: all 0.2s;
    "></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function buildPopup(school) {
  const typeLabel = school.type === "integrated" ? "Integrated School" : "Elementary School";
  return `
    <div class="popup-title">${school.name}</div>
    <div class="popup-type" style="color:${markerColors[school.type]}">${typeLabel}</div>
    <a href="school.html?id=${school.id}" class="popup-btn">Open School</a>
  `;
}

function renderSchoolList() {
  const list = document.getElementById("school-list");
  list.innerHTML = "";

  schools.forEach((school) => {
    const li = document.createElement("li");
    li.className = `school-item${school.id === activeSchoolId ? " active" : ""}`;
    li.dataset.id = school.id;

    const typeLabel = school.type === "integrated" ? "Integrated" : "Elementary";

    li.innerHTML = `
      <div class="school-type ${school.type}">${typeLabel}</div>
      <div class="school-name">${school.name}</div>
    `;

    li.addEventListener("click", () => focusSchool(school.id));

    list.appendChild(li);
  });
}

function focusSchool(id) {
  const school = schools.find((s) => s.id === id);
  if (!school) return;

  activeSchoolId = id;
  renderSchoolList();

  Object.entries(markers).forEach(([markerId, marker]) => {
    const s = schools.find((sc) => sc.id === Number(markerId));
    marker.setIcon(createIcon(s.type, Number(markerId) === id));
  });

  map.flyTo(school.coords, 15, { duration: 0.8 });
  markers[id].openPopup();
}

function initMap() {
  map = L.map("map-container").setView([8.428, 123.75], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map);

  const bounds = L.latLngBounds(schools.map((s) => s.coords));

  schools.forEach((school) => {
    const marker = L.marker(school.coords, {
      icon: createIcon(school.type),
    }).addTo(map);

    marker.bindPopup(buildPopup(school));
    marker.on("click", () => {
      activeSchoolId = school.id;
      renderSchoolList();
      Object.entries(markers).forEach(([markerId, m]) => {
        const s = schools.find((sc) => sc.id === Number(markerId));
        m.setIcon(createIcon(s.type, Number(markerId) === school.id));
      });
    });

    markers[school.id] = marker;
  });

  map.fitBounds(bounds, { padding: [40, 40] });

  window.addEventListener("resize", handleMapResize);
  window.addEventListener("orientationchange", () => {
    setTimeout(handleMapResize, 300);
  });
}

function handleMapResize() {
  if (map) map.invalidateSize();
}

function showLoading() {
  const overlay = document.getElementById("loading-overlay");
  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");
}

function initPopupNavigation() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".popup-btn");
    if (!btn) return;

    e.preventDefault();
    showLoading();

    setTimeout(() => {
      window.location.href = btn.getAttribute("href");
    }, 700);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSchoolList();
  initMap();
  initPopupNavigation();
  setTimeout(handleMapResize, 150);
});
