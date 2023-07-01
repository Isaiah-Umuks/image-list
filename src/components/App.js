import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";
import Card from "./Card";

//import "./Style.css";

//refracturing the Arow function to class-bass component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(entry) {
    const response = await axios.get(
      `https://pixabay.com/api/?key=26721995-5755163fe91699b6c395f9b0e&q=${entry}&image_type=photo`
    );
    console.log(response.data.hits);

    this.setState({ images: response.data.hits });
  }

  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: "10px", backgroundColor: "black" }}
      >
        <div><br></br>
          <h1 style={{ color: "white", textAlign: "center " }}>Simple Fetch with Axios</h1>
          <p style={{ color: "yellow", textAlign: "center "}}>& Sematic-ui CSS Library</p>
        </div>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <div className="imageContainer">
        <div style={{ color: "white", textAlign: "center "}}>Search Result</div>
          <ImageList images={this.state.images} />
          <Card />
          <br>
          </br>
        </div>
        
      </div>
    );
  }
}

export default App;
