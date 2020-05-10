import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { incrementAction, decreaseAction, fetchPost } from "./actions";

class Page extends PureComponent {
  render() {
    console.log(this.props);
    const {
      value,
      data,
      loading,
      incrementAction,
      decreaseAction,
      fetchPost
    } = this.props;

    return (
      <div>
        <h1>{value}</h1>
        <button onClick={incrementAction}>increment</button>
        <button onClick={decreaseAction}>decrease</button>
        <button onClick={fetchPost}>fetchPost</button>
        <div>
          {loading
            ? "Loading......"
            : data.map((elem, index) => {
                return (
                  <div key={index}>
                    <div>{elem.id}</div>
                    <div>{elem.title}</div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.addReducer.value,
    data: state.fetchreducer.json,
    loading: state.fetchreducer.loading
  };
};

const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction()),
  fetchPost: () => dispatch(fetchPost())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
