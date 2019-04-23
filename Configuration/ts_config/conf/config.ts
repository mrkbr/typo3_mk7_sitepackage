/*	
┌───────────────────────────────────────────────┐
	Copyright: Mario Kober, m@mk7.de
	Benutzung nur mit schriftlicher Erlaubnis
	
	Funktion:
	Config and small optimizations
└───────────────────────────────────────────────┘ 
*/

config {
	
	frontend_editing = {$switch.frontEndEditing}
	
	// Quelltext Kommentare
	disablePrefixComment = 1
	
	
	// Seitentitel vor Projektname
	pageTitleFirst = {$switch.pageTitleFirst}
	
	
	// Ausgabe von XHTML aktivieren 
	#xhtml_cleaning = all
	
	
	// Doctype auf XHTML 1.0 Transitional einstellen oder auf html5
	doctype = html5
	
	
	// XML Prolog unterdrücken, weil der Internet Explorer ansonsten in den nicht standartkonfomen Quirks-Modus wechselt
	xmlprologue = none
	
	
	// Bei temporären Bildern wird der Originaltitel erhalten. Die Zahl bestimmt die Anzahl der Zeichen
	meaningfulTempFilePrefix = 50
	
	
	// clean output - seo
	disablePrefixComment = 1
	inlineStyle2TempFile = 1
	meaningfulTempFilePrefix = 50
	disableImgBorderAttr = 1
	
	
	// minify by scriptmerger
	concatenateCss = 1
	concatenateJs = 1
	
	compressCss = 0
	compressJs = 0
	
	
	// Display Errors in old way
	contentObjectExceptionHandler = {$switch.newErrorMessage}
	
	// Externalize CSS and JS
	removeDefaultJS = 0
	#removeDefaultJS = external
	#inlineStyle2TempFile = 1
	
	

	
	// CoolURI
	simulateStaticDocuments = 0
	#baseURL = {$project.baseUrl}
	absRefPrefix = /
	tx_cooluri_enable = {$switch.coolUri}
	redirectOldLinksToNew = 1
	
	index_enable = {$switch.search}
	
	
	// Zeichensatz
	#metaCharset = utf-8
	renderCharset = utf-8
	
	
	// Admin Panel aktivieren
	admPanel = {$switch.admPanel}
	
	
	// Cache
	cache_clearAtMidnight = {$cache.nightClear}
	no_cache = {$cache.noCache}
	sendCacheHeaders = 1

	
	
	// Spam Protection
	spamProtectEmailAddresses = 2
	spamProtectEmailAddresses_atSubst = @
	
	
	
	// Credit
	headerComment (
┌──────────────────────────┐
  TYPO3-Programmierung:
  Mario Kober | www.mk7.de
└──────────────────────────┘ 
    
    )



}

/*	
┌───────────────────────────────────────────────┐
	Config Ende
└───────────────────────────────────────────────┘ 
*/











//  ------------------------------------
// | Wrap um Text bei CE Text und TextPic
//  ------------------------------------
tt_content.text.20.wrap = <div class="csc-text">|</div>






//  ------------------------------------
// | Mehrzeilige Headline konfigurieren
// | Muss aber in extTables aktiviert sein.
//  ------------------------------------
lib.stdheader.10.stdWrap.brTag = <br>






//  ------------------------------------
// | Subheader formatieren
//  ------------------------------------
lib.stdheader.20 = TEXT
lib.stdheader.20 {
  field = subheader
  typolink.parameter.field = header_link
  required = 1
  wrap = <h1 class="subheader">|</h1>
}





#lib.parseFunc_RTE.tags.link.typolink.target = _self



#CType: mailform
tt_content.mailform = COA
tt_content.mailform.10 = < lib.stdheader
tt_content.mailform.20 = FORM
tt_content.mailform.20 {
	#stdWrap.wrap = <fieldset style="border:0px;"> | </fieldset>
	labelWrap.wrap = <div style="width:100px;float:left;">|</div>
	REQ.labelWrap.wrap = <div style="width:100px;float:left;">|</div>
	commentWrap.wrap =<div style="width:100px;float:left;">|</div>
	radioWrap.wrap = <div style="width:100px;float:left;">|</div>
	params >
	params.input = class="text"
	params.submit = class="button"
	badMess = Bitte kontrollieren Sie folgende Angaben:
	target = _self
}




// Lässt Formatierungen im Header-Field zu. Somit kann man mit <br> Überschriften umbrechen.
lib.stdheader.10.setCurrent.htmlSpecialChars = 0



