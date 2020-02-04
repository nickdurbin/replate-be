
exports.seed = function(knex) {

  return knex("volunteer")
  .then(
    function() {

      return knex("volunteer")
      
      .insert([
      { id: 1, username: 'joseph', password: "abc123", name: "Joseph", phone: "(877)555-1234", },
      { id: 2, username: 'chrisd', password: "abc123", name: "Chris D.", phone: "(877)555-1234", },
      { id: 3, username: 'chrisb', password: "abc123", name: "Chris B.", phone: "(877)555-1234", },
      { id: 4, username: 'chriss', password: "abc123", name: "Chris S.", phone: "(877)555-1234", },
      { id: 5, username: 'sara', password: "abc123", name: "Sara", phone: "(877)555-1234", },
      { id: 6, username: 'mercy', password: "abc123", name: "Mercy", phone: "(877)555-1234", },
      { id: 7, username: 'erin', password: "abc123", name: "Erin", phone: "(877)555-1234", },
      { id: 8, username: 'lambda', password: "abc123", name: "Austen", phone: "(877)555-1234", },
      { id: 9, username: 'hobbits', password: "abc123", name: "Frodo", phone: "(877)555-1234", },
      { id: 10, username: 'wookie', password: "abc123", name: "Chewie", phone: "(877)555-1234", },
      ])
    }
  )
};

