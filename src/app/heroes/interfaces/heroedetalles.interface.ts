export interface HeroeDetalles {
    code:            number;
    status:          string;
    copyright:       string;
    attributionText: string;
    attributionHTML: string;
    etag:            string;
    data:            Data;
}

export interface Data {
    offset:  number;
    limit:   number;
    total:   number;
    count:   number;
    results: HeroeD[];
}

export interface HeroeD {
    id?:          number;
    name?:        string;
    description?: string;
    modified?:    string;
    thumbnail?:   Thumbnail;
    resourceURI?: string;
    comics?:      Comics;
    series?:      Comics;
    stories?:     Comics;
    events?:      Comics;
    urls?:        URL[];
}

export interface Comics {
    available:     number;
    collectionURI: string;
    items:         any[];
    returned:      number;
}

export interface Thumbnail {
    path:      string;
    extension: string;
}

export interface URL {
    type: string;
    url:  string;
}
