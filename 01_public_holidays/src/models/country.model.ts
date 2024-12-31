export interface Country {
    isoCode: string;
    name: [{
        language: string;
        text: string;
    }];
    officialLanguages: string[]
}