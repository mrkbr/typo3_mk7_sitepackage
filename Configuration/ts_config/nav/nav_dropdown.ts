

temp.navDropdown = HMENU
temp.navDropdown {
	special = directory
	special.value = 1
	expAll = 1
	
    # erstes level
	1 = TMENU
	1 {
		#noBlur=1
		expAll = 1
		wrap = <ul class="sf-menu sf-navbar">|</ul>
		
		
		# no state: normale Formatierung
		NO{
			ATagParams = onfocus="blur();"
			wrapItemAndSub = <li>|</li>
		}
	 	
		# act state: gültig von der rootseite bis zur aktuellen Seite
		ACT=1
		ACT{
			wrapItemAndSub = <li>|</li>
			ATagParams = class="main1_act_a" onfocus="blur();"
		}
	 	
	 	# cur state: gültig für die aktuelle Seite
		CUR=1
		CUR{
			doNotLinkIt = 0
			ATagParams = class="main1_cur_a" onfocus="blur();"
			wrapItemAndSub = <li>|</li>
		}
		
		IFSUB = 1
		IFSUB {
			wrapItemAndSub = <li class="has-sub">|</li>
		}
	}
  
	2 = TMENU
	2 {
		# no state: normale Formatierung
		#noBlur=1
		wrap = <ul id="nav2_ul">|</ul>
		expAll = 1
		
		NO{
			ATagParams = onfocus="blur();"
			wrapItemAndSub = <li>|</li>
			#linkWrap2 = &#124;| |*| &#124;| |*| |&#124;  
		}
		
		# act state: gültig von der rootseite bis zur aktuellen Seite
		ACT=1
		ACT{
			wrapItemAndSub = <li>|</li>
			ATagParams = id="main2_act_a" onfocus="blur();"
		}
		
		# cur state: gültig für die aktuelle Seite
		CUR=1
		CUR{
			doNotLinkIt = 0
			ATagParams = id="main2_cur_a" onfocus="blur();"
			wrapItemAndSub = <li>|</li>
		}
	}
	
	3 = TMENU
	3.wrap = <ul id="nav3_ul">|</ul>
	3{
		# no state: normale Formatierung
		#noBlur=1
		expAll = 1
		NO{
		ATagParams = onfocus="blur();"
		wrapItemAndSub = <li>|</li>
		
		}
		# act state: gültig von der rootseite bis zur aktuellen Seite
		ACT=1
		ACT{
		wrapItemAndSub = <li>|</li>
		ATagParams = id="main3_act_a" onfocus="blur();"
		}
		# cur state: gültig für die aktuelle Seite
		CUR=1
		CUR{
		doNotLinkIt = 0
		ATagParams = id="main3_cur_a" onfocus="blur();"
		wrapItemAndSub = <li>|</li>
		}
	}
  
  
}


temp.navFooter2 < temp.navSuperfish
temp.navFooter2.1.wrap = <ul class="navFooter">|</ul>