

const Catagory = () => {
    const fetchFilteredProducts=(e)=>{
        console.log("filltering");
        // const barand_name=e.target.brandFilter.value;
        console.log(brandFilter);
      }
  return (
    <div className="filters flex gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Brand Name"
                    className="input input-bordered"
                    value={brandFilter}
                    onChange={(e) => setBrandFilter(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Category Name"
                    className="input input-bordered"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Price Range"
                    className="input input-bordered"
                    value={priceRangeFilter}
                    onChange={(e) => setPriceRangeFilter(e.target.value)}
                />
                <button
                    onClick={fetchFilteredProducts}
                    className="btn bg-sky-300 hover:bg-sky-500 font-semibold"
                >
                    Apply Filters
                </button>
            </div>
  )
}

export default Catagory
