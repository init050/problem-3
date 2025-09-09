function filterByTerm(inputArr, searchTerm) {
    //your code here...
    if (!inputArr || inputArr.length === 0){
      throw new Error('inputArr cannot be empty')
    }

    if (!searchTerm){
      throw new Error('searchTerm cannot be empty at filterByTerm')
    }

    

    return inputArr.filter(function(item){
      return item.url.toLowerCase().includes(searchTerm.trim().toLowerCase());
    });
    

  }
  console.log(filterByTerm([
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
    { id: 3, url: "https://www.link3.dev" }
], 'link'));
module.exports = filterByTerm;