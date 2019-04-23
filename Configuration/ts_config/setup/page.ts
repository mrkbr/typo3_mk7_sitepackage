/*
┌───────────────────────────────────────────────┐
	Copyright: Mario Kober, m@mk7.de
	Benutzung nur mit schriftlicher Erlaubnis

	Funktion:
	Main Page Object
└───────────────────────────────────────────────┘
*/


page = PAGE
page {
	
	typeNum = 0

	# bodytag schreiben
	bodyTagCObject < temp.bodyTagCOA
	
	
	# favicon
	shortcutIcon = {$path.img}favicon.png


	# stylesheets / css files
	includeCSS {
		mk7base_layout = EXT:mk7base/Resources/Private/Css/main.scss
		mk7base_layout.outputfile = EXT:mk7base/Resources/Public/css/main.generated.min
		mk7base_layout.formatter = Leafo\ScssPhp\Formatter\Compressed
	}
	

	includeJSLibs {
		jquery = https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
		jquery.extenal = 1
	}


	# JavaScript Files
	includeJSFooter {
		file10	= {$path.js}jquery.plugins.js
		file20	= {$path.js}mk7.js
	}



	# Header Data
	headerData.10 = TEXT
	headerData.10.value = <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1,minimum-scale=1, user-scalable=1,  maximum-scale=2,minimal-ui">
	



}
### /page



