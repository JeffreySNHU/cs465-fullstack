import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private http: HttpClient
  ) { }

  public getToken(): string | null {
    return this.storage.getItem('travlr-token');
  }

  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  public login(user: User): Promise<any> {
    return this.http.post('http://localhost:3000/api/login', user)
      .toPromise()
      .then((authResp: any) => this.saveToken(authResp.token));
  }

  public register(user: User): Promise<any> {
    return this.http.post('http://localhost:3000/api/register', user)
      .toPromise()
      .then((authResp: any) => this.saveToken(authResp.token));
  }

  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  public isLoggedIn(): boolean {
    const token: string | null = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public getCurrentUser(): User | null {
    if (this.isLoggedIn()) {
      const token: string | null = this.getToken();
      if (token) {
        const { email, name } = JSON.parse(atob(token.split('.')[1]));
        return { email, name } as User;
      }
    }
    return null;
  }
}