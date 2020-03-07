import React from 'react'
import './ourphilosophy.css'
import Group5 from '../../Images/Group5.svg'
import Group14 from '../../Images/Group14.svg'
import Group16 from '../../Images/Group16.svg'
import Card from '../../components/Card'

const Ourphilosophy = props =>(
    <div className="ourphilosophy" style={{marginTop: "5%"}}>
        <div className="row">
            <div className="col-md-4">
                <Card  imgsrc={Group5} title="Multiple Intelligence"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
                btn="Explore Multiple Intelligence"
                />
            </div>

            <div className="col-md-4">
                <Card imgsrc={Group14} title="Higher Intelligence"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
                btn="Explore Higher Intelligence"
                />
            </div>
            <div className="col-md-4">
                <Card imgsrc={Group16} title="Book bag Program"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
                btn="Explore Book bag Program"
                />
            </div>
        </div>
    </div>
);

export default Ourphilosophy