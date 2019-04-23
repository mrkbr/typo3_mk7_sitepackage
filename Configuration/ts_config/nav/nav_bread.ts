temp.navBreadcrumb = HMENU
temp.navBreadcrumb {
	special = rootline
	special.range = 2|-1
	1 = TMENU
	1.noBlur = 1
	1.wrap = <ul id="breadcrumb"> | </ul>
	1.NO.linkWrap = <li> | / </li>
	1.NO.ATagTitle.field = title
	1.NO.ATagTitle.noTrimWrap = | zur Seite: |
	1.CUR = 1
	1.CUR {
		linkWrap = <li><span class="spot5" title="Sie befinden sich auf der Seite:"> | </span></li>
		doNotLinkIt = 1
	}
}