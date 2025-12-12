

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Learn best practices for designing and implementing RESTful APIs that can handle millions of requests.",
    date: "2024-12-01",
    readTime: "8 min read",
    tags: ["Node.js", "API", "Backend"],
    slug: "scalable-apis-nodejs",
    content: `
# Building Scalable APIs with Node.js and Express

Building APIs that can handle millions of requests requires careful planning and implementation. In this article, we'll explore the best practices for creating scalable, maintainable APIs.

## Why Scalability Matters

As your application grows, so does the number of users and requests. A well-designed API can handle this growth gracefully, while a poorly designed one will crumble under pressure.

## Key Principles

### 1. Use Proper HTTP Methods

Always use the correct HTTP methods for your endpoints:

- **GET** for retrieving data
- **POST** for creating new resources
- **PUT** for updating existing resources
- **DELETE** for removing resources

\`\`\`javascript
// Good example
app.get('/api/users', getUsers);
app.post('/api/users', createUser);
app.put('/api/users/:id', updateUser);
app.delete('/api/users/:id', deleteUser);
\`\`\`

### 2. Implement Caching

Caching can dramatically improve your API's performance:

\`\`\`javascript
const redis = require('redis');
const client = redis.createClient();

async function getCachedData(key, fetchFunction) {
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);
  
  const data = await fetchFunction();
  await client.setEx(key, 3600, JSON.stringify(data));
  return data;
}
\`\`\`

### 3. Rate Limiting

Protect your API from abuse with rate limiting:

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests
});

app.use('/api/', limiter);
\`\`\`

## Database Optimization

- Use indexes on frequently queried fields
- Implement pagination for large datasets
- Use connection pooling

## Conclusion

Building scalable APIs is an ongoing process. Start with these fundamentals and continuously monitor and optimize your application as it grows.
    `,
  },
  {
    id: 2,
    title: "Modern State Management in React Applications",
    excerpt: "Exploring different state management solutions and when to use each one in your React projects.",
    date: "2024-11-15",
    readTime: "6 min read",
    tags: ["React", "State Management", "Frontend"],
    slug: "react-state-management",
    content: `
# Modern State Management in React Applications

State management is one of the most discussed topics in the React ecosystem. Let's explore the different options and when to use each one.

## The State Management Landscape

React has evolved significantly, and so have our options for managing state. Here's an overview of the most popular solutions.

### 1. useState and useReducer

For local component state, React's built-in hooks are often all you need:

\`\`\`tsx
const [count, setCount] = useState(0);

// For more complex state logic
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

### 2. Context API

Perfect for passing data through the component tree without prop drilling:

\`\`\`tsx
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
\`\`\`

### 3. Zustand

A minimal, fast state management solution:

\`\`\`tsx
import { create } from 'zustand';

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}));
\`\`\`

### 4. TanStack Query

For server state, TanStack Query is the gold standard:

\`\`\`tsx
const { data, isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
});
\`\`\`

## Choosing the Right Solution

| Use Case | Recommended Solution |
|----------|---------------------|
| Local UI state | useState/useReducer |
| Theme, Auth | Context API |
| Complex client state | Zustand |
| Server state | TanStack Query |

## Conclusion

Don't overcomplicate your state management. Start simple and only add complexity when needed.
    `,
  },
  {
    id: 3,
    title: "Docker for Developers: A Practical Guide",
    excerpt: "Everything you need to know to start containerizing your applications with Docker.",
    date: "2024-11-01",
    readTime: "10 min read",
    tags: ["Docker", "DevOps", "Containers"],
    slug: "docker-practical-guide",
    content: `
# Docker for Developers: A Practical Guide

Docker has revolutionized how we develop, ship, and run applications. Let's dive into the practical aspects of using Docker in your development workflow.

## What is Docker?

Docker is a platform that uses containerization to package applications and their dependencies into isolated units called containers.

## Getting Started

### Basic Dockerfile

\`\`\`dockerfile
# Use an official Node.js runtime
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
\`\`\`

### Docker Compose

For multi-container applications, use Docker Compose:

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://db:5432/myapp
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

## Best Practices

1. **Use multi-stage builds** to reduce image size
2. **Never store secrets** in images
3. **Use .dockerignore** to exclude unnecessary files
4. **Pin versions** for reproducible builds

## Common Commands

\`\`\`bash
# Build an image
docker build -t myapp .

# Run a container
docker run -p 3000:3000 myapp

# List containers
docker ps

# Stop a container
docker stop <container_id>
\`\`\`

## Conclusion

Docker simplifies deployment and ensures consistency across environments. Start containerizing your applications today!
    `,
  },
  {
    id: 4,
    title: "TypeScript Tips That Will Make You More Productive",
    excerpt: "Advanced TypeScript patterns and techniques to write better, more maintainable code.",
    date: "2024-10-20",
    readTime: "7 min read",
    tags: ["TypeScript", "JavaScript", "Tips"],
    slug: "typescript-productivity-tips",
    content: `
# TypeScript Tips That Will Make You More Productive

TypeScript is more than just "JavaScript with types." Here are some advanced patterns that will level up your code.

## 1. Utility Types

TypeScript provides powerful utility types:

\`\`\`typescript
// Make all properties optional


// Make all properties required


// Pick specific properties


// Omit specific properties

\`\`\`

## 2. Template Literal Types

Create precise string types:

\`\`\`typescript

// "onClick" | "onFocus" | "onBlur"


\`\`\`

## 3. Discriminated Unions

Perfect for handling different states:

\`\`\`typescript
type Result<T> = 
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error }
  | { status: 'loading' };

function handleResult<T>(result: Result<T>) {
  switch (result.status) {
    case 'success':
      return result.data; // TypeScript knows data exists
    case 'error':
      throw result.error;
    case 'loading':
      return null;
  }
}
\`\`\`

## 4. Const Assertions

Lock down your objects:

\`\`\`typescript
const config = {
  endpoint: '/api',
  timeout: 5000,
};

// config.endpoint is now type "/api", not string
\`\`\`

## 5. Generic Constraints

Make generics more specific:

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Davis', age: 28 };
getProperty(user, 'name'); // Works
getProperty(user, 'invalid'); // Error!
\`\`\`

## 6. Satisfies Operator

Validate types while preserving inference:

\`\`\`typescript
const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
} satisfies Record<string, string | number[]>;

// palette.red is still number[], not string | number[]
\`\`\`

## Conclusion

These TypeScript features will help you write safer, more expressive code. Happy typing!
    `,
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}
