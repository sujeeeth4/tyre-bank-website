# Tyre Bank Hyderabad website

A responsive, frontend-only introductory website for Tyre Bank in Amberpet, Hyderabad. Built with Next.js, TypeScript and Tailwind CSS. Business content is kept in [`lib/site-data.ts`](lib/site-data.ts) for easy updates.

The single-page structure is: navigation, hero, business highlights, tyre categories, services, story and founder, gallery, contact and map, then footer. There is no backend, database or form submission.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run typecheck` and `npm run build`.

## Information used from the existing site

- [Home page](https://tyrebankhyd.com/): Tyre Bank says it was established in 1995 by **Mr. Anatha Srinivas**. The site describes its focus on tyre choice, value, service and local advice.
- [Tyres page](https://tyrebankhyd.com/tyres.html): the category labels are images reading **Passenger Cars, Two Wheelers, OTR, Trucks-Buses, Farm Services, LCV, Tubes & Flaps**. This site groups those into cards and a secondary list. The existing site does not identify specific currently stocked tyre models.
- [Services page](https://tyrebankhyd.com/services.html): automatic tyre changing for car and SUV wheels, tube and tubeless tyre handling, nitrogen filling, wheel alignment and wheel balancing.
- [Contact page](https://tyrebankhyd.com/contact.html): `2-3-36/1/18 & 19, Road No.6 'X' Road, Amberpet, Hyderabad-500013`; landline `040-27408927`; shop cell `92465 08927`; `tyrebank_hyderabad@yahoo.com`. The old map embed supplied the coordinates used for the directions and map links.
- [Gallery](https://tyrebankhyd.com/gallery.html) and old home page: business imagery in `public/images/legacy/` was downloaded from the existing Tyre Bank website. The design uses selected original photos rather than third-party stock imagery.

## Confirm with the owner before publishing

1. **Phone and WhatsApp:** Verify that `92465 08927` is still the current shop number **and** receives WhatsApp messages. Every Call Now and WhatsApp link currently uses it. Verify the landline separately.
2. **Opening hours:** The old website does not publish them, so no hours are shown.
3. **MRF relationship:** Confirm the exact current wording and permissions for “MRF Tyres,” “dealer,” “franchise,” “exclusive” and any official MRF marks. The current design uses only plain text; the old shop photos contain MRF signage.
4. **Current tyre categories, models and stock:** Confirm which categories are sold today and whether specific models should be listed. The site does not promise any model or availability.
5. **Address and map pin:** Verify the street address and that the old map coordinates still identify the active shop. Some third-party directory listings have conflicting addresses.
6. **Owner information:** Confirm the owner’s current preferred name and spelling, role and whether the 1995 founding statement is still accurate. The old site spells the name “Mr. Anatha Srinivas”; no further biography is asserted.
7. **Photo rights and recency:** Confirm Tyre Bank can reuse the archived shop photographs and whether newer, higher resolution photos are available. Existing images show an older shop appearance.
8. **Email:** Confirm the Yahoo address is still monitored.

The mobile number is used as the WhatsApp destination because the existing site publishes it as the shop cell number. The old site does **not** explicitly verify it as a WhatsApp number.
