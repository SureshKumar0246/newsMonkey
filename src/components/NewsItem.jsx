import { Component } from "react";

export class NewsItems extends Component {
    render() {
        let {title, description, imageUrl, Url} = this.props;
    return (

        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={imageUrl} style={{height: '190px', width: '285px'}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={Url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );
}}
export default NewsItems;