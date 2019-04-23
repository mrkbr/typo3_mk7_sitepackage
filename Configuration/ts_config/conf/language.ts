
#########################################################
# Sprachen konfigurieren
#########################################################
config {

	linkVars = L
	sys_language_uid = 0
	sys_language_mode = strict; 0
	sys_language_overlay = hideNonTranslated
	language = de
	locale_all = de_DE.UTF-8

}

#############################
# German
[globalVar = GP:L = 0]
config.sys_language_uid = 0
page.config.language = de
page.config.locale_all = de_DE.UTF-8
[global]

#############################
# English
[globalVar = GP:L = 2]
config.sys_language_uid = 2
page.config.language = en
page.config.locale_all = en_EN.UTF-8
[global]

#############################
# French
[globalVar = GP:L = 3]
config.sys_language_uid = 3
page.config.language = fr
page.config.locale_all = fr_FR.UTF-8
[global]

#############################
# Italian
[globalVar = GP:L = 4]
config.sys_language_uid = 4
page.config.language = it
page.config.locale_all = it_IT.UTF-8
[global]

#############################
# Spanish
[globalVar = GP:L = 5]
config.sys_language_uid = 5
page.config.language = fr
page.config.locale_all = es_ES.UTF-8
[global]


###################################################################
# sr_lanuagemenu:  Language Menü konfigurieren
###################################################################

plugin.tx_srlanguagemenu_pi1 {

	useSysLanguageTitle = 1
	defaultLanguageISOCode = DE
	LanguageISOCode = DE

	#Hiermit kann die wraps um die Links aendern/leeren
	#link.CUR.stdWrap.wrap = <li class=’CUR’>|</li>
	#link.NO.stdWrap.wrap = <li class=’NO’>|</li>
	link.NO.stdWrap = |

	hideIfNoAltLanguages = 1

	#Hiermit kann die aktuelle Sprache ausgeblendet werden
	#don’t show current language if showCurrent=0
	showCurrent = 1

	# Hier liegt das selbst angepasste Template-File
	#file.templateFile = fileadmin/templates/language_menu/sprachwahl.tmpl

	link.INACT.doNotLinkIt = 1
	link.CUR.doNotLinkIt = 1


	#GIBT EINE LISTENANSICHT AUS (2: Liste, 1: Auswahlliste, 0:Flagge)
	defaultLayout = 2
	links.stdWrap.split.wrap >
	_CSS_DEFAULT_STYLE >

	#Hiermit koennte man festlegen, dass nur die Spachen 1+2 in der Liste ausgegeben werden
	#languagesUidsList = 0,1

}
plugin.tx_srlanguagemenu_pi1 >


######################################################################
# sr_lanuagemenu: Sprachwahl im Footer
######################################################################

temp.langMenuFooter < plugin.tx_srlanguagemenu_pi1
temp.langMenuFooter {
	useIsoLanguageCountryCode = 1
	useSysLanguageTitle = 0
	separator = &#124;
	link.CUR.stdWrap = |&#124;
	link.CUR.doNotLinkIt = 1
	link.NO.stdWrap = |&#124;
	}

page.10.subparts.COPYRIGHT = TEXT
page.10.subparts.COPYRIGHT {
	data = date : U
	strftime = %Y
	noTrimWrap = |<p>&copy; | 2011 Kober. Alle Rechte vorbehalten.</p>|
}

#########################################################
# Sprachabhängige Texte
#########################################################

######################
# German
[globalVar = GP:L = 1]

	# Copyright
	page.10.subparts.COPYRIGHT = TEXT
	page.10.subparts.COPYRIGHT {
		data = date : U
		strftime = %Y
		noTrimWrap = |<p>&copy; | Kober. Alle Rechte vorbehalten.</p>|
	}

	# Landesangabe
	page.10.subparts.FOOTER_LAND = TEXT
	page.10.subparts.FOOTER_LAND.value = <p>Kober.Deutschland</p>

[else]

	# Copyright
	page.10.subparts.COPYRIGHT = TEXT
	page.10.subparts.COPYRIGHT {
		data = date : U
		strftime = %Y
		noTrimWrap = |<p>&copy; | Kober. Alle Rechte vorbehalten.</p>|
	}

	# Landesangabe
	page.10.subparts.FOOTER_LAND = TEXT
	page.10.subparts.FOOTER_LAND.value = <p>Kober.Deutschland</p>

[global]

######################
# English
[globalVar = GP:L = 2]

	# Copyright
	page.10.subparts.COPYRIGHT = TEXT
	page.10.subparts.COPYRIGHT {
		data = date : U
		strftime = %Y
		noTrimWrap = |<p>&copy; | Kober. All rights reserved.</p>|
	}

	# Landesangabe
	page.10.subparts.FOOTER_LAND = TEXT
	page.10.subparts.FOOTER_LAND.value = <p>Kober.Germany</p>

[global]

######################
# French
[globalVar = GP:L = 3]

	# Copyright
	page.10.subparts.COPYRIGHT = TEXT
	page.10.subparts.COPYRIGHT {
		data = date : U
		strftime = %Y
		noTrimWrap = |<p>&copy; | Kober. Tous droits r&eacute;serv&eacute;s.</p>|
	}

	# Landesangabe
	page.10.subparts.FOOTER_LAND = TEXT
	page.10.subparts.FOOTER_LAND.value = <p>Kober.Allemagne</p>

[global]

