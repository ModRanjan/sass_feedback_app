interface Comment {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
  replies?: Reply[];
}

interface Reply {
  content: string;
  replyingTo: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}

export interface ProductRequest {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: Comment[];
}

interface User {
  image: string;
  name: string;
  username: string;
}

interface Data {
  currentUser: User;
  productRequests: ProductRequest[];
}
