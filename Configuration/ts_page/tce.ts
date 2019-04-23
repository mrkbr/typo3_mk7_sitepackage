


### ---------------------
### TCE
### ---------------------
TCEFORM.tt_content {


	### Überschriften
	header_layout {
		removeItems = 0,5
		altLabels {
			1 = H1: Wichtigste (1x pro Seite)
			2 = H2: Wichtig (1-5x pro Seite)
			3 = H3: Unwichtig
			4 = H4: Klein
			#5 = Grafisch GROSS
		}
	}




	# Spaltenauswahl nur noch einspaltig
	imagecols {
		removeItems = 5,6,7,8
	}



	### If set, the element "CURRENT VALUE IS NOT AVAILABLE" will not be added to the list
	imageorient {
		#removeItems = 0,1,2,8,9,10,17,18,25,--div--
		disableNoMatchingValueElement = 1
	}
	
	
	



	layout {
		removeItems = 1,2,3
		label.de = Darstellung / Funktion

		altLabels {
			0 = ----------------------
		}
		addItems {
			10 = Fixiert am oberen Rand
			11 = Intro-Text (gross & zentriert)
			12 = 

		}
	}



	
	frame_class {
		label.de = Breite
		#removeItems = 1,5,6,10,11,12,20,21,66
		removeItems = ruler-before,ruler-after,indent,indent-left,indent-right
		altLabels {
			default = ----------------------
			none = Inhalt auf Fensterbreite
		}
		addItems {
			
			#trenner = ----------------------
			
			col16 = Breite 16%
			col20 = Breite 20%
			col25 = Breite 25%
			col30 = Breite 30%
			col33 = Breite 33%
			col40 = Breite 40%
			col50 = Breite 50%
			col60 = Breite 60%
			col66 = Breite 66%
			col70 = Breite 70%
			col75 = Breite 75%
			col80 = Breite 80%
			col84 = Breite 84%
			col100 = Breite 100%
			box = Breite 100% Boxed
			
		}
	}
	### ende frame_class
	
	
	
	
		
	
	space_before_class {
		label.de = Abstand vor dem Element
		removeItems = extra-small, small, medium, large, extra-large
		altLabels {
			#0 = ----------------------
			default = NOTHING SELECTED
		}
		addItems {
			afterSmaller = Abstand davor 40px statt 80px
			afterNone = Abstand davor: NULL NADA NIENTE
		}
	}


	space_after_class {
		label.de = Abstand nach dem Element
		removeItems = extra-small, small, medium, large, extra-large
		altLabels {
			#0 = ----------------------
			#none = Inhalt auf Fensterbreite
		}
		addItems {
			#10 = ---------------------------
			#11 = Nächstes Element überlappen
	
			
			
			}
	}





}




