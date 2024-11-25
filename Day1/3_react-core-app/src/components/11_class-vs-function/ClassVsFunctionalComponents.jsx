import React, {Component} from 'react';

class ComponentOne extends Component {
    render() {
        console.log("State: ", this.state);
        console.log("Props: ", this.props);

        return (
            <div>
                <h2 className='text-info'>Using Class Syntax</h2>
            </div>
        );
    }
}

// Functional / Stateless / Presentational
const ComponentTwo = function() {
    console.log("this: ", this);
    return (
        <div>
            <h2 className='text-info'>Using Function Expression Syntax</h2>
        </div>
    );
}

const ComponentThree = () => {
    console.log("this: ", this);
    return (
        <div>
            <h2 className='text-info'>Using Arrow Function Syntax</h2>
        </div>
    );
}

const ComponentFour = (props) => {
    console.log("props: ", props);
    return (
        <div>
            <h2 className='text-info'>Using Arrow Function Syntax</h2>
        </div>
    );
}

// Object Destructuring
const ComponentFive = ({id, name}) => {
    console.log("Id: ", id);
    console.log("Name: ", name);
    return (
        <div>
            <h2 className='text-info'>Using Arrow Function Syntax</h2>
        </div>
    );
}

// Object Destructuring With Rest
const ComponentSix = ({id, name, ...address}) => {
    console.log("Id: ", id);
    console.log("Name: ", name);
    console.log("Address: ", address);
    return (
        <div>
            <h2 className='text-info'>Using Arrow Function Syntax</h2>
        </div>
    );
}

const ClassVsFunctionalComponents = () => {
    return (
        <div className='text-center'>
            {/* <ComponentOne /> */}
            {/* <ComponentTwo /> */}
            {/* <ComponentThree /> */}
            {/* <ComponentFour id={1} name={'Manish'} city={'Pune'} state={'MH'} /> */}
            {/* <ComponentFive id={1} name={'Manish'} city={'Pune'} state={'MH'} /> */}
            <ComponentSix id={1} name={'Manish'} city={'Pune'} state={'MH'} />
        </div>
    );
};

export default ClassVsFunctionalComponents;