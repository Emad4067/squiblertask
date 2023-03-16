import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuillEditorComponent } from 'ngx-quill';
import { IbookMeaningDrawerComponent } from '../ibook-meaning-drawer/ibook-meaning-drawer.component';



@Component({
  selector: 'app-ibook-content',
  templateUrl: './ibook-content.component.html',
  styleUrls: ['./ibook-content.component.scss']
})
export class IbookContentComponent implements AfterViewInit{
  private drawerDialogRef: MatDialogRef<IbookMeaningDrawerComponent>;
  @ViewChild('editor') editor: QuillEditorComponent;

  public content: string;
  public isEditorEmpty = true;

  constructor(
    private dialog: MatDialog,
    private router: Router
    ) {
      this.content = "";
     }

  ngAfterViewInit() {
    this.editor.elementRef.nativeElement.addEventListener('dblclick', (event: any)=> {
      const selection = window.getSelection()?.toString().trim();
      if (selection?.trim().length != 0) {
        this.openMeaningDrwaer(selection);
      }
    });
  }

  
  openMeaningDrwaer(selection: any) {
    console.log('this.content',this.content)
    this.drawerDialogRef = this.dialog.open(IbookMeaningDrawerComponent, {
      data: { selection },
      panelClass: 'right-aligned-modal',
      width: '420px',
      height: '100vh',
      position: { right: '0'}
    });
  }

  checkEditorIsEmpty(): boolean {
    return this.content != undefined ? this.content.trim().length === 0 : true;
  }

  shareWithAFriend() {
    this.router.navigate(['/share']);
  }
}
