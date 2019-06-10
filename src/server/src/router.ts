import {Router, Application, Request, Response} from 'express';

const router = (app: Application) => {
		const apiRouter: Router = Router();

		app.get('/api/process', (req: Request, res: Response) => {
				// console.log('requested replay is', req.query.replayID);
				res.status(200).json({message: 'BACKEND HIT'});
		});

		app.use('/api/v1', apiRouter);
};

export default router;
