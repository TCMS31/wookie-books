/* eslint consistent-return:0 */
const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcryptjs');

const userDao = require('../dal/users.dao');

const localLogin = new LocalStrategy({
    usernameField: 'username',
}, async (username, password, done) => {
    console.log(username)
    let user = await userDao.findOne({   username  });
    console.log(user)
    if (!user || !await bcrypt.compare(password + user.salt, user.password)) {
        return done(null, false, { message: "Invalid Login Credentials" });
    }

    
    done(null, user);
});


const jwtLogin = new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY,
}, async (payload, done) => {
    const user = payload;
    if (!user) {
        return done(null, false);
    }
    done(null, user);
});

passport.use('jwt', jwtLogin);
passport.use('local', localLogin);

module.exports = passport;