export const business = {
  name: "Tyre Bank",
  since: "1995",
  owner: "Mr. Anatha Srinivas",
  phoneDisplay: "+91 92465 08927",
  phoneHref: "tel:+919246508927",
  landlineDisplay: "040 2740 8927",
  landlineHref: "tel:+914027408927",
  whatsappHref: "https://wa.me/919246508927",
  email: "tyrebank_hyderabad@yahoo.com",
  addressLine1: "2-3-36/1/18 & 19, Road No. 6 ‘X’ Road",
  addressLine2: "Amberpet, Hyderabad, Telangana 500013",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=17.3909398%2C78.5115060",
  mapEmbedHref:
    "https://www.google.com/maps?q=17.3909398,78.5115060&z=16&output=embed",
} as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Tyres", href: "#tyres" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const tyreCategories = [
  { number: "01", name: "Passenger cars", note: "Tyres for everyday drives", icon: "car" },
  { number: "02", name: "Two wheelers", note: "For the city and beyond", icon: "bike" },
  { number: "03", name: "Trucks & buses", note: "Built for heavier journeys", icon: "truck" },
  { number: "04", name: "Light commercial", note: "Tyres for working vehicles", icon: "van" },
] as const;

export const services = [
  {
    number: "01",
    title: "Automatic tyre changing",
    description: "Machine assisted changing for car and SUV wheels.",
    icon: "change",
  },
  {
    number: "02",
    title: "Tube & tubeless fitting",
    description: "Tyre fitting for both tube type and tubeless tyres.",
    icon: "fitting",
  },
  {
    number: "03",
    title: "Wheel alignment",
    description: "Alignment service for the angles of your wheels.",
    icon: "alignment",
  },
  {
    number: "04",
    title: "Wheel balancing",
    description: "Balancing for tyre and wheel assemblies.",
    icon: "balance",
  },
  {
    number: "05",
    title: "Nitrogen filling",
    description: "Nitrogen inflation for your tyres.",
    icon: "nitrogen",
  },
] as const;

export const gallery = [
  { src: "/images/legacy/banner_1.jpg", alt: "Tyre Bank shop frontage with MRF signage", caption: "The Tyre Bank storefront", position: "center" },
  { src: "/images/legacy/banner_7.jpg", alt: "Rows of tyres on display inside Tyre Bank", caption: "Tyres on display", position: "center" },
  { src: "/images/legacy/banner_5.jpg", alt: "Wheel alignment equipment in the service bay", caption: "Service bay", position: "center" },
  { src: "/images/legacy/banner_4.jpg", alt: "Tyre Bank customer area and tyre display", caption: "Inside the shop", position: "center" },
] as const;
