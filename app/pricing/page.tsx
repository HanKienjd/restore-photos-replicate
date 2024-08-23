'use client';

import { AppLayout } from 'components/layouts/AppLayout';
import styled from 'styled-components';
import CardPricing from 'components/CardPricing';

const Container = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  gap: 1rem;
  flex-direction: column;
`;

export default function PricingPage() {
  return (
    <AppLayout>
      <Container>
        <div className={'text-2xl'}>Choose your plan</div>
        <div>Premium UI Kit, affordable for everyone</div>
        <div>
          <CardPricing />
        </div>
      </Container>
    </AppLayout>
  );
}
