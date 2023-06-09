import express from 'express';
import applyleaveController from '../controllers/applyleave.controller';
const router = express.Router();
import loginController from '../controllers/login.controller';
import newuserController from '../controllers/newuser.controller';
import postController from '../controllers/post.controller';
import profileController from '../controllers/profile.controller';
import signUpController from '../controllers/signup.controller';
import auth from '../middleware/auth';

router.post('/signup', signUpController.signup);
router.post('/login', loginController.login); 
router.get('/profile' , auth, profileController.profile); 
router.put('/editusername' , auth, profileController.editusername); 
router.put('/editemail' , auth, profileController.editemail); 
router.put('/editphone' , auth, profileController.editphone); 
router.put('/editpassword' , auth, profileController.editpassword); 
router.put('/editdob' , auth, profileController.editdob); 
router.post('/imageupload' , auth, profileController.imageupload); 
router.post('/add_post', postController.add_post);
router.get('/all_post', auth, postController.allpost);
router.delete('/delete_post/:id', postController.deletepost);
router.post('/add_user', newuserController.adduser);
router.post('/add_leave', postController.add_leaves);
router.post('/apply_leave', auth, applyleaveController.apply);
router.get('/all_leave', postController.allleave);
router.get('/get_apply_leaves', applyleaveController.getapply_leaves);


router.post('/update_leave/:id', applyleaveController.update_leave);
router.put('/cancel_leave/:id', applyleaveController.cancel_leave);
router.get('/single_user_apply_leave',auth, applyleaveController.single_user_apply_leave);
// router.get('/leaves',auth, applyleaveController.leaves);
router.post('/like/:id',auth, postController.like);

export default router;