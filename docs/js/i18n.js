// English stays in the HTML so the site remains readable without JavaScript.
// MRF model names and Tyre Bank branding are intentionally left unchanged.
(() => {
  const translations = {
    te: {
      "Tyre Bank Hyderabad | MRF Tyres & Tyre Care Since 1995": "Tyre Bank హైదరాబాద్ | 1995 నుంచి MRF టైర్లు & టైర్ సేవలు",
      "tyre": "టైర్",
      // Site chrome, navigation, and hero.
      "TYRE BANK · HYDERABAD · SINCE 1995": "TYRE BANK · హైదరాబాద్ · 1995 నుంచి",
      "Getting ready for the road": "ప్రయాణానికి సిద్ధమవుతోంది",
      "Ready. Let’s roll.": "సిద్ధం. బయలుదేరుదాం.",
      "Skip intro": "పరిచయాన్ని దాటవేయండి",
      "MRF TYRES & PROFESSIONAL TYRE CARE": "MRF టైర్లు & నిపుణుల టైర్ సేవలు",
      "AMBERPET, HYDERABAD": "అంబర్‌పేట్, హైదరాబాద్",
      "EST. 1995": "స్థాపన 1995",
      "HYDERABAD · EST. 1995": "హైదరాబాద్ · స్థాపన 1995",
      "Home": "హోమ్",
      "Tyres": "టైర్లు",
      "Services": "సేవలు",
      "About": "మా గురించి",
      "Gallery": "గ్యాలరీ",
      "Contact": "సంప్రదించండి",
      "Call Now": "ఇప్పుడే కాల్ చేయండి",
      "Call +91 92465 08927": "+91 92465 08927కు కాల్ చేయండి",
      "Skip to content": "విషయానికి వెళ్లండి",
      "MRF Tyres &": "MRF టైర్లు &",
      "Professional Tyre Care": "నిపుణుల టైర్ సేవలు",
      "Expert guidance, dependable tyre services, and a local shop that has served Hyderabad for over three decades.": "నిపుణుల సలహా, నమ్మకమైన టైర్ సేవలు, మూడు దశాబ్దాలకు పైగా హైదరాబాద్‌కు సేవలందిస్తున్న స్థానిక దుకాణం.",
      "Get directions to Tyre Bank": "Tyre Bankకు దారి చూడండి",
      "THE SHOP BEHIND THE NAME": "మీకు తెలిసిన మా దుకాణం",
      "01 / THE STOREFRONT": "01 / దుకాణం ముందు భాగం",
      "Established in Hyderabad": "హైదరాబాద్‌లో స్థాపించబడింది",
      "Years serving customers": "వినియోగదారులకు సేవలందించిన సంవత్సరాలు",
      "Tyres at the shop": "దుకాణంలో టైర్లు",
      "Tyre care services": "టైర్ సంరక్షణ సేవలు",
      // Vehicle categories and product catalogue.
      "FIND YOUR FIT": "మీకు సరిపోయే టైర్‌ను కనుగొనండి",
      "The right tyres for the": "మీ ప్రయాణానికి సరైన",
      "road ahead.": "టైర్లను ఎంచుకోండి.",
      "Explore MRF tyre patterns for every vehicle category, then call the shop to find your fit.": "ప్రతి వాహన రకానికి MRF టైర్ నమూనాలను చూడండి. మీ వాహనానికి సరిపోయేది తెలుసుకోవడానికి దుకాణానికి కాల్ చేయండి.",
      "01 / MRF RANGE": "01 / MRF శ్రేణి",
      "02 / MRF RANGE": "02 / MRF శ్రేణి",
      "03 / MRF RANGE": "03 / MRF శ్రేణి",
      "04 / MRF RANGE": "04 / MRF శ్రేణి",
      "05 / MRF RANGE": "05 / MRF శ్రేణి",
      "06 / MRF RANGE": "06 / MRF శ్రేణి",
      "07 / MRF RANGE": "07 / MRF శ్రేణి",
      "08 / MRF RANGE": "08 / MRF శ్రేణి",
      "09 / MRF RANGE": "09 / MRF శ్రేణి",
      "10 / MRF RANGE": "10 / MRF శ్రేణి",
      "11 / MRF RANGE": "11 / MRF శ్రేణి",
      "12 / MRF RANGE": "12 / MRF శ్రేణి",
      "Passenger cars": "ప్యాసింజర్ కార్లు",
      "Two wheelers": "ద్విచక్ర వాహనాలు",
      "Farm": "వ్యవసాయ వాహనాలు",
      "Trucks": "ట్రక్కులు",
      "Off the road": "ఆఫ్-రోడ్ వాహనాలు",
      "Small commercial": "చిన్న వాణిజ్య వాహనాలు",
      "Light commercial": "తేలికపాటి వాణిజ్య వాహనాలు",
      "Pick up": "పికప్ వాహనాలు",
      "Three wheelers": "మూడు చక్రాల వాహనాలు",
      "Medium commercial": "మధ్యస్థ వాణిజ్య వాహనాలు",
      "Intermediate commercial": "ఇంటర్మీడియట్ వాణిజ్య వాహనాలు",
      "Tubes & flaps": "ట్యూబ్‌లు & ఫ్లాప్‌లు",
      "Daily drives, performance & SUVs": "రోజువారీ ప్రయాణాలు, పనితీరు & SUVలు",
      "Motorcycles & scooters": "మోటార్‌సైకిళ్లు & స్కూటర్లు",
      "Agricultural & tractor tyres": "వ్యవసాయ & ట్రాక్టర్ టైర్లు",
      "Heavy road transport": "భారీ రహదారి రవాణా",
      "Industrial & site work": "పారిశ్రామిక & నిర్మాణ పనులు",
      "Compact working vehicles": "చిన్న పని వాహనాలు",
      "Vans & light transport": "వ్యాన్లు & తేలికపాటి రవాణా",
      "Utility & load carrying": "సరుకు రవాణా వాహనాలు",
      "Passenger & cargo autos": "ప్రయాణికుల & సరుకు ఆటోలు",
      "Medium duty transport": "మధ్యస్థ రవాణా",
      "Regional transport": "ప్రాంతీయ రవాణా",
      "Tyre accessories": "టైర్ ఉపకరణాలు",
      "EXPLORE MRF CATEGORIES": "MRF వర్గాలను చూడండి",
      "Select a vehicle category to see MRF tyre patterns and ask Tyre Bank about fitment and availability.": "MRF టైర్ నమూనాలను చూడటానికి వాహన వర్గాన్ని ఎంచుకోండి. అమరిక, లభ్యత గురించి Tyre Bankను అడగండి.",
      "View all options": "అన్ని ఎంపికలు చూడండి",
      "All vehicle categories": "అన్ని వాహన వర్గాలు",
      "All tyre options": "అన్ని టైర్ ఎంపికలు",
      "categories": "వర్గాలు",
      "MRF tyre & accessory patterns": "MRF టైర్ & ఉపకరణ నమూనాలు",
      "Need advice? Call the shop": "సలహా కావాలా? దుకాణానికి కాల్ చేయండి",
      "All options": "అన్ని ఎంపికలు",
      "Showing all 219 patterns": "మొత్తం 219 నమూనాలు చూపిస్తున్నాం",
      "View MRF details": "MRF వివరాలు చూడండి",
      "Find the right fit.": "సరైన టైర్‌ను ఎంచుకోండి.",
      "MRF images and model names are for reference. Call Tyre Bank to confirm sizes, fitment, pricing and current availability.": "MRF చిత్రాలు, మోడల్ పేర్లు సూచన కోసం మాత్రమే. సైజులు, అమరిక, ధరలు, ప్రస్తుత లభ్యతను నిర్ధారించుకోవడానికి Tyre Bankకు కాల్ చేయండి.",
      "Talk tyres with us": "టైర్ల గురించి మాతో మాట్లాడండి",
      "Passenger cars · Luxury": "ప్యాసింజర్ కార్లు · లగ్జరీ",
      "Passenger cars · Performance": "ప్యాసింజర్ కార్లు · పనితీరు",
      "Passenger cars · SUV": "ప్యాసింజర్ కార్లు · SUV",
      "Passenger cars · Comfort": "ప్యాసింజర్ కార్లు · సౌకర్యం",
      "Passenger cars · Eco Friendly": "ప్యాసింజర్ కార్లు · పర్యావరణ అనుకూలం",
      "Passenger cars · Long Life": "ప్యాసింజర్ కార్లు · దీర్ఘకాలికం",
      "Passenger cars · Offroad": "ప్యాసింజర్ కార్లు · ఆఫ్-రోడ్",
      "Passenger cars · Value": "ప్యాసింజర్ కార్లు · విలువ",
      "Passenger cars · Van/Utility": "ప్యాసింజర్ కార్లు · వ్యాన్/యుటిలిటీ",
      // Workshop services.
      "IN THE SERVICE BAY": "సర్వీస్ బేలో",
      "The right care for every wheel.": "ప్రతి చక్రానికీ సరైన సంరక్షణ.",
      "From fitting a new tyre to the final adjustment, our team is here to help you get road-ready.": "కొత్త టైర్ అమరిక నుంచి చివరి సర్దుబాటు వరకు, మీ వాహనం ప్రయాణానికి సిద్ధం కావడానికి మా బృందం సహాయపడుతుంది.",
      "INSIDE THE WORKSHOP": "మా వర్క్‌షాప్‌లో",
      "Tyre Bank service bay": "Tyre Bank సర్వీస్ బే",
      "01 / SERVICE": "01 / సేవ",
      "02 / SERVICE": "02 / సేవ",
      "03 / SERVICE": "03 / సేవ",
      "04 / SERVICE": "04 / సేవ",
      "05 / SERVICE": "05 / సేవ",
      "Automatic tyre changing": "ఆటోమేటిక్ టైర్ మార్పు",
      "Car and SUV tyres mounted and removed with dedicated equipment.": "ప్రత్యేక పరికరాలతో కార్లు, SUVల టైర్లను అమర్చడం మరియు తొలగించడం.",
      "Tube & tubeless fitting": "ట్యూబ్ & ట్యూబ్‌లెస్ అమరిక",
      "Fitting support for both tube type and tubeless tyres.": "ట్యూబ్ రకం, ట్యూబ్‌లెస్ టైర్ల అమరికకు సహాయం.",
      "Wheel alignment": "వీల్ అలైన్‌మెంట్",
      "Wheel-angle adjustments to help tyres meet the road correctly.": "టైర్లు రోడ్డును సరిగ్గా తాకేలా చక్రాల కోణాల సర్దుబాటు.",
      "Wheel balancing": "వీల్ బ్యాలెన్సింగ్",
      "Balancing tyre and wheel assemblies to correct uneven weight distribution.": "బరువు అసమతుల్యతను సరిచేయడానికి టైర్, చక్రాల బ్యాలెన్సింగ్.",
      "Nitrogen filling": "నైట్రోజన్ నింపడం",
      "Nitrogen inflation available at the shop. Ask us what suits your vehicle.": "దుకాణంలో నైట్రోజన్ నింపే సౌకర్యం ఉంది. మీ వాహనానికి ఏది సరిపోతుందో అడగండి.",
      "Ask about this service": "ఈ సేవ గురించి అడగండి",
      "NEED A HAND?": "సహాయం కావాలా?",
      "Tell us about your vehicle and we’ll help you find the right service.": "మీ వాహనం గురించి చెప్పండి; సరైన సేవను ఎంచుకోవడంలో సహాయపడతాం.",
      "Call the shop": "దుకాణానికి కాల్ చేయండి",
      // About, gallery, contact, and footer.
      "SINCE": "నుంచి",
      "HYDERABAD": "హైదరాబాద్",
      "OUR STORY": "మా కథ",
      "A local name, built on the road.": "ప్రయాణంతో ఎదిగిన స్థానిక పేరు.",
      "Tyre Bank was established in 1995 by Mr. Anatha Srinivas. The business has long focused on helping motorists find the right tyre through quality service, value and practical advice close to home.": "Tyre Bankను 1995లో శ్రీ అనాథ శ్రీనివాస్ స్థాపించారు. నాణ్యమైన సేవ, సరసమైన విలువ, ఆచరణాత్మక సలహాతో వాహనదారులు సరైన టైర్‌ను ఎంచుకునేలా ఈ దుకాణం చాలాకాలంగా సహాయపడుతోంది.",
      "Today, the shop continues to pair tyre choices with services such as fitting, alignment, balancing and nitrogen filling.": "ఈరోజు కూడా టైర్ ఎంపికతో పాటు అమరిక, అలైన్‌మెంట్, బ్యాలెన్సింగ్, నైట్రోజన్ నింపడం వంటి సేవలను అందిస్తోంది.",
      "FOUNDER · EST. 1995": "స్థాపకుడు · 1995",
      "A LOOK INSIDE": "లోపల ఒక చూపు",
      "Around the shop.": "మా దుకాణం.",
      "A familiar local storefront. A dedicated service bay. Take a closer look at Tyre Bank through our shop photographs.": "మీకు తెలిసిన స్థానిక దుకాణం, ప్రత్యేక సర్వీస్ బే. మా ఫోటోల ద్వారా Tyre Bankను దగ్గరగా చూడండి.",
      "The Tyre Bank storefront": "Tyre Bank దుకాణం ముందు భాగం",
      "Tyres on display": "ప్రదర్శనలో టైర్లు",
      "Service bay": "సర్వీస్ బే",
      "Inside the shop": "దుకాణం లోపల",
      "Archive imagery from Tyre Bank’s existing website. Shop appearance may have changed.": "Tyre Bank పాత వెబ్‌సైట్‌లోని ఫోటోలు. దుకాణం రూపం మారి ఉండవచ్చు.",
      "VISIT OR GET IN TOUCH": "రండి లేదా సంప్రదించండి",
      "Your next stop": "మీ తదుపరి ప్రయాణం",
      "starts here.": "ఇక్కడ మొదలవుతుంది.",
      "Find Tyre Bank at Road No. 6 X Road in Amberpet. Call ahead for tyre availability or service enquiries.": "అంబర్‌పేట్‌లోని రోడ్ నం. 6 X రోడ్ వద్ద Tyre Bankను సందర్శించండి. టైర్ల లభ్యత లేదా సేవల కోసం ముందుగా కాల్ చేయండి.",
      "THE ADDRESS": "చిరునామా",
      "CALL THE SHOP": "దుకాణానికి కాల్ చేయండి",
      "Landline:": "ల్యాండ్‌లైన్:",
      "EMAIL": "ఇమెయిల్",
      "Get Directions": "దారి చూడండి",
      "MRF tyres and professional tyre care in Amberpet, Hyderabad since 1995.": "1995 నుంచి హైదరాబాద్ అంబర్‌పేట్‌లో MRF టైర్లు, నిపుణుల టైర్ సేవలు.",
      "EXPLORE": "చూడండి",
      "CONTACT": "సంప్రదించండి",
      "WhatsApp the shop": "దుకాణానికి WhatsApp చేయండి",
      "Get directions": "దారి చూడండి",
      "Road No. 6 X Road, Amberpet": "రోడ్ నం. 6 X రోడ్, అంబర్‌పేట్",
      "Hyderabad, Telangana 500013": "హైదరాబాద్, తెలంగాణ 500013",
      "TYRE BANK. ALL RIGHTS RESERVED.": "TYRE BANK. అన్ని హక్కులు ప్రత్యేకించబడినవి.",
      "MADE FOR THE ROAD AHEAD.": "ముందున్న ప్రయాణం కోసం.",
      // Accessibility labels and dynamic messages.
      "Website language": "వెబ్‌సైట్ భాష",
      "Open menu": "మెనూ తెరవండి",
      "Close menu": "మెనూ మూసివేయండి",
      "Main navigation": "ప్రధాన నావిగేషన్",
      "Mobile navigation": "మొబైల్ నావిగేషన్",
      "Tyre Bank, back to top": "Tyre Bank, పైకి వెళ్లండి",
      "Tyre Bank highlights": "Tyre Bank ముఖ్యాంశాలు",
      "Filter tyre options": "టైర్ ఎంపికలను వడపోయండి",
      "Shop photo viewer": "దుకాణం ఫోటో వీక్షణ",
      "View shop photo": "దుకాణం ఫోటో చూడండి",
      "View full photo": "పూర్తి ఫోటో చూడండి",
      "Close photo": "ఫోటో మూసివేయండి",
      "Previous photo": "మునుపటి ఫోటో",
      "Next photo": "తదుపరి ఫోటో",
      "Ask Tyre Bank about": "దీని గురించి Tyre Bankను అడగండి:",
      "Showing all patterns": "మొత్తం {count} నమూనాలు చూపిస్తున్నాం",
      "Showing category patterns": "{category} · {count} నమూనాలు చూపిస్తున్నాం",
      "WhatsApp service enquiry": "నమస్కారం Tyre Bank, {service} గురించి అడగాలనుకుంటున్నాను.",
      "Map showing MRF T&S - Tyre Bank in Amberpet, Hyderabad": "హైదరాబాద్ అంబర్‌పేట్‌లో MRF T&S - Tyre Bank స్థానం చూపించే మ్యాప్",
      "Ask about automatic tyre changing on WhatsApp": "ఆటోమేటిక్ టైర్ మార్పు గురించి WhatsAppలో అడగండి",
      "Ask about tube and tubeless fitting on WhatsApp": "ట్యూబ్, ట్యూబ్‌లెస్ అమరిక గురించి WhatsAppలో అడగండి",
      "Ask about wheel alignment on WhatsApp": "వీల్ అలైన్‌మెంట్ గురించి WhatsAppలో అడగండి",
      "Ask about wheel balancing on WhatsApp": "వీల్ బ్యాలెన్సింగ్ గురించి WhatsAppలో అడగండి",
      "Ask about nitrogen filling on WhatsApp": "నైట్రోజన్ నింపడం గురించి WhatsAppలో అడగండి",
      "MRF Tyres & Services logo": "MRF టైర్లు & సర్వీసెస్ లోగో",
      "MRF tyre emblem": "MRF టైర్ చిహ్నం",
      "Tyre Bank MRF tyre shop in Hyderabad": "హైదరాబాద్‌లోని Tyre Bank MRF టైర్ల దుకాణం",
      "Tyre Bank shop frontage with MRF signage": "MRF బోర్డుతో Tyre Bank దుకాణం ముందు భాగం",
      "Rows of tyres on display inside Tyre Bank": "Tyre Bankలో ప్రదర్శనలో ఉన్న టైర్లు",
      "Wheel alignment equipment in Tyre Bank's service bay": "Tyre Bank సర్వీస్ బేలో వీల్ అలైన్‌మెంట్ పరికరాలు",
      "Wheel alignment equipment in the service bay": "సర్వీస్ బేలో వీల్ అలైన్‌మెంట్ పరికరాలు",
      "Tyre Bank shop interior with tyre displays": "టైర్ ప్రదర్శనతో Tyre Bank దుకాణం లోపలి భాగం",
      "Tyre Bank customer area and tyre display": "Tyre Bank వినియోగదారుల ప్రాంతం, టైర్ల ప్రదర్శన",
      "Tyre Bank storefront": "Tyre Bank దుకాణం ముందు భాగం",
      "Amberpet, Hyderabad, Telangana 500013": "అంబర్‌పేట్, హైదరాబాద్, తెలంగాణ 500013"
    },
    hi: {
      "Tyre Bank Hyderabad | MRF Tyres & Tyre Care Since 1995": "Tyre Bank हैदराबाद | 1995 से MRF टायर और टायर सेवाएँ",
      "tyre": "टायर",
      // Site chrome, navigation, and hero.
      "TYRE BANK · HYDERABAD · SINCE 1995": "TYRE BANK · हैदराबाद · 1995 से",
      "Getting ready for the road": "सफ़र के लिए तैयार हो रहे हैं",
      "Ready. Let’s roll.": "तैयार हैं। चलिए चलते हैं।",
      "Skip intro": "परिचय छोड़ें",
      "MRF TYRES & PROFESSIONAL TYRE CARE": "MRF टायर और पेशेवर टायर सेवाएँ",
      "AMBERPET, HYDERABAD": "अंबरपेट, हैदराबाद",
      "EST. 1995": "स्थापना 1995",
      "HYDERABAD · EST. 1995": "हैदराबाद · स्थापना 1995",
      "Home": "होम",
      "Tyres": "टायर",
      "Services": "सेवाएँ",
      "About": "हमारे बारे में",
      "Gallery": "गैलरी",
      "Contact": "संपर्क करें",
      "Call Now": "अभी कॉल करें",
      "Call +91 92465 08927": "+91 92465 08927 पर कॉल करें",
      "Skip to content": "मुख्य सामग्री पर जाएँ",
      "MRF Tyres &": "MRF टायर और",
      "Professional Tyre Care": "पेशेवर टायर सेवाएँ",
      "Expert guidance, dependable tyre services, and a local shop that has served Hyderabad for over three decades.": "विशेषज्ञ सलाह, भरोसेमंद टायर सेवाएँ और तीन दशकों से अधिक समय से हैदराबाद की सेवा करने वाली स्थानीय दुकान।",
      "Get directions to Tyre Bank": "Tyre Bank का रास्ता देखें",
      "THE SHOP BEHIND THE NAME": "आपकी परिचित दुकान",
      "01 / THE STOREFRONT": "01 / दुकान का सामने का हिस्सा",
      "Established in Hyderabad": "हैदराबाद में स्थापित",
      "Years serving customers": "ग्राहकों की सेवा के वर्ष",
      "Tyres at the shop": "दुकान में टायर",
      "Tyre care services": "टायर देखभाल सेवाएँ",
      // Vehicle categories and product catalogue.
      "FIND YOUR FIT": "सही टायर खोजें",
      "The right tyres for the": "आगे के सफ़र के लिए",
      "road ahead.": "सही टायर।",
      "Explore MRF tyre patterns for every vehicle category, then call the shop to find your fit.": "हर वाहन श्रेणी के MRF टायर मॉडल देखें, फिर अपने वाहन के लिए सही विकल्प जानने को दुकान पर कॉल करें।",
      "01 / MRF RANGE": "01 / MRF श्रेणी",
      "02 / MRF RANGE": "02 / MRF श्रेणी",
      "03 / MRF RANGE": "03 / MRF श्रेणी",
      "04 / MRF RANGE": "04 / MRF श्रेणी",
      "05 / MRF RANGE": "05 / MRF श्रेणी",
      "06 / MRF RANGE": "06 / MRF श्रेणी",
      "07 / MRF RANGE": "07 / MRF श्रेणी",
      "08 / MRF RANGE": "08 / MRF श्रेणी",
      "09 / MRF RANGE": "09 / MRF श्रेणी",
      "10 / MRF RANGE": "10 / MRF श्रेणी",
      "11 / MRF RANGE": "11 / MRF श्रेणी",
      "12 / MRF RANGE": "12 / MRF श्रेणी",
      "Passenger cars": "यात्री कारें",
      "Two wheelers": "दोपहिया वाहन",
      "Farm": "कृषि वाहन",
      "Trucks": "ट्रक",
      "Off the road": "ऑफ-रोड वाहन",
      "Small commercial": "छोटे व्यावसायिक वाहन",
      "Light commercial": "हल्के व्यावसायिक वाहन",
      "Pick up": "पिकअप वाहन",
      "Three wheelers": "तिपहिया वाहन",
      "Medium commercial": "मध्यम व्यावसायिक वाहन",
      "Intermediate commercial": "इंटरमीडिएट व्यावसायिक वाहन",
      "Tubes & flaps": "ट्यूब और फ्लैप",
      "Daily drives, performance & SUVs": "रोज़मर्रा की ड्राइव, प्रदर्शन और SUV",
      "Motorcycles & scooters": "मोटरसाइकिल और स्कूटर",
      "Agricultural & tractor tyres": "कृषि और ट्रैक्टर टायर",
      "Heavy road transport": "भारी सड़क परिवहन",
      "Industrial & site work": "औद्योगिक और निर्माण कार्य",
      "Compact working vehicles": "छोटे कामकाजी वाहन",
      "Vans & light transport": "वैन और हल्का परिवहन",
      "Utility & load carrying": "उपयोगी और माल ढुलाई वाहन",
      "Passenger & cargo autos": "यात्री और मालवाहक ऑटो",
      "Medium duty transport": "मध्यम परिवहन",
      "Regional transport": "क्षेत्रीय परिवहन",
      "Tyre accessories": "टायर सहायक सामान",
      "EXPLORE MRF CATEGORIES": "MRF श्रेणियाँ देखें",
      "Select a vehicle category to see MRF tyre patterns and ask Tyre Bank about fitment and availability.": "MRF टायर मॉडल देखने के लिए वाहन श्रेणी चुनें। फिटिंग और उपलब्धता के लिए Tyre Bank से पूछें।",
      "View all options": "सभी विकल्प देखें",
      "All vehicle categories": "सभी वाहन श्रेणियाँ",
      "All tyre options": "सभी टायर विकल्प",
      "categories": "श्रेणियाँ",
      "MRF tyre & accessory patterns": "MRF टायर और सहायक सामान के मॉडल",
      "Need advice? Call the shop": "सलाह चाहिए? दुकान पर कॉल करें",
      "All options": "सभी विकल्प",
      "Showing all 219 patterns": "सभी 219 मॉडल दिखाए जा रहे हैं",
      "View MRF details": "MRF विवरण देखें",
      "Find the right fit.": "सही विकल्प चुनें।",
      "MRF images and model names are for reference. Call Tyre Bank to confirm sizes, fitment, pricing and current availability.": "MRF की तस्वीरें और मॉडल नाम केवल संदर्भ के लिए हैं। आकार, फिटिंग, कीमत और मौजूदा उपलब्धता की पुष्टि के लिए Tyre Bank को कॉल करें।",
      "Talk tyres with us": "टायर के बारे में हमसे बात करें",
      "Passenger cars · Luxury": "यात्री कारें · लग्ज़री",
      "Passenger cars · Performance": "यात्री कारें · प्रदर्शन",
      "Passenger cars · SUV": "यात्री कारें · SUV",
      "Passenger cars · Comfort": "यात्री कारें · आराम",
      "Passenger cars · Eco Friendly": "यात्री कारें · पर्यावरण अनुकूल",
      "Passenger cars · Long Life": "यात्री कारें · लंबी आयु",
      "Passenger cars · Offroad": "यात्री कारें · ऑफ-रोड",
      "Passenger cars · Value": "यात्री कारें · किफ़ायती",
      "Passenger cars · Van/Utility": "यात्री कारें · वैन/यूटिलिटी",
      // Workshop services.
      "IN THE SERVICE BAY": "सर्विस बे में",
      "The right care for every wheel.": "हर पहिए की सही देखभाल।",
      "From fitting a new tyre to the final adjustment, our team is here to help you get road-ready.": "नया टायर लगाने से लेकर अंतिम समायोजन तक, हमारी टीम आपके वाहन को सफ़र के लिए तैयार करने में मदद करती है।",
      "INSIDE THE WORKSHOP": "हमारी वर्कशॉप के अंदर",
      "Tyre Bank service bay": "Tyre Bank सर्विस बे",
      "01 / SERVICE": "01 / सेवा",
      "02 / SERVICE": "02 / सेवा",
      "03 / SERVICE": "03 / सेवा",
      "04 / SERVICE": "04 / सेवा",
      "05 / SERVICE": "05 / सेवा",
      "Automatic tyre changing": "ऑटोमैटिक टायर बदलना",
      "Car and SUV tyres mounted and removed with dedicated equipment.": "विशेष उपकरणों से कार और SUV के टायर लगाना और उतारना।",
      "Tube & tubeless fitting": "ट्यूब और ट्यूबलेस फिटिंग",
      "Fitting support for both tube type and tubeless tyres.": "ट्यूब वाले और ट्यूबलेस, दोनों तरह के टायरों की फिटिंग।",
      "Wheel alignment": "व्हील अलाइनमेंट",
      "Wheel-angle adjustments to help tyres meet the road correctly.": "टायरों का सड़क से सही संपर्क बनाने के लिए पहियों के कोण का समायोजन।",
      "Wheel balancing": "व्हील बैलेंसिंग",
      "Balancing tyre and wheel assemblies to correct uneven weight distribution.": "असमान वजन को ठीक करने के लिए टायर और पहियों की बैलेंसिंग।",
      "Nitrogen filling": "नाइट्रोजन भरना",
      "Nitrogen inflation available at the shop. Ask us what suits your vehicle.": "दुकान में नाइट्रोजन भरने की सुविधा उपलब्ध है। अपने वाहन के लिए सही विकल्प हमसे पूछें।",
      "Ask about this service": "इस सेवा के बारे में पूछें",
      "NEED A HAND?": "मदद चाहिए?",
      "Tell us about your vehicle and we’ll help you find the right service.": "अपने वाहन के बारे में बताएँ; हम सही सेवा चुनने में मदद करेंगे।",
      "Call the shop": "दुकान पर कॉल करें",
      // About, gallery, contact, and footer.
      "SINCE": "से",
      "HYDERABAD": "हैदराबाद",
      "OUR STORY": "हमारी कहानी",
      "A local name, built on the road.": "सफ़र के साथ बना स्थानीय नाम।",
      "Tyre Bank was established in 1995 by Mr. Anatha Srinivas. The business has long focused on helping motorists find the right tyre through quality service, value and practical advice close to home.": "Tyre Bank की स्थापना 1995 में श्री अनाथ श्रीनिवास ने की थी। यह दुकान लंबे समय से अच्छी सेवा, उचित मूल्य और व्यावहारिक सलाह के साथ वाहन चालकों को सही टायर चुनने में मदद करती रही है।",
      "Today, the shop continues to pair tyre choices with services such as fitting, alignment, balancing and nitrogen filling.": "आज भी दुकान टायर चुनने के साथ फिटिंग, अलाइनमेंट, बैलेंसिंग और नाइट्रोजन भरने जैसी सेवाएँ देती है।",
      "FOUNDER · EST. 1995": "संस्थापक · 1995",
      "A LOOK INSIDE": "अंदर की झलक",
      "Around the shop.": "हमारी दुकान।",
      "A familiar local storefront. A dedicated service bay. Take a closer look at Tyre Bank through our shop photographs.": "आपकी परिचित स्थानीय दुकान और अलग सर्विस बे। तस्वीरों में Tyre Bank को करीब से देखें।",
      "The Tyre Bank storefront": "Tyre Bank की दुकान",
      "Tyres on display": "दुकान में टायर",
      "Service bay": "सर्विस बे",
      "Inside the shop": "दुकान के अंदर",
      "Archive imagery from Tyre Bank’s existing website. Shop appearance may have changed.": "Tyre Bank की पुरानी वेबसाइट की तस्वीरें। दुकान का रूप बदल गया हो सकता है।",
      "VISIT OR GET IN TOUCH": "आएँ या संपर्क करें",
      "Your next stop": "आपका अगला सफ़र",
      "starts here.": "यहाँ से शुरू होता है।",
      "Find Tyre Bank at Road No. 6 X Road in Amberpet. Call ahead for tyre availability or service enquiries.": "Tyre Bank अंबरपेट में रोड नं. 6 X रोड पर है। टायर की उपलब्धता या सेवा के बारे में पहले कॉल करें।",
      "THE ADDRESS": "पता",
      "CALL THE SHOP": "दुकान पर कॉल करें",
      "Landline:": "लैंडलाइन:",
      "EMAIL": "ईमेल",
      "Get Directions": "रास्ता देखें",
      "MRF tyres and professional tyre care in Amberpet, Hyderabad since 1995.": "1995 से हैदराबाद के अंबरपेट में MRF टायर और पेशेवर टायर सेवाएँ।",
      "EXPLORE": "देखें",
      "CONTACT": "संपर्क करें",
      "WhatsApp the shop": "दुकान को WhatsApp करें",
      "Get directions": "रास्ता देखें",
      "Road No. 6 X Road, Amberpet": "रोड नं. 6 X रोड, अंबरपेट",
      "Hyderabad, Telangana 500013": "हैदराबाद, तेलंगाना 500013",
      "TYRE BANK. ALL RIGHTS RESERVED.": "TYRE BANK. सर्वाधिकार सुरक्षित।",
      "MADE FOR THE ROAD AHEAD.": "आगे के सफ़र के लिए।",
      // Accessibility labels and dynamic messages.
      "Website language": "वेबसाइट की भाषा",
      "Open menu": "मेन्यू खोलें",
      "Close menu": "मेन्यू बंद करें",
      "Main navigation": "मुख्य नेविगेशन",
      "Mobile navigation": "मोबाइल नेविगेशन",
      "Tyre Bank, back to top": "Tyre Bank, ऊपर जाएँ",
      "Tyre Bank highlights": "Tyre Bank की मुख्य बातें",
      "Filter tyre options": "टायर विकल्प छाँटें",
      "Shop photo viewer": "दुकान की तस्वीरें",
      "View shop photo": "दुकान की तस्वीर देखें",
      "View full photo": "पूरी तस्वीर देखें",
      "Close photo": "तस्वीर बंद करें",
      "Previous photo": "पिछली तस्वीर",
      "Next photo": "अगली तस्वीर",
      "Ask Tyre Bank about": "इसके बारे में Tyre Bank से पूछें:",
      "Showing all patterns": "सभी {count} मॉडल दिखाए जा रहे हैं",
      "Showing category patterns": "{category} · {count} मॉडल दिखाए जा रहे हैं",
      "WhatsApp service enquiry": "नमस्ते Tyre Bank, मुझे इस सेवा के बारे में जानकारी चाहिए: {service}।",
      "Map showing MRF T&S - Tyre Bank in Amberpet, Hyderabad": "हैदराबाद के अंबरपेट में MRF T&S - Tyre Bank का स्थान दिखाने वाला नक्शा",
      "Ask about automatic tyre changing on WhatsApp": "ऑटोमैटिक टायर बदलने के बारे में WhatsApp पर पूछें",
      "Ask about tube and tubeless fitting on WhatsApp": "ट्यूब और ट्यूबलेस फिटिंग के बारे में WhatsApp पर पूछें",
      "Ask about wheel alignment on WhatsApp": "व्हील अलाइनमेंट के बारे में WhatsApp पर पूछें",
      "Ask about wheel balancing on WhatsApp": "व्हील बैलेंसिंग के बारे में WhatsApp पर पूछें",
      "Ask about nitrogen filling on WhatsApp": "नाइट्रोजन भरने के बारे में WhatsApp पर पूछें",
      "MRF Tyres & Services logo": "MRF टायर एंड सर्विसेज़ का लोगो",
      "MRF tyre emblem": "MRF टायर का चिह्न",
      "Tyre Bank MRF tyre shop in Hyderabad": "हैदराबाद में Tyre Bank MRF टायर की दुकान",
      "Tyre Bank shop frontage with MRF signage": "MRF बोर्ड के साथ Tyre Bank की दुकान का सामने का हिस्सा",
      "Rows of tyres on display inside Tyre Bank": "Tyre Bank के अंदर प्रदर्शित टायर",
      "Wheel alignment equipment in Tyre Bank's service bay": "Tyre Bank सर्विस बे में व्हील अलाइनमेंट के उपकरण",
      "Wheel alignment equipment in the service bay": "सर्विस बे में व्हील अलाइनमेंट के उपकरण",
      "Tyre Bank shop interior with tyre displays": "टायर प्रदर्शन के साथ Tyre Bank दुकान का अंदरूनी हिस्सा",
      "Tyre Bank customer area and tyre display": "Tyre Bank का ग्राहक क्षेत्र और टायर प्रदर्शन",
      "Tyre Bank storefront": "Tyre Bank की दुकान का सामने का हिस्सा",
      "Amberpet, Hyderabad, Telangana 500013": "अंबरपेट, हैदराबाद, तेलंगाना 500013"
    }
  };

  // Capture the original English text once so switching back never chains translations.
  const languageSelect = document.querySelector("#site-language");
  const originalTitle = document.title;
  const translatableTextNodes = [];
  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (textWalker.nextNode()) {
    const node = textWalker.currentNode;
    const source = node.nodeValue.trim();
    if (!source || node.parentElement?.closest("script, style, svg, .product-info h3")) continue;
    translatableTextNodes.push({ node, original: node.nodeValue, source });
  }

  // Accessible names and image descriptions use the same translation table.
  const translatableAttributes = [];
  document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
    for (const name of ["aria-label", "alt", "title"]) {
      if (element.hasAttribute(name)) translatableAttributes.push({ element, name, source: element.getAttribute(name) });
    }
  });
  // Service enquiries are prefilled in the visitor's selected language.
  const serviceEnquiryLinks = [...document.querySelectorAll('.service-card a[href*="wa.me"]')].map((link) => ({
    link,
    href: link.href,
    service: link.closest(".service-card").querySelector("h3").textContent.trim()
  }));

  // Persist the choice when storage is available; English is the HTML fallback.
  let language = "en";
  try {
    const saved = localStorage.getItem("tyreBankLanguage");
    if (saved === "te" || saved === "hi") language = saved;
  } catch { /* Storage can be unavailable in private browsing. */ }

  const englishTemplates = {
    "Showing all patterns": "Showing all {count} patterns",
    "Showing category patterns": "Showing {count} patterns · {category}"
  };

  function translate(source) {
    return translations[language]?.[source] || englishTemplates[source] || source;
  }

  function translateAttribute(source, element, name) {
    const productPrefix = "Ask Tyre Bank about ";
    if (source.startsWith(productPrefix)) return `${translate("Ask Tyre Bank about")} ${source.slice(productPrefix.length)}`;
    if (name === "alt" && element.closest(".product-card") && source.startsWith("MRF ") && source.endsWith(" tyre")) {
      return `${source.slice(0, -5)} ${translate("tyre")}`;
    }
    return translate(source);
  }

  // Update static text, accessible labels, and links, then notify dynamic UI.
  function applyLanguage(nextLanguage) {
    if (!["en", "te", "hi"].includes(nextLanguage)) return;
    language = nextLanguage;
    document.documentElement.lang = language;
    languageSelect.value = language;
    document.title = translate(originalTitle);
    translatableTextNodes.forEach(({ node, original, source }) => {
      node.nodeValue = original.replace(source, translate(source));
    });
    translatableAttributes.forEach(({ element, name, source }) => {
      element.setAttribute(name, translateAttribute(source, element, name));
    });
    serviceEnquiryLinks.forEach(({ link, href, service }) => {
      if (language === "en") {
        link.href = href;
      } else {
        const url = new URL(href);
        url.searchParams.set("text", translate("WhatsApp service enquiry").replace("{service}", translate(service)));
        link.href = url.toString();
      }
    });
    try { localStorage.setItem("tyreBankLanguage", language); } catch { /* Optional preference. */ }
    document.dispatchEvent(new CustomEvent("tyrebank:languagechange", { detail: { language } }));
  }

  window.tyreBankI18n = { translate, getLanguage: () => language, applyLanguage };
  languageSelect.parentElement.hidden = false;
  languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));
  applyLanguage(language);
})();
