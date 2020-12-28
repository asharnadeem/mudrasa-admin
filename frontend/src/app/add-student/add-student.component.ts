import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  studentId: string = '';
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
  delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit() {
    const body = {
      student_id: this.studentId,
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
    this.http
      .post<any>(
        environment.api_endpoint + environment.api_route + 'students',
        body
      )
      .subscribe({
        next: (data) => {
          this.openSnackBar('Student has been created.', 'Close');
          window.location.reload();
        },
        error: (error) => {
          this.openSnackBar('Error creating student.', 'Close');
        },
      });
  }

  onCancel() {
    window.location.reload();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
