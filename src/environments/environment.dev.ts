export const environment = {
    production: false,
    apiEndpoints:{
        NonAdminTestOperation: 'https://testanddeleteapp.azurewebsites.net/WeatherForecast/NonAdminTestOperation',
        AdminTestOperation: 'https://testanddeleteapp.azurewebsites.net/WeatherForecast/AdminTestOperation',

    },
    msalConfig: {
        auth: {
            clientId: '4c2d1c78-9caa-4e3a-9304-3bda78df07c5',
            authority: 'https://login.microsoftonline.com/9e8754b6-f9cd-4aed-974d-a0ec0f3ed703'
        }
    },
    apiConfig: {
        scopes: ['api://25afc9bd-3f17-41d1-b3d3-29d78f1cf373/access_as_user','profile'],
        uri: 'https://graph.microsoft.com/v1.0/me',
    }
};
