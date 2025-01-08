const { app } = require('@azure/functions');

app.http('my-function', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return { body: `Hello, from the API!` };
    }
});