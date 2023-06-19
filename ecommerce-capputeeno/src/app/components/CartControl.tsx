import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./CartIcon";
import { styled } from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;

    position: absolute;
    left: -10px;
    top: 50%;

    background-color: var(--delete-color);
    color: white;
`;

const Container = styled.div`
    position: relative;
`;

export function CartControl() {
    const { value } = useLocalStorage('cart-items')

    return (
        <div>
            <CartIcon />
            {value.lenght && <CartCount>{value.lenght}</CartCount>}
        </div>
    )
}