if (localStorage.getItem("persona_selected")) {
	document.getElementById("persona").value = localStorage.getItem("persona_selected");
	if (document.getElementById("avatar")) {
		if (localStorage.getItem("persona_selected") == "human") {
			document.getElementById("avatar").title = "Art by wormstarrcat";
		} else {
			document.getElementById("avatar").title = "Art by Kode";
		}
		
		document.getElementById("avatar").src = `/assets/avatars/${document.getElementById("persona").value}.png`;
	}
    personaStylesheet.href = `/stylesheets/${localStorage.getItem("persona_selected")}.css`;
}
document.getElementById("persona").addEventListener("change", () => {
	if (document.getElementById("avatar")) {
		if (localStorage.getItem("persona_selected") == "human") {
			document.getElementById("avatar").title = "Art by wormstarrcat";
		} else {
			document.getElementById("avatar").title = "Art by Kode";
		}
		
		document.getElementById("avatar").src = `/assets/avatars/${document.getElementById("persona").value}.png`;
	}
    personaStylesheet.href = `/stylesheets/${document.getElementById("persona").value}.css`;
	localStorage.setItem("persona_selected", document.getElementById("persona").value);
});

document.getElementById("options").style.display = "block";