export const fetchBenches = (benches) => {
    return $.ajax({
        url: '/api/benches',
        method: 'GET',
        data: { benches },
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