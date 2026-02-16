const now = new Date();
const birthDate = new Date("2009-10-29T00:00:00");
if (now.getMonth() > birthDate.getMonth()) {
	year = now.getFullYear() + 1;
} else {
	year = now.getFullYear();
}
const nextBirthday = new Date(`${year}-10-29T00:00:00`);
const ageElement = document.getElementById("age");

let currentFormat = "normal";

function nerdFormat() {
	const now = new Date();
	let years = now.getFullYear() - birthDate.getFullYear();
	const hasHadBirthdayThisYear =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() &&
    now.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
        years--;
    }
	const secondsOld = Math.floor((Date.now() + nextBirthday.getTime()) / 1000);
    ageElement.textContent = `${years}.${secondsOld}-year-old`;
}

function normalFormat() {
    const now = new Date();
	const birthDate = new Date("2009-10-29T00:00:00");
    let years = now.getFullYear() - birthDate.getFullYear();

    const hasHadBirthdayThisYear =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() &&
    now.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
        years--;
    }

    ageElement.textContent = `${years}-year-old`;
}

function toggleAgeFormat() {
    currentFormat = currentFormat === "normal" ? "nerd" : "normal";
    updateAge();
}

function updateAge() {
    if (currentFormat === "normal") {
        normalFormat();
    } else {
        nerdFormat();
    }
}

const checkbox = document.getElementById("recapitalization");
const STORAGE_KEY = "recapitalization_enabled";

// Load saved state on page load
if (localStorage.getItem(STORAGE_KEY) === "true") {
  checkbox.checked = true;
}

// Listen for changes
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    localStorage.setItem(STORAGE_KEY, "true");
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
});


// Initialize
clickableTextInfo.style.display = "block";
ageElement.classList = "clickable";
document.getElementById("age").innerHTML = now.getFullYear();
updateAge();
setInterval(updateAge, 1000);
