import { Container, Title, TopBar } from '@/components/shared';

export default function Page() {
  return (
    <>
      <Container className="mt-7">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <div style={{ height: 3000 }}></div>
    </>
  );
}
