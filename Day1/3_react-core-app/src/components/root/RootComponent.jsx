/* eslint-disable */
import React from 'react';
// import ComponentOne from '../2_multi-components/ComponentOne';
// import ComponentTwo from '../2_multi-components/ComponentTwo';

// import ComponentOne from '../3_inline-styles/ComponentOne';
// import ComponentTwo from '../3_inline-styles/ComponentTwo';

// import ComponentOne from '../4_external-css/comp-one/ComponentOne';
// import ComponentTwo from '../4_external-css/comp-two/ComponentTwo';

// import ComponentOne from '../5_css-modules/comp-one/ComponentOne';
// import ComponentTwo from '../5_css-modules/comp-two/ComponentTwo';

import ComponentOne from '../6_styled-components/ComponentOne';
import ComponentTwo from '../6_styled-components/ComponentTwo';
import ComponentWithState from '../7_comp-state/ComponentWithState';
import ComponentWithProps from '../8_comp-props/ComponentWithProps';
import PropTypesRoot from '../9_prop-types/PropTypesRoot';
import ComponentWithBehaviour from '../10_comp-methods/ComponentWithBehaviour';
import ClassVsFunctionalComponents from '../11_class-vs-function/ClassVsFunctionalComponents';
import PureImpureComponent from '../12_pure-vs-impure/PureImpureComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <ComponentOne />
            <ComponentTwo /> */}

            {/* <ComponentWithState /> */}
            {/* <ComponentWithProps id={1} name={"Manish"} address={{ city: "Pune", state: "MH" }}
                display={() => { alert("From Root"); }} /> */}
            {/* <PropTypesRoot /> */}
            {/* <ComponentWithBehaviour /> */}
            {/* <ClassVsFunctionalComponents /> */}
            <PureImpureComponent />
        </div>
    );
};

export default RootComponent;