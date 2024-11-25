/* eslint-disable */
import React from 'react';
import EventComponent from '../1_synthetic-events/EventComponent';
import CounterAssignment from '../2_counter-assignment/CounterAssignment';
import SiblingCommunication from '../3_sibling-communication/SiblingCommunication';
import ControlledVsUncontrolledComponent from '../4_controlled-vs-uncontrolled/ControlledVsUncontrolledComponent';
import CalculatorAssignment from '../5_calculator-assignment/CalculatorAssignment';
import ListRoot from '../6_list/ListComponent';
import ContextComponent from '../7_context-api/ContextComponent';
import SiblingCommunicationUsingContext from '../8_sibling-communication-context/SiblingCommunication';
import AjaxComponent from '../9_ajax/AjaxComponent';
import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <EventComponent /> */}
                {/* <CounterAssignment /> */}
                {/* <SiblingCommunication /> */}
                {/* <ControlledVsUncontrolledComponent /> */}
                {/* <CalculatorAssignment /> */}
                {/* <ListRoot /> */}
                {/* <ContextComponent /> */}
                {/* <SiblingCommunicationUsingContext /> */}
                <AjaxComponent />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;