# Invoice Generator API

> Invoice Generator is a simple tool for generating invoices. It returns a PDF of the generated invoice.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com)
[![Method](https://img.shields.io/badge/Method-POST-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/invoicegenerator)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.InvoiceGenerator)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-invoicegenerator/)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callInvoiceGeneratorAPI() {
    try {
        const requestBody = {
    "invoiceNumber": "INV000001",
    "date": "2025-02-01",
    "dueDate": "2025-11-30",
    "from": {
        "from_name": "John Doe",
        "from_street": "123 Elm St",
        "from_city": "Springfield",
        "from_state": "IL",
        "from_zip": "62701"
    },
    "to": {
        "to_name": "Jane Smith",
        "to_street": "456 Oak St",
        "to_city": "Springfield",
        "to_state": "IL",
        "to_zip": "62702"
    },
    "job": "Web Development",
    "paymentTerms": "Net 30",
    "discount": 10,
    "salesTax": 37.07,
    "currency": "USD",
    "items": [
        {
            "qty": 2,
            "description": "Web Design Services",
            "unit_price": 500
        },
        {
            "qty": 1,
            "description": "Domain Registration",
            "unit_price": 100
        }
    ]
};

        const response = await fetch('https://api.apiverve.com/v1/invoicegenerator', {
            method: 'POST',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callInvoiceGeneratorAPI();
```

### Using cURL

```bash
curl -X POST "https://api.apiverve.com/v1/invoicegenerator" \
  -H "x-api-key: YOUR_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "param": "value"
  }'
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/invoicegenerator
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/invoicegenerator) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.InvoiceGenerator
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.InvoiceGenerator) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-invoicegenerator
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-invoicegenerator/) | [**Package Code →**](./python/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:invoicegenerator-api:1.0.0'
```

[**Package Code →**](./android/)

---

## Features

✅ **Multi-platform support** - Use the same API across Node.js, .NET, Python, Android, and browsers
✅ **Simple authentication** - Just add your API key in the request header
✅ **Comprehensive documentation** - Full examples and API reference available
✅ **Production-ready** - Used by developers worldwide

---

## Documentation

📚 **Full API Documentation:** [https://docs.apiverve.com/ref/invoicegenerator](https://docs.apiverve.com/ref/invoicegenerator)

---

## Use Cases

Common use cases for the Invoice Generator API:

- ✅ Integration into web applications
- ✅ Mobile app development
- ✅ Data analysis and reporting
- ✅ Automation workflows
- ✅ Microservices architecture

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format
All responses are JSON with this structure:
```json
{
  "status": "ok",
  "data": { ... }
}
```

---

## Support & Community

- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2025 APIVerve. All rights reserved.
