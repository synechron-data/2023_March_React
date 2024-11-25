import React, { Component, useState, useEffect } from 'react';

// const ClockHOC = (InputComponent) => class extends Component {
//     static get displayName() {
//         return "ClockHOC";
//     }

//     constructor(props) {
//         super(props);
//         this.state = { currentTime: new Date().toLocaleTimeString() };
//     }

//     render() {
//         return (
//             <>
//                 <div className="fs-4 text-end text-primary">
//                     {this.state.currentTime}
//                 </div>
//                 <InputComponent />
//             </>
//         );
//     }

//     componentDidMount() {
//         this.clock_interval = setInterval(() => {
//             this.setState({ currentTime: new Date().toLocaleTimeString() });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.clock_interval);
//     }
// }

const ClockHOC = (InputComponent) => {
    const Wrapper = (props) => {
        const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

        useEffect(() => {
            let clock_interval = setInterval(() => {
                setCurrentTime(new Date().toLocaleTimeString());
            }, 1000);
            return () => {
                clearInterval(clock_interval);
            };
        }, []);

        return (
            <>
                <div className="fs-4 text-end text-primary">
                    {currentTime}
                </div>
                <InputComponent />
            </>
        );
    }

    Wrapper.displayName = "ClockHOC";

    return Wrapper;
};

export default ClockHOC;