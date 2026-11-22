# Prime Cost

A restaurant management game in a single HTML file. You run the books, the menu, the kitchen equipment, the staff and the suppliers, month by month, and the P&L tells you how it's going.

I always liked Pax Historia's concept but didn't particularly like how it ran on usage credits. While this obviously isn't a copy of it, it certainly draws on some of its aspects- particularly the integration of AI into gameplay for better customization! You can customize basically anything in this game, and do basically anything! Browse the catalog of over 100 pieces of kitchen equipment, craft your own menu with Claude, score the highest accolades in the restaurant industry, respond to events landing on your desk... really, the possibilities are near-endless.

Want to jack up prices and lose your entire customer base? Blackmail your head chef out of quitting? Sell off the fire suppression systems and get the fire marshal called on you? Start an illegal drug trafficking operation with the restaurant as a front? You can do all of that and so much more, in Prime Cost.

## Playing

Open `index.html` as a Claude artifact. It's possible to play this offline, but I strongly advise against it since many of the base features of the game will be disabled or, at best, severely impaired.

Shift+R runs the month from any tab, and there's a floating **Run** button on every tab except the Dashboard.

## Worlds

Every save belongs to its own world, whether that's a real place in a real year or somebody's fiction. The first time a save opens with Claude, the game rewrites its option lists to fit that world: training, uniforms, perks, credentials, health and fire inspectors, staff names and job titles, suppliers, wine, critics, which guides exist, rivals, the starting menu, house upgrades and the names of marketing channels. A Night City kitchen certifies its cooks through Night City's own bodies, and the Chestnut Tree pours Victory Gin. Michelin only turns up where it plausibly exists.

The lists are saved with the game and rewritten if you change the world notes. Each one has a **Rewrite** link under it if you want a fresh version. Building them takes one Claude call per list on that first load.

## Language

Pick a language on the setup screen or in the Office tab. Claude translates the interface as you play and writes everything it generates in that language, while your own names for the restaurant, staff and dishes stay as you typed them. Translations are cached in your browser, so each string is only translated once. Right-to-left languages such as Arabic and Hebrew get a right-to-left layout, and Chinese, Japanese and Korean get matching fonts.

## Accessibility

Arrow keys move between tabs, dialogs keep focus inside them and close with Escape where that's safe, and controls are labelled for screen readers. The game follows your system's dark mode, high-contrast mode and reduced-motion settings.

## Preset saves

The `presets/` folder holds ready-made restaurants to start from. Download one, then open the game and use **Import a save** to load it.

| Preset | File | Setting |
|---|---|---|
| Ambrose Three Portlands (fictional, from the SCP Wiki) | `prime-cost-ambrose-three-portlands.json` | One Ambrose restaurant off Prometheus Plaza, run for the chain's owners, May 2015 |
| The Cheesecake Factory | `prime-cost-cheesecake-factory.json` | NorthPark, Dallas |
| Chick-fil-A (operator) | `prime-cost-chick-fil-a.json` | Suburban Atlanta |
| Crumbl (franchise) | `prime-cost-crumbl.json` | Lehi, Utah |
| Golden Corral (franchise, buffet) | `prime-cost-golden-corral.json` | Raleigh suburbs |
| Heart Attack Grill | `prime-cost-heart-attack-grill.json` | Downtown Las Vegas |
| Gordon Ramsay Hell's Kitchen | `prime-cost-hells-kitchen.json` | Las Vegas Strip |
| Jumbo Kingdom | `prime-cost-jumbo-kingdom.json` | Aberdeen, Hong Kong |
| Katz's Delicatessen | `prime-cost-katzs-delicatessen.json` | Lower East Side, Manhattan |
| KOMA | `prime-cost-koma-singapore.json` | Marina Bay Sands, Singapore |
| Los Pollos Hermanos | `prime-cost-los-pollos-hermanos.json` | Albuquerque and 13 more across the Southwest |
| McDonald's franchise | `prime-cost-mcdonalds-franchise.json` | Suburban highway exit |
| Eastside Burger Co. (virtual brand kitchen - MrBeast Burger) | `prime-cost-mrbeast-burger.json` | East Orlando |
| Olive Garden | `prime-cost-olive-garden.json` | Suburban retail corridor |
| POPS 66 | `prime-cost-pops-66.json` | Route 66, Arcadia, Oklahoma |
| Robuchon au Dôme | `prime-cost-robuchon-au-dome.json` | Grand Lisboa, Macau |
| Starbucks (company-operated) | `prime-cost-starbucks.json` | Phoenix metro |
| The French Laundry | `prime-cost-the-french-laundry.json` | Yountville, Napa Valley |
| Waffle House | `prime-cost-waffle-house.json` | Metro Atlanta |
| Windows on the World | `prime-cost-windows-on-the-world.json` | World Trade Center, January 1999 |
| Di Fara Pizza | `prime-cost-di-fara-pizza.json` | Midwood, Brooklyn, May 2011 |
| Kogi BBQ (taco truck) | `prime-cost-kogi-bbq.json` | Los Angeles, December 2008 |
| Casa Carmela | `prime-cost-casa-carmela.json` | Malvarrosa, Valencia |
| Chez Josette (fictional bouchon, new Bib Gourmand) | `prime-cost-chez-josette-lyon.json` | Croix-Rousse, Lyon |
| The Lamb & Lantern (fictional tied pub) | `prime-cost-the-lamb-and-lantern.json` | Bermondsey, London |
| Al-Noor Balti House (fictional, a rescue) | `prime-cost-al-noor-balti-house.json` | Ladypool Road, Birmingham |
| Parrilla Don Ernesto (fictional) | `prime-cost-parrilla-don-ernesto.json` | Boedo, Buenos Aires, September 2023 |
| Gojo Bet (fictional cultural restaurant) | `prime-cost-gojo-bet-addis-ababa.json` | Bole, Addis Ababa, January 2019 |
| Noor Al Satwa Cafeteria (fictional) | `prime-cost-noor-al-satwa-cafeteria.json` | Al Satwa, Dubai |
| Chef's Table at Brooklyn Fare | `prime-cost-chefs-table-brooklyn-fare.json` | West 37th Street, Manhattan, December 2023 |
| Hill Street Tai Hwa Pork Noodle (hawker stall) | `prime-cost-hill-street-tai-hwa.json` | Crawford Lane, Singapore, July 2016 |
| Kjolle | `prime-cost-kjolle-lima.json` | Barranco, Lima |
| Fallow | `prime-cost-fallow-london.json` | St James's Market, London |
| 42 | `prime-cost-42-esztergom.json` | Esztergom, Hungary, November 2022 |
| La Tour d'Argent | `prime-cost-tour-d-argent-1940.json` | Occupied Paris, June 1940 |
| Pichka (fictional) | `prime-cost-pichka-kyiv.json` | Podil, Kyiv, October 2022 |
| Moranbong District Restaurant (fictional) | `prime-cost-moranbong-pyongyang.json` | Pyongyang, January 2020 |
| Chestnut Tree Café (*Nineteen Eighty-Four*) | `prime-cost-chestnut-tree-cafe-1984.json` | Airstrip One |
| Second Shift (Cyberpunk 2077, fictional diner) | `prime-cost-second-shift-night-city.json` | Santo Domingo, Night City, 2077 |
| Embers (Cyberpunk 2077) | `prime-cost-embers-night-city.json` | The Glen, Night City, 2077 |
| Pizza Fortuna (homage to *Pizza Connection*) | `prime-cost-pizza-fortuna-hamburg.json` | St. Pauli, Hamburg, April 1994 |

Each preset's world notes say which parts come from published sources (menus, prices, company filings, reviews) and which are estimated or invented, such as staff names, rent and local events.

The Windows on the World, Tour d'Argent, Pichka and Moranbong presets are set in real, difficult moments and are written to stay in their own time. The Chestnut Tree Café, Second Shift and Embers presets are unofficial fan presets set in other people's fictional worlds; Pizza Fortuna borrows only the premise of *Pizza Connection*, none of its names or art.

The presets added in November 2026 are built from definitions in `tools/preset-builder/`; `node tools/preset-builder/build.js` rebuilds them and plays a year of each as a check.

The Ambrose Three Portlands preset is set in the universe of the [SCP Wiki](https://scp-wiki.wikidot.com/), behind the Veil. You're the general manager of one restaurant in the Ambrose chain, in the pocket-universe city of Three Portlands, and you run it for Chaz Ambrose and Marius under a management agreement. The rest of the chain (London, Backdoor SoHo, Temecula, Thorn Valley, Alagadda and the others) is in the world notes and the story, not on your books. The back room of doors isn't a crime here: Ambrose's food is legal in the city, the Hoover Mandate keeps the SCP Foundation's One Star Reviewers out, and the trouble is what might get out through the doors onto ordinary Earth. The menu and its prices are the Temecula menu from the wiki.

## License

The game and the preset saves are released under the MIT License (see `LICENSE`), with one exception.

`prime-cost-ambrose-three-portlands.json` is adapted from the SCP Wiki, whose content is licensed [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), so that file is released under CC BY-SA 3.0 as well. It draws on [Ambrose Restaurants Hub](https://scp-wiki.wikidot.com/ambrose-restaurant-hub) by Proasek and Uncle Nicolini; [Dining Out](https://scp-wiki.wikidot.com/dining-out), [Ambrose Temecula](https://scp-wiki.wikidot.com/ambrose-temecula) and [The Bill, Please](https://scp-wiki.wikidot.com/the-bill-please) by Proasek; [Ambrose Three Portlands: Soda Bar Edition](https://scp-wiki.wikidot.com/ambrose-3ports-soda) by xexnoncores; [Ambrose Backdoor Soho](https://scp-wiki.wikidot.com/ambrose-backdoor-soho) by UraniumEmpire; [Are We Gentrified Yet?](https://scp-wiki.wikidot.com/are-we-gentrified-yet) by Uncle Nicolini and UraniumEmpire; [If You Can't Take The Heat...](https://scp-wiki.wikidot.com/if-you-can-t-take-the-heat) by Smooothcriminal; [AmbroseInternational.pdf](https://scp-wiki.wikidot.com/ambroseinternational-pdf) by Trotskyeet; [Chef's Table](https://scp-wiki.wikidot.com/chef-s-table) by Dysadron; [Do you like Huey Lewis and the News?](https://scp-wiki.wikidot.com/do-you-like-huey-lewis-and-the-news) by Rounderhouse and stormbreath; the sister-restaurant pages [Ambrose London Prix Fixe](https://scp-wiki.wikidot.com/ambrose-london-prix-fixe), [Ambrose Transylvania](https://scp-wiki.wikidot.com/ambrose-transylvania) and [Ambrose NYC](https://scp-wiki.wikidot.com/ambrose-nyc) by stormbreath, [Ambrose Thorn Valley](https://scp-wiki.wikidot.com/ambrose-thorn-valley) by mayoculpa, [Ambrose Makiling](https://scp-wiki.wikidot.com/ambrose-makiling) by Erudius Nacht, [Ambrose SanFran](https://scp-wiki.wikidot.com/ambrose-sanfran) by ManyMeats, [Ambrose DC Restaurant Week](https://scp-wiki.wikidot.com/ambrose-dc-restaurant-week) by DrScaramouche, [Ambrose Vienna](https://scp-wiki.wikidot.com/ambrose-vienna) by Croquembouche, [Ambrose Gloucester](https://scp-wiki.wikidot.com/ambrose-gloucester) by Riemann, [Ambrose Esterberg](https://scp-wiki.wikidot.com/ambrose-esterberg) by Ralliston, [Ambrose: Earthen Foods for the Keplerian Palate](https://scp-wiki.wikidot.com/ambrose-kepler) by Alzin Cdag, [Ambrose Lamplight](https://scp-wiki.wikidot.com/ambrose-lamplight) by Harmacy, [Ambrose Vineta](https://scp-wiki.wikidot.com/ambrose-vineta) by AstersQuill, [Savoring La Rue Macabre: Ol Owuo's Gumbo](https://scp-wiki.wikidot.com/ol-owuos-gumbo) and [Ambrose Little Havana](https://scp-wiki.wikidot.com/ambrose-little-havana) by Uncle Nicolini, [A by Ambrose](https://scp-wiki.wikidot.com/a-by-ambrose) by Dysadron and [Ambrose Alagadda](https://scp-wiki.wikidot.com/ambrose-alagadda) by HarryBlank; and the wiki's [Groups of Interest](https://scp-wiki.wikidot.com/groups-of-interest) and [Three Portlands](https://scp-wiki.wikidot.com/three-portlands-hub) pages. The preset's world notes say which parts are from those pages and which were invented for the save.

## Disclaimer

Prime Cost is an unofficial fan project. It is not affiliated with, endorsed by, or sponsored by any restaurant, company or person named in it. All trademarks belong to their owners. Presets based on real restaurants use publicly available information (menus, prices, filings, press coverage) for simulation and commentary; figures marked as estimates or invented are not real data.

## Logos and colours

Each preset opens with its restaurant's logo and colours, shown in the header and on the dashboard. Change them on the dashboard under **Logo & colours**: upload any PNG, JPG, WebP or SVG, pick an accent and a base colour, hide the restaurant's name when the logo already spells it out, or go back to the defaults. It only changes how the game looks. Where each built-in logo comes from is listed in `LOGOS.md`.
