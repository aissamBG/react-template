import styled from 'styled-components'

export const ProfileSkills = styled.div`
margin:20px 0 100px;
    overflow:hidden;
`;
export const ProfileSection = styled.div`
 width: 50%;
    float: left;
`;
export const SkillsSection = styled.div`
width: 50%;
    float: left;
`;
export const ProfileTitle = styled.h2`
font-size: 60px;
    margin-bottom:20px;
`;
export const SkillsTitle = styled.h2`
font-size:60px;
margin-bottom:20px;
`;
export const ProfileTitleSpan = styled.span`
    font-weight: normal;
`;
export const SkillsTitleSpan = styled.span`
font-weight:normal;
`;
export const ProfileList = styled.ul`
list-style: none;
    padding: 0;
`;
export const ProfileItem = styled.li`
 margin-bottom: 8px;
    font-size: 20px;
`;
export const ItemSpan = styled.span`
display: inline-block;
    width: 120px;
    font-weight: bold;
`;
export const ItemWeb = styled.span`
 font-weight:normal;
    color:#eb5424;
`;
export const SkillsDesc = styled.p`
 font-size: 17px;
    color:#888;
    line-height: 1.5;
    letter-spacing:2px;
    margin-bottom: 20px;
`;
export const Bar = styled.div`
margin-bottom: 8px;
    padding:10px 0;
`;
export const SkillsName = styled.span`
    float: left;
`;
export const Percent1 = styled.span`
float: right;
    margin-bottom: 5px;
    position: relative;
    right: 0%;
`;
export const Percent2 = styled(Percent1)`
    right:30%;
`;
export const Percent3 = styled(Percent1)`
    right: 40%;
`;
export const Parent = styled.div`
    clear: right;
    background-color: #eb522486;
    height: 3px;
`;
export const Child1 = styled.span`
 display: block;
    background-color: #eb5424;
    height: 100%;
    width: 100%;
`;
export const Child2 = styled(Child1)`
    width: 70%;
`;
export const Child3 = styled(Child1)`
    width: 60%;
`;