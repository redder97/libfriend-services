export default {
    SALT_ROUNDS: process.env['SALT_ROUNDS'],
    DATABASE_URL: process.env['DATABASE_URL'],
    PORT: process.env['PORT'],
    GOOGLE_CLIENT_ID: process.env['GOOGLE_CLIENT_ID'],
    GOOGLE_CLIENT_SECRET: process.env['GOOGLE_CLIENT_SECRET'],
    GOOGLE_REDIRECT_URL: process.env['GOOGLE_REDIRECT_URL'],
    OAUTH_SUCCESS_REDIRECT: process.env['OAUTH_SUCCESS_REDIRECT']
}