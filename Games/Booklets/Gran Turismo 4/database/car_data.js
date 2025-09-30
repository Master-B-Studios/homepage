const showroomVideos = {
    ac_cars: [
        { name: "427 SC", src: "cars/AC_cars_427_SC_1966.mp4", data: { country: "Grossbritannien", production_year: "1966", drive: "FR", power: "485", weight: "1311", length: "3962", worth: "423.200" } }
    ],
    acura: [
        { name: "3.2 CL Type S", src: "cars/Acura_CL_2001_3.2_Type-S.mp4", data: { country: "Japan", production_year: "2001", drive: "FF", power: "264", weight: "1592", length: "4875", worth: "~27.000" } },
        { name: "3.2 CL Type S", src: "cars/Acura_CL_2003_3.2_Type-S.mp4", data: { country: "Japan", production_year: "2003", drive: "FF", power: "264", weight: "1563", length: "4875", worth: "32.420" } },
        { name: "Integra Type R", src: "cars/Acura_Integra_2001_Type_R.mp4", data: { country: "Japan", production_year: "2001", drive: "FF", power: "180", weight: "1197", length: "4379", worth: "~19.000" } },
        { name: "NSX", src: "cars/Acura_NSX_1991.mp4", data: { country: "Japan", production_year: "1991", drive: "MR", power: "244", weight: "1365", length: "4405", worth: "~28.000" } },
        { name: "NSX Coupe", src: "cars/Acura_NSX_1997_Coupe.mp4", data: { country: "Japan", production_year: "1997", drive: "MR", power: "294", weight: "1435", length: "4425", worth: "~35.000" } },
        { name: "NSX", src: "cars/Acura_NSX_2004.mp4", data: { country: "Japan", production_year: "2004", drive: "MR", power: "294", weight: "1430", length: "4425", worth: "94.440" } },
        { name: "RSX Type S", src: "cars/Acura_RSX_2004_Type-S.mp4", data: { country: "Japan", production_year: "2004", drive: "FF", power: "203", weight: "1255", length: "4374", worth: "24.740" } }
    ],
    alfa_romeo: [
        { name: "147 2.0 Twinspark", src: "cars/Alfa_Romeo_147_2002_2.0_Twinspark.mp4", data: { country: "Italien", production_year: "2002", drive: "FF", power: "150", weight: "1280", length: "4166", worth: "30.590" } },
        { name: "147 GTA", src: "cars/Alfa_Romeo_147_2002_GTA.mp4", data: { country: "Italien", production_year: "2002", drive: "FF", power: "246", weight: "1360", length: "4191", worth: "48.040" } },
        { name: "155 2.5 V6 TI", src: "cars/Alfa_Romeo_155_1993_2.5_V6_TI.mp4", data: { country: "Italien", production_year: "1993", drive: "4x4", power: "413", weight: "1010", length: "4572", worth: "La Festa Italiano" } },
        { name: "156 2.5 V6 24V", src: "cars/Alfa_Romeo_156_1998_2.5_V6_24V.mp4", data: { country: "Italien", production_year: "1998", drive: "FF", power: "190", weight: "1320", length: "4420", worth: "~27.000" } },
        { name: "166 2.5 V6 24V Sportronic", src: "cars/Alfa_Romeo_166_1998_2.5_V6_24V_Sportronic.mp4", data: { country: "Italien", production_year: "1998", drive: "FF", power: "193", weight: "1520", length: "4699", worth: "~27.000" } },
        { name: "Giulia Sprint Speciale", src: "cars/Alfa_Romeo_Giulia_1963_Sprint_Speciale.mp4", data: { country: "Italien", production_year: "1963", drive: "FR", power: "115", weight: "950", length: "4115", worth: "1000 Meilen" } },
        { name: "Giulia Sprint GTA", src: "cars/Alfa_Romeo_Giulia_1965_Sprint_GTA.mp4", data: { country: "Italien", production_year: "1965", drive: "FR", power: "115", weight: "745", length: "4064", worth: "GTA Cup" } },
        { name: "GT 3.2 V6 24V", src: "cars/Alfa_Romeo_GT_2004_3.2_V6_24V.mp4", data: { country: "Italien", production_year: "2004", drive: "FF", power: "226", weight: "1347", length: "4470", worth: "39.010" } },
        { name: "GTV 3.0 V6 24V", src: "cars/Alfa_Romeo_GTV_2001_3.0_V6_24V.mp4", data: { country: "Italien", production_year: "2001", drive: "FF", power: "216", weight: "1416", length: "4267", worth: "49.060" } },
        { name: "Spider Duetto", src: "cars/Alfa_Romeo_Spider_1966_Duetto.mp4", data: { country: "Italien", production_year: "1966", drive: "FR", power: "110", weight: "960", length: "4242", worth: "35.300" } },
        { name: "Spider 3.0i V6 24V", src: "cars/Alfa_Romeo_Spider_2001_3.0i_V6_24V.mp4", data: { country: "Italien", production_year: "2001", drive: "FF", power: "216", weight: "1450", length: "4267", worth: "51.190" } }
    ],
    alpine: [
        { name: "A110 1600 S", src: "cars/Alpine_A110_1973_1600_S.mp4", data: { country: "Frankreich", production_year: "1973", drive: "RR", power: "138", weight: "715", length: "3850", worth: "Renault Alpine Cup" } },
        { name: "A310 1600 VE", src: "cars/Alpine_A310_1973_1600_VE.mp4", data: { country: "Frankreich", production_year: "1973", drive: "RR", power: "130", weight: "930", length: "4166", worth: "George V Rallye - Leicht" } }
    ],
    amuse: [
        { name: "Carbon R", src: "cars/Amuse_Carbon_2004_R.mp4", data: { country: "Japan", production_year: "2004", drive: "FR", power: "600", weight: "1123", length: "4730", worth: "250.000" } },
        { name: "S2000 Street Version", src: "cars/Amuse_S2000_2004_Street_Version.mp4", data: { country: "Japan", production_year: "2004", drive: "FR", power: "254", weight: "1189", length: "4154", worth: "50.000" } },
        { name: "S2000 R1", src: "cars/Amuse_S2000_2004_R1.mp4", data: { country: "Japan", production_year: "2004", drive: "FR", power: "260", weight: "1120", length: "4154", worth: "150.000" } },
        { name: "S2000 GT1", src: "cars/Amuse_S2000_2004_GT1.mp4", data: { country: "Japan", production_year: "2004", drive: "FR", power: "510", weight: "1179", length: "4730", worth: "250.000" } }
    ],
    aston_martin: [
        { name: "DB7 Vantage Coupe", src: "cars/Aston_Martin_DB7_2000_Vantage_Coupe.mp4", data: { country: "Grossbritannien", production_year: "2000", drive: "FR", power: "419", weight: "1775", length: "4674", worth: "164.260" } },
        { name: "DB9 Coupe", src: "cars/Aston_Martin_DB9_2003_Coupe.mp4", data: { country: "Grossbritannien", production_year: "2003", drive: "FR", power: "449", weight: "1710", length: "4699", worth: "164.470 | Aston Martin Carnival" } },
        { name: "V8 Vantage", src: "cars/Aston_Martin_V8_1999_Vantage.mp4", data: { country: "Grossbritannien", production_year: "1999", drive: "FR", power: "550", weight: "1970", length: "4724", worth: "~291.199" } },
        { name: "Vanquish", src: "cars/Aston_Martin_Vanquish_2004.mp4", data: { country: "Grossbritannien", production_year: "2004", drive: "FR", power: "459", weight: "1835", length: "4648", worth: "238.750" } }
    ],
    audi: [
        { name: "A2 1.4", src: "cars/Audi_A2_2002_1.4.mp4", data: { country: "Deutschland", production_year: "2002", drive: "FF", power: "72", weight: "920", length: "3826", worth: "22.400" } },
        { name: "S3", src: "cars/Audi_A3_2002_S.mp4", data: { country: "Deutschland", production_year: "2002", drive: "4x4", power: "222", weight: "1420", length: "4159", worth: "41.070" } },
        { name: "A3 3.2 Quattro", src: "cars/Audi_A3_2003_3.2_Quattro.mp4", data: { country: "Deutschland", production_year: "2003", drive: "4x4", power: "246", weight: "1495", length: "4203", worth: "42.490" } },
        { name: "S4", src: "cars/Audi_A4_1998_S.mp4", data: { country: "Deutschland", production_year: "1998", drive: "4x4", power: "269", weight: "1510", length: "4483", worth: "~46.000" } },
        { name: "RS4 Avant", src: "cars/Audi_A4_2001_RS_Avant.mp4", data: { country: "Deutschland", production_year: "2001", drive: "4x4", power: "378", weight: "1619", length: "4525", worth: "41.380" } },
        { name: "S4", src: "cars/Audi_A4_2003_S.mp4", data: { country: "Deutschland", production_year: "2003", drive: "4x4", power: "340", weight: "1599", length: "4575", worth: "55.430" } },
        { name: "A4 Touring Car", src: "cars/Audi_A4_2004_Touring_Car.mp4", data: { country: "Deutschland", production_year: "2004", drive: "FR", power: "460", weight: "1080", length: "4344", worth: "450.000" } },
        { name: "RS6", src: "cars/Audi_A6_2002_RS.mp4", data: { country: "Deutschland", production_year: "2002", drive: "4x4", power: "453", weight: "1839", length: "4858", worth: "117.060" } },
        { name: "RS6 Avant", src: "cars/Audi_A6_2002_RS_Avant.mp4", data: { country: "Deutschland", production_year: "2002", drive: "4x4", power: "453", weight: "1880", length: "4852", worth: "117.060" } },
        { name: "Auto Union V16 Type C Streamline", src: "cars/Audi_Auto_Union_V16_1937_Type_C_Streamline.mp4", data: { country: "Deutschland", production_year: "1937", drive: "MR", power: "520", weight: "1000", length: "5000", worth: "500.000 | Grand Valley 300 km" } },
        { name: "Le Mans Quattro", src: "cars/Audi_Le_Mans_2003_Quattro.mp4", data: { country: "Deutschland", production_year: "2003", drive: "4x4", power: "641", weight: "1531", length: "4370", worth: "Tourist Trophy" } },
        { name: "Nuvolari Quattro", src: "cars/Audi_Nuvolari_2003_Quattro.mp4", data: { country: "Deutschland", production_year: "2003", drive: "4x4", power: "608", weight: "1549", length: "4370", worth: "25% Spielfortschritt" } },
        { name: "Pikes Peak Quattro", src: "cars/Audi_Pikes_Peak_2003_Quattro.mp4", data: { country: "Deutschland", production_year: "2003", drive: "4x4", power: "508", weight: "1901", length: "5000", worth: "A3 Cup" } },
        { name: "Quattro", src: "cars/Audi_Quattro_1982.mp4", data: { country: "Deutschland", production_year: "1982", drive: "4x4", power: "200", weight: "1290", length: "4000", worth: "90.360" } },
        { name: "R8 Race Car", src: "cars/Audi_R8_2001_Race_Car.mp4", data: { country: "Deutschland", production_year: "2001", drive: "MR", power: "795", weight: "899", length: "4000", worth: "4.500.000 | Circuit De La Sarthe I 24h" } },
        { name: "TT Coupe 1.8T Quattro", src: "cars/Audi_TT_2000_Coupe_1.8T_Quattro.mp4", data: { country: "Deutschland", production_year: "2000", drive: "4x4", power: "219", weight: "1395", length: "4041", worth: "47.700" } },
        { name: "TT Coupe 3.2 Quattro", src: "cars/Audi_TT_2003_Coupe_3.2_Quattro.mp4", data: { country: "Deutschland", production_year: "2003", drive: "4x4", power: "239", weight: "1520", length: "4041", worth: "57.740" } },
        { name: "TT-R Touring Car", src: "cars/Audi_TT_2002_R_Touring_Car.mp4", data: { country: "Deutschland", production_year: "2002", drive: "FR", power: "470", weight: "1080", length: "4600", worth: "550.000 | Nürburgring 4h" } }
    ],
    autobacs: [
        { name: "Garaiya", src: "cars/Autobacs_Garaiya_2002.mp4", data: { country: "Japan", production_year: "2002", drive: "MR", power: "200", weight: "799", length: "3775", worth: "65.000" } },
        { name: "Garaiya ARTA JGTC", src: "cars/Autobacs_Garaiya_2002_ARTA_JGTC.mp4", data: { country: "Japan", production_year: "2003", drive: "MR", power: "323", weight: "1125", length: "3775", worth: "500.000" } }
    ],
    autobianchi: [
        { name: "A112 Abarth", src: "cars/Autobianchi_A112_1979_Abarth.mp4", data: { country: "Italien", production_year: "1979", drive: "FF", power: "70", weight: "700", length: "3270", worth: "Sunday Cup" } }
    ],
    bentley: [
        { name: "Speed 8", src: "cars/Bentley_Speed_8_2003.mp4", data: { country: "Grossbritannien", production_year: "2003", drive: "MR", power: "795", weight: "900", length: "4645", worth: "Circuit De La Sarthe II 24h" } }
    ],
    blitz: [
        { name: "ER34 D1 Spec", src: "cars/Blitz_ER34_2004_D1_Spec.mp4", data: { country: "Japan", production_year: "2004", drive: "FR", power: "475", weight: "1179", length: "4444", worth: "200.000" } }
    ],
    bmw: [
        { name: "120d", src: "cars/BMW_1_2004_20d.mp4", data: { country: "Deutschland", production_year: "2004", drive: "FR", power: "161", weight: "1415", length: "4227", worth: "33.020" } },
        { name: "120i", src: "cars/BMW_1_2004_20i.mp4", data: { country: "Deutschland", production_year: "2004", drive: "FR", power: "148", weight: "1335", length: "4227", worth: "31.940" } },
        { name: "M3 GTR Race Car", src: "cars/BMW_3_2001_M_GTR_Race_Car.mp4", data: { country: "Deutschland", production_year: "2001", drive: "FR", power: "444", weight: "1120", length: "4617", worth: "Schwarzwald Liga A" } },
        { name: "320i Touring Car", src: "cars/BMW_3_2003_20i_Touring_Car.mp4", data: { country: "Deutschland", production_year: "2003", drive: "FR", power: "260", weight: "1141", length: "4000", worth: "450.000" } },
        { name: "M3 CSL", src: "cars/BMW_3_2003_M_CSL.mp4", data: { country: "Deutschland", production_year: "2003", drive: "FR", power: "354", weight: "1386", length: "4617", worth: "113.610" } },
        { name: "M3 GTR", src: "cars/BMW_3_2003_M_GTR.mp4", data: { country: "Deutschland", production_year: "2003", drive: "FR", power: "380", weight: "1349", length: "4617", worth: "Club \"M\"" } },
        { name: "M3", src: "cars/BMW_3_2004_M.mp4", data: { country: "Deutschland", production_year: "2004", drive: "FR", power: "339", weight: "1569", length: "4617", worth: "74.560" } },
        { name: "330i", src: "cars/BMW_3_2005_30i.mp4", data: { country: "Deutschland", production_year: "2005", drive: "FR", power: "254", weight: "1525", length: "4520", worth: "48.040" } },
        { name: "M5", src: "cars/BMW_5_2005_M.mp4", data: { country: "Deutschland", production_year: "2005", drive: "FR", power: "500", weight: "1715", length: "4855", worth: "116.650" } },
        { name: "2002 Turbo", src: "cars/BMW_2002_1973_Turbo.mp4", data: { country: "Deutschland", production_year: "1973", drive: "FR", power: "167", weight: "1080", length: "4220", worth: "BMW 1-Serie Pokal" } },
        { name: "McLaren F1 GTR Race Car", src: "cars/BMW_McLaren_F1_1997_GTR_Race_Car.mp4", data: { country: "Deutschland", production_year: "1997", drive: "MR", power: "602", weight: "950", length: "4924", worth: "Gran Turismo All-Stars" } },
        { name: "V12 LMR", src: "cars/BMW_V12_1999_LMR_Race_Car.mp4", data: { country: "Deutschland", production_year: "1999", drive: "MR", power: "799", weight: "900", length: "4924", worth: "4.500.000" } },
        { name: "M Coupe", src: "cars/BMW_Z3_1998_M_Coupe.mp4", data: { country: "Deutschland", production_year: "1998", drive: "FR", power: "316", weight: "1465", length: "4025", worth: "~51.000" } },
        { name: "Z4", src: "cars/BMW_Z4_2003.mp4", data: { country: "Deutschland", production_year: "2003", drive: "FR", power: "227", weight: "1365", length: "4000", worth: "75.610" } }
    ],
    buick: [
        { name: "GNX", src: "cars/Buick_GNX_1987.mp4", data: { country: "Amerika", production_year: "1987", drive: "FR", power: "280", weight: "1601", length: "5092", worth: "31.080" } },
        { name: "Special", src: "cars/Buick_Special_1962.mp4", data: { country: "Amerika", production_year: "1962", drive: "FR", power: "586", weight: "1364", length: "4724", worth: "58.000" } }
    ],
    cadillac: [
        { name: "Cien Concept", src: "cars/Cadillac_CIEN_2002_Concept.mp4", data: { country: "Amerika", production_year: "2002", drive: "MR", power: "760", weight: "1500", length: "4000", worth: "Rallye d'Umbria Leicht" } }
    ],
    callaway: [
        { name: "C12", src: "cars/Callaway_C12_2003.mp4", data: { country: "Amerika", production_year: "2003", drive: "FR", power: "439", weight: "1481", length: "4852", worth: "175.880" } }
    ],
    caterham: [
        { name: "Seven Fireblade", src: "cars/Caterham_Seven_2002_Fireblade.mp4", data: { country: "Grossbritannien", production_year: "2002", drive: "FR", power: "157", weight: "369", length: "3100", worth: "60.000" } }
    ],
    chaparral: [
        { name: "2D", src: "cars/Chaparral_2D_1967.mp4", data: { country: "Amerika", production_year: "1967", drive: "MR", power: "426", weight: "771", length: "4000", worth: "1.100.000 | Nürburgring 4h" } },
        { name: "2J", src: "cars/Chaparral_2J_1970.mp4", data: { country: "Amerika", production_year: "1970", drive: "MR", power: "683", weight: "821", length: "4000", worth: "1.200.000" } }
    ],
    chevrolet: [
        { name: "Camaro SS", src: "cars/Chevrolet_Camaro_1969_SS.mp4", data: { country: "Amerika", production_year: "1969", drive: "FR", power: "298", weight: "1401", length: "4724", worth: "60.000" } },
        { name: "Camaro Z28", src: "cars/Chevrolet_Camaro_1969_Z28.mp4", data: { country: "Amerika", production_year: "1969", drive: "FR", power: "289", weight: "1415", length: "4724", worth: "65.000" } },
        { name: "Camaro Z-IROC Concept", src: "cars/Chevrolet_Camaro_1988_Z-IROC_Concept.mp4", data: { country: "Amerika", production_year: "1988", drive: "FR", power: "233", weight: "1467", length: "4877", worth: "Camaro Meeting" } },
        { name: "Camaro Z28 Coupe", src: "cars/Chevrolet_Camaro_1997_Z28_Coupe.mp4", data: { country: "Amerika", production_year: "1997", drive: "FR", power: "285", weight: "1561", length: "4907", worth: "~12.000" } },
        { name: "Camaro LM Race Car", src: "cars/Chevrolet_Camaro_2000_LM_Race_Car.mp4", data: { country: "Amerika", production_year: "2000", drive: "FR", power: "601", weight: "1160", length: "4915", worth: "Stars & Stripes" } },
        { name: "Camaro SS", src: "cars/Chevrolet_Camaro_2000_SS.mp4", data: { country: "Amerika", production_year: "2000", drive: "FR", power: "331", weight: "1560", length: "4910", worth: "22.150" } },
        { name: "Chevelle SS 454", src: "cars/Chevrolet_Chevelle_1970_SS.mp4", data: { country: "Amerika", production_year: "1970", drive: "FR", power: "449", weight: "1762", length: "5121", worth: "Hot Rod Competition" } },
        { name: "Corvette C1 Convertible", src: "cars/Chevrolet_Corvette_1954_C1_Convertible.mp4", data: { country: "Amerika", production_year: "1954", drive: "FR", power: "150", weight: "1309", length: "4250", worth: "All-American Championship" } },
        { name: "Corvette C2 Stingray Sport Coupe", src: "cars/Chevrolet_Corvette_1963_C2_Stingray_Sport_Coupe.mp4", data: { country: "Amerika", production_year: "1963", drive: "FR", power: "359", weight: "1380", length: "4448", worth: "84.890" } },
        { name: "Corvette C2 Z06 Race Car", src: "cars/Chevrolet_Corvette_1963_C2_Z06_Race_Car.mp4", data: { country: "Amerika", production_year: "1963", drive: "FR", power: "600", weight: "1168", length: "4448", worth: "Corvette Festival" } },
        { name: "Corvette C3 Stingray L46 350", src: "cars/Chevrolet_Corvette_1969_C3_Stingray_L46_350.mp4", data: { country: "Amerika", production_year: "1969", drive: "FR", power: "350", weight: "1490", length: "4636", worth: "71.500" } },
        { name: "Corvette C4 ZR-1", src: "cars/Chevrolet_Corvette_1990_C4_ZR-1.mp4", data: { country: "Amerika", production_year: "1990", drive: "FR", power: "375", weight: "1601", length: "4534", worth: "82.000" } },
        { name: "Corvette C4 Grand Sport", src: "cars/Chevrolet_Corvette_1996_C4_Grand_Sport.mp4", data: { country: "Amerika", production_year: "1996", drive: "FR", power: "336", weight: "1496", length: "4534", worth: "~22.950" } },
        { name: "Corvette C5-R", src: "cars/Chevrolet_Corvette_2000_C5-R.mp4", data: { country: "Amerika", production_year: "2000", drive: "FR", power: "619", weight: "1139", length: "4643", worth: "1.000.000" } },
        { name: "Corvette C5 Z06", src: "cars/Chevrolet_Corvette_2000_C5_Z06.mp4", data: { country: "Amerika", production_year: "2000", drive: "FR", power: "379", weight: "1409", length: "4566", worth: "~53.570" } },
        { name: "Silverado SST Concept", src: "cars/Chevrolet_Silverado_2002_SST_Concept.mp4", data: { country: "Amerika", production_year: "2002", drive: "FR", power: "495", weight: "2268", length: "5702", worth: "Sports Truck Race" } },
        { name: "SSR", src: "cars/Chevrolet_SSR_2003.mp4", data: { country: "Amerika", production_year: "2003", drive: "FR", power: "289", weight: "2248", length: "4902", worth: "44.560" } }
    ],
    chrysler: [
        { name: "300C", src: "cars/Chrysler_300C_2005.mp4", data: { country: "Amerika", production_year: "2005", drive: "FR", power: "339", weight: "1878", length: "4999", worth: "34.780" } },
        { name: "Crossfire", src: "cars/Chrysler_Crossfire_2004.mp4", data: { country: "Amerika", production_year: "2004", drive: "FR", power: "214", weight: "1361", length: "4059", worth: "35.670" } },
        { name: "Prowler", src: "cars/Chrysler_Prowler_2002.mp4", data: { country: "Amerika", production_year: "2002", drive: "FR", power: "247", weight: "1287", length: "3999", worth: "47.430 | Spider & Roadster" } },
        { name: "PT Cruiser", src: "cars/Chrysler_PT_Cruiser_2000.mp4", data: { country: "Amerika", production_year: "2000", drive: "FR", power: "149", weight: "1261", length: "4288", worth: "17.980" } }
    ],
    citroen: [
        { name: "2CV Type A", src: "cars/Citroen_2CV_1954_Type_A.mp4", data: { country: "Frankreich", production_year: "1954", drive: "FF", power: "15", weight: "494", length: "3780", worth: "Tous France Championnat | 2HP-2CV Classics" } },
        { name: "C3 1.6", src: "cars/Citroen_C3_2002_1.6.mp4", data: { country: "Frankreich", production_year: "2002", drive: "FF", power: "110", weight: "1063", length: "3850", worth: "18.130" } },
        { name: "C5 V6 Exclusive", src: "cars/Citroen_C5_2003_V6_Exclusive.mp4", data: { country: "Frankreich", production_year: "2003", drive: "FF", power: "207", weight: "1540", length: "4620", worth: "42.830" } },
        { name: "Xantia 3.0i V6 Exclusive", src: "cars/Citroen_Xantia_2000_3.0i_V6_Exclusive.mp4", data: { country: "Frankreich", production_year: "2000", drive: "FF", power: "193", weight: "1496", length: "4524", worth: "39.230" } },
        { name: "Xsara Rally Car", src: "cars/Citroen_Xsara_1999_Rally_Car.mp4", data: { country: "Frankreich", production_year: "1999", drive: "FF", power: "299", weight: "960", length: "4167", worth: "750.000" } },
        { name: "Xsara VTR", src: "cars/Citroen_Xsara_2003_VTR.mp4", data: { country: "Frankreich", production_year: "2003", drive: "FF", power: "108", weight: "1180", length: "4190", worth: "21.850" } }
    ],
    cizeta: [
        { name: "V16T", src: "cars/Cizeta_V16T_1994.mp4", data: { country: "Italien", production_year: "1994", drive: "MR", power: "589", weight: "1640", length: "4442", worth: "Supercar Festival" } }
    ],
    daihatsu: [
        { name: "Copen Active Top", src: "cars/Daihatsu_Copen_2002_Active_Top.mp4", data: { country: "Japan", production_year: "2002", drive: "FF", power: "62", weight: "830", length: "3395", worth: "14.980" } },
        { name: "Copen Detachable Top", src: "cars/Daihatsu_Copen_2002_Detachable_Top.mp4", data: { country: "Japan", production_year: "2002", drive: "FF", power: "62", weight: "800", length: "3395", worth: "14.980" } },
        { name: "Cuore TR-XX Avanzato R", src: "cars/Daihatsu_Cuore_1997_TR-XX_Avanzato_R.mp4", data: { country: "Japan", production_year: "1997", drive: "FF", power: "63", weight: "700", length: "3410", worth: "~5.000" } },
        { name: "Midget", src: "cars/Daihatsu_Midget_1963.mp4", data: { country: "Japan", production_year: "1963", drive: "MR", power: "12", weight: "299", length: "2970", worth: "Midget II Race" } },
        { name: "Midget II D-Type", src: "cars/Daihatsu_Midget_1998_II_D-Type.mp4", data: { country: "Japan", production_year: "1998", drive: "FR", power: "33", weight: "569", length: "2790", worth: "~3.300" } },
        { name: "Move CX", src: "cars/Daihatsu_Move_1995_CX.mp4", data: { country: "Japan", production_year: "1995", drive: "FF", power: "53", weight: "739", length: "3395", worth: "~4.000" } },
        { name: "Move SR-XX 2WD", src: "cars/Daihatsu_Move_1997_SR-XX_2WD.mp4", data: { country: "Japan", production_year: "1997", drive: "FF", power: "60", weight: "760", length: "3395", worth: "~4.000" } },
        { name: "Move SR-XX 4WD", src: "cars/Daihatsu_Move_1997_SR-XX_4WD.mp4", data: { country: "Japan", production_year: "1997", drive: "4WD", power: "60", weight: "811", length: "3395", worth: "~6.000" } },
        { name: "Move Custom RS Limited", src: "cars/Daihatsu_Move_2002_Custom_RS_Limited.mp4", data: { country: "Japan", production_year: "2002", drive: "4WD", power: "63", weight: "921", length: "3395", worth: "15.720" } },
        { name: "Sirion CX 2WD", src: "cars/Daihatsu_Sirion_1998_CX_2WD.mp4", data: { country: "Japan", production_year: "1998", drive: "FF", power: "57", weight: "840", length: "3660", worth: "~7.000" } },
        { name: "Sirion CX 4WD", src: "cars/Daihatsu_Sirion_1998_CX_4WD.mp4", data: { country: "Japan", production_year: "1998", drive: "4WD", power: "57", weight: "890", length: "3660", worth: "~7.000" } },
        { name: "Sirion X4", src: "cars/Daihatsu_Sirion_2000_X4.mp4", data: { country: "Japan", production_year: "2000", drive: "4WD", power: "118", weight: "840", length: "3660", worth: "~10.000 | Copen Race" } }
    ],
    dmc: [
        { name: "DeLorean S2", src: "cars/DMC_DeLorean_2004_S2.mp4", data: { country: "Amerika", production_year: "2004", drive: "RR", power: "197", weight: "1288", length: "4267", worth: "Fahrmission \"The Pass\"" } }
    ],
    dodge: [
        { name: "Charger 440 R/T", src: "cars/Dodge_Charger_1970_440_RT.mp4", data: { country: "Amerika", production_year: "1970", drive: "FR", power: "380", weight: "1650", length: "4000", worth: "75.500" } },
        { name: "Charger Super Bee 426 Hemi", src: "cars/Dodge_Charger_1971_Super_Bee_426_Hemi.mp4", data: { country: "Amerika", production_year: "1971", drive: "FR", power: "425", weight: "1841", length: "4000", worth: "New York 200 Meilen" } },
        { name: "RAM 1500 Laramie Hemi Quad Cab", src: "cars/Dodge_RAM_2004_1500_Laramie_Hemi_Quad_Cab.mp4", data: { country: "Amerika", production_year: "2004", drive: "4WD", power: "340", weight: "2390", length: "5784", worth: "37.930" } },
        { name: "SRT-4", src: "cars/Dodge_SRT-4_2003.mp4", data: { country: "Amerika", production_year: "2003", drive: "FF", power: "221", weight: "1349", length: "4000", worth: "20.640" } },
        { name: "Viper GTS", src: "cars/Dodge_Viper_1999_GTS.mp4", data: { country: "Amerika", production_year: "1999", drive: "FR", power: "456", weight: "1569", length: "4488", worth: "78.000" } },
        { name: "Viper GTS-R Concept", src: "cars/Dodge_Viper_2000_GTS-R_Concept.mp4", data: { country: "Amerika", production_year: "2000", drive: "FR", power: "505", weight: "1475", length: "4902", worth: "Chrysler Crossfire Trophy" } },
        { name: "Viper GTS-R Team Oreca", src: "cars/Dodge_Viper_2000_GTS-R_Team_Oreca.mp4", data: { country: "Amerika", production_year: "2000", drive: "FR", power: "597", weight: "1150", length: "4548", worth: "1.000.000" } },
        { name: "Viper SRT-10", src: "cars/Dodge_Viper_2003_SRT-10.mp4", data: { country: "Amerika", production_year: "2003", drive: "FR", power: "500", weight: "1533", length: "4458", worth: "84.880 | 450 km/h" } }
    ],
    dome: [
        { name: "Zero Concept", src: "cars/Dome_0_1978.mp4", data: { country: "Japan", production_year: "1978", drive: "MR", power: "157", weight: "919", length: "4000", worth: "Internationale A-Lizenz Gold" } }
    ],
    eagle: [
        { name: "Talon ESI", src: "cars/Eagle_Talon_1997_ESI.mp4", data: { country: "Amerika", production_year: "1997", drive: "FR", power: "138", weight: "1252", length: "4000", worth: "15.740" } }
    ],
    fiat: [
        { name: "500 F", src: "cars/Fiat_500_1965_F.mp4", data: { country: "Italien", production_year: "1965", drive: "RR", power: "16", weight: "520", length: "2970", worth: "~7.000" } },
        { name: "500 L", src: "cars/Fiat_500_1969_L.mp4", data: { country: "Italien", production_year: "1969", drive: "RR", power: "16", weight: "530", length: "2970", worth: "~6.000" } },
        { name: "500 R", src: "cars/Fiat_500_1972_R.mp4", data: { country: "Italien", production_year: "1972", drive: "RR", power: "17", weight: "594", length: "3070", worth: "~6.000" } },
        { name: "Barchetta Giovane Due", src: "cars/Fiat_Barchetta_2000_Giovane_Due.mp4", data: { country: "Italien", production_year: "2000", drive: "FF", power: "128", weight: "1090", length: "3916", worth: "24.060" } },
        { name: "Coupe Turbo Plus", src: "cars/Fiat_Coupe_2000_Turbo_Plus.mp4", data: { country: "Italien", production_year: "2000", drive: "FF", power: "219", weight: "1310", length: "4250", worth: "48.110" } },
        { name: "Panda Super i.E.", src: "cars/Fiat_Panda_1990_Super_i.e..mp4", data: { country: "Italien", production_year: "1990", drive: "FF", power: "44", weight: "730", length: "3405", worth: "~5.100" } },
        { name: "Punto HGT Abarth", src: "cars/Fiat_Punto_2000_HGT_Abarth.mp4", data: { country: "Italien", production_year: "2000", drive: "FF", power: "128", weight: "1100", length: "3820", worth: "30.030" } }
    ],
    ford: [
        { name: "Escort Rally Car", src: "cars/Ford_Escort_1998_Rally_Car.mp4", data: { country: "Amerika", production_year: "1998", drive: "4WD", power: "304", weight: "1230", length: "4221", worth: "Tahiti - Normal" } },
        { name: "Falcon XR8", src: "cars/Ford_Falcon_2000_XR8.mp4", data: { country: "Australien", production_year: "2000", drive: "FR", power: "600", weight: "1349", length: "4970", worth: "450.000" } },
        { name: "Focus Rally Car", src: "cars/Ford_Focus_1999_Rally_Car.mp4", data: { country: "Amerika", production_year: "1999", drive: "4WD", power: "304", weight: "1230", length: "4152", worth: "#7 Driving School" } },
        { name: "Focus RS", src: "cars/Ford_Focus_2002_RS.mp4", data: { country: "Amerika", production_year: "2002", drive: "FF", power: "216", weight: "1051", length: "4602", worth: "41.410" } },
        { name: "Focus ST", src: "cars/Ford_Focus_2003_ST_170.mp4", data: { country: "Amerika", production_year: "2003", drive: "FF", power: "170", weight: "1241", length: "4602", worth: "32.750" } },
        { name: "GT40 Race Car", src: "cars/Ford_GT_1969_40_Race_Car.mp4", data: { country: "Amerika", production_year: "1969", drive: "MR", power: "500", weight: "998", length: "4602", worth: "Laguna Seca 200 Meilen" } },
        { name: "GT Concept", src: "cars/Ford_GT_2002.mp4", data: { country: "Amerika", production_year: "2002", drive: "MR", power: "507", weight: "1451", length: "4602", worth: "Tsukuba - Schwer" } },
        { name: "GT Concept LM Race Car", src: "cars/Ford_GT_2002_LM_Race_Car.mp4", data: { country: "Amerika", production_year: "2002", drive: "MR", power: "592", weight: "1139", length: "4602", worth: "Infineon Ausdauer-Rennen" } },
        { name: "GT LM Race Car Spec II", src: "cars/Ford_GT_2004_LM_Race_Car_Spec_II.mp4", data: { country: "Amerika", production_year: "2004", drive: "MR", power: "606", weight: "1130", length: "4613", worth: "GT World Championship" } },
        { name: "GT", src: "cars/Ford_GT_2005.mp4", data: { country: "Amerika", production_year: "2005", drive: "MR", power: "558", weight: "1451", length: "4643", worth: "149.880" } },
        { name: "Ka", src: "cars/Ford_Ka_2001.mp4", data: { country: "Amerika", production_year: "2001", drive: "FF", power: "59", weight: "965", length: "3620", worth: "12.920" } },
        { name: "Model T Tourer", src: "cars/Ford_Model_T_1915_Tourer.mp4", data: { country: "Amerika", production_year: "1915", drive: "FR", power: "20", weight: "635", length: "4000", worth: "Alle Lizenzen in Gold" } },
        { name: "Mustang SVT Cobra R", src: "cars/Ford_Mustang_2000_SVT_Cobra_R.mp4", data: { country: "Amerika", production_year: "2000", drive: "FR", power: "372", weight: "1628", length: "4000", worth: "~44.000" } },
        { name: "Mustang GT", src: "cars/Ford_Mustang_2005_GT.mp4", data: { country: "Amerika", production_year: "2005", drive: "FR", power: "294", weight: "1569", length: "4765", worth: "25.950" } },
        { name: "RS 200", src: "cars/Ford_RS_1984_200.mp4", data: { country: "Amerika", production_year: "1984", drive: "4WD", power: "246", weight: "1179", length: "4152", worth: "Grand Canyon - Leicht" } },
        { name: "RS 200 Rally Car", src: "cars/Ford_RS_1985_200_Rally_Car.mp4", data: { country: "Amerika", production_year: "1985", drive: "4WD", power: "427", weight: "980", length: "4152", worth: "Capri Rally - Schwer" } },
        { name: "SVT F-150 Lightning", src: "cars/Ford_SVT_2003_F-150_Lightning.mp4", data: { country: "Amerika", production_year: "2003", drive: "FR", power: "380", weight: "2132", length: "5283", worth: "35.050" } },
        { name: "Taurus SHO", src: "cars/Ford_Taurus_1998_SHO.mp4", data: { country: "Amerika", production_year: "1998", drive: "FF", power: "234", weight: "1509", length: "5039", worth: "~17.000" } }
    ],
    fpv: [
        { name: "F6 Typhoon", src: "cars/FPV_F6_2004_Typhoon.mp4", data: { country: "Australien", production_year: "2004", drive: "FR", power: "362", weight: "1776", length: "4954", worth: "46.740" } },
        { name: "GT", src: "cars/FPV_GT_2004.mp4", data: { country: "Australien", production_year: "2004", drive: "FR", power: "389", weight: "1826", length: "4954", worth: "48.640" } }
    ],
    gillet: [
        { name: "Vertigo Race Car", src: "cars/Gillet_Vertigo_2004_Race_Car.mp4", data: { country: "Belgien", production_year: "2004", drive: "FR", power: "900", weight: "780", length: "3980", worth: "1.000.000" } }
    ],
    ginetta: [
        { name: "G4", src: "cars/Ginetta_G4_1964.mp4", data: { country: "Grossbritannien", production_year: "1964", drive: "FR", power: "91", weight: "454", length: "3353", worth: "Leichtgewicht K-Cup" } }
    ],
    hks: [
        { name: "Genki Hyper Silvia", src: "cars/HKS_Silvia_2004_Genki_Hyper_RS2.mp4", data: { country: "Japan", production_year: "2004", drive: "FR", power: "483", weight: "1130", length: "4000", worth: "200.000" } }
    ],
    holden: [
        { name: "Commodore SS", src: "cars/Holden_Commodore_2004_SS.mp4", data: { country: "Australien", production_year: "2004", drive: "FR", power: "327", weight: "1658", length: "4868", worth: "40.430" } },
        { name: "Monaro CV8", src: "cars/Holden_Monaro_2004_CV8.mp4", data: { country: "Australien", production_year: "2004", drive: "FR", power: "327", weight: "1658", length: "4868", worth: "47.960" } }
    ],
    hommell: [
        { name: "Berlinette R/S Coupe", src: "cars/Hommel_Berlinette_1999_RS_Coupe.mp4", data: { country: "Frankreich", production_year: "1999", drive: "MR", power: "167", weight: "950", length: "4120", worth: "47.360" } }
    ],
    honda: [
        { name: "1300 Coupe 9 S", src: "cars/Honda_1300_1970_Coupe_9_S.mp4", data: { country: "Japan", production_year: "1970", drive: "FF", power: "107", weight: "900", length: "4140", worth: "~12.800" } },
        { name: "Accord Coupe", src: "cars/Honda_Accord_1988_Coupe.mp4", data: { country: "Japan", production_year: "1988", drive: "FF", power: "118", weight: "1219", length: "4565", worth: "~9.000" } },
        { name: "Accord Euro R", src: "cars/Honda_Accord_2000_Euro_R.mp4", data: { country: "Japan", production_year: "2000", drive: "FF", power: "215", weight: "1330", length: "4680", worth: "~16.000" } },
        { name: "Accord Euro R", src: "cars/Honda_Accord_2002_Euro_R.mp4", data: { country: "Japan", production_year: "2002", drive: "FF", power: "215", weight: "1390", length: "4680", worth: "25.300" } },
        { name: "Accord Coupe", src: "cars/Honda_Accord_2003_Coupe.mp4", data: { country: "Japan", production_year: "2003", drive: "FF", power: "239", weight: "1481", length: "4765", worth: "27.480" } },
        { name: "Beat", src: "cars/Honda_Beat_1991.mp4", data: { country: "Japan", production_year: "1991", drive: "MR", power: "63", weight: "760", length: "3295", worth: "~5.000" } },
        { name: "Beat Version F", src: "cars/Honda_Beat_1992_Version_F.mp4", data: { country: "Japan", production_year: "1992", drive: "MR", power: "63", weight: "760", length: "3295", worth: "~5.000" } },
        { name: "Beat Version Z", src: "cars/Honda_Beat_1993_Version_Z.mp4", data: { country: "Japan", production_year: "1993", drive: "MR", power: "63", weight: "760", length: "3295", worth: "~7.000" } },
        { name: "City Turbo II", src: "cars/Honda_City_1983_Turbo_II.mp4", data: { country: "Japan", production_year: "1983", drive: "FF", power: "108", weight: "735", length: "3380", worth: "~4.000" } },
        { name: "Civic CX", src: "cars/Honda_Civic_1979.mp4", data: { country: "Japan", production_year: "1979", drive: "FF", power: "79", weight: "780", length: "3870", worth: "9.570" } },
        { name: "Civic 25i", src: "cars/Honda_Civic_1983.mp4", data: { country: "Japan", production_year: "1983", drive: "FF", power: "98", weight: "815", length: "3810", worth: "~4.000" } },
        { name: "Civic Motul Race Car", src: "cars/Honda_Civic_1987_Motul_Race_Car.mp4", data: { country: "Japan", production_year: "1987", drive: "FF", power: "225", weight: "890", length: "4000", worth: "Civic Race" } },
        { name: "Civic SiR II", src: "cars/Honda_Civic_1991_Sir_II.mp4", data: { country: "Japan", production_year: "1991", drive: "FF", power: "167", weight: "1040", length: "4069", worth: "~6.000" } },
        { name: "Civic Type R", src: "cars/Honda_Civic_1997_Type_R.mp4", data: { country: "Japan", production_year: "1997", drive: "FF", power: "176", weight: "1050", length: "4180", worth: "~10.000" } },
        { name: "Civic Gathers Race Car", src: "cars/Honda_Civic_1998_Gathers_Race_Car.mp4", data: { country: "Japan", production_year: "1998", drive: "FF", power: "185", weight: "930", length: "4180", worth: "450.000" } },
        { name: "Civic Type R", src: "cars/Honda_Civic_2001_Type_R.mp4", data: { country: "Japan", production_year: "2001", drive: "FF", power: "197", weight: "1191", length: "4135", worth: "~15.000" } },
        { name: "Civic Type R", src: "cars/Honda_Civic_2004_Type_R.mp4", data: { country: "Japan", production_year: "2004", drive: "FF", power: "212", weight: "1191", length: "4135", worth: "23.310" } },
        { name: "CR-X Ballade Sports 1.5i", src: "cars/Honda_CR-X_1983_1.5.mp4", data: { country: "Japan", production_year: "1983", drive: "FF", power: "108", weight: "815", length: "4000", worth: "~4.000" } },
        { name: "CR-X SiR", src: "cars/Honda_CR-X_1990_SIR.mp4", data: { country: "Japan", production_year: "1990", drive: "FF", power: "157", weight: "986", length: "4000", worth: "~5.000" } },
        { name: "CR-X Del Sol", src: "cars/Honda_CR-X_1992_Del_Sol.mp4", data: { country: "Japan", production_year: "1992", drive: "FF", power: "164", weight: "1100", length: "3995", worth: "~6.000" } },
        { name: "Dualnote", src: "cars/Honda_Dualnote_2001.mp4", data: { country: "Japan", production_year: "2001", drive: "4WD", power: "395", weight: "1399", length: "4400", worth: "Silber Internationale A-Lizenz" } },
        { name: "Element", src: "cars/Honda_Element_2003.mp4", data: { country: "Japan", production_year: "2003", drive: "4WD", power: "157", weight: "1560", length: "4300", worth: "25.900" } },
        { name: "HSC", src: "cars/Honda_HSC_2003.mp4", data: { country: "Japan", production_year: "2003", drive: "MR", power: "330", weight: "1149", length: "4240", worth: "Type-R Treffen" } },
        { name: "Insight", src: "cars/Honda_Insight_1999.mp4", data: { country: "Japan", production_year: "1999", drive: "FF", power: "82", weight: "820", length: "3940", worth: "21.000" } },
        { name: "Integra Type R", src: "cars/Honda_Integra_1995_Type_R.mp4", data: { country: "Japan", production_year: "1995", drive: "FF", power: "197", weight: "1059", length: "4380", worth: "~11.000" } },
        { name: "Integra Type R Touring Car", src: "cars/Honda_Integra_2002_Type_R_Touring_Car.mp4", data: { country: "Japan", production_year: "2002", drive: "FF", power: "310", weight: "1050", length: "4385", worth: "450.000" } },
        { name: "Integra Type R", src: "cars/Honda_Integra_2003_Type_R.mp4", data: { country: "Japan", production_year: "2003", drive: "FF", power: "212", weight: "1170", length: "4380", worth: "25.900" } },
        { name: "Jazz 1.4 DSi SE", src: "cars/Honda_Jazz_2001_1.4_DSI_SE_Sport.mp4", data: { country: "Japan", production_year: "2001", drive: "FF", power: "98", weight: "990", length: "3828", worth: "12.600" } },
        { name: "Life Step Van", src: "cars/Honda_Life_1972_Step_Van.mp4", data: { country: "Japan", production_year: "1972", drive: "FF", power: "28", weight: "606", length: "2995", worth: "Japapnische Kompaktwagen-Meisterschaft" } },
        { name: "N 360", src: "sources/cars/Honda_N_1967_360.mp4", land: "Japan", baujahr: 1967, antrieb: "FF", ps: 30, gewicht: 474, länge: 2995, preis: "~12.000" },
        { name: "NSX", src: "sources/cars/Honda_NSX_1990.mp4", land: "Japan", baujahr: 1990, antrieb: "MR", ps: 270, gewicht: 1350, länge: 4430, preis: "~28.000" },
        { name: "NSX Type R", src: "sources/cars/Honda_NSX_1992_R.mp4", land: "Japan", baujahr: 1992, antrieb: "MR", ps: 284, gewicht: 1230, länge: 4430, preis: "~42.000" },
        { name: "NSX Type S", src: "sources/cars/Honda_NSX_1997_S.mp4", land: "Japan", baujahr: 1997, antrieb: "MR", ps: 276, gewicht: 1320, länge: 4430, preis: "~48.000" },
        { name: "NSX Type S Zero", src: "sources/cars/Honda_NSX_1997_S_Zero.mp4", land: "Japan", baujahr: 1997, antrieb: "MR", ps: 284, gewicht: 1270, länge: 4430, preis: "~35.000" },
        { name: "NSX Arta", src: "sources/cars/Honda_NSX_2000_Arta.mp4", land: "Japan", baujahr: 2000, antrieb: "MR", ps: 489, gewicht: 1150, länge: 4430, preis: "1.350.000" },
        { name: "NSX Castrol", src: "sources/cars/Honda_NSX_2000_Castrol.mp4", land: "Japan", baujahr: 2000, antrieb: "MR", ps: 489, gewicht: 1150, länge: 4430, preis: "1.350.000" },
        { name: "NSX Raybrig", src: "sources/cars/Honda_NSX_2000_Raybrig.mp4", land: "Japan", baujahr: 2000, antrieb: "MR", ps: 489, gewicht: 1150, länge: 4430, preis: "1.350.000" },
        { name: "NSX", src: "sources/cars/Honda_NSX_2001.mp4", land: "Japan", baujahr: 2001, antrieb: "MR", ps: 276, gewicht: 1340, länge: 4430, preis: "92.070" },
        { name: "NSX Loctite", src: "sources/cars/Honda_NSX_2001_Loctite.mp4", land: "Japan", baujahr: 2001, antrieb: "MR", ps: 492, gewicht: 1150, länge: 4430, preis: "1.350.000" },
        { name: "NSX Mobil 1", src: "sources/cars/Honda_NSX_2001_Mobil_1.mp4", land: "Japan", baujahr: 2001, antrieb: "MR", ps: 492, gewicht: 1150, länge: 4430, preis: "1.350.000" },
        { name: "NSX Type R Concept", src: "sources/cars/Honda_NSX_2001_R_Concept.mp4", land: "Japan", baujahr: 2001, antrieb: "MR", ps: 285, gewicht: 1269, länge: 4430, preis: "NA Meisterschaft" },
        { name: "NSX Type S", src: "sources/cars/Honda_NSX_2001_S.mp4", land: "Japan", baujahr: 2001, antrieb: "MR", ps: 276, gewicht: 1320, länge: 4430, preis: "103.570" },
        { name: "NSX Type R", src: "sources/cars/Honda_NSX_2002_R.mp4", land: "Japan", baujahr: 2002, antrieb: "MR", ps: 295, gewicht: 1270, länge: 4430, preis: "119.570" },
        { name: "NSX Type R Race Car", src: "sources/cars/Honda_NSX_2002_R_LM_Race_Car.mp4", land: "Japan", baujahr: 2002, antrieb: "MR", ps: 519, gewicht: 1121, länge: 4430, preis: "150 Meilen Super Speedway" },
        { name: "NSX Type R Road Car", src: "sources/cars/Honda_NSX_2002_R_LM_Road_Car.mp4", land: "Japan", baujahr: 2002, antrieb: "MR", ps: 550, gewicht: 1229, länge: 4430, preis: "8 Stunden Motegi" },
        { name: "NSX Takata", src: "sources/cars/Honda_NSX_2003_Takata.mp4", land: "Japan", baujahr: 2003, antrieb: "MR", ps: 492, gewicht: 1170, länge: 4430, preis: "1.350.000" },
        { name: "Odyssey", src: "sources/cars/Honda_Odyssey_2003.mp4", land: "Japan", baujahr: 2003, antrieb: "4WD", ps: 157, gewicht: 1701, länge: 4765, preis: "28.650" },
        { name: "Prelude Si VTEC", src: "sources/cars/Honda_Prelude_1991_SI_VTEC.mp4", land: "Japan", baujahr: 1991, antrieb: "FF", ps: 197, gewicht: 1280, länge: 4440, preis: "~8.000" },
        { name: "Prelude SiR", src: "sources/cars/Honda_Prelude_1996_SIR.mp4", land: "Japan", baujahr: 1996, antrieb: "FF", ps: 192, gewicht: 1261, länge: 4520, preis: "~8.000" },
        { name: "Prelude Type S", src: "sources/cars/Honda_Prelude_1996_Type_S.mp4", land: "Japan", baujahr: 1996, antrieb: "FF", ps: 216, gewicht: 1310, länge: 4520, preis: "~13.000" },
        { name: "Prelude SiR S SPEC", src: "sources/cars/Honda_Prelude_1998_SIR_S_SPEC.mp4", land: "Japan", baujahr: 1998, antrieb: "FF", ps: 216, gewicht: 1270, länge: 4520, preis: "~11.000" },
        { name: "S 500", src: "sources/cars/Honda_S500_1963.mp4", land: "Japan", baujahr: 1963, antrieb: "FR", ps: 44, gewicht: 674, länge: 3300, preis: "~20.000 | Gold Nationale B-Lizenz" },
        { name: "S 600", src: "sources/cars/Honda_S600_1964.mp4", land: "Japan", baujahr: 1964, antrieb: "FR", ps: 56, gewicht: 714, länge: 3300, preis: "~21.000" },
        { name: "S 800", src: "sources/cars/Honda_S800_1966.mp4", land: "Japan", baujahr: 1966, antrieb: "FR", ps: 68, gewicht: 720, länge: 3335, preis: "~20.000" },
        { name: "S 800 RSC Race Car", src: "sources/cars/Honda_S800_1968_RSC_Race_Car.mp4", land: "Japan", baujahr: 1968, antrieb: "FR", ps: 100, gewicht: 660, länge: 3355, preis: "Kompaktwagen-Weltmeisterschaft" },
        { name: "S 2000", src: "sources/cars/Honda_S2000_1999.mp4", land: "Japan", baujahr: 1999, antrieb: "FR", ps: 242, gewicht: 1240, länge: 4135, preis: "~23.000" },
        { name: "S 2000 Type V", src: "sources/cars/Honda_S2000_2000_Type_V.mp4", land: "Japan", baujahr: 2000, antrieb: "FR", ps: 242, gewicht: 1260, länge: 4135, preis: "~20.000" },
        { name: "S 2000 LM Race Car", src: "sources/cars/Honda_S2000_2001_LM_Race_Car.mp4", land: "Japan", baujahr: 2001, antrieb: "FR", ps: 320, gewicht: 1050, länge: 4285, preis: "450.000" },
        { name: "S 2000", src: "sources/cars/Honda_S2000_2003.mp4", land: "Japan", baujahr: 2003, antrieb: "FR", ps: 241, gewicht: 1240, länge: 4135, preis: "35.000" },
        { name: "S 2000 Type V", src: "sources/cars/Honda_S2000_2003_Type_V.mp4", land: "Japan", baujahr: 2003, antrieb: "FR", ps: 242, gewicht: 1270, länge: 4135, preis: "37.000" },
        { name: "Today G", src: "sources/cars/Honda_Today_1985_G.mp4", land: "Japan", baujahr: 1985, antrieb: "FF", ps: 30, gewicht: 550, länge: 3195, preis: "~2.000" },
        { name: "Z Act", src: "sources/cars/Honda_Z_1970_Act.mp4", land: "Japan", baujahr: 1970, antrieb: "FF", ps: 29, gewicht: 595, länge: 3125, preis: "~5.000" }
    ],
    hpa: [
        { name: "Stage II R32", src: "cars/HPA_Stage_II_R32_2004.mp4", data: { country: "Kanada", production_year: "2004", drive: "4WD", power: "552", weight: "1484", length: "4189", worth: "31.870" } }
    ],
    hyundai: [
        { name: "Accent Rally Car", src: "cars/Hyundai_Accent_2001_Rally_Car.mp4", data: { country: "Südkorea", production_year: "2001", drive: "4WD", power: "295", weight: "1031", length: "4200", worth: "750.000" } },
        { name: "Clix", src: "cars/Hyundai_Clix_2001.mp4", data: { country: "Südkorea", production_year: "2001", drive: "4WD", power: "305", weight: "1320", length: "3959", worth: "Hyundai Sport Festival" } },
        { name: "Coupe FX", src: "cars/Hyundai_Coupe_2001.mp4", data: { country: "Südkorea", production_year: "2001", drive: "FF", power: "172", weight: "1341", length: "4395", worth: "33.020" } },
        { name: "HCD6 Concept", src: "cars/Hyundai_HCD6_2001.mp4", data: { country: "Südkorea", production_year: "2001", drive: "MR", power: "214", weight: "1500", length: "4039", worth: "Yosemite-Rallye II - Leicht" } }
    ],
    infiniti: [
        { name: "FX45 Concept", src: "cars/Infiniti_FX45_2002_Concept.mp4", data: { country: "Amerika", production_year: "2002", drive: "4WD", power: "340", weight: "1499", length: "4788", worth: "Charmonix-Rally - Leicht" } },
        { name: "G35", src: "cars/Infiniti_G35_2003_Sedan.mp4", data: { country: "Amerika", production_year: "2003", drive: "FR", power: "268", weight: "1513", length: "4737", worth: "30.720" } }
    ],
    isuzu: [
        { name: "Bellet 1600 GT-R", src: "cars/Isuzu_Bellett_1969_1600_GT-R.mp4", data: { country: "Japan", production_year: "1969", drive: "FR", power: "118", weight: "970", length: "4015", worth: "~15.000" } },
        { name: "117 Coupe", src: "cars/Isuzu_117_1968_Coupe.mp4", data: { country: "Japan", production_year: "1968", drive: "FR", power: "118", weight: "1050", length: "4280", worth: "~13.000 | Isuzu Sport Classics" } },
        { name: "Piazza XE", src: "cars/Isuzu_Piazza_1981_XE.mp4", data: { country: "Japan", production_year: "1981", drive: "FR", power: "133", weight: "1189", length: "4310", worth: "~9.000" } }
    ],
    jaguar: [
        { name: "E-Type Coupe", src: "cars/Jaguar_E-Type_1961_Coupe.mp4", data: { country: "Grossbritannien", production_year: "1961", drive: "FR", power: "264", weight: "1300", length: "4440", worth: "Britische GT-Serie" } },
        { name: "S-Type R", src: "cars/Jaguar_S-Type_2002_R.mp4", data: { country: "Grossbritannien", production_year: "2002", drive: "FR", power: "389", weight: "1798", length: "4877", worth: "92.130" } },
        { name: "XJ220", src: "cars/Jaguar_XJ220_1992.mp4", data: { country: "Grossbritannien", production_year: "1992", drive: "MR", power: "515", weight: "1372", length: "4860", worth: "749.140" } },
        { name: "XJ220 LM Race Car", src: "cars/Jaguar_XJ220_2001_LM_Race_Car.mp4", data: { country: "Grossbritannien", production_year: "2001", drive: "MR", power: "542", weight: "1375", length: "4860", worth: "Paneuropäische Meisterschaft" } },
        { name: "XJR-9 Race Car", src: "cars/Jaguar_XJR_1988_9_Race_Car.mp4", data: { country: "Grossbritannien", production_year: "1988", drive: "MR", power: "749", weight: "894", length: "4800", worth: "3.500.000 | 50% Spielfortschritt" } },
        { name: "XKR", src: "cars/Jaguar_XKR_1999_Coupe.mp4", data: { country: "Grossbritannien", production_year: "1999", drive: "FR", power: "369", weight: "1640", length: "4760", worth: "~64.000" } },
        { name: "XKR R", src: "cars/Jaguar_XKR_2002_R-Performance.mp4", data: { country: "Grossbritannien", production_year: "2002", drive: "FR", power: "400", weight: "1735", length: "4760", worth: "118.450" } }
    ],
    jay_leno: [
        { name: "Tank Car", src: "cars/Jay_Leno_Tank_Car_2003.mp4", data: { country: "Amerika", production_year: "2003", drive: "FR", power: "810", weight: "4309", length: "6400", worth: "Fahrmissionen 11-20" } }
    ],
    jensen_healey: [
        { name: "Interceptor III", src: "cars/Jensen_Interceptor_1974_III.mp4", data: { country: "Grossbritannien", production_year: "1974", drive: "FR", power: "390", weight: "1814", length: "4724", worth: "~30.000 | Gold Internationale B-Lizenz" } }
    ],
    lancia: [
        { name: "Delta HF Integrale", src: "cars/Lancia_Delta_HF_1991_Integrale_Evoluzione.mp4", data: { country: "Italien", production_year: "1991", drive: "4WD", power: "213", weight: "1350", length: "3900", worth: "~23.000" } },
        { name: "Delta HF Integrale Rally Car", src: "cars/Lancia_Delta_HF_1992_Integrale_Rally_Car.mp4", data: { country: "Italien", production_year: "1992", drive: "4WD", power: "300", weight: "1120", length: "3900", worth: "Umbria Rally Mittel" } },
        { name: "Delta S4 Rally Car", src: "cars/Lancia_Delta_S4_1985_Rally_Car.mp4", data: { country: "Italien", production_year: "1985", drive: "4WD", power: "456", weight: "890", length: "4000", worth: "Umbria Rally Schwer" } },
        { name: "Stratos", src: "cars/Lancia_Stratos_1973.mp4", data: { country: "Italien", production_year: "1973", drive: "MR", power: "185", weight: "980", length: "3710", worth: "133.970" } },
        { name: "Stratos Rally Car", src: "cars/Lancia_Stratos_1977_Rally_Car.mp4", data: { country: "Italien", production_year: "1977", drive: "MR", power: "277", weight: "880", length: "4000", worth: "Charmonix Rally Schwer" } }
    ],
    land_rover: [
        { name: "Range Stormer Concept", src: "cars/Land_Rover_Range_Stormer_2004_Concept.mp4", data: { country: "Grossbritannien", production_year: "2004", drive: "4WD", power: "334", weight: "2500", length: "4725", worth: "Yosemite Rally I Leicht" } }
    ],
    lexus: [
        { name: "GS 300", src: "cars/Lexus_GS_300_1991.mp4", data: { country: "Japan", production_year: "1991", drive: "FR", power: "276", weight: "1679", length: "4865", worth: "~16.000" } },
        { name: "GS 300", src: "cars/Lexus_GS_300_2000.mp4", data: { country: "Japan", production_year: "2000", drive: "FR", power: "276", weight: "1679", length: "4805", worth: "44.200" } },
        { name: "GS 300 Vertex Edition", src: "cars/Lexus_GS_300_2000_Vertex_Edition.mp4", data: { country: "Japan", production_year: "2000", drive: "FR", power: "276", weight: "1679", length: "4805", worth: "45.500" } },
        { name: "IS 200", src: "cars/Lexus_IS_200_1998.mp4", data: { country: "Japan", production_year: "1998", drive: "FR", power: "152", weight: "1310", length: "4400", worth: "20.700" } },
        { name: "IS 200 J", src: "cars/Lexus_IS_200_1998_J.mp4", data: { country: "Japan", production_year: "1998", drive: "FR", power: "207", weight: "1340", length: "4000", worth: "24.000" } },
        { name: "IS 300", src: "cars/Lexus_IS_300_2001_Sport_Cross.mp4", data: { country: "Japan", production_year: "2001", drive: "FR", power: "217", weight: "1471", length: "4415", worth: "27.600" } },
        { name: "SC 300", src: "cars/Lexus_SC_300_1997.mp4", data: { country: "Japan", production_year: "1997", drive: "FR", power: "276", weight: "1560", length: "4900", worth: "~17.000" } },
        { name: "SC 430", src: "cars/Lexus_SC_430_2001.mp4", data: { country: "Japan", production_year: "2001", drive: "FR", power: "276", weight: "1730", length: "4516", worth: "60.000" } }
    ],
    lister: [
        { name: "Storm V12 Race Car", src: "cars/Lister_Storm_V12_1999_Race_Car.mp4", data: { country: "Grossbritannien", production_year: "1999", drive: "FR", power: "602", weight: "1438", length: "4547", worth: "1000 km Suzuka" } }
    ],
    lotus: [
        { name: "Carlton", src: "cars/Lotus_Carlton_1990.mp4", data: { country: "Grossbritannien", production_year: "1990", drive: "FR", power: "372", weight: "1654", length: "4763", worth: "~29.000" } },
        { name: "Elan S1", src: "cars/Lotus_Elan_1962_S1.mp4", data: { country: "Grossbritannien", production_year: "1962", drive: "FR", power: "105", weight: "639", length: "3683", worth: "Lotus Classics" } },
        { name: "Elise Sport 190", src: "cars/Lotus_Elise_1998_Sport_190.mp4", data: { country: "Grossbritannien", production_year: "1998", drive: "MR", power: "181", weight: "670", length: "3726", worth: "~42.000" } },
        { name: "Motor Sport Elise", src: "cars/Lotus_Elise_1999_Motor_Sport.mp4", data: { country: "Grossbritannien", production_year: "1999", drive: "MR", power: "204", weight: "700", length: "4000", worth: "97.180" } },
        { name: "Elise", src: "cars/Lotus_Elise_2000.mp4", data: { country: "Grossbritannien", production_year: "2000", drive: "MR", power: "118", weight: "714", length: "3785", worth: "41.060" } },
        { name: "Elise 111S", src: "cars/Lotus_Elise_2003_111S.mp4", data: { country: "Grossbritannien", production_year: "2003", drive: "MR", power: "155", weight: "806", length: "3785", worth: "51.680" } },
        { name: "Elise 111R", src: "cars/Lotus_Elise_2004_111R.mp4", data: { country: "Grossbritannien", production_year: "2004", drive: "MR", power: "180", weight: "860", length: "3785", worth: "54.410" } },
        { name: "Esprit Turbo HC", src: "cars/Lotus_Esprit_1987_Turbo_HC.mp4", data: { country: "Grossbritannien", production_year: "1987", drive: "MR", power: "208", weight: "1145", length: "4191", worth: "MR Challenge" } },
        { name: "Esprit V8 GT", src: "cars/Lotus_Esprit_1998_V8_GT.mp4", data: { country: "Grossbritannien", production_year: "1998", drive: "MR", power: "342", weight: "1324", length: "4369", worth: "~63.000" } },
        { name: "Esprit V8 SE", src: "cars/Lotus_Esprit_1998_V8_SE.mp4", data: { country: "Grossbritannien", production_year: "1998", drive: "MR", power: "342", weight: "1380", length: "4369", worth: "~66.000" } },
        { name: "Esprit Sport 350", src: "cars/Lotus_Esprit_2000_Sport_350.mp4", data: { country: "Grossbritannien", production_year: "2000", drive: "MR", power: "358", weight: "1300", length: "4369", worth: "126.240" } },
        { name: "Esprit V8", src: "cars/Lotus_Esprit_2002_V8.mp4", data: { country: "Grossbritannien", production_year: "2002", drive: "MR", power: "342", weight: "1379", length: "4369", worth: "116.520" } },
        { name: "Europa Special", src: "cars/Lotus_Europa_Special_1971.mp4", data: { country: "Grossbritannien", production_year: "1971", drive: "MR", power: "126", weight: "730", length: "4064", worth: "Britische Leichtgewicht-Serie" } }
    ],
    marcos: [
        { name: "Mini GT", src: "cars/Marcos_Mini_1970_GT.mp4", data: { country: "Grossbritannien", production_year: "1970", drive: "FF", power: "74", weight: "559", length: "3470", worth: "Mini Sports Meeting" } }
    ],
    mazda: [
        { name: "110 S L10 A", src: "cars/Mazda_110_1967_S_L10A.mp4", data: { country: "Japan", production_year: "1967", drive: "FR", power: "105", weight: "940", length: "4140", worth: 'Club "RE"' } },
        { name: "110 S L10 B", src: "cars/Mazda_110_1968_S_L10B.mp4", data: { country: "Japan", production_year: "1968", drive: "FR", power: "122", weight: "959", length: "4140", worth: "~25.000" } },
        { name: "2", src: "cars/Mazda_2_2003.mp4", data: { country: "Japan", production_year: "2003", drive: "FF", power: "108", weight: "1080", length: "3925", worth: "14.500" } },
        { name: "323 F", src: "cars/Mazda_323_1993_F.mp4", data: { country: "Japan", production_year: "1993", drive: "FF", power: "167", weight: "1241", length: "4245", worth: "~7.000" } },
        { name: "6 Concept", src: "cars/Mazda_6_2001_Concept.mp4", data: { country: "Japan", production_year: "2001", drive: "FF", power: "172", weight: "1300", length: "4670", worth: "FF Herausforderung" } },
        { name: "6 Touring Car", src: "cars/Mazda_6_2002_Touring_Car.mp4", data: { country: "Japan", production_year: "2002", drive: "4WD", power: "295", weight: "1070", length: "4670", worth: "Tsukuba Regen-Rennen Normal" } },
        { name: "6", src: "cars/Mazda_6_2003.mp4", data: { country: "Japan", production_year: "2003", drive: "FF", power: "172", weight: "1390", length: "4670", worth: "23.500" } },
        { name: "6 MPS", src: "cars/Mazda_6_2005_MPS.mp4", data: { country: "Japan", production_year: "2005", drive: "4WD", power: "259", weight: "1500", length: "4690", worth: "Clubman Cup" } },
        { name: "787 B Race Car", src: "cars/Mazda_787_1991_B_Race_Car.mp4", data: { country: "Japan", production_year: "1991", drive: "MR", power: "803", weight: "830", length: "4782", worth: "3.500.000 | ~1.300.000" } },
        { name: "787 B Race Car Black Edition", src: "cars/Mazda_787_1991_B_Race_Car_Black_Edition.mp4", data: { country: "Japan", production_year: "1991", drive: "MR", power: "803", weight: "830", length: "4782", worth: "~3.500.000" } },
        { name: "Autozam AZ-1", src: "cars/Mazda_Autozam_1992_AZ-1.mp4", data: { country: "Japan", production_year: "1992", drive: "MR", power: "61", weight: "720", length: "3295", worth: "~8.000" } },
        { name: "Carol 360 Deluxe", src: "cars/Mazda_Carol_1962_360_Deluxe.mp4", data: { country: "Japan", production_year: "1962", drive: "RR", power: "19", weight: "560", length: "2990", worth: "~13.000" } },
        { name: "Demio", src: "cars/Mazda_Demio_1999.mp4", data: { country: "Japan", production_year: "1999", drive: "FF", power: "98", weight: "960", length: "3800", worth: "~8.000" } },
        { name: "Familia Sport 20", src: "cars/Mazda_Familia_2002_Sport_20.mp4", data: { country: "Japan", production_year: "2002", drive: "FF", power: "167", weight: "1170", length: "4380", worth: "18.980" } },
        { name: "Kusabi", src: "cars/Mazda_Kusabi_2003.mp4", data: { country: "Japan", production_year: "2003", drive: "FF", power: "148", weight: "900", length: "3800", worth: "Silber Nationale B-Lizenz" } },
        { name: "MX-Crossport Concept", src: "cars/Mazda_MX_Crossport_2005_Concept.mp4", data: { country: "Japan", production_year: "2005", drive: "4WD", power: "260", weight: "1600", length: "4630", worth: "NR-A Roadster Cup" } },
        { name: "MX-5", src: "cars/Mazda_MX-5_1989.mp4", data: { country: "Japan", production_year: "1989", drive: "FR", power: "117", weight: "940", length: "3970", worth: "~9.000" } },
        { name: "MX-5 J Limited II", src: "cars/Mazda_MX-5_1993_J_Limited_II.mp4", data: { country: "Japan", production_year: "1993", drive: "FR", power: "128", weight: "990", length: "3970", worth: "~8.000" } },
        { name: "MX-5 1.8 RS", src: "cars/Mazda_MX-5_1998_1.8_RS.mp4", data: { country: "Japan", production_year: "1998", drive: "FR", power: "142", weight: "1060", length: "3955", worth: "19.800" } },
        { name: "MX-5 1800 RS", src: "cars/Mazda_MX-5_2004_1800_RS.mp4", data: { country: "Japan", production_year: "2004", drive: "FR", power: "178", weight: "1100", length: "3995", worth: "28.000" } },
        { name: "MX-5 NR-A 1800", src: "cars/Mazda_MX-5_2004_NR-A_1800.mp4", data: { country: "Japan", production_year: "2004", drive: "FR", power: "168", weight: "1080", length: "3995", worth: "26.000" } },
        { name: "RX-7 1800 GT-X", src: "cars/Mazda_RX-7_1983_1800_GT-X.mp4", data: { country: "Japan", production_year: "1983", drive: "FR", power: "163", weight: "1100", length: "4310", worth: "~10.000" } },
        { name: "RX-7 GT-X", src: "cars/Mazda_RX-7_1990_GT-X.mp4", data: { country: "Japan", production_year: "1990", drive: "FR", power: "200", weight: "1250", length: "4295", worth: "22.800" } },
        { name: "RX-7 ∞ III", src: "cars/Mazda_RX-7_1991_Infini_III.mp4", data: { country: "Japan", production_year: "1991", drive: "FR", power: "215", weight: "1250", length: "4295", worth: "23.800" } },
        { name: "RX-7 Touring X", src: "cars/Mazda_RX-7_1992_Touring_X.mp4", data: { country: "Japan", production_year: "1992", drive: "FR", power: "255", weight: "1260", length: "4295", worth: "25.800" } },
        { name: "RX-7 Type RZ", src: "cars/Mazda_RX-7_1992_Type_RZ.mp4", data: { country: "Japan", production_year: "1992", drive: "FR", power: "255", weight: "1230", length: "4295", worth: "29.800" } },
        { name: "RX-7 ∞ IV", src: "cars/Mazda_RX-7_1993_Infini_IV.mp4", data: { country: "Japan", production_year: "1993", drive: "FR", power: "255", weight: "1250", length: "4295", worth: "30.000" } },
        { name: "RX-7 Type R Bathurst", src: "cars/Mazda_RX-7_2001_Type_R_Bathurst.mp4", data: { country: "Japan", production_year: "2001", drive: "FR", power: "276", weight: "1280", length: "4295", worth: "33.800" } },
        { name: "RX-7 Spirit R Type A", src: "cars/Mazda_RX-7_2002_Spirit_R_Type_A.mp4", data: { country: "Japan", production_year: "2002", drive: "FR", power: "276", weight: "1270", length: "4295", worth: "34.800" } },
        { name: "RX-8 Concept Type-I", src: "cars/Mazda_RX-8_2001_Concept_Type-I.mp4", data: { country: "Japan", production_year: "2001", drive: "FR", power: "276", weight: "1350", length: "4430", worth: "Gewonnen bei Tokyo-Genehmigung" } },
        { name: "RX-8 Type S", src: "cars/Mazda_RX-8_2003_Type_S.mp4", data: { country: "Japan", production_year: "2003", drive: "FR", power: "246", weight: "1310", length: "4435", worth: "26.000" } },
        { name: "RX-8 Touring Spirit", src: "cars/Mazda_RX-8_2003_Touring_Spirit.mp4", data: { country: "Japan", production_year: "2003", drive: "FR", power: "246", weight: "1340", length: "4435", worth: "29.000" } },
        { name: "RX-8 Concept LM Race Car", src: "cars/Mazda_RX-8_2001_Concept_LM_Race_Car.mp4", data: { country: "Japan", production_year: "2001", drive: "FR", power: "473", weight: "1100", length: "4435", worth: "90.000" } }
    ],
    mercedes: [
        { name: "A 160 Avantgarde", src: "cars/Mercedes-Benz_A_1998_160_Avantgarde.mp4", data: { country: "Deutschland", production_year: "1998", drive: "FF", power: "100", weight: "1114", length: "3575", worth: "~16.000" } },
        { name: "C9 Sauber Race Car", src: "cars/Mercedes-Benz_C_1989_9_Race_Car.mp4", data: { country: "Deutschland", production_year: "1989", drive: "MR", power: "710", weight: "893", length: "4700", worth: "Formula GT Weltmeisterschaft | 300 km Grand Valley" } },
        { name: "CL 600", src: "cars/Mercedes-Benz_CL_2000_600.mp4", data: { country: "Deutschland", production_year: "2000", drive: "FR", power: "362", weight: "1955", length: "4000", worth: "177.850" } },
        { name: "CLK GTR Race Car", src: "cars/Mercedes-Benz_CLK_1998_GTR_Race_Car.mp4", data: { country: "Deutschland", production_year: "1998", drive: "MR", power: "599", weight: "939", length: "4900", worth: "Deutsche Tourenwagen Meisterschaft" } },
        { name: "CLK 55 AMG", src: "cars/Mercedes-Benz_CLK_2000_55.mp4", data: { country: "Deutschland", production_year: "2000", drive: "FR", power: "347", weight: "1620", length: "4000", worth: "147.770" } },
        { name: "CLK DTM Touring Car", src: "cars/Mercedes-Benz_CLK_2000_Touring_Car.mp4", data: { country: "Deutschland", production_year: "2000", drive: "FR", power: "444", weight: "1000", length: "4655", worth: "Legende der Silberpfeile" } },
        { name: "E 190 2.5 Evolution II", src: "cars/Mercedes-Benz_E_190_1991_2.5_16_Evolution_II.mp4", data: { country: "Deutschland", production_year: "1991", drive: "FR", power: "231", weight: "1340", length: "4544", worth: "67.910" } },
        { name: "E 190 2.5 Evolution II Touring Car", src: "cars/Mercedes-Benz_E_190_1992_2.5_16_Evolution_II_Touring_Car.mp4", data: { country: "Deutschland", production_year: "1992", drive: "FR", power: "382", weight: "979", length: "4544", worth: "Schwarzwald Liga B" } },
        { name: "E 55 AMG", src: "cars/Mercedes-Benz_E_2002_55.mp4", data: { country: "Deutschland", production_year: "2002", drive: "FR", power: "469", weight: "1910", length: "4834", worth: "105.330" } },
        { name: "Motor Carriage", src: "cars/Mercedes-Benz_Motor_Carriage_1886.mp4", data: { country: "Deutschland", production_year: "1886", drive: "MR", power: "1", weight: "290", length: "2530", worth: "Welt-Klassik-Meisterschaft" } },
        { name: "Motor Wagen", src: "cars/Mercedes-Benz_Motor_Wagen_1886.mp4", data: { country: "Deutschland", production_year: "1886", drive: "RR", power: "1", weight: "265", length: "4000", worth: "Europa-Klassik-Meisterschaft" } },
        { name: "SL 300 Coupe", src: "cars/Mercedes-Benz_SL_1954_300_Coupe.mp4", data: { country: "Deutschland", production_year: "1954", drive: "FR", power: "212", weight: "1295", length: "4520", worth: "SL Herausforderung" } },
        { name: "SL 500", src: "cars/Mercedes-Benz_SL_1998_500.mp4", data: { country: "Deutschland", production_year: "1998", drive: "FR", power: "302", weight: "1799", length: "4500", worth: "~110.000" } },
        { name: "SL 600", src: "cars/Mercedes-Benz_SL_1998_600.mp4", data: { country: "Deutschland", production_year: "1998", drive: "FR", power: "389", weight: "2029", length: "4499", worth: "~136.000" } },
        { name: "SL 500", src: "cars/Mercedes-Benz_SL_2002_500.mp4", data: { country: "Deutschland", production_year: "2002", drive: "FR", power: "302", weight: "1839", length: "4535", worth: "127.620" } },
        { name: "SL 55 AMG", src: "cars/Mercedes-Benz_SL_2002_550.mp4", data: { country: "Deutschland", production_year: "2002", drive: "FR", power: "493", weight: "1970", length: "4535", worth: "168.120" } },
        { name: "SL 600", src: "cars/Mercedes-Benz_SL_2004_600.mp4", data: { country: "Deutschland", production_year: "2004", drive: "FR", power: "493", weight: "2025", length: "4535", worth: "177.700" } },
        { name: "SL 65 AMG", src: "cars/Mercedes-Benz_SL_2004_650.mp4", data: { country: "Deutschland", production_year: "2004", drive: "FR", power: "604", weight: "2028", length: "4535", worth: "190.700" } },
        { name: "SLK 230 Kompressor", src: "cars/Mercedes-Benz_SLK_1998_230_Kompressor.mp4", data: { country: "Deutschland", production_year: "1998", drive: "FR", power: "195", weight: "1325", length: "3995", worth: "~27.000" } },
        { name: "SLR McLaren", src: "cars/Mercedes-Benz_SLR_2003_McLaren.mp4", data: { country: "Deutschland", production_year: "2003", drive: "FR", power: "617", weight: "1768", length: "4656", worth: "610.000" } }
    ],
    mercury: [
        { name: "Cougar XR-7", src: "cars/Mercury_Cougar_1967_XR-7.mp4", data: { country: "Amerika", production_year: "1976", drive: "FR", power: "325", weight: "1598", length: "4824", worth: "~30.000 | Bronze S-Lizenz" } }
    ],
    mg: [
        { name: "MGF", src: "cars/MG_MGF_1997.mp4", data: { country: "Grossbritannien", production_year: "1997", drive: "MR", power: "142", weight: "1070", length: "3909", worth: "~21.000 | MG-Festival" } },
        { name: "TF 160", src: "cars/MG_TF_2003_160.mp4", data: { country: "Grossbritannien", production_year: "2003", drive: "MR", power: "158", weight: "1150", length: "3962", worth: "38.860" } }
    ],
    mines: [
        { name: "Lancer Evo 6", src: "cars/Mines_Lancer_2000_Evo_6.mp4", data: { country: "Japan", production_year: "2000", drive: "4WD", power: "400", weight: "1210", length: "4350", worth: "150.000" } },
        { name: "Skyline GT-R N1 V-Spec", src: "cars/Mines_Skyline_2000_GT-R_N1_V-Spec.mp4", data: { country: "Japan", production_year: "2000", drive: "4WD", power: "600", weight: "1540", length: "4600", worth: "200.000" } }
    ],
    mini: [
        { name: "Mini One", src: "Cars/Mini_One_2002.mp4", data: { country: "Grossbritannien", production_year: "2002", drive: "FF", power: "89", weight: "1125", length: "3626", worth: "19.620" } },
        { name: "Mini One Cooper", src: "Cars/Mini_One_2002_Cooper.mp4", data: { country: "Grossbritannien", production_year: "2002", drive: "FF", power: "108", weight: "1115", length: "3626", worth: "22.190" } },
        { name: "Mini One Cooper S", src: "Cars/Mini_One_2002_Cooper_S.mp4", data: { country: "Grossbritannien", production_year: "2002", drive: "FF", power: "160", weight: "1120", length: "3626", worth: "26.760" } }
    ],
    mitsubishi : [
        { name: "3000GT MR", src: "sources/Cars/Mitsubishi_3000GT_1995_MR.mp4", land: "Japan", year: 1995, drive: "4WD", ps: 295, weight: 1680, length: 4600, price: "~20.000" },
        { name: "3000GT SR", src: "sources/Cars/Mitsubishi_3000GT_1995_SR.mp4", land: "Japan", year: 1995, drive: "4WD", ps: 221, weight: 1610, length: 4575, price: "~15.000" },
        { name: "3000GT VR-4", src: "sources/Cars/Mitsubishi_3000GT_1995_VR-4.mp4", land: "Japan", year: 1995, drive: "4WD", ps: 310, weight: 1710, length: 4600, price: "~15.000" },
        { name: "Airtrek Turbo-R", src: "sources/Cars/Mitsubishi_Airtrek_2002_Turbo-R.mp4", land: "Japan", year: 2002, drive: "4WD", ps: 236, weight: 1520, length: 4465, price: "22.950" },
        { name: "Colt 1.5 Sport X", src: "sources/Cars/Mitsubishi_Colt_2002_1.5_Sport_X_Version.mp4", land: "Japan", year: 2002, drive: "FF", ps: 97, weight: 1030, length: 3870, price: "14.950" },
        { name: "CZ-3 Tarmac", src: "sources/Cars/Mitsubishi_CZ-3_2001_Tarmac.mp4", land: "Japan", year: 2001, drive: "4WD", ps: 218, weight: 1200, length: 4000, price: "Schweizer Alpen Einfach" },
        { name: "CZ-3 Tarmac Rally Car", src: "sources/Cars/Mitsubishi_CZ-3_2002_Tarmac_Rally_Car.mp4", land: "Japan", year: 2002, drive: "4WD", ps: 335, weight: 1200, length: 4000, price: "Grand Canyon Normal" },
        { name: "Eclipse GT", src: "sources/Cars/Mitsubishi_Eclipse_1995_GT.mp4", land: "Japan", year: 1995, drive: "FF", ps: 210, weight: 1330, length: 4370, price: "~7.000" },
        { name: "Eclipse GTS Spyder", src: "sources/Cars/Mitsubishi_Eclipse_2003_GTS_Spyder.mp4", land: "Japan", year: 2003, drive: "FF", ps: 210, weight: 1510, length: 4455, price: "26.780" },
        { name: "Eclipse GT", src: "sources/Cars/Mitsubishi_Eclipse_2006_GT.mp4", land: "Japan", year: 2006, drive: "FF", ps: 263, weight: 1575, length: 4564, price: "25.000" },
        { name: "FTO GPR", src: "sources/Cars/Mitsubishi_FTO_1997_GPR.mp4", land: "Japan", year: 1997, drive: "FF", ps: 197, weight: 1150, length: 4365, price: "~14.000" },
        { name: "Galant GTO MR", src: "sources/Cars/Mitsubishi_Galant_1940_GTO_MR.mp4", land: "Japan", year: 1970, drive: "FR", ps: 118, weight: 980, length: 4080, price: "21.800 | ~7.000" },
        { name: "Galant 2.0 DOHC Turbo VR-4", src: "sources/Cars/Mitsubishi_Galant_1989_2.0_DOHC_Turbo_VR-4.mp4", land: "Japan", year: 1989, drive: "4WD", ps: 202, weight: 1340, length: 4560, price: "~9.000" },
        { name: "i Concept", src: "sources/Cars/Mitsubishi_i_2003_Concept.mp4", land: "Japan", year: 2003, drive: "MR", ps: 67, weight: 790, length: 3516, price: "Mirage Cup" },
        { name: "Lancer 1600 GSR", src: "sources/Cars/Mitsubishi_Lancer_1973_1600_GSR.mp4", land: "Japan", year: 1973, drive: "FR", ps: 108, weight: 825, length: 4000, price: "14.200" },
        { name: "Lancer 1600 GSR Rally Car", src: "sources/Cars/Mitsubishi_Lancer_1974_1600_GSR_Rally_Car.mp4", land: "Japan", year: 1974, drive: "FR", ps: 160, weight: 825, length: 3965, price: "Evolution Meeting" },
        { name: "Lancer EX 1800 GSR IC Turbo", src: "sources/Cars/Mitsubishi_Lancer_1983_EX_1800_GSR_IC_Turbo.mp4", land: "Japan", year: 1983, drive: "FR", ps: 152, weight: 1085, length: 4000, price: "~9.000" },
        { name: "Lancer Evolution I GSR", src: "sources/Cars/Mitsubishi_Lancer_1992_Evolution_1_GSR.mp4", land: "Japan", year: 1992, drive: "4WD", ps: 238, weight: 1240, length: 4310, price: "~12.000" },
        { name: "Lancer Evolution II GSR", src: "sources/Cars/Mitsubishi_Lancer_1994_Evolution_2_GSR.mp4", land: "Japan", year: 1994, drive: "4WD", ps: 254, weight: 1250, length: 4310, price: "~14.000" },
        { name: "Lancer Evolution III", src: "sources/Cars/Mitsubishi_Lancer_1995_Evolution_3_GSR.mp4", land: "Japan", year: 1995, drive: "4WD", ps: 264, weight: 1260, length: 4310, price: "~11.000" },
        { name: "Lancer Evolution IV GSR", src: "sources/Cars/Mitsubishi_Lancer_1996_Evolution_4_GSR.mp4", land: "Japan", year: 1996, drive: "4WD", ps: 273, weight: 1350, length: 4330, price: "~11.000" },
        { name: "Lancer Evolution IV Rally Car", src: "sources/Cars/Mitsubishi_Lancer_1997_Evolution_4_Rally_Car.mp4", land: "Japan", year: 1997, drive: "4WD", ps: 289, weight: 1230, length: 4330, price: "Eisrennen Mittel" },
        { name: "Lancer Evolution V GSR", src: "sources/Cars/Mitsubishi_Lancer_1998_Evolution_5_GSR.mp4", land: "Japan", year: 1998, drive: "4WD", ps: 306, weight: 1360, length: 4350, price: "~21.000" },
        { name: "Lancer Evolution VI GSR", src: "sources/Cars/Mitsubishi_Lancer_1999_Evolution_6_GSR.mp4", land: "Japan", year: 1999, drive: "4WD", ps: 302, weight: 1360, length: 4350, price: "~21.000" },
        { name: "Lancer Evolution VI Rally Car", src: "sources/Cars/Mitsubishi_Lancer_1999_Evolution_6_Rally_Car.mp4", land: "Japan", year: 1999, drive: "4WD", ps: 291, weight: 1230, length: 4350, price: "750.000" },
        { name: "Lancer Evolution VI RS", src: "sources/Cars/Mitsubishi_Lancer_1999_Evolution_6_RS.mp4", land: "Japan", year: 1999, drive: "4WD", ps: 302, weight: 1260, length: 4350, price: "~17.000" },
        { name: "Lancer Evolution VI GSR Tommi Makinen Edition", src: "sources/Cars/Mitsubishi_Lancer_2000_Evolution_6_GSR_Tommi_Makinen_Edition.mp4", land: "Japan", year: 2000, drive: "4WD", ps: 294, weight: 1360, length: 4350, price: "~16.000" },
        { name: "Lancer Evolution VII GSR", src: "sources/Cars/Mitsubishi_Lancer_2001_Evolution_7_GSR.mp4", land: "Japan", year: 2001, drive: "4WD", ps: 305, weight: 1400, length: 4455, price: "~20.000" },
        { name: "Lancer Evolution VII GT-A", src: "sources/Cars/Mitsubishi_Lancer_2002_Evolution_7_GT-A.mp4", land: "Japan", year: 2002, drive: "4WD", ps: 302, weight: 1480, length: 4455, price: "~21.000" },
        { name: "Lancer Evolution VIII GSR", src: "sources/Cars/Mitsubishi_Lancer_2003_Evolution_8_GSR.mp4", land: "Japan", year: 2003, drive: "4WD", ps: 306, weight: 1410, length: 4490, price: "32.980" },
        { name: "Lancer Evolution VIII Rally Car", src: "sources/Cars/Mitsubishi_Lancer_2003_Evolution_8_Rally_Car.mp4", land: "Japan", year: 2003, drive: "4WD", ps: 312, weight: 1230, length: 4490, price: "1.250.000" },
        { name: "Lancer Evolution VIII RS", src: "sources/Cars/Mitsubishi_Lancer_2003_Evolution_8_RS.mp4", land: "Japan", year: 2003, drive: "4WD", ps: 305, weight: 1320, length: 4490, price: "31.600" },
        { name: "Lancer Evolution VIII MR GSR", src: "sources/Cars/Mitsubishi_Lancer_2004_Evolution_8_MR_GSR.mp4", land: "Japan", year: 2004, drive: "4WD", ps: 304, weight: 1400, length: 4490, price: "33.980" }
    ],

};

const logos = document.querySelectorAll(".showroom img");
const videoContainer = document.getElementById("showroom_videos");
let currentIndex = 0;
let currentBrand = null;

logos.forEach(logo => {
    logo.addEventListener("click", () => {
        logos.forEach(l => l.classList.remove("active"));
        logo.classList.add("active");
        currentBrand = logo.getAttribute("data-brand");
        const cars = showroomVideos[currentBrand] || [];
        if (cars.length > 0) {cars.sort((a, b) => a.name.localeCompare(b.name));currentIndex = 0;renderSlider();}
        else {videoContainer.innerHTML = "<p>Für diese Marke sind noch keine Fahrzeuge verfügbar.</p>";}
    });
});

function renderSlider() {
    const cars = showroomVideos[currentBrand];
    const car = cars[currentIndex];

    videoContainer.innerHTML = `
    <div class="slider-container">
        <div class="slider-video-wrapper">
            ${cars.length > 1 ? `
                <div class="slider-btn left" onclick="prevCar()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15 18l-6-6 6-6" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            ` : ""}
            <video class="slider-video" loop autoplay muted><source src="${car.src}" type="video/mp4">Dein Browser unterstützt kein HTML5 Video.</video>
            ${cars.length > 1 ? `
                <div class="slider-btn right" onclick="nextCar()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M9 6l6 6-6 6" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            ` : ""}
        </div>
        <div class="slider-details">
            <table class="car_info_table">
                <tr><td class="car_info_1">Land:</td><td class="car_info_2">${car.data.country}</td></tr>
                <tr><td class="car_info_1">Baujahr:</td><td class="car_info_2">${car.data.production_year}</td></tr>
                <tr><td class="car_info_1">Antrieb:</td><td class="car_info_2">${car.data.drive}</td></tr>
                <tr><td class="car_info_1">Leistung:</td><td class="car_info_2">${car.data.power} PS</td></tr>
                <tr><td class="car_info_1">Gewicht:</td><td class="car_info_2">${car.data.weight} kg</td></tr>
                <tr><td class="car_info_1">Länge:</td><td class="car_info_2">${car.data.length} mm</td></tr>
                <tr><td class="car_info_1">Preis:</td><td class="car_info_2">${car.data.worth} Credits</td></tr>
            </table>
        </div>
    </div>
    `;
}

function prevCar() {const cars = showroomVideos[currentBrand];currentIndex = (currentIndex - 1 + cars.length) % cars.length;renderSlider();}
function nextCar() {const cars = showroomVideos[currentBrand];currentIndex = (currentIndex + 1) % cars.length;renderSlider();}
function scrollShowroom(direction) {const showroom = document.getElementById("showroom");const scrollAmount = 200;showroom.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });}