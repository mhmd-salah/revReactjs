import { Component } from "react";
interface Iprops{}
interface Istate {
  products: [];
}

class Products extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount(): void {
    console.log("from did mount")
    fetch("//dummyjson.com/products")
      .then((res) => res.json())
      .then(data=>{
        this.setState({products:data.products})
      });
  }
  componentDidUpdate(): void {
    console.log("component did update")
  }
  componentWillUnmount(): void {
    console.log("unmounted")
  }
  render(){
    return <>
      <h1>products</h1>
      {
        this.state.products.map(({id,title}:{id:number,title:string})=><h3 key={id}>{title}</h3>)
      }
    </>
  }
}
export default Products;