


/*
┌───────────────────────────────────────────────┐
	News
└───────────────────────────────────────────────┘
*/

TCAdefaults {
	tx_news_domain_model_news {
		showinpreview = 1
	}
}


TCEFORM.tx_news_domain_model_news {
	#author.label.de = PREIS
	#author_email.label.de = VERANSTALTUNGSORT
	#tags.label.de = VERANSTALTER
}


TCEMAIN.preview {
    tx_news_domain_model_news {
        previewPageId = {$news.single}
        useDefaultLanguageRecord = 0
        fieldToParameterMap {
            uid = tx_news_pi1[news_preview]
        }
        additionalGetParameters {
            tx_news_pi1.controller = News
            tx_news_pi1.action = detail
        }
    }
}


