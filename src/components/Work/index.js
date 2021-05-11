import React, { Component } from 'react';
import { WorkSection, WorkTitle, WorkTitleSpan, Part, PartIcon, PartTitle, PartLine, PartDesc } from './style.js'
import axios from 'axios'
import Footer from '../Footer'

class Work extends Component {

    state = {
        works: []
    }

    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({
                works: res.data.works
            })
        });
    }

    render() {
        const { works } = this.state;
        const arrayWork = works.map(work => {
            return (<Part key={work.id} first={work.id}>
                <PartIcon className={work.icon_name}></PartIcon>
                <PartTitle>{work.title}</PartTitle>
                <PartLine></PartLine>
                <PartDesc>{work.body}</PartDesc>
            </Part>)
        });
        return (
            <React.Fragment>
                <WorkSection>
                    <div className="container">
                        <WorkTitle><WorkTitleSpan>My</WorkTitleSpan> Work</WorkTitle>
                        {arrayWork}
                    </div>
                </WorkSection>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Work;
