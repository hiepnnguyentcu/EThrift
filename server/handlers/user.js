const {User, validateUser} = require("../models/user");

const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
    try {
    const userData = {
        email: req.body.email,
        password: req.body.password
    };

    const {error} = validateUser(userData);

    if (error) {
        return res.status(400).json({message: error.details[0].message});
    }

    let user = await User.findOne({email: userData.email});

    if (user) {
        return res.status(400).json({"mesasge": "Email already exists!"});
    }
    else {
        const hashedPassword = await bcrypt.hash(userData.password, 10)
        userData.password = hashedPassword;

        user = new User(userData);
    }

    await user.save();

    return res.status(200).json({token: user.generateJWT()});
    }
    catch(err) {
        return res.status(500).json({message: "Something went wrong"});
    }
}

exports.signIn = async (req, res) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        };
        
        let user = await User.findOne({email: userData.email});
        
        if (!user) {
            return res.status(400).json({message: "User doesn't exists!"});
        }

        let match = await bcrypt.compare(userData.password, user.password);

        if (match) {
            return res.status(200).json({token: user.generateJWT()});
        }
        else {
            return res.status(400).json({message: "Wrong password"});
        }
    }
    catch(err) {
        return res.status(500).json({message: "Something went wrong"});
    }
}

exports.getUserInfo = async (req, res) => {
    const user = await User.findOne({email: req.user.email})

    return res.status(200).json(user);
}