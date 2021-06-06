import React from 'react';
import DummyElement from './DummyElement';

const Header = () => {
    return (
        <div className='ui fixed menu'>
            <div className='ui container center'>
                <h2> Myntraa </h2>
                <div style={{ display: 'flex' }}>
                    {/* <DummyElement /> */}
                </div>
            </div>

        </div>
    );
}

export default Header;