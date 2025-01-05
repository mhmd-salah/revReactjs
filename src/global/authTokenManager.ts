import Cookies from "universal-cookie";
import { CookieSetOptions } from "universal-cookie";


// Singleton class to manage authentication tokens
class AuthTokenManager {
  private static instance: AuthTokenManager;
  private cookies: Cookies;
  private readonly tokenKey = "authToken";

  private constructor() {
    this.cookies = new Cookies();
  }

  public static getInstance(): AuthTokenManager {
    if (!AuthTokenManager.instance) {
      AuthTokenManager.instance = new AuthTokenManager();
    }
    return AuthTokenManager.instance;
  }
  //set token
  public setToken(token: string, options?: CookieSetOptions): void {
    this.cookies.set(this.tokenKey, token, {
      path: "/",
      ...options,
    });
  }
  // get token
  public getToken(): string | undefined {
    return this.cookies.get(this.tokenKey);
  }
  // remove token
  public removeToken(): void {
    this.cookies.remove(this.tokenKey, { path: "/" });
  }
}

export default AuthTokenManager;
