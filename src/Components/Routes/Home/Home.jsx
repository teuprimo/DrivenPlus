import styled from "styled-components";
import GlobalStyle from "../../../Styles/GlobalStyle";
import Logo from "../../CommonAssets/Logo";
import UserSVG from "../../CommonAssets/UserSVG";


export default function(){


    return(
        <Container>
        <GlobalStyle color='#0e0e13'/>
        <Header>
        <LogoPosition><Logo src={0}/></LogoPosition>
        <UserPosition><UserSVG/></UserPosition>
        </Header>
        <span><h1>Ola, nome</h1></span>
        <>
        {<StyledBtn style={{background:'#ff4791', color:'white'}}></StyledBtn>}
        </>
        
        <ChangePlan>
            <StyledBtn style={{background:'#ff4791', color:'white'}}>Mudar plano</StyledBtn>
            <StyledBtn style={{background:'#FF4747', color:'white'}}>Cancelar plano</StyledBtn>
        </ChangePlan>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column ;
    align-items: center;
    h1{
        font-size: 24px;
    }
    span{
        width: 303px;
    }
`

const UserPosition = styled.div`
    position: relative;
    top: 30px;
    right: 20px;
`

const LogoPosition = styled.div`
    position: relative;
    top:-25px;
    
`

const StyledBtn = styled.button`
        border: none;
        width:303px ;
        height: 45px;
        border-radius: 5px;
        margin-bottom: 5px;
        box-sizing: border-box;
        padding-left: 11px;
        font-weight: 400;
        font-size: 20px;
        color: #414141;
        ::placeholder{
        color:#dbdbdb;    
        }
        
`

const ChangePlan = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column ;
    position: fixed;
    bottom: 15px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`