import users from "./_users";

export default function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password required"});
        }
        if (users.find(u => u.email === email)) {
            return res.status(409).json({ error: "Email already exists" });
        }
        const user = { email, password };
        users.push(user);
        return res.status(201).json({ user: { email: user.email }});
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
