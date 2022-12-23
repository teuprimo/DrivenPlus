import styled from "styled-components"
export default function(prop){
    
    if(!prop.src){return(
        <Style color={prop.color}>
        <Driven>
        <svg width="92" height="95" viewBox="0 0 92 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M74.9735 80.8033L61.0685 95H0V0H45.4041C72.079 0 91.8865 18.4613 91.8865 43.6001C91.4354 57.722 85.356 71.0949 74.9735 80.8033ZM7.88896 7.35086V87.6491H57.8902L69.6385 75.5848C74.1391 71.4917 77.7752 66.558 80.3372 61.0684C82.8991 55.5787 84.336 49.6417 84.5651 43.6001C84.5651 22.4454 68.1061 7.35086 45.4041 7.35086H7.88896ZM64.0197 69.5245L54.8254 78.8954H15.8347V16.1045H45.4041C49.3506 15.9149 53.2951 16.5183 56.9991 17.8784C60.7031 19.2385 64.0898 21.3269 66.9544 24.0175C69.8191 26.7082 72.1022 29.9451 73.6658 33.5327C75.2295 37.1204 76.0411 40.9842 76.0518 44.8907C75.8307 49.5869 74.6507 54.1903 72.583 58.4238C70.5152 62.6573 67.6023 66.4333 64.0197 69.5245ZM23.4966 23.4554V71.4885H51.8742L58.9118 64.306C64.5894 59.3374 68.0732 52.368 68.6169 44.8907C68.6077 41.9485 67.9892 39.0393 66.7994 36.3424C65.6096 33.6456 63.8739 31.2182 61.699 29.2099C59.5242 27.2016 56.9564 25.655 54.1539 24.6653C51.3514 23.6756 48.3736 23.2638 45.4041 23.4554H23.4966ZM53.8606 58.2457L49.3202 62.7909H31.4991V32.2091H45.4041C47.315 32.0787 49.2327 32.3369 51.0388 32.9678C52.8449 33.5986 54.501 34.5887 55.9051 35.877C57.3091 37.1652 58.4312 38.7243 59.2021 40.4579C59.9731 42.1916 60.3765 44.0631 60.3874 45.9569C59.8827 50.7281 57.5467 55.1263 53.8606 58.2457ZM38.3097 38.8305V56.1134H46.1987L48.8661 53.4761C50.0512 52.6313 51.0534 51.5606 51.8137 50.3271C52.5739 49.0936 53.0769 47.7222 53.293 46.2936C53.2887 45.2567 53.0676 44.2319 52.6435 43.2836C52.2194 42.3353 51.6015 41.484 50.8287 40.7831C50.0558 40.0822 49.1447 39.5469 48.1526 39.2109C47.1604 38.8749 46.1087 38.7453 45.0635 38.8305H38.3097Z" fill="white"/>
        </svg>
        </Driven>
        <Plus>
        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
        </Plus>
        </Style>
    )}
    else{
        return(
            <img src={prop.src}/>
        )
    }
}

const Style = styled.div`
    margin-left: auto;
    margin-right: auto;
    
    svg{
        width: 180px; 
        margin-bottom: 33px;
    }
    path{
        fill:${prop => prop.color}; 
        
    }
`
const Driven = styled.div`
    position: relative;
    top: 60px;
    right: 25px;
`
const Plus = styled.div`
    position: relative;
    left: 45px;
    bottom: 20px;
    path{
    fill: #ff4791;
    }
    `