import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/CartIcon";
import { styled } from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    padding: 0 5px;
    font-size: 10px;

    margin-left: -10px;

    background-color: var(--delete-color);
    color: white;
`;

const Container = styled.div`
    position: relative;
`;

export function CartControl() {
    const { value } = useLocalStorage('cart-items', [])

    return (
        <Container>
            <CartIcon />
            {value.length && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}