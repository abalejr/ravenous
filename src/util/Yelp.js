const apiKey = 'IIfryINT6bAM7XCyQ940Laqd0Np0M8LJvbDcABtwonwF4ge7odFIJx5jRhmQV4mHohOv-VKmnELNa4jVv78Z1ArEY_VPhkDsbrsaaCkZ0d3uhGjwClK_jN53gFqUXHYx',
      Yelp = {
        search: (term, location, sortBy) => {
            return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
              headers: {
                Authorization: `Bearer ${apiKey}`
              }
            }).then( response => {
                return response.json();
            }).then( jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map( business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: `${business.location.address1} ${business.location.address2} ${business.location.address3}`,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0],
                            rating: business.rating,
                            reviewCount: business.review_count
                        };
                    });
                }
            });
        }
};

export default Yelp;