import { Request, Response } from 'express';

export default class CompareController {
  public async teste(request: Request, response: Response): Promise<Response>{

    const resp = 'Hello World!!';

    return response.json(resp);
  }

}
