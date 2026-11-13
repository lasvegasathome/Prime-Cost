# Prime Cost

A restaurant management game in a single HTML file. You run the books, the menu, the kitchen equipment, the staff and the suppliers, month by month, and the P&L tells you how it's going.

I always liked Pax Historia's concept but didn't particularly like how it ran on usage credits. While this obviously isn't a copy of it, it certainly draws on some of its aspects- particularly the integration of AI into gameplay for better customization! You can customize basically anything in this game, and do basically anything! Browse the catalog of over 100 pieces of kitchen equipment, craft your own menu with Claude, score the highest accolades in the restaurant industry, respond to events landing on your desk... really, the possibilities are near-endless.

Want to jack up prices and lose your entire customer base? Blackmail your head chef out of quitting? Sell off the fire suppression systems and get the fire marshal called on you? Start an illegal drug trafficking operation with the restaurant as a front? You can do all of that and so much more, in Prime Cost.

## Playing

Open `index.html` as a Claude artifact. It's possible to play this offline, but I strongly advise against it since many of the base features of the game will be disabled or, at best, severely impaired.

## Preset saves

The `presets/` folder holds ready-made restaurants to start from. Download one, then open the game and use **Import a save** to load it.

| Preset | File | Setting |
|---|---|---|
| Ambrose Restaurants (fictional, from the SCP Wiki) | `prime-cost-ambrose-restaurants.json` | London, Backdoor SoHo and Three Portlands, May 2015 |
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

Each preset's world notes say which parts come from published sources (menus, prices, company filings, reviews) and which are estimated or invented, such as staff names, rent and local events.

The Windows on the World preset begins in January 1999 and is written to stay in its own time.

The Ambrose Restaurants preset is set in the universe of the [SCP Wiki](https://scp-wiki.wikidot.com/), behind the Veil. Its back room isn't a crime: the restaurants are legal enough, and the people after them are the SCP Foundation's Mobile Task Force Lambda-14 ("One Star Reviewers"), who exist to stop the public finding out that any of it is possible. The three menus and their prices are the ones on the wiki.

## License

The game and the preset saves are released under the MIT License (see `LICENSE`), with one exception.

`prime-cost-ambrose-restaurants.json` is adapted from the SCP Wiki, whose content is licensed [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), so that file is released under CC BY-SA 3.0 as well. It draws on [Ambrose Restaurants Hub](https://scp-wiki.wikidot.com/ambrose-restaurant-hub) by Proasek and Uncle Nicolini; [Dining Out](https://scp-wiki.wikidot.com/dining-out), [Ambrose Temecula](https://scp-wiki.wikidot.com/ambrose-temecula) and [The Bill, Please](https://scp-wiki.wikidot.com/the-bill-please) by Proasek; [Ambrose London Prix Fixe](https://scp-wiki.wikidot.com/ambrose-london-prix-fixe) by stormbreath; [Ambrose Backdoor Soho](https://scp-wiki.wikidot.com/ambrose-backdoor-soho) by UraniumEmpire; [Ambrose Three Portlands: Soda Bar Edition](https://scp-wiki.wikidot.com/ambrose-3ports-soda) by xexnoncores; [Chef's Table](https://scp-wiki.wikidot.com/chef-s-table) by Dysadron; [Do you like Huey Lewis and the News?](https://scp-wiki.wikidot.com/do-you-like-huey-lewis-and-the-news) by Rounderhouse and stormbreath; [If You Can't Take The Heat...](https://scp-wiki.wikidot.com/if-you-can-t-take-the-heat) by Smooothcriminal; [AmbroseInternational.pdf](https://scp-wiki.wikidot.com/ambroseinternational-pdf) by Trotskyeet; and the wiki's [Groups of Interest](https://scp-wiki.wikidot.com/groups-of-interest) and [Three Portlands](https://scp-wiki.wikidot.com/three-portlands-hub) pages. The preset's world notes say which parts are from those pages and which were invented for the save.

## Disclaimer

Prime Cost is an unofficial fan project. It is not affiliated with, endorsed by, or sponsored by any restaurant, company or person named in it. All trademarks belong to their owners. Presets based on real restaurants use publicly available information (menus, prices, filings, press coverage) for simulation and commentary; figures marked as estimates or invented are not real data.

## Logos and colours

Each preset opens with its restaurant's logo and colours, shown in the header and on the dashboard. Change them on the dashboard under **Logo & colours**: upload any PNG, JPG, WebP or SVG, pick an accent and a base colour, hide the restaurant's name when the logo already spells it out, or go back to the defaults. It only changes how the game looks. Where each built-in logo comes from is listed in `LOGOS.md`.
