// Simulate adding products to a cart
// POST /api/cart { productId, quantity }

let cart = [];

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { productId, quantity } = req.body;
        if (!productId || !quantity) {
            return res.status(400).json({ error: 'Missing product ID or quantity'});
        }
        cart.push({ productId, quantity });
        return res.status(200).json({ message: 'Added to cart', cart });
    } else if (req.method === 'GET') {
        return res.status(200).json(cart);
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
