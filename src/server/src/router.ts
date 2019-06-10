import {Router, Application, Request, Response} from 'express';

const router = (app: Application) => {
		const apiRouter: Router = Router();

		app.get('/api/process', (req: Request, res: Response) => {
				res.status(200).json({message: 'FEZZZZZ'});
		});

		app.use('/api/v1', apiRouter);
};

export default router;
