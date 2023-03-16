import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { iBookShare } from 'src/app/interfaces/ibook.interface';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-ibook-share-form',
  templateUrl: './ibook-share-form.component.html',
  styleUrls: ['./ibook-share-form.component.scss'],
})
export class IbookShareFormComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public shareForm: FormGroup;

  constructor(
    private location: Location,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.shareForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      city: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.shareForm.controls[controlName].hasError(errorName);
  };
  public onCancel = () => {
    this.location.back();
  };
  public shareBook = (shareFormValue: any) => {
    if (this.shareForm.valid) {
      this.notification.openSnackBar('iBook has been shared!');
      this.location.back();
    }
  };
}
