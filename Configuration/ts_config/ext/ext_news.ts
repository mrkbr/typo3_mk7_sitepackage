/*
┌──────────────────────────────────────────┐
	Copyright: Mario Kober, m@mk7.de
	Do not use without permission

	Function:
	tx_news
└──────────────────────────────────────────┘
*/


# Setup News Extension von Georg Ringer
plugin.tx_news {

	singlePid = 6

	settings {
		listPid = {$news.list}
		backPid = {$news.list}
		detailPid = {$news.single}
		startingpoint = {$news.folder}
		cssFile >
		cropMaxCharacters = {$news.teaserCharacters}
		limit = 500
		event {
			#partialRootPaths = {$path.html}newsevent/Partials/
		}

		link {
            #skipControllerAndAction = 1
        }

		relatedFiles {
			download {
				target = _blank
			}
		}


		list {
			paginate {
				#itemsPerPage = 20
			}
			media {
				image {
					maxWidth = 400
					maxHeight = 400
				}
			}
		}

		detail {
			showSocialShareButtons = 0

			media {
				image {
					lightbox.enabled = 0
					maxWidth = 1700
					maxHeight = 1400
				}
			}
		}

	}

	predefine.archive = now



# 	view {
# 		templateRootPaths {
# 			1 = {$path.html}news/Templates/
# 		}
# 		layoutRootPaths {
# 			1 = {$path.html}news/Layouts/
# 		}
# 		partialRootPaths {
# 			1 = {$path.html}news/Partials/
# 		}
# 	}
# 	
	/* 
		Templates
	*/
	view {
		templateRootPaths >
		templateRootPaths {
		        #0 = EXT:news/Resources/Private/Templates/
		        #1 = {$path.html}news/Templates/
		}
		partialRootPaths >
		partialRootPaths {
		        0 = EXT:news/Resources/Private/Partials/
		        1 = {$path.html}news/Partials/
		}
		#layoutRootPaths >
		#layoutRootPaths {
		        #0 = EXT:news/Resources/Private/Layouts/
		 #       1 = {$path.html}news/Layouts/
		#}
    }

	/*
		Sprachvariablen
	*/
	_LOCAL_LANG {
		default {
			#entry = Veranstaltung
			#entries = Veranstaltungen
		}
		de {
			author = %s
			related-files = Downloads
			back-link = zurück
			#entry = Veranstaltung
			#entries = Veranstaltungen
			#dateFormat = d. F Y
			#dateFormat = %d. %B %Y
		}
		en {
			author = %s
			related-files = Downloads
		}
	}


	conf.tx_news_domain_model_news {
        field = title
        htmlSpecialChars = 1
	}
}


