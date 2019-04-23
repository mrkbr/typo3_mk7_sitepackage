/*
┌───────────────────────────────────────────────┐
	Copyright: Mario Kober, m@mk7.de
	Benutzung nur mit schriftlicher Erlaubnis

	Funktion:
	Main Page Object
└───────────────────────────────────────────────┘
*/




page {

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# template object erstellen

	10 = TEMPLATE
	10 {

		template = FILE
		template.file = {$path.html}main.html
		
		workOnSubpart = DOKUMENT

		subparts {

			### 4 = PIC
			CONTENT_PIC < styles.content.get
			CONTENT_PIC {
				slide = -1
				select.where = colPos=4
				stdWrap.required = 1
				stdWrap.wrap = <section class="contentPic">|</section>
			}

			### 1 = left
			CONTENT_LEFT < styles.content.get
			CONTENT_LEFT {
				select.where = colPos=1
				slide = -1
				stdWrap.required = 1
				stdWrap.wrap = <section class="contentLeft">|</section>
			}
			
			### 0 = main
			CONTENT_MAIN < styles.content.get
			CONTENT_MAIN {
				stdWrap.required = 1
				stdWrap.wrap = <main>|</main>
			}
			
			### 2 = main
			CONTENT_RIGHT < styles.content.get
			CONTENT_RIGHT {
				select.where = colPos=2
				stdWrap.required = 1
				stdWrap.wrap = <aside>|</aside>
			}

			### 3 = border
			CONTENT_BORDER < styles.content.get
			CONTENT_BORDER {
				select.where = colPos=3
				stdWrap.required = 1
				stdWrap.wrap = <section class="contentBorder">|</section>
			}

			### 5 = SUB
			CONTENT_SUB < styles.content.get
			CONTENT_SUB {
				slide = -1
				select.where = colPos=5
				stdWrap.required = 1
				stdWrap.wrap = <section class="contentSub">|</section>
			}

			SPRACHWAHL_HEADER < lib.language
			SPRACHWAHL_FOOTER < lib.language
			
			LOGO < obj.logo

			NAV = COA
			NAV { 
				wrap = <nav class="main">|</nav>
				10 < obj.navOne
				20 < obj.navTwo
			}

			CONTENT_FOOTER = COA
			CONTENT_FOOTER.10 < obj.content_footer
			CONTENT_FOOTER.20 < obj.navFooter
			


			GOOGLE_ANALYTICS < temp.google_analytics

		} #subparts ende

	} #10 ende



# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# MAIN PAGE OBJECT END
}
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


