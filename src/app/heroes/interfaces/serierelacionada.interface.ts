export interface SerieRela {
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
    results: SerieR[];
}

export interface SerieR {
    id?:          number;
    title?:       string;
    description?: null | string;
    resourceURI?: string;
    urls?:        URL[];
    startYear?:   number;
    endYear?:     number;
    rating?:      string;
    type?:        ResultType;
    modified?:    string;
    thumbnail?:   Thumbnail;
    creators?:    Creators;
    characters?:  Characters;
    stories?:     Stories;
    comics?:      Characters;
    events?:      Characters;
    next?:        Next | null;
    previous?:    Next | null;
}

export interface Characters {
    available:     number;
    collectionURI: string;
    items:         Next[];
    returned:      number;
}

export interface Next {
    resourceURI: string;
    name:        string;
}

export interface Creators {
    available:     number;
    collectionURI: string;
    items:         CreatorsItem[];
    returned:      number;
}

export interface CreatorsItem {
    resourceURI: string;
    name:        string;
    role:        Role;
}

export enum Role {
    Artist = "artist",
    ArtistCover = "artist (cover)",
    Colorist = "colorist",
    ColoristCover = "colorist (cover)",
    Editor = "editor",
    Inker = "inker",
    Letterer = "letterer",
    Penciler = "penciler",
    PencilerCover = "penciler (cover)",
    Penciller = "penciller",
    PencillerCover = "penciller (cover)",
    Writer = "writer",
}

export interface Stories {
    available:     number;
    collectionURI: string;
    items:         StoriesItem[];
    returned:      number;
}

export interface StoriesItem {
    resourceURI: string;
    name:        string;
    type:        ItemType;
}

export enum ItemType {
    Cover = "cover",
    Empty = "",
    InteriorStory = "interiorStory",
    Letters = "letters",
    Pinup = "pinup",
    TextArticle = "text article",
}

export interface Thumbnail {
    path:      string;
    extension: string;
}


export enum ResultType {
    Collection = "collection",
    Empty = "",
    Limited = "limited",
    Ongoing = "ongoing",
}

export interface URL {
    type?: string;
    url?:  string;
}

export enum URLType {
    Detail = "detail",
}
