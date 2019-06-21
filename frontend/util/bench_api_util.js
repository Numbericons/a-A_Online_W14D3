export const fetchBenches = () => {
    return $.ajax({
        url: '/api/benches',
        method: 'GET',
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