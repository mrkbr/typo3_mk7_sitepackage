

page {
	
    meta {
        # Application Name - Um welche Anwendung handelt es sich?
        application-name = Webpage
        
        # Keywords - auslesen und ggf. vererben
        keywords.data = page:keywords
        keywords.wrap = |,{$seo.keywords}
        keywords.ifEmpty.data = levelfield :-1, keywords, slide
        keywords.keywords = 1
        
        # Description - auslesen und ggf. vererben
        description.data = page:description
        description.ifEmpty.data = levelfield :-1, description, slide
        
        # Author - auslesen und ggf. vererben
        author.data = page:author
        author.ifEmpty.data = levelfield :-1, author, slide
        
        # Author Email - auslesen und ggf. vererben
        author_email.data = page:author_email
        author_email.ifEmpty.data = levelfield :-1, author_email, slide
        
        # Abstract - auslesen und ggf. vererben
        abstract.data = page:abstract
        abstract.ifEmpty.data = levelfield :-1, abstract, slide
        
        # Publisher/ Author - auslesen und ggf. vererben
        publisher.data = page:author
        publisher.ifEmpty.data = {$seo.author}
        
        # Copyright - Wer ist Urheber dieser Seite?
        copyright = {$seo.copyright}
        
        # Language - In welcher Sprache ist diese Seite?
        language.data = TSFE:lang
        
        # Robots - Such-Robots sollen den Links folgen und diese indizieren.
        robots = {$seo.robots}
        
        # Revisit After - Nach frühestens sollen die Such-Robots wieder kommen.
        revisit-after = {$seo.revisit}
    }
    
}






page.headerData.1053 = COA
page.headerData.1053 {

	10 = TEXT
	10 {
	    typolink.parameter.data = TSFE:id
	    typolink.forceAbsoluteUrl = 1
	    typolink.returnLast = url
	    wrap = <meta property="og:url" content="|" />

	}
	
	
	20 = TEXT
	20 {
	    value = article
	    wrap = <meta property="og:type" content="|" />
	}
	
	# Meta-Tag Last-Modified, aus dem Datensatz der Seite auslesen.
    # Alternativ kann auch das Feld last_update ausgelesen werden.
    30 = TEXT
    30 {
        data = page:SYS_LASTCHANGED
        date = c
        wrap = <meta name="Last-Modified" content="|" />
    }


} 




[treeLevel = 4]
	page.headerData.1053.20.value = website
[global]