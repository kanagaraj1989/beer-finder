class PunkAPIService {
  static getRandomBeer(url) {
    return fetch(url)
      .then(res => res.json())
      .then(beers => {
        var response = {}
        const beer = (typeof beers !== 'undefined' && beers != null) 
          ? beers.find( beer => typeof beer.name === 'string' && beer.name.length > 0 
                                  && typeof beer.description === 'string' && beer.description.length > 0
                                  && typeof beer.image_url === 'string' && beer.image_url.length > 0) 
          : null

        if(typeof beer !== 'undefined' && beer !== null)
        {
          const randomBeer = { name: beer.name,
                                description: beer.description,
                                image: beer.image_url }
          response = {randomBeer, error: null}
        
        } else {
          response = {randomBeer: {}, error: 'No Beers Available'}
        }
        
        return response
      })
  }

  static GetAllBeer(url) {
    return fetch(url)
      .then(res => res.json())
      .then(beers => (
        (beers != null) 
          ? beers.filter( beer => typeof beer.name === 'string' && beer.name.length > 0 
                                  && typeof beer.description === 'string' && beer.description.length > 0
                                  && typeof beer.image_url === 'string' && beer.image_url.length > 0
                        )
                        .map(beer => (
                              {
                                 id: beer.id,
                                 name: beer.name,
                                 description: beer.description,
                                 image: beer.image_url
                              }
                        ))
          : []
      ))
  }

  static getBeerByName(beers, beerName) {
    return beers.filter( beer => beer.name === beerName)
  }
}

export default PunkAPIService