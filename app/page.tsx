import { Container, Filters, Title, TopBar } from '@/components/shared';

export default function Page() {
  return (
    <>
      <Container className="mt-7">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-9 pb-14">
        <div className="flex gap-14">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <PrpductGruopList title="Пиццы" items={[1, 2, 3, 4]} />
              <PrpductGruopList title="Комбо" items={[1, 2, 3, 4]} /> */}
              Список Товаров
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
