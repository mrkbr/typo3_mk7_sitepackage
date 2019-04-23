obj.navOne = HMENU
obj.navOne {
	#entryLevel = 1
	special = directory
	special.value = 1
	
	1 = TMENU
	1.wrap = <ul class="level1">|</ul>
	1 {
		noBlur=1
		
		NO = 1
		NO {
			wrapItemAndSub = <li class="level1">|</li>
			ATagParams = class="level1" onfocus="blur();"
		}
		
		ACT < .NO
		ACT{
			wrapItemAndSub = <li class="level1 act">|</li>
			doNotLinkIt = 0
			ATagParams = class="level1 act" onfocus="blur();"
		}
		CUR < .NO
		CUR{
			wrapItemAndSub = <li class="level1 cur">|</li>
			ATagParams = class="level1 cur" onfocus="blur();"
		}
	}
}
