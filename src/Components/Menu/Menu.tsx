import { BiHomeAlt } from "react-icons/bi"
import { Link } from "react-router-dom"
import { StyledItemMenu, StyledMenu, StyledUl } from "./Menu.styled"
import { MdOutlinePlaylistAdd } from "react-icons/md"
import { CgProfile } from "react-icons/cg"

export const Menu = () => {
    return(
        <>
        <StyledMenu>
            <StyledUl>
                <StyledItemMenu>
                    <BiHomeAlt size="1.5rem" color="#38aede"/>
                    <Link to="/">Home</Link>
                </StyledItemMenu>
                <StyledItemMenu>
                    <MdOutlinePlaylistAdd size="1.5rem" color="#38aede"/>
                    <Link to="/Lista">Nova Lista</Link>
                </StyledItemMenu>
                <StyledItemMenu>
                    <CgProfile size="1.5rem" color="#38aede"/>
                    <Link to="/Perfil">Perfil</Link>
                </StyledItemMenu>
            </StyledUl>
        </StyledMenu>
        </>
    )
}