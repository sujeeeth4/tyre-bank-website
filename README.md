# Tyre Bank Hyderabad website

A responsive, frontend-only website for Tyre Bank in Amberpet, Hyderabad, built with plain HTML, CSS and JavaScript. It includes 12 MRF vehicle categories with 219 pictured tyre and accessory patterns, five service offerings, shop photography, a keyboard-accessible photo viewer, smooth anchor scrolling and subtle scroll reveals that respect reduced-motion preferences. There is no framework, build step, backend or database.

## Project tree

```text
tyre-bank-website/
├── README.md
└── docs/
    ├── index.html            # page content and links
    ├── css/
    │   └── styles.css        # layout and responsive styles
    ├── js/
    │   ├── main.js           # vehicle views, filters, menu and gallery
    │   └── loader.js         # opening tyre spin, smoke and departure
    └── images/
        ├── mrf-ts-logo.png   # supplied MRF T&S logo and browser tab icon
        ├── legacy/          # original Tyre Bank shop and catalogue images
        │   └── products/    # all 18 archived catalogue images
        └── mrf/             # MRF product images used in the new catalogue
```

## Preview locally

### Browsing and opening animation

- The Tyres section starts with all 12 vehicle categories from MRF's product navigation. Each category card has a tyre image.
- Selecting a category opens its matching products. The filters switch categories, and **All vehicle categories** returns to the cards. The Tyres navigation links also return to the cards.
- Each fresh page opening or reload plays a short tyre spin, followed by an accelerating exit with smoke. It waits for the hero image, with a 3.5-second maximum wait before the exit. **Skip intro** or Escape dismisses it immediately.
- Reduced-motion preferences skip the intro and disable movement. Without JavaScript, the page and complete catalogue remain available.

Open `docs/index.html` in a browser. For a local web preview, run this from the project folder:

```bash
python3 -m http.server 8000 --directory docs
```

Then open `http://localhost:8000/`. Press `Control+C` in Terminal to stop the server. No installation is needed.

The files use relative paths, so they work at the GitHub Pages project URL `https://sujeeeth4.github.io/tyre-bank-website/`.

## Publish a GitHub Pages preview

The `docs/` folder is ready for GitHub Pages. After pushing the latest files to `main`:

1. Open the repository on GitHub and choose **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select branch **main** and folder **/docs**, then click **Save**.
4. Wait for the Pages deployment to finish. GitHub will show the live link on the same settings page.

GitHub Pages is suitable for a preview to share with friends. Confirm the owner checklist below and use hosting intended for commercial sites before making this Tyre Bank's official business website. [GitHub's Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) say Pages is not intended as free hosting to run an online business.

## Information used from the existing site

- [Home page](https://tyrebankhyd.com/): Tyre Bank says it was established in 1995 by **Mr. Anatha Srinivas**. The site describes its focus on tyre choice, value, service and local advice.
- [MRF product catalogue](https://www.mrftyres.com/products/passenger-cars): the category navigation supplied the 12 vehicle categories. The current catalogue displays 219 distinct model or accessory patterns from the product listings across those categories, with 192 locally stored MRF images in `docs/images/mrf/`. Repeated tyre sizes of the same model are grouped into one card; the cards link to an MRF product detail page for size information. MRF owns the source images and product names. These listings are reference material and do not assert Tyre Bank's current stock, prices, or availability. The 18 images from [Tyre Bank's older tyres page](https://tyrebankhyd.com/tyres.html) remain archived in `docs/images/legacy/products/`.
- [Services page](https://tyrebankhyd.com/services.html): automatic tyre changing for car and SUV wheels with mounting/demounting tools, tube and tubeless tyre handling, nitrogen filling, wheel alignment and wheel balancing. These are displayed as five offerings. The old site's absolute nitrogen safety and performance claims are not repeated.
- [Contact page](https://tyrebankhyd.com/contact.html): `2-3-36/1/18 & 19, Road No.6 'X' Road, Amberpet, Hyderabad-500013`; landline `040-27408927`; shop cell `92465 08927`; `tyrebank_hyderabad@yahoo.com`. The map and all directions links now target the named **MRF T&S - Tyre Bank** Google Maps business listing, which matches the location marked in the supplied screenshot. [MRF's Tyre Bank dealer listing](https://dealers.mrftyres.com/mrf-t-s-tyre-bank-tyre-shop-amberpet-hyderabad-372554/Contact-Us) confirms the same business and landmark. The old website's map coordinates pointed elsewhere.
- [Gallery](https://tyrebankhyd.com/gallery.html) and old home page: business imagery in `docs/images/legacy/` was downloaded from the existing Tyre Bank website. The design uses selected original photos rather than third-party stock imagery.

## Confirm with the owner before publishing

1. **Phone and WhatsApp:** Verify that `92465 08927` is still the current shop number **and** receives WhatsApp messages. Every Call Now and WhatsApp link currently uses it. Verify the landline separately.
2. **Opening hours:** The old website does not publish them, so no hours are shown.
3. **MRF relationship:** Confirm the exact current wording and permissions for “MRF Tyres,” “dealer,” “franchise,” “exclusive” and any official MRF marks. The current design uses only plain text; the old shop photos contain MRF signage.
4. **Current tyre categories, models and stock:** Confirm which of the MRF categories and model patterns Tyre Bank supplies today. The site does not promise any model or availability.
5. **Address and map pin:** Confirm the street address wording. The map and directions now target the Google Maps business marker shown in the supplied screenshot. The old site, MRF's dealer listing and Google Maps use different street number formats.
6. **Owner information:** Confirm the owner’s current preferred name and spelling, role and whether the 1995 founding statement is still accurate. The old site spells the name “Mr. Anatha Srinivas”; no further biography is asserted.
7. **Photo rights and recency:** Confirm Tyre Bank can reuse the archived shop photographs and MRF product photos, and whether newer shop photos are available. Existing shop images show an older appearance.
8. **Email:** Confirm the Yahoo address is still monitored.

The mobile number is used as the WhatsApp destination because the existing site publishes it as the shop cell number. The old site does **not** explicitly verify it as a WhatsApp number.
