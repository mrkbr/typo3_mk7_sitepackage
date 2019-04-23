


###################################################################
# SUCHE UND MACINA SEARCHBOX
###################################################################
plugin.tx_macinasearchbox_pi1 {
	pidSearchpage =  36
	#templateFile = EXT:mk7base/Resources/Public/html/macina_searchbox_template.html
}



# SEARCH
config.index_enable = 1
plugin.tx_indexedsearch {
	show {
		rules = 0
		parsetimes = 0
		L2sections = 0
		L1sections = 0
		LxALLtypes = 0
		clearSearchBox = 0
		clearSearchBox.enableSubSearchCheckBox=0
		forbiddenRecords = 0
		alwaysShowPageLinks = 1
		advancedSearchLink = 0
		resultNumber = 0
		mediaList =
	}
	blind {
		type = 0
		defOp = 0
		sections = 0
		freeIndexUid = 0
		media = 0
		order = 0
		group = 0
		lang = 0
		desc = 0
		results = 5
		extResume = 0
	}
	rules_stdWrap {
	}
	sectionlinks_stdWrap {
	}
	path_stdWrap {
	}
	search {
		rootPidList =
		page_links = 5
		detect_sys_domain_records = 0
		defaultFreeIndexUidList =
	}
	result_link_target =
	forwardSearchWordsInResultLink = 0
	_DEFAULT_PI_VARS {
		extResume = 1
		type = 1
		group = flat
		results = 2
	}
	_LOCAL_LANG = de
	_CSS_DEFAULT_STYLE >
}



