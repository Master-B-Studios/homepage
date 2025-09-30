const showroomVideos = {
    ac_cars: [
        { name: '427 S/C', src: 'sources/Cars/AC_Cars_427_SC_1966.mp4', data: { country: 'Grossbritannien', production_year: '1966', drive: 'FR', power: '485', weight: '1311', length: '3962', worth: '423.200' } }
    ],
    acura: [
        { name: '3.2 CL Type S', src: 'sources/Cars/Acura_CL_2001_3.2_Type-S.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FF', power: '264', weight: '1592', length: '4875', worth: '~27.000' } },
        { name: '3.2 CL Type S', src: 'sources/Cars/Acura_CL_2003_3.2_Type-S.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '264', weight: '1563', length: '4875', worth: '32.420' } },
        { name: 'Integra Type R', src: 'sources/Cars/Acura_Integra_2001_Type_R.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FF', power: '180', weight: '1197', length: '4379', worth: '~19.000' } },
        { name: 'NSX', src: 'sources/Cars/Acura_NSX_1991.mp4', data: { country: 'Japan', production_year: '1991', drive: 'MR', power: '244', weight: '1365', length: '4405', worth: '~28.000' } },
        { name: 'NSX Coupe', src: 'sources/Cars/Acura_NSX_1997_Coupe.mp4', data: { country: 'Japan', production_year: '1997', drive: 'MR', power: '294', weight: '1435', length: '4425', worth: '~35.000' } },
        { name: 'NSX', src: 'sources/Cars/Acura_NSX_2004.mp4', data: { country: 'Japan', production_year: '2004', drive: 'MR', power: '294', weight: '1430', length: '4425', worth: '94.440' } },
        { name: 'RSX Type S', src: 'sources/Cars/Acura_RSX_2004_Type-S.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FF', power: '203', weight: '1255', length: '4374', worth: '24.740' } }
    ],
    alfa_romeo: [
        { name: '147 2.0 Twinspark', src: 'sources/Cars/Alfa_Romeo_147_2002_2.0_Twinspark.mp4', data: { country: 'Italien', production_year: '2002', drive: 'FF', power: '150', weight: '1280', length: '4166', worth: '30.590' } },
        { name: '147 GTA', src: 'sources/Cars/Alfa_Romeo_147_2002_GTA.mp4', data: { country: 'Italien', production_year: '2002', drive: 'FF', power: '246', weight: '1360', length: '4191', worth: '48.040' } },
        { name: '155 2.5 V6 TI', src: 'sources/Cars/Alfa_Romeo_155_1993_2.5_V6_TI.mp4', data: { country: 'Italien', production_year: '1993', drive: '4x4', power: '413', weight: '1010', length: '4572', worth: 'La Festa Italiano' } },
        { name: '156 2.5 V6 24V', src: 'sources/Cars/Alfa_Romeo_156_1998_2.5_V6_24V.mp4', data: { country: 'Italien', production_year: '1998', drive: 'FF', power: '190', weight: '1320', length: '4420', worth: '~27.000' } },
        { name: '166 2.5 V6 24V Sportronic', src: 'sources/Cars/Alfa_Romeo_166_1998_2.5_V6_24V_Sportronic.mp4', data: { country: 'Italien', production_year: '1998', drive: 'FF', power: '193', weight: '1520', length: '4699', worth: '~27.000' } },
        { name: 'Giulia Sprint Speciale', src: 'sources/Cars/Alfa_Romeo_Giulia_1963_Sprint_Speciale.mp4', data: { country: 'Italien', production_year: '1963', drive: 'FR', power: '115', weight: '950', length: '4115', worth: '1000 Meilen' } },
        { name: 'Giulia Sprint GTA', src: 'sources/Cars/Alfa_Romeo_Giulia_1965_Sprint_GTA.mp4', data: { country: 'Italien', production_year: '1965', drive: 'FR', power: '115', weight: '745', length: '4064', worth: 'GTA Cup' } },
        { name: 'GT 3.2 V6 24V', src: 'sources/Cars/Alfa_Romeo_GT_2004_3.2_V6_24V.mp4', data: { country: 'Italien', production_year: '2004', drive: 'FF', power: '226', weight: '1347', length: '4470', worth: '39.010' } },
        { name: 'GTV 3.0 V6 24V', src: 'sources/Cars/Alfa_Romeo_GTV_2001_3.0_V6_24V.mp4', data: { country: 'Italien', production_year: '2001', drive: 'FF', power: '216', weight: '1416', length: '4267', worth: '49.060' } },
        { name: 'Spider Duetto', src: 'sources/Cars/Alfa_Romeo_Spider_1966_Duetto.mp4', data: { country: 'Italien', production_year: '1966', drive: 'FR', power: '110', weight: '960', length: '4242', worth: '35.300' } },
        { name: 'Spider 3.0i V6 24V', src: 'sources/Cars/Alfa_Romeo_Spider_2001_3.0i_V6_24V.mp4', data: { country: 'Italien', production_year: '2001', drive: 'FF', power: '216', weight: '1450', length: '4267', worth: '51.190' } }
    ],
    alpine: [
        { name: 'A110 1600 S', src: 'sources/Cars/Alpine_A110_1973_1600_S.mp4', data: { country: 'Frankreich', production_year: '1973', drive: 'RR', power: '138', weight: '715', length: '3850', worth: 'Renault Alpine Cup' } },
        { name: 'A310 1600 VE', src: 'sources/Cars/Alpine_A310_1973_1600_VE.mp4', data: { country: 'Frankreich', production_year: '1973', drive: 'RR', power: '130', weight: '930', length: '4166', worth: 'George V Rallye - Leicht' } }
    ],
    amuse: [
        { name: 'Carbon R', src: 'sources/Cars/Amuse_Carbon_2004_R.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '600', weight: '1123', length: '4730', worth: '250.000' } },
        { name: 'S2000 Street Version', src: 'sources/Cars/Amuse_S2000_2004_Street_Version.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '254', weight: '1189', length: '4154', worth: '50.000' } },
        { name: 'S2000 R1', src: 'sources/Cars/Amuse_S2000_2004_R1.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '260', weight: '1120', length: '4154', worth: '150.000' } },
        { name: 'S2000 GT1', src: 'sources/Cars/Amuse_S2000_2004_GT1.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '510', weight: '1179', length: '4730', worth: '250.000' } }
    ],
    aston_martin: [
        { name: 'DB7 Vantage Coupe', src: 'sources/Cars/Aston_Martin_DB7_2000_Vantage_Coupe.mp4', data: { country: 'Grossbritannien', production_year: '2000', drive: 'FR', power: '419', weight: '1775', length: '4674', worth: '164.260' } },
        { name: 'DB9 Coupe', src: 'sources/Cars/Aston_Martin_DB9_2003_Coupe.mp4', data: { country: 'Grossbritannien', production_year: '2003', drive: 'FR', power: '449', weight: '1710', length: '4699', worth: '164.470 | Aston Martin Carnival' } },
        { name: 'V8 Vantage', src: 'sources/Cars/Aston_Martin_V8_1999_Vantage.mp4', data: { country: 'Grossbritannien', production_year: '1999', drive: 'FR', power: '550', weight: '1970', length: '4724', worth: '~291.199' } },
        { name: 'Vanquish', src: 'sources/Cars/Aston_Martin_Vanquish_2004.mp4', data: { country: 'Grossbritannien', production_year: '2004', drive: 'FR', power: '459', weight: '1835', length: '4648', worth: '238.750' } }
    ],
    audi: [
        { name: 'A2 1.4', src: 'sources/Cars/Audi_A2_2002_1.4.mp4', data: { country: 'Deutschland', production_year: '2002', drive: 'FF', power: '72', weight: '920', length: '3826', worth: '22.400' } },
        { name: 'S3', src: 'sources/Cars/Audi_A3_2002_S.mp4', data: { country: 'Deutschland', production_year: '2002', drive: '4x4', power: '222', weight: '1420', length: '4159', worth: '41.070' } },
        { name: 'A3 3.2 Quattro', src: 'sources/Cars/Audi_A3_2003_3.2_Quattro.mp4', data: { country: 'Deutschland', production_year: '2003', drive: '4x4', power: '246', weight: '1495', length: '4203', worth: '42.490' } },
        { name: 'S4', src: 'sources/Cars/Audi_A4_1998_S.mp4', data: { country: 'Deutschland', production_year: '1998', drive: '4x4', power: '269', weight: '1510', length: '4483', worth: '~46.000' } },
        { name: 'RS4 Avant', src: 'sources/Cars/Audi_A4_2001_RS_Avant.mp4', data: { country: 'Deutschland', production_year: '2001', drive: '4x4', power: '378', weight: '1619', length: '4525', worth: '41.380' } },
        { name: 'S4', src: 'sources/Cars/Audi_A4_2003_S.mp4', data: { country: 'Deutschland', production_year: '2003', drive: '4x4', power: '340', weight: '1599', length: '4575', worth: '55.430' } },
        { name: 'A4 Touring Car', src: 'sources/Cars/Audi_A4_2004_Touring_Car.mp4', data: { country: 'Deutschland', production_year: '2004', drive: 'FR', power: '460', weight: '1080', length: '4344', worth: '450.000' } },
        { name: 'RS6', src: 'sources/Cars/Audi_A6_2002_RS.mp4', data: { country: 'Deutschland', production_year: '2002', drive: '4x4', power: '453', weight: '1839', length: '4858', worth: '117.060' } },
        { name: 'RS6 Avant', src: 'sources/Cars/Audi_A6_2002_RS_Avant.mp4', data: { country: 'Deutschland', production_year: '2002', drive: '4x4', power: '453', weight: '1880', length: '4852', worth: '117.060' } },
        { name: 'Auto Union V16 Type C Streamline', src: 'sources/Cars/Audi_Auto_Union_V16_1937_Type_C_Streamline.mp4', data: { country: 'Deutschland', production_year: '1937', drive: 'MR', power: '520', weight: '1000', length: '5000', worth: '500.000 | Grand Valley 300 km' } },
        { name: 'Le Mans Quattro', src: 'sources/Cars/Audi_Le_Mans_2003_Quattro.mp4', data: { country: 'Deutschland', production_year: '2003', drive: '4x4', power: '641', weight: '1531', length: '4370', worth: 'Tourist Trophy' } },
        { name: 'Nuvolari Quattro', src: 'sources/Cars/Audi_Nuvolari_2003_Quattro.mp4', data: { country: 'Deutschland', production_year: '2003', drive: '4x4', power: '608', weight: '1549', length: '4370', worth: '25% Spielfortschritt' } },
        { name: 'Pikes Peak Quattro', src: 'sources/Cars/Audi_Pikes_Peak_2003_Quattro.mp4', data: { country: 'Deutschland', production_year: '2003', drive: '4x4', power: '508', weight: '1901', length: '5000', worth: 'A3 Cup' } },
        { name: 'Quattro', src: 'sources/Cars/Audi_Quattro_1982.mp4#t=3', data: { country: 'Deutschland', production_year: '1982', drive: '4x4', power: '200', weight: '1290', length: '4000', worth: '90.360' } },
        { name: 'R8 Race Car', src: 'sources/Cars/Audi_R8_2001_Race_Car.mp4', data: { country: 'Deutschland', production_year: '2001', drive: 'MR', power: '795', weight: '899', length: '4000', worth: '4.500.000 | Circuit De La Sarthe I 24h' } },
        { name: 'TT Coupe 1.8T Quattro', src: 'sources/Cars/Audi_TT_2000_Coupe_1.8T_Quattro.mp4', data: { country: 'Deutschland', production_year: '2000', drive: '4x4', power: '219', weight: '1395', length: '4041', worth: '47.700' } },
        { name: 'TT Coupe 3.2 Quattro', src: 'sources/Cars/Audi_TT_2003_Coupe_3.2_Quattro.mp4', data: { country: 'Deutschland', production_year: '2003', drive: '4x4', power: '239', weight: '1520', length: '4041', worth: '57.740' } },
        { name: 'TT-R Touring Car', src: 'sources/Cars/Audi_TT_2002_R_Touring_Car.mp4', data: { country: 'Deutschland', production_year: '2002', drive: 'FR', power: '470', weight: '1080', length: '4600', worth: '550.000 | Nürburgring 4h' } }
    ],
    autobacs: [
        { name: 'Garaiya', src: 'sources/Cars/Autobacs_Garaiya_2002.mp4', data: { country: 'Japan', production_year: '2002', drive: 'MR', power: '200', weight: '799', length: '3775', worth: '65.000' } },
        { name: 'Garaiya ARTA JGTC', src: 'sources/Cars/Autobacs_Garaiya_2002_ARTA_JGTC.mp4', data: { country: 'Japan', production_year: '2003', drive: 'MR', power: '323', weight: '1125', length: '3775', worth: '500.000' } }
    ],
    autobianchi: [
        { name: 'A112 Abarth', src: 'sources/Cars/Autobianchi_A112_1979_Abarth.mp4', data: { country: 'Italien', production_year: '1979', drive: 'FF', power: '70', weight: '700', length: '3270', worth: 'Sunday Cup' } }
    ],
    bentley: [
        { name: 'Speed 8', src: 'sources/Cars/Bentley_Speed_8_2003.mp4', data: { country: 'Grossbritannien', production_year: '2003', drive: 'MR', power: '795', weight: '900', length: '4645', worth: 'Circuit De La Sarthe II 24h' } }
    ],
    blitz: [
        { name: 'ER34 D1 Spec', src: 'sources/Cars/Blitz_ER34_2004_D1_Spec.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '475', weight: '1179', length: '4444', worth: '200.000' } }
    ],
    bmw: [
        { name: '120d', src: 'sources/Cars/BMW_1_2004_20d.mp4', data: { country: 'Deutschland', production_year: '2004', drive: 'FR', power: '161', weight: '1415', length: '4227', worth: '33.020' } },
        { name: '120i', src: 'sources/Cars/BMW_1_2004_20i.mp4', data: { country: 'Deutschland', production_year: '2004', drive: 'FR', power: '148', weight: '1335', length: '4227', worth: '31.940' } },
        { name: 'M3 GTR Race Car', src: 'sources/Cars/BMW_3_2001_M_GTR_Race_Car.mp4', data: { country: 'Deutschland', production_year: '2001', drive: 'FR', power: '444', weight: '1120', length: '4617', worth: 'Schwarzwald Liga A' } },
        { name: '320i Touring Car', src: 'sources/Cars/BMW_3_2003_20i_Touring_Car.mp4', data: { country: 'Deutschland', production_year: '2003', drive: 'FR', power: '260', weight: '1141', length: '4000', worth: '450.000' } },
        { name: 'M3 CSL', src: 'sources/Cars/BMW_3_2003_M_CSL.mp4', data: { country: 'Deutschland', production_year: '2003', drive: 'FR', power: '354', weight: '1386', length: '4617', worth: '113.610' } },
        { name: 'M3 GTR', src: 'sources/Cars/BMW_3_2003_M_GTR.mp4', data: { country: 'Deutschland', production_year: '2003', drive: 'FR', power: '380', weight: '1349', length: '4617', worth: 'Club "M"' } },
        { name: 'M3', src: 'sources/Cars/BMW_3_2004_M.mp4', data: { country: 'Deutschland', production_year: '2004', drive: 'FR', power: '339', weight: '1569', length: '4617', worth: '74.560' } },
        { name: '330i', src: 'sources/Cars/BMW_3_2005_30i.mp4', data: { country: 'Deutschland', production_year: '2005', drive: 'FR', power: '254', weight: '1525', length: '4520', worth: '48.040' } },
        { name: 'M5', src: 'sources/Cars/BMW_5_2005_M.mp4', data: { country: 'Deutschland', production_year: '2005', drive: 'FR', power: '500', weight: '1715', length: '4855', worth: '116.650' } },
        { name: '2002 Turbo', src: 'sources/Cars/BMW_2002_1973_Turbo.mp4', data: { country: 'Deutschland', production_year: '1973', drive: 'FR', power: '167', weight: '1080', length: '4220', worth: 'BMW 1-Serie Pokal' } },
        { name: 'McLaren F1 GTR Race Car', src: 'sources/Cars/BMW_McLaren_F1_1997_GTR_Race_Car.mp4', data: { country: 'Deutschland', production_year: '1997', drive: 'MR', power: '602', weight: '950', length: '4924', worth: 'Gran Turismo All-Stars' } },
        { name: 'V12 LMR', src: 'sources/Cars/BMW_V12_1999_LMR_Race_Car.mp4', data: { country: 'Deutschland', production_year: '1999', drive: 'MR', power: '799', weight: '900', length: '4924', worth: '4.500.000' } },
        { name: 'M Coupe', src: 'sources/Cars/BMW_Z3_1998_M_Coupe.mp4', data: { country: 'Deutschland', production_year: '1998', drive: 'FR', power: '316', weight: '1465', length: '4025', worth: '~51.000' } },
        { name: 'Z4', src: 'sources/Cars/BMW_Z4_2003.mp4', data: { country: 'Deutschland', production_year: '2003', drive: 'FR', power: '227', weight: '1365', length: '4000', worth: '75.610' } }
    ],
    buick: [
        { name: 'GNX', src: 'sources/Cars/Buick_GNX_1987.mp4', data: { country: 'Amerika', production_year: '1987', drive: 'FR', power: '280', weight: '1601', length: '5092', worth: '31.080' } },
        { name: 'Special', src: 'sources/Cars/Buick_Special_1962.mp4', data: { country: 'Amerika', production_year: '1962', drive: 'FR', power: '586', weight: '1364', length: '4724', worth: '58.000' } }
    ],
    cadillac: [
        { name: 'Cien Concept', src: 'sources/Cars/Cadillac_CIEN_2002_Concept.mp4', data: { country: 'Amerika', production_year: '2002', drive: 'MR', power: '760', weight: '1500', length: '4000', worth: "Rallye d'Umbria Leicht" } }
    ],
    callaway: [
        { name: 'C12', src: 'sources/Cars/Callaway_C12_2003.mp4', data: { country: 'Amerika', production_year: '2003', drive: 'FR', power: '439', weight: '1481', length: '4852', worth: '175.880' } }
    ],
    caterham: [
        { name: 'Seven Fireblade', src: 'sources/Cars/Caterham_Seven_2002_Fireblade.mp4', data: { country: 'Grossbritannien', production_year: '2002', drive: 'FR', power: '157', weight: '369', length: '3100', worth: '60.000' } }
    ],
    chapparal: [
        { name: '2D', src: 'sources/Cars/Chaparral_2D_1967.mp4', data: { country: 'Amerika', production_year: '1967', drive: 'MR', power: '426', weight: '771', length: '4000', worth: '1.100.000 | Nürburgring 4h' } },
        { name: '2J', src: 'sources/Cars/Chaparral_2J_1970.mp4', data: { country: 'Amerika', production_year: '1970', drive: 'MR', power: '683', weight: '821', length: '4000', worth: '1.200.000' } }
    ],
    chevrolet: [
        { name: 'Camaro SS', src: 'sources/Cars/Chevrolet_Camaro_1969_SS.mp4', data: { country: 'Amerika', production_year: '1969', drive: 'FR', power: '298', weight: '1401', length: '4724', worth: '60.000' } },
        { name: 'Camaro Z28', src: 'sources/Cars/Chevrolet_Camaro_1969_Z28.mp4', data: { country: 'Amerika', production_year: '1969', drive: 'FR', power: '289', weight: '1415', length: '4724', worth: '65.000' } },
        { name: 'Camaro Z-IROC Concept', src: 'sources/Cars/Chevrolet_Camaro_1988_Z-IROC_Concept.mp4', data: { country: 'Amerika', production_year: '1988', drive: 'FR', power: '233', weight: '1467', length: '4877', worth: 'Camaro Meeting' } },
        { name: 'Camaro Z28 Coupe', src: 'sources/Cars/Chevrolet_Camaro_1997_Z28_Coupe.mp4', data: { country: 'Amerika', production_year: '1997', drive: 'FR', power: '285', weight: '1561', length: '4907', worth: '~12.000' } },
        { name: 'Camaro LM Race Car', src: 'sources/Cars/Chevrolet_Camaro_2000_LM_Race_Car.mp4', data: { country: 'Amerika', production_year: '2000', drive: 'FR', power: '601', weight: '1160', length: '4915', worth: 'Stars & Stripes' } },
        { name: 'Camaro SS', src: 'sources/Cars/Chevrolet_Camaro_2000_SS.mp4', data: { country: 'Amerika', production_year: '2000', drive: 'FR', power: '331', weight: '1560', length: '4910', worth: '22.150' } },
        { name: 'Chevelle SS 454', src: 'sources/Cars/Chevrolet_Chevelle_1970_SS.mp4', data: { country: 'Amerika', production_year: '1970', drive: 'FR', power: '449', weight: '1762', length: '5121', worth: 'Hot Rod Competition' } },
        { name: 'Corvette C1 Convertible', src: 'sources/Cars/Chevrolet_Corvette_1954_C1_Convertible.mp4', data: { country: 'Amerika', production_year: '1954', drive: 'FR', power: '150', weight: '1309', length: '4250', worth: 'All-American Championship' } },
        { name: 'Corvette C2 Stingray Sport Coupe', src: 'sources/Cars/Chevrolet_Corvette_1963_C2_Stingray_Sport_Coupe.mp4', data: { country: 'Amerika', production_year: '1963', drive: 'FR', power: '359', weight: '1380', length: '4448', worth: '84.890' } },
        { name: 'Corvette C2 Z06 Race Car', src: 'sources/Cars/Chevrolet_Corvette_1963_C2_Z06_Race_Car.mp4', data: { country: 'Amerika', production_year: '1963', drive: 'FR', power: '600', weight: '1168', length: '4448', worth: 'Corvette Festival' } },
        { name: 'Corvette C3 Stingray L46 350', src: 'sources/Cars/Chevrolet_Corvette_1969_C3_Stingray_L46_350.mp4', data: { country: 'Amerika', production_year: '1969', drive: 'FR', power: '350', weight: '1490', length: '4636', worth: '71.500' } },
        { name: 'Corvette C4 ZR-1', src: 'sources/Cars/Chevrolet_Corvette_1990_C4_ZR-1.mp4', data: { country: 'Amerika', production_year: '1990', drive: 'FR', power: '375', weight: '1601', length: '4534', worth: '82.000' } },
        { name: 'Corvette C4 Grand Sport', src: 'sources/Cars/Chevrolet_Corvette_1996_C4_Grand_Sport.mp4', data: { country: 'Amerika', production_year: '1996', drive: 'FR', power: '336', weight: '1496', length: '4534', worth: '~22.950' } },
        { name: 'Corvette C5-R', src: 'sources/Cars/Chevrolet_Corvette_2000_C5-R.mp4', data: { country: 'Amerika', production_year: '2000', drive: 'FR', power: '619', weight: '1139', length: '4643', worth: '1.000.000' } },
        { name: 'Corvette C5 Z06', src: 'sources/Cars/Chevrolet_Corvette_2000_C5_Z06.mp4', data: { country: 'Amerika', production_year: '2000', drive: 'FR', power: '379', weight: '1409', length: '4566', worth: '~53.570' } },
        { name: 'Silverado SST Concept', src: 'sources/Cars/Chevrolet_Silverado_2002_SST_Concept.mp4', data: { country: 'Amerika', production_year: '2002', drive: 'FR', power: '495', weight: '2268', length: '5702', worth: 'Sports Truck Race' } },
        { name: 'SSR', src: 'sources/Cars/Chevrolet_SSR_2003.mp4', data: { country: 'Amerika', production_year: '2003', drive: 'FR', power: '289', weight: '2248', length: '4902', worth: '44.560' } }
    ],
    chrysler: [
        { name: '300C', src: 'sources/Cars/Chrysler_300C_2005.mp4', data: { country: 'Amerika', production_year: '2005', drive: 'FR', power: '339', weight: '1878', length: '4999', worth: '34.780' } },
        { name: 'Crossfire', src: 'sources/Cars/Chrysler_Crossfire_2004.mp4', data: { country: 'Amerika', production_year: '2004', drive: 'FR', power: '214', weight: '1361', length: '4059', worth: '35.670' } },
        { name: 'Prowler', src: 'sources/Cars/Chrysler_Prowler_2002.mp4', data: { country: 'Amerika', production_year: '2002', drive: 'FR', power: '247', weight: '1287', length: '3999', worth: '47.430 | Spider & Roadster' } },
        { name: 'PT Cruiser', src: 'sources/Cars/Chrysler_PT_Cruiser_2000.mp4', data: { country: 'Amerika', production_year: '2000', drive: 'FR', power: '149', weight: '1261', length: '4288', worth: '17.980' } }
    ],
    citroen: [
        { name: '2CV Type A', src: 'sources/Cars/Citroen_2CV_1954_Type_A.mp4', data: { country: 'Frankreich', production_year: '1954', drive: 'FF', power: '15', weight: '494', length: '3780', worth: 'Tous France Championnat | 2HP-2CV Classics' } },
        { name: 'C3 1.6', src: 'sources/Cars/Citroen_C3_2002_1.6.mp4', data: { country: 'Frankreich', production_year: '2002', drive: 'FF', power: '110', weight: '1063', length: '3850', worth: '18.130' } },
        { name: 'C5 V6 Exclusive', src: 'sources/Cars/Citroen_C5_2003_V6_Exclusive.mp4', data: { country: 'Frankreich', production_year: '2003', drive: 'FF', power: '207', weight: '1540', length: '4620', worth: '42.830' } },
        { name: 'Xantia 3.0i V6 Exclusive', src: 'sources/Cars/Citroen_Xantia_2000_3.0i_V6_Exclusive.mp4', data: { country: 'Frankreich', production_year: '2000', drive: 'FF', power: '193', weight: '1496', length: '4524', worth: '39.230' } },
        { name: 'Xsara Rally Car', src: 'sources/Cars/Citroen_Xsara_1999_Rally_Car.mp4', data: { country: 'Frankreich', production_year: '1999', drive: 'FF', power: '299', weight: '960', length: '4167', worth: '750.000' } },
        { name: 'Xsara VTR', src: 'sources/Cars/Citroen_Xsara_2003_VTR.mp4', data: { country: 'Frankreich', production_year: '2003', drive: 'FF', power: '108', weight: '1180', length: '4190', worth: '21.850' } }
    ],
    cizeta: [
        { name: 'V16T', src: 'sources/Cars/Cizeta_V16T_1994.mp4', data: { country: 'Italien', production_year: '1994', drive: 'MR', power: '589', weight: '1640', length: '4442', worth: 'Supercar Festival' } }
    ],
    daihatsu: [
        { name: 'Copen Active Top', src: 'sources/Cars/Daihatsu_Copen_2002_Active_Top.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FF', power: '62', weight: '830', length: '3395', worth: '14.980' } },
        { name: 'Copen Detachable Top', src: 'sources/Cars/Daihatsu_Copen_2002_Detachable_Top.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FF', power: '62', weight: '800', length: '3395', worth: '14.980' } },
        { name: 'Cuore TR-XX Avanzato R', src: 'sources/Cars/Daihatsu_Cuore_1997_TR-XX_Avanzato_R.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FF', power: '63', weight: '700', length: '3410', worth: '~5.000' } },
        { name: 'Midget', src: 'sources/Cars/Daihatsu_Midget_1963.mp4', data: { country: 'Japan', production_year: '1963', drive: 'MR', power: '12', weight: '299', length: '2970', worth: 'Midget II Race' } },
        { name: 'Midget II D-Type', src: 'sources/Cars/Daihatsu_Midget_1998_II_D-Type.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FR', power: '33', weight: '569', length: '2790', worth: '~3.300' } },
        { name: 'Move CX', src: 'sources/Cars/Daihatsu_Move_1995_CX.mp4', data: { country: 'Japan', production_year: '1995', drive: 'FF', power: '53', weight: '739', length: '3395', worth: '~4.000' } },
        { name: 'Move SR-XX 2WD', src: 'sources/Cars/Daihatsu_Move_1997_SR-XX_2WD.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FF', power: '60', weight: '760', length: '3395', worth: '~4.000' } },
        { name: 'Move SR-XX 4WD', src: 'sources/Cars/Daihatsu_Move_1997_SR-XX_4WD.mp4', data: { country: 'Japan', production_year: '1997', drive: '4WD', power: '60', weight: '811', length: '3395', worth: '~6.000' } },
        { name: 'Move Custom RS Limited', src: 'sources/Cars/Daihatsu_Move_2002_Custom_RS_Limited.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '63', weight: '921', length: '3395', worth: '15.720' } },
        { name: 'Sirion CX 2WD', src: 'sources/Cars/Daihatsu_Sirion_1998_CX_2WD.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FF', power: '57', weight: '840', length: '3660', worth: '~7.000' } },
        { name: 'Sirion CX 4WD', src: 'sources/Cars/Daihatsu_Sirion_1998_CX_4WD.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '57', weight: '890', length: '3660', worth: '~7.000' } },
        { name: 'Sirion X4', src: 'sources/Cars/Daihatsu_Sirion_2000_X4.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '118', weight: '840', length: '3660', worth: '~10.000 | Copen Race' } }
    ],
    dmc: [
        { name: 'DeLorean S2', src: 'sources/Cars/DMC_DeLorean_2004_S2.mp4', data: { country: 'Amerika', production_year: '2004', drive: 'RR', power: '197', weight: '1288', length: '4267', worth: 'Fahrmission "The Pass"' } }
    ],
    dodge: [
        { name: 'Charger 440 R/T', src: 'sources/Cars/Dodge_Charger_1970_440_RT.mp4', data: { country: 'Amerika', production_year: '1970', drive: 'FR', power: '380', weight: '1650', length: '4000', worth: '75.500' } },
        { name: 'Charger Super Bee 426 Hemi', src: 'sources/Cars/Dodge_Charger_1971_Super_Bee_426_Hemi.mp4', data: { country: 'Amerika', production_year: '1971', drive: 'FR', power: '425', weight: '1841', length: '4000', worth: 'New York 200 Meilen' } },
        { name: 'RAM 1500 Laramie Hemi Quad Cab', src: 'sources/Cars/Dodge_RAM_2004_1500_Laramie_Hemi_Quad_Cab.mp4', data: { country: 'Amerika', production_year: '2004', drive: '4WD', power: '340', weight: '2390', length: '5784', worth: '37.930' } },
        { name: 'SRT-4', src: 'sources/Cars/Dodge_SRT-4_2003.mp4', data: { country: 'Amerika', production_year: '2003', drive: 'FF', power: '221', weight: '1349', length: '4000', worth: '20.640' } },
        { name: 'Viper GTS', src: 'sources/Cars/Dodge_Viper_1999_GTS.mp4', data: { country: 'Amerika', production_year: '1999', drive: 'FR', power: '456', weight: '1569', length: '4488', worth: '78.000' } },
        { name: 'Viper GTS-R Concept', src: 'sources/Cars/Dodge_Viper_2000_GTS-R_Concept.mp4', data: { country: 'Amerika', production_year: '2000', drive: 'FR', power: '505', weight: '1475', length: '4902', worth: 'Chrysler Crossfire Trophy' } },
        { name: 'Viper GTS-R Team Oreca', src: 'sources/Cars/Dodge_Viper_2000_GTS-R_Team_Oreca.mp4', data: { country: 'Amerika', production_year: '2000', drive: 'FR', power: '597', weight: '1150', length: '4548', worth: '1.000.000' } },
        { name: 'Viper SRT-10', src: 'sources/Cars/Dodge_Viper_2003_SRT-10.mp4', data: { country: 'Amerika', production_year: '2003', drive: 'FR', power: '500', weight: '1533', length: '4458', worth: '84.880 | 450 km/h' } }
    ],
    dome: [
        { name: 'Zero Concept', src: 'sources/Cars/Dome_0_1978.mp4', data: { country: 'Japan', production_year: '1978', drive: 'MR', power: '157', weight: '919', length: '4000', worth: 'Internationale A-Lizenz Gold' } }
    ],
    eagle: [
        { name: 'Talon ESI', src: 'sources/Cars/Eagle_Talon_1997_ESI.mp4', data: { country: 'Amerika', production_year: '1997', drive: 'FR', power: '138', weight: '1252', length: '4000', worth: '15.740' } }
    ],
    fiat: [
        { name: '500 F', src: 'sources/Cars/Fiat_500_1965_F.mp4', data: { country: 'Italien', production_year: '1965', drive: 'RR', power: '16', weight: '520', length: '2970', worth: '~7.000' } },
        { name: '500 L', src: 'sources/Cars/Fiat_500_1969_L.mp4', data: { country: 'Italien', production_year: '1969', drive: 'RR', power: '16', weight: '530', length: '2970', worth: '~6.000' } },
        { name: '500 R', src: 'sources/Cars/Fiat_500_1972_R.mp4', data: { country: 'Italien', production_year: '1972', drive: 'RR', power: '17', weight: '594', length: '3070', worth: '~6.000' } },
        { name: 'Barchetta Giovane Due', src: 'sources/Cars/Fiat_Barchetta_2000_Giovane_Due.mp4', data: { country: 'Italien', production_year: '2000', drive: 'FF', power: '128', weight: '1090', length: '3916', worth: '24.060' } },
        { name: 'Coupe Turbo Plus', src: 'sources/Cars/Fiat_Coupe_2000_Turbo_Plus.mp4', data: { country: 'Italien', production_year: '2000', drive: 'FF', power: '219', weight: '1310', length: '4250', worth: '48.110' } },
        { name: 'Panda Super i.E.', src: 'sources/Cars/Fiat_Panda_1990_Super_i.e..mp4', data: { country: 'Italien', production_year: '1990', drive: 'FF', power: '44', weight: '730', length: '3405', worth: '~5.100' } },
        { name: 'Punto HGT Abarth', src: 'sources/Cars/Fiat_Punto_2000_HGT_Abarth.mp4', data: { country: 'Italien', production_year: '2000', drive: 'FF', power: '128', weight: '1100', length: '3820', worth: '30.030' } }
    ],
    ford: [
        { name: 'Escort Rally Car', src: 'sources/Cars/Ford_Escort_1998_Rally_Car.mp4', data: { country: 'Amerika', production_year: '1998', drive: '4WD', power: '304', weight: '1230', length: '4221', worth: 'Tahiti - Normal' } },
        { name: 'Falcon XR8', src: 'sources/Cars/Ford_Falcon_2000_XR8.mp4', data: { country: 'Australien', production_year: '2000', drive: 'FR', power: '600', weight: '1349', length: '4970', worth: '450.000' } },
        { name: 'Focus Rally Car', src: 'sources/Cars/Ford_Focus_1999_Rally_Car.mp4', data: { country: 'Amerika', production_year: '1999', drive: '4WD', power: '304', weight: '1230', length: '4152', worth: '#7 Driving School' } },
        { name: 'Focus RS', src: 'sources/Cars/Ford_Focus_2002_RS.mp4', data: { country: 'Amerika', production_year: '2002', drive: 'FF', power: '216', weight: '1051', length: '4602', worth: '41.410' } },
        { name: 'Focus ST', src: 'sources/Cars/Ford_Focus_2003_ST_170.mp4', data: { country: 'Amerika', production_year: '2003', drive: 'FF', power: '170', weight: '1241', length: '4602', worth: '32.750' } },
        { name: 'GT40 Race Car', src: 'sources/Cars/Ford_GT_1969_40_Race_Car.mp4', data: { country: 'Amerika', production_year: '1969', drive: 'MR', power: '500', weight: '998', length: '4602', worth: 'Laguna Seca 200 Meilen' } },
        { name: 'GT Concept', src: 'sources/Cars/Ford_GT_2002.mp4', data: { country: 'Amerika', production_year: '2002', drive: 'MR', power: '507', weight: '1451', length: '4602', worth: 'Tsukuba - Schwer' } },
        { name: 'GT Concept LM Race Car', src: 'sources/Cars/Ford_GT_2002_LM_Race_Car.mp4', data: { country: 'Amerika', production_year: '2002', drive: 'MR', power: '592', weight: '1139', length: '4602', worth: 'Infineon Ausdauer-Rennen' } },
        { name: 'GT LM Race Car Spec II', src: 'sources/Cars/Ford_GT_2004_LM_Race_Car_Spec_II.mp4', data: { country: 'Amerika', production_year: '2004', drive: 'MR', power: '606', weight: '1130', length: '4613', worth: 'GT World Championship' } },
        { name: 'GT', src: 'sources/Cars/Ford_GT_2005.mp4', data: { country: 'Amerika', production_year: '2005', drive: 'MR', power: '558', weight: '1451', length: '4643', worth: '149.880' } },
        { name: 'Ka', src: 'sources/Cars/Ford_Ka_2001.mp4', data: { country: 'Amerika', production_year: '2001', drive: 'FF', power: '59', weight: '965', length: '3620', worth: '12.920' } },
        { name: 'Model T Tourer', src: 'sources/Cars/Ford_Model_T_1915_Tourer.mp4', data: { country: 'Amerika', production_year: '1915', drive: 'FR', power: '20', weight: '635', length: '4000', worth: 'Alle Lizenzen in Gold' } },
        { name: 'Mustang SVT Cobra R', src: 'sources/Cars/Ford_Mustang_2000_SVT_Cobra_R.mp4', data: { country: 'Amerika', production_year: '2000', drive: 'FR', power: '372', weight: '1628', length: '4000', worth: '~44.000' } },
        { name: 'Mustang GT', src: 'sources/Cars/Ford_Mustang_2005_GT.mp4', data: { country: 'Amerika', production_year: '2005', drive: 'FR', power: '294', weight: '1569', length: '4765', worth: '25.950' } },
        { name: 'RS 200', src: 'sources/Cars/Ford_RS_1984_200.mp4', data: { country: 'Amerika', production_year: '1984', drive: '4WD', power: '246', weight: '1179', length: '4152', worth: 'Grand Canyon - Leicht' } },
        { name: 'RS 200 Rally Car', src: 'sources/Cars/Ford_RS_1985_200_Rally_Car.mp4', data: { country: 'Amerika', production_year: '1985', drive: '4WD', power: '427', weight: '980', length: '4152', worth: 'Capri Rally - Schwer' } },
        { name: 'SVT F-150 Lightning', src: 'sources/Cars/Ford_SVT_2003_F-150_Lightning.mp4', data: { country: 'Amerika', production_year: '2003', drive: 'FR', power: '380', weight: '2132', length: '5283', worth: '35.050' } },
        { name: 'Taurus SHO', src: 'sources/Cars/Ford_Taurus_1998_SHO.mp4', data: { country: 'Amerika', production_year: '1998', drive: 'FF', power: '234', weight: '1509', length: '5039', worth: '~17.000' } }
    ],
    fpv: [
        { name: 'F6 Typhoon', src: 'sources/Cars/FPV_F6_2004_Typhoon.mp4', data: { country: 'Australien', production_year: '2004', drive: 'FR', power: '362', weight: '1776', length: '4954', worth: '46.740' } },
        { name: 'GT', src: 'sources/Cars/FPV_GT_2004.mp4', data: { country: 'Australien', production_year: '2004', drive: 'FR', power: '389', weight: '1826', length: '4954', worth: '48.640' } }
    ],
    gillet: [
        { name: 'Vertigo Race Car', src: 'sources/Cars/Gillet_Vertigo_2004_Race_Car.mp4', data: { country: 'Belgien', production_year: '2004', drive: 'FR', power: '900', weight: '780', length: '3980', worth: '1.000.000' } }
    ],
    ginetta: [
        { name: 'G4', src: 'sources/Cars/Ginetta_G4_1964.mp4', data: { country: 'Grossbritannien', production_year: '1964', drive: 'FR', power: '91', weight: '454', length: '3353', worth: 'Leichtgewicht K-Cup' } }
    ],
    hks: [
        { name: 'Genki Hyper Silvia', src: 'sources/Cars/HKS_Silvia_2004_Genki_Hyper_RS2.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '483', weight: '1130', length: '4000', worth: '200.000' } }
    ],
    holden: [
        { name: 'Commodore SS', src: 'sources/Cars/Holden_Commodore_2004_SS.mp4', data: { country: 'Australien', production_year: '2004', drive: 'FR', power: '327', weight: '1658', length: '4868', worth: '40.430' } },
        { name: 'Monaro CV8', src: 'sources/Cars/Holden_Monaro_2004_CV8.mp4', data: { country: 'Australien', production_year: '2004', drive: 'FR', power: '327', weight: '1658', length: '4868', worth: '47.960' } }
    ],
    hommell: [
        { name: 'Berlinette R/S Coupe', src: 'sources/Cars/Hommel_Berlinette_1999_RS_Coupe.mp4', data: { country: 'Frankreich', production_year: '1999', drive: 'MR', power: '167', weight: '950', length: '4120', worth: '47.360' } }
    ],
    honda: [
        { name: '1300 Coupe 9 S', src: 'sources/Cars/Honda_1300_1970_Coupe_9_S.mp4', data: { country: 'Japan', production_year: '1970', drive: 'FF', power: '107', weight: '900', length: '4140', worth: '~12.800' } },
        { name: 'Accord Coupe', src: 'sources/Cars/Honda_Accord_1988_Coupe.mp4', data: { country: 'Japan', production_year: '1988', drive: 'FF', power: '118', weight: '1219', length: '4565', worth: '~9.000' } },
        { name: 'Accord Euro R', src: 'sources/Cars/Honda_Accord_2000_Euro_R.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FF', power: '215', weight: '1330', length: '4680', worth: '~16.000' } },
        { name: 'Accord Euro R', src: 'sources/Cars/Honda_Accord_2002_Euro_R.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FF', power: '215', weight: '1390', length: '4680', worth: '25.300' } },
        { name: 'Accord Coupe', src: 'sources/Cars/Honda_Accord_2003_Coupe.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '239', weight: '1481', length: '4765', worth: '27.480' } },
        { name: 'Beat', src: 'sources/Cars/Honda_Beat_1991.mp4', data: { country: 'Japan', production_year: '1991', drive: 'MR', power: '63', weight: '760', length: '3295', worth: '~5.000' } },
        { name: 'Beat Version F', src: 'sources/Cars/Honda_Beat_1992_Version_F.mp4', data: { country: 'Japan', production_year: '1992', drive: 'MR', power: '63', weight: '760', length: '3295', worth: '~5.000' } },
        { name: 'Beat Version Z', src: 'sources/Cars/Honda_Beat_1993_Version_Z.mp4', data: { country: 'Japan', production_year: '1993', drive: 'MR', power: '63', weight: '760', length: '3295', worth: '~7.000' } },
        { name: 'City Turbo II', src: 'sources/Cars/Honda_City_1983_Turbo_II.mp4', data: { country: 'Japan', production_year: '1983', drive: 'FF', power: '108', weight: '735', length: '3380', worth: '~4.000' } },
        { name: 'Civic CX', src: 'sources/Cars/Honda_Civic_1979.mp4', data: { country: 'Japan', production_year: '1979', drive: 'FF', power: '79', weight: '780', length: '3870', worth: '9.570' } },
        { name: 'Civic 25i', src: 'sources/Cars/Honda_Civic_1983.mp4', data: { country: 'Japan', production_year: '1983', drive: 'FF', power: '98', weight: '815', length: '3810', worth: '~4.000' } },
        { name: 'Civic Motul Race Car', src: 'sources/Cars/Honda_Civic_1987_Motul_Race_Car.mp4', data: { country: 'Japan', production_year: '1987', drive: 'FF', power: '225', weight: '890', length: '4000', worth: 'Civic Race' } },
        { name: 'Civic SiR II', src: 'sources/Cars/Honda_Civic_1991_Sir_II.mp4', data: { country: 'Japan', production_year: '1991', drive: 'FF', power: '167', weight: '1040', length: '4069', worth: '~6.000' } },
        { name: 'Civic Type R', src: 'sources/Cars/Honda_Civic_1997_Type_R.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FF', power: '176', weight: '1050', length: '4180', worth: '~10.000' } },
        { name: 'Civic Gathers Race Car', src: 'sources/Cars/Honda_Civic_1998_Gathers_Race_Car.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FF', power: '185', weight: '930', length: '4180', worth: '450.000' } },
        { name: 'Civic Type R', src: 'sources/Cars/Honda_Civic_2001_Type_R.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FF', power: '197', weight: '1191', length: '4135', worth: '~15.000' } },
        { name: 'Civic Type R', src: 'sources/Cars/Honda_Civic_2004_Type_R.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FF', power: '212', weight: '1191', length: '4135', worth: '23.310' } },
        { name: 'CR-X Ballade Sports 1.5i', src: 'sources/Cars/Honda_CR-X_1983_1.5.mp4', data: { country: 'Japan', production_year: '1983', drive: 'FF', power: '108', weight: '815', length: '4000', worth: '~4.000' } },
        { name: 'CR-X SiR', src: 'sources/Cars/Honda_CR-X_1990_SIR.mp4', data: { country: 'Japan', production_year: '1990', drive: 'FF', power: '157', weight: '986', length: '4000', worth: '~5.000' } },
        { name: 'CR-X Del Sol', src: 'sources/Cars/Honda_CR-X_1992_Del_Sol.mp4', data: { country: 'Japan', production_year: '1992', drive: 'FF', power: '164', weight: '1100', length: '3995', worth: '~6.000' } },
        { name: 'Dualnote', src: 'sources/Cars/Honda_Dualnote_2001.mp4', data: { country: 'Japan', production_year: '2001', drive: '4WD', power: '395', weight: '1399', length: '4400', worth: 'Silber Internationale A-Lizenz' } },
        { name: 'Element', src: 'sources/Cars/Honda_Element_2003.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '157', weight: '1560', length: '4300', worth: '25.900' } },
        { name: 'HSC', src: 'sources/Cars/Honda_HSC_2003.mp4', data: { country: 'Japan', production_year: '2003', drive: 'MR', power: '330', weight: '1149', length: '4240', worth: 'Type-R Treffen' } },
        { name: 'Insight', src: 'sources/Cars/Honda_Insight_1999.mp4', data: { country: 'Japan', production_year: '1999', drive: 'FF', power: '82', weight: '820', length: '3940', worth: '21.000' } },
        { name: 'Integra Type R', src: 'sources/Cars/Honda_Integra_1995_Type_R.mp4', data: { country: 'Japan', production_year: '1995', drive: 'FF', power: '197', weight: '1059', length: '4380', worth: '~11.000' } },
        { name: 'Integra Type R Touring Car', src: 'sources/Cars/Honda_Integra_2002_Type_R_Touring_Car.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FF', power: '310', weight: '1050', length: '4385', worth: '450.000' } },
        { name: 'Integra Type R', src: 'sources/Cars/Honda_Integra_2003_Type_R.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '212', weight: '1170', length: '4380', worth: '25.900' } },
        { name: 'Jazz 1.4 DSi SE', src: 'sources/Cars/Honda_Jazz_2001_1.4_DSI_SE_Sport.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FF', power: '98', weight: '990', length: '3828', worth: '12.600' } },
        { name: 'Life Step Van', src: 'sources/Cars/Honda_Life_1972_Step_Van.mp4', data: { country: 'Japan', production_year: '1972', drive: 'FF', power: '28', weight: '606', length: '2995', worth: 'Japapnische Kompaktwagen-Meisterschaft' } },
        { name: 'N 360', src: 'sources/Cars/Honda_N_1967_360.mp4', data: { country: 'Japan', production_year: '1967', drive: 'FF', power: '30', weight: '474', length: '2995', worth: '~12.000' } },
        { name: 'NSX', src: 'sources/Cars/Honda_NSX_1990.mp4', data: { country: 'Japan', production_year: '1990', drive: 'MR', power: '270', weight: '1350', length: '4430', worth: '~28.000' } },
        { name: 'NSX Type R', src: 'sources/Cars/Honda_NSX_1992_R.mp4', data: { country: 'Japan', production_year: '1992', drive: 'MR', power: '284', weight: '1230', length: '4430', worth: '~42.000' } },
        { name: 'NSX Type S', src: 'sources/Cars/Honda_NSX_1997_S.mp4', data: { country: 'Japan', production_year: '1997', drive: 'MR', power: '276', weight: '1320', length: '4430', worth: '~48.000' } },
        { name: 'NSX Type S Zero', src: 'sources/Cars/Honda_NSX_1997_S_Zero.mp4', data: { country: 'Japan', production_year: '1997', drive: 'MR', power: '284', weight: '1270', length: '4430', worth: '~35.000' } },
        { name: 'NSX Arta', src: 'sources/Cars/Honda_NSX_2000_Arta.mp4', data: { country: 'Japan', production_year: '2000', drive: 'MR', power: '489', weight: '1150', length: '4430', worth: '1.350.000' } },
        { name: 'NSX Castrol', src: 'sources/Cars/Honda_NSX_2000_Castrol.mp4', data: { country: 'Japan', production_year: '2000', drive: 'MR', power: '489', weight: '1150', length: '4430', worth: '1.350.000' } },
        { name: 'NSX Raybrig', src: 'sources/Cars/Honda_NSX_2000_Raybrig.mp4', data: { country: 'Japan', production_year: '2000', drive: 'MR', power: '489', weight: '1150', length: '4430', worth: '1.350.000' } },
        { name: 'NSX', src: 'sources/Cars/Honda_NSX_2001.mp4', data: { country: 'Japan', production_year: '2001', drive: 'MR', power: '276', weight: '1340', length: '4430', worth: '92.070' } },
        { name: 'NSX Loctite', src: 'sources/Cars/Honda_NSX_2001_Loctite.mp4', data: { country: 'Japan', production_year: '2001', drive: 'MR', power: '492', weight: '1150', length: '4430', worth: '1.350.000' } },
        { name: 'NSX Mobil 1', src: 'sources/Cars/Honda_NSX_2001_Mobil_1.mp4', data: { country: 'Japan', production_year: '2001', drive: 'MR', power: '492', weight: '1150', length: '4430', worth: '1.350.000' } },
        { name: 'NSX Type R Concept', src: 'sources/Cars/Honda_NSX_2001_R_Concept.mp4', data: { country: 'Japan', production_year: '2001', drive: 'MR', power: '285', weight: '1269', length: '4430', worth: 'NA Meisterschaft' } },
        { name: 'NSX Type S', src: 'sources/Cars/Honda_NSX_2001_S.mp4', data: { country: 'Japan', production_year: '2001', drive: 'MR', power: '276', weight: '1320', length: '4430', worth: '103.570' } },
        { name: 'NSX Type R', src: 'sources/Cars/Honda_NSX_2002_R.mp4', data: { country: 'Japan', production_year: '2002', drive: 'MR', power: '295', weight: '1270', length: '4430', worth: '119.570' } },
        { name: 'NSX Type R Race Car', src: 'sources/Cars/Honda_NSX_2002_R_LM_Race_Car.mp4', data: { country: 'Japan', production_year: '2002', drive: 'MR', power: '519', weight: '1121', length: '4430', worth: '150 Meilen Super Speedway' } },
        { name: 'NSX Type R Road Car', src: 'sources/Cars/Honda_NSX_2002_R_LM_Road_Car.mp4', data: { country: 'Japan', production_year: '2002', drive: 'MR', power: '550', weight: '1229', length: '4430', worth: '8 Stunden Motegi' } },
        { name: 'NSX Takata', src: 'sources/Cars/Honda_NSX_2003_Takata.mp4', data: { country: 'Japan', production_year: '2003', drive: 'MR', power: '492', weight: '1170', length: '4430', worth: '1.350.000' } },
        { name: 'Odyssey', src: 'sources/Cars/Honda_Odyssey_2003.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '157', weight: '1701', length: '4765', worth: '28.650' } },
        { name: 'Prelude Si VTEC', src: 'sources/Cars/Honda_Prelude_1991_SI_VTEC.mp4', data: { country: 'Japan', production_year: '1991', drive: 'FF', power: '197', weight: '1280', length: '4440', worth: '~8.000' } },
        { name: 'Prelude SiR', src: 'sources/Cars/Honda_Prelude_1996_SIR.mp4', data: { country: 'Japan', production_year: '1996', drive: 'FF', power: '192', weight: '1261', length: '4520', worth: '~8.000' } },
        { name: 'Prelude Type S', src: 'sources/Cars/Honda_Prelude_1996_Type_S.mp4', data: { country: 'Japan', production_year: '1996', drive: 'FF', power: '216', weight: '1310', length: '4520', worth: '~13.000' } },
        { name: 'Prelude SiR S SPEC', src: 'sources/Cars/Honda_Prelude_1998_SIR_S_SPEC.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FF', power: '216', weight: '1270', length: '4520', worth: '~11.000' } },
        { name: 'S 500', src: 'sources/Cars/Honda_S500_1963.mp4', data: { country: 'Japan', production_year: '1963', drive: 'FR', power: '44', weight: '674', length: '3300', worth: '~20.000 | Gold Nationale B-Lizenz' } },
        { name: 'S 600', src: 'sources/Cars/Honda_S600_1964.mp4', data: { country: 'Japan', production_year: '1964', drive: 'FR', power: '56', weight: '714', length: '3300', worth: '~21.000' } },
        { name: 'S 800', src: 'sources/Cars/Honda_S800_1966.mp4', data: { country: 'Japan', production_year: '1966', drive: 'FR', power: '68', weight: '720', length: '3335', worth: '~20.000' } },
        { name: 'S 800 RSC Race Car', src: 'sources/Cars/Honda_S800_1968_RSC_Race_Car.mp4', data: { country: 'Japan', production_year: '1968', drive: 'FR', power: '100', weight: '660', length: '3355', worth: 'Kompaktwagen-Weltmeisterschaft' } },
        { name: 'S 2000', src: 'sources/Cars/Honda_S2000_1999.mp4', data: { country: 'Japan', production_year: '1999', drive: 'FR', power: '242', weight: '1240', length: '4135', worth: '~23.000' } },
        { name: 'S 2000 Type V', src: 'sources/Cars/Honda_S2000_2000_Type_V.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FR', power: '242', weight: '1260', length: '4135', worth: '~20.000' } },
        { name: 'S 2000 LM Race Car', src: 'sources/Cars/Honda_S2000_2001_LM_Race_Car.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '320', weight: '1050', length: '4285', worth: '450.000' } },
        { name: 'S 2000', src: 'sources/Cars/Honda_S2000_2003.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '241', weight: '1240', length: '4135', worth: '35.000' } },
        { name: 'S 2000 Type V', src: 'sources/Cars/Honda_S2000_2003_Type_V.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '242', weight: '1270', length: '4135', worth: '37.000' } },
        { name: 'Today G', src: 'sources/Cars/Honda_Today_1985_G.mp4', data: { country: 'Japan', production_year: '1985', drive: 'FF', power: '30', weight: '550', length: '3195', worth: '~2.000' } },
        { name: 'Z Act', src: 'sources/Cars/Honda_Z_1970_Act.mp4', data: { country: 'Japan', production_year: '1970', drive: 'FF', power: '29', weight: '595', length: '3125', worth: '~5.000' } }
    ],
    hpa: [
        { name: 'Stage II R32', src: 'sources/Cars/HPA_Stage_II_R32_2004.mp4', data: { country: 'Kanada', production_year: '2004', drive: '4WD', power: '552', weight: '1484', length: '4189', worth: '31.870' } }
    ],
    hyundai: [
        { name: 'Accent Rally Car', src: 'sources/Cars/Hyundai_Accent_2001_Rally_Car.mp4', data: { country: 'Südkorea', production_year: '2001', drive: '4WD', power: '295', weight: '1031', length: '4200', worth: '750.000' } },
        { name: 'Clix', src: 'sources/Cars/Hyundai_Clix_2001.mp4', data: { country: 'Südkorea', production_year: '2001', drive: '4WD', power: '305', weight: '1320', length: '3959', worth: 'Hyundai Sport Festival' } },
        { name: 'Coupe FX', src: 'sources/Cars/Hyundai_Coupe_2001.mp4', data: { country: 'Südkorea', production_year: '2001', drive: 'FF', power: '172', weight: '1341', length: '4395', worth: '33.020' } },
        { name: 'HCD6 Concept', src: 'sources/Cars/Hyundai_HCD6_2001.mp4', data: { country: 'Südkorea', production_year: '2001', drive: 'MR', power: '214', weight: '1500', length: '4039', worth: 'Yosemite-Rallye II - Leicht' } }
    ],
    infiniti: [
        { name: 'FX45 Concept', src: 'sources/Cars/Infiniti_FX45_2002_Concept.mp4', data: { country: 'Amerika', production_year: '2002', drive: '4WD', power: '340', weight: '1499', length: '4788', worth: 'Charmonix-Rally - Leicht' } },
        { name: 'G35', src: 'sources/Cars/Infiniti_G35_2003_Sedan.mp4', data: { country: 'Amerika', production_year: '2003', drive: 'FR', power: '268', weight: '1513', length: '4737', worth: '30.720' } }
    ],
    isuzu: [
        { name: 'Bellet 1600 GT-R', src: 'sources/Cars/Isuzu_Bellett_1969_1600_GT-R.mp4', data: { country: 'Japan', production_year: '1969', drive: 'FR', power: '118', weight: '970', length: '4015', worth: '~15.000' } },
        { name: '117 Coupe', src: 'sources/Cars/Isuzu_117_1968_Coupe.mp4', data: { country: 'Japan', production_year: '1968', drive: 'FR', power: '118', weight: '1050', length: '4280', worth: '~13.000 | Isuzu Sport Classics' } },
        { name: 'Piazza XE', src: 'sources/Cars/Isuzu_Piazza_1981_XE.mp4', data: { country: 'Japan', production_year: '1981', drive: 'FR', power: '133', weight: '1189', length: '4310', worth: '~9.000' } }
    ],
    jaguar: [
        { name: 'E-Type Coupe', src: 'sources/Cars/Jaguar_E-Type_1961_Coupe.mp4', data: { country: 'Grossbritannien', production_year: '1961', drive: 'FR', power: '264', weight: '1300', length: '4440', worth: 'Britische GT-Serie' } },
        { name: 'S-Type R', src: 'sources/Cars/Jaguar_S-Type_2002_R.mp4', data: { country: 'Grossbritannien', production_year: '2002', drive: 'FR', power: '389', weight: '1798', length: '4877', worth: '92.130' } },
        { name: 'XJ220', src: 'sources/Cars/Jaguar_XJ220_1992.mp4', data: { country: 'Grossbritannien', production_year: '1992', drive: 'MR', power: '515', weight: '1372', length: '4860', worth: '749.140' } },
        { name: 'XJ220 LM Race Car', src: 'sources/Cars/Jaguar_XJ220_2001_LM_Race_Car.mp4', data: { country: 'Grossbritannien', production_year: '2001', drive: 'MR', power: '542', weight: '1375', length: '4860', worth: 'Paneuropäische Meisterschaft' } },
        { name: 'XJR-9 Race Car', src: 'sources/Cars/Jaguar_XJR_1988_9_Race_Car.mp4', data: { country: 'Grossbritannien', production_year: '1988', drive: 'MR', power: '749', weight: '894', length: '4800', worth: '3.500.000 | 50% Spielfortschritt' } },
        { name: 'XKR', src: 'sources/Cars/Jaguar_XKR_1999_Coupe.mp4', data: { country: 'Grossbritannien', production_year: '1999', drive: 'FR', power: '369', weight: '1640', length: '4760', worth: '~64.000' } },
        { name: 'XKR R', src: 'sources/Cars/Jaguar_XKR_2002_R-Performance.mp4', data: { country: 'Grossbritannien', production_year: '2002', drive: 'FR', power: '400', weight: '1735', length: '4760', worth: '118.450' } }
    ],
    jay_leno: [
        { name: 'Tank Car', src: 'sources/Cars/Jay_Leno_Tank_Car_2003.mp4', data: { country: 'Amerika', production_year: '2003', drive: 'FR', power: '810', weight: '4309', length: '6400', worth: 'Fahrmissionen 11-20' } }
    ],
    jensen_healey: [
        { name: 'Interceptor III', src: 'sources/Cars/Jensen_Interceptor_1974_III.mp4', data: { country: 'Grossbritannien', production_year: '1974', drive: 'FR', power: '390', weight: '1814', length: '4724', worth: '~30.000 | Gold Internationale B-Lizenz' } }
    ],
    lancia: [
        { name: 'Lancia Delta HF Integrale', src: 'sources/Cars/Lancia_Delta_HF_1991_Integrale_Evoluzione.mp4', data: { country: 'Italien', production_year: '1991', drive: '4WD', power: '213', weight: '1350', length: '3900', worth: '~23.000' } },
        { name: 'Lancia Delta HF Integrale Rally Car', src: 'sources/Cars/Lancia_Delta_HF_1992_Integrale_Rally_Car.mp4', data: { country: 'Italien', production_year: '1992', drive: '4WD', power: '300', weight: '1120', length: '3900', worth: 'Umbria Rally Mittel' } },
        { name: 'Delta S4 Rally Car', src: 'sources/Cars/Lancia_Delta_S4_1985_Rally_Car.mp4', data: { country: 'Italien', production_year: '1985', drive: '4WD', power: '456', weight: '890', length: '4000', worth: 'Umbria Rally Schwer' } },
        { name: 'Stratos', src: 'sources/Cars/Lancia_Stratos_1973.mp4', data: { country: 'Italien', production_year: '1973', drive: 'MR', power: '185', weight: '980', length: '3710', worth: '133.970' } },
        { name: 'Stratos Rally Car', src: 'sources/Cars/Lancia_Stratos_1977_Rally_Car.mp4', data: { country: 'Italien', production_year: '1977', drive: 'MR', power: '277', weight: '880', length: '4000', worth: 'Charmonix Rally Schwer' } }
    ],
    land_rover: [
        { name: 'Range Stormer Concept', src: 'sources/Cars/Land_Rover_Range_Stormer_2004_Concept.mp4', data: { country: 'Grossbritannien', production_year: '2004', drive: '4WD', power: '334', weight: '2500', length: '4725', worth: 'Yosemite Rally I Leicht' } }
    ],
    lexus: [
        { name: 'GS 300', src: 'sources/Cars/Lexus_GS_300_1991.mp4', data: { country: 'Japan', production_year: '1991', drive: 'FR', power: '276', weight: '1679', length: '4865', worth: '~16.000' } },
        { name: 'GS 300', src: 'sources/Cars/Lexus_GS_300_2000.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FR', power: '276', weight: '1679', length: '4805', worth: '44.200' } },
        { name: 'GS 300 Vertex Edition', src: 'sources/Cars/Lexus_GS_300_2000_Vertex_Edition.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FR', power: '276', weight: '1679', length: '4805', worth: '45.500' } },
        { name: 'IS 200', src: 'sources/Cars/Lexus_IS_200_1998.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FR', power: '152', weight: '1310', length: '4400', worth: '20.700' } },
        { name: 'IS 200 J', src: 'sources/Cars/Lexus_IS_200_1998_J.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FR', power: '207', weight: '1340', length: '4000', worth: '24.000' } },
        { name: 'IS 300', src: 'sources/Cars/Lexus_IS_300_2001_Sport_Cross.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '217', weight: '1471', length: '4415', worth: '27.600' } },
        { name: 'SC 300', src: 'sources/Cars/Lexus_SC_300_1997.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FR', power: '276', weight: '1560', length: '4900', worth: '~17.000' } },
        { name: 'SC 430', src: 'sources/Cars/Lexus_SC_430_2001.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '276', weight: '1730', length: '4516', worth: '60.000' } }
    ],
    lister: [
        { name: 'Storm V12 Race Car', src: 'sources/Cars/Lister_Storm_V12_1999_Race_Car.mp4', data: { country: 'Grossbritannien', production_year: '1999', drive: 'FR', power: '602', weight: '1438', length: '4547', worth: '1000 km Suzuka' } }
    ],
    lotus: [
        { name: 'Carlton', src: 'sources/Cars/Lotus_Carlton_1990.mp4', data: { country: 'Grossbritannien', production_year: '1990', drive: 'FR', power: '372', weight: '1654', length: '4763', worth: '~29.000' } },
        { name: 'Elan S1', src: 'sources/Cars/Lotus_Elan_1962_S1.mp4', data: { country: 'Grossbritannien', production_year: '1962', drive: 'FR', power: '105', weight: '639', length: '3683', worth: 'Lotus Classics' } },
        { name: 'Elise Sport 190', src: 'sources/Cars/Lotus_Elise_1998_Sport_190.mp4', data: { country: 'Grossbritannien', production_year: '1998', drive: 'MR', power: '181', weight: '670', length: '3726', worth: '~42.000' } },
        { name: 'Motor Sport Elise', src: 'sources/Cars/Lotus_Elise_1999_Motor_Sport.mp4', data: { country: 'Grossbritannien', production_year: '1999', drive: 'MR', power: '204', weight: '700', length: '4000', worth: '97.180' } },
        { name: 'Elise', src: 'sources/Cars/Lotus_Elise_2000.mp4', data: { country: 'Grossbritannien', production_year: '2000', drive: 'MR', power: '118', weight: '714', length: '3785', worth: '41.060' } },
        { name: 'Elise 111S', src: 'sources/Cars/Lotus_Elise_2003_111S.mp4', data: { country: 'Grossbritannien', production_year: '2003', drive: 'MR', power: '155', weight: '806', length: '3785', worth: '51.680' } },
        { name: 'Elise 111R', src: 'sources/Cars/Lotus_Elise_2004_111R.mp4', data: { country: 'Grossbritannien', production_year: '2004', drive: 'MR', power: '180', weight: '860', length: '3785', worth: '54.410' } },
        { name: 'Esprit Turbo HC', src: 'sources/Cars/Lotus_Esprit_1987_Turbo_HC.mp4', data: { country: 'Grossbritannien', production_year: '1987', drive: 'MR', power: '208', weight: '1145', length: '4191', worth: 'MR Challenge' } },
        { name: 'Esprit V8 GT', src: 'sources/Cars/Lotus_Esprit_1998_V8_GT.mp4', data: { country: 'Grossbritannien', production_year: '1998', drive: 'MR', power: '342', weight: '1324', length: '4369', worth: '~63.000' } },
        { name: 'Esprit V8 SE', src: 'sources/Cars/Lotus_Esprit_1998_V8_SE.mp4', data: { country: 'Grossbritannien', production_year: '1998', drive: 'MR', power: '342', weight: '1380', length: '4369', worth: '~66.000' } },
        { name: 'Esprit Sport 350', src: 'sources/Cars/Lotus_Esprit_2000_Sport_350.mp4', data: { country: 'Grossbritannien', production_year: '2000', drive: 'MR', power: '358', weight: '1300', length: '4369', worth: '126.240' } },
        { name: 'Esprit V8', src: 'sources/Cars/Lotus_Esprit_2002_V8.mp4', data: { country: 'Grossbritannien', production_year: '2002', drive: 'MR', power: '342', weight: '1379', length: '4369', worth: '116.520' } },
        { name: 'Europa Special', src: 'sources/Cars/Lotus_Europa_Special_1971.mp4', data: { country: 'Grossbritannien', production_year: '1971', drive: 'MR', power: '126', weight: '730', length: '4064', worth: 'Britische Leichtgewicht-Serie' } }
    ],
    marcos: [
        { name: 'Mini GT', src: 'sources/Cars/Marcos_Mini_1970_GT.mp4', data: { country: 'Grossbritannien', production_year: '1970', drive: 'FF', power: '74', weight: '559', length: '3470', worth: 'Mini Sports Meeting' } }
    ],
    mazda: [
        { name: '110 S L10 A', src: 'sources/Cars/Mazda_110_1967_S_L10A.mp4', data: { country: 'Japan', production_year: '1967', drive: 'FR', power: '105', weight: '940', length: '4140', worth: 'Club "RE"' } },
        { name: '110 S L10 B', src: 'sources/Cars/Mazda_110_1968_S_L10B.mp4', data: { country: 'Japan', production_year: '1968', drive: 'FR', power: '122', weight: '959', length: '4140', worth: '~25.000' } },
        { name: '2', src: 'sources/Cars/Mazda_2_2003.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '108', weight: '1080', length: '3925', worth: '14.500' } },
        { name: '323 F', src: 'sources/Cars/Mazda_323_1993_F.mp4', data: { country: 'Japan', production_year: '1993', drive: 'FF', power: '167', weight: '1241', length: '4245', worth: '~7.000' } },
        { name: '6 Concept', src: 'sources/Cars/Mazda_6_2001_Concept.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FF', power: '172', weight: '1300', length: '4670', worth: 'FF Herausforderung' } },
        { name: '6 Touring Car', src: 'sources/Cars/Mazda_6_2002_Touring_Car.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '295', weight: '1070', length: '4670', worth: 'Tsukuba Regen-Rennen Normal' } },
        { name: '6', src: 'sources/Cars/Mazda_6_2003.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '172', weight: '1390', length: '4670', worth: '23.500' } },
        { name: '6 MPS', src: 'sources/Cars/Mazda_6_2005_MPS.mp4', data: { country: 'Japan', production_year: '2005', drive: '4WD', power: '259', weight: '1500', length: '4690', worth: 'Clubman Cup' } },
        { name: '787 B Race Car', src: 'sources/Cars/Mazda_787_1991_B_Race_Car.mp4', data: { country: 'Japan', production_year: '1991', drive: 'MR', power: '803', weight: '830', length: '4782', worth: '3.500.000 | ~1.300.000' } },
        { name: '787 B Race Car Black Edition', src: 'sources/Cars/Mazda_787_1991_B_Race_Car_Black_Edition.mp4', data: { country: 'Japan', production_year: '1991', drive: 'MR', power: '803', weight: '830', length: '4782', worth: '~3.500.000' } },
        { name: 'Autozam AZ-1', src: 'sources/Cars/Mazda_Autozam_1992_AZ-1.mp4', data: { country: 'Japan', production_year: '1992', drive: 'MR', power: '61', weight: '720', length: '3295', worth: '~8.000' } },
        { name: 'Carol 360 Deluxe', src: 'sources/Cars/Mazda_Carol_1962_360_Deluxe.mp4', data: { country: 'Japan', production_year: '1962', drive: 'RR', power: '19', weight: '560', length: '2990', worth: '~13.000' } },
        { name: 'Demio', src: 'sources/Cars/Mazda_Demio_1999.mp4', data: { country: 'Japan', production_year: '1999', drive: 'FF', power: '98', weight: '960', length: '3800', worth: '~8.000' } },
        { name: 'Familia Sport 20', src: 'sources/Cars/Mazda_Familia_2002_Sport_20.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FF', power: '167', weight: '1170', length: '4380', worth: '18.980' } },
        { name: 'Kusabi', src: 'sources/Cars/Mazda_Kusabi_2003.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '148', weight: '900', length: '3800', worth: 'Silber Nationale B-Lizenz' } },
        { name: 'MX-Crossport Concept', src: 'sources/Cars/Mazda_MX_Crossport_2005_Concept.mp4', data: { country: 'Japan', production_year: '2005', drive: '4WD', power: '260', weight: '1600', length: '4630', worth: 'NR-A Roadster Cup' } },
        { name: 'MX-5', src: 'sources/Cars/Mazda_MX-5_1989.mp4', data: { country: 'Japan', production_year: '1989', drive: 'FR', power: '117', weight: '940', length: '3970', worth: '~9.000' } },
        { name: 'MX-5 J-Limited I', src: 'sources/Cars/Mazda_MX-5_1991_J-Limited_I.mp4', data: { country: 'Japan', production_year: '1991', drive: 'FR', power: '120', weight: '950', length: '3970', worth: '~9.000' } },
        { name: 'MX-5 J-Limited II', src: 'sources/Cars/Mazda_MX-5_1993_J-Limited_II.mp4', data: { country: 'Japan', production_year: '1993', drive: 'FR', power: '130', weight: '990', length: '3950', worth: '~7.000' } },
        { name: 'MX-5 V-Special II', src: 'sources/Cars/Mazda_MX-5_1993_V-Special_Type_II.mp4', data: { country: 'Japan', production_year: '1993', drive: 'FR', power: '130', weight: '1000', length: '3950', worth: '~9.000' } },
        { name: 'MX-5 S-Special I', src: 'sources/Cars/Mazda_MX-5_1995_S-Special_Type_I.mp4', data: { country: 'Japan', production_year: '1995', drive: 'FR', power: '130', weight: '990', length: '3950', worth: '~10.000' } },
        { name: 'MX-5 VR-Limited', src: 'sources/Cars/Mazda_MX-5_1995_VR-Limited.mp4', data: { country: 'Japan', production_year: '1995', drive: 'FR', power: '130', weight: '990', length: '3950', worth: '~10.000' } },
        { name: 'MX-5 SR-Limited', src: 'sources/Cars/Mazda_MX-5_1997_SR-Limited.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FR', power: '130', weight: '1000', length: '3950', worth: '~12.000' } },
        { name: 'MX-5 1.8 RS', src: 'sources/Cars/Mazda_MX-5_1998_1.8_RS.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FR', power: '142', weight: '1030', length: '3955', worth: '~12.000' } },
        { name: 'MX-5 1800 RS', src: 'sources/Cars/Mazda_MX-5_2000_1800_RS.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FR', power: '160', weight: '1070', length: '3955', worth: '~12.000' } },
        { name: 'MX-5 1800 RS', src: 'sources/Cars/Mazda_MX-5_2004_1800_RS.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '158', weight: '1080', length: '3955', worth: '23.500' } },
        { name: 'MX-5', src: 'sources/Cars/Mazda_MX-5_2005.mp4', data: { country: 'Japan', production_year: '2005', drive: 'FR', power: '170', weight: '1123', length: '4000', worth: 'Demoversion' } },
        { name: 'RX-7 GT-Limited', src: 'sources/Cars/Mazda_RX-7_1985_GT-Limited.mp4', data: { country: 'Japan', production_year: '1985', drive: 'FR', power: '182', weight: '1280', length: '4290', worth: '~6.000' } },
        { name: 'RX-7 GT-X', src: 'sources/Cars/Mazda_RX-7_1990_GT-X.mp4', data: { country: 'Japan', production_year: '1990', drive: 'FR', power: '202', weight: '1251', length: '4335', worth: '~8.000' } },
        { name: 'RX-7 Infini III', src: 'sources/Cars/Mazda_RX-7_1990_Infini_III.mp4', data: { country: 'Japan', production_year: '1990', drive: 'FR', power: '212', weight: '1230', length: '4335', worth: '~10.000' } },
        { name: 'RX-7 Type R', src: 'sources/Cars/Mazda_RX-7_1991_Type_R.mp4', data: { country: 'Japan', production_year: '1991', drive: 'FR', power: '251', weight: '1260', length: '4280', worth: '~14.000' } },
        { name: 'RX-7 Type RZ', src: 'sources/Cars/Mazda_RX-7_1992_Type_RZ.mp4', data: { country: 'Japan', production_year: '1992', drive: 'FR', power: '251', weight: '1230', length: '4280', worth: '~14.000' } },
        { name: 'RX-7 Type R-S', src: 'sources/Cars/Mazda_RX-7_1995_Type_R-S.mp4', data: { country: 'Japan', production_year: '1995', drive: 'FR', power: '251', weight: '1260', length: '4280', worth: '~19.000' } },
        { name: 'RX-7 Type RS', src: 'sources/Cars/Mazda_RX-7_1996_Type_RS.mp4', data: { country: 'Japan', production_year: '1996', drive: 'FR', power: '261', weight: '1280', length: '4280', worth: '~18.000' } },
        { name: 'RX-7 Type RS-R', src: 'sources/Cars/Mazda_RX-7_1997_Type_RS-R.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FR', power: '259', weight: '1280', length: '4285', worth: '~18.000' } },
        { name: 'RX-7 LM Race Car', src: 'sources/Cars/Mazda_RX-7_2001_LM_Race_Car.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '508', weight: '1080', length: '4000', worth: '4 Stunden Roadster Langstrecke' } },
        { name: 'RX-7 Type R Bathurst R', src: 'sources/Cars/Mazda_RX-7_2001_Type_R_Bathurst_R.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '276', weight: '1260', length: '4285', worth: '~25.000' } },
        { name: 'RX-7 Spirit R Type A', src: 'sources/Cars/Mazda_RX-7_2002_Spirit_R_Type_A.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FR', power: '292', weight: '1270', length: '4285', worth: '39.980' } },
        { name: 'RX-7 BP Falken', src: 'sources/Cars/Mazda_RX-7_2003_BP_Falken.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '410', weight: '1229', length: '4335', worth: '200.000' } },
        { name: 'RX-8 Concept', src: 'sources/Cars/Mazda_RX-8_2001_Concept_I.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '247', weight: '1200', length: '4326', worth: 'Tsukuba Regen-Rennen Leicht' } },
        { name: 'RX-8 Concept LM Race Car', src: 'sources/Cars/Mazda_RX-8_2001_Concept_LM_Race_Car.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '493', weight: '1100', length: '4000', worth: 'RX-8 Cup' } },
        { name: 'RX-8', src: 'sources/Cars/Mazda_RX-8_2003.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '207', weight: '1310', length: '4425', worth: '24.000' } },
        { name: 'RX-8 Type E', src: 'sources/Cars/Mazda_RX-8_2003_Type_E.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '207', weight: '1330', length: '4425', worth: '27.500' } },
        { name: 'RX-8 Type S', src: 'sources/Cars/Mazda_RX-8_2003_Type_S.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '246', weight: '1310', length: '4425', worth: '27.500' } }
    ],
    mercedes_benz: [
        { name: 'A 160 Avantgarde', src: 'sources/Cars/Mercedes-Benz_A_1998_160_Avantgarde.mp4', data: { country: 'Deutschland', production_year: '1998', drive: 'FF', power: '100', weight: '1114', length: '3575', worth: '~16.000' } },
        { name: 'C9 Sauber Race Car', src: 'sources/Cars/Mercedes-Benz_C_1989_9_Race_Car.mp4', data: { country: 'Deutschland', production_year: '1989', drive: 'MR', power: '710', weight: '893', length: '4700', worth: 'Formula GT Weltmeisterschaft | 300 km Grand Valley' } },
        { name: 'CL 600', src: 'sources/Cars/Mercedes-Benz_CL_2000_600.mp4', data: { country: 'Deutschland', production_year: '2000', drive: 'FR', power: '362', weight: '1955', length: '4000', worth: '177.850' } },
        { name: 'CLK GTR Race Car', src: 'sources/Cars/Mercedes-Benz_CLK_1998_GTR_Race_Car.mp4', data: { country: 'Deutschland', production_year: '1998', drive: 'MR', power: '599', weight: '939', length: '4900', worth: 'Deutsche Tourenwagen Meisterschaft' } },
        { name: 'CLK 55 AMG', src: 'sources/Cars/Mercedes-Benz_CLK_2000_55.mp4', data: { country: 'Deutschland', production_year: '2000', drive: 'FR', power: '347', weight: '1620', length: '4000', worth: '147.770' } },
        { name: 'CLK DTM Touring Car', src: 'sources/Cars/Mercedes-Benz_CLK_2000_Touring_Car.mp4', data: { country: 'Deutschland', production_year: '2000', drive: 'FR', power: '444', weight: '1000', length: '4655', worth: 'Legende der Silberpfeile' } },
        { name: 'E 190 2.5 Evolution II', src: 'sources/Cars/Mercedes-Benz_E_190_1991_2.5_16_Evolution_II.mp4', data: { country: 'Deutschland', production_year: '1991', drive: 'FR', power: '231', weight: '1340', length: '4544', worth: '67.910' } },
        { name: 'E 190 2.5 Evolution II Touring Car', src: 'sources/Cars/Mercedes-Benz_E_190_1992_2.5_16_Evolution_II_Touring_Car.mp4', data: { country: 'Deutschland', production_year: '1992', drive: 'FR', power: '382', weight: '979', length: '4544', worth: 'Schwarzwald Liga B' } },
        { name: 'E 55 AMG', src: 'sources/Cars/Mercedes-Benz_E_2002_55.mp4', data: { country: 'Deutschland', production_year: '2002', drive: 'FR', power: '469', weight: '1910', length: '4834', worth: '105.330' } },
        { name: 'Motor Carriage', src: 'sources/Cars/Mercedes-Benz_Motor_Carriage_1886.mp4', data: { country: 'Deutschland', production_year: '1886', drive: 'MR', power: '1', weight: '290', length: '2530', worth: 'Welt-Klassik-Meisterschaft' } },
        { name: 'Motor Wagen', src: 'sources/Cars/Mercedes-Benz_Motor_Wagen_1886.mp4', data: { country: 'Deutschland', production_year: '1886', drive: 'RR', power: '1', weight: '265', length: '4000', worth: 'Europa-Klassik-Meisterschaft' } },
        { name: 'SL 300 Coupe', src: 'sources/Cars/Mercedes-Benz_SL_1954_300_Coupe.mp4', data: { country: 'Deutschland', production_year: '1954', drive: 'FR', power: '212', weight: '1295', length: '4520', worth: 'SL Herausforderung' } },
        { name: 'SL 500', src: 'sources/Cars/Mercedes-Benz_SL_1998_500.mp4', data: { country: 'Deutschland', production_year: '1998', drive: 'FR', power: '302', weight: '1799', length: '4500', worth: '~110.000' } },
        { name: 'SL 600', src: 'sources/Cars/Mercedes-Benz_SL_1998_600.mp4', data: { country: 'Deutschland', production_year: '1998', drive: 'FR', power: '389', weight: '2029', length: '4499', worth: '~136.000' } },
        { name: 'SL 500', src: 'sources/Cars/Mercedes-Benz_SL_2002_500.mp4', data: { country: 'Deutschland', production_year: '2002', drive: 'FR', power: '302', weight: '1839', length: '4535', worth: '127.620' } },
        { name: 'SL 55 AMG', src: 'sources/Cars/Mercedes-Benz_SL_2002_550.mp4', data: { country: 'Deutschland', production_year: '2002', drive: 'FR', power: '493', weight: '1970', length: '4535', worth: '168.120' } },
        { name: 'SL 600', src: 'sources/Cars/Mercedes-Benz_SL_2004_600.mp4', data: { country: 'Deutschland', production_year: '2004', drive: 'FR', power: '493', weight: '2025', length: '4535', worth: '177.700' } },
        { name: 'SL 65 AMG', src: 'sources/Cars/Mercedes-Benz_SL_2004_650.mp4', data: { country: 'Deutschland', production_year: '2004', drive: 'FR', power: '604', weight: '2028', length: '4535', worth: '190.700' } },
        { name: 'SLK 230 Kompressor', src: 'sources/Cars/Mercedes-Benz_SLK_1998_230_Kompressor.mp4', data: { country: 'Deutschland', production_year: '1998', drive: 'FR', power: '195', weight: '1325', length: '3995', worth: '~27.000' } },
        { name: 'SLR McLaren', src: 'sources/Cars/Mercedes-Benz_SLR_2003_McLaren.mp4', data: { country: 'Deutschland', production_year: '2003', drive: 'FR', power: '617', weight: '1768', length: '4656', worth: '610.000' } }
    ],
    mercury: [
        { name: 'Cougar XR-7', src: 'sources/Cars/Mercury_Cougar_1967_XR-7.mp4', data: { country: 'Amerika', production_year: '1976', drive: 'FR', power: '325', weight: '1598', length: '4824', worth: '~30.000 | Bronze S-Lizenz' } }
    ],
    mg: [
        { name: 'MGF', src: 'sources/Cars/MG_MGF_1997.mp4', data: { country: 'Grossbritannien', production_year: '1997', drive: 'MR', power: '142', weight: '1070', length: '3909', worth: '~21.000 | MG-Festival' } },
        { name: 'TF 160', src: 'sources/Cars/MG_TF_2003_160.mp4', data: { country: 'Grossbritannien', production_year: '2003', drive: 'MR', power: '158', weight: '1150', length: '3962', worth: '38.860' } }
    ],
    mines: [
        { name: 'Lancer Evo 6', src: 'sources/Cars/Mines_Lancer_2000_Evo_6.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '400', weight: '1210', length: '4350', worth: '150.000' } },
        { name: 'Skyline GT-R N1 V-Spec', src: 'sources/Cars/Mines_Skyline_2000_GT-R_N1_V-Spec.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '600', weight: '1540', length: '4600', worth: '200.000' } }
    ],
    mini: [
        { name: 'Mini One', src: 'sources/Cars/Mini_One_2002.mp4', data: { country: 'Grossbritannien', production_year: '2002', drive: 'FF', power: '89', weight: '1125', length: '3626', worth: '19.620' } },
        { name: 'Mini One Cooper', src: 'sources/Cars/Mini_One_2002_Cooper.mp4', data: { country: 'Grossbritannien', production_year: '2002', drive: 'FF', power: '108', weight: '1115', length: '3626', worth: '22.190' } },
        { name: 'Mini One Cooper S', src: 'sources/Cars/Mini_One_2002_Cooper_S.mp4', data: { country: 'Grossbritannien', production_year: '2002', drive: 'FF', power: '160', weight: '1120', length: '3626', worth: '26.760' } }
    ],
    mitsubishi: [
        { name: '3000GT MR', src: 'sources/Cars/Mitsubishi_3000GT_1995_MR.mp4', data: { country: 'Japan', production_year: '1995', drive: '4WD', power: '295', weight: '1680', length: '4600', worth: '~20.000' } },
        { name: '3000GT SR', src: 'sources/Cars/Mitsubishi_3000GT_1995_SR.mp4', data: { country: 'Japan', production_year: '1995', drive: '4WD', power: '221', weight: '1610', length: '4575', worth: '~15.000' } },
        { name: '3000GT VR-4', src: 'sources/Cars/Mitsubishi_3000GT_1995_VR-4.mp4', data: { country: 'Japan', production_year: '1995', drive: '4WD', power: '310', weight: '1710', length: '4600', worth: '~15.000' } },
        { name: 'Airtrek Turbo-R', src: 'sources/Cars/Mitsubishi_Airtrek_2002_Turbo-R.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '236', weight: '1520', length: '4465', worth: '22.950' } },
        { name: 'Colt 1.5 Sport X', src: 'sources/Cars/Mitsubishi_Colt_2002_1.5_Sport_X_Version.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FF', power: '97', weight: '1030', length: '3870', worth: '14.950' } },
        { name: 'CZ-3 Tarmac', src: 'sources/Cars/Mitsubishi_CZ-3_2001_Tarmac.mp4', data: { country: 'Japan', production_year: '2001', drive: '4WD', power: '218', weight: '1200', length: '4000', worth: 'Schweizer Alpen Einfach' } },
        { name: 'CZ-3 Tarmac Rally Car', src: 'sources/Cars/Mitsubishi_CZ-3_2002_Tarmac_Rally_Car.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '335', weight: '1200', length: '4000', worth: 'Grand Canyon Normal' } },
        { name: 'Eclipse GT', src: 'sources/Cars/Mitsubishi_Eclipse_1995_GT.mp4', data: { country: 'Japan', production_year: '1995', drive: 'FF', power: '210', weight: '1330', length: '4370', worth: '~7.000' } },
        { name: 'Eclipse GTS Spyder', src: 'sources/Cars/Mitsubishi_Eclipse_2003_GTS_Spyder.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '210', weight: '1510', length: '4455', worth: '26.780' } },
        { name: 'Eclipse GT', src: 'sources/Cars/Mitsubishi_Eclipse_2006_GT.mp4', data: { country: 'Japan', production_year: '2006', drive: 'FF', power: '263', weight: '1575', length: '4564', worth: '25.000' } },
        { name: 'FTO GPR', src: 'sources/Cars/Mitsubishi_FTO_1997_GPR.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FF', power: '197', weight: '1150', length: '4365', worth: '~14.000' } },
        { name: 'Galant GTO MR', src: 'sources/Cars/Mitsubishi_Galant_1940_GTO_MR.mp4', data: { country: 'Japan', production_year: '1970', drive: 'FR', power: '118', weight: '980', length: '4080', worth: '21.800 | ~7.000' } },
        { name: 'Galant 2.0 DOHC Turbo VR-4', src: 'sources/Cars/Mitsubishi_Galant_1989_2.0_DOHC_Turbo_VR-4.mp4', data: { country: 'Japan', production_year: '1989', drive: '4WD', power: '202', weight: '1340', length: '4560', worth: '~9.000' } },
        { name: 'i Concept', src: 'sources/Cars/Mitsubishi_i_2003_Concept.mp4', data: { country: 'Japan', production_year: '2003', drive: 'MR', power: '67', weight: '790', length: '3516', worth: 'Mirage Cup' } },
        { name: 'Lancer 1600 GSR', src: 'sources/Cars/Mitsubishi_Lancer_1973_1600_GSR.mp4', data: { country: 'Japan', production_year: '1973', drive: 'FR', power: '108', weight: '825', length: '4000', worth: '14.200' } },
        { name: 'Lancer 1600 GSR Rally Car', src: 'sources/Cars/Mitsubishi_Lancer_1974_1600_GSR_Rally_Car.mp4', data: { country: 'Japan', production_year: '1974', drive: 'FR', power: '160', weight: '825', length: '3965', worth: 'Evolution Meeting' } },
        { name: 'Lancer EX 1800 GSR IC Turbo', src: 'sources/Cars/Mitsubishi_Lancer_1983_EX_1800_GSR_IC_Turbo.mp4', data: { country: 'Japan', production_year: '1983', drive: 'FR', power: '152', weight: '1085', length: '4000', worth: '~9.000' } },
        { name: 'Lancer Evolution I GSR', src: 'sources/Cars/Mitsubishi_Lancer_1992_Evolution_1_GSR.mp4', data: { country: 'Japan', production_year: '1992', drive: '4WD', power: '238', weight: '1240', length: '4310', worth: '~12.000' } },
        { name: 'Lancer Evolution II GSR', src: 'sources/Cars/Mitsubishi_Lancer_1994_Evolution_2_GSR.mp4', data: { country: 'Japan', production_year: '1994', drive: '4WD', power: '254', weight: '1250', length: '4310', worth: '~14.000' } },
        { name: 'Lancer Evolution III', src: 'sources/Cars/Mitsubishi_Lancer_1995_Evolution_3_GSR.mp4', data: { country: 'Japan', production_year: '1995', drive: '4WD', power: '264', weight: '1260', length: '4310', worth: '~11.000' } },
        { name: 'Lancer Evolution IV GSR', src: 'sources/Cars/Mitsubishi_Lancer_1996_Evolution_4_GSR.mp4', data: { country: 'Japan', production_year: '1996', drive: '4WD', power: '273', weight: '1350', length: '4330', worth: '~11.000' } },
        { name: 'Lancer Evolution IV Rally Car', src: 'sources/Cars/Mitsubishi_Lancer_1997_Evolution_4_Rally_Car.mp4', data: { country: 'Japan', production_year: '1997', drive: '4WD', power: '289', weight: '1230', length: '4330', worth: 'Eisrennen Mittel' } },
        { name: 'Lancer Evolution V GSR', src: 'sources/Cars/Mitsubishi_Lancer_1998_Evolution_5_GSR.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '306', weight: '1360', length: '4350', worth: '~21.000' } },
        { name: 'Lancer Evolution VI GSR', src: 'sources/Cars/Mitsubishi_Lancer_1999_Evolution_6_GSR.mp4', data: { country: 'Japan', production_year: '1999', drive: '4WD', power: '302', weight: '1360', length: '4350', worth: '~21.000' } },
        { name: 'Lancer Evolution VI Rally Car', src: 'sources/Cars/Mitsubishi_Lancer_1999_Evolution_6_Rally_Car.mp4', data: { country: 'Japan', production_year: '1999', drive: '4WD', power: '291', weight: '1230', length: '4350', worth: '750.000' } },
        { name: 'Lancer Evolution VI RS', src: 'sources/Cars/Mitsubishi_Lancer_1999_Evolution_6_RS.mp4', data: { country: 'Japan', production_year: '1999', drive: '4WD', power: '302', weight: '1260', length: '4350', worth: '~17.000' } },
        { name: 'Lancer Evolution VI GSR Tommi Makinen Edition', src: 'sources/Cars/Mitsubishi_Lancer_2000_Evolution_6_GSR_Tommi_Makinen_Edition.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '294', weight: '1360', length: '4350', worth: '~16.000' } },
        { name: 'Lancer Evolution VII GSR', src: 'sources/Cars/Mitsubishi_Lancer_2001_Evolution_7_GSR.mp4', data: { country: 'Japan', production_year: '2001', drive: '4WD', power: '305', weight: '1400', length: '4455', worth: '~20.000' } },
        { name: 'Lancer Evolution VII GT-A', src: 'sources/Cars/Mitsubishi_Lancer_2002_Evolution_7_GT-A.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '302', weight: '1480', length: '4455', worth: '~21.000' } },
        { name: 'Lancer Evolution VIII GSR', src: 'sources/Cars/Mitsubishi_Lancer_2003_Evolution_8_GSR.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '306', weight: '1410', length: '4490', worth: '32.980' } },
        { name: 'Lancer Evolution VIII Rally Car', src: 'sources/Cars/Mitsubishi_Lancer_2003_Evolution_8_Rally_Car.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '312', weight: '1230', length: '4490', worth: '1.250.000' } },
        { name: 'Lancer Evolution VIII RS', src: 'sources/Cars/Mitsubishi_Lancer_2003_Evolution_8_RS.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '305', weight: '1320', length: '4490', worth: '31.600' } },
        { name: 'Lancer Evolution VIII MR GSR', src: 'sources/Cars/Mitsubishi_Lancer_2004_Evolution_8_MR_GSR.mp4', data: { country: 'Japan', production_year: '2004', drive: '4WD', power: '304', weight: '1400', length: '4490', worth: '33.980' } },
        { name: 'Legnum VR-4 Type V', src: 'sources/Cars/Mitsubishi_Legnum_1998_VR-4.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '276', weight: '1550', length: '4740', worth: '~18.000' } },
        { name: 'Minica Dangan ZZ', src: 'sources/Cars/Mitsubishi_Minica_1989_Dangan_ZZ.mp4', data: { country: 'Japan', production_year: '1989', drive: 'FF', power: '60', weight: '640', length: '3195', worth: '~3.000' } },
        { name: 'Mirage 1400 GLX', src: 'sources/Cars/Mitsubishi_Mirage_1978_1400_GLX.mp4', data: { country: 'Japan', production_year: '1978', drive: 'FF', power: '80', weight: '795', length: '3790', worth: '9.220' } },
        { name: 'Mirage Cyborg ZR', src: 'sources/Cars/Mitsubishi_Mirage_1997_Cyborg_ZR.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FF', power: '166', weight: '1060', length: '3890', worth: '~7.000' } },
        { name: 'Pajero Rally Raid Car', src: 'sources/Cars/Mitsubishi_Pajero_1985_Rally_Raid_Car.mp4', data: { country: 'Japan', production_year: '1985', drive: '4WD', power: '230', weight: '1202', length: '3920', worth: 'Tahiti Schwer' } },
        { name: 'Pajero Rally Raid Car', src: 'sources/Cars/Mitsubishi_Pajero_2003_Rally_Raid_Car.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '272', weight: '1825', length: '4223', worth: 'Yosemite Rally II Schwer' } },
        { name: 'Starion 4WD Rally Car', src: 'sources/Cars/Mitsubishi_Starion_1984_4WD_Rally_Car.mp4', data: { country: 'Japan', production_year: '1984', drive: '4WD', power: '360', weight: '1250', length: '4000', worth: 'Grand Canyon Schwer' } }
    ],
    mugen: [
        { name: 'Lancer Evo 6', src: 'sources/Cars/Mines_Lancer_2000_Evo_6.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '400', weight: '1210', length: '4350', worth: '150.000' } }
    ],
    nike: [
        { name: 'One', src: 'sources/Cars/Nike_One_2022.mp4', data: { country: 'Amerika', production_year: '2022', drive: '4WD', power: '259', weight: '760', length: '4000', worth: 'Internationale B-Lizenz | Saleen S7 Club' } }
    ],
    nismo: [
        { name: '350 Z S-Tune', src: 'sources/Cars/Nismo_350_Z_2002_S-Tune.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FR', power: '278', weight: '1320', length: '4000', worth: '55.000' } },
        { name: '350 Z Z-Tune', src: 'sources/Cars/Nismo_350_Z_2003_Z-Tune.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '390', weight: '1250', length: '4000', worth: '150.000' } },
        { name: 'Silvia 270 R', src: 'sources/Cars/Nismo_Silvia_1994_270_R.mp4', data: { country: 'Japan', production_year: '1994', drive: 'FR', power: '270', weight: '1240', length: '4000', worth: 'Bronze Internationale A-Lizenz' } },
        { name: 'Skyline LM', src: 'sources/Cars/Nismo_Skyline_1995_LM.mp4', data: { country: 'Japan', production_year: '1995', drive: '4WD', power: '300', weight: '1580', length: '4675', worth: 'Rotes "R"-Emblem' } },
        { name: 'Skyline 400 R', src: 'sources/Cars/Nismo_Skyline_1996_400_R.mp4', data: { country: 'Japan', production_year: '1996', drive: '4WD', power: '394', weight: '1550', length: '4675', worth: 'Japanische 90er-Rennen' } },
        { name: 'Skyline R-Tune', src: 'sources/Cars/Nismo_Skyline_1999_R-Tune.mp4', data: { country: 'Japan', production_year: '1999', drive: '4WD', power: '458', weight: '1560', length: '4600', worth: '125.000' } },
        { name: 'Skyline S-Tune', src: 'sources/Cars/Nismo_Skyline_2000_S-Tune.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '394', weight: '1500', length: '4675', worth: '90.000' } }
    ],
    nissan: [
        { name: '200 SX', src: 'sources/Cars/Nissan_200_SX_1996.mp4', data: { country: 'Japan', production_year: '1996', drive: 'FR', power: '203', weight: '1220', length: '4520', worth: '12.500' } },
        { name: '200 SX S14', src: 'sources/Cars/Nissan_200_SX_S14_1996.mp4', data: { country: 'Japan', production_year: '1996', drive: 'FR', power: '216', weight: '1250', length: '4520', worth: '~12.000' } },
        { name: '240 ZG', src: 'sources/Cars/Nissan_240_1971_ZG.mp4', data: { country: 'Japan', production_year: '1971', drive: 'FR', power: '147', weight: '1010', length: '4305', worth: 'Club "Z"' } },
        { name: '240 RS', src: 'sources/Cars/Nissan_240_1985_RS.mp4', data: { country: 'Japan', production_year: '1983', drive: 'FR', power: '220', weight: '970', length: '4000', worth: '~25.000' } },
        { name: '240 RS Rally Car', src: 'sources/Cars/Nissan_240_1985_RS_Rally_Car.mp4', data: { country: 'Japan', production_year: '1985', drive: 'FR', power: '240', weight: '970', length: '4000', worth: 'Schweizer Alpen Schwer' } },
        { name: '280 Z-L', src: 'sources/Cars/Nissan_280_1978_Z-L.mp4', data: { country: 'Japan', production_year: '1978', drive: 'FR', power: '138', weight: '1225', length: '4000', worth: '38.000' } },
        { name: '300 ZX', src: 'sources/Cars/Nissan_300_ZX_1983.mp4', data: { country: 'Japan', production_year: '1983', drive: 'FR', power: '230', weight: '1380', length: '4335', worth: '~12.000' } },
        { name: '300 ZX 2-Seater', src: 'sources/Cars/Nissan_300_ZX_1989_2-Seater.mp4', data: { country: 'Japan', production_year: '1989', drive: 'FR', power: '276', weight: '1510', length: '4310', worth: '13.800' } },
        { name: '300 ZX 2by2', src: 'sources/Cars/Nissan_300_ZX_1998_2_by_2.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FR', power: '276', weight: '1580', length: '4310', worth: '~22.000' } },
        { name: '350 Z Version ST', src: 'sources/Cars/Nissan_350_Z_2002_Version_ST.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FR', power: '273', weight: '1450', length: '4310', worth: '36.000' } },
        { name: '350 Z', src: 'sources/Cars/Nissan_350_Z_2003.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '276', weight: '1440', length: '4310', worth: '33.000' } },
        { name: '350 Z Roadster', src: 'sources/Cars/Nissan_350_Z_2003_Roadster.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '276', weight: '1550', length: '4310', worth: '36.000' } },
        { name: '350 Z Motul Pitwork', src: 'sources/Cars/Nissan_350_Z_2004_Motul_Pitwork.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '485', weight: '1080', length: '4350', worth: '1.350.000 | Japanische GT-Meisterschaft' } },
        { name: '350 Z Limited Edition', src: 'sources/Cars/Nissan_350_Z_2005_Limited_Edition.mp4', data: { country: 'Japan', production_year: '2005', drive: 'FR', power: '286', weight: '1440', length: '4310', worth: '36.000' } },
        { name: '2000', src: 'sources/Cars/Nissan_2000_1968.mp4', data: { country: 'Japan', production_year: '1968', drive: 'FR', power: '137', weight: '930', length: '3910', worth: '~19.000' } },
        { name: 'Be-1', src: 'sources/Cars/Nissan_Be-1_1987.mp4', data: { country: 'Japan', production_year: '1987', drive: 'FF', power: '51', weight: '670', length: '4000', worth: '~5.000' } },
        { name: 'Bluebird 1600 Deluxe', src: 'sources/Cars/Nissan_Bluebird_1969_1600_Deluxe.mp4', data: { country: 'Japan', production_year: '1969', drive: 'FR', power: '88', weight: '930', length: '4000', worth: '~9.000' } },
        { name: 'Bluebird 1600 Rally Car', src: 'sources/Cars/Nissan_Bluebird_1969_1600_Rally_Car.mp4', data: { country: 'Japan', production_year: '1969', drive: 'FR', power: '131', weight: '965', length: '4000', worth: 'Whistler Eis-Rennen Schwer' } },
        { name: 'Bluebird 1800 SSS', src: 'sources/Cars/Nissan_Bluebird_1979_1800_SSS.mp4', data: { country: 'Japan', production_year: '1979', drive: 'FR', power: '94', weight: '1050', length: '4000', worth: '~5.000' } },
        { name: 'Cube', src: 'sources/Cars/Nissan_Cube_1998.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FF', power: '84', weight: '970', length: '3750', worth: '~7.000' } },
        { name: 'Cube', src: 'sources/Cars/Nissan_Cube_2002.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FF', power: '96', weight: '1070', length: '3730', worth: '14.420' } },
        { name: 'EXA L.A. Version Type S', src: 'sources/Cars/Nissan_EXA_1988_LA_Version_Type_S.mp4', data: { country: 'Japan', production_year: '1988', drive: 'FF', power: '118', weight: '1070', length: '4000', worth: '~5.000' } },
        { name: 'March G#', src: 'sources/Cars/Nissan_March_1999_G.mp4', data: { country: 'Japan', production_year: '1999', drive: 'FF', power: '79', weight: '830', length: '3720', worth: '~9.000' } },
        { name: 'Micra 12c', src: 'sources/Cars/Nissan_Micra_2003_12c.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '88', weight: '910', length: '3690', worth: '10.950' } },
        { name: 'MM-R Cup Car', src: 'sources/Cars/Nissan_MM-R_2001_Cup_Car.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FF', power: '140', weight: '672', length: '3695', worth: 'Micra Brothers' } },
        { name: 'Pao', src: 'sources/Cars/Nissan_Pao_1989.mp4', data: { country: 'Japan', production_year: '1989', drive: 'FF', power: '47', weight: '730', length: '4000', worth: '~5.000' } },
        { name: 'Primera 2.0 TE', src: 'sources/Cars/Nissan_Primera_1990_2.0_TE.mp4', data: { country: 'Japan', production_year: '1990', drive: 'FF', power: '144', weight: '1170', length: '4000', worth: '~8.000' } },
        { name: 'Primera 20V', src: 'sources/Cars/Nissan_Primera_2001_20V.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FF', power: '201', weight: '1320', length: '4000', worth: '23.900' } },
        { name: 'R89C Race Car', src: 'sources/Cars/Nissan_R89C_1989_Race_Car.mp4', data: { country: 'Japan', production_year: '1989', drive: 'MR', power: '922', weight: '900', length: '4800', worth: 'Fahrmissionen 30-34' } },
        { name: 'R92CP Race Car', src: 'sources/Cars/Nissan_R92CP_1992_Race_Car.mp4', data: { country: 'Japan', production_year: '1992', drive: 'MR', power: '788', weight: '900', length: '4800', worth: '1.224.999 | Fuji 1000 km' } },
        { name: 'R92CP Race Car Black Edition', src: 'sources/Cars/Nissan_R92CP_1992_Race_Car_Black_Edition.mp4', data: { country: 'Japan', production_year: '1992', drive: 'MR', power: '788', weight: '900', length: '4800', worth: '~3.500.000' } },
        { name: 'R 390 GT1 Road Car', src: 'sources/Cars/Nissan_R390_1998_GT1.mp4', data: { country: 'Japan', production_year: '1998', drive: 'MR', power: '345', weight: '1179', length: '4720', worth: '1.000.000' } },
        { name: 'R 390 GT1 Race Car', src: 'sources/Cars/Nissan_R390_1998_GT1_Race_Car.mp4', data: { country: 'Japan', production_year: '1998', drive: 'MR', power: '800', weight: '1000', length: '4720', worth: '4.500.000' } },
        { name: 'R 390 GT1 Race Car Black Edition', src: 'sources/Cars/Nissan_R390_1998_GT1_Race_Car_Black_Edition.mp4', data: { country: 'Japan', production_year: '1998', drive: 'MR', power: '800', weight: '1000', length: '4720', worth: '~4.500.000' } },
        { name: 'Sileighty', src: 'sources/Cars/Nissan_Sileighty_1998.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FR', power: '203', weight: '1170', length: '4470', worth: '~12.000 | Silvia Sisters' } },
        { name: 'Silvia', src: 'sources/Cars/Nissan_Silvia_1965.mp4', data: { country: 'Japan', production_year: '1965', drive: 'FR', power: '88', weight: '980', length: '4000', worth: '~16.000' } },
        { name: "Silvia Q's 1800", src: 'sources/Cars/Nissan_Silvia_1988_Q_1800.mp4', data: { country: 'Japan', production_year: '1988', drive: 'FR', power: '132', weight: '1090', length: '4470', worth: '5.400' } },
        { name: "Silvia K's Aero", src: 'sources/Cars/Nissan_Silvia_1993_K_Aero.mp4', data: { country: 'Japan', production_year: '1993', drive: 'FR', power: '196', weight: '1220', length: '4000', worth: '~13.000' } },
        { name: 'Silvia Spec R Aero', src: 'sources/Cars/Nissan_Silvia_1999_Spec-R_Aero.mp4', data: { country: 'Japan', production_year: '1999', drive: 'FR', power: '246', weight: '1240', length: '4445', worth: '~12.000' } },
        { name: 'Silvia Spec S Aero', src: 'sources/Cars/Nissan_Silvia_1999_Spec-S_Aero.mp4', data: { country: 'Japan', production_year: '1999', drive: 'FR', power: '158', weight: '1200', length: '4445', worth: '~13.000' } },
        { name: 'Silvia Varietta', src: 'sources/Cars/Nissan_Silvia_2000_Varietta.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FR', power: '157', weight: '1330', length: '4445', worth: '~17.000' } },
        { name: 'Silvia C-West', src: 'sources/Cars/Nissan_Silvia_2001_C-West.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '300', weight: '1300', length: '4520', worth: '500.000' } },
        { name: 'Skyline Sport', src: 'sources/Cars/Nissan_Skyline_1962_Sport.mp4', data: { country: 'Japan', production_year: '1962', drive: 'FR', power: '89', weight: '1350', length: '4650', worth: '320.000' } },
        { name: 'Skyline 1500 Deluxe', src: 'sources/Cars/Nissan_Skyline_1963_1500_Deluxe.mp4', data: { country: 'Japan', production_year: '1963', drive: 'FR', power: '66', weight: '960', length: '4000', worth: '~30.000' } },
        { name: 'Skyline 2000 GT-B', src: 'sources/Cars/Nissan_Skyline_1967_2000_GT-B.mp4', data: { country: 'Japan', production_year: '1967', drive: 'FR', power: '119', weight: '1095', length: '4000', worth: 'FR Herausforderung' } },
        { name: 'Skyline 2000 GT-R Hardtop', src: 'sources/Cars/Nissan_Skyline_1970_2000_GT-R_Hardtop.mp4', data: { country: 'Japan', production_year: '1970', drive: 'FR', power: '157', weight: '1100', length: '4330', worth: 'Japanische 70er-Herausforderung' } },
        { name: 'Skyline 2000 GT-R', src: 'sources/Cars/Nissan_Skyline_1973_2000_GT-R.mp4', data: { country: 'Japan', production_year: '1973', drive: 'FR', power: '157', weight: '1145', length: '4460', worth: '~30.000' } },
        { name: 'Skyline Turbo RS', src: 'sources/Cars/Nissan_Skyline_1983_Turbo_RS.mp4', data: { country: 'Japan', production_year: '1983', drive: 'FR', power: '187', weight: '1175', length: '4000', worth: '~9.000' } },
        { name: 'Skyline Turbo RS-X', src: 'sources/Cars/Nissan_Skyline_1984_Turbo_RS-X.mp4', data: { country: 'Japan', production_year: '1984', drive: 'FR', power: '202', weight: '1250', length: '4000', worth: '~10.000' } },
        { name: 'Skyline GTS-R', src: 'sources/Cars/Nissan_Skyline_1987_GTS-R.mp4', data: { country: 'Japan', production_year: '1987', drive: 'FR', power: '207', weight: '1340', length: '4660', worth: '~12.000' } },
        { name: 'Skyline GT-R', src: 'sources/Cars/Nissan_Skyline_1989_GT-R.mp4', data: { country: 'Japan', production_year: '1989', drive: '4WD', power: '276', weight: '1430', length: '4545', worth: '~16.000' } },
        { name: 'Skyline GTS-T Type M', src: 'sources/Cars/Nissan_Skyline_1989_GTS-T_Type_M.mp4', data: { country: 'Japan', production_year: '1989', drive: 'FR', power: '212', weight: '1260', length: '4545', worth: '~9.000' } },
        { name: 'Skyline GT-R N1', src: 'sources/Cars/Nissan_Skyline_1991_GT-R_N1.mp4', data: { country: 'Japan', production_year: '1991', drive: '4WD', power: '276', weight: '1470', length: '4545', worth: '~15.000' } },
        { name: 'Skyline GT-S 25 Type S', src: 'sources/Cars/Nissan_Skyline_1991_GT-S_25_Type_S.mp4', data: { country: 'Japan', production_year: '1991', drive: 'FR', power: '187', weight: '1320', length: '4545', worth: '~12.000' } },
        { name: 'Skyline GT-R Calsonic', src: 'sources/Cars/Nissan_Skyline_1993_GT-R_Calsonic.mp4', data: { country: 'Japan', production_year: '1993', drive: '4WD', power: '550', weight: '1260', length: '4545', worth: 'Tsukuba 9 Stunden' } },
        { name: 'Skyline GT-R V-Spec', src: 'sources/Cars/Nissan_Skyline_1993_GT-R_V-Spec.mp4', data: { country: 'Japan', production_year: '1993', drive: '4WD', power: '276', weight: '1500', length: '4545', worth: '~19.000' } },
        { name: 'Skyline GT-R V-Spec N1', src: 'sources/Cars/Nissan_Skyline_1993_GT-R_V-Spec_N1.mp4', data: { country: 'Japan', production_year: '1993', drive: '4WD', power: '276', weight: '1470', length: '4545', worth: '~25.000' } },
        { name: 'Skyline GT-R V-Spec 2', src: 'sources/Cars/Nissan_Skyline_1994_GT-R_V-Spec_2.mp4', data: { country: 'Japan', production_year: '1994', drive: '4WD', power: '276', weight: '1500', length: '4545', worth: 'Driving School #27' } },
        { name: 'Skyline GT-R', src: 'sources/Cars/Nissan_Skyline_1995_GT-R.mp4', data: { country: 'Japan', production_year: '1995', drive: '4WD', power: '276', weight: '1530', length: '4575', worth: '~17.000' } },
        { name: 'Skyline GT-R N1', src: 'sources/Cars/Nissan_Skyline_1995_GT-R_N1.mp4', data: { country: 'Japan', production_year: '1995', drive: '4WD', power: '309', weight: '1540', length: '4675', worth: '~21.000' } },
        { name: 'Skyline GT-R Pennzoil', src: 'sources/Cars/Nissan_Skyline_1999_GT-R_Pennzoil.mp4', data: { country: 'Japan', production_year: '1999', drive: 'FR', power: '498', weight: '1200', length: '4600', worth: '1.350.000' } },
        { name: 'Skyline GT-R MNP 2', src: 'sources/Cars/Nissan_Skyline_1999_GT-R_Special_Color_Midnight_Purple_2.mp4', data: { country: 'Japan', production_year: '1999', drive: '4WD', power: '308', weight: '1550', length: '4600', worth: '~33.000' } },
        { name: 'Skyline GT-R V-Spec', src: 'sources/Cars/Nissan_Skyline_1999_GT-R_V-Spec.mp4', data: { country: 'Japan', production_year: '1999', drive: '4WD', power: '320', weight: '1560', length: '4600', worth: '~35.000' } },
        { name: 'Skyline GT-R', src: 'sources/Cars/Nissan_Skyline_2000_GT-R.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '308', weight: '1540', length: '4600', worth: '~50.000' } },
        { name: 'Skyline GT-R Calsonic', src: 'sources/Cars/Nissan_Skyline_2000_GT-R_Calsonic.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '550', weight: '1260', length: '4545', worth: 'Tsukuba 9 Stunden' } },
        { name: 'Skyline GT-R Loctite', src: 'sources/Cars/Nissan_Skyline_2000_GT-R_Loctite.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FR', power: '476', weight: '1100', length: '4600', worth: '1.350.000' } },
        { name: 'Skyline GT-R MNP 3', src: 'sources/Cars/Nissan_Skyline_2000_GT-R_Special_Color_Midnight_Purple_3.mp4', data: { country: 'Japan', production_year: '2001', drive: '4WD', power: '308', weight: '1550', length: '4600', worth: '51.480' } },
        { name: 'Skyline GT-R V-Spec 2', src: 'sources/Cars/Nissan_Skyline_2000_GT-R_V-Spec_2.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '320', weight: '1560', length: '4600', worth: '57.480' } },
        { name: 'Skyline GT-R V-Spec 2 N1', src: 'sources/Cars/Nissan_Skyline_2000_GT-R_V-Spec_2_N1.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '276', weight: '1550', length: '4600', worth: '60.980' } },
        { name: 'Skyline 300 GT', src: 'sources/Cars/Nissan_Skyline_2001_300_GT.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '256', weight: '1490', length: '4675', worth: '32.500' } },
        { name: 'Skyline GT-R Concept', src: 'sources/Cars/Nissan_Skyline_2001_GT-R_Concept.mp4', data: { country: 'Japan', production_year: '2001', drive: '4WD', power: '455', weight: '1560', length: '4600', worth: 'Silber Internationale A-Lizenz' } },
        { name: 'Skyline GT-R M-Spec', src: 'sources/Cars/Nissan_Skyline_2001_GT-R_M-Spec.mp4', data: { country: 'Japan', production_year: '2001', drive: '4WD', power: '320', weight: '1560', length: '4600', worth: '59.500' } },
        { name: 'Skyline GT-R Pennzoil', src: 'sources/Cars/Nissan_Skyline_2001_GT-R_Pennzoil.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '481', weight: '1100', length: '4600', worth: '1.350.000' } },
        { name: 'Skyline GT-R Xanavi', src: 'sources/Cars/Nissan_Skyline_2001_GT-R_Xanavi.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '481', weight: '1100', length: '4600', worth: '1.350.000' } },
        { name: 'Skyline 350 GT-8', src: 'sources/Cars/Nissan_Skyline_2002_350_GT-8.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FR', power: '258', weight: '1550', length: '4675', worth: '36.600' } },
        { name: 'Skyline GT-R M-Spec Nür', src: 'sources/Cars/Nissan_Skyline_2002_GT-R_M-Spec_Nür.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '276', weight: '1580', length: '4600', worth: '63.000' } },
        { name: 'Skyline GT-R V-Spec 2 Nür', src: 'sources/Cars/Nissan_Skyline_2002_GT-R_V-Spec_2_Nür.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '336', weight: '1560', length: '4600', worth: '61.000' } },
        { name: 'Skyline 350 GT Coupe', src: 'sources/Cars/Nissan_Skyline_2003_350_GT_Coupe.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '276', weight: '1530', length: '4640', worth: '33.900' } },
        { name: 'Skyline GT-R Xanavi', src: 'sources/Cars/Nissan_Skyline_2003_GT-R_Xanavi.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '492', weight: '1080', length: '4600', worth: '1.350.000' } },
        { name: 'Skyline GT-R Falken', src: 'sources/Cars/Nissan_Skyline_2004_GT-R_Falken.mp4', data: { country: 'Japan', production_year: '2004', drive: '4WD', power: '508', weight: '1360', length: '4600', worth: '550.000' } },
        { name: 'Stagea Autech 260 RS', src: 'sources/Cars/Nissan_Stagea_1998_Autech_260_RS.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '276', weight: '1720', length: '4880', worth: '~30.000' } },
        { name: 'Stagea RS Four S', src: 'sources/Cars/Nissan_Stagea_1998_RS_Four_S.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '269', weight: '1650', length: '4800', worth: '~21.000' } }
    ],
    opel: [
        { name: 'Astra Touring Car', src: 'sources/Cars/Opel_Astra_2000_Touring_Car.mp4', data: { country: 'Deutschland', production_year: '2000', drive: 'FR', power: '460', weight: '1000', length: '4400', worth: '550.000' } },
        { name: 'Calibra Touring Car', src: 'sources/Cars/Opel_Calibra_1994_Touring_Car.mp4', data: { country: 'Deutschland', production_year: '1994', drive: '4WD', power: '427', weight: '1059', length: '4400', worth: 'Speedster Trophy' } },
        { name: 'Corsa Comfort 1.4i', src: 'sources/Cars/Opel_Corsa_2001_Comfort_1.4i.mp4', data: { country: 'Deutschland', production_year: '2001', drive: 'FF', power: '88', weight: '998', length: '4000', worth: '17.960' } },
        { name: 'Speedster', src: 'sources/Cars/Opel_Speedster_2000.mp4', data: { country: 'Deutschland', production_year: '2000', drive: 'MR', power: '145', weight: '850', length: '3790', worth: '44.690' } },
        { name: 'Speedster Turbo', src: 'sources/Cars/Opel_Speedster_2000_Turbo.mp4', data: { country: 'Deutschland', production_year: '2000', drive: 'MR', power: '197', weight: '1005', length: '3786', worth: '49.550' } },
        { name: 'Tigra 1.6i', src: 'sources/Cars/Opel_Tigra_1999_1.6i.mp4', data: { country: 'Deutschland', production_year: '1999', drive: 'FF', power: '104', weight: '1032', length: '3922', worth: '~19.000' } },
        { name: 'Vectra 3.2 V6', src: 'sources/Cars/Opel_Vectra_2003_3.2_V6.mp4', data: { country: 'Deutschland', production_year: '2003', drive: 'FF', power: '211', weight: '1510', length: '4400', worth: '36.530' } }
    ],
    opera_performance: [
        { name: '350 Z', src: 'sources/Cars/Opera_Performance_350_Z_2004.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '350', weight: '1340', length: '4000', worth: '70.000' } },
        { name: 'S2000', src: 'sources/Cars/Opera_Performance_S2000_2004.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '274', weight: '930', length: '4000', worth: '150.000' } }
    ],
    pagani: [
        { name: 'Zonda C12', src: 'sources/Cars/Pagani_Zonda_2000_C12.mp4', data: { country: 'Italien', production_year: '2000', drive: 'MR', power: '394', weight: '1251', length: '4345', worth: '388.720' } },
        { name: 'Zonda C12S', src: 'sources/Cars/Pagani_Zonda_2000_C12S.mp4', data: { country: 'Italien', production_year: '2000', drive: 'MR', power: '550', weight: '1351', length: '4395', worth: '450.040' } },
        { name: 'Zonda LM Race Car', src: 'sources/Cars/Pagani_Zonda_2001_LM_Race_Car.mp4', data: { country: 'Italien', production_year: '2001', drive: 'MR', power: '660', weight: '1150', length: '4395', worth: 'Fahrmissionen 21-24' } },
        { name: 'Zonda C12S 7.3', src: 'sources/Cars/Pagani_Zonda_2002_C12S_7.3.mp4', data: { country: 'Italien', production_year: '2002', drive: 'MR', power: '556', weight: '1250', length: '4395', worth: '631.680' } }
    ],
    panoz: [
        { name: 'Esperante GTR-1 Race Car', src: 'sources/Cars/Panoz_Esperante_1998_GTR-1_Race_Car.mp4', data: { country: 'Amerika', production_year: '1998', drive: 'FR', power: '750', weight: '1149', length: '4000', worth: '4.500.000' } }
    ],
    pescarolo_sport: [
        { name: 'C60 Courage Race Car', src: 'sources/Cars/Pescarolo_C60_2003_Courage_Race_Car.mp4', data: { country: 'Frankreich', production_year: '2003', drive: 'MR', power: '800', weight: '900', length: '4000', worth: '4.500.000' } },
        { name: 'C60 PlayStation Race Car', src: 'sources/Cars/Pescarolo_C60_2004_PlayStation_Race_Car.mp4', data: { country: 'Frankreich', production_year: '2004', drive: 'MR', power: '805', weight: '900', length: '4000', worth: '4.500.000' } }
    ],
    peugeot: [
        { name: '106 Rallye', src: 'sources/Cars/Peugeot_106_2003_Rallye.mp4', data: { country: 'Frankreich', production_year: '2003', drive: 'FF', power: '98', weight: '890', length: '4000', worth: '12.630' } },
        { name: '106 S16', src: 'sources/Cars/Peugeot_106_2003_S16.mp4', data: { country: 'Frankreich', production_year: '2003', drive: 'FF', power: '116', weight: '960', length: '4000', worth: '18.810' } },
        { name: '205 Turbo 16', src: 'sources/Cars/Peugeot_205_1985_Turbo_16.mp4', data: { country: 'Frankreich', production_year: '1985', drive: '4WD', power: '188', weight: '1145', length: '3820', worth: '~28.000 | Tag 421-427 & 449-455 (alle 700 Tage)' } },
        { name: '205 Turbo 16 Rally Car', src: 'sources/Cars/Peugeot_205_1985_Turbo_16_Rally_Car.mp4', data: { country: 'Frankreich', production_year: '1985', drive: '4WD', power: '350', weight: '940', length: '3820', worth: '206 Cup' } },
        { name: '205 Turbo 16 Rally Car Evo 2', src: 'sources/Cars/Peugeot_205_1986_Turbo_16_Rally_Car_Evo_2.mp4', data: { country: 'Frankreich', production_year: '1986', drive: '4WD', power: '448', weight: '910', length: '3820', worth: 'George V Rally Schwer' } },
        { name: '206 Rally Car', src: 'sources/Cars/Peugeot_206_1999_Rally_Car.mp4', data: { country: 'Frankreich', production_year: '1999', drive: '4WD', power: '305', weight: '1230', length: '4005', worth: '750.000' } },
        { name: '206 S16', src: 'sources/Cars/Peugeot_206_1999_S16.mp4', data: { country: 'Frankreich', production_year: '1999', drive: 'FF', power: '138', weight: '1079', length: '3835', worth: '~15.000' } },
        { name: '206 CC', src: 'sources/Cars/Peugeot_206_2001_CC.mp4', data: { country: 'Frankreich', production_year: '2001', drive: 'FF', power: '134', weight: '1190', length: '4000', worth: '26.520' } },
        { name: '206 RC', src: 'sources/Cars/Peugeot_206_2003_RC.mp4', data: { country: 'Frankreich', production_year: '2003', drive: 'FF', power: '168', weight: '1110', length: '4000', worth: '29.090' } },
        { name: '307 XSi', src: 'sources/Cars/Peugeot_307_2004_XSi.mp4', data: { country: 'Frankreich', production_year: '2004', drive: 'FF', power: '133', weight: '1260', length: '4210', worth: '27.940' } },
        { name: '406 3.0 V6 Coupe', src: 'sources/Cars/Peugeot_406_1998_3.0_V6_Coupe.mp4', data: { country: 'Frankreich', production_year: '1998', drive: 'FF', power: '204', weight: '1560', length: '4620', worth: '~23.000' } },
        { name: '905 Race Car', src: 'sources/Cars/Peugeot_905_1992_Race_Car.mp4', data: { country: 'Frankreich', production_year: '1992', drive: 'MR', power: '810', weight: '750', length: '4800', worth: '3.500.000' } }
    ],
    plymouth: [
        { name: 'Cuda 440 Six-Pack', src: 'sources/Cars/Plymouth_Cuda_1971_440_Six_Pack.mp4', data: { country: 'Amerika', production_year: '1971', drive: 'FR', power: '390', weight: '1576', length: '4740', worth: '58.360' } },
        { name: 'Super Bird', src: 'sources/Cars/Plymouth_Super_Bird_1970.mp4', data: { country: 'Amerika', production_year: '1970', drive: 'FR', power: '425', weight: '1755', length: '5588', worth: 'Muscle-Car Wettkampf' } }
    ],
    polyphony_digital: [
        { name: 'Formula Gran Turismo', src: 'sources/Cars/Polyphony_Digital_Formula_Gran_Turismo_2004.mp4', data: { country: 'Japan', production_year: '2004', drive: 'MR', power: '904', weight: '550', length: '4000', worth: 'Nürburgring 24 Stunden' } },
        { name: 'Formula Gran Turismo Black Edition', src: 'sources/Cars/Polyphony_Digital_Formula_Gran_Turismo_2004_Black_Edition.mp4', data: { country: 'Japan', production_year: '2004', drive: 'MR', power: '904', weight: '550', length: '4000', worth: '100% Spielfortschritt' } }
    ],
    pontiac: [
        { name: 'GTO Tempest Le Mans', src: 'sources/Cars/Pontiac_GTO_1964_Tempest_Le_Mans.mp4', data: { country: 'Amerika', production_year: '1964', drive: 'FR', power: '332', weight: '1420', length: '4000', worth: '52.600' } },
        { name: 'GTO 5.7 Coupe', src: 'sources/Cars/Pontiac_GTO_2004_5.7_Coupe.mp4', data: { country: 'Amerika', production_year: '2004', drive: 'FR', power: '357', weight: '1690', length: '4000', worth: '34.490' } },
        { name: 'Solstice Concept Coupe', src: 'sources/Cars/Pontiac_Solstice_2002_Concept_Coupe.mp4', data: { country: 'Amerika', production_year: '2002', drive: 'FR', power: '239', weight: '1318', length: '4000', worth: 'S-Lizenz Silber' } },
        { name: 'Sunfire GXP Concept', src: 'sources/Cars/Pontiac_Sunfire_2002_GXP_Concept.mp4', data: { country: 'Amerika', production_year: '2002', drive: 'FF', power: '180', weight: '1257', length: '4000', worth: 'A-Lizenz Bronze' } },
        { name: 'Vibe GT', src: 'sources/Cars/Pontiac_Vibe_2003_GT.mp4', data: { country: 'Amerika', production_year: '2003', drive: 'FF', power: '174', weight: '1273', length: '4365', worth: '21.120' } }
    ],
    proto_motors: [
        { name: 'Spirra 4.6 V8', src: 'sources/Cars/Proto_Motors_Spirra_2004_4.6_V8.mp4', data: { country: 'Südkorea', production_year: '2004', drive: 'MR', power: '324', weight: '1205', length: '4318', worth: '80.000' } }
    ],
    re_amemiya: [
        { name: 'RX-7 Asparadrink', src: 'sources/Cars/RE_Amemiya_RX-7_2004_Asparadrink.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '324', weight: '1100', length: '4000', worth: '500.000' } }
    ],
    renault: [
        { name: '5 Turbo', src: 'sources/Cars/Renault_5_1980_Turbo.mp4', data: { country: 'Frankreich', production_year: '1980', drive: 'MR', power: '159', weight: '970', length: '3665', worth: '74.500 | Tahiti Tour Leicht' } },
        { name: '5 Maxi Turbo Rally Car', src: 'sources/Cars/Renault_5_1985_Maxi_Turbo_Rally_Car.mp4', data: { country: 'Frankreich', production_year: '1985', drive: 'MR', power: '355', weight: '905', length: '3600', worth: 'George V Rally Mittel' } },
        { name: 'Avantime', src: 'sources/Cars/Renault_Avantime_2002.mp4', data: { country: 'Frankreich', production_year: '2002', drive: 'FF', power: '208', weight: '1741', length: '4642', worth: '52.570' } },
        { name: 'Clio V6 24V', src: 'sources/Cars/Renault_Clio_2000_V6_24V.mp4', data: { country: 'Frankreich', production_year: '2000', drive: 'MR', power: '241', weight: '1335', length: '3803', worth: '~33.000' } },
        { name: 'Clio V6 24V Race Car', src: 'sources/Cars/Renault_Clio_2000_V6_24V_Race_Car.mp4', data: { country: 'Frankreich', production_year: '2000', drive: 'MR', power: '294', weight: '1149', length: '3805', worth: 'Clio Trophy' } },
        { name: 'Clio Sport', src: 'sources/Cars/Renault_Clio_2002_Sport.mp4', data: { country: 'Frankreich', production_year: '2002', drive: 'FF', power: '169', weight: '1035', length: '3841', worth: '29.700' } },
        { name: 'Clio V6 Phase 2', src: 'sources/Cars/Renault_Clio_2003_V6_Phase_2.mp4', data: { country: 'Frankreich', production_year: '2003', drive: 'MR', power: '248', weight: '1400', length: '3841', worth: '53.720' } },
        { name: 'Megane IDE Coupe', src: 'sources/Cars/Renault_Megane_2000_IDE_Coupe.mp4', data: { country: 'Frankreich', production_year: '2000', drive: 'FF', power: '139', weight: '1135', length: '3987', worth: '~14.000' } },
        { name: 'Megane 16V', src: 'sources/Cars/Renault_Megane_2003_16V.mp4', data: { country: 'Frankreich', production_year: '2003', drive: 'FF', power: '131', weight: '1230', length: '4000', worth: '26.390' } }
    ],
    ruf: [
        { name: '3400 S', src: 'sources/Cars/Ruf_3400_2000_S.mp4', data: { country: 'Deutschland', production_year: '2000', drive: 'MR', power: '310', weight: '1300', length: '4000', worth: '76.740 | Deutsche Tourenwagenmeisterschaft' } },
        { name: 'BTR', src: 'sources/Cars/Ruf_BTR_1986.mp4', data: { country: 'Deutschland', production_year: '1986', drive: 'RR', power: '375', weight: '1180', length: '4000', worth: '112.480' } },
        { name: 'CTR Yellow Bird', src: 'sources/Cars/Ruf_CTR_1987_Yellow_Bird.mp4', data: { country: 'Deutschland', production_year: '1987', drive: 'RR', power: '469', weight: '1150', length: '4290', worth: 'Boxer Spirit' } },
        { name: 'CTR 2', src: 'sources/Cars/Ruf_CTR_1996_2.mp4', data: { country: 'Deutschland', production_year: '1996', drive: '4WD', power: '520', weight: '1379', length: '4290', worth: '297.110' } },
        { name: 'RGT', src: 'sources/Cars/Ruf_RGT_2000.mp4', data: { country: 'Deutschland', production_year: '2000', drive: 'RR', power: '380', weight: '1329', length: '4000', worth: '143.250' } }
    ],
    saleen: [
        { name: 'S7', src: 'sources/Cars/Saleen_S7_2002.mp4', data: { country: 'Amerika', production_year: '2002', drive: 'MR', power: '558', weight: '1250', length: '4774', worth: '419.130' } }
    ],
    seat: [
        { name: 'Ibiza Cupra', src: 'sources/Cars/Seat_Ibiza_2004_Cupra.mp4', data: { country: 'Spanien', production_year: '2004', drive: 'FF', power: '169', weight: '1177', length: '3953', worth: '24.980' } }
    ],
    shelby: [
        { name: 'Cobra 427', src: 'sources/Cars/Shelby_Cobra_1967_427.mp4', data: { country: 'Amerika', production_year: '1967', drive: 'FR', power: '484', weight: '1068', length: '3962', worth: '530.550' } },
        { name: 'Mustang GT 350R', src: 'sources/Cars/Shelby_Mustang_1965_GT_350R.mp4', data: { country: 'Amerika', production_year: '1965', drive: 'FR', power: '311', weight: '1268', length: '4613', worth: 'Shelby Cobra Cup' } },
        { name: 'Series 1', src: 'sources/Cars/Shelby_Series_1_2003_Super_Charged.mp4', data: { country: 'Amerika', production_year: '2003', drive: 'FR', power: '324', weight: '1202', length: '4292', worth: '184.630' } }
    ],
    spoon: [
        { name: 'Civic Type R', src: 'sources/Cars/Spoon_Civic_2000_Type_R.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FF', power: '217', weight: '820', length: '4185', worth: '75.000' } },
        { name: 'Fit Race Car', src: 'sources/Cars/Spoon_Fit_2003_Race_Car.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '124', weight: '990', length: '3830', worth: '50.000' } },
        { name: 'Integra Type R', src: 'sources/Cars/Spoon_Integra_1999_Type_R.mp4', data: { country: 'Japan', production_year: '1999', drive: 'FF', power: '220', weight: '1080', length: '4380', worth: '75.000' } },
        { name: 'S2000', src: 'sources/Cars/Spoon_S2000_2000.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FR', power: '274', weight: '1100', length: '4135', worth: '85.000' } },
        { name: 'S2000 Race Car', src: 'sources/Cars/Spoon_S2000_2000_Race_Car.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FR', power: '316', weight: '1050', length: '4135', worth: '200.000' } }
    ],
    spyker: [
        { name: 'C8 Laviolette', src: 'sources/Cars/Spyker_C8_2002_Laviolette.mp4', data: { country: 'Niederlande', production_year: '2002', drive: 'MR', power: '456', weight: '1070', length: '4000', worth: '254.660' } }
    ],
    subaru: [
        { name: '360', src: 'sources/Cars/Subaru_360_1958.mp4', data: { country: 'Japan', production_year: '1958', drive: 'RR', power: '16', weight: '385', length: '2990', worth: '36.000 | 360 Rennen' } },
        { name: 'Impreza Sedan WRX STi', src: 'sources/Cars/Subaru_Impreza_1994_Sedan_WRX_STi.mp4', data: { country: 'Japan', production_year: '1994', drive: '4WD', power: '258', weight: '1230', length: '4340', worth: '~14.000' } },
        { name: 'Impreza Sedan WRX STi Version 2', src: 'sources/Cars/Subaru_Impreza_1995_Sedan_WRX_STi_Version_2.mp4', data: { country: 'Japan', production_year: '1995', drive: '4WD', power: '263', weight: '1240', length: '4340', worth: '~14.000' } },
        { name: 'Impreza Sedan WRX STi Version 3', src: 'sources/Cars/Subaru_Impreza_1996_Sedan_WRX_STi_Version_3.mp4', data: { country: 'Japan', production_year: '1996', drive: '4WD', power: '270', weight: '1250', length: '4340', worth: '~15.000' } },
        { name: 'Impreza Sedan WRX STi Version 4', src: 'sources/Cars/Subaru_Impreza_1997_Sedan_WRX_STi_Version_4.mp4', data: { country: 'Japan', production_year: '1997', drive: '4WD', power: '276', weight: '1250', length: '4340', worth: '~15.000' } },
        { name: 'Impreza Coupe 22B STi Version', src: 'sources/Cars/Subaru_Impreza_1998_Coupe_22B_STi_Version.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '290', weight: '1271', length: '4365', worth: '~25.000' } },
        { name: 'Impreza Sedan WRX STi Version 5', src: 'sources/Cars/Subaru_Impreza_1998_Sedan_WRX_STi_Version_5.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '276', weight: '1270', length: '4365', worth: '~19.000' } },
        { name: 'Impreza Coupe WRX STi Version 6', src: 'sources/Cars/Subaru_Impreza_1999_Coupe_WRX_STi_Version_6.mp4', data: { country: 'Japan', production_year: '1999', drive: '4WD', power: '276', weight: '1270', length: '4350', worth: '~19.000' } },
        { name: 'Impreza Rally Car', src: 'sources/Cars/Subaru_Impreza_1999_Rally_Car.mp4', data: { country: 'Japan', production_year: '1999', drive: '4WD', power: '290', weight: '1229', length: '4340', worth: 'Cathedral Rocks Trail 1 Normal' } },
        { name: 'Impreza Sedan WRX STi Version 6', src: 'sources/Cars/Subaru_Impreza_1999_Sedan_WRX_STi_Version_6.mp4', data: { country: 'Japan', production_year: '1999', drive: '4WD', power: '276', weight: '1270', length: '4350', worth: '~19.000' } },
        { name: 'Impreza Sports Wagon STi', src: 'sources/Cars/Subaru_Impreza_2000_Sports_Wagon_STi.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '276', weight: '1431', length: '4000', worth: '~19.000' } },
        { name: 'Impreza Rally Car', src: 'sources/Cars/Subaru_Impreza_2001_Rally_Car.mp4', data: { country: 'Japan', production_year: '2001', drive: '4WD', power: '291', weight: '1230', length: '4000', worth: 'Charmonix Rally Normal' } },
        { name: 'Impreza Rally Car Prototype', src: 'sources/Cars/Subaru_Impreza_2001_Rally_Car_Prototype.mp4', data: { country: 'Japan', production_year: '2001', drive: '4WD', power: '305', weight: '1229', length: '4000', worth: 'Capri Rally Normal' } },
        { name: 'Impreza STi ProDrive Style', src: 'sources/Cars/Subaru_Impreza_2001_STi_ProDrive_Style.mp4', data: { country: 'Japan', production_year: '2001', drive: '4WD', power: '276', weight: '1430', length: '4415', worth: '~25.000' } },
        { name: 'Impreza Sedan WRX STi GD Type 2', src: 'sources/Cars/Subaru_Impreza_2002_Sedan_WRX_STi_GD_Type_2.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '282', weight: '1440', length: '4415', worth: '28.950' } },
        { name: 'Impreza Cusco Advan', src: 'sources/Cars/Subaru_Impreza_2003_Cusco_Advan.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '508', weight: '1100', length: '4000', worth: '500.000' } },
        { name: 'Impreza Rally Car', src: 'sources/Cars/Subaru_Impreza_2003_Rally_Car.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '351', weight: '1230', length: '4000', worth: '750.000' } },
        { name: 'Impreza Sedan WRX STi Spec C GD Type 2', src: 'sources/Cars/Subaru_Impreza_2004_Sedan_WRX_STi_Spec_C_GD_Type_2.mp4', data: { country: 'Japan', production_year: '2004', drive: '4WD', power: '282', weight: '1370', length: '4000', worth: '33.920' } },
        { name: 'Legacy Touring Wagon GT-B', src: 'sources/Cars/Subaru_Legacy_1996_Touring_Wagon_GT-B.mp4', data: { country: 'Japan', production_year: '1996', drive: '4WD', power: '276', weight: '1431', length: '4680', worth: '~14.000' } },
        { name: 'Legacy B4 RSK', src: 'sources/Cars/Subaru_Legacy_2000_B4_Blitzen.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '285', weight: '1440', length: '4000', worth: '~15.000' } },
        { name: 'Legacy B4 Blitzen', src: 'sources/Cars/Subaru_Legacy_2000_B4_Blitzen.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '276', weight: '1450', length: '4000', worth: '~15.000' } },
        { name: 'Legacy B4 2.0 GT', src: 'sources/Cars/Subaru_Legacy_2003_B4_2.0_GT.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '269', weight: '1410', length: '4000', worth: '27.300' } },
        { name: 'Legacy B4 2.0 GT Spec B', src: 'sources/Cars/Subaru_Legacy_2003_B4_2.0_GT_Spec_B.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '269', weight: '1430', length: '4000', worth: '28.800' } },
        { name: 'Legacy B4 3.0 R', src: 'sources/Cars/Subaru_Legacy_2003_B4_3.0_R.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '245', weight: '1460', length: '4000', worth: '28.500' } },
        { name: 'Legacy Touring Wagon 2.0 GT', src: 'sources/Cars/Subaru_Legacy_2003_Touring_Wagon_2.0_GT.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '269', weight: '1430', length: '4000', worth: '28.800' } },
        { name: 'Legacy Touring Wagon 2.0 GT Spec B', src: 'sources/Cars/Subaru_Legacy_2003_Touring_Wagon_2.0_GT_Spec_B.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '269', weight: '1450', length: '4000', worth: '30.300' } },
        { name: 'Legacy Touring Wagon 3.0 R', src: 'sources/Cars/Subaru_Legacy_2003_Touring_Wagon_3.0_R.mp4', data: { country: 'Japan', production_year: '2003', drive: '4WD', power: '238', weight: '1480', length: '4000', worth: '30.000' } }
    ],
    spoon: [
        { name: 'Alto Works Limited', src: 'sources/Cars/Suzuki_Alto_1997_Works_Limited.mp4', data: { country: 'Japan', production_year: '1997', drive: '4WD', power: '63', weight: '710', length: '3295', worth: '~5.000' } },
        { name: 'Alto Works RS-Z', src: 'sources/Cars/Suzuki_Alto_1997_Works_RS-Z.mp4', data: { country: 'Japan', production_year: '1997', drive: '4WD', power: '61', weight: '710', length: '3295', worth: '~6.000' } },
        { name: 'Alto Lapin Turbo', src: 'sources/Cars/Suzuki_Alto_2002_Lapin_Turbo.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '57', weight: '840', length: '3395', worth: '12.400' } },
        { name: 'Cappucino EA11R', src: 'sources/Cars/Suzuki_Cappuccino_1991_EA11R.mp4', data: { country: 'Japan', production_year: '1991', drive: 'FR', power: '60', weight: '700', length: '3295', worth: '~5.000' } },
        { name: 'Cappucino EA21R', src: 'sources/Cars/Suzuki_Cappuccino_1995_EA21R.mp4', data: { country: 'Japan', production_year: '1995', drive: 'FR', power: '61', weight: '690', length: '3295', worth: '~7.000' } },
        { name: 'Escudo Dirt Trial Car', src: 'sources/Cars/Suzuki_Escudo_1998_Dirt_Trial_Car.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '981', weight: '800', length: '5050', worth: 'Yosemite Rally Schwer' } },
        { name: 'GSX-R4', src: 'sources/Cars/Suzuki_GSX-R4_2001.mp4', data: { country: 'Japan', production_year: '2001', drive: 'MR', power: '175', weight: '640', length: '3550', worth: 'Suzuki Concept Race' } },
        { name: 'Kei Works', src: 'sources/Cars/Suzuki_Kei_2002_Works.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '60', weight: '820', length: '4000', worth: '14.140' } },
        { name: 'MR Wagon Sport', src: 'sources/Cars/Suzuki_MR_2004_Wagon_Sport.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FF', power: '63', weight: '860', length: '3395', worth: '12.800' } },
        { name: 'S2 Concept', src: 'sources/Cars/Suzuki_S2_2003_Concept.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '180', weight: '1000', length: '3695', worth: 'Suzuki K-Car Cup' } },
        { name: 'Wagon R RR', src: 'sources/Cars/Suzuki_Wagon_1998_R_RR.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '61', weight: '820', length: '3395', worth: '~6.000' } }
    ],
    toms: [
        { name: 'X540 Chaser', src: 'sources/Cars/Toms_X540_2000_Chaser.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FR', power: '320', weight: '1491', length: '4000', worth: '50.000' } }
    ],
    tommy_kaira: [
        { name: 'ZZ-S', src: 'sources/Cars/Tommy_Kaira_ZZ-S_2000.mp4', data: { country: 'Japan', production_year: '2000', drive: 'MR', power: '192', weight: '689', length: '3630', worth: '59.500' } },
        { name: 'ZZII', src: 'sources/Cars/Tommy_Kaira_ZZII_2000.mp4', data: { country: 'Japan', production_year: '2000', drive: '4WD', power: '542', weight: '999', length: '4300', worth: '500.000' } }
    ],
    toyota: [
        { name: '7 Race Car', src: 'sources/Cars/Toyota_7_1970_Race_Car.mp4', data: { country: 'Japan', production_year: '1970', drive: 'MR', power: '800', weight: '620', length: '3750', worth: 'Fahrmissionen 25-29' } },
        { name: '88C-V Minolta Race Car', src: 'sources/Cars/Toyota_88C-V_1989_Minolta_Race_Car.mp4', data: { country: 'Japan', production_year: '1989', drive: 'MR', power: '919', weight: '850', length: '4000', worth: 'El Capitan 200 Meilen' } },
        { name: '2000 GT', src: 'sources/Cars/Toyota_2000_1967_GT.mp4', data: { country: 'Japan', production_year: '1967', drive: 'FR', power: '153', weight: '1120', length: '4000', worth: '160.000' } },
        { name: 'Altezza Touring Car', src: 'sources/Cars/Toyota_Altezza_2001_Touring_Car.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '306', weight: '1000', length: '4500', worth: 'Altezza Race' } },
        { name: 'bB 1.5 Z', src: 'sources/Cars/Toyota_bB_2000_1.5_Z.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FF', power: '105', weight: '1050', length: '3845', worth: '15.780' } },
        { name: 'Caldina GT-Four', src: 'sources/Cars/Toyota_Caldina_2002_GT-Four.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '247', weight: '1480', length: '4000', worth: '27.100' } },
        { name: 'Carina ED 2.0 X 4WS', src: 'sources/Cars/Toyota_Carina_1989_ED_2.0_X_4WS.mp4', data: { country: 'Japan', production_year: '1989', drive: 'FF', power: '119', weight: '1200', length: '4485', worth: '~6.000' } },
        { name: 'Celica 1600 GT', src: 'sources/Cars/Toyota_Celica_1970_1600_GT.mp4', data: { country: 'Japan', production_year: '1970', drive: 'FR', power: '110', weight: '940', length: '4000', worth: '~8.000' } },
        { name: 'Celica 2800 GT XX', src: 'sources/Cars/Toyota_Celica_1981_2800_GT_XX.mp4', data: { country: 'Japan', production_year: '1981', drive: 'FR', power: '161', weight: '1235', length: '4660', worth: '~8.000' } },
        { name: 'Celica 2000 GT-R', src: 'sources/Cars/Toyota_Celica_1986_2000_GT-R.mp4', data: { country: 'Japan', production_year: '1986', drive: 'FF', power: '151', weight: '1130', length: '4410', worth: '~7.000' } },
        { name: 'Celica GT-Four RC', src: 'sources/Cars/Toyota_Celica_1991_GT-Four_RC.mp4', data: { country: 'Japan', production_year: '1991', drive: '4WD', power: '224', weight: '1460', length: '4410', worth: '~10.000' } },
        { name: 'Celica GT-R', src: 'sources/Cars/Toyota_Celica_1991_GT-R.mp4', data: { country: 'Japan', production_year: '1991', drive: 'FF', power: '158', weight: '1310', length: '4410', worth: '~8.000' } },
        { name: 'Celica GT-Four Rally Car', src: 'sources/Cars/Toyota_Celica_1995_GT-Four_Rally_Car_ST185.mp4', data: { country: 'Japan', production_year: '1995', drive: '4WD', power: '316', weight: '1200', length: '4000', worth: 'Yosemite Rally II Mittel' } },
        { name: 'Celica GT-Four Rally Car', src: 'sources/Cars/Toyota_Celica_1995_GT-Four_Rally_Car_ST205.mp4', data: { country: 'Japan', production_year: '1995', drive: '4WD', power: '298', weight: '1200', length: '4424', worth: 'Swiss Alps Normal' } },
        { name: 'Celica SS2', src: 'sources/Cars/Toyota_Celica_1997_SS2.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FF', power: '197', weight: '1200', length: '4000', worth: '~11.000' } },
        { name: 'Celica GT-Four', src: 'sources/Cars/Toyota_Celica_1998_GT-Four.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '236', weight: '1390', length: '4000', worth: '~18.000' } },
        { name: 'Celica SS2', src: 'sources/Cars/Toyota_Celica_1999_SS2.mp4', data: { country: 'Japan', production_year: '1999', drive: 'FF', power: '179', weight: '1140', length: '4330', worth: '~14.000' } },
        { name: 'Celica Wedssport', src: 'sources/Cars/Toyota_Celica_2003_Wedssport.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '311', weight: '1050', length: '4340', worth: '500.000' } },
        { name: 'Corolla Levin GT Apex', src: 'sources/Cars/Toyota_Corolla_1983_Levin_1600_GT_Apex.mp4', data: { country: 'Japan', production_year: '1983', drive: 'FR', power: '127', weight: '940', length: '4180', worth: '~5.000' } },
        { name: 'Corolla Levin BZ-R', src: 'sources/Cars/Toyota_Corolla_1998_Levin_BZ-R.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FF', power: '172', weight: '1080', length: '4305', worth: '12.200' } },
        { name: 'Corolla Rally Car', src: 'sources/Cars/Toyota_Corolla_1998_Rally_Car.mp4', data: { country: 'Japan', production_year: '1998', drive: '4WD', power: '300', weight: '1229', length: '4100', worth: '750.000' } },
        { name: 'Corolla RunX Aero Tourer', src: 'sources/Cars/Toyota_Corolla_2002_RunX_Aero_Tourer.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FF', power: '187', weight: '1160', length: '4175', worth: '20.080' } },
        { name: 'GT-One Race Car', src: 'sources/Cars/Toyota_GT-One_1999_Race_Car.mp4', data: { country: 'Japan', production_year: '1999', drive: 'MR', power: '764', weight: '900', length: '4840', worth: '4.500.000 | ~3.000.000' } },
        { name: 'GT-One Race Car Black Edition', src: 'sources/Cars/Toyota_GT-One_1999_Race_Car_Black_Edition.mp4', data: { country: 'Japan', production_year: '1999', drive: 'MR', power: '764', weight: '900', length: '4840', worth: '~4.500.000' } },
        { name: 'ist 1.5 S', src: 'sources/Cars/Toyota_ist_2002_1.5_S.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FF', power: '107', weight: '1020', length: '3855', worth: '16.000' } },
        { name: 'MR2 G', src: 'sources/Cars/Toyota_MR2_1986_G.mp4', data: { country: 'Japan', production_year: '1986', drive: 'MR', power: '128', weight: '1120', length: '3925', worth: '~6.000' } },
        { name: 'MR2 G-Limited Super Charger', src: 'sources/Cars/Toyota_MR2_1986_G-Limited_Super_Charger.mp4', data: { country: 'Japan', production_year: '1986', drive: 'MR', power: '143', weight: '1120', length: '3925', worth: '~6.000' } },
        { name: 'MR2 G-Limited', src: 'sources/Cars/Toyota_MR2_1997_G-Limited.mp4', data: { country: 'Japan', production_year: '1997', drive: 'MR', power: '197', weight: '1211', length: '4170', worth: '~15.000' } },
        { name: 'MR2 GT-S', src: 'sources/Cars/Toyota_MR2_1997_GT-S.mp4', data: { country: 'Japan', production_year: '1997', drive: 'MR', power: '241', weight: '1270', length: '4170', worth: '~14.000' } },
        { name: 'MR2 S Edition', src: 'sources/Cars/Toyota_MR2_1999_S_Edition.mp4', data: { country: 'Japan', production_year: '1999', drive: 'MR', power: '138', weight: '970', length: '3895', worth: '~13.000' } },
        { name: 'MR2 Super Autobacs Apex', src: 'sources/Cars/Toyota_MR2_2000_Super_Autobacs_Apex.mp4', data: { country: 'Japan', production_year: '2000', drive: 'MR', power: '300', weight: '1125', length: '3885', worth: '500.000' } },
        { name: 'MR2 V Edition', src: 'sources/Cars/Toyota_MR2_2002_V_Edition.mp4', data: { country: 'Japan', production_year: '2002', drive: 'MR', power: '137', weight: '980', length: '3895', worth: '21.800' } },
        { name: 'MTRC', src: 'sources/Cars/Toyota_MTRC_2004.mp4', data: { country: 'Japan', production_year: '2004', drive: '4WD', power: '266', weight: '1200', length: '4060', worth: '4WD-Challenge' } },
        { name: 'Prius G', src: 'sources/Cars/Toyota_Prius_2002_G.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FF', power: '71', weight: '1220', length: '4310', worth: '~17.000' } },
        { name: 'Prius G Touring Selection', src: 'sources/Cars/Toyota_Prius_2003_G_Touring_Selection.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '75', weight: '1290', length: '4445', worth: '25.700' } },
        { name: 'RSC', src: 'sources/Cars/Toyota_RSC_2001.mp4', data: { country: 'Japan', production_year: '2001', drive: '4WD', power: '267', weight: '1349', length: '4115', worth: 'Whistler Eis-Rennen Leicht' } },
        { name: 'RSC Rally Raid Car', src: 'sources/Cars/Toyota_RSC_2002_Rally_Raid_Car.mp4', data: { country: 'Japan', production_year: '2002', drive: '4WD', power: '423', weight: '1000', length: '4115', worth: 'Capri Rally Leicht' } },
        { name: 'Sera', src: 'sources/Cars/Toyota_Sera_1992.mp4', data: { country: 'Japan', production_year: '1992', drive: 'FF', power: '110', weight: '910', length: '3860', worth: '~10.000' } },
        { name: 'Sports 800', src: 'sources/Cars/Toyota_Sports_1965_800.mp4', data: { country: 'Japan', production_year: '1965', drive: 'FR', power: '43', weight: '580', length: '3610', worth: '32.000' } },
        { name: 'Sprinter Trueno BZ-R', src: 'sources/Cars/Toyota_Sprinter_Trueno_1998_BZ-R.mp4', data: { country: 'Japan', production_year: '1998', drive: 'FF', power: '172', weight: '1080', length: '4305', worth: '~12.000' } },
        { name: 'Starlet Glanza V', src: 'sources/Cars/Toyota_Starlet_1997_Glanza_V.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FF', power: '133', weight: '920', length: '3790', worth: '~5.000' } },
        { name: 'Supra 3.0 GT', src: 'sources/Cars/Toyota_Supra_1988_3.0_GT_Turbo_A.mp4', data: { country: 'Japan', production_year: '1988', drive: 'FR', power: '266', weight: '1530', length: '4620', worth: '~14.000' } },
        { name: 'Supra 2.5 GT Twin Turbo', src: 'sources/Cars/Toyota_Supra_1990_2.5_GT_Twin_Turbo_R.mp4', data: { country: 'Japan', production_year: '1990', drive: 'FR', power: '272', weight: '1520', length: '4620', worth: '~12.000' } },
        { name: 'Supra RZ', src: 'sources/Cars/Toyota_Supra_1997_RZ.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FR', power: '325', weight: '1510', length: '4520', worth: '~22.000' } },
        { name: 'Supra SZ-R', src: 'sources/Cars/Toyota_Supra_1997_SZ-R.mp4', data: { country: 'Japan', production_year: '1997', drive: 'FR', power: '221', weight: '1451', length: '4520', worth: '~12.000' } },
        { name: "Supra Castrol Tom's", src: 'sources/Cars/Toyota_Supra_2000_Castrol_Toms.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FR', power: '470', weight: '1100', length: '4520', worth: '1.350.000' } },
        { name: 'Supra Denso Sard', src: 'sources/Cars/Toyota_Supra_2000_Denso_Sard.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FR', power: '470', weight: '1100', length: '4520', worth: '1.350.000' } },
        { name: 'Supra Au Cerumo', src: 'sources/Cars/Toyota_Supra_2001_Au_Cerumo.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '471', weight: '1100', length: '4520', worth: '1.350.000' } },
        { name: "Supra Castrol Tom's", src: 'sources/Cars/Toyota_Supra_2001_Castrol_Toms.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '471', weight: '1100', length: '4520', worth: '1.350.000' } },
        { name: 'Supra Esso Ultraflo', src: 'sources/Cars/Toyota_Supra_2001_Esso_Ultraflo.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FR', power: '495', weight: '1100', length: '4520', worth: '1.350.000' } },
        { name: "Supra Woodone Tom's", src: 'sources/Cars/Toyota_Supra_2003_Woodone_Toms.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FR', power: '503', weight: '1100', length: '4520', worth: '1.350.000' } },
        { name: 'Tacoma X-Runner', src: 'sources/Cars/Toyota_Tacoma_2004_X-Runner.mp4', data: { country: 'Japan', production_year: '2004', drive: 'FR', power: '245', weight: '1687', length: '5285', worth: '24.520' } },
        { name: 'Voltz S', src: 'sources/Cars/Toyota_Voltz_2002_S.mp4', data: { country: 'Japan', production_year: '2002', drive: 'FF', power: '127', weight: '1250', length: '4000', worth: '17.880' } },
        { name: 'Will VS', src: 'sources/Cars/Toyota_Will_2001_VS.mp4', data: { country: 'Japan', production_year: '2001', drive: 'FF', power: '187', weight: '1190', length: '4385', worth: '20.500' } },
        { name: 'Yaris F', src: 'sources/Cars/Toyota_Yaris_1999_F.mp4', data: { country: 'Japan', production_year: '1999', drive: 'FF', power: '69', weight: '920', length: '3790', worth: '~6.000' } },
        { name: 'Yaris RS 1.5', src: 'sources/Cars/Toyota_Yaris_2000_RS_1.5.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FF', power: '108', weight: '940', length: '3630', worth: '14.530' } },
        { name: 'Yaris RS Turbo', src: 'sources/Cars/Toyota_Yaris_2000_RS_Turbo.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FF', power: '133', weight: '980', length: '3630', worth: '18.880' } },
        { name: 'Yaris U Euro', src: 'sources/Cars/Toyota_Yaris_2000_U_Euro.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FF', power: '84', weight: '850', length: '3630', worth: '~6.000' } }
    ],
    trd: [
        { name: 'Celica Modellista Sports M', src: 'sources/Cars/TRD_Celica_2000_Modellista_Sports_M.mp4', data: { country: 'Japan', production_year: '2000', drive: 'FF', power: '200', weight: '1141', length: '4335', worth: '25.500' } }
    ],
    trial: [
        { name: 'Celica SS-II', src: 'sources/Cars/Trial_Celica_2003_SS-II.mp4', data: { country: 'Japan', production_year: '2003', drive: 'FF', power: '285', weight: '1140', length: '4335', worth: '100.000' } }
    ],
    triumph: [
        { name: 'Spitfire 1500', src: 'sources/Cars/Triumph_Spitfire_1974_1500.mp4', data: { country: 'Grossbritannien', production_year: '1974', drive: 'FR', power: '72', weight: '809', length: '3780', worth: '17.200' } }
    ],
    tvr: [
        { name: 'Cerbera Speed 6', src: 'sources/Cars/TVR_Cerbera_1997_Speed_6.mp4', data: { country: 'Grossbritannien', production_year: '1997', drive: 'FR', power: '355', weight: '1130', length: '4000', worth: '~40.000' } },
        { name: 'Cerbera Speed 12', src: 'sources/Cars/TVR_Cerbera_2000_Speed_12.mp4', data: { country: 'Grossbritannien', production_year: '2000', drive: 'FR', power: '809', weight: '1021', length: '4620', worth: '259.970' } },
        { name: 'Griffith 500', src: 'sources/Cars/TVR_Griffith_1994_500.mp4', data: { country: 'Grossbritannien', production_year: '1994', drive: 'FR', power: '330', weight: '1059', length: '3892', worth: '~21.000' } },
        { name: 'T350 C', src: 'sources/Cars/TVR_T350_2003_C.mp4', data: { country: 'Grossbritannien', production_year: '2003', drive: 'FR', power: '350', weight: '1187', length: '3920', worth: '74.830' } },
        { name: 'Tamora', src: 'sources/Cars/TVR_Tamora_2002.mp4', data: { country: 'Grossbritannien', production_year: '2002', drive: 'FR', power: '334', weight: '1060', length: '3925', worth: '70.940' } },
        { name: 'Tuscan Speed 6', src: 'sources/Cars/TVR_Tuscan_2000_Speed_6.mp4', data: { country: 'Grossbritannien', production_year: '2000', drive: 'FR', power: '360', weight: '1100', length: '4235', worth: '94.050' } },
        { name: 'V8 S', src: 'sources/Cars/TVR_V8_1991_S.mp4', data: { country: 'Grossbritannien', production_year: '1991', drive: 'FR', power: '246', weight: '1050', length: '4000', worth: '~21.000' } }
    ],
    vauxhall: [
        { name: 'Astra Touring Car', src: 'sources/Cars/Vauxhall_Astra_2000_Touring_Car.mp4', data: { country: 'Grossbritannien', production_year: '2000', drive: 'FR', power: '460', weight: '1000', length: '4000', worth: '550.000' } },
        { name: 'Calibra Touring Car', src: 'sources/Cars/Vauxhall_Calibra_1994_Touring_Car.mp4', data: { country: 'Grossbritannien', production_year: '1994', drive: '4WD', power: '427', weight: '1059', length: '4000', worth: '1.750.000' } },
        { name: 'Corsa Comfort 1.4i', src: 'sources/Cars/Vauxhall_Corsa_2001_Comfort_1.4i.mp4', data: { country: 'Grossbritannien', production_year: '2001', drive: 'FF', power: '84', weight: '998', length: '4000', worth: '17.960' } },
        { name: 'Tigra 1.6i', src: 'sources/Cars/Vauxhall_Tigra_1999_1.6i.mp4', data: { country: 'Grossbritannien', production_year: '1999', drive: 'FF', power: '104', weight: '1032', length: '4000', worth: '29.140 | ~11.000' } },
        { name: 'Vectra 3.2 V6', src: 'sources/Cars/Vauxhall_Vectra_2003_3.2_V6.mp4', data: { country: 'Grossbritannien', production_year: '2003', drive: 'FF', power: '211', weight: '1510', length: '4610', worth: '36.530' } },
        { name: 'VX220', src: 'sources/Cars/Vauxhall_VX220_2000.mp4', data: { country: 'Grossbritannien', production_year: '2000', drive: 'MR', power: '145', weight: '850', length: '3790', worth: '44.690' } },
        { name: 'VX220 Turbo', src: 'sources/Cars/Vauxhall_VX220_2000_Turbo.mp4', data: { country: 'Grossbritannien', production_year: '2000', drive: 'MR', power: '197', weight: '1005', length: '3796', worth: '49.550' } }
    ],
    volkswagen: [
        { name: 'Beetle 1100', src: 'sources/Cars/Volkswagen_Beetle_1949_1100.mp4', data: { country: 'Deutschland', production_year: '1949', drive: 'RR', power: '23', weight: '720', length: '4070', worth: 'Beetle Cup' } },
        { name: 'Beetle 2.0', src: 'sources/Cars/Volkswagen_Beetle_2000_2.0.mp4', data: { country: 'Deutschland', production_year: '2000', drive: 'FF', power: '115', weight: '1228', length: '4081', worth: '25.980' } },
        { name: 'Beetle Cup Car', src: 'sources/Cars/Volkswagen_Beetle_2000_Cup_Car.mp4', data: { country: 'Deutschland', production_year: '2000', drive: 'FF', power: '195', weight: '1169', length: '4081', worth: '50.000' } },
        { name: 'Beetle RSi', src: 'sources/Cars/Volkswagen_Beetle_2000_RSi.mp4', data: { country: 'Deutschland', production_year: '2000', drive: '4WD', power: '225', weight: '1515', length: '4081', worth: '94.050' } },
        { name: 'Bora V6 4Motion', src: 'sources/Cars/Volkswagen_Bora_2001_V6_4Motion.mp4', data: { country: 'Deutschland', production_year: '2001', drive: '4WD', power: '194', weight: '1540', length: '4000', worth: '38.910' } },
        { name: 'Golf 1 GTI', src: 'sources/Cars/Volkswagen_Golf_1976_1_GTI.mp4', data: { country: 'Deutschland', production_year: '1976', drive: 'FF', power: '104', weight: '820', length: '4000', worth: 'GTI Cup' } },
        { name: 'Golf 4 GTI', src: 'sources/Cars/Volkswagen_Golf_2001_4_GTI.mp4', data: { country: 'Deutschland', production_year: '2001', drive: 'FF', power: '148', weight: '1280', length: '4149', worth: '~21.000' } },
        { name: 'Golf 4 R32', src: 'sources/Cars/Volkswagen_Golf_2003_4_R32.mp4', data: { country: 'Deutschland', production_year: '2003', drive: '4WD', power: '230', weight: '1460', length: '4165', worth: '43.240' } },
        { name: 'Golf 5 GTI', src: 'sources/Cars/Volkswagen_Golf_2005_5_GTI.mp4', data: { country: 'Deutschland', production_year: '2005', drive: 'FF', power: '200', weight: '1336', length: '4204', worth: '32.750' } },
        { name: 'Karmann Ghia Coupe', src: 'sources/Cars/Volkswagen_Karmann_1968_Ghia_Coupe.mp4', data: { country: 'Deutschland', production_year: '1968', drive: 'RR', power: '41', weight: '840', length: '4140', worth: 'Lupo Cup' } },
        { name: 'Lupo Cup Car', src: 'sources/Cars/Volkswagen_Lupo_2000_Cup_Car.mp4', data: { country: 'Deutschland', production_year: '2000', drive: 'FF', power: '119', weight: '839', length: '4000', worth: '50.000' } },
        { name: 'Lupo GTI', src: 'sources/Cars/Volkswagen_Lupo_2001_GTI.mp4', data: { country: 'Deutschland', production_year: '2001', drive: 'FF', power: '123', weight: '975', length: '4000', worth: '24.160' } },
        { name: 'Lupo 1.4', src: 'sources/Cars/Volkswagen_Lupo_2002_1.4.mp4', data: { country: 'Deutschland', production_year: '2002', drive: 'FF', power: '94', weight: '933', length: '4000', worth: '15.490' } },
        { name: 'Lupo GTI Cup Car', src: 'sources/Cars/Volkswagen_Lupo_2003_GTI_Cup_Car.mp4', data: { country: 'Deutschland', production_year: '2003', drive: 'FF', power: '125', weight: '1010', length: '4000', worth: '50.000' } },
        { name: 'Polo 4 GTI', src: 'sources/Cars/Volkswagen_Polo_2001_4_GTI.mp4', data: { country: 'Deutschland', production_year: '2001', drive: 'FF', power: '110', weight: '1090', length: '4000', worth: '26.720' } },
        { name: 'W12 Nardo Concept', src: 'sources/Cars/Volkswagen_W12_2001_Nardo_Concept.mp4', data: { country: 'Deutschland', production_year: '2001', drive: 'MR', power: '600', weight: '1300', length: '4400', worth: 'Like The Wind' } }
    ],
    volvo: [
        { name: '240 GLT Estate', src: 'sources/Cars/Volvo_240_1988_GLT_Estate.mp4', data: { country: 'Schweden', production_year: '1988', drive: 'FR', power: '118', weight: '1890', length: '4790', worth: '~6.000 | Euro Hot Hatch Liga' } },
        { name: 'S60 T5 Sport', src: 'sources/Cars/Volvo_S60_2003_T5_Sport.mp4', data: { country: 'Schweden', production_year: '2003', drive: 'FF', power: '230', weight: '1550', length: '4575', worth: '35.580' } }
    ],
};

const logos = document.querySelectorAll('.showroom img');
const videoContainer = document.getElementById('showroom_videos');
let currentIndex = 0;
let currentBrand = null;

logos.forEach(logo => {
    logo.addEventListener('click', () => {
        logos.forEach(l => l.classList.remove('active'));
        logo.classList.add('active');
        currentBrand = logo.getAttribute('data-brand');
        const cars = showroomVideos[currentBrand] || [];
        if (cars.length > 0) {cars.sort((a, b) => a.name.localeCompare(b.name));currentIndex = 0;renderSlider();}
        else {videoContainer.innerHTML = '<p>Für diese Marke sind noch keine Fahrzeuge verfügbar.</p>';}
    });
});

function renderSlider() {
    const cars = showroomVideos[currentBrand];
    const car = cars[currentIndex];

    videoContainer.innerHTML = `
    <div class='slider-container'>
        <div class='slider-video-wrapper'>
            ${cars.length > 1 ? `
                <div class='slider-btn left' onclick='prevCar()'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                        <path d='M15 18l-6-6 6-6' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/>
                    </svg>
                </div>
            ` : ''}
            <video class='slider-video' loop autoplay muted><source src='${car.src}' type='video/mp4'>Dein Browser unterstützt kein HTML5 Video.</video>
            ${cars.length > 1 ? `
                <div class='slider-btn right' onclick='nextCar()'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                        <path d='M9 6l6 6-6 6' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/>
                    </svg>
                </div>
            ` : ''}
        </div>
        <div class='slider-details'>
            <table class='car_info_table'>
                <tr><td class='car_info_1'>Land:</td><td class='car_info_2'>${car.data.country}</td></tr>
                <tr><td class='car_info_1'>Baujahr:</td><td class='car_info_2'>${car.data.production_year}</td></tr>
                <tr><td class='car_info_1'>Antrieb:</td><td class='car_info_2'>${car.data.drive}</td></tr>
                <tr><td class='car_info_1'>Leistung:</td><td class='car_info_2'>${car.data.power} PS</td></tr>
                <tr><td class='car_info_1'>Gewicht:</td><td class='car_info_2'>${car.data.weight} kg</td></tr>
                <tr><td class='car_info_1'>Länge:</td><td class='car_info_2'>${car.data.length} mm</td></tr>
                <tr><td class='car_info_1'>Preis:</td><td class='car_info_2'>${car.data.worth} Credits</td></tr>
            </table>
        </div>
    </div>
    `;
}

function prevCar() {const cars = showroomVideos[currentBrand];currentIndex = (currentIndex - 1 + cars.length) % cars.length;renderSlider();}
function nextCar() {const cars = showroomVideos[currentBrand];currentIndex = (currentIndex + 1) % cars.length;renderSlider();}
function scrollShowroom(direction) {const showroom = document.getElementById('showroom');const scrollAmount = 200;showroom.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });}