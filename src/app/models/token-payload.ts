export interface TokenPayload {

    aud: string[];
    userId: number;
    exp: number;
    authorities: unknown[];
    jti: string;
    email: string;
   
}
