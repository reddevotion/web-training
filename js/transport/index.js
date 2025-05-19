class HTTPTransport {
  request(method, url, options = {}) {
    const { timeout = 5000, data = null, headers = {} } = options;
    

     return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      const finalUrl = new URL(url) 
      if (method === 'GET' && data && typeof data === 'object') {
        finalUrl.search = new URLSearchParams(data).toString();
      }

      xhr.open(method, finalUrl);
      xhr.timeout = timeout
      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr);
        } else {
          reject(new Error(`HTTP error: ${xhr.status}`));
        }
        };

        xhr.ontimeout = function() {
            reject(new Error(`Request timed out after ${timeout}ms`));
        }

    if (method === 'GET' || !data) {
        xhr.send();
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }
     })

  
  }

  get(url, options) {
    return this.request('GET', url, options);
  }

  post(url, options) {
    return this.request('POST', url, options);
  }

  put(url, options) {
    return this.request('PUT', url, options);
  }

  delete(url, options) {
    return this.request('DELETE', url, options);
  }
}

const transport = new HTTPTransport();
const params = document.getElementById('params')
const headers = document.getElementById('headers')
const timeout = document.getElementById('timeout')
transport.get('https://dummyjson.com/products', {
  timeout: 5000, 
  data: {
    limit: "5", 
    skip: "0"
  }
})
.then(data => { 
  params.innerHTML = data.response
})
.catch(error => { 
  params.innerHTML = error.message 
})
transport.get('https://dummyjson.com/products', {
  timeout: 1, // 1ms timeout 
  data: {
    limit: "5", 
    skip: "0"
  }
})
.then(data => { 
  timeout.innerHTML = data.response
})
.catch(error => { 
  timeout.innerHTML = error.message 
})
transport.get('https://httpbin.org/headers', {
  timeout: 5000,
  headers: {
    'X-Custom-Header': 'my-value',
    'Authorization': 'Bearer 12345'
  }
})
.then(data => {
    resHeaders = JSON.parse(data.response).headers
   headers.innerHTML = resHeaders.Authorization + " ; " + resHeaders['X-Custom-Header'];
})
.catch(error => { 
  headers.innerHTML = error.message 
});