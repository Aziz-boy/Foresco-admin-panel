import { NextFunction, Request, response, Response } from 'express';
import {T} from "../libs/types/common";
import MemberService from '../models/Member.service'; 
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import { AdminRequest } from '../libs/types/member';
import Errors, { Message } from '../libs/Errors';

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.render('home');
        // send | json | redirect | end | render
    } catch (err) {
        console.log("Error, goHome:", err);
        res.redirect("/admin");
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");
    } catch (err) {
        console.log("Error, getSignup:", err);
        res.redirect("/admin");
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("login");
    } catch (err) {
        console.log("Error, getLogin:", err);
        res.redirect("/admin");
    }
};



restaurantController.processSignup = async (
    req: AdminRequest, 
    res: Response
) => {
    try {
        console.log("processSignup");
        // console.log("body:", req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const result = await memberService.processSignup(newMember);
        //TODO SESSIONS AUTHENTICATION

        req.session.member = result; //browserni ichiga borib cookieni ichida seedni joylaydi va session colectionga yangi member yozadi
        req.session.save( function () {
          res.send(result);
        });

    } catch (err) {
        console.log("Error, processSignup:", err);
        const message = 
          err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
        res.send(`<script> alert("${message}"); window.location.replace('admin/signup')</script>`);
    }
};

restaurantController.processLogin = async (
    req: AdminRequest, 
    res: Response
) => {
    try {
        console.log("processLogin");
        console.log("body: ", req.body);
        const input: LoginInput = req.body; 


        const result =  await memberService.processLogin(input);
       //TODO SESSIONS  AUTHENTICATION
        req.session.member = result; //browserni ichiga borib cookieni ichida sidni =session idni joylaydi va session colectionga yangi member yozadi
        req.session.save( function () {
          res.send(result);
        });

    } catch (err) {
        console.log("Error, processLogin:", err);
        const message = 
          err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
        res.send(`<script> alert("${message}"); window.location.replace('admin/login')</script>`);
    }
};


restaurantController.logout = async (
    req: AdminRequest, 
    res: Response
) => {
    try {
        console.log("logout");
        req.session.destroy(function() {
            res.redirect("/admin");
        });

    } catch (err) {
        console.log("Error, logout:", err);
        res.redirect("/admin");
    }
};



//CODE UNDER THIS LINE IS FOR TEST PURPOSE
restaurantController.checkAuthSession = async (
    req: AdminRequest, 
    res: Response
) => {
    try {
        console.log("checkAuthSession");
        if (req.session?.member) 
            res.send(`<script> alert("${req.session.member.memberNick}")</script>`);
        else (res.send(`<script> alert("${Message.NOT_AUTHENTICATED}")</script>`))
    } catch (err) {
        console.log("Error, checkAuthSession:", err);
        res.send(err);
    }
};

restaurantController.verifyRestaurant = (
    req: AdminRequest, 
    res: Response, 
    next: NextFunction) => {
    if(req.session?.member?.memberType === MemberType.RESTAURANT){ 
        req.member = req.session.member;
        next();
    } else {
        const message = Message.NOT_AUTHENTICATED;
        res.send(
            `<script> alert("${message}"); window.location.replace('/admin/login');</script>`
        );
    }
}


export default restaurantController;