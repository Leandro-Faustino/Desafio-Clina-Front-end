export class AppConstants {

  public static get baseServidor(): string {
return "http://localhost:3000/"
  }

  public static get baseLogin(): string {
     {
      return this.baseServidor + "auth"
    }
      }

public static get baseUrl(): string {
  return this.baseServidor + "usuario"
}

}
