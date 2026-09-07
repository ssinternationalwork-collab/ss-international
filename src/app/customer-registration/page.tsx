'use client';
import { useState, useRef } from 'react';

type EntityType = 'Proprietorship' | 'Partnership' | 'LLP' | 'Pvt Ltd' | 'Public Ltd' | 'Government Organization' | 'PSU' | 'Other' | '';
type Dept = 'Purchase' | 'Director' | 'Accounts';
interface POC { name: string; contact: string; email: string; }

const INDUSTRIES = ['Automobile', 'Railways', 'Metro', 'STU (State Transport Undertaking)', 'Bus Body', 'Defence', 'Construction & Infrastructure', 'Architecture', 'Aluminium Sections', 'Electrical', 'Earth Movers', 'HVAC', 'Marine & Shipping', 'Industrial Machinery', 'Engineering', 'Rubber', 'Packaging', 'OEM', 'Government / PSU', 'Other'];

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwhtyuEm0feVEcdFCTGDoC-XWK4bvV0eQd6PXrKKARHYDhnDOeP75bD8CEVZrFY6Xi0/exec';
const DRIVE_FOLDER_ID = '1KfblW_z5y86yK1sKuFmMGpLm0LNeSM-B';

const COUNTRY_CODES = [
  { code: '+91', flag: '🇮🇳', name: 'India', digits: 10 },
  { code: '+93', flag: '🇦🇫', name: 'Afghanistan', digits: 9 },
  { code: '+355', flag: '🇦🇱', name: 'Albania', digits: 9 },
  { code: '+213', flag: '🇩🇿', name: 'Algeria', digits: 9 },
  { code: '+376', flag: '🇦🇩', name: 'Andorra', digits: 9 },
  { code: '+244', flag: '🇦🇴', name: 'Angola', digits: 9 },
  { code: '+54', flag: '🇦🇷', name: 'Argentina', digits: 10 },
  { code: '+374', flag: '🇦🇲', name: 'Armenia', digits: 8 },
  { code: '+61', flag: '🇦🇺', name: 'Australia', digits: 9 },
  { code: '+43', flag: '🇦🇹', name: 'Austria', digits: 10 },
  { code: '+994', flag: '🇦🇿', name: 'Azerbaijan', digits: 9 },
  { code: '+973', flag: '🇧🇭', name: 'Bahrain', digits: 8 },
  { code: '+880', flag: '🇧🇩', name: 'Bangladesh', digits: 10 },
  { code: '+375', flag: '🇧🇾', name: 'Belarus', digits: 9 },
  { code: '+32', flag: '🇧🇪', name: 'Belgium', digits: 9 },
  { code: '+229', flag: '🇧🇯', name: 'Benin', digits: 8 },
  { code: '+975', flag: '🇧🇹', name: 'Bhutan', digits: 8 },
  { code: '+591', flag: '🇧🇴', name: 'Bolivia', digits: 8 },
  { code: '+387', flag: '🇧🇦', name: 'Bosnia', digits: 8 },
  { code: '+55', flag: '🇧🇷', name: 'Brazil', digits: 11 },
  { code: '+673', flag: '🇧🇳', name: 'Brunei', digits: 7 },
  { code: '+359', flag: '🇧🇬', name: 'Bulgaria', digits: 9 },
  { code: '+855', flag: '🇰🇭', name: 'Cambodia', digits: 9 },
  { code: '+237', flag: '🇨🇲', name: 'Cameroon', digits: 9 },
  { code: '+1', flag: '🇨🇦', name: 'Canada', digits: 10 },
  { code: '+56', flag: '🇨🇱', name: 'Chile', digits: 9 },
  { code: '+86', flag: '🇨🇳', name: 'China', digits: 11 },
  { code: '+57', flag: '🇨🇴', name: 'Colombia', digits: 10 },
  { code: '+243', flag: '🇨🇩', name: 'Congo', digits: 9 },
  { code: '+506', flag: '🇨🇷', name: 'Costa Rica', digits: 8 },
  { code: '+385', flag: '🇭🇷', name: 'Croatia', digits: 9 },
  { code: '+53', flag: '🇨🇺', name: 'Cuba', digits: 8 },
  { code: '+357', flag: '🇨🇾', name: 'Cyprus', digits: 8 },
  { code: '+420', flag: '🇨🇿', name: 'Czech Republic', digits: 9 },
  { code: '+45', flag: '🇩🇰', name: 'Denmark', digits: 8 },
  { code: '+593', flag: '🇪🇨', name: 'Ecuador', digits: 9 },
  { code: '+20', flag: '🇪🇬', name: 'Egypt', digits: 10 },
  { code: '+503', flag: '🇸🇻', name: 'El Salvador', digits: 8 },
  { code: '+372', flag: '🇪🇪', name: 'Estonia', digits: 8 },
  { code: '+251', flag: '🇪🇹', name: 'Ethiopia', digits: 9 },
  { code: '+358', flag: '🇫🇮', name: 'Finland', digits: 10 },
  { code: '+33', flag: '🇫🇷', name: 'France', digits: 9 },
  { code: '+241', flag: '🇬🇦', name: 'Gabon', digits: 7 },
  { code: '+995', flag: '🇬🇪', name: 'Georgia', digits: 9 },
  { code: '+49', flag: '🇩🇪', name: 'Germany', digits: 11 },
  { code: '+233', flag: '🇬🇭', name: 'Ghana', digits: 9 },
  { code: '+30', flag: '🇬🇷', name: 'Greece', digits: 10 },
  { code: '+502', flag: '🇬🇹', name: 'Guatemala', digits: 8 },
  { code: '+504', flag: '🇭🇳', name: 'Honduras', digits: 8 },
  { code: '+36', flag: '🇭🇺', name: 'Hungary', digits: 9 },
  { code: '+354', flag: '🇮🇸', name: 'Iceland', digits: 7 },
  { code: '+62', flag: '🇮🇩', name: 'Indonesia', digits: 11 },
  { code: '+98', flag: '🇮🇷', name: 'Iran', digits: 10 },
  { code: '+964', flag: '🇮🇶', name: 'Iraq', digits: 10 },
  { code: '+353', flag: '🇮🇪', name: 'Ireland', digits: 9 },
  { code: '+972', flag: '🇮🇱', name: 'Israel', digits: 9 },
  { code: '+39', flag: '🇮🇹', name: 'Italy', digits: 10 },
  { code: '+225', flag: '🇨🇮', name: 'Ivory Coast', digits: 8 },
  { code: '+81', flag: '🇯🇵', name: 'Japan', digits: 11 },
  { code: '+962', flag: '🇯🇴', name: 'Jordan', digits: 9 },
  { code: '+7', flag: '🇰🇿', name: 'Kazakhstan', digits: 10 },
  { code: '+254', flag: '🇰🇪', name: 'Kenya', digits: 9 },
  { code: '+82', flag: '🇰🇷', name: 'South Korea', digits: 10 },
  { code: '+965', flag: '🇰🇼', name: 'Kuwait', digits: 8 },
  { code: '+996', flag: '🇰🇬', name: 'Kyrgyzstan', digits: 9 },
  { code: '+856', flag: '🇱🇦', name: 'Laos', digits: 9 },
  { code: '+371', flag: '🇱🇻', name: 'Latvia', digits: 8 },
  { code: '+961', flag: '🇱🇧', name: 'Lebanon', digits: 8 },
  { code: '+218', flag: '🇱🇾', name: 'Libya', digits: 9 },
  { code: '+370', flag: '🇱🇹', name: 'Lithuania', digits: 8 },
  { code: '+352', flag: '🇱🇺', name: 'Luxembourg', digits: 9 },
  { code: '+60', flag: '🇲🇾', name: 'Malaysia', digits: 9 },
  { code: '+960', flag: '🇲🇻', name: 'Maldives', digits: 7 },
  { code: '+223', flag: '🇲🇱', name: 'Mali', digits: 8 },
  { code: '+356', flag: '🇲🇹', name: 'Malta', digits: 8 },
  { code: '+52', flag: '🇲🇽', name: 'Mexico', digits: 10 },
  { code: '+373', flag: '🇲🇩', name: 'Moldova', digits: 8 },
  { code: '+976', flag: '🇲🇳', name: 'Mongolia', digits: 8 },
  { code: '+212', flag: '🇲🇦', name: 'Morocco', digits: 9 },
  { code: '+258', flag: '🇲🇿', name: 'Mozambique', digits: 9 },
  { code: '+95', flag: '🇲🇲', name: 'Myanmar', digits: 9 },
  { code: '+264', flag: '🇳🇦', name: 'Namibia', digits: 9 },
  { code: '+977', flag: '🇳🇵', name: 'Nepal', digits: 10 },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands', digits: 9 },
  { code: '+64', flag: '🇳🇿', name: 'New Zealand', digits: 9 },
  { code: '+234', flag: '🇳🇬', name: 'Nigeria', digits: 10 },
  { code: '+47', flag: '🇳🇴', name: 'Norway', digits: 8 },
  { code: '+968', flag: '🇴🇲', name: 'Oman', digits: 8 },
  { code: '+92', flag: '🇵🇰', name: 'Pakistan', digits: 10 },
  { code: '+507', flag: '🇵🇦', name: 'Panama', digits: 8 },
  { code: '+595', flag: '🇵🇾', name: 'Paraguay', digits: 9 },
  { code: '+51', flag: '🇵🇪', name: 'Peru', digits: 9 },
  { code: '+63', flag: '🇵🇭', name: 'Philippines', digits: 10 },
  { code: '+48', flag: '🇵🇱', name: 'Poland', digits: 9 },
  { code: '+351', flag: '🇵🇹', name: 'Portugal', digits: 9 },
  { code: '+974', flag: '🇶🇦', name: 'Qatar', digits: 8 },
  { code: '+40', flag: '🇷🇴', name: 'Romania', digits: 10 },
  { code: '+7', flag: '🇷🇺', name: 'Russia', digits: 10 },
  { code: '+250', flag: '🇷🇼', name: 'Rwanda', digits: 9 },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia', digits: 9 },
  { code: '+221', flag: '🇸🇳', name: 'Senegal', digits: 9 },
  { code: '+381', flag: '🇷🇸', name: 'Serbia', digits: 9 },
  { code: '+65', flag: '🇸🇬', name: 'Singapore', digits: 8 },
  { code: '+421', flag: '🇸🇰', name: 'Slovakia', digits: 9 },
  { code: '+386', flag: '🇸🇮', name: 'Slovenia', digits: 8 },
  { code: '+27', flag: '🇿🇦', name: 'South Africa', digits: 9 },
  { code: '+34', flag: '🇪🇸', name: 'Spain', digits: 9 },
  { code: '+94', flag: '🇱🇰', name: 'Sri Lanka', digits: 9 },
  { code: '+249', flag: '🇸🇩', name: 'Sudan', digits: 9 },
  { code: '+46', flag: '🇸🇪', name: 'Sweden', digits: 9 },
  { code: '+41', flag: '🇨🇭', name: 'Switzerland', digits: 9 },
  { code: '+963', flag: '🇸🇾', name: 'Syria', digits: 9 },
  { code: '+886', flag: '🇹🇼', name: 'Taiwan', digits: 9 },
  { code: '+992', flag: '🇹🇯', name: 'Tajikistan', digits: 9 },
  { code: '+255', flag: '🇹🇿', name: 'Tanzania', digits: 9 },
  { code: '+66', flag: '🇹🇭', name: 'Thailand', digits: 9 },
  { code: '+216', flag: '🇹🇳', name: 'Tunisia', digits: 8 },
  { code: '+90', flag: '🇹🇷', name: 'Turkey', digits: 10 },
  { code: '+993', flag: '🇹🇲', name: 'Turkmenistan', digits: 8 },
  { code: '+256', flag: '🇺🇬', name: 'Uganda', digits: 9 },
  { code: '+380', flag: '🇺🇦', name: 'Ukraine', digits: 9 },
  { code: '+971', flag: '🇦🇪', name: 'UAE', digits: 9 },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom', digits: 10 },
  { code: '+1', flag: '🇺🇸', name: 'USA', digits: 10 },
  { code: '+598', flag: '🇺🇾', name: 'Uruguay', digits: 8 },
  { code: '+998', flag: '🇺🇿', name: 'Uzbekistan', digits: 9 },
  { code: '+58', flag: '🇻🇪', name: 'Venezuela', digits: 10 },
  { code: '+84', flag: '🇻🇳', name: 'Vietnam', digits: 10 },
  { code: '+967', flag: '🇾🇪', name: 'Yemen', digits: 9 },
  { code: '+260', flag: '🇿🇲', name: 'Zambia', digits: 9 },
  { code: '+263', flag: '🇿🇼', name: 'Zimbabwe', digits: 9 },
];

const STATES = [
  'Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh',
  'Chhattisgarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Goa','Gujarat','Haryana',
  'Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Ladakh',
  'Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
  'Odisha','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura',
  'Uttar Pradesh','Uttarakhand','West Bengal','Other'
];

const STATE_CITIES: Record<string, string[]> = {
  'Andhra Pradesh': ['Visakhapatnam (Vizag)','Vijayawada','Guntur','Nellore','Kurnool','Kadapa (YSR)','Anantapur','Kakinada','Rajahmundry','Tirupati','Chittoor','Eluru','Ongole','Srikakulam','Vizianagaram','Machilipatnam','Other'],
  'Punjab': ['Ludhiana','Amritsar','Jalandhar','Patiala','Bathinda','Mohali (SAS Nagar)','Hoshiarpur','Pathankot','Moga','Barnala','Faridkot','Fatehgarh Sahib','Fazilka','Ferozepur','Gurdaspur','Kapurthala','Malerkotla','Mansa','Sri Muktsar Sahib','Rupnagar','Sangrur','Nawanshahr (SBS Nagar)','Tarn Taran','Other'],
  'Haryana': ['Gurugram (Gurgaon)','Faridabad','Panipat','Ambala','Sonipat','Rohtak','Hisar','Karnal','Panchkula','Yamunanagar','Bhiwani','Kaithal','Kurukshetra','Rewari','Jhajjar','Jind','Fatehabad','Sirsa','Palwal','Charkhi Dadri','Mahendragarh','Nuh (Mewat)','Other'],
  'Uttar Pradesh': ['Lucknow','Kanpur','Agra','Varanasi (Banaras)','Meerut','Ghaziabad','Noida (Gautam Buddha Nagar)','Prayagraj (Allahabad)','Bareilly','Aligarh','Moradabad','Saharanpur','Gorakhpur','Firozabad','Jhansi','Muzaffarnagar','Mathura','Rampur','Shahjahanpur','Bagpat','Ayodhya','Basti','Ballia','Barabanki','Bijnor','Budaun','Bulandshahr','Chandauli','Deoria','Etah','Etawah','Faizabad','Farrukhabad','Fatehpur','Hapur','Hardoi','Hathras','Jaunpur','Kannauj','Lakhimpur Kheri','Mainpuri','Mau','Mirzapur','Pilibhit','Pratapgarh','Raebareli','Sitapur','Sultanpur','Unnao','Other'],
  'Maharashtra': ['Mumbai','Pune','Nagpur','Nashik','Aurangabad (Chhatrapati Sambhajinagar)','Solapur','Kolhapur','Thane','Navi Mumbai','Amravati','Nanded','Sangli','Satara','Ahmednagar','Akola','Latur','Dhule','Jalgaon','Chandrapur','Parbhani','Ratnagiri','Beed','Buldhana','Gondia','Hingoli','Jalna','Nandurbar','Osmanabad','Palghar','Raigad','Sindhudurg','Wardha','Washim','Yavatmal','Bhandara','Gadchiroli','Other'],
  'Karnataka': ['Bengaluru (Bangalore)','Mysuru (Mysore)','Mangaluru (Mangalore)','Hubli-Dharwad','Belagavi (Belgaum)','Kalaburagi (Gulbarga)','Ballari (Bellary)','Davanagere','Shivamogga (Shimoga)','Tumakuru (Tumkur)','Udupi','Bidar','Hassan','Chikkamagaluru','Vijayapura (Bijapur)','Raichur','Kolar','Mandya','Chitradurga','Koppal','Gadag','Haveri','Yadgir','Chamarajanagar','Chikkaballapur','Kodagu (Coorg)','Ramanagara','Bagalkot','Dakshina Kannada','Uttara Kannada','Other'],
  'Gujarat': ['Ahmedabad','Surat','Vadodara','Rajkot','Bhavnagar','Jamnagar','Junagadh','Gandhinagar','Anand','Nadiad','Mehsana','Bharuch','Navsari','Morbi','Porbandar','Valsad','Gandhidham','Palanpur','Godhra','Patan','Amreli','Botad','Dahod','Kutch (Bhuj)','Panchmahal','Sabarkantha','Surendranagar','Tapi','Vapi','Other'],
  'Tamil Nadu': ['Chennai','Coimbatore','Madurai','Tiruchirappalli (Trichy)','Salem','Tirunelveli','Erode','Vellore','Thoothukudi (Tuticorin)','Thanjavur','Kanchipuram','Kanyakumari (Nagercoil)','Ooty (Nilgiris)','Karur','Dindigul','Cuddalore','Namakkal','Ariyalur','Perambalur','Pudukkottai','Ramanathapuram','Sivaganga','Theni','Tiruppur','Tiruvallur','Tiruvannamalai','Tiruvarur','Viluppuram','Virudhunagar','Krishnagiri','Dharmapuri','Nagapattinam','Other'],
  'West Bengal': ['Kolkata','Howrah','Durgapur','Siliguri','Asansol','Bardhaman (Burdwan)','Malda','Kharagpur','Darjeeling','Jalpaiguri','Cooch Behar','Nadia (Krishnanagar)','Murshidabad (Berhampore)','Purulia','Bankura','Birbhum (Suri)','Alipurduar','Hooghly (Chinsurah)','Other'],
  'Rajasthan': ['Jaipur','Jodhpur','Udaipur','Kota','Bikaner','Ajmer','Bhilwara','Alwar','Bharatpur','Sikar','Sri Ganganagar','Pali','Barmer','Churu','Nagaur','Jaisalmer','Mount Abu (Sirohi)','Other'],
  'Madhya Pradesh': ['Bhopal','Indore','Jabalpur','Gwalior','Ujjain','Sagar','Dewas','Satna','Ratlam','Rewa','Katni','Singrauli','Khandwa','Chhindwara','Vidisha','Guna','Shivpuri','Damoh','Other'],
  'Bihar': ['Patna','Gaya','Bhagalpur','Muzaffarpur','Darbhanga','Purnia','Ara (Bhojpur)','Begusarai','Katihar','Munger','Chapra (Saran)','Saharsa','Nalanda (Bihar Sharif)','Samastipur','Motihari','Siwan','Other'],
  'Kerala': ['Thiruvananthapuram','Kochi','Ernakulam','Kozhikode (Calicut)','Thrissur','Kollam','Palakkad','Alappuzha (Alleppey)','Kannur','Kottayam','Malappuram','Kasaragod','Pathanamthitta','Idukki','Wayanad','Munnar','Other'],
  'Odisha': ['Bhubaneswar','Cuttack','Rourkela','Berhampur','Sambalpur','Puri','Balasore','Bhadrak','Baripada','Angul','Jharsuguda','Koraput','Other'],
  'Telangana': ['Hyderabad','Warangal','Nizamabad','Karimnagar','Khammam','Mahbubnagar','Nalgonda','Adilabad','Secunderabad','Siddipet','Suryapet','Sangareddy','Rangareddy','Medak','Other'],
  'Chhattisgarh': ['Balod','Baloda Bazar','Balrampur','Bastar','Bemetara','Bijapur','Bilaspur','Dantewada','Dhamtari','Durg','Gariaband','Gaurela-Pendra-Marwahi','Janjgir-Champa','Jashpur','Kabirdham','Kanker','Kondagaon','Korba','Koriya','Mahasamund','Mungeli','Narayanpur','Raigarh','Raipur','Rajnandgaon','Sukma','Surajpur','Surguja','Other'],
  'Jharkhand': ['Bokaro','Chatra','Deoghar','Dhanbad','Dumka','East Singhbhum','Garhwa','Giridih','Godda','Gumla','Hazaribagh','Jamtara','Khunti','Koderma','Latehar','Lohardaga','Pakur','Palamu','Ramgarh','Ranchi','Sahibganj','Seraikela-Kharsawan','Simdega','West Singhbhum','Other'],
  'Assam': ['Guwahati','Dibrugarh','Silchar','Jorhat','Nagaon','Tinsukia','Tezpur','Karimganj','Barpeta','Golaghat','Sivasagar','Bongaigaon','Diphu','Other'],
  'Himachal Pradesh': ['Bilaspur','Chamba','Hamirpur','Kangra','Kinnaur','Kullu','Lahaul and Spiti','Mandi','Shimla','Sirmaur','Solan','Una','Other'],
  'Uttarakhand': ['Almora','Bageshwar','Chamoli','Champawat','Dehradun','Haridwar','Nainital','Pauri Garhwal','Pithoragarh','Rudraprayag','Tehri Garhwal','Udham Singh Nagar','Uttarkashi','Other'],
  'Delhi': ['Central Delhi','East Delhi','New Delhi','North Delhi','North East Delhi','North West Delhi','Shahdara','South Delhi','South East Delhi','South West Delhi','West Delhi','Other'],
  'Jammu and Kashmir': ['Anantnag','Bandipora','Baramulla','Budgam','Doda','Ganderbal','Jammu','Kathua','Kishtwar','Kulgam','Kupwara','Poonch','Pulwama','Rajouri','Ramban','Reasi','Samba','Shopian','Srinagar','Udhampur','Other'],
  'Ladakh': ['Kargil','Leh','Other'],
  'Goa': ['North Goa','South Goa','Other'],
  'Manipur': ['Bishnupur','Chandel','Churachandpur','Imphal East','Imphal West','Jiribam','Kakching','Kamjong','Kangpokpi','Noney','Pherzawl','Senapati','Tamenglong','Tengnoupal','Thoubal','Ukhrul','Other'],
  'Meghalaya': ['East Garo Hills','East Jaintia Hills','East Khasi Hills','North Garo Hills','Ri Bhoi','South Garo Hills','South West Garo Hills','South West Khasi Hills','West Garo Hills','West Jaintia Hills','West Khasi Hills','Other'],
  'Mizoram': ['Aizawl','Champhai','Hnahthial','Khawzawl','Kolasib','Lawngtlai','Lunglei','Mamit','Saitual','Serchhip','Siaha','Other'],
  'Nagaland': ['Dimapur','Kiphire','Kohima','Longleng','Mokokchung','Mon','Noklak','Peren','Phek','Tuensang','Wokha','Zunheboto','Other'],
  'Tripura': ['Dhalai','Gomati','Khowai','North Tripura','Sepahijala','South Tripura','Unakoti','West Tripura','Other'],
  'Sikkim': ['East Sikkim','North Sikkim','South Sikkim','West Sikkim','Other'],
  'Arunachal Pradesh': ['Anjaw','Changlang','Dibang Valley','East Kameng','East Siang','Kamle','Kra Daadi','Kurung Kumey','Lepa Rada','Lohit','Longding','Lower Dibang Valley','Lower Siang','Lower Subansiri','Namsai','Pakke Kessang','Papum Pare','Shi Yomi','Siang','Tawang','Tirap','Upper Siang','Upper Subansiri','West Kameng','West Siang','Other'],
  'Chandigarh': ['Chandigarh','Other'],
  'Puducherry': ['Karaikal','Mahe','Puducherry','Yanam','Other'],
  'Andaman and Nicobar Islands': ['Nicobar','North and Middle Andaman','South Andaman','Other'],
  'Dadra and Nagar Haveli and Daman and Diu': ['Dadra and Nagar Haveli','Daman','Diu','Other'],
  'Lakshadweep': ['Lakshadweep','Other'],
  'Other': ['Other'],
};

const NAVY = '#1B3A6B';
const BLUE = '#1B91FF';
const BG_IMG = 'https://images.pexels.com/photos/4963445/pexels-photo-4963445.jpeg';

const inp: React.CSSProperties = { width: '100%', padding: '11px 14px', border: '1px solid #ddd', borderRadius: 8, fontSize: 15, color: '#141414', outline: 'none', fontFamily: 'var(--font-inter)', background: '#fff', boxSizing: 'border-box', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' };
const inpErr: React.CSSProperties = { ...inp, border: '1px solid #e53935', background: '#fff8f8' };
const sel: React.CSSProperties = { ...inp, appearance: 'none' as const, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: 32 };
const errTxt: React.CSSProperties = { fontSize: 11, color: '#e53935', marginTop: 3, fontFamily: 'var(--font-inter)' };
const fileBtn: React.CSSProperties = { padding: '8px 14px', background: NAVY, border: 'none', borderRadius: 8, color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' as const, fontFamily: 'var(--font-inter)', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.12)' };
const fileDone: React.CSSProperties = { ...fileBtn, background: '#16a34a' };

function Radio({ label, checked, onClick }: { label: string; checked: boolean; onClick: () => void }) {
  return (
    <label onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: '#333', fontFamily: 'var(--font-inter)', padding: '6px 0' }}>
      <span style={{ width: 17, height: 17, borderRadius: '50%', border: '2px solid ' + (checked ? BLUE : '#bbb'), background: checked ? BLUE : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        {checked && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', display: 'block' }} />}
      </span>
      {label}
    </label>
  );
}

function UploadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/>
      <line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  );
}

function FileInput({ id, done, onDone, onError, label = 'Attach File' }: { id: string; done: boolean; onDone: (file: File) => void; onError?: (msg: string) => void; label?: string }) {
  return (
    <>
      <input type="file" id={id} accept=".pdf,.jpg,.jpeg,.png" style={{ display: 'none' }} onChange={e => {
        const file = e.target.files?.[0];
        if (file) {
          if (file.size > 2 * 1024 * 1024) {
            onError?.('File size must not exceed 2 MB. Please choose a smaller file.');
            e.target.value = '';
            return;
          }
          onError?.('');
          onDone(file);
        }
      }} />
      <div onClick={() => document.getElementById(id)?.click()} style={done ? fileDone : fileBtn}>
        {done ? '✓ Uploaded' : <><UploadIcon />{label}</>}
      </div>
    </>
  );
}

export default function CustomerRegistrationPage() {
  const [regType, setRegType] = useState('');
  const [company, setCompany] = useState('');
  const [entity, setEntity] = useState<EntityType>('');
  const [trader, setTrader] = useState('');
  const [industries, setIndustries] = useState<string[]>([]);
  const [website, setWebsite] = useState('');
  const [regAddr, setRegAddr] = useState('');
  const [regState, setRegState] = useState('');
  const [regCity, setRegCity] = useState('');
  const [regPin, setRegPin] = useState('');
  const [sameAddr, setSameAddr] = useState(false);
  const [billAddr, setBillAddr] = useState('');
  const [billState, setBillState] = useState('');
  const [billCity, setBillCity] = useState('');
  const [billPin, setBillPin] = useState('');
  const [gst, setGst] = useState('');
  const [iec, setIec] = useState('');
  const [gstUp, setGstUp] = useState(false);
  const [iecUp, setIecUp] = useState(false);
  const [fileSizeError, setFileSizeError] = useState('');
  const [gstFile, setGstFile] = useState<File | null>(null);
  const [iecFile, setIecFile] = useState<File | null>(null);

  const [pocData, setPocData] = useState<Record<Dept, { name: string; countryCode: string; contact: string; email: string }>>({
    Purchase: { name: '', countryCode: '+91', contact: '', email: '' },
    Director: { name: '', countryCode: '+91', contact: '', email: '' },
    Accounts: { name: '', countryCode: '+91', contact: '', email: '' },
  });

  const [cb1, setCb1] = useState(false);
  const [cb2, setCb2] = useState(false);
  const [cb3, setCb3] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showModal, setShowModal] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [gstFileUrl, setGstFileUrl] = useState('');
  const [iecFileUrl, setIecFileUrl] = useState('');

  const e = (k: string) => errors[k];
  const clr = (k: string) => setErrors(p => { const n = { ...p }; delete n[k]; return n; });

  function toggleIndustry(ind: string) {
    setIndustries(prev => prev.includes(ind) ? prev.filter(i => i !== ind) : [...prev, ind]);
    clr('industry');
  }

  function handleSameAddr() {
    if (!sameAddr) {
      setSameAddr(true);
      setBillAddr(regAddr); setBillState(regState); setBillCity(regCity); setBillPin(regPin);
    } else {
      setSameAddr(false);
    }
  }

  function handleRegAddrChange(val: string) {
    setRegAddr(val);
    if (sameAddr) { setSameAddr(false); setBillAddr(''); setBillState(''); setBillCity(''); setBillPin(''); }
  }
  function handleRegStateChange(val: string) {
    setRegState(val); setRegCity(''); clr('regState');
    if (sameAddr) { setSameAddr(false); setBillAddr(''); setBillState(''); setBillCity(''); setBillPin(''); }
  }
  function handleRegCityChange(val: string) {
    setRegCity(val); clr('regCity');
    if (sameAddr) { setSameAddr(false); setBillAddr(''); setBillState(''); setBillCity(''); setBillPin(''); }
  }
  function handleRegPinChange(val: string) {
    setRegPin(val); clr('regPin');
    if (sameAddr) { setSameAddr(false); setBillAddr(''); setBillState(''); setBillCity(''); setBillPin(''); }
  }

  function getDigits(code: string) {
    return COUNTRY_CODES.find(c => c.code === code)?.digits || 10;
  }

  function updatePoc(dept: Dept, field: string, value: string) {
    setPocData(p => ({ ...p, [dept]: { ...p[dept], [field]: value } }));
    clr('poc_' + dept + '_' + field);
  }

  function validate() {
    const err: Record<string, string> = {};
    if (!regType) err.regType = 'Please select a registration type';
    if (!company.trim()) err.company = 'Required';
    if (!entity) err.entity = 'Required';
    if (!trader) err.trader = 'Required';
    if (industries.length === 0) err.industry = 'Select at least one industry';
    if (!regAddr.trim()) err.regAddr = 'Required';
    if (!regState) err.regState = 'Required';
    if (!regCity) err.regCity = 'Required';
    if (!regPin.trim()) err.regPin = 'Required';
    if (!sameAddr) {
      if (!billAddr.trim()) err.billAddr = 'Required';
      if (!billState) err.billState = 'Required';
      if (!billCity) err.billCity = 'Required';
      if (!billPin.trim()) err.billPin = 'Required';
    }
    if (gst.trim().length !== 15) err.gst = 'GST No. should be 15 characters';
    if (!gstUp) err.gstFile = 'Please upload the GST Registration Certificate';
    (['Purchase', 'Director', 'Accounts'] as Dept[]).forEach(dept => {
      if (!pocData[dept].name.trim()) err['poc_' + dept + '_name'] = 'Required';
      const digits = getDigits(pocData[dept].countryCode);
      if (!pocData[dept].contact.trim()) err['poc_' + dept + '_contact'] = 'Required';
      else if (pocData[dept].contact.replace(/\D/g, '').length !== digits) err['poc_' + dept + '_contact'] = `Enter exactly ${digits} digits`;
      if (!pocData[dept].email.trim() || !pocData[dept].email.includes('@')) err['poc_' + dept + '_email'] = 'Valid email required';
    });
    if (!cb2) err.cb2 = 'This declaration is mandatory';
    if (!cb3) err.cb3 = 'You must agree to the Privacy Policy';
    setErrors(err);
    return Object.keys(err).length === 0;
  }

  async function uploadFileToDrive(file: File, name: string): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async function(e) {
        const base64 = (e.target?.result as string).split(',')[1];
        try {
          const res = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'fileData=' + encodeURIComponent(JSON.stringify({ fileName: name + '_' + file.name, base64, mimeType: file.type, folderId: DRIVE_FOLDER_ID })),
          });
          const data = await res.json();
          resolve(data.url || '');
        } catch {
          resolve('');
        }
      };
      reader.readAsDataURL(file);
    });
  }

  async function handleSubmit() {
    setShowModal(false);
    setShowThanks(true);

    (async () => {
      const gstUrl = gstFile ? await uploadFileToDrive(gstFile, 'GST_' + company) : '';
      const iecUrl = iecFile ? await uploadFileToDrive(iecFile, 'IEC_' + company) : '';
      setGstFileUrl(gstUrl);
      setIecFileUrl(iecUrl);

      const payload = {
        regType, company, entity, trader,
        industry: industries.join(', '),
        website: website || 'N/A',
        regAddr: regAddr + ', ' + regState + ', ' + regCity,
        regState, regCity, regPin,
        billingAddress: sameAddr ? regAddr + ', ' + regState + ', ' + regCity + ' - ' + regPin + ' (Same as registered)' : billAddr + ', ' + billState + ', ' + billCity + ' - ' + billPin,
        gst, iec: iec || 'N/A',
        gstFileUrl: gstUrl,
        iecFileUrl: iecUrl,
        purchase_name: pocData.Purchase.name, purchase_contact: pocData.Purchase.countryCode + ' ' + pocData.Purchase.contact, purchase_email: pocData.Purchase.email,
        director_name: pocData.Director.name, director_contact: pocData.Director.countryCode + ' ' + pocData.Director.contact, director_email: pocData.Director.email,
        accounts_name: pocData.Accounts.name, accounts_contact: pocData.Accounts.countryCode + ' ' + pocData.Accounts.contact, accounts_email: pocData.Accounts.email,
        marketing: cb1 ? 'Yes' : 'No',
        declaration: 'Information is true to best of knowledge',
        privacy: cb3 ? 'Agreed' : 'No',
      };

      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = APPS_SCRIPT_URL;
      form.target = 'hidden_iframe';
      form.enctype = 'application/x-www-form-urlencoded';
      const input = document.createElement('input');
      input.type = 'hidden'; input.name = 'data'; input.value = JSON.stringify(payload);
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
      setTimeout(() => {
        if (document.body.contains(form)) document.body.removeChild(form);
        if (document.body.contains(iframe)) document.body.removeChild(iframe);
      }, 5000);
    })();
  }

  if (showThanks) return (
    <div style={{ minHeight: '100vh', background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 32, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(27,145,255,0.06)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(27,59,107,0.05)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 0 }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ width: '100%', height: 200, display: 'block' }}>
          <polygon points="0,200 0,120 200,60 400,100 600,30 800,80 1000,20 1200,70 1440,40 1440,200" fill="rgba(27,58,107,0.06)"/>
          <polygon points="0,200 0,140 180,90 360,130 560,70 760,110 960,55 1160,95 1440,65 1440,200" fill="rgba(27,58,107,0.08)"/>
          <polygon points="0,200 0,165 150,145 320,160 520,130 720,155 920,125 1120,148 1440,135 1440,200" fill="rgba(27,58,107,0.1)"/>
        </svg>
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <img src="/logo_ssi_full.png" alt="SSI" style={{ height: 142, width: 'auto', display: 'block', margin: '0 auto 24px' }} />
        <div style={{ fontSize: 'clamp(48px,7vw,80px)', fontWeight: 900, color: '#0d1b35', fontFamily: 'var(--font-barlow)', textTransform: 'uppercase', letterSpacing: '-3px', marginBottom: 16, lineHeight: 1 }}>THANK YOU</div>
        <div style={{ background: NAVY, color: '#fff', borderRadius: 28, padding: '14px 36px', fontSize: 15, fontWeight: 600, fontFamily: 'var(--font-inter)', marginBottom: 16, display: 'inline-block' }}>We will be in touch &amp; contact you soon</div>
        <div style={{ fontSize: 14, color: '#888', fontFamily: 'var(--font-inter)', marginBottom: 28 }}>Our team will review your application within 1–2 business days.</div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 24 }}>
          <a href='https://share.google/9QyRJyCJarsDpP9oP' target='_blank' rel='noopener noreferrer' style={{ width: 48, height: 48, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
            <svg width='22' height='22' viewBox='0 0 48 48'>
              <path fill='#FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/>
              <path fill='#FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/>
              <path fill='#4CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/>
              <path fill='#1976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/ssinternationalindustries/" target="_blank" rel="noopener noreferrer" style={{ width: 48, height: 48, borderRadius: '50%', background: '#0077b5', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="#fff"/></svg>
          </a>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </div>
        </div>
        <a href="https://ssinternationalpolymers.com" style={{ background: NAVY, color: '#fff', border: 'none', borderRadius: 28, padding: '13px 36px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-barlow)', textDecoration: 'none', display: 'inline-block' }}>Visit ssinternationalpolymers.com →</a>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: 'var(--font-inter)', background: '#f0f2f5', minHeight: '100vh' }}>

      <img src="/logo_ssi_full.png" alt="" aria-hidden="true" style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }} />

      {/* HERO */}
      <div className="ssi-hero" style={{ position: 'relative', height: 440, overflow: 'hidden' }}>
        <img src={BG_IMG} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 30%, rgba(230,236,250,0.75) 60%, rgba(230,236,250,0.95) 100%)' }} />
        <div className="ssi-hero-inner" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 80px' }}>
          <div className="ssi-hero-content" style={{ textAlign: 'right' }}>
            <div className="ssi-hero-eyebrow" style={{ fontSize: 14, fontWeight: 700, color: NAVY, letterSpacing: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: 20 }}>PARTNER WITH</div>
            <div className="ssi-hero-logo-row" style={{ marginLeft: 'auto', marginBottom: 16, display: 'flex', justifyContent: 'flex-end' }}>
              <img src='/logo_ssi_full.png' alt='SS International' style={{ height: 142, width: 'auto' }} />
            </div>
            <div className="ssi-hero-headline" style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 900, color: '#0d1b35', fontFamily: 'var(--font-barlow)', letterSpacing: '-2px', textTransform: 'uppercase', lineHeight: 1 }}>REGISTRATION FORM</div>
          </div>
        </div>
      </div>

      {/* CARDS AREA */}
      <div className="ssi-form-container" style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 80px 60px' }}>

        {/* Mandatory note */}
        <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', marginBottom: 20, border: '1px solid #e8e8e8', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <span style={{ fontSize: 14, color: '#555', fontFamily: 'var(--font-inter)' }}>Fields marked with <strong style={{ color: '#e53935' }}>*</strong> are mandatory and must be filled before submitting the form.</span>
        </div>

        {/* GENERAL INFORMATION CARD */}
        <div style={{ position: 'relative', marginBottom: 24 }}>
          <div style={{ position: 'absolute', left: -36, top: '50%', transform: 'translateY(-50%)', background: '#ffffff', borderRadius: '16px 0 0 16px', padding: '24px 14px', writingMode: 'vertical-lr', fontSize: 15, fontWeight: 700, color: NAVY, letterSpacing: '1px', fontFamily: 'var(--font-barlow)', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', zIndex: 10 }}>General Information</div>

          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>

            {/* Row 1 - Registration Type */}
            <div className="ssi-field-row" style={{ display: 'flex' }}>
              <div className="ssi-field-sidebar" style={{ width: 220, background: NAVY, padding: '20px 20px', display: 'flex', alignItems: 'flex-start', paddingTop: 22, flexShrink: 0 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>1. Registration Type <span style={{ color: '#ff6b6b' }}>*</span></span>
              </div>
              <div style={{ flex: 1, background: '#fff', padding: '16px 28px' }}>
                <p style={{ fontSize: 13, color: '#666', marginBottom: 10, fontFamily: 'var(--font-inter)' }}>I want to register as</p>
                <div className="ssi-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                  {[
                    { val: 'Customer', desc: 'I want to buy products or services' },
                    { val: 'Supplier', desc: 'I want to sell products or services' },
                    { val: 'Customer & Supplier', desc: 'I want to buy and sell products or services' },
                  ].map(opt => (
                    <div key={opt.val} onClick={() => { setRegType(opt.val); clr('regType'); }} style={{ border: '2px solid ' + (regType === opt.val ? BLUE : '#e0e0e0'), borderRadius: 10, padding: '14px 16px', cursor: 'pointer', background: regType === opt.val ? 'rgba(27,145,255,0.04)' : '#fff' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <span style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid ' + (regType === opt.val ? BLUE : '#ccc'), background: regType === opt.val ? BLUE : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {regType === opt.val && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
                        </span>
                        <span style={{ fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-inter)' }}>{opt.val}</span>
                      </div>
                      <span style={{ fontSize: 12, color: '#888', fontFamily: 'var(--font-inter)' }}>{opt.desc}</span>
                    </div>
                  ))}
                </div>
                {e('regType') && <div style={errTxt}>{e('regType')}</div>}
              </div>
            </div>

            {/* Row 2 - Company Name */}
            <div className="ssi-field-row" style={{ display: 'flex' }}>
              <div className="ssi-field-sidebar" style={{ width: 220, background: NAVY, padding: '20px 20px', display: 'flex', alignItems: 'flex-start', paddingTop: 22, flexShrink: 0 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>2. Name of Entity (Company Name) <span style={{ color: '#ff6b6b' }}>*</span></span>
              </div>
              <div style={{ flex: 1, background: '#fff', padding: '16px 28px', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%' }}>
                  <input style={e('company') ? inpErr : inp} value={company} placeholder="Legal Name of Entity" onChange={ev => { setCompany(ev.target.value); clr('company'); }} />
                  {e('company') && <div style={errTxt}>{e('company')}</div>}
                </div>
              </div>
            </div>

            {/* Row 3 - Type of Entity */}
            <div className="ssi-field-row" style={{ display: 'flex' }}>
              <div className="ssi-field-sidebar" style={{ width: 220, background: NAVY, padding: '20px 20px', display: 'flex', alignItems: 'flex-start', paddingTop: 22, flexShrink: 0 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>3. Type of Entity <span style={{ color: '#ff6b6b' }}>*</span></span>
              </div>
              <div style={{ flex: 1, background: '#fff', padding: '16px 28px' }}>
                <div className="ssi-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
                  {['Proprietorship','Partnership','LLP','Pvt Ltd','Public Ltd','Government Organization','PSU','Other'].map(opt => (
                    <Radio key={opt} label={opt} checked={entity === opt} onClick={() => { setEntity(opt as EntityType); clr('entity'); }} />
                  ))}
                </div>
                {e('entity') && <div style={errTxt}>{e('entity')}</div>}
              </div>
            </div>

            {/* Row 4 - Nature of Business */}
            <div className="ssi-field-row" style={{ display: 'flex' }}>
              <div className="ssi-field-sidebar" style={{ width: 220, background: NAVY, padding: '20px 20px', display: 'flex', alignItems: 'flex-start', paddingTop: 22, flexShrink: 0 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>4. Nature of Business <span style={{ color: '#ff6b6b' }}>*</span></span>
              </div>
              <div style={{ flex: 1, background: '#fff', padding: '16px 28px', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%' }}>
                  <select style={e('trader') ? { ...sel, border: '1px solid #e53935' } : sel} value={trader} onChange={ev => { setTrader(ev.target.value); clr('trader'); }}>
                    <option value="">Please select a value</option>
                    {['Manufacturer','Trader','Distributor','OEM','Government Organization','PSU','Contractor','Exporter','Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                  {e('trader') && <div style={errTxt}>{e('trader')}</div>}
                </div>
              </div>
            </div>

            {/* Row 5 - Industry (multi-select) */}
            <div className="ssi-field-row" style={{ display: 'flex' }}>
              <div className="ssi-field-sidebar" style={{ width: 220, background: NAVY, padding: '20px 20px', display: 'flex', alignItems: 'flex-start', paddingTop: 22, flexShrink: 0 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>5. Industry <span style={{ color: '#ff6b6b' }}>*</span><br /><span style={{ fontSize: 11, fontWeight: 400, opacity: 0.6 }}>(Multi-select)</span></span>
              </div>
              <div style={{ flex: 1, background: '#fff', padding: '16px 28px' }}>
                <div className="ssi-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
                  {INDUSTRIES.map(ind => (
                    <label key={ind} onClick={() => toggleIndustry(ind)} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: industries.includes(ind) ? '#0d1b35' : '#555', fontFamily: 'var(--font-inter)', padding: '5px 0' }}>
                      <span style={{ width: 17, height: 17, border: '2px solid ' + (industries.includes(ind) ? BLUE : '#ccc'), background: industries.includes(ind) ? BLUE : '#fff', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {industries.includes(ind) && <span style={{ color: '#fff', fontSize: 10, fontWeight: 700, lineHeight: 1 }}>✓</span>}
                      </span>
                      {ind}
                    </label>
                  ))}
                </div>
                {industries.length > 0 && <div style={{ marginTop: 8, fontSize: 12, color: BLUE, fontFamily: 'var(--font-inter)' }}>Selected: {industries.join(', ')}</div>}
                {e('industry') && <div style={errTxt}>{e('industry')}</div>}
              </div>
            </div>

            {/* Row 6 - Registered Address */}
            <div className="ssi-field-row" style={{ display: 'flex' }}>
              <div className="ssi-field-sidebar" style={{ width: 220, background: NAVY, padding: '20px 20px', display: 'flex', alignItems: 'flex-start', paddingTop: 22, flexShrink: 0 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>6. Registered Office Address <span style={{ color: '#ff6b6b' }}>*</span></span>
              </div>
              <div style={{ flex: 1, background: '#fff', padding: '16px 28px' }}>
                <textarea style={{ ...(e('regAddr') ? inpErr : inp), resize: 'vertical', minHeight: 72, textAlign: 'left' }} value={regAddr} placeholder="Building No., Street, Area" onChange={ev => handleRegAddrChange(ev.target.value)} />
                {e('regAddr') && <div style={errTxt}>{e('regAddr')}</div>}
                <div className="ssi-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginTop: 10 }}>
                  <div>
                    <select style={{ ...sel, textAlign: 'center' } as React.CSSProperties} value={regState} onChange={ev => handleRegStateChange(ev.target.value)}>
                      <option value="">--State--</option>{STATES.map(s => <option key={s}>{s}</option>)}
                    </select>
                    {e('regState') && <div style={errTxt}>{e('regState')}</div>}
                  </div>
                  <div>
                    <select style={{ ...sel, textAlign: 'center' } as React.CSSProperties} value={regCity} onChange={ev => handleRegCityChange(ev.target.value)}>
                      <option value="">--City--</option>{[...(STATE_CITIES[regState] || ['Other'])].sort().map(c => <option key={c}>{c}</option>)}
                    </select>
                    {e('regCity') && <div style={errTxt}>{e('regCity')}</div>}
                  </div>
                  <div>
                    <input style={{ ...inp, textAlign: 'center' } as React.CSSProperties} value={regPin} placeholder="Pincode" maxLength={6} onChange={ev => handleRegPinChange(ev.target.value)} />
                    {e('regPin') && <div style={errTxt}>{e('regPin')}</div>}
                  </div>
                </div>
              </div>
            </div>

            {/* Row 7 - Billing Address */}
            <div className="ssi-field-row" style={{ display: 'flex' }}>
              <div className="ssi-field-sidebar" style={{ width: 220, background: NAVY, padding: '20px 20px', display: 'flex', alignItems: 'flex-start', paddingTop: 22, flexShrink: 0 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>7. Billing / Factory / Dispatch Address <span style={{ color: '#ff6b6b' }}>*</span></span>
              </div>
              <div style={{ flex: 1, background: '#fff', padding: '16px 28px' }}>
                <label onClick={handleSameAddr} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13, color: '#666', fontFamily: 'var(--font-inter)', marginBottom: 10 }}>
                  <span style={{ width: 15, height: 15, border: '2px solid ' + (sameAddr ? BLUE : '#ccc'), background: sameAddr ? BLUE : '#fff', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {sameAddr && <span style={{ color: '#fff', fontSize: 9, fontWeight: 700 }}>✓</span>}
                  </span>
                  Same as registered address
                </label>
                <div style={{ opacity: sameAddr ? 0.5 : 1, pointerEvents: sameAddr ? 'none' : 'auto' }}>
                  <textarea style={{ ...(e('billAddr') ? inpErr : inp), resize: 'vertical', minHeight: 72, textAlign: 'left' }} value={billAddr} placeholder="Billing Address/Factory Address" onChange={ev => { setBillAddr(ev.target.value); clr('billAddr'); }} />
                  <div className="ssi-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginTop: 10 }}>
                    <select style={{ ...sel, textAlign: 'center' } as React.CSSProperties} value={billState} onChange={ev => { setBillState(ev.target.value); setBillCity(''); }}>
                      <option value="">--State--</option>{STATES.map(s => <option key={s}>{s}</option>)}
                    </select>
                    <select style={{ ...sel, textAlign: 'center' } as React.CSSProperties} value={billCity} onChange={ev => setBillCity(ev.target.value)}>
                      <option value="">--City--</option>{[...(STATE_CITIES[billState] || ['Other'])].sort().map(c => <option key={c}>{c}</option>)}
                    </select>
                    <input style={{ ...inp, textAlign: 'center' } as React.CSSProperties} value={billPin} placeholder="Pincode" maxLength={6} onChange={ev => setBillPin(ev.target.value)} />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 8 - GST */}
            <div className="ssi-field-row" style={{ display: 'flex' }}>
              <div className="ssi-field-sidebar" style={{ width: 220, background: NAVY, padding: '20px 20px', display: 'flex', alignItems: 'flex-start', paddingTop: 22, flexShrink: 0 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>8. GST No. <span style={{ color: '#ff6b6b' }}>*</span></span>
              </div>
              <div style={{ flex: 1, background: '#fff', padding: '16px 28px', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <input style={{ ...(e('gst') ? inpErr : inp), flex: 1, textTransform: 'uppercase' }} value={gst} placeholder="GSTIN (15 characters)" maxLength={15} onChange={ev => { setGst(ev.target.value.toUpperCase()); clr('gst'); }} />
                    <FileInput id="gst-file" done={gstUp} onDone={(f) => { setGstUp(true); setGstFile(f); }} onError={setFileSizeError} />
                  </div>
                  {e('gst') && <div style={errTxt}>{e('gst')}</div>}
                  {e('gstFile') && <div style={errTxt}>{e('gstFile')}</div>}
                  {fileSizeError && <div style={{ fontSize: 12, color: '#e53935', background: 'rgba(229,57,53,0.06)', border: '1px solid rgba(229,57,53,0.15)', borderRadius: 6, padding: '8px 12px', marginTop: 8 }}>{fileSizeError}</div>}
                </div>
              </div>
            </div>

            {/* Row 9 - IEC */}
            <div className="ssi-field-row" style={{ display: 'flex' }}>
              <div className="ssi-field-sidebar" style={{ width: 220, background: NAVY, padding: '20px 20px', display: 'flex', alignItems: 'flex-start', paddingTop: 22, flexShrink: 0 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>9. Import Export Code (IEC) <span style={{ fontSize: 12, opacity: 0.6, fontWeight: 400 }}>(Optional)</span></span>
              </div>
              <div style={{ flex: 1, background: '#fff', padding: '16px 28px', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <input style={{ ...inp, flex: 1 }} value={iec} placeholder="IEC Code" onChange={ev => setIec(ev.target.value)} />
                    <FileInput id="iec-file" done={iecUp} onDone={(f) => { setIecUp(true); setIecFile(f); }} onError={setFileSizeError} />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 10 - Website */}
            <div className="ssi-field-row" style={{ display: 'flex' }}>
              <div className="ssi-field-sidebar" style={{ width: 220, background: NAVY, padding: '20px 20px', display: 'flex', alignItems: 'flex-start', paddingTop: 22, flexShrink: 0 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>10. Website <span style={{ fontSize: 12, opacity: 0.6, fontWeight: 400 }}>(Optional)</span></span>
              </div>
              <div style={{ flex: 1, background: '#fff', padding: '16px 28px', display: 'flex', alignItems: 'center' }}>
                <input style={inp} value={website} placeholder="https://www.yourwebsite.com" onChange={ev => setWebsite(ev.target.value)} />
              </div>
            </div>

          </div>
        </div>

        {/* POINT OF CONTACT CARD */}
        <div style={{ position: 'relative', marginBottom: 24 }}>
          <div className="ssi-department-tab" style={{ position: 'absolute', right: -36, top: '50%', transform: 'translateY(-50%)', background: '#ffffff', borderRadius: '0 16px 16px 0', padding: '24px 14px', writingMode: 'vertical-lr', fontSize: 15, fontWeight: 700, color: NAVY, letterSpacing: '1px', fontFamily: 'var(--font-barlow)', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', zIndex: 10 }}>Department</div>

          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
            <div className="ssi-field-row" style={{ display: 'flex' }}>
              {/* Left grey panel - DEPARTMENT watermark + list */}
              <div className="ssi-field-sidebar" style={{ width: 200, flexShrink: 0, background: '#f5f6f8', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: 'rgba(0,0,0,0.05)', fontFamily: 'var(--font-barlow)', padding: '20px 16px 8px', letterSpacing: '-2px', textTransform: 'uppercase' }}>Point of Contact(s)</div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 0 20px' }}>
                  {(['Purchase','Director','Accounts'] as Dept[]).map(d => {
                    const filled = pocData[d].name && pocData[d].contact && pocData[d].email;
                    return (
                      <div key={d} style={{ padding: '14px 20px', fontSize: 15, fontWeight: 600, color: '#333', fontFamily: 'var(--font-inter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeft: '3px solid transparent' }}>
                        {d}
                        {filled ? <span style={{ fontSize: 11, color: '#16a34a', fontWeight: 700 }}>✓</span> : <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ddd', display: 'inline-block' }} />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right dark panel - all 3 depts stacked */}
              <div style={{ flex: 1, background: NAVY, padding: '24px 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: 20 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-barlow)', letterSpacing: '1px', textTransform: 'uppercase' }}>Point of Contact(s)</span>
                </div>

                {(['Purchase','Director','Accounts'] as Dept[]).map((dept, idx) => (
                  <div key={dept} style={{ marginBottom: idx < 2 ? 20 : 0, paddingBottom: idx < 2 ? 20 : 0, borderBottom: idx < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: 12 }}>{dept}</div>
                    <div className="ssi-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                      {/* Name */}
                      <div>
                        <label style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)', display: 'block', marginBottom: 4 }}>Name <span style={{ color: '#ff6b6b' }}>*</span></label>
                        <input style={{ ...inp, border: '1px solid ' + (e('poc_' + dept + '_name') ? '#ff6b6b' : 'rgba(255,255,255,0.2)'), background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: 13 }} value={pocData[dept].name} placeholder="Full name" onChange={ev => updatePoc(dept, 'name', ev.target.value)} />
                        {e('poc_' + dept + '_name') && <div style={{ fontSize: 11, color: '#ff6b6b', marginTop: 2 }}>{e('poc_' + dept + '_name')}</div>}
                      </div>
                      {/* Contact with country code */}
                      <div>
                        <label style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)', display: 'block', marginBottom: 4 }}>Contact <span style={{ color: '#ff6b6b' }}>*</span></label>
                        <div style={{ display: 'flex', gap: 4 }}>
                          <select value={pocData[dept].countryCode} onChange={ev => updatePoc(dept, 'countryCode', ev.target.value)} style={{ width: 80, padding: '11px 4px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: 12, outline: 'none', flexShrink: 0 }}>
                            {COUNTRY_CODES.map(c => <option key={c.code + c.name} value={c.code} style={{ background: NAVY, color: '#fff' }}>{c.flag} {c.code}</option>)}
                          </select>
                          <div style={{ flex: 1 }}>
                            <input style={{ ...inp, border: '1px solid ' + (e('poc_' + dept + '_contact') ? '#ff6b6b' : 'rgba(255,255,255,0.2)'), background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: 13 }} value={pocData[dept].contact} placeholder={getDigits(pocData[dept].countryCode) + ' digits'} maxLength={15} onChange={ev => updatePoc(dept, 'contact', ev.target.value.replace(/[^0-9]/g, ''))} />
                          </div>
                        </div>
                        {e('poc_' + dept + '_contact') && <div style={{ fontSize: 11, color: '#ff6b6b', marginTop: 2 }}>{e('poc_' + dept + '_contact')}</div>}
                      </div>
                      {/* Email */}
                      <div>
                        <label style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)', display: 'block', marginBottom: 4 }}>Email <span style={{ color: '#ff6b6b' }}>*</span></label>
                        <input style={{ ...inp, border: '1px solid ' + (e('poc_' + dept + '_email') ? '#ff6b6b' : 'rgba(255,255,255,0.2)'), background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: 13 }} value={pocData[dept].email} placeholder="name@company.com" onChange={ev => updatePoc(dept, 'email', ev.target.value)} />
                        {e('poc_' + dept + '_email') && <div style={{ fontSize: 11, color: '#ff6b6b', marginTop: 2 }}>{e('poc_' + dept + '_email')}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DECLARATION */}
        <div style={{ background: NAVY, borderRadius: 20, padding: '36px 48px', marginBottom: 24, boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
          <div style={{ marginBottom: 20 }}>
            <label onClick={() => setCb1(!cb1)} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer' }}>
              <span style={{ width: 20, height: 20, border: '2px solid ' + (cb1 ? BLUE : 'rgba(255,255,255,0.4)'), background: cb1 ? BLUE : 'transparent', borderRadius: 4, flexShrink: 0, marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cb1 && <span style={{ color: '#fff', fontSize: 12, fontWeight: 700, lineHeight: 1 }}>✓</span>}
              </span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontFamily: 'var(--font-inter)' }}>
                I agree to receive technical updates, product information, pricing updates, promotional offers, newsletters, and other business communications from SS International Industries LLP. I understand that I may opt out of these communications at any time. <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>(Optional)</span>
              </span>
            </label>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label onClick={() => { setCb2(!cb2); clr('cb2'); }} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer' }}>
              <span style={{ width: 20, height: 20, border: '2px solid ' + (cb2 ? BLUE : (e('cb2') ? '#ff6b6b' : 'rgba(255,255,255,0.4)')), background: cb2 ? BLUE : 'transparent', borderRadius: 4, flexShrink: 0, marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cb2 && <span style={{ color: '#fff', fontSize: 12, fontWeight: 700, lineHeight: 1 }}>✓</span>}
              </span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                I hereby declare that the information provided in this registration form and the accompanying documents is true, complete, and accurate to the best of my knowledge. <span style={{ color: '#ff6b6b' }}>*</span>
              </span>
            </label>
            {e('cb2') && <div style={{ fontSize: 11, color: '#ff6b6b', marginTop: 4, marginLeft: 32 }}>{e('cb2')}</div>}
          </div>

          <div style={{ marginBottom: 28 }}>
            <label onClick={() => { setCb3(!cb3); clr('cb3'); }} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer' }}>
              <span style={{ width: 20, height: 20, border: '2px solid ' + (cb3 ? BLUE : (e('cb3') ? '#ff6b6b' : 'rgba(255,255,255,0.4)')), background: cb3 ? BLUE : 'transparent', borderRadius: 4, flexShrink: 0, marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cb3 && <span style={{ color: '#fff', fontSize: 12, fontWeight: 700, lineHeight: 1 }}>✓</span>}
              </span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                I have read and agree to the Privacy Policy and Terms & Conditions of SS International Industries LLP and consent to the processing of my information for customer registration, business communication, and statutory compliance purposes. <span style={{ color: '#ff6b6b' }}>*</span>
              </span>
            </label>
            {e('cb3') && <div style={{ fontSize: 11, color: '#ff6b6b', marginTop: 4, marginLeft: 32 }}>{e('cb3')}</div>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <button onClick={() => { if (validate()) { setPreviewError(false); setShowModal(true); } else { setPreviewError(true); } }} style={{ background: '#fff', color: '#111', border: '2px solid #fff', borderRadius: 32, padding: '16px 72px', fontSize: 17, fontWeight: 900, cursor: 'pointer', fontFamily: 'var(--font-barlow)', letterSpacing: '3px', textTransform: 'uppercase', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              PREVIEW
            </button>
            {previewError && <div style={{ fontSize: 13, color: '#e53935', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>fill all the * details first</div>}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="ssi-footer" style={{ background: '#e7ecf5', padding: '40px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(27,58,107,0.08)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="ssi-footer-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(27,58,107,0.15)', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src='/logo_ssi_full.png' alt='SS International' style={{ height: 142, width: 'auto', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href='https://share.google/9QyRJyCJarsDpP9oP' target='_blank' rel='noopener noreferrer' style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <svg width='20' height='20' viewBox='0 0 48 48'>
                  <path fill='#FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/>
                  <path fill='#FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/>
                  <path fill='#4CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/>
                  <path fill='#1976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/ssinternationalindustries/" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, borderRadius: '50%', background: '#0077b5', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="#fff"/></svg>
              </a>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
            <a href="tel:+919599399493" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 22px', border: '1px solid rgba(27,58,107,0.25)', borderRadius: 30, fontSize: 13, color: NAVY, textDecoration: 'none', fontFamily: 'var(--font-inter)', background: 'rgba(27,58,107,0.07)', whiteSpace: 'nowrap' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +91 95993 99493
            </a>
            <a href="mailto:info@ssinternationalpolymers.com" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 22px', border: '1px solid rgba(27,58,107,0.25)', borderRadius: 30, fontSize: 13, color: NAVY, textDecoration: 'none', fontFamily: 'var(--font-inter)', background: 'rgba(27,58,107,0.07)', whiteSpace: 'nowrap' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@ssinternationalpolymers.com
            </a>
            <a href="https://ssinternationalpolymers.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 22px', border: '1px solid rgba(27,58,107,0.25)', borderRadius: 30, fontSize: 13, color: NAVY, textDecoration: 'none', fontFamily: 'var(--font-inter)', background: 'rgba(27,58,107,0.07)', whiteSpace: 'nowrap' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              ssinternationalpolymers.com
            </a>
          </div>
          <div style={{ textAlign: 'center', paddingTop: 16, borderTop: '1px solid rgba(27,58,107,0.12)' }}>
            <p style={{ fontSize: 11, color: 'rgba(27,58,107,0.55)', fontFamily: 'var(--font-inter)', margin: '0 0 4px' }}>C-24, UPSIDA, Baghpat Industrial Area, Baghpat, Uttar Pradesh – 250609</p>
            <p style={{ fontSize: 11, color: 'rgba(27,58,107,0.45)', fontFamily: 'var(--font-inter)', margin: 0 }}>© 2025 SS International Industries LLP. All Rights Reserved.</p>
          </div>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 24 }} onClick={ev => { if (ev.target === ev.currentTarget) setShowModal(false); }}>
          <div style={{ background: '#fff', borderRadius: 16, width: '100%', maxWidth: 780, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,0.4)' }}>
            <div style={{ background: NAVY, padding: '20px 28px', borderRadius: '16px 16px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 10 }}>
              <div style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 900, color: '#fff', fontFamily: 'var(--font-barlow)', letterSpacing: '1px' }}>REGISTRATION FORM</div>
              <button onClick={() => setShowModal(false)} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 20 }}>✕</button>
            </div>
            <div style={{ background: '#f0f4fb', padding: '10px 28px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, fontFamily: 'var(--font-barlow)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px' }}>General Information</div>
            </div>
            <div style={{ padding: '4px 28px' }}>
              {[['Registration Type:', regType], ['Name of Entity:', company], ['Type of Entity:', entity], ['Nature of Business:', trader], ['Industry:', industries.join(', ')], ['Website:', website || 'N/A'], ['Registered Address:', regAddr + ', ' + regState + ', ' + regCity + ' – ' + regPin], ['Billing Address:', sameAddr ? 'Same as registered' : billAddr + ', ' + billState + ', ' + billCity + ' – ' + billPin], ['GST No.:', gst.toUpperCase() + (gstUp ? ' ✓ (Uploaded)' : '')], ['IEC Code:', iec || 'N/A' + (iecUp ? ' ✓ (Uploaded)' : '')]].map(([k, v]) => (
                <div key={k} className="ssi-modal-row" style={{ display: 'flex', gap: 16, padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <span className="ssi-modal-label" style={{ fontSize: 13, fontWeight: 700, color: '#333', minWidth: 210, fontFamily: 'var(--font-inter)' }}>{k}</span>
                  <span style={{ fontSize: 13, color: '#555', fontFamily: 'var(--font-inter)' }}>{v || '—'}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#f0f4fb', padding: '10px 28px', marginTop: 8 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, fontFamily: 'var(--font-barlow)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px' }}>Point Of Contact(s)</div>
            </div>
            <div style={{ padding: '12px 28px' }}>
              <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead><tr style={{ borderBottom: '2px solid #e8e8e8', background: '#f8f8f8' }}>{['S.No','Name','Department','Contact No.','Email Id'].map(h => <th key={h} style={{ fontSize: 12, fontWeight: 700, color: '#333', padding: '10px 8px', textAlign: 'left', fontFamily: 'var(--font-inter)' }}>{h}</th>)}</tr></thead>
                <tbody>{(['Purchase','Director','Accounts'] as Dept[]).map((d, i) => <tr key={d} style={{ borderBottom: '1px solid #f0f0f0' }}>{[i+1+'.', pocData[d].name, d, pocData[d].countryCode + ' ' + pocData[d].contact, pocData[d].email].map((v, j) => <td key={j} style={{ padding: '10px 8px', fontSize: 13, color: '#555', fontFamily: 'var(--font-inter)' }}>{v}</td>)}</tr>)}</tbody>
              </table>
              </div>
            </div>
            <div style={{ background: NAVY, padding: '16px 28px' }}>
              {[
                { val: cb1, text: 'I agree to receive technical updates, product information, pricing updates, promotional offers, newsletters, and other business communications from SS International Industries LLP. I understand that I may opt out of these communications at any time.' },
                { val: cb2, text: 'I hereby declare that the information provided in this registration form and the accompanying documents is true, complete, and accurate to the best of my knowledge.' },
                { val: cb3, text: 'I have read and agree to the Privacy Policy and Terms & Conditions of SS International Industries LLP and consent to the processing of my information for customer registration, business communication, and statutory compliance purposes.' },
              ].map(({ val, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: i < 2 ? 12 : 0 }}>
                  <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.4)', background: val ? BLUE : 'transparent', borderRadius: 3, flexShrink: 0, marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{val && <span style={{ color: '#fff', fontSize: 9, fontWeight: 700 }}>✓</span>}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-inter)', lineHeight: 1.6, whiteSpace: 'normal', wordWrap: 'break-word' }}>{text}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 28px', gap: 12 }}>
              <button onClick={() => setShowModal(false)} style={{ background: 'transparent', border: '1px solid #ddd', borderRadius: 28, padding: '12px 28px', fontSize: 14, fontWeight: 600, color: '#666', cursor: 'pointer', fontFamily: 'var(--font-inter)' }}>← Edit</button>
              <button onClick={handleSubmit} disabled={uploading} style={{ background: NAVY, color: '#fff', border: 'none', borderRadius: 28, padding: '14px 48px', fontSize: 15, fontWeight: 900, cursor: uploading ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-barlow)', letterSpacing: '2px', opacity: uploading ? 0.7 : 1 }}>
                {uploading ? 'UPLOADING FILES...' : 'SUBMIT'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
