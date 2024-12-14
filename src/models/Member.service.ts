import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
    private readonly memberModel;

    constructor () {
        this.memberModel = MemberModel
    }

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
            .findOne({ memberType: MemberType.RESTAURANT })
            .exec(); // findone dan kn boshqa query quyishga ruxsat bermedi
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED); 
        console.log("exist:", exist);
        try {
            const result = await this.memberModel.create(input); // db da inputni create qiladi
            // const tempResult = new this.memberModel(input);
            // const result = await tempResult.save(); //saync method save 
            result.memberPassword = "";
            return result;
        } catch(err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }
}

export default MemberService;