import React, { useState } from 'react';
import LabForm from './LabForm';
import ServiceForm from './ServiceForm';
import ECForm from './ECForm';

const CreateTicket = () => {
    const [selectedTab, setSelectedTab] = useState('lab');

    const handleTabChange = (tabName) => {
        setSelectedTab(tabName);
    };

    return (
        <div className="submit-issue pt-4"> {/* Add padding top here */}
            <div role="tablist" className="tabs tabs-boxed" style={{ backgroundColor: '#FFFFFF' }}>
                <a
                    role="tab"
                    className={`tab ${selectedTab === 'lab' ? 'tab-active' : ''}`}
                    style={{
                        backgroundColor: selectedTab === 'lab' ? '#0D3273' : 'transparent',
                        color: selectedTab === 'lab' ? '#ffffff' : '#0D3273',

                    }}
                    onClick={() => handleTabChange('lab')}
                >
                    <span>Report Lab Issue</span>
                </a>

                <a
                    role="tab"
                    className={`tab ${selectedTab === 'service' ? 'tab-active' : ''}`}
                    style={{
                        backgroundColor: selectedTab === 'service' ? '#0D3273' : 'transparent',
                        color: selectedTab === 'service' ? '#ffffff' : '#0D3273',
                    }}
                    onClick={() => handleTabChange('service')}
                >
                    <span>Report Service Issue</span>
                </a>

                <a
                    role="tab"
                    className={`tab ${selectedTab === 'ec' ? 'tab-active' : ''}`}
                    style={{
                        backgroundColor: selectedTab === 'ec' ? '#0D3273' : 'transparent',
                        color: selectedTab === 'ec' ? '#ffffff' : '#0D3273',
                    }}
                    onClick={() => handleTabChange('ec')}
                >
                    <span>Submit EC Claim</span>
                </a>
            </div>

            {/* Render the selected form based on the selectedTab state */}
            {selectedTab === 'lab' && <LabForm />}
            {selectedTab === 'service' && <ServiceForm />}
            {selectedTab === 'ec' && <ECForm />}
        </div>
    );
};

export default CreateTicket;
