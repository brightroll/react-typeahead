/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var classNames = require('classnames');

/**
 * A single option within the TypeaheadSelector
 */
var TypeaheadOption = React.createClass({displayName: "TypeaheadOption",
  propTypes: {
    customClasses: React.PropTypes.object,
    customValue: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onMouseEnter: React.PropTypes.func,
    children: React.PropTypes.string,
    hover: React.PropTypes.bool,
    index: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      customClasses: {},
      onClick: function(event) {
        event.preventDefault();
      }
    };
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    var classes = {};
    classes[this.props.customClasses.hover || "hover"] = !!this.props.hover;
    classes[this.props.customClasses.listItem] = !!this.props.customClasses.listItem;

    if (this.props.customValue) {
      classes[this.props.customClasses.customAdd] = !!this.props.customClasses.customAdd;
    }

    var classList = classNames(classes);

    return (
      React.createElement("li", {className: classList, onClick: this._onClick, onMouseEnter: this._onMouseEnter}, 
        React.createElement("a", {href: "javascript: void 0;", className: this._getClasses(), ref: "anchor"}, 
           this.props.children
        )
      )
    );
  },

  _getClasses: function() {
    var classes = {
      "typeahead-option": true,
    };
    classes[this.props.customClasses.listAnchor] = !!this.props.customClasses.listAnchor;

    return classNames(classes);
  },

  _onClick: function(event) {
    event.preventDefault();
    return this.props.onClick(event);
  },

  _onMouseEnter: function() {
    return this.props.onMouseEnter(this.props.index);
  }
});


module.exports = TypeaheadOption;
