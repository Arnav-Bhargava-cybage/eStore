import React from "react";
import "../TopMenu/_topmenu.scss";
import { connect } from "react-redux";
import { getTopmenu } from "../../Redux/actions/topMenu";

// const menu = ["Home", "Women", "Men", "Kids", "Best Seller"];

const TopMenu = (props) => (
  <>
    <header className="menuHeader">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <nav className="menu">
              <ul>
                {props.state.topMenu.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </>
);

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMenu: dispatch(getTopmenu()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
