export interface IUnit {
  unit: 'imperial' | 'metric'
}

export interface ICoordinate extends google.maps.LatLngLiteral{
  lat: number,
  lng: number
}

export interface ILanguage {
  language: 'Português' | 'English' | 'Español',
  lang: 'pt_br' | 'en' | 'es'
}

export interface IFiveDaysForecast{
  dayName: {
    day: string,
    week: string,
    month: string,
  },
  icon: string,
  dayMax: Number,
  dayMin: Number,
  description: string
}