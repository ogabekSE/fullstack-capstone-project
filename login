curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"email":"test@example.com"}'

{"token":"fake-jwt-token","user":{"email":"test@example.com"}}