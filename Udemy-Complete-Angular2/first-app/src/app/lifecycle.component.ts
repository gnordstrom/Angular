import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Input,
    ViewChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>  <!-- Adding a local variable #boundParagraph-->
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() bindable = 1000;

  @ViewChild('boundParagraph') boundParagraph: HTMLElement;

  constructor() { }
  ngOnChanges() { this.log('ngOnChanges'); }
  ngOnInit() { this.log('ngOnInit'); }
  ngDoCheck() { this.log('ngDoCheck'); }
  ngAfterContentInit() { this.log('ngAfterContentInit'); }
  ngAfterContentChecked() {
      this.log('ngAfterContentChecked');
      console.log(this.boundParagraph);
  }
  ngAfterViewInit() {
      this.log('ngAfterViewInit');
    //   console.log(this.boundParagraph);
  }
  ngAfterViewChecked() { this.log('ngAfterViewChecked'); }
  ngOnDestroy() { this.log('ngOnDestroy'); }

  private log(hook: string) {
      console.log(hook);
  }
}
