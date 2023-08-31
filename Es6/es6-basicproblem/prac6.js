const user =
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",//find
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",//find
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",//lat
            lng: "81.1496"
          }
        },
        phone  : "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
        name : "Romaguera-Crona",//find
        catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }
      const findEmail=user.email;
 console.log(findEmail);
      const findCity=user.address.city;
 console.log(findCity);
      const findLat=user.address.geo.lat;
 console.log(findLat);
      const findCompanyName=user.company.name;
 console.log(findCompanyName);