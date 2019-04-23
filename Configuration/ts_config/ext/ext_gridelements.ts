






# loaded ts after install the ext:gridelements
#[userFunc = TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('gridelements')]
#    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/setup.ts" extensions="ts">
#[global]
 






tt_content.gridelements_pi1.20.10.setup {



	# ID of gridelement
	1 < lib.gridelements.defaultGridSetup
	1 {
		columns {
			# colPos ID
			1000 < .default
			1000.wrap = <div class="row col col100">|</div>
			# colPos ID
					}
		wrap = <div class="ceOut gridBoxed"><div class="csc-inner">|</div></div>
	}





	# ID of gridelement
	fullpage < lib.gridelements.defaultGridSetup
	fullpage {
		columns {
			# colPos ID
			1000 < .default
			1000.wrap = <div class="row col col100">|</div>
			# colPos ID
					}
		wrap = <div class="ceOut gridBoxed" data-bg="{f:uri.image(image: data.flexform_section_grid_bgimage)}""><div class="ceIn">|</div></div>
	}
	
	
	
	
	
	
	#fullpage >
	fullpage2 < lib.gridelements.defaultGridSetup
	fullpage2 {
		cObject = FLUIDTEMPLATE
		cObject {
			file = EXT:mk7base/Resources/Public/html/gridelements/fullpage.html
			insertData = 1
		}
	}







	twocol < lib.gridelements.defaultGridSetup
	twocol {
		cObject = FLUIDTEMPLATE
		cObject {
			file = EXT:mk7base/Resources/Public/html/gridelements/twocol.html
			#file = fileadmin/mk7/html/gridelements/twocol.html
			insertData = 1
		}
	}
	


	
	# ID of gridelement
	#twocol >
	twocoldev < lib.gridelements.defaultGridSetup
	twocoldev {
		columns {
			# colPos ID
			1000 < .default
			1000.wrap = <div class="row col col50">|</div>
			# colPos ID
			
			# colPos ID
			1001 < .default
			1001.wrap = <div class="row col col50">|</div>
	
		}
		wrap = <div class="ceOut gridBoxed"><div class="row">|</div></div>
	}


	


} 
# ENDE






#/*
#
#beispiel {
#	cObject {
#		variables {
#			contactFormGrid < lib.contactFormGrid
#			contactForm < lib.contactForm
#		}
#	}
#}
#
#
#*/
#

#EXT:mk7base/Configuration/ts_config/ext/
#EXT:mk7base/Resources/Public/html/
