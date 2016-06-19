import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 				"widget",
	template: `
	<section class="widget flex-container-column" style="height: calc(100% - 25px); overflow: hidden;">
		<div class="flex-container-column" style='height: 100%'>
			<h4 class="inline-block static-flex-item" (click)="showContent=!showContent;"><ng-content select="[headerIcon]"></ng-content> {{widgetTitle}}</h4>
			<i *ngIf="showContent" class="fa fa-caret-up pull-right static-flex-item" (click)="showContent=false;"></i>
			<i *ngIf="!showContent" class="fa fa-caret-down pull-right static-flex-item" (click)="showContent=true;"></i>
			<div *ngIf="showContent" style="padding-top: 5px;" class="flex-item flex-container-column">
				<ng-content></ng-content>
			</div>
		</div>
	</section>`,
	inputs:						['widgetTitle', 'showContent'],
	styles: 					[`
		h4 {
			font-size: 14px;
			font-weight: 600;
			cursor: pointer;
			margin-top:		0;
		}
		.widget {
			margin-bottom: 10px;
			margin-top: 0;
			padding: 5px;
		}
	`],
	changeDetection:	ChangeDetectionStrategy.OnPush
})

export class Widget {}