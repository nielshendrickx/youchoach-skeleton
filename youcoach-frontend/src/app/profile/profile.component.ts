import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private http: HttpClient) {
  }

  profilePicture: any;
  private UserUrl = '/users';
  ngOnInit(): void {
    const profilePicture = 'https://pbs.twimg.com/profile_images/1095310629542551553/TgcAJvMn_400x400.jpg';
  }

}
