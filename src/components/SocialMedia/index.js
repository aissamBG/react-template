import axios from 'axios';
import React from 'react';
import { Media, Social, Icon, Para, Span, Span2, Div } from './style.js'


class SocialMedia extends React.Component {

    state = {
        social: []
    }

    componentDidMount() {
        axios.get('js/data.json').then(response => this.setState({ social: response.data.social }))
    }
    render() {
        const { social } = this.state;
        const socialList = social.map(media => <Social key={media.id} item={media.id}>
            <Div><Icon className={media.icon}></Icon></Div>
            <Para>
                <Span>{media.title}</Span>
                <Span2>{media.body}</Span2>
            </Para>
        </Social>)
        return (
            <Media>
                {socialList}
            </Media>
        );
    }
}

export default SocialMedia;
