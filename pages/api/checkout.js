export default function handler(req, res) {
    if (req.method === 'POST') {
        const { cart, user } = req.body;
        if (!cart || !Array.isArray(cart) || cart.length === 0) {
            return res.status(400).json({ error: 'Cart is empty or invalid' });
        }

        return res.status(200).json({
            message: 'Checkout successful',
            order: {
                id: Math.floor(Math.random() * 1000000),
                items: cart,
                user: user || null,
                status: 'confirmed',
            },
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
