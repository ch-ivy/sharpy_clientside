import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpParam } from 'src/app/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(data: SignUpParam) {
    this.http.post('', data);
  }
}
