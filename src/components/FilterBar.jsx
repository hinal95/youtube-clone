const categories = ["All" , "React", "JavaScript", "Tutorial", "CSS", "Node.js"];


const FilterBar = () => {
  return (
    <div className="flex overflow-x-auto gap-2 p-2 bg-white sticky top-16 z-40">
        {categories.map((category,index)=>{
            <button key={index}  className="px-4 py-1 rounded-full bg-gray-200 text-sm hover:bg-gray-300">{category}</button>
        })}
    </div>
  )
}

export default FilterBar