import { Layout } from "../../Components/Layout/Layout";
import { StyledHome } from "../Home/Home.Style";
import { IoIosAddCircleOutline } from "react-icons/io";
import { StyledLista } from "./Lista.Style";
import { StyledInput } from "../../Components/Input/Input.Styled";

export default function Lista() {

    return (
        <Layout>
            <StyledHome>Nova lista</StyledHome>
            <StyledLista>
                <label htmlFor="lista">Adicionar item</label>
                <StyledInput type="text" id="lista" name="lista" placeholder="Digite o item desejado"/>
            </StyledLista>
                <IoIosAddCircleOutline size="2rem" color="#38aede"/>
        </Layout>
    );
};

