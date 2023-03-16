const express = require("express");
const router = express.Router();

// Google
const { clientId, oAuth2Client } = require("../service/externalAPI/googleAPI");

// Google Router
router.post("/google", async (req, res) => {
    const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens

    const ticket = await clientId.verifyIdToken({
        idToken: tokens.id_token,
    });

    const payload = ticket.getPayload();

    const userData = {
        sub: payload["sub"],
        email: payload["email"],
        name: payload["name"],
        locale: payload["locale"],
    };

    console.log(userData);

    res.json(tokens);
});

module.exports = router;
