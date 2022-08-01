import { useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import { ICoordinate } from '../routes';

interface Props {
  setCity: React.Dispatch<React.SetStateAction<string>>,
  coordinate: {
    lat: number,
    lng: number
  },
   setCoordinate: React.Dispatch<React.SetStateAction<ICoordinate>>
}

export default function Home({ setCity,coordinate,setCoordinate }: Props){
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
    setCity(address);
    setError('');
    navigate('clima');
  };

  const onError = (status: string, clearSuggestions: Function) => {
  console.log('Google Maps API returned error with status: ', status);
  setError(status)
  clearSuggestions()
}

  return(
    <section className="flex flex-col items-center gap-5 max-w-[44375rem]">
      <h1 className="text-white font-bold text-3xl md:text-[2.6875rem] text-center">Como está o tempo hoje?</h1>
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
                placeholder: "Digite o nome da cidade",
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