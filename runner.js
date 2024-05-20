const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjlhYjkzYzQ3LWE3MjItNGMwMS1iODA2LTcwMGMyNzYzODU3OC0xNzE2MjI5MTM4NzIyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYjBmOGMxMTYtNDg0ZS00MmY0LTk0YTQtOThmNWQyYzI0NjY0IiwidHlwZSI6InQifQ.CKA-ScSu-MPGsk5AUahzZ4_0cz6asArSn1GUk0lERzQ'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
