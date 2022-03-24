import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  profile!: any
  works!: any
  
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getProfile().subscribe(data => {
      this.profile = data
      console.log("Profiles : " + data);
    })

    this._http.getWorks().subscribe(data => {
      this.works = data
      console.log("Works : " + data);
    })
  }
}

interface iprofile {
  "fname": string,
  "lname": string,
  "desc": string
}