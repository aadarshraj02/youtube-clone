import CategoryFilter from "../components/CategoryFilter";
import VideoCard from "../components/VideoCard";

const Home = (): JSX.Element => {


  return (
    <>
      <div className="max-w-full overflow-hidden">
          <div className="flex-1 px-4">
            <CategoryFilter />
          </div>
        </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

     
      </div>
    </>
  );
};

export default Home;
