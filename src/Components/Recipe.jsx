// import React from "react";

// import { ClipLoader } from "react-spinners";
// import { useFecth } from "../Hooks/usefecth";



// const Recipe = () => {
//    const {data:{recipes}, isloading}=useFecth("https:dummyjson.com/recipes")

   
// //   const [recipes, setrecipe] = useState([]);
// //   const [isloading, setisloading] = useState(true);

// //   useEffect(() => {
// //     const getRecipe = async () => {
// //       const res = await fetch(url);
// //       setisloading(false);
// //       const data = await res.json();
// //       setrecipe(data.recipes);
// //       console.log(data.recipes);
// //     };
// //     getRecipe();
// //   }, []);

//   if (isloading) {
//     return (
//       <div className="flex items-center justify-center h-70%">
//         <ClipLoader className="#ff0000" />
//       </div>
//     );
//   }

//   return (
//     <div>
//       Recipe
//       <section className="flex items-center gap-5 flex-wrap ml-10 py-10 ">
//         {recipes.map((Recipe) => {
//           const {
//             id,
//             name,
//             ingredients,
//             image,
//             prepTimeMinutes,
//             instructions,
//             mealType,
//           } = Recipe;

//           return (
//             <div key={id} className="border border-2px-black rounded-md py-2">
//               <h1 className="text-xl font-bold underline mb-3">Name:{name}</h1>
//               <img src={image} alt={name} className="w-full lg:w-[300px] h-fit" />
//               <p className="text-xl font-bold underline mt-3">
//                 preparation time:{prepTimeMinutes}
//               </p>

//               <div className="layout shadow-lg h-[50%] ">
//                 <p className="text-xl font-bold">mealtype : {mealType}</p>
//                 <h1 className="text-xl font-bold underline">ingredients:</h1>
//                 <ol className="w-[500px] text-lg font-semibold ">
//                   {ingredients.map((ing, index) => {
//                     return <oi key={index}> {ing}</oi>;
//                   })}
//                 </ol>
//                 <h1 className="text-xl font-bold w-[300px] h-7 mt-2  ">
//                   How to prepare :
//                 </h1>
//                 <ol className="w-[500px] text-lg font-semibold">
//                   {instructions.map((ing, index) => {
//                     return <o key={index}>{ing}</o>;
//                   })}
//                 </ol>
//               </div>
//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );

// }J
// export default Recipe;
