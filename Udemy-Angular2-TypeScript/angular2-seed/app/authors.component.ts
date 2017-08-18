import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
    selector: 'authors',
    template: `
        <h3>Authors</h3>
        {{ title }}
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
        `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    title = "Title for the Authors Page";
    authors: string[];
    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}
