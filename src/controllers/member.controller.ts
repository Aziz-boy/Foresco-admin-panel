//biz controllerlarni doim objectlar orqali hosil qilamiz
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import AuthService from "../models/Auth.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

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
    //TODO Token AUTHENTICATION integration
    console.log("token: ", token);

    res.json({ member: result });
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

    console.log("token: ", token); //biz kiritgan payload objectimizni resultimiz orqali inson tushuna olmaydigan stringa ogirib berdi
    //TODO Token AUTHENTICATION integration
    //  console.log("result: ", result);
    res.json({ member: result });
  } catch (err) {
    console.log("Error, login:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
