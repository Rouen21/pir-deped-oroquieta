const markerColors = {
  integrated: "#1d4ed8",
  elementary: "#f97316",
};

let map;
let markers = {};
let activeSchoolId = null;
let districtMode = false;
let districtMarker = null;

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

function buildPopup(school, useDistrictView = false) {
  const href = useDistrictView ? "school.html?district=6" : `school.html?id=${school.id}`;
  const ctaLabel = useDistrictView ? "View District" : "View School";

  return `
    <div class="popup-title">${school.name}</div>
    <a href="${href}" class="popup-btn">${ctaLabel}</a>
  `;
}

function renderSchoolList() {
  const list = document.getElementById("school-list");
  list.innerHTML = "";

  const districtLabel = document.querySelector(".district-label");
  if (districtLabel) {
    districtLabel.classList.toggle("active", districtMode);
  }

  schools.forEach((school) => {
    const li = document.createElement("li");
    li.className = `school-item${school.id === activeSchoolId ? " active" : ""}`;
    li.dataset.id = school.id;

    li.innerHTML = `<div class="school-name">${school.name}</div>`;

    li.addEventListener("click", () => focusSchool(school.id));

    list.appendChild(li);
  });
}

function focusSchool(id) {
  const school = schools.find((s) => s.id === id);
  if (!school) return;

  districtMode = false;
  activeSchoolId = id;
  renderSchoolList();
  setPopupMode(false);
  if (districtMarker) {
    map.removeLayer(districtMarker);
    districtMarker = null;
  }

  Object.entries(markers).forEach(([markerId, marker]) => {
    const s = schools.find((sc) => sc.id === Number(markerId));
    marker.setIcon(createIcon(s.type, Number(markerId) === id));
  });

  map.flyTo(school.coords, 15, { duration: 0.8 });
  markers[id].openPopup();
}

function setPopupMode(useDistrictView) {
  schools.forEach((school) => {
    const marker = markers[school.id];
    if (!marker) return;
    marker.bindPopup(buildPopup(school, useDistrictView));
  });
}

function focusDistrict() {
  const district = Array.isArray(districts) ? districts.find((d) => d.id === 6) : null;
  if (!district) return;

  districtMode = true;
  activeSchoolId = null;
  renderSchoolList();
  setPopupMode(false);

  Object.entries(markers).forEach(([markerId, marker]) => {
    const s = schools.find((sc) => sc.id === Number(markerId));
    marker.setIcon(createIcon(s.type, true));
  });

  const districtSchools = schools.filter((school) => district.schoolIds.includes(school.id));
  if (districtSchools.length === 0) return;

  const bounds = L.latLngBounds(districtSchools.map((s) => s.coords));
  map.fitBounds(bounds, { padding: [40, 40] });

  const center = bounds.getCenter();
  if (districtMarker) {
    map.removeLayer(districtMarker);
  }

  districtMarker = L.marker(center, {
    icon: L.divIcon({
      className: "district-marker",
      html: `<span class="district-marker-dot">D6</span>`,
      iconSize: [46, 46],
      iconAnchor: [23, 23],
    }),
  }).addTo(map);

  districtMarker.bindPopup(`
    <div class="popup-title">${district.name}</div>
    <a href="school.html?district=${district.id}" class="popup-btn">View District</a>
  `);

  districtMarker.openPopup();
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
      if (districtMarker) {
        map.removeLayer(districtMarker);
        districtMarker = null;
      }
      districtMode = false;
      activeSchoolId = school.id;
      renderSchoolList();
      setPopupMode(false);
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
  const districtLabel = document.querySelector(".district-label");
  if (districtLabel) {
    districtLabel.addEventListener("click", focusDistrict);
  }
  renderSchoolList();
  initMap();
  initPopupNavigation();
  setTimeout(handleMapResize, 150);
});
