class BeerUtility {
    static getBeerByName(beers, beerName) {
        const regExp = new RegExp(beerName, 'i'); 
        return  beers.filter( beer => regExp.test(beer.name))
    }

    static  getBeerByDescriptions(beers, description) {
        const regExp = new RegExp(description, 'i'); 
        return beers.filter( beer => regExp.test(beer.description))
    }
}

export default BeerUtility