import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';
import { SendMailController } from './controllers/SendMailController';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import { AuthController } from './controllers/AuthController';
import AuthMiddleware from './middlewares/AuthMiddleware';

const router = Router();

const userController = new UserController();
const authController = new AuthController();
const surveysController = new SurveysController();
const sendEmailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);
router.post('/auth', authController.autenticate);
router.use(AuthMiddleware);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.index);
router.post('/sendEmail', sendEmailController.execute)
router.get('/answers/:value', answerController.execute);
router.get('/nps/:survey_id', npsController.execute);

export { router };