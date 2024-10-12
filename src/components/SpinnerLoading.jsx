import { Component } from "react";
import loading from "./Spinner.gif";
export class SpinnerLoading extends Component{
  render(){
    return (
      <div className="text-center">
        <img src={loading} alt="laoding" style={{width:'70px', height:"70px"}} />
        </div>
    );
  }
}
export default SpinnerLoading;