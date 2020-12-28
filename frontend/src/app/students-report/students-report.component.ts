import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students-report',
  templateUrl: './students-report.component.html',
  styleUrls: ['./students-report.component.scss'],
})
export class StudentsReportComponent implements OnInit {
  
  students: any;
  displayedColumns: string[] = [
    'studentId',
    'englishName',
    'urduName',
    'dateOfBirth',
    'contactNumber',
    'fathersEnglishName',
    'fathersUrduName',
    'guardiansId',
    'currentAddress',
    'permanentAddress',
    'previousInstitute',
    'previousEducation',
    'schoolEducation',
    'admissionType',
    'admissionDate',
    'admissionEvaluator',
  ];

  require: any
  camelCaseKeys = require('camelcase-keys');

  constructor(private http: HttpClient) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.http
      .get<any>(environment.api_endpoint + 'api/v1/students')
      .subscribe((data) => {
        data = this.camelCaseKeys(data)
        this.assignResponse(data)
      });
  }

  assignResponse(data: any){
    this.students = new MatTableDataSource(data)
    this.students.paginator = this.paginator;
    this.students.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.students.filter = filterValue.trim().toLowerCase();
  }
}
