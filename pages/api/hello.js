// Example Next.js API Route
// This file creates an endpoint at /api/hello
// You can fetch it from the frontend with fetch('/api/hello')

export default function handler(req, res) {
    if (req.method == 'GET') {
        res.status(200).json({ message: 'Hello from the API!' });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
// export default function handler(req, res) {
//   // Check the HTTP method
//   if (req.method === 'GET') {
//     // Respond with JSON data
//     res.status(200).json({ message: 'Hello from the API!' });
//   } else {
//     // Handle any other HTTP method
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
