
const { serialize } = require("cookie");
import users from "./_users";

export default function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        res.setHeader(
            "Set-Cookie",
            serialize("user", user.email, {
                path: "/",
                httpOnly: false, // For demo only; use true for secure cookies
                sameSite: "lax",
                maxAge: 60 * 60 * 24 * 7 // 1 week
            })
        );
        return res.status(200).json({ user: { email: user.email } });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}