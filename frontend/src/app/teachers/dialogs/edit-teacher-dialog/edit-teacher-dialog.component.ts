import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-teacher-dialog',
  templateUrl: './edit-teacher-dialog.component.html',
  styleUrls: ['./edit-teacher-dialog.component.scss'],
})
export class EditTeacherDialogComponent implements OnInit {
  teacher: any;

  constructor(
    private dialogRef: MatDialogRef<EditTeacherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {
    this.teacher = data.teacher;
  }

  ngOnInit(): void {}

  editTeacher() {
    const body = {
      name: this.teacher.name,
      government_id: this.teacher.governmentId,
      phone_number: this.teacher.phoneNumber,
      start_date: this.teacher.startDate,
      end_date: this.teacher.endDate,
    };
    this.http
      .put<any>(
        environment.apiEndpoint + 'teachers/' + this.teacher.teacherId,
        body
      )
      .subscribe({
        next: (data) => {
          this.openSnackBar('Teacher has been updated.', 'Close');
          this.dialogRef.close();
        },
        error: (error) => {
          this.openSnackBar('Error saving teacher.', 'Close');
        },
      });
  }

  onCancel() {
    this.dialogRef.close();
  }

  clearStartDate() {
    this.teacher.startDate = null;
  }

  clearEndDate() {
    this.teacher.endDate = null;
  }

  deleteTeacher() {
    this.http
      .delete(environment.apiEndpoint + 'teachers/' + this.teacher.teacherId)
      .subscribe({
        next: (data) => {
          this.openSnackBar('Teacher has been deleted.', 'Close');
          this.dialogRef.close();
        },
        error: (error) => {
          this.openSnackBar('Error deleting teacher.', 'Close');
        },
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
