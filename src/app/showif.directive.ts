import { Directive, Input, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[showIf]',
})
export class ShowifDirective{
  @Input('showIf') show = true;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    if(this.show) this.viewContainerRef.createEmbeddedView(this.template)
  }
}
