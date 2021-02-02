import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

const Counter = ({ count, inc, dec, res }) => {
  return (
    <div className="jumbotron">
      <div class="count">
        <h3 className="count-value">{count}</h3>
      </div>
      <div class="btns">
        <button onClick={inc} className="btn btn-plus">
          <img src="./assets/Plus.svg" alt="inc" />
        </button>
        <button onClick={dec} className="btn btn-minus">
          <img src="./assets/Minus.svg" alt="dec" />
        </button>
        <button onClick={res} className="btn btn-reset">
          <img src="./assets/Reset.svg" alt="res" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
