export default function handler(req, res) {
    if (req.method === "POST") {
        return res.status(200).json({ message: "Logged out" });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
