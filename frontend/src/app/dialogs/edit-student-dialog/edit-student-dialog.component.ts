import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.scss'],
})
export class EditStudentDialogComponent implements OnInit {
  student: any;

  constructor(
    private dialogRef: MatDialogRef<EditStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {
    this.student = data.student;
  }

  ngOnInit(): void {}

  onSubmit() {
    const body = {
      student_id: this.student.studentId,
      english_name: this.student.englishName,
      urdu_name: this.student.urduName,
      date_of_birth: this.student.dateOfBirth,
      contact_number: this.student.contactNumber,
      fathers_english_name: this.student.fathersEnglishName,
      fathers_urdu_name: this.student.fathersUrduName,
      guardians_id: this.student.guardiansId,
      current_address: this.student.currentAddress,
      permanent_address: this.student.permanentAddress,
      previous_institute: this.student.previousInstitute,
      previous_education: this.student.previousEducation,
      school_education: this.student.schoolEducation,
      admission_type: this.student.admissionType,
      admission_date: this.student.admissionDate,
      admission_evaluator: this.student.admissionEvaluator,
      admission_notes: this.student.admissionNotes,
      evaluator_recommendation: this.student.evaluatorRecommendation,
    };
    this.http
      .put<any>(
        environment.api_endpoint +
          environment.api_route +
          'students/:' +
          this.student.studentId,
        body
      )
      .subscribe({
        next: (data) => {
          this.openSnackBar('Student has been updated.', 'Close');
          this.dialogRef.close();
        },
        error: (error) => {
          this.openSnackBar('Error saving student.', 'Close');
        },
      });
  }

  onCancel() {
    this.dialogRef.close();
    window.location.reload();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
