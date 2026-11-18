export type Destination = {
  id: number;
  name: string;
  area: string;
  category: string;
  description: string;
  image: string;
  hidden: boolean;
};

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Vivekananda Rock Memorial',
    area: 'Kanyakumari',
    category: 'Heritage',
    description: 'A well-known memorial on a rocky island off the coast of Kanyakumari.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1000',
    hidden: false
  },
  {
    id: 2,
    name: 'Thiruvalluvar Statue',
    area: 'Kanyakumari',
    category: 'Heritage',
    description: 'A monumental statue honouring the Tamil poet and philosopher Thiruvalluvar.',
    image: '/images/thiruvalluvar-statue.jpg',
    hidden: false
  },
  {
    id: 3,
    name: 'Kanyakumari Beach',
    area: 'Kanyakumari',
    category: 'Beach',
    description: 'A popular coastal area known for its sunrise and sunset views.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000',
    hidden: false
  },
  {
    id: 4,
    name: 'Vattakottai Fort',
    area: 'Vattakottai',
    category: 'History',
    description: 'A historic seaside fort with views of the coast and surrounding landscape.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000',
    hidden: false
  },
  {
    id: 5,
    name: 'Sanguthurai Beach',
    area: 'Sanguthurai',
    category: 'Beach',
    description: 'A quieter beach area for visitors seeking a less-crowded coastal stop.',
    image: '/images/sanguthurai-beach.jpg',
    hidden: true
  },
  {
    id: 6,
    name: 'Mathur Aqueduct',
    area: 'Mathur',
    category: 'Nature',
    description: 'A notable aqueduct surrounded by greenery and rural scenery.',
    image: '/images/mathur-aqueduct.jpg',
    hidden: false
  },
  {
    id: 7,
    name: 'Olakaruvi Waterfalls',
    area: 'Near Kanyakumari',
    category: 'Nature',
    description: 'A waterfall destination. Check seasonal conditions, local access and safety guidance before visiting.',
    image: '/images/olakaruvi-waterfalls.jpg',
    hidden: true
  },
  {
    id: 8,
    name: 'Kalikesam',
    area: 'Bhoothapandi region',
    category: 'Nature',
    description: 'A green forest and river-side destination known for its natural surroundings. Check current access rules before travelling.',
    image: 'https://cdn.s3waas.gov.in/s38fe0093bb30d6f8c31474bd0764e6ac0/uploads/2026/08/17864269649406-scaled.jpg',
    hidden: true
  },
  {
    id: 9,
    name: 'Vali Chunai',
    area: 'Kanyakumari district',
    category: 'Nature',
    description: 'A lesser-known natural spot. Confirm the exact route and local access conditions before visiting.',
    image: '/images/vali-chunai.jpg',
    hidden: true
  },
  {
    id: 10,
    name: 'Chitharal Jain Temple',
    area: 'Chitharal',
    category: 'Heritage',
    description: 'A historic Jain rock-cut monument set on a hill, with views of the surrounding countryside.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Chitharal_Jain_Temple_or_Chitharal_Malai_Kovil_%2820946%29.jpg',
    hidden: false
  },
  {
    id: 11,
    name: 'Lemur Beach',
    area: 'Kanyakumari district',
    category: 'Beach',
    description: 'A coastal beach destination. Check local conditions and safe access before entering the water.',
    image: '/images/lemur-beach.jpg',
    hidden: false
  },
  {
    id: 12,
    name: 'Padmanabhapuram Palace',
    area: 'Padmanabhapuram',
    category: 'Heritage',
    description: 'A historic palace complex celebrated for its traditional Kerala-style wooden architecture.',
    image: 'https://cdn.s3waas.gov.in/s38fe0093bb30d6f8c31474bd0764e6ac0/uploads/2025/05/2025051782-2-scaled.jpg',
    hidden: false
  },
  {
    id: 13,
    name: 'Marunthuvazh Malai',
    area: 'Azhagappapuram region',
    category: 'Nature',
    description: 'A hill associated with local tradition and scenic trekking routes. Follow marked paths and local guidance.',
    image: '/images/marunthuvazh-malai.jpg',
    hidden: true
  },
  {
    id: 14,
    name: 'Kaalimala',
    area: 'Kanyakumari district',
    category: 'Nature',
    description: 'A hill destination with scenic surroundings. Check route conditions and local guidance before setting out.',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000',
    hidden: true
  },
  {
    id: 15,
    name: 'Velimalai Hills',
    area: 'Velimalai',
    category: 'Nature',
    description: 'A green hill landscape in the district. Respect local access restrictions and natural habitats.',
    image: '/images/velimalai-hills.jpg',
    hidden: true
  },
  {
    id: 16,
    name: 'Pechiparai Dam',
    area: 'Pechiparai',
    category: 'Nature',
    description: 'A major reservoir set amid the Western Ghats foothills. Check visitor access before travelling.',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000',
    hidden: false
  },
  {
    id: 17,
    name: 'Perunchani Dam',
    area: 'Perunchani',
    category: 'Nature',
    description: 'A reservoir surrounded by forested hills and countryside. Visitor access may be restricted in some areas.',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1000',
    hidden: false
  },
  {
    id: 18,
    name: 'Chittar Dam 1',
    area: 'Chittar',
    category: 'Nature',
    description: 'A reservoir in the Chittar dam system. Confirm public access and local conditions before visiting.',
    image: 'https://cdn.s3waas.gov.in/s38fe0093bb30d6f8c31474bd0764e6ac0/uploads/2025/05/2025051782-scaled-e1747461920696.jpg',
    hidden: false
  },
  {
    id: 19,
    name: 'Kodayar Twin Falls',
    area: 'Kodayar',
    category: 'Nature',
    description: 'A waterfall area in the Kodayar region. Water flow and access can vary by season; follow local safety advice.',
    image: '/images/kodayar-twin-falls.jpg',
    hidden: true
  },
  {
    id: 20,
    name: 'Upper Kodayar',
    area: 'Upper Kodayar',
    category: 'Nature',
    description: 'A scenic highland and reservoir area. Some routes may pass through controlled forest or water-board areas; check permission first.',
    image: '/images/upper-kodayar.jpg',
    hidden: true
  },
  {
    id: 21,
    name: 'Thirparappu Falls',
    area: 'Thirparappu',
    category: 'Nature',
    description: 'A popular waterfall on the Kodayar River, with visitor facilities in the surrounding area.',
    image: 'https://cdn.s3waas.gov.in/s38fe0093bb30d6f8c31474bd0764e6ac0/uploads/2025/05/2025051664-scaled.jpg',
    hidden: false
  },
  {
    id: 22,
    name: 'Karumparai Falls',
    area: 'Kanyakumari district',
    category: 'Nature',
    description: 'A lesser-known waterfall location. Verify the route, permissions and seasonal safety conditions locally.',
    image: '/images/karumparai-falls.jpg',
    hidden: true
  }
];

export type Stay = {
  id: number;
  name: string;
  area: string;
  description: string;
  map: string;
};

export const stays: Stay[] = [
  { id: 1, name: 'The Sea Shore Hotel', area: 'Kanyakumari', description: 'A seafront-area hotel close to the main sightseeing zone.', map: 'https://www.google.com/maps/search/?api=1&query=The+Sea+Shore+Hotel+Kanyakumari' },
  { id: 2, name: 'Shell Park Heritage Homestay', area: 'South Kundal, Kanyakumari', description: 'A heritage-style homestay in a traditional courtyard house.', map: 'https://www.google.com/maps/search/?api=1&query=Shell+Park+Heritage+Homestay+Kanyakumari' },
  { id: 3, name: 'Anantya by the Lake', area: 'Chittar Lake area', description: 'A lakeside resort in the wider Kanyakumari district.', map: 'https://www.google.com/maps/search/?api=1&query=Anantya+by+the+Lake+Kanyakumari' },
  { id: 4, name: 'Hotel Sangam', area: 'Kanyakumari', description: 'A centrally located hotel option for visitors to Kanyakumari.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Sangam+Kanyakumari' },
  { id: 5, name: 'Amaari Beach Resort', area: 'Sunset Beach, Kovalam Road, Kanyakumari', description: 'An ocean-view resort with rooms, dining and leisure facilities.', map: 'https://www.google.com/maps/search/?api=1&query=Amaari+Beach+Resort+Kanyakumari' },
  { id: 6, name: 'Annai Resorts & Spa', area: 'Kovalam Road, Kanyakumari', description: 'A seaside resort with accommodation and resort facilities.', map: 'https://www.google.com/maps/search/?api=1&query=Annai+Resorts+and+Spa+Kanyakumari' },
  { id: 7, name: 'Annai Celestial', area: 'Beach Road, Kanyakumari', description: 'A beach-area resort with rooms, pool and on-site dining.', map: 'https://www.google.com/maps/search/?api=1&query=Annai+Celestial+Kanyakumari' },
  { id: 8, name: 'Hotel Sea View', area: 'East Car Street, Kanyakumari', description: 'A hotel near the seafront and central Kanyakumari attractions.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Sea+View+Kanyakumari' },
  { id: 9, name: 'Hotel Tri Sea', area: 'Kovalam Road, Kanyakumari', description: 'A hotel close to the waterfront sightseeing area.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Tri+Sea+Kanyakumari' },
  { id: 10, name: 'Hotel Tamil Nadu – TTDC', area: 'Lighthouse Road, Kanyakumari', description: 'A government tourism accommodation option near the seafront.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Tamil+Nadu+TTDC+Kanyakumari' },
  { id: 11, name: 'The Gopinivas Grand', area: 'East Car Street, Kanyakumari', description: 'A centrally located hotel option close to the temple and seafront.', map: 'https://www.google.com/maps/search/?api=1&query=The+Gopinivas+Grand+Kanyakumari' },
  { id: 12, name: 'Hotel Temple Citi', area: 'Kanyakumari', description: 'A hotel option for visitors exploring the main Kanyakumari attractions.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Temple+Citi+Kanyakumari' },
  { id: 13, name: 'Hotel Cyril', area: 'Chinnamuttom, Kanyakumari', description: 'A hotel in the Chinnamuttom area, a short drive from central sights.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Cyril+Chinnamuttom+Kanyakumari' },
  { id: 14, name: 'Hotel Rajam', area: '2/17D, East Car Street, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Rajam+2/17D,+East+Car+Street,+Kanyakumari' },
  { id: 15, name: 'Parvathi Nivas Lodge', area: '80, West Car Street, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Parvathi+Nivas+Lodge+80,+West+Car+Street,+Kanyakumari' },
  { id: 16, name: 'Hotel Ocean Heritage', area: '2/11B, East Car Street, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Ocean+Heritage+2/11B,+East+Car+Street,+Kanyakumari' },
  { id: 17, name: 'Hotel Rajapalace', area: '67B, Main Road, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Rajapalace+67B,+Main+Road,+Kanyakumari' },
  { id: 18, name: 'Hotel Pioneer Paradise', area: '13C/1D, WCC Road, Tower Junction, Nagercoil', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Pioneer+Paradise+13C/1D,+WCC+Road,+Tower+Junction,+Nagercoil' },
  { id: 19, name: 'Hotel Parvathi Residency', area: '400, PWD Road, Nagercoil', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Parvathi+Residency+400,+PWD+Road,+Nagercoil' },
  { id: 20, name: 'Hotel Udupi International', area: 'Distillery Road, Vadasery, Nagercoil', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Udupi+International+Distillery+Road,+Vadasery,+Nagercoil' },
  { id: 21, name: 'Hotel Vijayetha', area: 'WCC Road, Nagercoil', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Vijayetha+WCC+Road,+Nagercoil' },
  { id: 22, name: 'Hotel Ganga', area: 'Court Road, Nagercoil', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Ganga+Court+Road,+Nagercoil' },
  { id: 23, name: 'Hotel Sahana Castle', area: 'Distillery Road, Vadasery, Nagercoil', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Sahana+Castle+Distillery+Road,+Vadasery,+Nagercoil' },
  { id: 24, name: 'Hotel Green Hill Lodging', area: 'Railway Station Road, Marthandam', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Green+Hill+Lodging+Railway+Station+Road,+Marthandam' },
  { id: 25, name: 'Hotel Cyril', area: 'Chinnamuttom, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Cyril+Chinnamuttom,+Kanyakumari' },
  { id: 26, name: 'Hotel Rajam', area: 'East Car Street, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Rajam+East+Car+Street,+Kanyakumari' },
  { id: 27, name: 'Hotel Temple Citi', area: 'West Car Street, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Temple+Citi+West+Car+Street,+Kanyakumari' },
  { id: 28, name: 'Hotel Sivamurugan', area: 'North Car Street, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Sivamurugan+North+Car+Street,+Kanyakumari' },
  { id: 29, name: 'Hotel Tamil Nadu – TTDC', area: 'Lighthouse Road, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Tamil+Nadu+–+TTDC+Lighthouse+Road,+Kanyakumari' },
  { id: 30, name: 'Hotel Wins', area: 'Vivekanandapuram, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Wins+Vivekanandapuram,+Kanyakumari' },
  { id: 31, name: 'Thiraviam Tourist Home', area: 'North Street, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Thiraviam+Tourist+Home+North+Street,+Kanyakumari' },
  { id: 32, name: 'Mayurah Illam', area: 'South Kundal, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Mayurah+Illam+South+Kundal,+Kanyakumari' },
  { id: 33, name: 'VLS Holiday Home', area: 'South Kundal, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=VLS+Holiday+Home+South+Kundal,+Kanyakumari' },
  { id: 34, name: 'Shell Park Heritage Homestay', area: 'South Kundal, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Shell+Park+Heritage+Homestay+South+Kundal,+Kanyakumari' },
  { id: 35, name: 'Anantya by the Lake', area: 'Chittar Lake area', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Anantya+by+the+Lake+Chittar+Lake+area' },
  { id: 36, name: 'Hotel Sangam', area: 'Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Sangam+Kanyakumari' },
  { id: 37, name: 'The Gopinivas Grand', area: 'East Car Street, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=The+Gopinivas+Grand+East+Car+Street,+Kanyakumari' },
  { id: 38, name: 'Ramraj Resort', area: 'Sunset Point, Kovalam Road, Kanyakumari', description: 'Address/area listing; confirm the exact branch, facilities and availability before booking.', map: 'https://www.google.com/maps/search/?api=1&query=Ramraj+Resort+Sunset+Point,+Kovalam+Road,+Kanyakumari' }
];

export type Restaurant = {
  id: number;
  name: string;
  area: string;
  cuisine: string;
  description: string;
  map: string;
};

export const restaurants: Restaurant[] = [
  { id: 1, name: 'Sea View Restaurant', area: 'East Car Street, Kanyakumari', cuisine: 'Indian and seafood', description: 'A multi-cuisine restaurant near the main seafront sightseeing area.', map: 'https://www.google.com/maps/search/?api=1&query=Sea+View+Restaurant+Kanyakumari' },
  { id: 2, name: 'Zam Zam Restaurant', area: 'Cape Road, Kanyakumari', cuisine: 'Indian and biryani', description: 'A local dining option serving Indian dishes and biryani.', map: 'https://www.google.com/maps/search/?api=1&query=Zam+Zam+Restaurant+Kanyakumari' },
  { id: 3, name: 'The Curry', area: 'East Car Street, Kanyakumari', cuisine: 'Multi-cuisine', description: 'A multi-cuisine restaurant in the central seafront area.', map: 'https://www.google.com/maps/search/?api=1&query=The+Curry+Kanyakumari' },
  { id: 4, name: 'Sree Punjabi Dhaba', area: 'South Car Street, Kanyakumari', cuisine: 'Punjabi and North Indian vegetarian', description: 'A vegetarian dining option for North Indian and Punjabi-style food.', map: 'https://www.google.com/maps/search/?api=1&query=Sree+Punjabi+Dhaba+Kanyakumari' },
  { id: 5, name: 'The Ocean Restaurant', area: 'Kanyakumari', cuisine: 'Multi-cuisine and vegetarian', description: 'A restaurant in the Seashore Group of hotels, near the Triveni Sangam area.', map: 'https://www.google.com/maps/search/?api=1&query=The+Ocean+Restaurant+Kanyakumari' },
  { id: 6, name: 'Saravana Restaurant', area: 'Near Bhagavathi Amman Temple, Kanyakumari', cuisine: 'South Indian vegetarian', description: 'A vegetarian restaurant close to the Bhagavathi Amman Temple area.', map: 'https://www.google.com/maps/search/?api=1&query=Saravana+Restaurant+Kanyakumari' },
  { id: 7, name: 'Hotel Annapoorna', area: 'Sannathi Street, Kanyakumari', cuisine: 'South Indian vegetarian', description: 'A South Indian vegetarian dining option near the beach and temple area.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Annapoorna+Kanyakumari' },
  { id: 8, name: 'Srikrishna Restaurant', area: 'Sannathi Street, Kanyakumari', cuisine: 'South Indian and vegetarian', description: 'A local restaurant mentioned among popular tourist dining choices.', map: 'https://www.google.com/maps/search/?api=1&query=Srikrishna+Restaurant+Kanyakumari' },
  { id: 9, name: 'Sangam Restaurant', area: 'Kanyakumari', cuisine: 'Indian and seafood', description: 'A restaurant option in the Kanyakumari coastal dining area.', map: 'https://www.google.com/maps/search/?api=1&query=Sangam+Restaurant+Kanyakumari' },
  { id: 10, name: 'The Cove House', area: 'Amaari Beach Resort, Kovalam Road', cuisine: 'Multi-cuisine', description: 'The restaurant at Amaari Beach Resort, with an ocean-view setting.', map: 'https://www.google.com/maps/search/?api=1&query=The+Cove+House+Amaari+Kanyakumari' },
  { id: 11, name: 'Hotel Chitra Pure Vegetarian Restaurant', area: 'Vivekanandapuram, Kanyakumari', cuisine: 'Pure vegetarian', description: 'A simple vegetarian dining option in the Vivekananda Kendra area.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Chitra+Pure+Vegetarian+Restaurant+Kanyakumari' },
  { id: 12, name: 'Suchindrum Maruthi Hotel', area: 'East Car Street, Kanyakumari', cuisine: 'South Indian vegetarian', description: 'A traditional vegetarian restaurant in the East Car Street area.', map: 'https://www.google.com/maps/search/?api=1&query=Suchindrum+Maruthi+Hotel+Kanyakumari' },
  { id: 13, name: 'Arya Bhavan', area: 'Court Road, Nagercoil', cuisine: 'South Indian and North Indian vegetarian', description: 'A well-known vegetarian restaurant in Nagercoil, within Kanyakumari district.', map: 'https://www.google.com/maps/search/?api=1&query=Arya+Bhavan+Nagercoil' },
  { id: 14, name: 'Irani Restaurant', area: 'Kanyakumari district; exact branch to confirm', cuisine: 'Multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Irani+Restaurant+Kanyakumari+district;+exact+branch+to+confirm' },
  { id: 15, name: 'Barsha Multicuisine', area: 'Neyyoor area', cuisine: 'Multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Barsha+Multicuisine+Neyyoor+area' },
  { id: 16, name: 'Hotel Daawat', area: 'Pammam, Marthandam', cuisine: 'Multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Daawat+Pammam,+Marthandam' },
  { id: 17, name: 'Grand Festive Cafe', area: 'Udayar Vilai, Colachel', cuisine: 'Cafe and multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Grand+Festive+Cafe+Udayar+Vilai,+Colachel' },
  { id: 18, name: 'Hotel Arya Bhavan', area: 'Sannathi Street, Kanyakumari', cuisine: 'South Indian vegetarian', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Arya+Bhavan+Sannathi+Street,+Kanyakumari' },
  { id: 19, name: 'Hotel Taj', area: 'Kanyakumari; exact branch to confirm', cuisine: 'Indian', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Taj+Kanyakumari;+exact+branch+to+confirm' },
  { id: 20, name: 'Akshaya A/C', area: 'K.P. Road, near Chettikulam Junction, Nagercoil', cuisine: 'Multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Akshaya+A/C+K.P.+Road,+near+Chettikulam+Junction,+Nagercoil' },
  { id: 21, name: 'American Fried Chicken', area: 'APPTA Market area, Nagercoil', cuisine: 'Fast food', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=American+Fried+Chicken+APPTA+Market+area,+Nagercoil' },
  { id: 22, name: 'Bangs', area: 'Rajas Mall, Chettikulam Junction, Nagercoil', cuisine: 'Fast food', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Bangs+Rajas+Mall,+Chettikulam+Junction,+Nagercoil' },
  { id: 23, name: 'Divines International', area: 'Market Road, Marthandam', cuisine: 'Multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Divines+International+Market+Road,+Marthandam' },
  { id: 24, name: 'People Hotel', area: 'Balamore Road, Nagercoil', cuisine: 'Indian', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=People+Hotel+Balamore+Road,+Nagercoil' },
  { id: 25, name: 'Seema Restaurant', area: 'Asambu Road, Vadasery, Nagercoil', cuisine: 'Indian', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Seema+Restaurant+Asambu+Road,+Vadasery,+Nagercoil' },
  { id: 26, name: 'Sree Guru Non Veg Hotel', area: 'Kattapomman Junction, Nagercoil', cuisine: 'Non-vegetarian', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Sree+Guru+Non+Veg+Hotel+Kattapomman+Junction,+Nagercoil' },
  { id: 27, name: 'Oasis Family Restaurant', area: 'Trivandrum Main Road, Kattathurai', cuisine: 'Multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Oasis+Family+Restaurant+Trivandrum+Main+Road,+Kattathurai' },
  { id: 28, name: 'J.R. Restaurant', area: 'Chellamkonam Road, Karungal', cuisine: 'Indian', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=J.R.+Restaurant+Chellamkonam+Road,+Karungal' },
  { id: 29, name: "King's Chic Multi-Cuisine", area: 'Kottar–Parvathipuram Road, Nagercoil', cuisine: 'Multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Kings+Chic+Multi-Cuisine+Kottar–Parvathipuram+Road,+Nagercoil' },
  { id: 30, name: 'Drizzle Bistro', area: 'Duthie School Junction, Nagercoil', cuisine: 'Cafe and multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Drizzle+Bistro+Duthie+School+Junction,+Nagercoil' },
  { id: 31, name: 'Odel Digest Restaurant', area: 'Court Road, Nagercoil', cuisine: 'Multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Odel+Digest+Restaurant+Court+Road,+Nagercoil' },
  { id: 32, name: 'Sanoora Restaurant', area: 'SP Mall Food Court, M.S. Road, Nagercoil', cuisine: 'Multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Sanoora+Restaurant+SP+Mall+Food+Court,+M.S.+Road,+Nagercoil' },
  { id: 33, name: 'The Chettinad', area: 'Distillery Road, Vadasery, Nagercoil', cuisine: 'Chettinad', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=The+Chettinad+Distillery+Road,+Vadasery,+Nagercoil' },
  { id: 34, name: 'Hotel Mani Bhavan', area: 'Thalavai Street, Meenakshipuram, Nagercoil', cuisine: 'South Indian vegetarian', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Hotel+Mani+Bhavan+Thalavai+Street,+Meenakshipuram,+Nagercoil' },
  { id: 35, name: 'Marry Brown – Grand Food Mall', area: 'Beach Road Junction, Nagercoil', cuisine: 'Fast food', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Marry+Brown+–+Grand+Food+Mall+Beach+Road+Junction,+Nagercoil' },
  { id: 36, name: 'Paanchali Restaurant', area: 'Pammam, Marthandam', cuisine: 'Indian', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Paanchali+Restaurant+Pammam,+Marthandam' },
  { id: 37, name: 'Chitra Restaurant', area: 'Unnamalaikadai area', cuisine: 'Indian', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Chitra+Restaurant+Unnamalaikadai+area' },
  { id: 38, name: 'Mubarak Family Restaurant', area: 'Marthandam area', cuisine: 'Multi-cuisine', description: 'Address/area listing; confirm the exact branch and current details before visiting.', map: 'https://www.google.com/maps/search/?api=1&query=Mubarak+Family+Restaurant+Marthandam+area' }
];
