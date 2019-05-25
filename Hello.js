import React, { Component } from 'react';

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            error: null, isLoaded: false, items: [], isToggleOn: true
        }
        ;
    }
    handleClick(index, e) {
        let that=this;
        fetch("https://jsonresp.herokuapp.com/datatable/100", {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }
            , body: JSON.stringify( {
                "city": {
                    "_": "image"
                }
                , "sentences": {
                    "_": "sentences"
                }
                , "product": {
                    "_": "product"
                }
            }
            )
        }
        ) .then(res=> res.json()) .then( (result)=> {
            let newState=that.state.items;
            newState[index]=result.data[index];
            that.setState( {
                items: newState
            }
            );
        }
        );
    }
    componentDidMount() {
        fetch("https://jsonresp.herokuapp.com/datatable/100", {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }
            , body: JSON.stringify( {
                "city": {
                    "_": "image"
                }
                , "sentences": {
                    "_": "sentences"
                }
                , "product": {
                    "_": "product"
                }
            }
            )
        }
        ) .then(res=> res.json()) .then( (result)=> {
            this.setState( {
                isLoaded: true, items: result.data
            }
            );
        }
        , (error)=> {
            this.setState( {
                isLoaded: true, error
            }
            );
        }
        )
    }
    render() {
        const {
            error,
            isLoaded,
            items
        }
        =this.state;
        if (error) {
            return <div>Error</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return ( <div class="container-fluid"> <div className="row"> {
                items.map((item, index)=> (<div 
								className="d-flex align-items-stretch col-12 col-sm-6 col-md-4 p-3"> 
								<div className="card shadow p-3 bg-white rounded"> <img src= {
                    item.city
                }
                className="card-img-top" alt= {
                    item.product
                }
                /> <div className="card-body"> <h5 className="card-title"> {
                    item.product
                }
                </h5> <p className="card-text"> {
                    item.sentences
                }
                </p>  
								<a href="#" className="btn btn-primary" onClick= {
                    this.handleClick.bind(this, index)
                }
                >Go somewhere</a>
								
								</div> </div> </div>))
            }
            </div></div>);
        }
    }
}