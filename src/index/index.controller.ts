import { Controller, Get, Res } from '@nestjs/common';

@Controller('')
export class IndexController {

    @Get()
    home(@Res() res){
        return res.redirect('/docs')
    }
}
