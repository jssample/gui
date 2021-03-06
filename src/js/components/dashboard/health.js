import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Link } from 'react-router';
var createReactClass = require('create-react-class');
import FontIcon from 'material-ui/FontIcon';
var Loader = require('../common/loader');

var Health = createReactClass({
  _clickHandle: function(route) {
    this.props.clickHandle(route);
  },
  render: function() {
    var down = encodeURIComponent("status=not connected");
    var up = encodeURIComponent("status=connected");
    return (
      <div className="health margin-bottom-large">
        <div className="dashboard-header">
          <h2>Device heartbeats</h2>
        </div>

        <div className={this.props.health.total ? null : "hidden" }>
          <div className={this.props.health.down ? "health-panel red" : "hidden" }>
            <div className="health-icon down"></div>
            <div className="health-text">
              <span className="number">{this.props.health.down}</span>
              <span>Not connected</span>
            </div>
            <Link to={`/devices/${down}`} className="float-right">View devices</Link>
          </div>
          <div style={{padding: "0 4%"}} className={this.props.health.down ? "hidden" : "margin-bottom margin-top" }>
            <div className="health-icon healthy">
              <img src="assets/img/check.png" />
            </div>
            <div className="health-text">
              <span>All {this.props.health.total} of your devices are reporting</span>
            </div>
        
          </div>
          <div className="health-panel green">
            <div className="health-icon down"></div>
            <div className="health-text">
              <span className="number">{this.props.health.up}</span>
              <span>Connected</span>
            </div>
            <Link to={`/devices/${up}`} className={this.props.health.up ? "float-right" : "hidden" }>View devices</Link>
          </div>
          <div className="clear">
          </div>
        </div>

        <Loader show={this.props.loading} fade={true} />

        <div className={(this.props.health.total || this.props.loading) ? "hidden" : "dashboard-placeholder" }>
          <p>Information about connected devices will appear here</p>
          <img src="assets/img/connected.png" alt="connected" />
        </div>
      </div>
    );
  }
});


Health.contextTypes = {
  router: PropTypes.object
};

module.exports = Health;