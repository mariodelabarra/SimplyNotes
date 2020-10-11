import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function transformError(error: HttpErrorResponse | string) { //Controlador de errores en base al error recibido
    let errorMessage = 'An unknow error has occurred.';
    if(typeof error === 'string'){
        errorMessage = error;
    }else if(error.error instanceof ErrorEvent){
        errorMessage = `Error! ${error.error.message}`;
    }else if (error.status){
        errorMessage = `Request failed with ${error.status} ${error.statusText}`;
    }
    return throwError(errorMessage);
}

export class Common {

}
