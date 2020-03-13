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
                <Card  imgsrc={Group5} title="Montessori" title2="Joy of life"
                text="Montessori is an international
                curriculum that is child-centric,
                hands-on, based on scientific observation of the child's learning process."
                btn="Explore Montessori"
                />
            </div>

            <div className="col-md-4">
                <Card imgsrc={Group14} title="Multiple Intelligence" title2="Discover your unirueness"
                text="During 2 to 7 years of gae, every child is exposed to a broad list of activities to identify their dominant intelligence."
                btn="Explore Multiple Intelligence"
                />
            </div>
            <div className="col-md-4">
                <Card imgsrc={Group16} title="Higher Intelligence" title2="Celbrate your uniqueness"
                text="Each child is identified with one or more higher intelligence and spends long periods of time on a regular basis to nurture and strengthen them."
                btn="Explore Higher Intelligence"
                />
            </div>
        </div>
    </div>
);

export default Ourphilosophy