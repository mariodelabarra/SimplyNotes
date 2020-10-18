import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError as observableThrowError } from 'rxjs';
import { Role } from '../auth/role.enum';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { transformError } from '../common/common';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends CacheService {
 //Instalamos a traves de npm la dependencias para poder decodificar el token (jwt-decode y npm install -D @types/jwt-decode)

 private readonly authProvider: (email: string, password: string) => Observable<IServerAuthResponse>;
 //Variable que devuelve el dato de tipo Observable<IServerAuthResponse>
 authStatus = new BehaviorSubject<IAuthStatus>(defaultAuthStatus);// Observable para escuchar los cambios que hayan sobre el modelo IAuthStatus
 //Esto es porque se utilizara el authStatus en otros componentes

 constructor(private httpClient: HttpClient) {
   super(); //Esto es porque en el ctor padre esta vacio y no es necesario definir
   this.authStatus.subscribe(authStatus => { //Cada vez que el authStatus cambie de valor tambien se seteara en el localStorage
     this.setItem('authStatus', authStatus);
   })
   this.authProvider = this.userAuthProvider;
  }

 private userAuthProvider(email: string, password: string): Observable<IServerAuthResponse> { //Metodo que llamara a la Web API para crear el Token
   return this.httpClient.post<IServerAuthResponse>(`${environment.urlService}/token`, { email: email, password: password });
 }

 login(email: string, password: string): Observable<IAuthStatus> {
   this.logout(); //Se ejecuta el logout para verificar que no haya ninguna sesion iniciada
   const loginResponse = this.authProvider(email, password).pipe( //Llamamos a la variable authProvider que invoca el metodo userAuthProvider
     map(value => { //Con el metodo map recorremos el resultado
        this.setToken(value.access_Token);// Seteo el token en el localStorage
        const result = jwt_decode(value.access_Token);//Decodifico el valor del token
        return result as IAuthStatus;

     }),
     catchError(transformError)//Capturo el error
   );

     loginResponse.subscribe(
       res => {
         this.authStatus.next(res); //Actualizo el valor de authStatus
       },
       error => {
         this.logout();
         return observableThrowError(error);
       }
     );

   return loginResponse;
 }

 logout() {
   this.clearToken();
   this.authStatus.next(defaultAuthStatus); //Se establecen los valores por defecto al hacer el logout
 }

 private setToken(jwt: string) {
   this.setItem('jwt', jwt);
 }

 getToken(): string {
   return this.getItem('jwt') || '';
 }

 private clearToken() {
   this.removeItem('jwt');
 }

 getAuthStatus(): IAuthStatus {
   return this.getItem('authStatus');
 }

}

export interface IAuthStatus { //Al decodificar el token estarán estas propiedades
 role: Role;
 primarysid: number;
 unique_name: string;
}

interface  IServerAuthResponse { //Modelo para capturar lo que viene en el response
 access_Token: string;
}

const defaultAuthStatus: IAuthStatus = { role: Role.None, primarysid: null, unique_name: null }; //Inicializamos este objeto
