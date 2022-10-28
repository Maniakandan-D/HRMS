import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ImageService {
  apiEndpoint: string = environment.API;
  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('png', image);

    return this.http.post<Response>(`${this.apiEndpoint}/api/v1/image-upload`, formData);
  }
}
