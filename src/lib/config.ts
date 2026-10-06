export const CONTACT = {
  whatsappNumber: "919003850743",
  phone: "+91 90038 50743",
  phoneRaw: "919003850743",
  email: "sollabstech@gmail.com",
  siteUrl: "https://www.sollabstech.com",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
