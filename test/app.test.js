
const { test } = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('Homepage should return welcome message', async () => {
    const server = app.listen(0);

    try {
        const response = await fetch(
            `http://localhost:${server.address().port}/`
        );

        const body = await response.text();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(
            body,
            'Hello! Welcome to my CI/CD Pipeline Demo.'
        );
    } finally {
        await new Promise(resolve => server.close(resolve));
    }
});

test('Health endpoint should return healthy status', async () => {
    const server = app.listen(0);

    try {
        const response = await fetch(
            `http://localhost:${server.address().port}/health`
        );

        const body = await response.json();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(body.status, 'healthy');
    } finally {
        await new Promise(resolve => server.close(resolve));
    }
});
