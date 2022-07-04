const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase)=>  {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /** @type {import('next').NextConfig} */
    return {
      reactStrictMode: true,
      env: {
        firebaseBaseURL: 'https://next-js-course-2a6e7-default-rtdb.firebaseio.com'
      }
    }
  }
  return {
    reactStrictMode: true,
    env: {
      firebaseBaseURL: 'https://next-js-course-2a6e7-default-rtdb.firebaseio.com'
    }
  }
}

