if (localStorage.getItem("recapitalization_enabled") === "true") {
  document.getElementById("recapitalization").checked = true;
}
if (localStorage.getItem("persona_selected")) {
	document.getElementById("persona").value = localStorage.getItem("persona_selected");
    document.getElementById("avatar").src = `/assets/avatars/${localStorage.getItem("persona_selected")}.png`;
	if (localStorage.getItem("persona_selected") == "human") {
		document.getElementById("avatar").title = "Art by wormstarrcat";
	} else {
		document.getElementById("avatar").title = "Art by Kode";
	}
    personaStylesheet.href = `/stylesheets/${localStorage.getItem("persona_selected")}.css`;
}

document.getElementById("recapitalization").addEventListener("change", () => {
  if (document.getElementById("recapitalization").checked) {
    localStorage.setItem("recapitalization_enabled", "true");
  } else {
    localStorage.removeItem("recapitalization_enabled");
  }
});
document.getElementById("persona").addEventListener("change", () => {
    document.getElementById("avatar").src = `/assets/avatars/${document.getElementById("persona").value}.png`;
	if (document.getElementById("persona").value == "human") {
		document.getElementById("avatar").title = "Art by wormstarrcat";
	} else {
		document.getElementById("avatar").title = "Art by Kode";
	}
    personaStylesheet.href = `/stylesheets/${document.getElementById("persona").value}.css`;
	localStorage.setItem("persona_selected", document.getElementById("persona").value);
});

document.getElementById("personaOption").style.display = "block";