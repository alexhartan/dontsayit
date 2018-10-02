import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/**
 * The requests made through this api
 * should hit cached json files
 */
@Injectable()
export class CRMProvider {

  constructor(public http: HttpClient) {
  }


  getOptions() {
    return;
  }

  async mockSend(): Promise<any> {
    const data = new HttpParams()
      ;

    try {
      const res = await this.http.post('mok', data).toPromise();
      return res;
    } catch (err) {
      console.error(err);
    }
  }

}
