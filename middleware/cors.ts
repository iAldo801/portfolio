import Cors from 'cors';

const corsOptions = {
  origin: 'https://example.com', // Replace 'https://example.com' with your domain
};

const corsMiddleware = Cors(corsOptions);

export default function corsHandler(handler: any) {
  return (req, res) => {
    return corsMiddleware(req, res, () => {
      return handler(req, res);
    });
  };
}
