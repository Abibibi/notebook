const User = require('../Models/User');
const bcrypt = require('bcrypt');


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

module.exports = {
    signUp
}