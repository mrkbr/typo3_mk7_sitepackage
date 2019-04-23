/*	
┌──────────────────────────────────────────┐
	Copyright: Mario Kober, m@mk7.de
	Do not use without permission
	
	Function:
	max-image-width depending on columns
└──────────────────────────────────────────┘ 
*/


/*
tt_content.image.20.maxW.cObject = CASE
tt_content.image.20.maxW.cObject {
key.field = colPos
	## Normal
    0 = TEXT
    0.value = 960
	## Left
    1 = TEXT
    1.value = 960
	## Right
    2 = TEXT
    2.value = 960
	## Border
    3 = TEXT
    3.value = 960
    ## Content Pic
    4 = TEXT
    4.value = 1500
}
*/







tt_content.textpic.settings.responsive_image_rendering {
    layoutKey = srcset

    sourceCollection {
        colPos.0 {
            small {
                width = 400
                mediaQuery = (max-device-width: 400px)
                dataKey = small
                srcset = 400w
                sizes = 50vw
            }

            large {
                width = 1200
                mediaQuery = (min-device-width: 1000px)
                dataKey = large
                srcset = 800w
                sizes = 100vw
            }
        }

        colPos.2 {
            small {
                width = 100
                mediaQuery = (max-device-width: 400px)
                dataKey = small
                srcset = 400w
            }

            large {
                width = 200
                mediaQuery = (min-device-width: 1000px)
                dataKey = large
                srcset = 800w
            }
        }
    }
}





