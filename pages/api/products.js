// Returns a list of products as JSON
// Example endpoint: /api/products

export default function handler(req, res) {
    if (req.method == 'GET') {
        res.status(200).json([
            { id: 1, name: 'JS Course Beginner', price: 199.99 },
            { id: 2, name: 'JS Course Advanced', price: 299.99 },
            { id: 3, name: 'React Course Beginner', price: 249.99 },
            { id: 4, name: 'React Course Advanced', price: 349.99 },
        ]);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
