import { useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import { ICoordinate, ILanguage } from '../routes';

interface Props {
  setCity: React.Dispatch<React.SetStateAction<string>>,
  coordinate: {
    lat: number,
    lng: number
  },
  setCoordinate: React.Dispatch<React.SetStateAction<ICoordinate>>,
  lang: ILanguage
}

export default function Home({ setCity, coordinate, setCoordinate, lang }: Props){
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [error, setError] = useState('')
 

  //inserindo script com url da api google 
  // const API_KEY = import.meta.env.VITE_GOOGLE_URL;
  // console.log(API_KEY)
  // const script = document.createElement('script'); 
  // script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`; 
  // document.head.append(script);


  const handleSelect = async (value: string) => {
    const result = await geocodeByAddress(value);
    const latlng = await getLatLng(result[0]);
    setAddress(value.split(',')[0]);
    setCoordinate(latlng);

    setCity(value.split(',')[0]);
    setError('');
    if(error === '') navigate('clima');
  };

  const onError = (status: string, clearSuggestions: Function) => {
  console.log('Google Maps API returned error with status: ', status);
  setError(status)
  clearSuggestions()
  }

  const placeholder = lang.lang === 'pt_br' ? "Digite o nome da cidade" :
    lang.lang === 'en' ? "Enter the city name" : "Introduzca el nombre de la ciudad" ;

  return(
    <section className="flex flex-col items-center gap-5 max-w-[44375rem]">
      {
        lang.lang === 'pt_br' ?
        <h1 className="text-white font-bold text-3xl md:text-[2.6875rem] text-center">Como está o tempo hoje?</h1>:
        lang.lang === 'en'?
        <h1 className="text-white font-bold text-3xl md:text-[2.6875rem] text-center">How is the weather today?</h1>:
        <h1 className="text-white font-bold text-3xl md:text-[2.6875rem] text-center">¿Cómo está el clima hoy?</h1>
      }
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={{ types: ['locality', 'country'] }}
        onError={onError}
      >
        {(
          {
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }
          )=>(
          <div className='w-full relative'>
            <input {...getInputProps(
              {
                placeholder: placeholder,
                className:"w-full h-12 rounded-xl p-4 placeholder:text-placeholder text-placeholder outline-none"
              }
            )} />
            <div className={`absolute w-full rounded-b-xl top-9 bg-input border-t-2 border-inherit shadow-shadowDropDown ${suggestions.length > 0 ? 'block': 'hidden'}`}>
              { loading ? <div>...Loading</div>: null}
              {suggestions.map((suggestion,i)=>{
            
                  const style = {
                  backgroundColor: suggestion.active ? '#41b6e5' : '',
                  padding:'1rem'
                }
                return <div {...getSuggestionItemProps(suggestion,
                  { 
                    style 
                  }
                  )} key={i}>{suggestion.description}</div>
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <p className='text-red-600 font-semibold'>{error}</p>
    </section>
  )
}