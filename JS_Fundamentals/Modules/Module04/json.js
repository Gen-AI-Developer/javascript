fetch("https://dummyjson.com/posts")
  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => {
    data.posts.forEach((element) => {
      console.log("Title:", element.title);
      console.log("Body:", element.body);
      console.log("ID:", element.id);
    });
  }) // Handle the data
  .catch((error) => console.error("Error fetching data:", error));
