const passport = require('passport')
const User = require('./models/user')
const LocalStrategy = require('passport-local').Strategy

module.exports = function() {
    //turn a user object into an ID, call done() with no error and the user's ID
    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    //turn the ID into a user object, once it's finished, call done with any errors and the user object
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
    //tells passport to use a local strategy
    passport.use('login', new LocalStrategy(
        (username, password, done) => {
            //user mongoDB query to get one user
            User.findOne({ username: username }, (err, user) => {
                if (err) { return done(err) }
                if (!user) {
                    return done(null, false, {
                        message: "No user has that name!"
                    })
                }
                user.checkPassword(password, (err, isMatch) => {
                    if (err) { return done(err) }
                    if (isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, {
                            message: "Invalid password!"
                        })
                    }
                })
            })
        }
    ))
}