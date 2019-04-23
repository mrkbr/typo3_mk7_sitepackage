obj.navTwo = HMENU
obj.navTwo {

	entryLevel = 16
	excludeUidList = 17,20,21

	1 = TMENU
	1.wrap = <ul class="level2">|</ul>
	1 {
		# no state: normale Formatierung
		noBlur=1
		NO{
			wrapItemAndSub = <li class="level2">|</li>
			ATagParams = onfocus="blur();" class="level2 no"
		}
		# act state: gültig von der rootseite bis zur aktuellen Seite
		ACT=1
		ACT{
			wrapItemAndSub = <li class="level2 act">|</li>
			ATagParams = class="level2 act" onfocus="blur();"
		}
		# cur state: gültig für die aktuelle Seite
		CUR=1
		CUR{
			wrapItemAndSub = <li class="level2 cur">|</li>
			ATagParams = class="level2 cur" onfocus="blur();"
		}
	}
}
#temp ende



