import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: process.env.CALLBACKURL,
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			console.log('Profile Data');
			console.log(profile);
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

export default passport;
