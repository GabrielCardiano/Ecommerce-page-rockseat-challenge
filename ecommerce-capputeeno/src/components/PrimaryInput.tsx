import { styled } from "styled-components";
import { SearchIcon } from "./icons/SearchIcon";
import { InputHTMLAttributes } from "react";


export const PrimaryInput = styled.input`
    width: 100%;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;

    background: var(--bg-secondary);

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-dark);

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 14px;
        line-height: 22px;

     }
`;

const Inputcontainer = styled.div`
     position: relative;
     width: 250px;

     svg {
         position: absolute;
         right: 20px;
         top: 50%;
         transform: translateY(-50%)
     }

     @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        width: 352px
     }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChannge: (value: string) => void,
}

export function PrimaryInputWithSearchIcon(props: InputProps) {
    return (
        <Inputcontainer>
            <PrimaryInput onChange={(e) => props.handleChannge(e.target.value)} {...props} />
            <SearchIcon />
        </Inputcontainer>
    )
}