require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const argon2 = require("argon2");

(async () => {
    const prisma = new PrismaClient();
    const [email, password] = process.argv.splice(2, 4);

    if (!email || !password) {
        console.log("Missing Email or Password");
        return;
    }

    const user = await prisma.user.create({
        data: {
            email: email,
            password: await argon2.hash(password, {
                secret: Buffer.from(process.env.PASSWORD_SECRET_KEY),
            }),
        },
    });

    console.log(`User ${user.email} created.`);
})();