import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const AssignmentComponent = (props) => {
    console.log("Counter Executed...");

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    let clickCount = useRef(0);
    let isInitialMount = useRef(true);

    const reset = function (e) {
        clickCount.current = 0;
        setCount(0);
        setFlag(false);
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (count !== 0) {
                clickCount.current += 1;
                if (clickCount.current > 9) {
                    setFlag(true);
                }
            }
        }
    }, [count]);

    const _style = flag ? { cursor: 'not-allowed', pointerEvents: 'all' } : {};

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={count} readOnly />
                <button className="btn btn-info" disabled={flag}
                    style={_style}
                    onClick={e => { setCount(count + props.interval); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info" disabled={flag}
                    style={_style}
                    onClick={e => { setCount(count - props.interval); }}>
                    <span className='fs-4'>-</span>
                </button>
                <button className="btn btn-secondary" disabled={!flag}
                    style={!flag ? { cursor: 'not-allowed', pointerEvents: 'all' } : {}}
                    onClick={e => { reset(e); }}>
                    <span className='fs-4'>Reset</span>
                </button>
            </div>
        </>
    );
};

AssignmentComponent.defaultProps = {
    interval: 1
};

AssignmentComponent.propTypes = {
    interval: PropTypes.number
};

export default AssignmentComponent;