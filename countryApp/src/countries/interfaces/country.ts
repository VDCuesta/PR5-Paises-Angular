export interface Country {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    borders?:     string[];
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    EUR?: TartuGecko;
    ERN?: TartuGecko;
    LRD?: TartuGecko;
    BMD?: TartuGecko;
    CKD?: TartuGecko;
    NZD?: TartuGecko;
    SOS?: TartuGecko;
    ZMW?: TartuGecko;
    VES?: TartuGecko;
    TMT?: TartuGecko;
    ALL?: TartuGecko;
    GBP?: TartuGecko;
    SDG?: BAM;
    USD?: TartuGecko;
    XAF?: TartuGecko;
    AZN?: TartuGecko;
    KES?: TartuGecko;
    XOF?: TartuGecko;
    VND?: TartuGecko;
    AFN?: TartuGecko;
    GTQ?: TartuGecko;
    KWD?: TartuGecko;
    STN?: TartuGecko;
    KGS?: TartuGecko;
    PLN?: TartuGecko;
    GHS?: TartuGecko;
    AMD?: TartuGecko;
    JEP?: TartuGecko;
    XCD?: TartuGecko;
    TJS?: TartuGecko;
    ETB?: TartuGecko;
    DZD?: TartuGecko;
    MAD?: TartuGecko;
    MRU?: TartuGecko;
    AUD?: TartuGecko;
    BND?: TartuGecko;
    SGD?: TartuGecko;
    RON?: TartuGecko;
    NOK?: TartuGecko;
    BYN?: TartuGecko;
    PAB?: TartuGecko;
    CZK?: TartuGecko;
    PKR?: TartuGecko;
    PEN?: TartuGecko;
    BBD?: TartuGecko;
    DKK?: TartuGecko;
    HUF?: TartuGecko;
    KMF?: TartuGecko;
    BDT?: TartuGecko;
    FJD?: TartuGecko;
    CNY?: TartuGecko;
    COP?: TartuGecko;
    MVR?: TartuGecko;
    MYR?: TartuGecko;
    KYD?: TartuGecko;
    PYG?: TartuGecko;
    UYU?: TartuGecko;
    ZAR?: TartuGecko;
    VUV?: TartuGecko;
    SEK?: TartuGecko;
    LBP?: TartuGecko;
    CLP?: TartuGecko;
    BZD?: TartuGecko;
    GYD?: TartuGecko;
    MNT?: TartuGecko;
    TVD?: TartuGecko;
    DOP?: TartuGecko;
    BOB?: TartuGecko;
    NPR?: TartuGecko;
    TWD?: TartuGecko;
    BGN?: TartuGecko;
    MDL?: TartuGecko;
    IMP?: TartuGecko;
    BTN?: TartuGecko;
    INR?: TartuGecko;
    KHR?: TartuGecko;
    HTG?: TartuGecko;
    CVE?: TartuGecko;
    GEL?: TartuGecko;
    BIF?: TartuGecko;
    BSD?: TartuGecko;
    MUR?: TartuGecko;
    LYD?: TartuGecko;
    MWK?: TartuGecko;
    MXN?: TartuGecko;
    SZL?: TartuGecko;
    PGK?: TartuGecko;
    CHF?: TartuGecko;
    RUB?: TartuGecko;
    ILS?: TartuGecko;
    UGX?: TartuGecko;
    TOP?: TartuGecko;
    AED?: TartuGecko;
    SRD?: TartuGecko;
    UZS?: TartuGecko;
    SAR?: TartuGecko;
    EGP?: TartuGecko;
    MGA?: TartuGecko;
    XPF?: TartuGecko;
    CAD?: TartuGecko;
    GMD?: TartuGecko;
    TTD?: TartuGecko;
    SCR?: TartuGecko;
    JPY?: TartuGecko;
    BRL?: TartuGecko;
    SYP?: TartuGecko;
    SHP?: TartuGecko;
    TZS?: TartuGecko;
    IRR?: TartuGecko;
    KRW?: TartuGecko;
    WST?: TartuGecko;
    JMD?: TartuGecko;
    NIO?: TartuGecko;
    GNF?: TartuGecko;
    PHP?: TartuGecko;
    NAD?: TartuGecko;
    CRC?: TartuGecko;
    BAM?: BAM;
    MOP?: TartuGecko;
    MZN?: TartuGecko;
    KPW?: TartuGecko;
    UAH?: TartuGecko;
    IQD?: TartuGecko;
    AOA?: TartuGecko;
    SLL?: TartuGecko;
    CUC?: TartuGecko;
    CUP?: TartuGecko;
    RSD?: TartuGecko;
    FOK?: TartuGecko;
    JOD?: TartuGecko;
    TRY?: TartuGecko;
    KID?: TartuGecko;
    KZT?: TartuGecko;
    GIP?: TartuGecko;
    ISK?: TartuGecko;
    QAR?: TartuGecko;
    MMK?: TartuGecko;
    THB?: TartuGecko;
    AWG?: TartuGecko;
    NGN?: TartuGecko;
    BHD?: TartuGecko;
    LAK?: TartuGecko;
    DJF?: TartuGecko;
    SBD?: TartuGecko;
    ANG?: TartuGecko;
    FKP?: TartuGecko;
    BWP?: TartuGecko;
    GGP?: TartuGecko;
    ZWL?: TartuGecko;
    LSL?: TartuGecko;
    ARS?: TartuGecko;
    YER?: TartuGecko;
    CDF?: TartuGecko;
    OMR?: TartuGecko;
    IDR?: TartuGecko;
    RWF?: TartuGecko;
    MKD?: TartuGecko;
    TND?: TartuGecko;
    SSP?: TartuGecko;
    HNL?: TartuGecko;
    LKR?: TartuGecko;
    HKD?: TartuGecko;
}

export interface TartuGecko {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
