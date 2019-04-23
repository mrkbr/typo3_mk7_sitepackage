### PIC MAIN - ohne Seitenleiste
mod.web_layout.BackendLayouts {
	one_col {
		title = INHALTE (1 Spalte)
		#icon = EXT:example_extension/Resources/Public/Images/BackendLayouts/default.gif
		config {
			backend_layout {
				colCount = 3
				rowCount = 3
				rows {
				  
					1 {
						columns {
							1 {
							name = SLIDER OBEN
							colspan = 3
							colPos = 4
							}
						}
					}
					1 >
					
					2 {
						columns {
						
							1 {
								name = INHALTE
								colspan = 3
								colPos = 0
							}
							2 {
								name = RIGHT
								colPos = 2
							}
							2 >
						}
					}
					
					
					3 {
						columns {
							1 {
								name = SUB (BORDER)
								colspan = 3
								colPos = 3
							}
						}
					}
					3 >
				  
				}
			}### backend_layout
		}### config
	}### onecol
}###layout

#mod.web_layout.BackendLayouts.one_col >




### PIC MAIN - ohne Seitenleiste
mod.web_layout.BackendLayouts {
	two_col {
		title = SLIDER und INHALTE (2 Spalten)
		#icon = EXT:example_extension/Resources/Public/Images/BackendLayouts/default.gif
		config {
			backend_layout {
				colCount = 3
				rowCount = 3
				rows {
				  
					1 {
						columns {
							1 {
							name = SLIDER
							colspan = 3
							colPos = 4
							}
						}
					}
					
					2 {
						columns {
						
							1 {
								name = HAUPTINHALTE
								colspan = 3
								colPos = 0
							}
							2 {
								name = RIGHT
								colPos = 2
							}
							2 >
						}
					}
					
					3 {
						columns {
							1 {
								name = SUB (BORDER)
								colspan = 3
								colPos = 3
							}
						}
					}
					3 >
				  
				}
			}### backend_layout
		}### config
	}### onecol
}###layout

#mod.web_layout.BackendLayouts.two_col >