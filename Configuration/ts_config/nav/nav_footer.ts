obj.navFooter = HMENU
obj.navFooter {
	
	special = directory
	special.value = 19
	
	1 = TMENU
	1 {
		wrap = <div class="ceOut col col25"><div class="ceIn"><ul>|</ul><div><div>
		NO = 1
		NO.linkWrap = <li>|</li>
		#NO.ATagParams = class
		
		ACT < .NO
		ACT.linkWrap = <li class="act">|</li>
		
		CUR < .ACT
	}
}