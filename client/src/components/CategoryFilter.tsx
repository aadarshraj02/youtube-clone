import { useState } from "react";

const Category = (): JSX.Element => {
  const categories = [
    "All",
    "Gaming",
    "Study",
    "Anime",
    "Funny",
    "Tech",
    "Sports",
    "Travel",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="px-4 hidden lg:flex">
      <div className="flex gap-4 overflow-x-auto px-4 py-2 whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`px-6 py-1 rounded-lg ${
              selectedCategory === category
                ? "bg-zinc-900 text-white"
                : "bg-zinc-200 text-gray-700"
            } transition-all`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
