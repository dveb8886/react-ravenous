const apiKey = 'JV6nC-pSikDzVPqyHZwRSQx9BIHUBrnmjlStjY4uih9YOWwpRSvQCTeEPEgaWP_UDUSuXx_xyHNMBEK9XMqXVwIIf4AsAqEBqrMZVFWcJ4wig2YOTh8qrkyrvmedZHYx'
const baseUrl = "https://api.yelp.com/v3/"
const corsProxy = 'https://cors-anywhere.herokuapp.com/'

async function retrieveBusinessListings(search, location, sort){
  const businessUrl = "businesses/search"
  const queryParams = `?location=${location}&term=${search}&sort_by=${sort}&limit=20`
  const urlToFetch = corsProxy + baseUrl + businessUrl + queryParams
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };
  try {
    const response = await fetch(urlToFetch, options)
    const responseJson = await response.json()
    console.log(responseJson)
    return responseJson.businesses
  } catch (error){
    console.log(error)
    return []
  }
}

export default retrieveBusinessListings;