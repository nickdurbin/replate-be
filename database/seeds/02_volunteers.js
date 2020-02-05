exports.seed = async function (knex) {
  await knex('volunteer')
          .insert([
            {
              username: 'joseph',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Joseph",
              phone: 8775551234,
            },
            {
              username: 'chrisd',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Chris D.",
              phone: 8775551234,
            },
            {
              username: 'chrisb',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Chris B.",
              phone: 8775551234,
            },
            {
              username: 'chriss',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Chris S.",
              phone: 8775551234,
            },
            {
              username: 'sara',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Sara",
              phone: 8775551234,
            },
            {
              username: 'mercy',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Mercy",
              phone: 8775551234,
            },
            {
              username: 'erin',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Erin",
              phone: 8775551234,
            },
            {
              username: 'lambda',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Austen",
              phone: 8775551234,
            },
            {
              username: 'hobbits',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Frodo",
              phone: 8775551234,
            },
            {
              username: 'wookie',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Chewie",
              phone: 8775551234,
            },
          ])
      }