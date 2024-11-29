export default function Genres({genres}){
   return(
    <div>
      Generi: {genres.map(genre => <span className="mx-1" key={genre.name}>{genre.name}</span>)}
    </div>
  )
}