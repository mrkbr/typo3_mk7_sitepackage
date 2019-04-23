lib.language = COA
lib.language {
    20 = HMENU
    20 {
        special = language
        special.value = 0,1,2
        special.normalWhenNoLanguage = 0
        wrap =
        1 = TMENU
        1 {
            noBlur = 1
            NO = 1
            NO {
                doNotLinkIt = 1
                linkWrap = <li>|</li>
                stdWrap.override = DE || EN || ES
                stdWrap {
                    typolink {
                        parameter.data = page:uid
                        additionalParams = &L=0 || &L=1 || &L=2
                        ATagParams = hreflang="de-DE" || hreflang="en-GB" || hreflang="ed-ES"
                        addQueryString = 1
                        addQueryString.exclude = L,id,no_cache
                        addQueryString.method = GET
                        no_cache = 0
                    }
                }
            }
            ACT < .NO
            ACT.linkWrap = <li class="act">|</li>
            USERDEF1 < .NO
            USERDEF1 {
                linkWrap = <li class="disabled">|</li>
                stdWrap.typolink >
            }
            USERDEF2 < .ACT
            USERDEF2 {
                linkWrap = <li class="disabled">|</li>
                stdWrap.typolink >
            }
        }
    }
    wrap = <div class="langMenu"><ul class="language-menu">|</ul></div>
}