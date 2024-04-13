import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  httpClient = inject(HttpClient)

  data: any[] = [];
  ngOnInit(): void {
    this.fetchData();
  }




  fetchData() {
    this.httpClient
      .get('http://localhost:3000/products?page=1')
      .subscribe((data: any) => {
        console.log("DATA", data);
        this.data = data.results;
      });
  }

}
