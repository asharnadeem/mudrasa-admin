import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AddTeacherDialogComponent } from './dialogs/add-teacher-dialog/add-teacher-dialog.component';
import { EditTeacherDialogComponent } from './dialogs/edit-teacher-dialog/edit-teacher-dialog.component';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  teachers: any;
  displayedColumns: string[] = [
    'teacherId',
    'name',
    'governmentId',
    'phoneNumber',
    'startDate',
    'endDate',
  ];

  require: any;
  camelCaseKeys = require('camelcase-keys');

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.http
      .get<any>(environment.apiEndpoint + 'teachers/')
      .subscribe((data) => {
        data = this.camelCaseKeys(data);
        this.assignResponse(data);
      });
  }

  assignResponse(data: any) {
    this.teachers = new MatTableDataSource(data);
    this.teachers.paginator = this.paginator;
    this.teachers.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.teachers.filter = filterValue.trim().toLowerCase();
  }

  addTeacherDialog() {
    this.dialog.open(AddTeacherDialogComponent, {
      width: '40vw',
      height: '87vh',
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.getTeachers();
    });
  }

  editTeacherDialog(teacher: any) {
    this.dialog.open(EditTeacherDialogComponent, {
      data: {
        teacher: teacher,
      },
      width: '40vw',
      height: '87vh',
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.getTeachers();
    });
  }
}
