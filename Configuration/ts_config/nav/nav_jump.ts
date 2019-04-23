

temp.navJump = CONTENT
temp.navJump {
	wrap = <ul class="jumpToContent">|</ul>
	table = tt_content
	select {
		< styles.content.get
		pidInList = this
		#orderBy = sorting
		#where = colPos = 0
		#languageField = sys_language_uid
		andWhere = sectionIndex >= 1
	}
	renderObj = TEXT
	renderObj {
		field = subheader

		wrap=<li data-jump="{field:uid}">|</li>
		wrap.insertData = 1

		typolink.parameter.field = pid
		typolink.parameter.dataWrap = |#{field:uid}
		if.isTrue.field = subheader
		
		cropHTML = 38|...
	}


}

[globalVar = LIT:1 = {$switch.jumpNav}]
	page.10.subparts.NAV.30 < temp.navJump
[global]