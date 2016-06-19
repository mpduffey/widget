"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Widget = (function () {
    function Widget() {
    }
    Widget = __decorate([
        core_1.Component({
            selector: "widget",
            template: "\n\t<section class=\"widget flex-container-column\" style=\"height: calc(100% - 25px); overflow: hidden;\">\n\t\t<div class=\"flex-container-column\" style='height: 100%'>\n\t\t\t<h4 class=\"inline-block static-flex-item\" (click)=\"showContent=!showContent;\"><ng-content select=\"[headerIcon]\"></ng-content> {{widgetTitle}}</h4>\n\t\t\t<i *ngIf=\"showContent\" class=\"fa fa-caret-up pull-right static-flex-item\" (click)=\"showContent=false;\"></i>\n\t\t\t<i *ngIf=\"!showContent\" class=\"fa fa-caret-down pull-right static-flex-item\" (click)=\"showContent=true;\"></i>\n\t\t\t<div *ngIf=\"showContent\" style=\"padding-top: 5px;\" class=\"flex-item flex-container-column\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t</section>",
            inputs: ['widgetTitle', 'showContent'],
            styles: ["\n\t\th4 {\n\t\t\tfont-size: 14px;\n\t\t\tfont-weight: 600;\n\t\t\tcursor: pointer;\n\t\t\tmargin-top:\t\t0;\n\t\t}\n\t\t.widget {\n\t\t\tmargin-bottom: 10px;\n\t\t\tmargin-top: 0;\n\t\t\tpadding: 5px;\n\t\t}\n\t"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], Widget);
    return Widget;
}());
exports.Widget = Widget;
//# sourceMappingURL=widget.js.map