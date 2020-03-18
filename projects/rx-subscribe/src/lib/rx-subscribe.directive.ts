import { Directive, EmbeddedViewRef, Input, OnChanges, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface RxSubscribeContext<T> {
  $implicit: T;
}

@Directive({
  selector: '[rxSubscribe]'
})
export class RxSubscribeDirective<T> implements OnChanges, OnDestroy {
  constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<RxSubscribeContext<T>>) {}

  @Input('rxSubscribe')
  source$: Observable<T> | null = null;

  private viewRef: EmbeddedViewRef<RxSubscribeContext<T>> | null = null;
  private readonly disposeTrigger$ = new Subject();

  static ngTemplateContextGuard<T>(dir: RxSubscribeDirective<T>, ctx: unknown): ctx is RxSubscribeContext<T> {
    return true;
  }

  ngOnChanges() {
    if (this.viewRef) {
      this.dispose();
    }
    if (this.source$) {
      this.subscribe(this.source$);
    }
  }

  private subscribe(source: Observable<T>) {
    source.pipe(takeUntil(this.disposeTrigger$)).subscribe(value => {
      if (!this.viewRef) {
        this.viewRef = this.vcRef.createEmbeddedView(this.templateRef, {
          $implicit: value
        });
      } else {
        this.viewRef.context.$implicit = value;
      }
      this.viewRef.detectChanges();
    });
  }

  private dispose() {
    this.disposeTrigger$.next();
    this.vcRef.clear();
    this.viewRef = null;
  }

  ngOnDestroy() {
    this.dispose();
  }
}
