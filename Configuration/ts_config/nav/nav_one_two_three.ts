temp.nav_one_two_three = HMENU
temp.nav_one_two_three {

	special = directory
	special.value = 16
	excludeUidList =

	1 = TMENU
	1.wrap = <ul class="level1 mk7">|</ul>
	1 {
		noBlur=1
		
		NO{
			wrapItemAndSub = <li class="level1">|</li>
			ATagParams = onfocus="blur();"
		}
		
		ACT < .NO
		ACT{
			wrapItemAndSub = <li class="level1 act">|</li>
			ATagParams = class="level1 act" onfocus="blur();"
		}
		
		CUR < .NO
		CUR{
			wrapItemAndSub = <li class="level1 cur">|</li>
			ATagParams = class="level1 cur" onfocus="blur();"
		}
	}



	2 = TMENU
	2.wrap = <ul class="level2">|</ul>
	2 {
		noBlur=1
		excludeUidList=
		
		NO{
			wrapItemAndSub = <li class="level2">|</li>
			ATagParams = onfocus="blur();"
		}

		ACT < .NO
		ACT{
			wrapItemAndSub = <li class="level2 act">|</li>
			ATagParams = class="level2 act" onfocus="blur();"
		}
		
		CUR < .NO
		CUR{
			wrapItemAndSub = <li class="level2 cur">|</li>
			ATagParams = class="level2 cur" onfocus="blur();"
		}
	}



	3 = TMENU
	3.wrap = <ul class="level3">|</ul>
	3 {
		noBlur=1
		excludeUidList=
		
		NO{
			wrapItemAndSub = <li class="level3">|</li>
			ATagParams = onfocus="blur();"
		}
		
		ACT < .NO
		ACT{
			wrapItemAndSub = <li class="level3 act">|</li>
			ATagParams = class="level3 act" onfocus="blur();"
		}

		CUR < .NO
		CUR{
			wrapItemAndSub = <li class="level3 act cur">|</li>
			ATagParams = class="level3 cur" onfocus="blur();"
		}
	}
}
#temp ende



