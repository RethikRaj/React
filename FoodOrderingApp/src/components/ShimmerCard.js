const ShimmerCard = () => {
    return (
        <div className="w-[300px] bg-gray-200 p-6 m-4 rounded-lg relative overflow-hidden shadow-md h-[400px]">
            <div className="w-full h-[250px] bg-gray-300 animate-pulse rounded-lg"></div>
            <div className="mt-4">
                <h3 className="h-5 bg-gray-300 animate-pulse w-9/10 mb-2 rounded-md"></h3>
                <h4 className="h-5 bg-gray-300 animate-pulse w-4/5 mb-2 rounded-md"></h4>
                <h5 className="h-5 bg-gray-300 animate-pulse w-7/10 mb-2 rounded-md"></h5>
                <p className="h-5 bg-gray-300 animate-pulse w-3/4 rounded-md"></p>
            </div>
        </div>
    );
}

export default ShimmerCard;
