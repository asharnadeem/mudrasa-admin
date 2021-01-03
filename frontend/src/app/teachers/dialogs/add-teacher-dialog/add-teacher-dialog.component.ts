import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-teacher-dialog',
  templateUrl: './add-teacher-dialog.component.html',
  styleUrls: ['./add-teacher-dialog.component.scss'],
})
export class AddTeacherDialogComponent implements OnInit {
  name: string = '';
  governmentId: string = '';
  phoneNumber: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(
    private dialogRef: MatDialogRef<AddTeacherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.addTeacher();
    this.dialogRef.close();
  }

  addTeacher() {
    const body = {
      name: this.name,
      government_id: this.governmentId,
      phone_number: this.phoneNumber,
      start_date: this.startDate,
      end_date: this.endDate,
    };
    this.http.post<any>(environment.apiEndpoint + 'teachers/', body).subscribe({
      next: (data) => {
        this.openSnackBar('Teacher has been created.', 'Close');
      },
      error: (error) => {
        this.openSnackBar('Error creating teacher.', 'Close');
      },
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
