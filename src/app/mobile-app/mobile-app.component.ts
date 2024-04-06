import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mobile-app',
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.css']
})
export class MobileAppComponent {

  accessToken: string = '';
  apiResponse: string = 'Not invoked yet!';
  nonAdminTestOperationResponse: string = 'Not invoked yet!';
  adminTestOperationResponse: string = 'Not invoked yet!';
  

  constructor(private authService: MsalService, 
    private msalBroadcastService: MsalBroadcastService,
    private httpClient: HttpClient
  ) {}

  grabToken(){
    this.authService.acquireTokenSilent({
      scopes: environment.apiConfig.scopes,
      authority: environment.msalConfig.auth.authority

    }).subscribe( r => {
      console.log(r.accessToken);
      this.accessToken = r.accessToken;      
    });
  }

  invokeNonAdminTestOperation(){
    this.httpClient.get(environment.apiEndpoints.NonAdminTestOperation,
        {
          responseType: 'text',
          headers:{
           Authorization: `Bearer ${this.accessToken}`,
        },
      }).subscribe({
        next: data => {
          this.nonAdminTestOperationResponse = data;
        },
        error: error => {
          this.nonAdminTestOperationResponse = error.message;
        }
      } );
  }

  invokeAdminTestOperation(){
    this.httpClient.get(environment.apiEndpoints.AdminTestOperation,
        {
          responseType: 'text',
          headers:{
           Authorization: `Bearer ${this.accessToken}`,
        },
      }).subscribe({
        next: data => {
          this.adminTestOperationResponse= data;
        },
        error: error => {
          this.adminTestOperationResponse = error.message;
        }
      } );

  }
   clickMe(){
       
    this.authService.acquireTokenSilent({
      scopes: environment.apiConfig.scopes,
      authority: environment.msalConfig.auth.authority

    }).subscribe( r => {
      console.log(r.accessToken);
      this.accessToken = r.accessToken;
      this.httpClient.get(environment.apiEndpoints.AdminTestOperation,
        {
          responseType: 'text',
          headers:{
           Authorization: `Bearer ${r.accessToken}`,
        },
      }).subscribe({
        next: data => {
          this.adminTestOperationResponse = data;
        },
        error: error => {
          this.adminTestOperationResponse = error.message;
        }
      } );
    });
  

    console.log('ok');
   }
}
