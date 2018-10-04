import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/**
 * The requests made through this api
 * should hit cached json files
 */
@Injectable()
export class MockProvider {

  constructor(public http: HttpClient) {
  }

  mockSend(): boolean {
    return true;
  }

  async send(): Promise<any> {

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
