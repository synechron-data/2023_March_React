import React, { Component } from 'react';

class ComponentWithState extends Component {
    state = { name: "Synechron" };
    data = { city: "Pune" };
    
    // constructor() {
    //     super();

    //     // State must be initialized in the constructor
    //     // State must be set to an object or null
    //     // this.state = "Synechron";
    //     this.state = { name: "Synechron" };

    //     this.data = { city: "Pune" };

    //     console.log("Ctor, State: ", this);
    // }

    render() {
        console.log("Render, State: ", this);

        return (
            <>
                <h2 className="text-primary">Component With State</h2>
                <h2 className="text-primary">Hello, {this.state.name}</h2>
                <h2 className="text-primary">City is, {this.data.city}</h2>
            </>
        );
    }
}

export default ComponentWithState;