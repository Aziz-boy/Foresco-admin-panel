//biz controllerlarni doim objectlar orqali hosil qilamiz
import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import AuthService from "../models/Auth.service";
import {
  ExtendedRequest,
  LoginInput,
  Member,
  MemberInput,
  MemberUpdateInput,
} from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { AUTH_TIMER } from "../libs/config";

//REACT uchun
const memberService = new MemberService();
const authService = new AuthService();
const memberController: T = {};

memberController.getRestaurant = async (req: Request, res: Response) => {
  try {
    console.log("getRestaurant");
    const result = await memberService.getRestaurant();

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getRestaurant:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    // console.log("body:", req.body);

    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    const token = await authService.createToken(result);
    // console.log("body", req.body);
    // console.log("header", req.headers);

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

memberController.logout = (req: ExtendedRequest, res: Response) => {
  try {
    console.log("logout");
    res.cookie("accessToken", null, { maxAge: 0, httpOnly: true });
    res.status(HttpCode.OK).json({ logout: true });
  } catch (err) {
    console.log("Error, logout:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.getMemberDetail = async (
  req: ExtendedRequest,
  res: Response
) => {
  try {
    console.log("getMemberDetail");
    const result = await memberService.getMemberDetail(req.member);
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getMemberDetail:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.updateMember = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("updateMember");
    const input: MemberUpdateInput = req.body;
    if (req.file) input.memberImage = req.file.path.replace(/\\/, "/");
    const result = await memberService.updateMember(req.member, input);

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, updateMember:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.getTopUsers = async (req: Request, res: Response) => {
  try {
    console.log("getTopUsers");
    const result = await memberService.getTopUsers();

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error getTopUsers", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.verifyAuth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies["accessToken"];
    if (token) req.member = await authService.checkAuth(token); // shu yerga awaut qo'ymasa nima boladi
    if (!req.member)
      throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);

    next();
  } catch (err) {
    console.log("Error, verifyAuth:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.retrieveAuth = async (
  //bu mantigimiz kirib kelayotgan requestni kimligini tekshiradi. login bolagn bolsa datasini olib beradi login bolmagan bolsa ham otkazib yuboradi
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies["accessToken"]; // bizni requestimizdagi cookini ichidan access tokenni tekshiradi
    if (token) req.member = await authService.checkAuth(token); //agar mavjud bolsa payloadimizni memberga yukalb beradi     //TODO shu yerga await qo'ymasa nima boladi

    next(); //shu bosqichda error bolsa hm akeyingisizga otkazish manqtiqi
  } catch (err) {
    console.log("Error, retrieveAuth:", err);
    next();
  }
};

export default memberController;
