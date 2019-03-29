import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  let tabClass = "";

  if (props.tab === props.selectedTab) {
    tabClass = "tab active-tab";
  }
  else {
    tabClass = 'tab';
  }

  return (
    <div
      className={tabClass}
      onClick={() => props.selectedTabHandler(props.tab)}
      tab={props.tab}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectedTabHandler: PropTypes.func
}

export default Tab;
