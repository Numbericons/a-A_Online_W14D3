import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
      super(props);
    //   this.state = {
    //     benches: {}
    //   }
  }
  componentDidMount() {
    // this.props.fetchBenches();
  }

  render() {
    return (
        <div>
            <ul>
                {this.props.benches.map((bench) => {
                return <BenchIndexItem key={bench.id} bench={bench} />
              })}
            </ul>
        </div>
    )
  }
};

export default BenchIndex;