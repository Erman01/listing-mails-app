import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css'],
})
export class MailsComponent implements OnInit {
  mails: any;
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    let header = new HttpHeaders({ Authorization: `${token}` });
    const options = { headers: header };
    this.httpClient
      .get<any>(
        'https://hire-our-grads-backend.azurewebsites.net/test/list',
        options
      )
      .subscribe((response) => {
        this.mails = response.list;
      });
  }
}
