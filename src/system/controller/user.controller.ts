import {Controller, Query} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {PageVoPipe} from "../../common/PageVoPipe";
import {PageQueryVo} from "../../common/pageQuery.vo";
import {UserService} from "../service/user.service";

@ApiTags('user')
@Controller('/user')
export class UserController1 {
    constructor(private readonly userService:UserService) {
    }
    async list(@Query(PageVoPipe) pageVo: PageQueryVo, @Query('name') name?: string) {

    }
}
