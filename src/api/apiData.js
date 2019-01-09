import axios from 'axios'

class ApiData {
  getData(parksUrl, [...filterUrls], cb) {
    let results = {}
    axios.get(parksUrl.url)
      .then(resParks => {
        filterUrls.map(data => {
          axios.get(data.url)
            .then(resFilter => {
              this.filterData(resParks.data.data,
                resFilter.data.data,
                data.type)
            })
            .then(res => {
              cb(resParks.data.data)
            })
            .catch(err => {
              console.log(err)
            })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  filterData(parks, filter, element){
    parks.map(data1 => {
      data1[element] = []
      const filtered = filter
        .filter(data2 => data1.parkCode === data2.parkCode)
      data1[element].push(filtered)
    })
    return parks
  }
}

export default ApiData