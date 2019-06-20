import * as Util from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
// export const FETCH_BENCHES = "FETCH_BENCHES";

export const receiveBenches = (benches) => ({
    type: RECEIVE_BENCHES,
    benches
});

export const fetchBenches = () => (dispatch) => (
    Util.fetchBenches()
    .then( (benches) => dispatch(receiveBenches(benches)))
)