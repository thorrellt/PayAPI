export default [
    {
        name: 'Free Plan',
        description: 'Build and test using our core set of products with up to 100 API requests',
        price: '0.00',
        features: {
            Transaction: true,
            Auth: true,
            Identity: true,
            Investments: false,
            Assests: false,
            Liabilities: false,
            Income: false,
        }
    },
    {
        name: 'Basic Plan',
        description: 'Launch your project with unlimited requests and no contractual minimums',
        price: '249.00',
        features: {
            Transaction: true,
            Auth: true,
            Identity: true,
            Investments: true,
            Assests: true,
            Liabilities: false,
            Income: false,
        }
    },
    {
        name: 'Premium Plan',
        description: 'Get tailored solutions, volume pricing, and dedicated support for your team',
        price: '499.00',
        features: {
            Transaction: true,
            Auth: true,
            Identity: true,
            Investments: true,
            Assests: true,
            Liabilities: true,
            Income: true,
        }
    },
]