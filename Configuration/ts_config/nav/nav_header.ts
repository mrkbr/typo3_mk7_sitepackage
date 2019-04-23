temp.navHeader = HMENU
temp.navHeader {
	special = directory
	special.value = 25

	1 = TMENU
	1.wrap = <ul>|</ul>
	1 {
		noBlur=1

		NO = 1
		NO{
			wrapItemAndSub = <li>|</li>
			ATagBeforeWrap = 1
			linkWrap = <span>|</span>
			ATagParams = onfocus="blur();"
		}
		 		# act state: g¸ltig von der rootseite bis zur aktuellen Seite
		ACT < .NO
		ACT {
			wrapItemAndSub = <li class="act">|</li>
			doNotLinkIt = 0
			ATagParams = class="act" onfocus="blur();"
		}

		CUR < .ACT
		CUR = 1
		CUR {
			wrapItemAndSub = <li class="cur">|</li>
		}
	}
}
