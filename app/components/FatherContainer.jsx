import React from "react";

class FatherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.state = { isVisible: true };
  }

  toggleButton() {
    this.setState(state => ({ isVisible: !state.isVisible }));
  }

  render() {
    console.log("Father Component");
    return (
      <div>
        <h2>Father Componet Rendered from Main Component</h2>
        <button onClick={this.toggleButton}>Show or Hide component</button>
        {this.state.isVisible ? <h3>Father Component</h3> : null}
        {/* Rendering a new Component passed via props */}
        <hr />
        {this.props.componentPassedViaProps}
      </div>
    );
  }
}

/**
 * We can Default props only when they came with undefined NOT as empy string, We use -defaultProps- method
 *
 * DragSection.defaultProps = {
 *  dragTitle: 'y jalese compa'
 * };
 *
 */

export { FatherContainer };
