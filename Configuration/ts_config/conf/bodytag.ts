/*	
┌───────────────────────────────────────────────┐
	Copyright: Mario Kober, m@mk7.de
	Benutzung nur mit schriftlicher Erlaubnis
	
	Funktion:
	Backend grid defines body class for css
└───────────────────────────────────────────────┘ 
*/


# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Backend grid view defines body class for css
#
temp.bodyTagCOA = CASE
temp.bodyTagCOA {

	key.field = backend_layout
	key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
	default = TEXT
	default.value = typ1
	pagets__one_col = TEXT
	pagets__one_col.value = one_col
	#pagets__two_col = TEXT
	#pagets__two_col.value = two_col
	3 = TEXT
	3.value = typ3
	4 = TEXT
	4.value = typ4
	5 = TEXT
	5.value = typ5
	6 = TEXT
	6.value = typ6
	7 = TEXT
	7.value = typ7
	8 = TEXT
	8.value = typ8
	9 = TEXT
	9.value = typ9
	10 = TEXT
	10.value = typ10

	stdWrap.insertData = 1
	stdWrap.noTrimWrap = | class="| pid_{page:pid}" id="uid_{page:uid}"
	stdWrap.outerWrap =  <body | >

}
