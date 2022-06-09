import { UrlWithParsedQuery, parse } from "url";

export class UrlLogin {
    public static parseUrl (url: string): UrlWithParsedQuery {  
        return parse(url, true)
    }
}

export class UrlUser {
    public static parseUrl(url: string): UrlWithParsedQuery {
        return parse(url,true)
    }
}