const apiKey = 'IIfryINT6bAM7XCyQ940Laqd0Np0M8LJvbDcABtwonwF4ge7odFIJx5jRhmQV4mHohOv-VKmnELNa4jVv78Z1ArEY_VPhkDsbrsaaCkZ0d3uhGjwClK_jN53gFqUXHYx',
      Yelp = {
          search: (term, location, sortBy) => {
              return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
          }
};