import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'resource-tree-view',
    template: `
    
    <div *ngFor="let item of TreeData" style="padding-left:10px">
         
        <ion-grid no-padding>
            <ion-row>
                <ion-col col-1 class="right" style="margin:auto;text-align:center">
                         <ion-icon item-start *ngIf="item.children?.length" (click)="toggleChildren(item)" name="add-circle" tappable></ion-icon> 
                 </ion-col>
        
                 <ion-col class="left" col-10>
                    <ion-item style="padding:0">
                        <ion-label style="font-size: 13px;font-weight: 500"> {{item.text}}</ion-label>
                            <ion-checkbox style="margin-right: 15px" [(ngModel)]="item.status" color="randem">
                            </ion-checkbox>
                    </ion-item>
                </ion-col>
            </ion-row>
        </ion-grid>
    <resource-tree-view [TreeData]="item.children" *ngIf="item.visible" [hasCheckbox]="hasCheckbox">
    </resource-tree-view>
    
    </div>
   
    `
})
export class ResourceTree {
    @Input() TreeData: any[];
    @Input() hasCheckbox: boolean = true;
    @Output() selected = new EventEmitter();

    constructor() { }

    toggleChildren(node: any) {
        node.visible = !node.visible;
    }

}