export const fetchBenches = filters => {
    debugger
    return $.ajax({
        url: '/api/benches',
        method: 'GET',
        data: {filters: filters},
        error: (err) => console.log(err)
     }) 
}

export const newBench = (bench) => {
    return $.ajax({
        url: '/api/benches',
        method: 'POST',
        data: { bench }
     }) 
}