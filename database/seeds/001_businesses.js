
exports.seed = async (knex) => {

  await knex("users").truncate()

  await knex("users").insert([
    { id: 1, username: 'joseph', password: "abc123", business_name: "Dunkin' Donuts", business_address:"5101 Bingle Rd. Houston, TX", phone: "(432)555-1234", email:"dd@texas.com" },
    { id: 2, username: 'sara', password: "abc123", business_name: "Panda Express", business_address: "1818 W. Northern Lights, Anchorage, AK", phone: "(907)555-1234", email: "pe@alaska.com" },
    { id: 3, username: 'chrisd', password: "abc123", business_name: "Olive Garden", business_address: "6000 Sepulveda Blvd, Culver City, CA", phone: "(310)555-1234", email: "og@california.com" },
    { id: 4, username: 'chrisb', password: "abc123", business_name: "Subway", business_address: "8000 E. Quincy Ave., Englewood, CO", phone: "(720)555-1234", email: "subway@colorado.com" },
    { id: 5, username: 'erin', password: "abc123", business_name: "Chipotle", business_address: "400 21st Ave. Nashville, TN", phone: "(615)555-1234", email: "chipotle@tennessee.com" },
    { id: 6, username: 'mercy', password: "abc123", business_name: "Pizza Hut", business_address: "2516 W. North Ave., Chicago, IL", phone: "(773)555-1234", email: "ph@illinois.com" },
    { id: 7, username: 'chriss', password: "abc123", business_name: "Jimmy John's", business_address: "2750 W. Truman, Blvd., Joplin, MO", phone:"(417)555-1234", email: "jj@missouri" },
    { id: 8, username: 'don', password: "abc123", business_name: "Panera", business_address: "1941 S. Reed Rd., Kokomo, IN", phone: "(765)555-1234", email: "panera@indiana.com" },
    { id: 9, username: 'lambda', password: "abc123", business_name: "Einstein Bros. Bagel", business_address: "5249 Hazel Ave. Fair Oaks, CA", phone: "(916)555-1234", email: "ebb@california.com" },
    { id: 10, username: 'rainbow', password: "abc123", business_name: "MGM Grand Casino", business_address: "3799 S. Las Vegas, NV", phone: "(702)555-1234" , email: "mgmc@nevada.com" },

  ]);
};
