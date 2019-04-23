/*
┌───────────────────────────────────────────────┐
	Copyright: Mario Kober, m@mk7.de
	Benutzung nur mit schriftlicher Erlaubnis

	Funktion:
	Standardwerte und TCE Manipulation
└───────────────────────────────────────────────┘
*/



### Übersetzungen immer auf selber Höhe wie Original
mod.web_layout.defLangBinding=1





### "Kopie1" bei kopierten Inhalten nicht anfügen
TCEMAIN.table.tt_content {
    disablePrependAtCopy = 1
    #disableHideAtCopy = 1
}




TCEFORM.tt_content.subheader.disabled = 0





TCAdefaults.tt_content {
	sectionIndex = 0
	imageorient = 2
}







/*
┌───────────────────────────────────────────────┐
	Standardwerte
└───────────────────────────────────────────────┘
*/
mod.wizards.newContentElement.wizardItems.common.elements

	### Bild+Text
	textpic {
		### Bildposition "Neben dem Text links = 26" "oben links = 2 "
		tt_content_defValues.imageorient = 2

		### Anzahl der Spalten auf 1
		tt_content_defValues.imagecols = 0
	}


	### Nur Bilder
	image {
		# Bildposition "Oben links"
		tt_content_defValues.imageorient = 2

		# Anzahl der Spalten auf 1
		tt_content_defValues.imagecols = 0
	}


}













