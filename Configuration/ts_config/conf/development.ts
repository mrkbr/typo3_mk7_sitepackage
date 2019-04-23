### dev on und eingeloggt > cache deaktiviert

[globalVar = TSFE : beUserLogin > 0] && [globalVar = LIT:0<{$switch.devMode}]

	
	plugin.tx_scriptmerger.css.enable = 0
	plugin.tx_scriptmerger.javascript.enable = 0
	
	config {
		
		### Performance durch Compression und Zusammenfassung von CSS und JS Files
		concatenateCss = 0
		concatenateJs = 0
		
		compressJs = 0
		compressCss = 0
		
		
		### Externalize CSS and JS
		#removeDefaultJS = 0
		removeDefaultJS = external
		inlineStyle2TempFile = 1
		
		### clean output - cache - seo
		disablePrefixComment = 0
		
		
		### Cache
		no_cache = 1
	}

[END]



# dev on und nicht eingeloggt
[globalVar = TSFE : beUserLogin = 0] && [globalVar = LIT:0<{$switch.devMode}]

	#page.10.template.file >
	page.10 = TEXT
	page.10.value = <div style="position:absolute; top:50%; left:50%; width:300px; height:100px; margin-left:-150px; margin-top:-50px">DIESES SEITE WIRD DERZEIT ERSTELLT<br> <a href="http://mk7.de" target="_blank">MK7 WEBENTWICKLUNG</a></div>

[END]
