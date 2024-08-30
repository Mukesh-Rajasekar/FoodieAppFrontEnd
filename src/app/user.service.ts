import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


url:string="http://localhost:8765/api/v2/"  
// CRud


  registerUser(user?:User):Observable<User>
  {
    return this.http.post<User>(this.url+"register",user);
  }

// getOneEmp(id?:number):Observable<User>
// {
//  // return this.http.get<employee>(this.url+"/"+id);
//   return this.http.get<User>(this.url+"users/"+id);
  
// }
// deleteOneEmp(id?:number):Observable<User>
// {
// //  return this.http.delete<employee>(this.url+"/"+id);
//   return this.http.delete<User>(this.url+"deluser/"+id);
// }
// insertOneEmp(emp?:User):Observable<User>
// {
//   return this.http.post<User>(this.url,emp);
// }
// updateOneEmp(id?:number,emp?:User):Observable<User>
// {
//  // return this.http.put<employee>(this.url+"/"+id,emp);
//  return this.http.put<User>(this.url+"user/"+id,emp);
// }
}
