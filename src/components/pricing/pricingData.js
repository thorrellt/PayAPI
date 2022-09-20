export default [
    {
        name: 'Free Plan',
        description: 'Build and test using our core set of products with up to 100 API requests',
        price: '0.00',
        features: {
            transaction: true,
            auth: true,
            identity: true,
            investments: false,
            assets: false,
            liabilities: false,
            income: false,
        }
    },
    {
        name: 'Basic Plan',
        description: 'Launch your project with unlimited requests and no contractual minimums',
        price: '249.00',
        features: {
            transaction: true,
            auth: true,
            identity: true,
            investments: true,
            assets: true,
            liabilities: false,
            income: false,
        }
    },
    {
        name: 'Premium Plan',
        description: 'Get tailored solutions, volume pricing, and dedicated support for your team',
        price: '499.00',
        features: {
            transaction: true,
            auth: true,
            identity: true,
            investments: true,
            assets: true,
            liabilities: true,
            income: true,
        }
    },
]