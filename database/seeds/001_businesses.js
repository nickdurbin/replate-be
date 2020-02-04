
exports.seed = function(knex) {

  return knex("business")
    .then(
      function() {

        return knex("business")
        
        .insert([
          { id: 1, username: 'joseph', password: "abc123", name: "Dunkin' Donuts", address: "5101 Bingle Rd. Houston, TX", phone: "(432)555-1234", email: "dd@texas.com" },
          { id: 2, username: 'sara', password: "abc123", name: "Panda Express", address: "1818 W. Northern Lights, Anchorage, AK", phone: "(907)555-1234", email: "pe@alaska.com" },
          { id: 3, username: 'chrisd', password: "abc123", name: "Olive Garden", address: "6000 Sepulveda Blvd, Culver City, CA", phone: "(310)555-1234", email: "og@california.com" },
          { id: 4, username: 'chrisb', password: "abc123", name: "Subway", address: "8000 E. Quincy Ave., Englewood, CO", phone: "(720)555-1234", email: "subway@colorado.com" },
          { id: 5, username: 'erin', password: "abc123", name: "Chipotle", address: "400 21st Ave. Nashville, TN", phone: "(615)555-1234", email: "chipotle@tennessee.com" },
          { id: 6, username: 'mercy', password: "abc123", name: "Pizza Hut", address: "2516 W. North Ave., Chicago, IL", phone: "(773)555-1234", email: "ph@illinois.com" },
          { id: 7, username: 'chriss', password: "abc123", name: "Jimmy John's", address: "2750 W. Truman, Blvd., Joplin, MO", phone: "(417)555-1234", email: "jj@missouri" },
          { id: 8, username: 'don', password: "abc123", name: "Panera", address: "1941 S. Reed Rd., Kokomo, IN", phone: "(765)555-1234", email: "panera@indiana.com" },
          { id: 9, username: 'lambda', password: "abc123", name: "Einstein Bros. Bagel", address: "5249 Hazel Ave. Fair Oaks, CA", phone: "(916)555-1234", email: "ebb@california.com" },
          { id: 10, username: 'rainbow', password: "abc123", name: "MGM Grand Casino", address: "3799 S. Las Vegas, NV", phone: "(702)555-1234", email: "mgmc@nevada.com" },

        ])
      }
    )
  }