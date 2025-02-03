Invoice Generator API
============

Invoice Generator is a simple tool for generating invoices. It returns a PDF of the generated invoice.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [Invoice Generator API](https://apiverve.com/marketplace/api/invoicegenerator)

---

## Installation
	npm install @apiverve/invoicegenerator --save

---

## Configuration

Before using the invoicegenerator API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Usage

The Invoice Generator API documentation is found here: [https://docs.apiverve.com/api/invoicegenerator](https://docs.apiverve.com/api/invoicegenerator).  
You can find parameters, example responses, and status codes documented here.

### Setup

```
var invoicegeneratorAPI = require('@apiverve/invoicegenerator');
var api = new invoicegeneratorAPI({
    api_key: [YOUR_API_KEY],
    secure: true //(Optional, defaults to true)
});
```

---


### Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

```
var query = {
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
      "unit_price": 500.00
    },
    {
      "qty": 1,
      "description": "Domain Registration",
      "unit_price": 100.00
    }
  ]
};
```

###### Simple Request (using Callback)

```
api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

###### Example Response

```
{
  "status": "ok",
  "error": null,
  "data": {
    "pdfName": "6b118488-0663-478f-aa45-86ba3feaeaa9.pdf",
    "expires": 1738776282359,
    "downloadURL": "https://storage.googleapis.com/apiverve-helpers.appspot.com/htmltopdf/6b118488-0663-478f-aa45-86ba3feaeaa9.pdf?GoogleAccessId=1089020767582-compute%40developer.gserviceaccount.com&Expires=1738776282&Signature=OOciV8On8ICsCjOu40Q88r%2FmyztJsSQMtgJj%2BgU1izmsFiMhoj78191%2FJw3iMHg5xT1OU%2FqHPyEjdjOlqfZOTAUD5nhnwcnUjcityhaYjl%2BWuacCvNYyeQZ%2F4InMVVzsYBjljnE1Z%2BQ%2BsRZJeCobwvB9owtovDMpTJ89l%2BM69XaoGJSRyte0YbPK4tWX5F2v4yeSso0m1S%2FGHdjZgKDX7fbNBSuBVC3S%2FFwbB1w61lglLCus0A9P0dutlfYc1pvcm%2FkOE%2B5c7TjztqgqAGzGcM6OaWXMUK8r5KGIj8DY6IBCcqf9qgCmo4%2BjOP7gyPEDbpvPunN2vubHVYGa6Ui5jQ%3D%3D"
  },
  "code": 200
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2024 APIVerve, and Evlar LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.