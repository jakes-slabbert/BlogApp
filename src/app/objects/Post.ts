export class BlogPost {
    Id: number;
    Title: string;
    Subtitle: string;
    Paragraphs: string[];
    PictureUrl: string;

    constructor(id: number, title: string, subtitle: string, paragraphs: string[], pictureUrl: string) {
        this.Id = id;
        this.Title = title;
        this.Subtitle = subtitle;
        this.Paragraphs = paragraphs;
        this.PictureUrl = pictureUrl;
    }
}