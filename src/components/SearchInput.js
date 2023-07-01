import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { entry: "" };

    //this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
    //to refernce the props meaning whenever a user submit a form we are going to run onSearchSubmit,
    //prevent default behaviour and ooking at the function object and invoke the action
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search for images...."
                onChange={(event) =>
                  this.setState({ entry: event.target.value })
                }
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;

// onChange is a callback or property name function eventhandler like onSubmit, onClick
// onInputChange (name) is a community convention. Usually it begins with on-name of callback element-the event that we are watching for!
// some people uses handleInputChange in the place of the onInputChangefor handling the input being changed.
