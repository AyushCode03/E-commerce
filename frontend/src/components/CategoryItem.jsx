// import { Link } from "react-router-dom";

// const CategoryItem = ({ category }) => {
// 	return (
// 		<div className='relative overflow-hidden h-96 w-full rounded-lg group'>
// 			<Link to={"/category" + category.href}>
// 				<div className='w-full h-full cursor-pointer'>
// 					<div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 z-10' />
// 					<img
// 						src={category.imageUrl}
// 						alt={category.name}
// 						className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
// 						loading='lazy'
// 					/>
// 					<div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
// 						<h3 className='text-white text-2xl font-bold mb-2'>{category.name}</h3>
// 						<p className='text-gray-200 text-sm'>Explore {category.name}</p>
// 					</div>
// 				</div>
// 			</Link>
// 		</div>
// 	);
// };

// export default CategoryItem;


import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className="relative overflow-hidden h-96 w-full rounded-lg group shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out">
			<Link to={"/category" + category.href}>
				<div className="w-full h-full cursor-pointer">
					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 z-10 transition-opacity duration-500 group-hover:opacity-60" />
					
					{/* Category Image */}
					<img
						src={category.imageUrl}
						alt={category.name}
						className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-90"
						loading="lazy"
					/>
					
					{/* Category Text and Button */}
					<div className="absolute bottom-0 left-0 right-0 p-6 z-20">
						<h3 className="text-white text-3xl font-semibold mb-2 transition-all duration-300 ease-in-out group-hover:text-yellow-400">
							{category.name}
						</h3>
						<p className="text-gray-200 text-md mb-4 transition-all duration-300 ease-in-out group-hover:text-white">
							Explore {category.name}
						</p>
						{/* Button-style Call to Action */}
						<button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out">
							Shop Now
						</button>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
