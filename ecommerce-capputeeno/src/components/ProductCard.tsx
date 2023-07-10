import { formatPrice } from '@/utils/FormatPrice';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { styled } from 'styled-components';
import { Divider } from './Divider';

export interface ProductcardProps {
  image: string,
  title: string,
  price: number,
  id: string,
}

const Card = styled.div`
  display: flex;
  align-items:  center;
  justify-content: center;
  flex-direction: column;

  background-color: rgba(255,255,255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;  

  width: 256px;
  
  img {
    width: 256px;
    height: 300px;
    cursor: pointer;
  } 

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2)
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark )
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 12px;
    width: 100%;
}    
`

export function Productcard(props: ProductcardProps) {
  const router = useRouter()
  const price = formatPrice(props.price)

  const handleNavigate = () => {
    router.push(`/product?id=${props.id}`)
  }

  return (
    <Card onClick={handleNavigate}>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <Divider />
        <p>{price}</p>
      </div>

    </Card>
  );
}
