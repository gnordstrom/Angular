import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
            .glyphicon-star {
                color: orange;
            }
        `],
    // styleUrls: []
    // inputs: ['isFavorite']
    // outputs: [change: favoriteChange]
})

export class FavoriteComponent {
    @Input('is-favorite') isFavorite = false;

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}
