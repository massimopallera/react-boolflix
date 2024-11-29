export default function Genres({genres}){
   return(
    <div>
       Generi: {genres.map((genre, index) =>
         <span className="mx-1" key={index}>
          {(index < genres.length-1) ? (`${genre.name}, `) : (genre.name) }
         </span>
       )}

    </div>
  )
}