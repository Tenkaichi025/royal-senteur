// ===== Configuration de la boutique =====
// ⚠️ Numéro WhatsApp de la boutique (format international, sans le +)
const WHATSAPP_NUMBER = "2250789573529";

// ⚠️ PRIX PROVISOIRES — à remplacer par les vrais prix de chaque produit
const PRODUCTS = [
  { id: "french-avenue-jade", brand: "French Avenue", name: "Jade", price: 35000, category: "French Avenue", img: "images/french-avenue-jade.jpg", tagline: "Fraîcheur boisée, élégance discrète" , notes: { top: "Poivre noir", heart: "Jasmin, Iris", base: "Musc, Bois de gaïac, Ambre sec" }, description: "Un floral musqué raffiné qui ouvre sur une pointe de poivre noir moderne, se prolonge dans un cœur de jasmin et d'iris élégant, avant de se poser sur un fond musqué et boisé tout en douceur." },
  { id: "french-avenue-genesis", brand: "French Avenue", name: "Genesis — Sagittarius", price: 30000, category: "French Avenue", img: "images/french-avenue-genesis.jpg", tagline: "Signature ambrée pour les audacieux" , notes: { top: "Fleur de cerisier", heart: "Héliotrope, Iris", base: "Musc" }, description: "Un sillage musqué et poudré, aussi doux qu'une fleur de cerisier, qui se fond dans un cœur d'iris avant de se blottir dans un musc chaud au plus près de la peau." },
  { id: "khamrah-qahwa", brand: "Lattafa", name: "Khamrah Qahwa", price: 20000, category: "Lattafa", img: "images/khamrah-qahwa.jpg", tagline: "Café torréfié et épices, addictif" , notes: { top: "Cannelle, Cardamome, Gingembre", heart: "Praline, Fruits confits, Fleurs blanches", base: "Café, Vanille, Fève tonka, Benjoin, Musc" }, description: "Une gourmandise orientale qui s'ouvre sur des épices chaleureuses, s'adoucit en un cœur de praline et de fleurs blanches, puis se love dans un fond café-vanille élégant et enveloppant." },
  { id: "honor-glory-badee-al-oud", brand: "Lattafa", name: "Honor & Glory — Badee Al Oud", price: 25000, category: "Lattafa", img: "images/honor-glory-badee-al-oud.jpg", tagline: "Oud royal, sillage qui marque" , notes: { top: "Ananas, Crème brûlée", heart: "Cannelle, Curcuma, Poivre noir, Benjoin", base: "Vanille, Bois de santal, Cashmeran, Mousse" }, description: "Un oud royal étonnamment gourmand : ananas caramélisé en ouverture, épices chaudes au cœur, puis un fond boisé et vanillé qui laisse un sillage marquant." },
  { id: "amethyst-badre-al-oud", brand: "Lattafa", name: "Amethyst — Badre Al Oud", price: 25000, category: "Lattafa", img: "images/amethyst-badre-al-oud.jpg", tagline: "Oud floral, mystérieux et raffiné" , notes: { top: "Poivre rose, Bergamote", heart: "Rose de Turquie, Rose de Bulgarie, Jasmin", base: "Oud, Ambre, Vanille" }, description: "Un oud floral mystérieux centré sur la rose : ouverture poivrée et fraîche, cœur de rose opulent, puis un fond boisé et ambré, puissant et raffiné." },
  { id: "oud-for-glory-badee-al-oud", brand: "Lattafa", name: "Oud For Glory — Badee Al Oud", price: 25000, category: "Lattafa", img: "images/oud-for-glory-badee-al-oud.jpg", tagline: "Oud sombre et intense" , notes: { top: "Safran, Muscade, Lavande", heart: "Oud, Patchouli", base: "Oud, Patchouli, Musc" }, description: "Un oud sombre et intense : épices chaudes en ouverture, cœur boisé d'oud et de patchouli, fond musqué durable — pensé pour un sillage qui marque les esprits." },
  { id: "lattafa-musamam-black-intense", brand: "Lattafa", name: "Musamam — Black Intense", price: 25000, category: "Lattafa", img: "images/lattafa-musamam-black-intense.jpg", tagline: "Boisé musqué, caractère affirmé" , notes: { top: "Lavande, Muscade, Bergamote, Sauge", heart: "Géranium, Bois de cèdre", base: "Bois d'érable, Patchouli, Fève tonka, Ambre" }, description: "Boisé musqué au caractère affirmé : frais et aromatique en ouverture, il se réchauffe en un cœur boisé avant de se poser sur un fond ambré et gourmand, addictif sur la peau." },
  { id: "fakhan-lattafa", brand: "Lattafa", name: "Fakhan Lattafa — Pride of Lattafa", price: 20000, category: "Lattafa", img: "images/fakhan-lattafa.jpg", tagline: "L'élégance classique de Lattafa" , notes: { top: "Fleur d'oranger", heart: "Tubéreuse, Jasmin", base: "Vétiver, Patchouli" }, description: "Un floral fruité et sensuel : fleur d'oranger légère en ouverture, cœur floral enchanteur de tubéreuse et de jasmin, fond boisé qui laisse une empreinte durable." },
  { id: "loui-martin-matiere-noire", brand: "Loui Martin", name: "Matière Noire", price: 15000, category: "Loui Martin", img: "images/loui-martin-matiere-noire.jpg", tagline: "Noir profond, sillage envoûtant" , notes: { top: "Jasmin sambac, Rose", heart: "Cyclamen", base: "Patchouli, Encens" }, description: "Un oriental floral puissant : jasmin et rose en ouverture, cœur délicat de cyclamen, fond boisé et résineux à l'encens pour un sillage envoûtant réservé aux soirées d'exception." },
  { id: "loui-martin-immensty", brand: "Loui Martin", name: "Immensty", price: 15000, category: "Loui Martin", img: "images/loui-martin-immensty.jpg", tagline: "Frais et immense, pour chaque jour" , notes: { top: "Agrumes pétillants, Gingembre, Bergamote", heart: "Accord marin, Sauge, Romarin, Géranium", base: "Ambrox, Ambre, Résine de ciste" }, description: "Frais et dynamique : agrumes et gingembre en tête, cœur marin et herbacé, fond ambré chaleureux — un parfum du quotidien qui ne passe pas inaperçu." },
  { id: "loui-martin-vanilla-leather", brand: "Loui Martin", name: "Vanilla Leather", price: 15000, category: "Loui Martin", img: "images/loui-martin-vanilla-leather.jpg", tagline: "Vanille chaude, cuir sensuel" , notes: { top: "Bergamote", heart: "Cuir", base: "Vanille, Musc" }, description: "Un accord vanille-cuir doux et enveloppant, entre la chaleur sucrée de la vanille et le grain plus sec du cuir — un profil réconfortant pour un usage quotidien." },
  { id: "loui-martin-ombre-naomi", brand: "Loui Martin", name: "Ombre Naomi", price: 15000, category: "Loui Martin", img: "images/loui-martin-ombre-naomi.jpg", tagline: "Douceur boisée, subtilement féminine" , notes: { top: "Oud, Encens, Framboise", heart: "Rose, Géranium, Safran", base: "Bois ambré, Benjoin, Bouleau" }, description: "Un oriental profond et lumineux : oud fumé et framboise en ouverture, cœur de rose safranée, fond boisé ambré pour une présence subtile mais durable." },
  { id: "pinnace", brand: "Pinnace", name: "Pinnace", price: 25000, category: "Pinnace", img: "images/pinnace.jpg", tagline: "Signature dorée, prestige discret" , notes: { top: "Orange, Pamplemousse", heart: "Menthe, Cassis", base: "Ambroxan, Musc" }, description: "Une signature dorée et discrète : agrumes frais en ouverture, cœur mentholé et fruité, fond musqué propre — un parfum aromatique élégant pour toute la journée." },
  { id: "brulee", brand: "Brûlée", name: "Brûlée", price: 30000, category: "Autres", img: "images/brulee.jpg", tagline: "Gourmand caramélisé, addictif" , notes: { top: "Noix de coco, Miel, Jasmin absolu", heart: "Noix de coco, Miel, Jasmin absolu", base: "Cuir, Musc, Bois de santal, Résines torréfiées" }, description: "Gourmand caramélisé et addictif : noix de coco et miel en ouverture, jasmin en cœur, fond cuiré et boisé qui apporte chaleur et sensualité." },
  { id: "roses-emotion", brand: "Roses d'Émotion", name: "Roses d'Émotion", price: 20000, category: "Autres", img: "images/roses-emotion.jpg", tagline: "Pétales de rose, émotion pure" , notes: { top: "Rose, Bergamote, Agrumes", heart: "Jasmin, Pivoine, Fleur d'oranger", base: "Patchouli, Vanille, Ambre, Musc" }, description: "Une rose lumineuse et vibrante : agrumes et rose en ouverture, bouquet floral opulent au cœur, fond ambré et vanillé pour une émotion pure du matin au soir." },
  { id: "vanille-exaltante", brand: "Maison Manël", name: "Vanille Exaltante", price: 25000, category: "Maison Manël", img: "images/vanille-exaltante.jpg", tagline: "Vanille parisienne, exaltante" , notes: { top: "Boisé, Sucré", heart: "Vanille", base: "Ambré, Poudré" }, description: "Une vanille sophistiquée qui se diffuse comme un nuage lumineux : gousse de vanille sublimée par un fond ambré et poudré, pour un sillage enveloppant et chic." },
  { id: "armaf-bon-bon-dolce", brand: "Armaf", name: "Bon Bon", price: 20000, category: "Autres", img: "images/armaf-bon-bon-dolce.jpg", tagline: "Sucré et pétillant, plein de peps" , notes: { top: "Mandarine, Bergamote, Papaye, Pomme granny smith", heart: "Fleur de thé, Lys de Madagascar, Pivoine, Abricot, Note marine", base: "Accord gourmand, Bois de santal, Musc velours" }, description: "Sucré et pétillant : fruits juteux et agrumes en ouverture, cœur floral-fruité délicat, fond gourmand et musqué — plein de peps, parfait pour les soirées." },
  { id: "hibiscus-magic", brand: "Artisan Perfumes", name: "Hibiscus Magic", price: 15000, category: "Autres", img: "images/hibiscus-magic.jpg", tagline: "Floral vibrant, magie tropicale" , notes: { top: "Menthe, Cassis", heart: "Rose, Cannelle, Nénuphar", base: "Ambre, Vanille, Cuir, Ambrette, Benjoin, Bois de cèdre" }, description: "Floral vibrant à l'esprit exotique : fraîcheur mentholée en ouverture, cœur épicé et floral, fond gourmand et cuiré pour une signature envoûtante." },
  { id: "oud-nuclear", brand: "Fragrance World", name: "Oud Nuclear", price: 15000, category: "Autres", img: "images/oud-nuclear.jpg", tagline: "Oud puissant, énergie brute" , notes: { top: "Muscade indonésienne, Cardamome, Safran", heart: "Osmanthus, Jasmin, Rose de Turquie", base: "Agarwood, Cuir, Oud, Patchouli, Cèdre, Fève tonka" }, description: "Oud puissant à l'énergie brute : épices intenses en ouverture, cœur floral, fond boisé-cuiré démesuré — pour les amateurs d'oud qui ne cherchent pas la discrétion." },
  { id: "oud-madness", brand: "Fragrance World", name: "Oud Madness", price: 15000, category: "Autres", img: "images/oud-madness.jpg", tagline: "Oud intense qui ne passe pas inaperçu" , notes: { top: "Safran, Rose de Turquie", heart: "Agarwood, Benjoin, Patchouli indonésien, Oud", base: "Ambre, Labdanum, Cuir, Vanille" }, description: "Oud intense et animal : épices et rose en ouverture, cœur boisé résineux, fond ambré et cuiré — un sillage long qui ne passe pas inaperçu." },
  { id: "french-avenue-cocoa-morado", brand: "French Avenue", name: "Cocoa Morado", price: 25000, category: "French Avenue", img: "images/french-avenue-cocoa-morado.jpg" , notes: { top: "Cannelle, Safran, Cardamome, Gingembre, Muscade, Poivre rose", heart: "Dattes, Oud, Encens, Myrrhe, Davana", base: "Vanille, Fève tonka, Benjoin, Labdanum, Cuir, Patchouli, Maté" }, description: "Un oriental boisé riche et chaud : épices et safran en ouverture, cœur de dattes et d'oud, fond cuiré et vanillé pour un sillage luxueux, idéal en saison fraîche." },
  { id: "french-avenue-vulcan-baie", brand: "French Avenue", name: "Vulcan Baie", price: 25000, category: "French Avenue", img: "images/french-avenue-vulcan-baie.jpg" , notes: { top: "Bergamote, Romarin, Cassis", heart: "Basilic, Framboise, Accord vodka", base: "Ambre, Musc, Patchouli, Bois de santal, Oliban" }, description: "Fruité floral audacieux : agrumes et cassis en ouverture, cœur aromatique et fruité, fond boisé et ambré pour un sillage affirmé et expressif." },
  { id: "oclock", brand: "O'Clock", name: "O'Clock", price: 30000, category: "Autres", img: "images/oclock.jpg" , notes: { top: "Pomme, Lavande, Cannelle, Bergamote, Pamplemousse, Accord malté", heart: "Fleur d'oranger, Muguet, Cuir subtil", base: "Vanille, Musc, Patchouli, Ambre" }, description: "Un unisexe parfaitement équilibré : agrumes pétillants et pomme en ouverture, cœur floral délicat, fond boisé-musqué doux et chaleureux." },
  { id: "marshmallow-blush", brand: "Paris Corner", name: "Marshmallow Blush", price: 25000, category: "Autres", img: "images/marshmallow-blush.jpg" , notes: { top: "Fraise, Framboise, Citron", heart: "Ambroxan, Fleur d'oranger, Crème fouettée", base: "Musc, Guimauve, Vanille" }, description: "Une caresse sucrée sur la peau : fruits rouges et agrumes en ouverture, cœur crémeux et floral, fond guimauve-vanille pour une douceur réconfortante." },
  { id: "fakhar-lattafa", brand: "Lattafa", name: "Fakhar Lattafa", price: 20000, category: "Lattafa", img: "images/fakhar-lattafa.jpg" , notes: { top: "Fleur d'oranger", heart: "Tubéreuse, Jasmin", base: "Vétiver, Patchouli" }, description: "Un floral fruité et sensuel : fleur d'oranger légère en ouverture, cœur floral enchanteur de tubéreuse et de jasmin, fond boisé qui laisse une empreinte durable." },
  { id: "vanilla-latte", brand: "Gulf Orchid", name: "Vanilla Latte", price: 30000, category: "Autres", img: "images/vanilla-latte.jpg" , notes: { top: "Caramel, Réglisse, Note beurrée", heart: "Jasmin, Fève tonka, Miel", base: "Vanille, Musc, Ambre" }, description: "Une gourmandise dorée façon café latte : caramel et douceur beurrée en ouverture, cœur miellé et floral, fond vanillé-musqué pour un parfum cocooning." },
  { id: "french-avenue-ghost-spectre", brand: "French Avenue", name: "Ghost Spectre", price: 30000, category: "French Avenue", img: "images/french-avenue-ghost-spectre.jpg" , notes: { top: "Gingembre, Bergamote, Poivre rose, Citron vert", heart: "Cassis, Cardamome, Rose de Turquie", base: "Vanille, Bois de santal, Benjoin, Cèdre, Patchouli, Ambre, Musc" }, description: "Audacieux et énergique : agrumes vifs en ouverture, cœur fruité-épicé raffiné, fond boisé-ambré sophistiqué pour une présence masculine marquante." },
  { id: "french-avenue-spectre", brand: "French Avenue", name: "Spectre Wraith", price: 30000, category: "French Avenue", img: "images/french-avenue-spectre.jpg" , notes: { top: "Encens, Safran, Bois de gaïac", heart: "Cuir, Canne à sucre, Bois ambré, Violette", base: "Fumée, Patchouli, Notes boisées, Bois de santal, Musc noir" }, description: "Boisé fumé pour une puissance tranquille : encens et safran en ouverture, cœur de cuir texturé et sucré, fond fumé et musqué qui installe une aura sombre et sculptée pendant des heures." },
  { id: "musc-devastating", brand: "Editions de Parfums", name: "Musc Devastating — Diamond Ribbon", price: 30000, category: "Autres", img: "images/musc-devastating.jpg" , notes: { top: "Lavande, Mandarine, Bergamote", heart: "Cannelle, Clou de girofle", base: "Vanille, Musc, Fève tonka, Ambre, Bois de santal, Bois de gaïac, Bois de cèdre" }, description: "Oriental épicé et musqué : fraîcheur de lavande en ouverture, cœur épicé chaleureux, fond boisé et musqué romantique et raffiné." },
  { id: "oud-envoutant", brand: "Signature Royale Paris", name: "Oud Envoûtant", price: 30000, category: "Autres", img: "images/oud-envoutant.jpg" , notes: { top: "Framboise, Pêche, Chocolat", heart: "Bois d'oud, Patchouli, Cèdre", base: "Ambre, Vanille, Cuir" }, description: "Mystérieux et enveloppant : fruits et chocolat en ouverture discrète, cœur boisé noble à l'oud, fond ambré-cuiré qui s'installe durablement sur la peau — jusqu'à 24h de tenue." },
  { id: "khamrah-waha", brand: "Lattafa", name: "Khamrah Waha", price: 30000, category: "Lattafa", img: "images/khamrah-waha.jpg" , notes: { top: "Bergamote, Genièvre, Yuzu, Gingembre", heart: "Iris, Concombre, Sauge, Accord sel marin", base: "Akigalawood, Fève tonka, Vanille, Musc, Ambre" }, description: "Un contraste réussi entre fraîcheur marine et chaleur du désert : agrumes et épices en ouverture, cœur frais et iris, fond boisé-vanillé sophistiqué." },
  { id: "king-of-arabia", brand: "Lattafa Pride", name: "King of Arabia", price: 35000, category: "Lattafa", img: "images/king-of-arabia.jpg" , notes: { top: "Bergamote, Framboise", heart: "Bois de cèdre, Osmanthus, Racine d'iris", base: "Cuir, Vanille, Patchouli" }, description: "Fruité-boisé séduisant : agrumes et framboise en ouverture, cœur floral-boisé, fond de cuir affirmé pour un sillage puissant réservé aux occasions spéciales." },
  { id: "eternal-vanille", brand: "Lattafa Pride", name: "Eternal Vanille", price: 35000, category: "Lattafa", img: "images/eternal-vanille.jpg" , notes: { top: "Mûre", heart: "Cacaopulse, Vanille caviar, Cacao", base: "Bois de cèdre, Akigalawood, Fève tonka, Ambre, Benjoin, Musc" }, description: "Gourmand crémeux et addictif : petits fruits en ouverture, cœur cacaoté et vanillé, fond boisé-ambré pour un profil sucré et enveloppant qui évolue toute la journée." },
  { id: "eternal-oud", brand: "Lattafa Pride", name: "Eternal Oud", price: 35000, category: "Lattafa", img: "images/eternal-oud.jpg" , notes: { top: "Prune, Pamplemousse", heart: "Héliotrope, Orchidée", base: "Benjoin, Ambre, Vanille, Labdanum, Fève tonka, Oud" }, description: "Un oud chaleureux et accessible : fruits en ouverture, cœur floral poudré, fond ambré-vanillé qui enveloppe l'oud d'une douceur cocooning, idéal en saison fraîche." },
  { id: "afnan-9pm-rebel", brand: "Afnan", name: "9pm Rebel", price: 25000, category: "Autres", img: "images/afnan-9pm-rebel.jpg", isNew: true , notes: { top: "Mandarine, Ananas, Pomme granny smith", heart: "Bois de cèdre, Mousse de chêne, Vanille", base: "Caramel, Bois secs, Ambre gris, Musc" }, description: "Audacieux et mémorable : fruits vifs en ouverture, cœur boisé chaleureux, fond caramel-ambré pour une signature jeune et sophistiquée." },
  { id: "harmonie-secrete-intense", brand: "Maison Manël", name: "Harmonie Secrète Intense", price: 25000, category: "Maison Manël", img: "images/harmonie-secrete-intense.jpg", isNew: true , notes: { top: "Citron", heart: "Cannelle", base: "Musc, Ambre" }, description: "Frais puis épicé puis musqué : un sillage évolutif, profond et élégant, qui se dévoile en plusieurs facettes tout au long de la journée." },
  { id: "blossom-enigma", brand: "Maison Manël", name: "Blossom Enigma", price: 35000, category: "Maison Manël", img: "images/blossom-enigma.jpg", isNew: true , notes: { top: "Fruité, Sucré, Agrumes", heart: "Bois blancs, Épicé frais", base: "Vanille, Musc, Poudré" }, description: "Joyeux et pétillant : fruits et agrumes en ouverture, cœur boisé légèrement épicé, fond vanillé-musqué lumineux, parfait pour l'été." },
  { id: "jardin-enchante", brand: "Maison Manël", name: "Jardin Enchanté", price: 25000, category: "Maison Manël", img: "images/jardin-enchante.jpg", isNew: true , notes: { top: "Fruité", heart: "Fleurs blanches, Tubéreuse, Jasmin, Patchouli, Violette, Bois de santal", base: "Musc, Vanille" }, description: "Un jardin en pleine floraison : ouverture fruitée, cœur floral opulent de tubéreuse et de jasmin, fond musqué-vanillé pour un sillage radieux et onirique." },
  { id: "illusion-exquise", brand: "Maison Manël", name: "Illusion Exquise", price: 25000, category: "Maison Manël", img: "images/illusion-exquise.jpg", isNew: true , notes: { top: "Agrumes", heart: "Épicé frais", base: "Ambre" }, description: "Frais et ambré, tout en équilibre : ouverture d'agrumes lumineuse, cœur épicé délicat, fond ambré confortable et sensuel." },
  { id: "french-avenue-eclair-affair", brand: "French Avenue", name: "Eclair Affair", price: 25000, category: "French Avenue", img: "images/french-avenue-eclair-affair.jpg", isNew: true , notes: { top: "Jasmin, Vanille bourbon, Lait de coco", heart: "Caramel, Ambre, Accord gourmand", base: "Musc, Fève tonka, Vanille" }, description: "Un dessert dans un flacon : lait de coco et vanille en ouverture, cœur caramel gourmand, fond musqué-vanillé pour une expérience douce et sensuelle." },
  { id: "spectre", brand: "French Avenue", name: "Spectre", price: 25000, category: "French Avenue", img: "images/spectre.jpg", isNew: true , notes: { top: "Encens, Safran, Bois de gaïac", heart: "Cuir, Canne à sucre, Bois ambré, Violette", base: "Fumée, Patchouli, Bois, Bois de santal, Musc noir" }, description: "Boisé fumé et racé dans sa version originale : encens et safran en tête, cœur de cuir et de violette, fond fumé et musqué pour une aura discrète mais intense." },
  { id: "lattafa-musamam-oud-edition", brand: "Lattafa", name: "Musamam — Oud Edition", price: 25000, category: "Lattafa", img: "images/lattafa-musamam-oud-edition.jpg", isNew: true , notes: { top: "Safran, Lavande, Mandarine d'Italie", heart: "Bois ambré, Cèdre de Virginie, Géranium", base: "Encens somalien, Akigalawood, Ciste" }, description: "Boisé aromatique sophistiqué : agrumes et épices en ouverture, cœur boisé-floral, fond résineux et fumé pour une chaleur terreuse raffinée." },
  { id: "lattafa-musamam-white-edition", brand: "Lattafa", name: "Musamam — White Edition", price: 25000, category: "Lattafa", img: "images/lattafa-musamam-white-edition.jpg", isNew: true , notes: { top: "Bergamote, Orange, Épices", heart: "Mahonial, Noix de coco, Ylang-ylang, Ambroxan", base: "Bois de santal, Benjoin, Musc" }, description: "Frais et crémeux : agrumes pétillants en ouverture, cœur coco-floral doux, fond santal-musqué délicat, idéal pour les journées chaudes." },
  { id: "french-avenue-zenith-vanilla", brand: "French Avenue", name: "Zenith Vanilla", price: 25000, category: "French Avenue", img: "images/french-avenue-zenith-vanilla.jpg", isNew: true , notes: { top: "Bergamote, Orange confite, Rhum ambré", heart: "Jasmin, Styrax, Violette", base: "Vanille, Benjoin, Patchouli" }, description: "Ambré et sophistiqué : agrumes et rhum en ouverture, cœur floral résineux, fond vanille-patchouli chaud, sans excès de sucre — élégant en toute occasion." },
  { id: "french-avenue-liquid-brun", brand: "French Avenue", name: "Liquid Brun", price: 25000, category: "French Avenue", img: "images/french-avenue-liquid-brun.jpg", isNew: true , notes: { top: "Cannelle, Bergamote, Cardamome, Fleur d'oranger", heart: "Vanille bourbon, Elemi", base: "Musc, Praline, Ambroxan, Bois de gaïac" }, description: "Ambré-vanillé intense : épices et agrumes en ouverture, cœur vanillé résineux, fond praliné et musqué pour un profil luxueux, parfait en saison fraîche." },
  { id: "maison-manel-oud-ambrosia-intense", brand: "Maison Manël", name: "Oud Ambrosia Intense", price: 25000, category: "Maison Manël", img: "images/maison-manel-oud-ambrosia-intense.jpg", isNew: true , notes: { top: "Fruit de la passion, Agrumes", heart: "Oud, Safran", base: "Rose de Turquie, Bois de cèdre, Bois ambrés" }, description: "Fruité et mystérieux : ouverture pétillante de fruit de la passion, cœur d'oud safrané, fond de rose et de bois précieux pour une signature raffinée." },
  { id: "maison-manel-succulent-caramel", brand: "Maison Manël", name: "Succulent Caramel", price: 25000, category: "Maison Manël", img: "images/maison-manel-succulent-caramel.jpg", isNew: true , notes: { top: "Caramel", heart: "Vanille", base: "Musc" }, description: "Une tentation en flacon : caramel gourmand en ouverture, cœur de vanille onctueuse, fond musqué doux — un plaisir coupable enveloppant." },
  { id: "khamrah", brand: "Lattafa", name: "Khamrah", price: 20000, category: "Lattafa", img: "images/khamrah.jpg", isNew: true , notes: { top: "Cannelle, Muscade, Bergamote", heart: "Dattes, Praline, Tubéreuse", base: "Vanille, Fève tonka, Bois ambrés, Myrrhe, Benjoin, Akigalawood" }, description: "L'original de la lignée Khamrah : épices et agrumes en ouverture, cœur gourmand de dattes et de praline, fond vanillé-boisé riche et très tenace." },
];

// ===== État du panier (persisté en localStorage) =====
let cart = JSON.parse(localStorage.getItem("royal-senteur-cart") || "{}");

function saveCart() {
  localStorage.setItem("royal-senteur-cart", JSON.stringify(cart));
}

function formatPrice(n) {
  return n.toLocaleString("fr-FR").replace(/,/g, " ") + " FCFA";
}

// ===== Rendu du catalogue =====
const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");

function renderFilters() {
  const categories = ["Tous", ...new Set(PRODUCTS.map((p) => p.category))];
  filtersEl.innerHTML = categories
    .map(
      (c, i) =>
        `<button class="filter-btn ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`
    )
    .join("");

  filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtersEl.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid(btn.dataset.cat);
    });
  });
}

function renderGrid(category = "Tous") {
  const items = category === "Tous" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);
  grid.innerHTML = items
    .map((p) => {
      const inCart = !!cart[p.id];
      return `
      <div class="card">
        <div class="card-img" data-id="${p.id}">
          ${p.isNew ? '<span class="badge-new">Nouveau</span>' : ""}
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="card-body">
          <div class="card-brand">${p.brand}</div>
          <h3 class="card-name">${p.name}</h3>
          <div class="card-footer">
            <span class="card-price">${formatPrice(p.price)}</span>
            <button class="add-btn ${inCart ? "added" : ""}" data-id="${p.id}">
              ${inCart ? "Ajouté ✓" : "Ajouter"}
            </button>
          </div>
        </div>
      </div>`;
    })
    .join("");

  grid.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.id);
      btn.textContent = "Ajouté ✓";
      btn.classList.add("added");
      updateCartCount();
    });
  });
}

// ===== Logique panier =====
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
  renderGrid(document.querySelector(".filter-btn.active")?.dataset.cat || "Tous");
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
  renderCart();
  renderGrid(document.querySelector(".filter-btn.active")?.dataset.cat || "Tous");
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find((p) => p.id === id);
    return sum + (p ? p.price * qty : 0);
  }, 0);
}

function updateCartCount() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  document.getElementById("cart-count").textContent = count;
}

const cartItemsEl = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
const cartTotalEl = document.getElementById("cart-total");

function renderCart() {
  const entries = Object.entries(cart);
  updateCartCount();

  if (entries.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Votre panier est vide.</p>';
    checkoutBtn.disabled = true;
    cartTotalEl.textContent = formatPrice(0);
    return;
  }

  cartItemsEl.innerHTML = entries
    .map(([id, qty]) => {
      const p = PRODUCTS.find((p) => p.id === id);
      if (!p) return "";
      return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.name}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${formatPrice(p.price)}</div>
          <div class="qty-row">
            <button class="qty-btn" data-action="dec" data-id="${id}">−</button>
            <span>${qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${id}">+</button>
            <button class="remove-btn" data-action="remove" data-id="${id}">Retirer</button>
          </div>
        </div>
      </div>`;
    })
    .join("");

  cartItemsEl.querySelectorAll("[data-action]").forEach((btn) => {
    const id = btn.dataset.id;
    btn.addEventListener("click", () => {
      if (btn.dataset.action === "inc") changeQty(id, 1);
      if (btn.dataset.action === "dec") changeQty(id, -1);
      if (btn.dataset.action === "remove") removeFromCart(id);
    });
  });

  checkoutBtn.disabled = false;
  cartTotalEl.textContent = formatPrice(cartTotal());
}

// ===== Redirection WhatsApp =====
function buildWhatsAppMessage(customer) {
  let msg = "Bonjour Royal Senteur, je souhaite commander :\n\n";
  Object.entries(cart).forEach(([id, qty]) => {
    const p = PRODUCTS.find((p) => p.id === id);
    if (p) msg += `• ${p.name} x${qty} — ${formatPrice(p.price * qty)}\n`;
  });
  msg += `\nTotal : ${formatPrice(cartTotal())}`;
  msg += `\n\n— Mes informations —`;
  msg += `\nNom : ${customer.name}`;
  msg += `\nTéléphone : ${customer.phone}`;
  msg += `\nAdresse de livraison : ${customer.address}`;
  msg += `\n\nNB : je comprends qu'un acompte de 2 000 FCFA est demandé pour confirmer la commande.`;
  return msg;
}

const checkoutForm = document.getElementById("checkout-form");

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const customer = {
    name: document.getElementById("cust-name").value.trim(),
    phone: document.getElementById("cust-phone").value.trim(),
    address: document.getElementById("cust-address").value.trim(),
  };

  if (!customer.name || !customer.phone || !customer.address) return;

  // Numéro de téléphone : au moins 8 chiffres (espaces, +, - et parenthèses tolérés)
  const phoneDigits = customer.phone.replace(/[\s().+-]/g, "");
  if (!/^\d{8,15}$/.test(phoneDigits)) {
    alert("Merci d'entrer un numéro de téléphone valide (au moins 8 chiffres).");
    return;
  }

  const message = encodeURIComponent(buildWhatsAppMessage(customer));
  if (typeof fbq === "function") { fbq("track", "Lead"); } window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
});

// ===== Drawer panier =====
const drawer = document.getElementById("cart-drawer");
const overlay = document.getElementById("overlay");

function openCart() {
  drawer.classList.add("open");
  overlay.classList.add("open");
}
function closeCart() {
  drawer.classList.remove("open");
  overlay.classList.remove("open");
}

document.getElementById("cart-toggle").addEventListener("click", openCart);
document.getElementById("close-cart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

// ===== Zoom produit (modale) =====
const modalOverlay = document.getElementById("modal-overlay");
const productModal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalBrand = document.getElementById("modal-brand");
const modalName = document.getElementById("modal-name");
const modalDesc = document.getElementById("modal-desc");
const modalNoteTop = document.getElementById("modal-note-top");
const modalNoteHeart = document.getElementById("modal-note-heart");
const modalNoteBase = document.getElementById("modal-note-base");
const modalNotes = document.getElementById("modal-notes");
const modalPrice = document.getElementById("modal-price");
const modalAddBtn = document.getElementById("modal-add-btn");
const modalClose = document.getElementById("modal-close");

function openProductModal(id) {
  const p = PRODUCTS.find((p) => p.id === id);
  if (!p) return;

  modalImg.src = p.img;
  modalImg.alt = p.name;
  modalBrand.textContent = p.brand;
  modalName.textContent = p.name;
  modalDesc.textContent = p.description || p.tagline || "";
  modalPrice.textContent = formatPrice(p.price);

  if (p.notes) {
    modalNotes.style.display = "";
    modalNoteTop.textContent = p.notes.top || "—";
    modalNoteHeart.textContent = p.notes.heart || "—";
    modalNoteBase.textContent = p.notes.base || "—";
  } else {
    modalNotes.style.display = "none";
  }

  modalAddBtn.dataset.id = p.id;
  updateModalAddBtn(p.id);

  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  modalOverlay.classList.add("open");
}

function updateModalAddBtn(id) {
  const inCart = !!cart[id];
  modalAddBtn.textContent = inCart ? "Ajouté ✓" : "Ajouter";
  modalAddBtn.classList.toggle("added", inCart);
}

function closeProductModal() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  modalOverlay.classList.remove("open");
}

grid.addEventListener("click", (e) => {
  const imgBlock = e.target.closest(".card-img");
  if (imgBlock) openProductModal(imgBlock.dataset.id);
});

modalAddBtn.addEventListener("click", () => {
  const id = modalAddBtn.dataset.id;
  addToCart(id);
  updateModalAddBtn(id);
  renderGrid(document.querySelector(".filter-btn.active")?.dataset.cat || "Tous");
});

modalClose.addEventListener("click", closeProductModal);
modalOverlay.addEventListener("click", closeProductModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProductModal();
});

// ===== Init =====
renderFilters();
renderGrid();
renderCart();
