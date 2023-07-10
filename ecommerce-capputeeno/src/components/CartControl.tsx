import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/CartIcon";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";

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

const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`;

export function CartControl() {
    const { value } = useLocalStorage('cart-items', []);
    const router = useRouter();

    const handleNavigateToCart = () => {
        router.push('/cart')
    }

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}