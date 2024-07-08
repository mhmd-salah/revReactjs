import { Component } from "react";

interface Iprops{
}
interface Istate {
}

class Home extends Component<Iprops, Istate> {


  render() {
    console.log('from render')
    return (
      <>
        <h2>Home Page</h2>
      </>
    );
  }
}
export default Home;