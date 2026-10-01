// Southern California regions Titan Ridge actively serves on-site.
// Copy is intentionally honest: one office (Fullerton), regional field presence,
// and remote/nationwide capability. Do not inflate footprint.

export type Region = {
  slug: string;
  name: string;
  shortName: string;
  /** Used in <title> */
  seoTitle: string;
  description: string;
  eyebrow: string;
  headline: string;
  intro: string;
  /** Short list shown on the hub page */
  featured: string[];
  /** Every incorporated city in the region (alphabetical) */
  cities: string[];
  /** Industries with the strongest local employer base */
  industrialFocus: string[];
  administrativeFocus: string[];
  /** schema.org AdministrativeArea names */
  areas: string[];
};

export const HQ = {
  name: "Titan Ridge Talent",
  street: "112 E. Amerige Ave #106",
  city: "Fullerton",
  region: "CA",
  postal: "92832",
  phone: "(714) 552-4334",
  phoneE164: "+1-714-552-4334",
  email: "support@titanridgetalent.com",
  lat: 33.8722,
  lng: -117.9245,
};

export const regions: Region[] = [
  {
    slug: "orange-county",
    name: "Orange County",
    shortName: "Orange County",
    seoTitle: "Staffing & Temp Agency in Orange County",
    description:
      "Staffing and temp agency in Orange County, CA, based in Fullerton. Industrial and administrative roles across Anaheim, Santa Ana, Irvine, and 30 more cities.",
    eyebrow: "Titan Ridge Talent",
    headline: "Staffing in Orange County",
    intro:
      "Our office is in Fullerton, which means most Orange County employers are a short drive away. We meet hiring managers on their floor, walk their operation, and place people who already know the commute.",
    featured: ["Fullerton", "Anaheim", "Santa Ana", "Irvine", "Orange"],
    cities: ["Aliso Viejo", "Anaheim", "Brea", "Buena Park", "Costa Mesa", "Cypress", "Dana Point", "Fountain Valley", "Fullerton", "Garden Grove", "Huntington Beach", "Irvine", "La Habra", "La Palma", "Laguna Beach", "Laguna Hills", "Laguna Niguel", "Laguna Woods", "Lake Forest", "Los Alamitos", "Mission Viejo", "Newport Beach", "Orange", "Placentia", "Rancho Santa Margarita", "San Clemente", "San Juan Capistrano", "Santa Ana", "Seal Beach", "Stanton", "Tustin", "Villa Park", "Westminster", "Yorba Linda"],
    industrialFocus: ["Aerospace", "Manufacturing", "Food & Beverage", "Logistics", "Light Industrial"],
    administrativeFocus: ["Human Resources", "Finance", "Administration", "Sales"],
    areas: ["Orange County"],
  },
  {
    slug: "los-angeles-county",
    name: "Los Angeles County",
    shortName: "Los Angeles",
    seoTitle: "Staffing Agency in Los Angeles County",
    description:
      "Employment and staffing agency serving Los Angeles County. Warehouse, manufacturing, logistics, and office placements from Long Beach to Pomona.",
    eyebrow: "Titan Ridge Talent",
    headline: "Staffing in Los Angeles County",
    intro:
      "From the ports at Long Beach to the distribution corridors of Santa Fe Springs and City of Industry, LA County runs on people who show up. We recruit for those floors and for the offices that keep them moving.",
    featured: ["Los Angeles", "Long Beach", "Torrance", "Santa Fe Springs", "City of Industry"],
    cities: ["Agoura Hills", "Alhambra", "Arcadia", "Artesia", "Avalon", "Azusa", "Baldwin Park", "Bell", "Bell Gardens", "Bellflower", "Beverly Hills", "Bradbury", "Burbank", "Calabasas", "Carson", "Cerritos", "Claremont", "Commerce", "Compton", "Covina", "Cudahy", "Culver City", "Diamond Bar", "Downey", "Duarte", "El Monte", "El Segundo", "Gardena", "Glendale", "Glendora", "Hawaiian Gardens", "Hawthorne", "Hermosa Beach", "Hidden Hills", "Huntington Park", "Industry", "Inglewood", "Irwindale", "La Cañada Flintridge", "La Habra Heights", "La Mirada", "La Puente", "La Verne", "Lakewood", "Lancaster", "Lawndale", "Lomita", "Long Beach", "Los Angeles", "Lynwood", "Malibu", "Manhattan Beach", "Maywood", "Monrovia", "Montebello", "Monterey Park", "Norwalk", "Palmdale", "Palos Verdes Estates", "Paramount", "Pasadena", "Pico Rivera", "Pomona", "Rancho Palos Verdes", "Redondo Beach", "Rolling Hills", "Rolling Hills Estates", "Rosemead", "San Dimas", "San Fernando", "San Gabriel", "San Marino", "Santa Clarita", "Santa Fe Springs", "Santa Monica", "Sierra Madre", "Signal Hill", "South El Monte", "South Gate", "South Pasadena", "Temple City", "Torrance", "Vernon", "Walnut", "West Covina", "West Hollywood", "Westlake Village", "Whittier"],
    industrialFocus: ["Logistics", "Warehouse", "Manufacturing", "Food & Beverage", "Automotive"],
    administrativeFocus: ["Administration", "Human Resources", "Finance", "Technology"],
    areas: ["Los Angeles County"],
  },
  {
    slug: "inland-empire",
    name: "Inland Empire",
    shortName: "Inland Empire",
    seoTitle: "Staffing Agency in the Inland Empire",
    description:
      "Warehouse, logistics, and manufacturing staffing and temp agency for the Inland Empire: Riverside, Ontario, Corona, Fontana, Rancho Cucamonga.",
    eyebrow: "Titan Ridge Talent",
    headline: "Staffing in the Inland Empire",
    intro:
      "The Inland Empire is one of the largest logistics markets in the country, and the volume hiring that comes with it is exactly where a relationship-first recruiter earns their keep. We fill the roles that keep distribution centers running.",
    featured: ["Riverside", "Ontario", "Corona", "Fontana", "Rancho Cucamonga"],
    cities: ["Adelanto", "Apple Valley", "Banning", "Barstow", "Beaumont", "Big Bear Lake", "Blythe", "Calimesa", "Canyon Lake", "Cathedral City", "Chino", "Chino Hills", "Coachella", "Colton", "Corona", "Desert Hot Springs", "Eastvale", "Fontana", "Grand Terrace", "Hemet", "Hesperia", "Highland", "Indian Wells", "Indio", "Jurupa Valley", "La Quinta", "Lake Elsinore", "Loma Linda", "Menifee", "Montclair", "Moreno Valley", "Murrieta", "Needles", "Norco", "Ontario", "Palm Desert", "Palm Springs", "Perris", "Rancho Cucamonga", "Rancho Mirage", "Redlands", "Rialto", "Riverside", "San Bernardino", "San Jacinto", "Temecula", "Twentynine Palms", "Upland", "Victorville", "Wildomar", "Yucaipa", "Yucca Valley"],
    industrialFocus: ["Logistics", "Warehouse", "Light Industrial", "Manufacturing", "Skilled Trades"],
    administrativeFocus: ["Administration", "Human Resources", "Operations"],
    areas: ["Riverside County", "San Bernardino County"],
  },
  {
    slug: "san-diego-county",
    name: "San Diego County",
    shortName: "San Diego",
    seoTitle: "Staffing Agency in San Diego County",
    description:
      "Industrial and administrative staffing agency serving San Diego County, from Oceanside and Carlsbad to Chula Vista. Manufacturing, logistics, office roles.",
    eyebrow: "Titan Ridge Talent",
    headline: "Staffing in San Diego County",
    intro:
      "San Diego County blends advanced manufacturing along the 78 corridor with logistics and office hiring closer to the border. We work these searches the same way we work Orange County: one conversation at a time.",
    featured: ["San Diego", "Carlsbad", "Oceanside", "Vista", "Chula Vista"],
    cities: ["Carlsbad", "Chula Vista", "Coronado", "Del Mar", "El Cajon", "Encinitas", "Escondido", "Imperial Beach", "La Mesa", "Lemon Grove", "National City", "Oceanside", "Poway", "San Diego", "San Marcos", "Santee", "Solana Beach", "Vista"],
    industrialFocus: ["Manufacturing", "Aerospace", "Logistics", "Light Industrial"],
    administrativeFocus: ["Administration", "Finance", "Technology", "Sales"],
    areas: ["San Diego County"],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
