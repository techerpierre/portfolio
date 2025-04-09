export default {
    passwordSecretKey: process.env.PASSWORD_SECRET_KEY || "default_secret",
    authSecret: process.env.AUTH_SECRET || "default_secret",
} as const;