import { IT, US, FR, ES, JP, GB, DE, CN, KR, RU} from 'country-flag-icons/react/3x2'

const languageFlag = {
  "it" : IT, 
  "us" : US, 
  "fr" : FR, 
  "es" : ES, 
  "jp" : JP, 
  "en" : GB, 
  "de" : DE, 
  "cn" : CN, 
  "kr" : KR, 
  "ru" : RU,
}

export default function Flag({movieLanguage}) {
  const Flag = languageFlag[movieLanguage.toLowerCase()]

   return(
    <>
      <div className="flag">
        <span>Original Language: </span>
         {Flag ? (
           <Flag
              width = {30}
              height = {30}
              language = { movieLanguage } />)
            
           : (movieLanguage)}
      </div>
    </>
  )
}