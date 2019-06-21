export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.createMarkerFromBench = this.createMarkerFromBench.bind(this);
        this.updateMarkers = this.updateMarkers.bind(this);
    }

    updateMarkers(benches) {
        // console.log('time to update!')
        let that = this;
        // benches.forEach(function(bench) {

        benches.forEach( (bench) => {
            if (!Object.keys(this.markers).includes(bench.id)) {
                this.createMarkerFromBench(bench);
            }
        })
        // for (let i =0; i<benches.length; i++) {
        //     debugger
        //     if (!Object.keys(this.markers).includes(benches[i].id)) {
        //         this.createMarkerFromBench(benches[i]);
        //     }
        // }
    }

    createMarkerFromBench(bench) {
        const myLatLng = new google.maps.LatLng(bench.lat, bench.lng);
        this.markers[bench.id] = bench;
        
        const marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: bench.description
        });

        marker.setMap(this.map);
    }
}
