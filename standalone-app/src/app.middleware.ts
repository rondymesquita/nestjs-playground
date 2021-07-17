import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import useragent from 'express-useragent';

@Injectable()
export class UserAgentMiddleware implements NestMiddleware {
  private readonly logger = new Logger(UserAgentMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const userAgentInfo = req.headers['user-agent'];
    const { isBot, os, platform, source } = useragent.parse(userAgentInfo);
    this.logger.log('User Agent', { isBot, os, platform, source });
    next();
  }
}
