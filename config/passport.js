const passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/user');

module.exports = function(passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(new FacebookStrategy({
            clientID: "1994872507415173",
            clientSecret: "c40752f49f4460ad764e29c6809fd9b1",
            callbackURL: "http://localhost:3000/auth/facebook/callback",
            profileFields: ["id", "name", "photos", "email"]
        },
        function (accesToken, refreshToken, profile, done) {
            User.findOne({'facebookId': profile.id}, function (err, user) {
                if (err)
                    return done(err);
                if (user) {
                    return done(null, user);
                } else {
                    const newUser = new User();

                    newUser.facebookId = profile.id;
                    newUser.token = accesToken;
                    newUser.name = profile.name.givenName + ' ' + profile.name.familyName;
                    newUser.picture = profile.photos ? profile.photos[0].value : '/img/faces/unknown.jpg';
                    newUser.email = profile.emails[0].value;
                    newUser.admin = '0';
                    newUser.save(function (err) {
                        if (err)
                            throw err;
                        console.log('user saved');
                        return done(null, newUser);
                    });
                }
            });
        }
    ));
}

