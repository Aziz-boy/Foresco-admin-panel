import Errors, { HttpCode } from "../libs/Errors";
import { AUTH_TIMER } from "../libs/config";
import { Member } from "../libs/types/member";
import jwt from "jsonwebtoken";
import { Message } from "../libs/Errors";

class AuthService {
  private readonly secretToken;

  constructor() {
    this.secretToken = process.env.SECRET_TOKEN as string;
  }

  public async createToken(payload: Member) {
    return new Promise((resolve, reject) => {
      //resolve bu try qismi reject bu error bergandagi catch
      const duration = `${AUTH_TIMER}h`;
      jwt.sign(
        payload,
        process.env.SECRET_TOKEN as string,
        {
          expiresIn: duration,
        },
        (err, token) => {
          if (err)
            reject(
              new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED)
            );
          else resolve(token as string);
        }
      );
    });
  }

  //Tokendan objectga o'zgartiradigan method kerak
  public async checkAuth(token: string): Promise<Member> {
    //member qaytarishi kerak chunki payloadimz member object type korinishida edi
    const result: Member = (await jwt.verify(
      token,
      this.secretToken
    )) as Member;
    console.log(`--- [AUTH] memberNick ${result.memberNick} ---`);
    return result;
  }
}

export default AuthService;
