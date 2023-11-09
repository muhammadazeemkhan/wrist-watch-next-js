import watches from "@/lib";

export default async function Product({ params }) {
  const filterWatches = watches.find((data) => data.id == params.id);
  const { id, name, title, image, category, price } = filterWatches;
  console.log(filterWatches);
  console.log(name);

  return (
    <main>
      <div className="p-5 md:flex flex-row md:items-center md:p-4 lg:p-8 lg:gap-32">
        <div className="flex flex-col items-center">
          <img className=" w-100 h-full " src={image}></img>
        </div>
        <div className="flex flex-col items-center">
          <h1>{name}</h1>
          <h1>{title}</h1>
          <h1>{category}</h1>
          <h1>{price}</h1>
        </div>
      </div>
    </main>
  );
}
