import React, { Component } from 'react';

export default class Counter extends Component {

    componentDidUpdate(prevProps, prevState){
        console.log ("prevProps", prevProps);
        console.log ("prevState", prevState);

    }

    // state = {
    //     value : this.props.counter.value,
    //     tags : [],
    //     imageUrl : "https://picsum.photos/200"
    // }

    renderTags () {
        if (this.state.tags.length===0) return <p>There are no tags</p>
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    // handleIncrement = product => {
    //     // console.log('button clicked', this)
    //     console.log (product)
    //     this.setState({value: this.state.value + 1})
    // };

    // dohandleIncrement = () =>{
    //     this.handleIncrement({id:1})
    // }

    render() { 
        // let classes = this.getClassBadge();
        // React.createElement('div')
        // console.log(this.props);
        return (

            <React.Fragment>
                <div>
                    
                </div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span style={{fontSize:20}} className = {this.getClassBadge()}>{this.formatCount()}</span>

                <button onClick = { () => this.props.onIncrement(this.props.counter)} 
                className = "btn btn-secondary btn-sm">Increment
                </button>

                <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-warning btn-sm m-2">Delete</button>
                <ul>
                    {/* {this.state.tags.length===0 && "please create e new tags"} */}
                    {/* diatas brrti statemn 0 nilai true, statmen */}
                    {/* {this.renderTags()} */}
                    {/* {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} */}
                    {/* map merupakan metode map() untuk membuat list pada javascript  */}
                </ul>
            </React.Fragment>
        );
    }

    getClassBadge() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "danger" : "primary";
        //jika countnya 0 maka merah kalau bukan nol maka biru
        return classes;
    }

    formatCount (){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}