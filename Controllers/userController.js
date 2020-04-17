const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signUp = async (req, res) => {
    let { firstname, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        res.status(400).send({ unequalPasswords: 'Passwords are not equal.' });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        res.status(400).send({ alreadySignedUp: 'User has already signed up.' });
    }

    let hash = await bcrypt.hash(password, 10);

    const newUser = new User ({
        firstname,
        email,
        password: hash
    });

    await newUser.save();

    res.status(200).send({ successfullyRegistered: 'User has been successfully registered.' })
}


const signIn = async (req, res) => {
    let { email, password } = req.body

    const userRegistered = await User.findOne({ email });

    if (!userRegistered) {
        res.status(400).send({ notSignedUpYet: 'User is not registered.' });
    }

    const passwordMatch = await bcrypt.compare(password, userRegistered.password);

    if (!passwordMatch) {
        res.status(400).send({ noPasswordMatch: 'Password is wrong.' });
    }
  
    const [results] = await promisePool.query(
        `SELECT * FROM users WHERE email = ? LIMIT 1`,
        [email]
    );
    
    const tryingUser = results[0];
  
    // if user has not signed up
    if(!tryingUser) {
      return res.status(400).send({ nonExistingUser: 'L\'utilisateur ne s\'est pas inscrit.' })
    }
    
    else if
    // if user's pwd matches the crypted one in DB
    (await bcrypt.compare(password, tryingUser.password)) {
      // user successfully signs in
      // a session is created with all the info needed as long as the user is logged
      const sessionUserInfo = {
        id: tryingUser.id,
        firstname: tryingUser.firstname,
        email: tryingUser.email
      }
  
      req.session.user = sessionUserInfo;
  
      // session info is sent to client
      return res.json(sessionUserInfo);
    } 
  
    // if user's pwd does not match the crypted one in DB
    else {
      return res.status(400).send({ wrongPassword: 'L\'utilisateur n\'a pas renseigné le bon mot de passe.' })
    }
    
};

module.exports = {
    signUp
}