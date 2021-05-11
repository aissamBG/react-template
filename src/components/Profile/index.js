import React, { Component } from 'react';
import { ProfileSkills, ProfileSection, SkillsSection, ProfileTitle, SkillsTitle, ProfileTitleSpan, SkillsTitleSpan, ProfileList, ProfileItem, ItemSpan, ItemWeb, SkillsDesc, Bar, SkillsName, Percent1, Percent2, Percent3, Parent, Child1, Child2, Child3 } from './style.js'
import Footer from '../Footer'

class Profile extends Component {

    render() {

        return (
            <>
                <ProfileSkills>
                    <div class="container">
                        <ProfileSection>
                            <ProfileTitle><ProfileTitleSpan>My</ProfileTitleSpan> Profile</ProfileTitle>
                            <ProfileList>
                                <ProfileItem>
                                    <ItemSpan>Name</ItemSpan>
                            Aissam Bagari
                        </ProfileItem>
                                <ProfileItem>
                                    <ItemSpan>Birthday</ItemSpan>
                            20/04/1996
                        </ProfileItem>
                                <ProfileItem>
                                    <ItemSpan>Phone</ItemSpan>
                            +212 0622863528
                        </ProfileItem>
                                <ProfileItem>
                                    <ItemSpan>Adresse</ItemSpan>
                            Hay el massira el khadra ait ishaq khenifra
                        </ProfileItem>
                                <ProfileItem>
                                    <ItemSpan>Email</ItemSpan>
                            aissambagari2015@hotmail.com
                        </ProfileItem>
                                <ProfileItem>
                                    <ItemSpan>Website</ItemSpan>
                                    <ItemWeb> www.BAGARI.com</ItemWeb>
                                </ProfileItem>
                            </ProfileList>
                        </ProfileSection>
                        <SkillsSection>
                            <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                            <SkillsDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto nostrum nulla
                            aliquid, rem
                        corrupti?</SkillsDesc>
                            <Bar>
                                <SkillsName>Bootstrap</SkillsName>
                                <Percent1>100%</Percent1>
                                <Parent>
                                    <Child1></Child1>
                                </Parent>
                            </Bar>

                            <Bar>
                                <SkillsName>Photoshop</SkillsName>
                                <Percent2>70%</Percent2>
                                <Parent>
                                    <Child2></Child2>
                                </Parent>
                            </Bar>

                            <Bar>
                                <SkillsName>Wordpress</SkillsName>
                                <Percent3>60%</Percent3>
                                <Parent>
                                    <Child3></Child3>
                                </Parent>
                            </Bar>
                        </SkillsSection>
                    </div>
                </ProfileSkills>
                <Footer />
            </>
        );
    }
}

export default Profile;
