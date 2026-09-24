# Tyre Bank Hyderabad website

A responsive, frontend-only website for Tyre Bank in Amberpet, Hyderabad. This is a plain HTML, CSS and JavaScript conversion of the original Next.js site. It keeps the same page layout, content, shop photos, colors, navigation, responsive breakpoints, hover effects and smooth anchor scrolling. There is no framework, build step, backend or database.

## Project tree

```text
tyre-bank-website/
├── README.md
└── site/
    ├── index.html            # page content and links
    ├── favicon.svg           # browser tab icon
    ├── css/
    │   └── styles.css        # layout and responsive styles
    ├── js/
    │   └── main.js           # mobile menu and footer year
    └── images/
        └── legacy/          # Tyre Bank images from the old website
```

## Preview locally

Open `site/index.html` in a browser. For a local web preview, run this from the project folder:

```bash
python3 -m http.server 8000 --directory site
```

Then open `http://localhost:8000/`. Press `Control+C` in Terminal to stop the server. No installation is needed.

The files use relative paths, so they can later be hosted at a project URL such as `https://sujeeeth4.github.io/tyre-bank-website/`. This conversion has **not** been pushed or published. GitHub Pages setup is deliberately left for a separate publishing step.

## Information used from the existing site

- [Home page](https://tyrebankhyd.com/): Tyre Bank says it was established in 1995 by **Mr. Anatha Srinivas**. The site describes its focus on tyre choice, value, service and local advice.
- [Tyres page](https://tyrebankhyd.com/tyres.html): the category labels are images reading **Passenger Cars, Two Wheelers, OTR, Trucks-Buses, Farm Services, LCV, Tubes & Flaps**. This site groups those into cards and a secondary list. The existing site does not identify specific currently stocked tyre models.
- [Services page](https://tyrebankhyd.com/services.html): automatic tyre changing for car and SUV wheels, tube and tubeless tyre handling, nitrogen filling, wheel alignment and wheel balancing.
- [Contact page](https://tyrebankhyd.com/contact.html): `2-3-36/1/18 & 19, Road No.6 'X' Road, Amberpet, Hyderabad-500013`; landline `040-27408927`; shop cell `92465 08927`; `tyrebank_hyderabad@yahoo.com`. The old map embed supplied the coordinates used for the directions and map links.
- [Gallery](https://tyrebankhyd.com/gallery.html) and old home page: business imagery in `site/images/legacy/` was downloaded from the existing Tyre Bank website. The design uses selected original photos rather than third-party stock imagery.

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
