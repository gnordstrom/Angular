import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>

        <like [totalLikes]="tweet.totalLikes" [isLiked]="tweet.isLiked"></like>
        <div (click)="onDivClick()">
            <button class="btn btn-primary"
                [class.active]="isActive"
                [style.backgroundColor]="isActive ? 'blue' : 'gray'"
                (click)="onClick($event)"
                    >Submit</button>
        </div>
        <input type="text" placeholder="Enter input" [value]="title" (input)="title = $event.target.value"/>      <!-- Adds input thing which displays output below-->
        <input type="text" [(ngModel)]="title" />

        <input type="button" (click)="title = ''" value="clear" />
        Output: {{title}}
        <courses></courses>
        <i class="glyphicon glyphicon-star"></i>
        <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
        <authors></authors>`,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent]
})
export class AppComponent {
    isActive = true;
    onDivClick() {
        console.log('Handled by Div');
    }
    onClick($event) {
        $event.stopPropagation();
        console.log('Clicked!', $event);
    }

    post = {
        title: "Title",
        isFavorite: true
    }

    like = {
        isLiked: true
    }

    onFavoriteChange($event){
        console.log($event);
    }
    tweet = {
        totalLikes: 0,
        isLiked: false
    }

}
