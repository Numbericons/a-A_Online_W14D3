import BenchIndex from './bench_index.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  let statelyBenches = Object.values(state.entities.benches);
  return { benches: statelyBenches };
};

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);