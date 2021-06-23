const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const productsRouter = require('./products.js');
// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/products', productsRouter);




const { restoreUser } = require('../../utils/auth.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);



// // //Test
// //1
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// // // GET /api/restore-user
// //2
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // // GET /api/require-auth
// //3
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
// //4
// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });
              
module.exports = router;