/** Site contact + company identity. Hardware numbers stay off the marketing site. */

export const contact = {
  email: "info@utsedha.com",
  engineeringEmail: "engineering@utsedha.com",
  phone: "+91 78766 00529",
  /** Digits only, country code first — used for wa.me links. */
  whatsapp: "917876600529",
  company: "Utsedha Unmanned Private Limited",
  shortName: "UUPL",
  founder: "Om Krishan",
  team: ["Monu Raj", "Ritesh Kumar"],
  incubator: "IIT Ropar",
  location: "India",
  registeredAddress:
    "C/O Om Krishan, VPO Kaulan Wala Bhood, Nahan, Sirmaur, Himachal Pradesh – 173026, India",
} as const;

export const siteUrl = "https://www.utsedha.com";

export const whatsappLink = (text = "Hi Utsedha, I'd like to know more about drone facade painting.") =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
