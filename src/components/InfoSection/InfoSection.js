import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoSectionElements';
import me from './me.png';


const InfoSection = () => {
    return (
        <>
            <InfoContainer >
                <InfoWrapper>
                    <InfoRow >
                        <Column1>
                        <ImgWrap>
                            <img src={me}
                                width="529"
                                height="555"
                            />
                            </ImgWrap>
                        </Column1>
                        <Column2>
                        <TextWrapper>
                            <TopLine>HI , I AM</TopLine>
                            <Heading >NICHAKAN JAISAKSERN</Heading>
                            <Subtitle >Computer Emgineering</Subtitle>
                        </TextWrapper>
                            
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
