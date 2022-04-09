import React from 'react'
import {MdDesktopMac} from 'react-icons/md';
import styled  from 'styled-components';
import PText from './PText';


const ItemStyles=styled.div`
text-align:center;
.servicesItem_icon{
    svg{
        width:3rem;
    }
}
.servicesItem_title{
    font-size:2.5rem;
    font-family:'Montserrat SemiBold'
}
.para{
    margin-top:2rem;
}
`;
export default function ServicesSectionitem({
    icon=<MdDesktopMac />,
    title="Web design",
    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}) {
  return (
    <ItemStyles>
        <div className="servicesItem_icon">
        {icon}
        <div className="servicesItem_title">{title}</div>
        <PText>
           {desc}
        </PText>
        </div>
    </ItemStyles>
  )
}
