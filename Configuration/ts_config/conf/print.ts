######################################################################
####Setup Druckversion#####
######################################################################
alt_print >
alt_print = PAGE
alt_print.typeNum=98
alt_print.bodyTag =<body bgcolor="#ffffff" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload="javascript:window.print()">
alt_print.stylesheet = {$plugin.alt.print.file.stylesheet}


alt_print.10 = TEMPLATE
alt_print.10 {
  template = FILE
  template.file = {$plugin.alt.print.file.template}
  marks {
    PAGE_TITLE = TEXT
    PAGE_TITLE.field = title
    PAGE_SUBTITLE = TEXT
    PAGE_SUBTITLE.field = subtitle
    PAGE_AUTHOR = TEXT
    PAGE_AUTHOR.field = author
    PAGE_AUTHOR.required=1
    PAGE_AUTHOR.typolink.parameter.field = author_email
    PAGE_UID = TEXT
    PAGE_UID.field = uid
    CONTENT < styles.content.get
  }
  workOnSubpart = DOCUMENT_BODY
}
####Ende Setup Druckversion#####




temp1.druck = TEXT 
temp1.druck {
     field = uid
	 value = <meta http-equiv="refresh" content="0; URL=javascript:window.print()">
     wrap = <a href="index.php?id=|&type=98"><img src="fileadmin/mk/templates/ef2col/images/print.png" border="0" alt="Seite drucken" title="Aktuelle Seite drucken"></a> 
}







###################################################################
# Druckversion Setup
###################################################################
#alt_print.10.marks.INHALT < styles.content.get
#page.10.marks.PRINT = TEXT 
#page.10.marks.PRINT.field = uid
#page.10.marks.PRINT.wrap = <a href="index.php?id=|&type=98"><img src="fileadmin/templates/v1/images/print.png" border="0" alt="Seite drucken" title="Seite #drucken"></a> 

