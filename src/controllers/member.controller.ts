//biz controllerlarni doim objectlar orqali hosil qilamiz
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import AuthService from "../models/Auth.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { AUTH_TIMER } from "../libs/config";

//REACT uchun
const memberService = new MemberService();
const authService = new AuthService();
const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    // console.log("body:", req.body);

    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    const token = await authService.createToken(result);
    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 360 * 100,
      httpOnly: false,
    }); //bizga murojaat etayotgan browserga qaysi nom bilan tokenni saqlashni aytishga kerak

    //console.log("token: ", token); //biz kiritgan payload objectimizni resultimiz orqali inson tushuna olmaydigan stringa ogirib berdi
    //  console.log("result: ", result);
    res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
  } catch (err) {
    console.log("Error, signup:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    //  console.log("body: ", req.body);
    const input: LoginInput = req.body,
      result = await memberService.login(input),
      token = await authService.createToken(result); //await qo'ymasa nima boladi

    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 360 * 100,
      httpOnly: false,
    }); //bizga murojaat etayotgan browserga qaysi nom bilan tokenni saqlashni aytishga kerak

    //console.log("token: ", token); //biz kiritgan payload objectimizni resultimiz orqali inson tushuna olmaydigan stringa ogirib berdi
    //  console.log("result: ", result);
    res.status(HttpCode.OK).json({ member: result, accessToken: token });
  } catch (err) {
    console.log("Error, login:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.verifyAuth = async (req: Request, res: Response) => {
  try {
   let member = null;
   const token = req.cookies["accessToken"];
   if(token) member = await authService.checkAuth(token); // shu yerga awaut qo'ymasa nima boladi
  
   if(!member) 
      throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);

   console.log("member:", member);
   res.status(HttpCode.OK).json({ member: member });
} catch (err) {
    console.log("Error, verifyAuth:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
