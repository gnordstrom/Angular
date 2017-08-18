import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styles: [`
            .glyphicon-heart {
                color: #ccc
                cursor: pointer;
            }
            .highlighted {
                color: deeppink;
            }
        `],
    // styleUrls: []
    // inputs: ['isFavorite']
    // outputs: [change: favoriteChange]
})

export class LikeComponent {
    @Input() totalLikes = 0;
    @Input() isLiked = false;


    onClick() {
        this.isLiked = !this.isLiked;
        this.totalLikes += this.isLiked ? 1 : -1;
    }
}
