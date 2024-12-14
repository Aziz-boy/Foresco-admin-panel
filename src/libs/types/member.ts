import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";

// Member -bu db dan qaytekan data uchun type
export interface Member {
    _id: ObjectId;
    memberType?: MemberType
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface MemberInput {
    memberType?: MemberType
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;
}