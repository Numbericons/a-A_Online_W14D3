export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
import * as Util from '../util/bench_api_util';

export const receiveBenches = (benches) => ({
    type: RECEIVE_BENCHES,
    benches
});

export const fetchBenches = () => (dispatch) => (
    Util.fetchBenches()
    .then( (benches) => dispatch(receiveBenches(benches)))
)