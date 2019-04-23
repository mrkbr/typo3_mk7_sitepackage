










tx_gridelements {
	# TS Elemente haben Vorrang vor Datensätzen mit gleichen IDs
	overruleRecords = 1

	setup {
	  
		#OneColumns
		#-------------------------------------------------------------------------------
		onecol {
			title = Container für Scroll-Snapping-Darstellung
			description = Container wird eine ganze Fenstergrösse einnehmen
			frame = 1
			#icon = EXT:extensionname/Resources/Public/Icons/Backend/Grids/Grid-Container.png
			flexformDS = FILE:EXT:mk7base/Configuration/ts_config/ext/ext_gridelements_onecol.xml
			topLevelLayout = 0
			config {
				colCount = 1
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Container
								colPos = 1000
							}
						}
					}
				}
			}
		}
	}
}








### TwoCol

tx_gridelements {
	# TS Elemente haben Vorrang vor Datensätzen mit gleichen IDs
	overruleRecords = 1

	setup {
	  
		#TwoColumns
		#-------------------------------------------------------------------------------
		twocol {
			title = Container mit 2 Spalten
			description = Aufteilung lässt sich wählen
			frame = 1
			#icon = EXT:extensionname/Resources/Public/Icons/Backend/Grids/Grid-Container.png
			flexformDS = FILE:EXT:mk7base/Configuration/ts_config/ext/ext_gridelements_twocol.xml
			topLevelLayout = 0
			config {
				colCount = 2
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Linke Spalte
								colPos = 1000
							}
							2 {
								name = Rechte Spalte
								colPos = 1001
							}
						}
					}
				}
			}
		}
	}
}






# Page TSConfig:
tx_gridelements.setup {
	# Identifier
	fullpage {
		title = FullPage-Modul
		description = Container wird eine ganze Fenstergrösse einnehmen
		config {
			colCount = 1
			rowCount = 1
			rows {
				1 {
					columns {
						1 {
							name = Inhalte hier einfügen
							colPos = 1000
						}
					}
				}
			}
		}
		flexformDS = FILE:EXT:mk7base/Configuration/ts_config/ext/ext_gridelements_fullpage.xml
	}
}




