/* eslint-disable */
import React from 'react';
import CrudAssignment from '../1_crud-assignment/CrudAssignment';
import StateHookDemo from '../2_hooks/1_StateHookDemo';
import EffectHookDemo from '../2_hooks/2_EffectHookDemo';
import EffectHookAjax from '../2_hooks/3_EffectHookAjax';
import AssignmentComponent from '../2_hooks/4_Assignment';
import ReducerHookDemo from '../2_hooks/5_ReducerHookDemo';
import ContextHookDemo from '../2_hooks/6_ContextHookDemo';
import CustomHookDemo from '../2_hooks/7_CustomHook';
import CallbackHookDemo from '../2_hooks/8_CallbackHookDemo';
import CounterRoot from '../2_hooks/counter-context/CounterRoot';
import CounterRootTwo from '../2_hooks/counter-context-2/CounterRoot';
import ErrorHandler from '../common/ErrorHandler';
import HOCDemoComponentOne from '../3_hoc/HOCDemoComponentOne';
import HOCDemoComponentTwo from '../3_hoc/HOCDemoComponentTwo';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <CrudAssignment /> */}
                {/* <StateHookDemo /> */}
                {/* <EffectHookDemo /> */}
                {/* <EffectHookAjax /> */}
                {/* <AssignmentComponent interval={10}/> */}
                {/* <ReducerHookDemo /> */}
                {/* <ContextHookDemo /> */}
                {/* <CustomHookDemo /> */}
                {/* <CounterRoot /> */}
                {/* <CounterRootTwo /> */}
                {/* <CallbackHookDemo /> */}

                {/* <HOCDemoComponentOne data={"Hello from Root Component"} />
                <HOCDemoComponentTwo data={"Hello from Root Component"} /> */}

                <HOCDemoComponentOne />
                <HOCDemoComponentTwo />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;