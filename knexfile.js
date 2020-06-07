module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/testdb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
