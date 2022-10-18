import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminServiceService } from '../admin-service.service';
import { MatDialog } from '@angular/material/dialog';
import { NewsAddDialogComponent } from '../news-add-dialog/news-add-dialog.component';
@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.css']
})
export class NewsGridComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['newsId', 'title', 'subtitle', 'description', 'status', 'newsCategoryId', 'createdDate', 'isActive', 'createdBy', 'action'];
  title = 'angular-mat'
  clickedRows = new Set<User>();

  columnsToDisplay: string[] = ['createdBy']
  users: any = [];


  constructor (private service: AdminServiceService, private dialog: MatDialog) {

    service.users().subscribe((data: any) => {
      console.warn("data", data);

      this.users = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
      console.log(this.users);
    });
  }

  ngOnInit(): void {
  }
  EditProduct(row: any) {
    this.dialog.open(NewsAddDialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.service.users().subscribe((data: any) => {
          console.warn("data", data);

          this.users = data;
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
          console.log(this.users);
        });
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteProduct(id: number) {
    // this.service.deleteProduct(id).subscribe({
    //   next: (res) => {
    //     alert('Product Deleted Successfully')
    //   },
    //   error: () => {
    //     alert('Error while deleting the product!1')
    //   }
    // })
  }
  openDialog() {
    this.dialog.open(NewsAddDialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'Saved') {
        this.service.users().subscribe((data: any) => {
          console.warn("data", data);

          this.users = data;
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
          console.log(this.users);
        });
      }
    })
  }

}
export interface User {
  No: number;
  title: string;
  subtitle: string;
  description: string;
}