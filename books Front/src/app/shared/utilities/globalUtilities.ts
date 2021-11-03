export class GlobalUtilities {
  getApiUrl(api: string) : string {
    return window.location.origin.replace(":4200", ":8080") + "/api/v1/" + api;
  }
}
