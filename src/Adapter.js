class Adapter {
  genericFetch(url, options) {
    return fetch(url, options).then(res => res.json())
  }
}

export default Adapter
