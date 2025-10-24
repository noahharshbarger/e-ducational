// Returns a list of products as JSON
// Example endpoint: /api/products

export default function handler(req, res) {
    if (req.method == 'GET') {
        res.status(200).json([
            { id: 1, name: 'JS Course Beginner', price: 199.99, stock: 10, category: 'JavaScript' },
            { id: 2, name: 'JS Course Advanced', price: 299.99, stock: 0, category: 'JavaScript' },
            { id: 3, name: 'React Course Beginner', price: 249.99, stock: 5, category: 'React' },
            { id: 4, name: 'React Course Advanced', price: 349.99, stock: 2, category: 'React' },
        ]);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
