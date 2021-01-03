import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss'],
})
export class AddStudentDialogComponent implements OnInit {
  englishName: string = '';
  urduName: string = '';
  dateOfBirth: string = '';
  contactNumber: string = '';
  fathersEnglishName: string = '';
  fathersUrduName: string = '';
  guardiansId: string = '';
  currentAddress: string = '';
  permanentAddress: string = '';
  previousInstitute: string = '';
  previousEducation: string = '';
  schoolEducation: string = '';
  admissionType: string = '';
  admissionDate: string = '';
  admissionEvaluator: string = '';
  admissionNotes: string = '';
  evaluatorRecommendation: string = '';

  constructor(
    private dialogRef: MatDialogRef<AddStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.addStudent();
    this.dialogRef.close();
  }

  addStudent() {
    const body = {
      english_name: this.englishName,
      urdu_name: this.urduName,
      date_of_birth: this.dateOfBirth,
      contact_number: this.contactNumber,
      fathers_english_name: this.fathersEnglishName,
      fathers_urdu_name: this.fathersUrduName,
      guardians_id: this.guardiansId,
      current_address: this.currentAddress,
      permanent_address: this.permanentAddress,
      previous_institute: this.previousInstitute,
      previous_education: this.previousEducation,
      school_education: this.schoolEducation,
      admission_type: this.admissionType,
      admission_date: this.admissionDate,
      admission_evaluator: this.admissionEvaluator,
      admission_notes: this.admissionNotes,
      evaluator_recommendation: this.evaluatorRecommendation,
    };
    this.http.post<any>(environment.apiEndpoint + 'students/', body).subscribe({
      next: (data) => {
        this.openSnackBar('Student has been created.', 'Close');
      },
      error: (error) => {
        this.openSnackBar('Error creating student.', 'Close');
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
