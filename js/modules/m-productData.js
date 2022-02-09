//all products data
export const products = {
    //topskud
    gorilla: {
        name: 'Gorilla',
        price: 79,
        desc: {
            line1: 'Gorilla er som dens navnefælle bygget tæt og kraftfuld ligeledes har den en identisk styrke med sit høje indhold af CBD. Oplev Gorilla når du vil en tur i junglen med vennerne.',
            line2: 'Planten er dyrket indendørs uden brug af GMO'
        },
        imageFolder: '../images/products/topskud/gorilla/', 
        images: ["gorilla_package.webp", "gorilla_item.webp"],
        imagesAlt: ["Produktbillede af topskuddet gorilla, samt dens indpakning.", "Produktbillede af topskuddet gorilla."],
        productContents:{
            cbd: '13-15%',
            thc: '<0,2%',
        }
    },
    copenhagenKush: {
        name: 'Copenhagen Kush',
        price: 79,
        desc: {
            line1: 'Copenhagen Kush er vores meget populære topskud. Den er frisk samt kraftfuld i sin aroma og giver dig følelsen af alt, hvad København kan tilbyde dig en sommeraften med sin overraskende styrke./SPACE/',
            line2: 'Planten er dyrket indendørs uden brug af GMO'
        },
        imageFolder: '../images/products/topskud/copenhagenkush/', 
        images: ["copenhagenkush_package.webp", "copenhagenkush_item.webp"],
        imagesAlt: ["Produktbillede af topskuddet copenhagen kush, samt dens indpakning.", "Produktbillede af topskuddet copenhagen kush."],
        productContents:{
            cbd: '11-13%',
            thc: '<0,2%'
        }
    },
    headshotHaze: {
        name: 'Headshot Haze',
        price: 79,
        desc: {
            line1: 'Headshot Haze er vores kraftigste topskud med et rigt indhold af CBD cannabinoiden. Topskuddet har en indbydende og grøn aroma. Navnet beskriver alt omkring denne blomsts egenskaber',
            line2: 'Planten er dyrket indendørs uden brug af GMO'
        },
        imageFolder: '../images/products/topskud/headshotHaze/', 
        images: ["headshothaze_package.webp", "headshothaze_item.webp"],
        imagesAlt: ["Produktbillede af topskuddet headshot haze, samt dens indpakning.", "Produktbillede af topskuddet headshot haze."],
        productContents:{
            cbd: '14-16%',
            thc: '<0,2%'
        }
    },
    hinduKush: {
        name: 'Hindu Kush',
        price: 79,
        desc: {
            line1: 'Hindu Kush er en premium skunk med dens tætte blomster, grønne udseende og vidunderlige aroma kan den sende dig en tur til Himalaya bjergene hvor den ypperst Zen opnås. Planten er dyrket indendørs og uden brug af GMO.',
        },
        imageFolder: '../images/products/topskud/hinduKush/', 
        images: ["hindukush_package.webp", "hindukush_item.webp"],
        imagesAlt: ["Produktbillede af topskuddet hindu kush, samt dens indpakning.", "Produktbillede af topskuddet hindu kush."],
        productContents:{
            cbd: '12-14%',
            thc: '<0,2%'
        }
    },
    lemonHaze: {
        name: 'Lemon Haze',
        price: 79,
        desc: {
            line1: 'Lemon Haze er let genkendelig grundet aromaen fra frisk citrus og det tætte topskud som danner en flot blomst. Planten er dyrket indendørs og uden brug af GMO. Kan anbefales til lejligheder tidligt på dagen når dagen derpå stadig venter.',
        },
        imageFolder: '../images/products/topskud/lemonhaze/', 
        images: ["lemonhaze_package.webp", "lemonhaze_item.webp"],
        imagesAlt: ["Produktbillede af topskuddet lemon haze, samt dens indpakning.", "Produktbillede af topskuddet lemon haze."],
        productContents:{
            cbd: '10-12%',
            thc: '<0,2%'
        }
    },
    tropicalBuds: {
        name: 'Tropical Buds',
        price: 79,
        desc: {
            line1: 'Tropical Buds er et frisk topskud med aromaer fra syden tropiske frugter. Blomsten er flot krystalliseret med de tætte grønne buds og små rødlige skud imellem.',
            line2: 'Planten er dyrket indendørs uden brug af GMO'
        },
        imageFolder: '../images/products/topskud/tropicalbuds/', 
        images: ["tropicalbuds_package.webp", "tropicalbuds_item.webp"],
        imagesAlt: ["Produktbillede af topskuddet tropical buds, samt dens indpakning.", "Produktbillede af topskuddet tropical buds."],
        productContents:{
            cbd: '6-10%',
            thc: '<0,2%',
            cbn: '2-4%'

        }
    },
    superGrass: {
        name: 'Super Grass',
        price: 79,
        desc: {
            line1: 'Super Grass er det fuldendte græs topskud som har et lysegrønt udseende. Vi kalder det super græs grundet sine super evner til at sprede rolige og aromatiske dufte.',
            line2: 'Planten er dyrket indendørs uden brug af GMO'
        },
        imageFolder: '../images/products/topskud/supergrass/', 
        images: ["supergrass_package.webp", "supergrass_item.webp", "supergrass_package_overflow.webp"],
        imagesAlt: ["Produktbillede af topskuddet super grass, samt dens indpakning.", "Produktbillede af topskuddet super grass.", "Produktbillede af topskuddet super grass, samt dens indpakning og massere af overflydende skunk."],
        productContents:{
            cbd: '11-13%',
            thc: '<0,2%'
        }
    },
    pineappleExpress: {
        name: 'Pineapple Express',
        price: 79,
        desc: {
            line1: 'Pineapple Express er bedst kendt fra kultfilmen som sin navnefælle. Den er dyrket økologisk i væksthus, og har frugtige aromaer med spidse undertoner af ananas. ',
            line2: 'Planten er dyrket indendørs uden brug af GMO'
        },
        imageFolder: '../images/products/topskud/pineappleexpress/', 
        images: ["pineappleexpress_package.webp", "pineappleexpress_item.webp"],
        imagesAlt: ["Produktbillede af topskuddet pineapple express, samt dens indpakning.", "Produktbillede af topskuddet pineapple express."],
        productContents:{
            cbd: '14.82%',
            thc: '<0,2%',
            cbg: '0.02%',
            cbc: '0.02%'
        }
    },
    //startpakken
    startpakken: {
        name: 'Startpakken',
        price: 295,
        desc: {
            line1: '🥦 ÅBNINGSTILBUD - NORMALT 395,- 🥦/SPACE/',
            line2: 'Er du i tvivl om hvad du skal vælge, eller vil du bare gerne have lidt af hvert?/SPACE/',
            line3: 'Vælg startpakken, og modtag 5 forskellige topskud./SPACE/',
            line4: 'Starpakken indeholder samlet 5 gram./SPACE/',
            line5: 'Bemærk at starpakken ikke nødvendigvis indeholder de viste varianter, da vi hele tiden holder den opdateret med vores betsellere./SPACE/'
        },
        imageFolder: '../images/products/startpakken/', 
        images: ["startpakken_large.webp"],
        imagesAlt: ["Produktbillede af startpakken, med de top 5 mest populære topskud."],
    },
    //3 pak
    headshotHaze3Pak: {
        name: 'Headshot Haze (3-Pak)',
        price: 269,
        desc: {
            line1: '3 stk. røgelsespinde.',
            line2: 'Hver røgelsespind indeholder ca. 1 gram cannabis./SPACE/',
            line3: 'Headshot Haze er vores kraftigste topskud med et rigt indhold af CBD cannabinoiden. Topskuddet har en indbydende og grøn aroma. Navnet beskriver alt omkring denne blomsts egenskaber',
            line4: 'Planten er dyrket indendørs uden brug af GMO'
        },
        imageFolder: '../images/products/', 
        images: ["joints/roegelsespinde2.webp", "topskud/headshothaze/headshothaze_item.webp", "joints/roegelsespinde_klister.webp"],
        imagesAlt: ["Produktbillede af 3 joints og lidt topskud bagved", "Produktbillede af topskuddet headshot haze.", "Produktbillede af klistermærker med lidt skunk på.."],
        productContents:{
            cbd: '14-16%',
            thc: '<0,2%'
        }
    },
    superGrass3Pak: {
        name: 'Super Grass (3-Pak)',
        price: 269,
        desc: {
            line1: '3 stk. røgelsespinde.',
            line2: 'Hver røgelsespind indeholder ca. 1 gram cannabis./SPACE/',
            line3: 'Super Grass er det fuldendte græs topskud som har et lysegrønt udseende. Vi kalder det super græs grundet sine super evner til at sprede rolige og aromatiske dufte.',
            line4: 'Planten er dyrket indendørs uden brug af GMO'
        },
        imageFolder: '../images/products/', 
        images: ["joints/roegelsespinde2.webp", "topskud/supergrass/supergrass_item.webp", "topskud/supergrass/supergrass_package_overflow.webp", "joints/roegelsespinde_klister.webp"],
        imagesAlt: ["Produktbillede af 3 joints og lidt topskud bagved", "Produktbillede af topskuddet super grass.", "Produktbillede af topskuddet super grass, samt dens indpakning og massere af overflydende skunk.", "Produktbillede af klistermærker med lidt skunk på.."],
        productContents:{
            cbd: '11-13%',
            thc: '<0,2%'
        }
    },
    hinduKush3Pak: {
        name: 'Hindu Kush (3-Pak)',
        price: 269,
        desc: {
            line1: '3 stk. røgelsespinde.',
            line2: 'Hver røgelsespind indeholder ca. 1 gram cannabis./SPACE/',
            line3: 'Hindu Kush er en premium skunk med dens tætte blomster, grønne udseende og vidunderlige aroma kan den sende dig en tur til Himalaya bjergene hvor den ypperst Zen opnås. Planten er dyrket indendørs og uden brug af GMO.',
        },
        imageFolder: '../images/products/', 
        images: ["joints/roegelsespinde2.webp", "topskud/hindukush/hindukush_item.webp", "joints/roegelsespinde_klister.webp"],
        imagesAlt: ["Produktbillede af 3 joints og lidt topskud bagved", "Produktbillede af topskuddet hindu kush.", "Produktbillede af klistermærker med lidt skunk på.."],
        productContents:{
            cbd: '12-14%',
            thc: '<0,2%'
        }
    },
   gorilla3Pak: {
        name: 'Gorilla (3-Pak)',
        price: 269,
        desc: {
            line1: '3 stk. røgelsespinde.',
            line2: 'Hver røgelsespind indeholder ca. 1 gram cannabis./SPACE/',
            line3: 'Gorilla er som dens navnefælle bygget tæt og kraftfuld ligeledes har den en identisk styrke med sit høje indhold af CBD. Oplev Gorilla når du vil en tur i junglen med vennerne.',
            line4: 'Planten er dyrket indendørs uden brug af GMO'
        },
        imageFolder: '../images/products/', 
        images: ["joints/roegelsespinde2.webp", "topskud/gorilla/gorilla_item.webp", "joints/roegelsespinde_klister.webp"],
        imagesAlt: ["Produktbillede af 3 joints og lidt topskud bagved", "Produktbillede af topskuddet gorilla.", "Produktbillede af klistermærker med lidt skunk på.."],
        productContents:{
            cbd: '13-15%',
            thc: '<0,2%'
        }
    },
    tropicalBuds3Pak: {
        name: 'Tropical Buds (3-Pak)',
        price: 269,
        desc: {
            line1: '3 stk. røgelsespinde.',
            line2: 'Hver røgelsespind indeholder ca. 1 gram cannabis./SPACE/',
            line3: 'Tropical Buds er et frisk topskud med aromaer fra syden tropiske frugter. Blomsten er flot krystalliseret med de tætte grønne buds og små rødlige skud imellem.',
            line4: 'Planten er dyrket indendørs uden brug af GMO'
        },
        imageFolder: '../images/products/', 
        images: ["joints/roegelsespinde2.webp", "topskud/tropicalbuds/tropicalbuds_item.webp", "joints/roegelsespinde_klister.webp"],
        imagesAlt: ["Produktbillede af 3 joints og lidt topskud bagved", "Produktbillede af topskuddet tropical buds.", "Produktbillede af klistermærker med lidt skunk på.."],
        productContents:{
            cbd: '6-10%',
            thc: '<0,2%',
            cbn: '2-4%'
        }
    },
    copenhagenKush3Pak: {
        name: 'Tropical Buds (3-Pak)',
        price: 269,
        desc: {
            line1: '3 stk. røgelsespinde.',
            line2: 'Hver røgelsespind indeholder ca. 1 gram cannabis./SPACE/',
            line3: 'Copenhagen Kush er vores meget populære topskud. Den er frisk samt kraftfuld i sin aroma og giver dig følelsen af alt, hvad København kan tilbyde dig en sommeraften med sin overraskende styrke./SPACE/',
            line4: 'Planten er dyrket indendørs uden brug af GMO'
        },
        imageFolder: '../images/products/', 
        images: ["joints/roegelsespinde2.webp", "topskud/copenhagenkush/copenhagenkush_item.webp", "joints/roegelsespinde_klister.webp"],
        imagesAlt: ["Produktbillede af 3 joints og lidt topskud bagved", "Produktbillede af topskuddet copenhagen kush.", "Produktbillede af klistermærker med lidt skunk på.."],
        productContents:{
            cbd: '11-13%',
            thc: '<0,2%'
        }
    },
    lemonHaze3Pak: {
        name: 'Lemon Haze (3-Pak)',
        price: 269,
        desc: {
            line1: '3 stk. røgelsespinde./SPACE/',
            line2: 'Lemon Haze er let genkendelig grundet aromaen fra frisk citrus og det tætte topskud som danner en flot blomst. Planten er dyrket indendørs og uden brug af GMO. Kan anbefales til lejligheder tidligt på dagen når dagen derpå stadig venter.',
        },
        imageFolder: '../images/products/', 
        images: ["joints/roegelsespinde.webp", "topskud/lemonhaze/lemonhaze_package.webp"],
        imagesAlt: ["Produktbillede af 3 joints og lidt topskud bagved", "Produktbillede af topskuddet lemon haze og dens indpakning."],
        productContents:{
            cbd: '10-12%',
            thc: '<0,2%'
        }
    },
    madeInHeaven3Pak: {
        name: 'Made In Heaven (3-Pak)',
        price: 269,
        desc: {
            line1: '3 stk. røgelsespinde./SPACE/',
            line2: 'Hver røgelsespind indeholder ca. 1 gram cannabis./SPACE/',
            line2: 'Made in heaven giver aromatisk og rolige dufte som kan gøre dig så let som en sky. Den er dyrket udendørs uden pesticider.',
        },
        imageFolder: '../images/products/', 
        images: ["joints/roegelsespinde.webp", "topskud/madeinheaven/madeinheaven_package.webp", "joints/roegelsespinde_klister.webp"],
        imagesAlt: ["Produktbillede af 3 joints og lidt topskud bagved", "Produktbillede af topskuddet made in heaven.", "Produktbillede af klistermærker med lidt skunk på.."],
        productContents:{
            cbd: '0.16%',
            thc: '<0,2%',
            cbn: '0.02%'
        }
    },
}