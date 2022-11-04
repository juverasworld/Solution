const nth_most_rate_signature = (list = [], n) => {
    const hash = {}

    // Check if the nth parameter is positive
    if(n <= 0) throw new Error ("No negative number allowed or zero allowed");

    // Get the count of each number
    list.forEach(item => {
        let keys = Object.keys(hash)
        // keys.includes(item.toString()) ? hash[item] += 1 : hash[item] = 1
        if(keys.includes(item.toString())) {
            hash[item] += 1
        }
        else{
           hash[item] = 1 
        }
    })
    // console.log(hash)

    // Get the nth rarest
    const sortedHash = Object.entries(hash).sort((a, b) => a[1] - b[1])

    // Check if the specified nth position is in the hash array
    if(sortedHash.length  < n) throw new Error('Invalid rare position')
    return sortedHash[n - 1][0]
}

const list = [5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 5]

console.log(nth_most_rate_signature(list, 1))
nth_most_rate_signature([1,1,2,3,3,3], 1);

