const showroomVideos = {
    ac_cars: {
        manufacturer: 'AC Cars', country: 'Grossbritannien',            // 1
        cars: [
            { name: '427 S/C',                                          src: 'cars/AC_Cars/427_SC_1966.mp4',                                            data: { production_year: '1966', drive: 'FR',  power: '486', weight: '1311', length: '3962', worth: '423.200 Credits' } },
        ],
    },
    acura: {
        manufacturer: 'Acura', country: 'Japan',                        // 7
        cars: [
            { name: '3.2 CL Type S',                                    src: 'cars/Acura/CL_2001_3.2_Type-S.mp4',                                       data: { production_year: '2001', drive: 'FF',  power: '264', weight: '1592', length: '4875', worth: '~27.000 Credits' } },
            { name: '3.2 CL Type S',                                    src: 'cars/Acura/CL_2003_3.2_Type-S.mp4',                                       data: { production_year: '2003', drive: 'FF',  power: '266', weight: '1563', length: '4875', worth: '32.420 Credits' } },
            { name: 'Integra Type R',                                   src: 'cars/Acura/Integra_2001_Type_R.mp4',                                      data: { production_year: '2001', drive: 'FF',  power: '200', weight: '1197', length: '4379', worth: '~19.000 Credits' } },
            { name: 'NSX',                                              src: 'cars/Acura/NSX_1991.mp4',                                                 data: { production_year: '1991', drive: 'MR',  power: '271', weight: '1365', length: '4405', worth: '~28.000 Credits' } },
            { name: 'NSX Coupe',                                        src: 'cars/Acura/NSX_1997_Coupe.mp4',                                           data: { production_year: '1997', drive: 'MR',  power: '294', weight: '1435', length: '4425', worth: '~35.000 Credits' } },
            { name: 'NSX',                                              src: 'cars/Acura/NSX_2004.mp4',                                                 data: { production_year: '2004', drive: 'MR',  power: '285', weight: '1430', length: '4425', worth: '94.440 Credits' } },
            { name: 'RSX Type S',                                       src: 'cars/Acura/RSX_2004_Type-S.mp4',                                          data: { production_year: '2004', drive: 'FF',  power: '202', weight: '1255', length: '4374', worth: '24.740 Credits' } },
        ],
    },
    alfa_romeo: {
        manufacturer: 'Alfa Romeo', country: 'Italien',                 // 11
        cars: [
            { name: '147 2.0 Twinspark',                                src: 'cars/Alfa_Romeo/147_2002_2.0_Twinspark.mp4',                              data: { production_year: '2002', drive: 'FF',  power: '150', weight: '1280', length: '4166', worth: '30.590 Credits' } },
            { name: '147 GTA',                                          src: 'cars/Alfa_Romeo/147_2002_GTA.mp4',                                        data: { production_year: '2002', drive: 'FF',  power: '250', weight: '1360', length: '4191', worth: '48.040 Credits' } },
            { name: '155 2.5 V6 TI',                                    src: 'cars/Alfa_Romeo/155_1993_2.5_V6_TI.mp4',                                  data: { production_year: '1993', drive: '4WD', power: '420', weight: '1010', length: '4572', worth: 'La Festa Italiano' } },
            { name: '156 2.5 V6 24V',                                   src: 'cars/Alfa_Romeo/156_1998_2.5_V6_24V.mp4',                                 data: { production_year: '1998', drive: 'FF',  power: '193', weight: '1320', length: '4420', worth: '~27.000 Credits' } },
            { name: '166 2.5 V6 24V Sportronic',                        src: 'cars/Alfa_Romeo/166_1998_2.5_V6_24V_Sportronic.mp4',                      data: { production_year: '1998', drive: 'FF',  power: '193', weight: '1520', length: '4699', worth: '~27.000 Credits' } },
            { name: 'Giulia Sprint Speciale',                           src: 'cars/Alfa_Romeo/Giulia_1963_Sprint_Speciale.mp4',                         data: { production_year: '1963', drive: 'FR',  power: '114', weight: '950',  length: '4115', worth: '1000 Meilen' } },
            { name: 'Giulia Sprint GTA',                                src: 'cars/Alfa_Romeo/Giulia_1965_Sprint_GTA.mp4',                              data: { production_year: '1965', drive: 'FR',  power: '115', weight: '745',  length: '4064', worth: 'GTA Cup' } },
            { name: 'GT 3.2 V6 24V',                                    src: 'cars/Alfa_Romeo/GT_2004_3.2_V6_24V.mp4',                                  data: { production_year: '2004', drive: 'FF',  power: '232', weight: '1347', length: '4470', worth: '39.010 Credits' } },
            { name: 'GTV 3.0 V6 24V',                                   src: 'cars/Alfa_Romeo/GTV_2001_3.0_V6_24V.mp4',                                 data: { production_year: '2001', drive: 'FF',  power: '219', weight: '1416', length: '4267', worth: '49.060 Credits' } },
            { name: 'Spider Duetto',                                    src: 'cars/Alfa_Romeo/Spider_1966_Duetto.mp4',                                  data: { production_year: '1966', drive: 'FR',  power: '110', weight: '960',  length: '4242', worth: '35.300 Credits' } },
            { name: 'Spider 3.0i V6 24V',                               src: 'cars/Alfa_Romeo/Spider_2001_3.0i_V6_24V.mp4',                             data: { production_year: '2001', drive: 'FF',  power: '219', weight: '1450', length: '4267', worth: '51.190 Credits' } },
        ],
    },
    alpine: {
        manufacturer: 'Alpine', country: 'Frankreich',                  // 2
        cars: [
            { name: 'A110 1600 S',                                      src: 'cars/Alpine/A110_1973_1600_S.mp4',                                        data: { production_year: '1973', drive: 'RR',  power: '141', weight: '715',  length: '3850', worth: 'Renault Alpine Cup' } },
            { name: 'A310 1600 VE',                                     src: 'cars/Alpine/A310_1973_1600_VE.mp4',                                       data: { production_year: '1973', drive: 'RR',  power: '125', weight: '930',  length: '4166', worth: 'George V Rallye - Leicht' } },
        ],
    },
    amuse: {
        manufacturer: 'Amuse', country: 'Japan',                        // 4
        cars: [
            { name: 'Carbon R',                                         src: 'cars/Amuse/Carbon_2004_R.mp4',                                            data: { production_year: '2004', drive: 'FR',  power: '603', weight: '1123', length: '4730', worth: '250.000 Credits' } },
            { name: 'S2000 Street Version',                             src: 'cars/Amuse/S2000_2004_Street_Version.mp4',                                data: { production_year: '2004', drive: 'FR',  power: '254', weight: '1189', length: '4154', worth: '50.000 Credits' } },
            { name: 'S2000 R1',                                         src: 'cars/Amuse/S2000_2004_R1.mp4',                                            data: { production_year: '2004', drive: 'FR',  power: '263', weight: '1120', length: '4154', worth: '150.000 Credits' } },
            { name: 'S2000 GT1',                                        src: 'cars/Amuse/S2000_2004_GT1.mp4',                                           data: { production_year: '2004', drive: 'FR',  power: '510', weight: '1179', length: '4730', worth: '250.000 Credits' } },
        ],
    },
    aston_martin: {
        manufacturer: 'Aston Martin', country: 'Grossbritannien',       // 4
        cars: [
            { name: 'DB7 Vantage Coupe',                                src: 'cars/Aston_Martin/DB7_2000_Vantage_Coupe.mp4',                            data: { production_year: '2000', drive: 'FR',  power: '426', weight: '1775', length: '4674', worth: '164.260 Credits' } },
            { name: 'DB9 Coupe',                                        src: 'cars/Aston_Martin/DB9_2003_Coupe.mp4',                                    data: { production_year: '2003', drive: 'FR',  power: '456', weight: '1710', length: '4699', worth: '164.470 Credits | Aston Martin Carnival' } },
            { name: 'V8 Vantage',                                       src: 'cars/Aston_Martin/V8_1999_Vantage.mp4',                                   data: { production_year: '1999', drive: 'FR',  power: '567', weight: '1970', length: '4724', worth: '~291.199 Credits' } },
            { name: 'Vanquish',                                         src: 'cars/Aston_Martin/Vanquish_2004.mp4',                                     data: { production_year: '2004', drive: 'FR',  power: '466', weight: '1835', length: '4648', worth: '238.750 Credits' } },
        ],
    },
    audi: {
        manufacturer: 'Audi', country: 'Deutschland',                   // 18
        cars: [
            { name: 'A2 1.4',                                           src: 'cars/Audi/A2_2002_1.4.mp4',                                               data: { production_year: '2002', drive: 'FF',  power: '75', weight: '920',  length: '3826', worth: '22.400 Credits' } },
            { name: 'S3',                                               src: 'cars/Audi/A3_2002_S.mp4',                                                 data: { production_year: '2002', drive: '4WD', power: '213', weight: '1420', length: '4159', worth: '41.070 Credits' } },
            { name: 'A3 3.2 Quattro',                                   src: 'cars/Audi/A3_2003_3.2_Quattro.mp4',                                       data: { production_year: '2003', drive: '4WD', power: '250', weight: '1495', length: '4203', worth: '42.490 Credits' } },
            { name: 'S4',                                               src: 'cars/Audi/A4_1998_S.mp4',                                                 data: { production_year: '1998', drive: '4WD', power: '265', weight: '1510', length: '4483', worth: '~46.000 Credits' } },
            { name: 'RS4 Avant',                                        src: 'cars/Audi/A4_2001_RS_Avant.mp4',                                          data: { production_year: '2001', drive: '4WD', power: '385', weight: '1619', length: '4525', worth: '41.380 Credits' } },
            { name: 'S4',                                               src: 'cars/Audi/A4_2003_S.mp4',                                                 data: { production_year: '2003', drive: '4WD', power: '346', weight: '1599', length: '4575', worth: '55.430 Credits' } },
            { name: 'A4 Touring Car',                                   src: 'cars/Audi/A4_2004_Touring_Car.mp4',                                       data: { production_year: '2004', drive: 'FR',  power: '461', weight: '1080', length: '4344', worth: '450.000 Credits' } },
            { name: 'RS6',                                              src: 'cars/Audi/A6_2002_RS.mp4',                                                data: { production_year: '2002', drive: '4WD', power: '453', weight: '1839', length: '4858', worth: '117.060 Credits' } },
            { name: 'RS6 Avant',                                        src: 'cars/Audi/A6_2002_RS_Avant.mp4',                                          data: { production_year: '2002', drive: '4WD', power: '453', weight: '1880', length: '4852', worth: '117.060 Credits' } },
            { name: 'Auto Union V16 Type C Streamline',                 src: 'cars/Audi/Auto_Union_V16_1937_Type_C_Streamline.mp4',                     data: { production_year: '1937', drive: 'MR',  power: '520', weight: '1000', length: '5000', worth: '500.000 Credits | Grand Valley 300 km' } },
            { name: 'Le Mans Quattro',                                  src: 'cars/Audi/Le_Mans_2003_Quattro.mp4',                                      data: { production_year: '2003', drive: '4WD', power: '641', weight: '1531', length: '4370', worth: 'Tourist Trophy' } },
            { name: 'Nuvolari Quattro',                                 src: 'cars/Audi/Nuvolari_2003_Quattro.mp4',                                     data: { production_year: '2003', drive: '4WD', power: '608', weight: '1549', length: '4370', worth: '25% Spielfortschritt' } },
            { name: 'Pikes Peak Quattro',                               src: 'cars/Audi/Pikes_Peak_2003_Quattro.mp4',                                   data: { production_year: '2003', drive: '4WD', power: '507', weight: '1901', length: '5000', worth: 'A3 Cup' } },
            { name: 'Quattro',                                          src: 'cars/Audi/Quattro_1982.mp4#t=3',                                          data: { production_year: '1982', drive: '4WD', power: '203', weight: '1290', length: '4000', worth: '90.360 Credits' } },
            { name: 'R8 Race Car',                                      src: 'cars/Audi/R8_2001_Race_Car.mp4',                                          data: { production_year: '2001', drive: 'MR',  power: '795', weight: '899',  length: '4000', worth: '4.500.000 Credits | Circuit De La Sarthe I 24h' } },
            { name: 'TT Coupe 1.8T Quattro',                            src: 'cars/Audi/TT_2000_Coupe_1.8T_Quattro.mp4',                                data: { production_year: '2000', drive: '4WD', power: '225', weight: '1395', length: '4041', worth: '47.700 Credits' } },
            { name: 'TT Coupe 3.2 Quattro',                             src: 'cars/Audi/TT_2003_Coupe_3.2_Quattro.mp4',                                 data: { production_year: '2003', drive: '4WD', power: '244', weight: '1520', length: '4041', worth: '57.740 Credits' } },
            { name: 'TT-R Touring Car',                                 src: 'cars/Audi/TT_2002_R_Touring_Car.mp4',                                     data: { production_year: '2002', drive: 'FR',  power: '470', weight: '1080', length: '4600', worth: '550.000 Credits | Nürburgring 4h' } },
        ],
    },
    asl: {
        manufacturer: 'ASL', country: 'Japan',                          // 2
        cars: [
            { name: 'Garaiya',                                          src: 'cars/ASL/Garaiya_2002.mp4',                                               data: { production_year: '2002', drive: 'MR',  power: '201', weight: '799',  length: '3775', worth: '65.000 Credits' } },
            { name: 'Garaiya ARTA JGTC',                                src: 'cars/ASL/Garaiya_2002_ARTA_JGTC.mp4',                                     data: { production_year: '2003', drive: 'MR',  power: '323', weight: '1125', length: '3775', worth: '500.000 Credits' } },
        ],
    },
    autobianchi: {
        manufacturer: 'Autobianchi', country: 'Italien',                // 1
        cars: [
            { name: 'A112 Abarth',                                      src: 'cars/Autobianchi/A112_1979_Abarth.mp4',                                   data: { production_year: '1979', drive: 'FF',  power: '71', weight: '700',  length: '3270', worth: 'Sunday Cup' } },
        ],
    },
    bentley: {
        manufacturer: 'Bentley', country: 'Grossbritannien',            // 1
        cars: [
            { name: 'Speed 8',                                          src: 'cars/Bentley/Speed_8_2003.mp4',                                           data: { production_year: '2003', drive: 'MR',  power: '797', weight: '900',  length: '4645', worth: 'Circuit De La Sarthe II 24h' } },
        ],
    },
    blitz: {
        manufacturer: 'Blitz', country: 'Japan',                        // 1
        cars: [
            { name: 'ER34 D1 Spec',                                     src: 'cars/Blitz/ER34_2004_D1_Spec.mp4',                                        data: { production_year: '2004', drive: 'FR',  power: '475', weight: '1179', length: '4444', worth: '200.000 Credits' } },
        ],
    },
    bmw: {
        manufacturer: 'BMW', country: 'Deutschland',                    // 14
        cars: [
            { name: '120d',                                             src: 'cars/BMW/1_2004_20d.mp4',                                                 data: { production_year: '2004', drive: 'FR',  power: '164', weight: '1415', length: '4227', worth: '33.020 Credits' } },
            { name: '120i',                                             src: 'cars/BMW/1_2004_20i.mp4',                                                 data: { production_year: '2004', drive: 'FR',  power: '152', weight: '1335', length: '4227', worth: '31.940 Credits' } },
            { name: 'M3 GTR Race Car',                                  src: 'cars/BMW/3_2001_M_GTR_Race_Car.mp4',                                      data: { production_year: '2001', drive: 'FR',  power: '450', weight: '1120', length: '4617', worth: 'Schwarzwald Liga A' } },
            { name: '320i Touring Car',                                 src: 'cars/BMW/3_2003_20i_Touring_Car.mp4',                                     data: { production_year: '2003', drive: 'FR',  power: '261', weight: '1141', length: '4000', worth: '450.000 Credits' } },
            { name: 'M3 CSL',                                           src: 'cars/BMW/3_2003_M_CSL.mp4',                                               data: { production_year: '2003', drive: 'FR',  power: '360', weight: '1386', length: '4617', worth: '113.610 Credits' } },
            { name: 'M3 GTR',                                           src: 'cars/BMW/3_2003_M_GTR.mp4',                                               data: { production_year: '2003', drive: 'FR',  power: '380', weight: '1349', length: '4617', worth: 'Club "M"' } },
            { name: 'M3',                                               src: 'cars/BMW/3_2004_M.mp4',                                                   data: { production_year: '2004', drive: 'FR',  power: '344', weight: '1569', length: '4617', worth: '74.560 Credits' } },
            { name: '330i',                                             src: 'cars/BMW/3_2005_30i.mp4',                                                 data: { production_year: '2005', drive: 'FR',  power: '259', weight: '1525', length: '4520', worth: '48.040 Credits' } },
            { name: 'M5',                                               src: 'cars/BMW/5_2005_M.mp4',                                                   data: { production_year: '2005', drive: 'FR',  power: '508', weight: '1715', length: '4855', worth: '116.650 Credits' } },
            { name: '2002 Turbo',                                       src: 'cars/BMW/2002_1973_Turbo.mp4',                                            data: { production_year: '1973', drive: 'FR',  power: '171', weight: '1080', length: '4220', worth: 'BMW 1-Serie Pokal' } },
            { name: 'McLaren F1 GTR Race Car',                          src: 'cars/BMW/McLaren_F1_1997_GTR_Race_Car.mp4',                               data: { production_year: '1997', drive: 'MR',  power: '612', weight: '950',  length: '4924', worth: 'Gran Turismo All-Stars' } },
            { name: 'V12 LMR',                                          src: 'cars/BMW/V12_1999_LMR_Race_Car.mp4',                                      data: { production_year: '1999', drive: 'MR',  power: '799', weight: '900',  length: '4924', worth: '4.500.000 Credits' } },
            { name: 'Z3 M Coupe',                                       src: 'cars/BMW/Z3_1998_M_Coupe.mp4',                                            data: { production_year: '1998', drive: 'FR',  power: '321', weight: '1465', length: '4025', worth: '~51.000 Credits' } },
            { name: 'Z4',                                               src: 'cars/BMW/Z4_2003.mp4',                                                    data: { production_year: '2003', drive: 'FR',  power: '231', weight: '1365', length: '4000', worth: '75.610 Credits' } },
        ],
    },
    buick: {
        manufacturer: 'Buick', country: 'Amerika',                      // 2
        cars: [
            { name: 'GNX',                                              src: 'cars/Buick/GNX_1987.mp4',                                                 data: { production_year: '1987', drive: 'FR',  power: '280', weight: '1601', length: '5092', worth: '31.080 Credits' } },
            { name: 'Special',                                          src: 'cars/Buick/Special_1962.mp4',                                             data: { production_year: '1962', drive: 'FR',  power: '586', weight: '1364', length: '4724', worth: '58.000 Credits' } },
        ],
    },
    cadillac: {
        manufacturer: 'Cadillac', country: 'Amerika',                   // 1
        cars: [
            { name: 'Cien Concept',                                     src: 'cars/Cadillac/CIEN_2002_Concept.mp4',                                     data: { production_year: '2002', drive: 'MR',  power: '760', weight: '1500', length: '4000', worth: "Rallye d'Umbria Leicht" } },
        ],
    },
    callaway: {
        manufacturer: 'Callaway', country: 'Amerika',                   // 1
        cars: [
            { name: 'C12',                                              src: 'cars/Callaway/C12_2003.mp4',                                              data: { production_year: '2003', drive: 'FR',  power: '439', weight: '1481', length: '4852', worth: '175.880 Credits' } },
        ],
    },
    caterham: {
        manufacturer: 'Caterham', country: 'Grossbritannien',           // 1
        cars: [
            { name: 'Seven Fireblade',                                  src: 'cars/Caterham/Seven_2002_Fireblade.mp4',                                  data: { production_year: '2002', drive: 'FR',  power: '160', weight: '369',  length: '3100', worth: '60.000 Credits' } },
        ],
    },
    chapparal: {
        manufacturer: 'Chapparal', country: 'Amerika',                  // 2
        cars: [
            { name: '2D',                                               src: 'cars/Chaparral/2D_1967.mp4',                                              data: { production_year: '1967', drive: 'MR',  power: '426', weight: '771',  length: '4000', worth: '1.100.000 Credits | Nürburgring 4h' } },
            { name: '2J',                                               src: 'cars/Chaparral/2J_1970.mp4',                                              data: { production_year: '1970', drive: 'MR',  power: '694', weight: '821',  length: '4000', worth: '1.200.000 Credits' } },
        ],
    },
    chevrolet: {
        manufacturer: 'Chevrolet', country: 'Amerika',                  // 17
        cars: [
            { name: 'Camaro SS',                                        src: 'cars/Chevrolet/Camaro_1969_SS.mp4',                                       data: { production_year: '1969', drive: 'FR',  power: '304', weight: '1401', length: '4724', worth: '60.000 Credits' } },
            { name: 'Camaro Z28',                                       src: 'cars/Chevrolet/Camaro_1969_Z28.mp4',                                      data: { production_year: '1969', drive: 'FR',  power: '294', weight: '1415', length: '4724', worth: '65.000 Credits' } },
            { name: 'Camaro Z-IROC Concept',                            src: 'cars/Chevrolet/Camaro_1988_Z-IROC_Concept.mp4',                           data: { production_year: '1988', drive: 'FR',  power: '233', weight: '1467', length: '4877', worth: 'Camaro Meeting' } },
            { name: 'Camaro Z28 Coupe',                                 src: 'cars/Chevrolet/Camaro_1997_Z28_Coupe.mp4',                                data: { production_year: '1997', drive: 'FR',  power: '289', weight: '1561', length: '4907', worth: '~12.000 Credits' } },
            { name: 'Camaro LM Race Car',                               src: 'cars/Chevrolet/Camaro_2001_LM_Race_Car.mp4',                              data: { production_year: '2001', drive: 'FR',  power: '601', weight: '1160', length: '4915', worth: 'Stars & Stripes' } },
            { name: 'Camaro SS',                                        src: 'cars/Chevrolet/Camaro_2000_SS.mp4',                                       data: { production_year: '2000', drive: 'FR',  power: '331', weight: '1560', length: '4910', worth: '22.150 Credits' } },
            { name: 'Chevelle SS 454',                                  src: 'cars/Chevrolet/Chevelle_1970_SS.mp4',                                     data: { production_year: '1970', drive: 'FR',  power: '456', weight: '1762', length: '5121', worth: 'Hot Rod Competition' } },
            { name: 'Corvette C1 Convertible',                          src: 'cars/Chevrolet/Corvette_1954_C1_Convertible.mp4',                         data: { production_year: '1954', drive: 'FR',  power: '152', weight: '1309', length: '4250', worth: 'All-American Championship' } },
            { name: 'Corvette C2 Stingray Sport Coupe',                 src: 'cars/Chevrolet/Corvette_1963_C2_Stingray_Sport_Coupe.mp4',                data: { production_year: '1963', drive: 'FR',  power: '253', weight: '1380', length: '4448', worth: '84.890 Credits' } },
            { name: 'Corvette C2 Z06 Race Car',                         src: 'cars/Chevrolet/Corvette_1963_C2_Z06_Race_Car.mp4',                        data: { production_year: '1963', drive: 'FR',  power: '608', weight: '1168', length: '4448', worth: 'Corvette Festival' } },
            { name: 'Corvette C3 Stingray L46 350',                     src: 'cars/Chevrolet/Corvette_1969_C3_Stingray_L46_350.mp4',                    data: { production_year: '1969', drive: 'FR',  power: '356', weight: '1490', length: '4636', worth: '71.500 Credits' } },
            { name: 'Corvette C4 ZR-1',                                 src: 'cars/Chevrolet/Corvette_1990_C4_ZR-1.mp4',                                data: { production_year: '1990', drive: 'FR',  power: '381', weight: '1601', length: '4534', worth: '82.000 Credits' } },
            { name: 'Corvette C4 Grand Sport',                          src: 'cars/Chevrolet/Corvette_1996_C4_Grand_Sport.mp4',                         data: { production_year: '1996', drive: 'FR',  power: '336', weight: '1496', length: '4534', worth: '~22.950 Credits' } },
            { name: 'Corvette C5-R',                                    src: 'cars/Chevrolet/Corvette_2000_C5-R.mp4',                                   data: { production_year: '2000', drive: 'FR',  power: '619', weight: '1139', length: '4643', worth: '1.000.000 Credits' } },
            { name: 'Corvette C5 Z06',                                  src: 'cars/Chevrolet/Corvette_2000_C5_Z06.mp4',                                 data: { production_year: '2000', drive: 'FR',  power: '385', weight: '1409', length: '4566', worth: '~53.570 Credits' } },
            { name: 'Silverado SST Concept',                            src: 'cars/Chevrolet/Silverado_2002_SST_Concept.mp4',                           data: { production_year: '2002', drive: 'FR',  power: '495', weight: '2268', length: '5702', worth: 'Sports Truck Race' } },
            { name: 'SSR',                                              src: 'cars/Chevrolet/SSR_2003.mp4',                                             data: { production_year: '2003', drive: 'FR',  power: '294', weight: '2248', length: '4902', worth: '44.560 Credits' } },
        ],
    },
    chrysler: {
        manufacturer: 'Chrysler', country: 'Amerika',                   // 4
        cars: [
            { name: '300C',                                             src: 'cars/Chrysler/300C_2005.mp4',                                             data: { production_year: '2005', drive: 'FR',  power: '345', weight: '1878', length: '4999', worth: '34.780 Credits' } },
            { name: 'Crossfire',                                        src: 'cars/Chrysler/Crossfire_2004.mp4',                                        data: { production_year: '2004', drive: 'FR',  power: '218', weight: '1361', length: '4059', worth: '35.670 Credits' } },
            { name: 'Prowler',                                          src: 'cars/Chrysler/Prowler_2002.mp4',                                          data: { production_year: '2002', drive: 'FR',  power: '254', weight: '1287', length: '3999', worth: '47.430 Credits | Spider & Roadster' } },
            { name: 'PT Cruiser',                                       src: 'cars/Chrysler/PT_Cruiser_2000.mp4',                                       data: { production_year: '2000', drive: 'FR',  power: '152', weight: '1261', length: '4288', worth: '17.980 Credits' } },
        ],
    },
    citroen: {
        manufacturer: 'Citroën', country: 'Frankreich',                 // 6
        cars: [
            { name: '2CV Type A',                                       src: 'cars/Citroen/2CV_1954_Type_A.mp4',                                        data: { production_year: '1954', drive: 'FF',  power: '15',  weight: '494',  length: '3780', worth: 'Tous France Championnat | 2HP-2CV Classics' } },
            { name: 'C3 1.6',                                           src: 'cars/Citroen/C3_2002_1.6.mp4',                                            data: { production_year: '2002', drive: 'FF',  power: '110', weight: '1063', length: '3850', worth: '18.130 Credits' } },
            { name: 'C5 V6 Exclusive',                                  src: 'cars/Citroen/C5_2003_V6_Exclusive.mp4',                                   data: { production_year: '2003', drive: 'FF',  power: '210', weight: '1540', length: '4620', worth: '42.830 Credits' } },
            { name: 'Xantia 3.0i V6 Exclusive',                         src: 'cars/Citroen/Xantia_2000_3.0i_V6_Exclusive.mp4',                          data: { production_year: '2000', drive: 'FF',  power: '197', weight: '1496', length: '4524', worth: '39.230 Credits' } },
            { name: 'Xsara Rally Car',                                  src: 'cars/Citroen/Xsara_1999_Rally_Car.mp4',                                   data: { production_year: '1999', drive: 'FF',  power: '299', weight: '960',  length: '4167', worth: '750.000 Credits' } },
            { name: 'Xsara VTR',                                        src: 'cars/Citroen/Xsara_2003_VTR.mp4',                                         data: { production_year: '2003', drive: 'FF',  power: '108', weight: '1180', length: '4190', worth: '21.850 Credits' } },
        ],
    },
    cizeta: {
        manufacturer: 'Cizeta', country: 'Italien',                     // 1
        cars: [
            { name: 'V16T',                                             src: 'cars/Cizeta/V16T_1994.mp4',                                               data: { production_year: '1994', drive: 'MR',  power: '589', weight: '1640', length: '4442', worth: 'Supercar Festival' } },
        ],
    },
    daihatsu: {
        manufacturer: 'Daihatsu', country: 'Japan',                     // 12
        cars: [
            { name: 'Copen Active Top',                                 src: 'cars/Daihatsu/Copen_2002_Active_Top.mp4',                                 data: { production_year: '2002', drive: 'FF',  power: '63',  weight: '830',  length: '3395', worth: '14.980 Credits' } },
            { name: 'Copen Detachable Top',                             src: 'cars/Daihatsu/Copen_2002_Detachable_Top.mp4',                             data: { production_year: '2002', drive: 'FF',  power: '63',  weight: '800',  length: '3395', worth: '14.980 Credits' } },
            { name: 'Cuore TR-XX Avanzato R',                           src: 'cars/Daihatsu/Cuore_1997_TR-XX_Avanzato_R.mp4',                           data: { production_year: '1997', drive: 'FF',  power: '64',  weight: '700',  length: '3410', worth: '~5.000 Credits' } },
            { name: 'Midget',                                           src: 'cars/Daihatsu/Midget_1963.mp4',                                           data: { production_year: '1963', drive: 'MR',  power: '12',  weight: '299',  length: '2970', worth: 'Midget II Race' } },
            { name: 'Midget II D-Type',                                 src: 'cars/Daihatsu/Midget_1998_II_D-Type.mp4',                                 data: { production_year: '1998', drive: 'FR',  power: '34',  weight: '569',  length: '2790', worth: '~3.300 Credits' } },
            { name: 'Move CX',                                          src: 'cars/Daihatsu/Move_1995_CX.mp4',                                          data: { production_year: '1995', drive: 'FF',  power: '55',  weight: '739',  length: '3395', worth: '~4.000 Credits' } },
            { name: 'Move SR-XX 2WD',                                   src: 'cars/Daihatsu/Move_1997_SR-XX_2WD.mp4',                                   data: { production_year: '1997', drive: 'FF',  power: '64',  weight: '760',  length: '3395', worth: '~4.000 Credits' } },
            { name: 'Move SR-XX 4WD',                                   src: 'cars/Daihatsu/Move_1997_SR-XX_4WD.mp4',                                   data: { production_year: '1997', drive: '4WD', power: '64',  weight: '811',  length: '3395', worth: '~6.000 Credits' } },
            { name: 'Move Custom RS Limited',                           src: 'cars/Daihatsu/Move_2002_Custom_RS_Limited.mp4',                           data: { production_year: '2002', drive: '4WD', power: '64',  weight: '921',  length: '3395', worth: '15.720 Credits' } },
            { name: 'Sirion CX 2WD',                                    src: 'cars/Daihatsu/Sirion_1998_CX_2WD.mp4',                                    data: { production_year: '1998', drive: 'FF',  power: '58',  weight: '840',  length: '3660', worth: '~7.000 Credits' } },
            { name: 'Sirion CX 4WD',                                    src: 'cars/Daihatsu/Sirion_1998_CX_4WD.mp4',                                    data: { production_year: '1998', drive: '4WD', power: '58',  weight: '890',  length: '3660', worth: '~7.000 Credits' } },
            { name: 'Sirion X4',                                        src: 'cars/Daihatsu/Sirion_2000_X4.mp4',                                        data: { production_year: '2000', drive: '4WD', power: '120', weight: '840',  length: '3660', worth: '~10.000 Credits | Copen Race' } },
        ],
    },
    dmc: {
        manufacturer: 'DMC', country: 'Amerika',                        // 1
        cars: [
            { name: 'DeLorean S2',                                      src: 'cars/DMC/DeLorean_2004_S2.mp4',                                           data: { production_year: '2004', drive: 'RR',  power: '200', weight: '1288', length: '4267', worth: 'Fahrmission "The Pass"' } },
        ],
    },
    dodge: {
        manufacturer: 'Dodge', country: 'Amerika',                      // 8
        cars: [
            { name: 'Charger 440 R/T',                                  src: 'cars/Dodge/Charger_1970_440_RT.mp4',                                      data: { production_year: '1970', drive: 'FR',  power: '380', weight: '1650', length: '4000', worth: '75.500 Credits' } },
            { name: 'Charger Super Bee 426 Hemi',                       src: 'cars/Dodge/Charger_1971_Super_Bee_426_Hemi.mp4',                          data: { production_year: '1971', drive: 'FR',  power: '431', weight: '1841', length: '4000', worth: 'New York 200 Meilen' } },
            { name: 'RAM 1500 Laramie Hemi Quad Cab',                   src: 'cars/Dodge/RAM_2004_1500_Laramie_Hemi_Quad_Cab.mp4',                      data: { production_year: '2004', drive: '4WD', power: '346', weight: '2390', length: '5784', worth: '37.930 Credits' } },
            { name: 'SRT-4',                                            src: 'cars/Dodge/SRT-4_2003.mp4',                                               data: { production_year: '2003', drive: 'FF',  power: '233', weight: '1349', length: '4000', worth: '20.640 Credits' } },
            { name: 'Viper GTS',                                        src: 'cars/Dodge/Viper_1999_GTS.mp4',                                           data: { production_year: '1999', drive: 'FR',  power: '456', weight: '1569', length: '4488', worth: '78.000 Credits' } },
            { name: 'Viper GTS-R Concept',                              src: 'cars/Dodge/Viper_2000_GTS-R_Concept.mp4',                                 data: { production_year: '2000', drive: 'FR',  power: '505', weight: '1475', length: '4902', worth: 'Chrysler Crossfire Trophy' } },
            { name: 'Viper GTS-R Team Oreca',                           src: 'cars/Dodge/Viper_2000_GTS-R_Team_Oreca.mp4',                              data: { production_year: '2000', drive: 'FR',  power: '597', weight: '1150', length: '4548', worth: '1.000.000 Credits' } },
            { name: 'Viper SRT-10',                                     src: 'cars/Dodge/Viper_2003_SRT-10.mp4',                                        data: { production_year: '2003', drive: 'FR',  power: '507', weight: '1533', length: '4458', worth: '84.880 Credits | 450 km/h' } },
        ],
    },
    dome: {
        manufacturer: 'Dome', country: 'Japan',                         // 1
        cars: [
            { name: 'Zero Concept',                                     src: 'cars/Dome/0_1978.mp4',                                                    data: { production_year: '1978', drive: 'MR',  power: '165', weight: '919',  length: '4000', worth: 'Internationale A-Lizenz Gold' } },
        ],
    },
    eagle: {
        manufacturer: 'Eagle', country: 'Amerika',                      // 1
        cars: [
            { name: 'Talon ESI',                                        src: 'cars/Eagle/Talon_1997_ESI.mp4',                                           data: { production_year: '1997', drive: 'FR',  power: '141', weight: '1252', length: '4000', worth: '15.740 Credits' } },
        ],
    },
    fiat: {
        manufacturer: 'Fiat', country: 'Italien',                       // 7
        cars: [
            { name: '500 F',                                            src: 'cars/Fiat/500_1965_F.mp4',                                                data: { production_year: '1965', drive: 'RR',  power: '18',  weight: '520',  length: '2970', worth: '~7.000 Credits' } },
            { name: '500 L',                                            src: 'cars/Fiat/500_1969_L.mp4',                                                data: { production_year: '1969', drive: 'RR',  power: '18',  weight: '530',  length: '2970', worth: '~6.000 Credits' } },
            { name: '500 R',                                            src: 'cars/Fiat/500_1972_R.mp4',                                                data: { production_year: '1972', drive: 'RR',  power: '19',  weight: '594',  length: '3070', worth: '~6.000 Credits' } },
            { name: 'Barchetta Giovane Due',                            src: 'cars/Fiat/Barchetta_2000_Giovane_Due.mp4',                                data: { production_year: '2000', drive: 'FF',  power: '130', weight: '1090', length: '3916', worth: '24.060 Credits' } },
            { name: 'Coupe Turbo Plus',                                 src: 'cars/Fiat/Coupe_2000_Turbo_Plus.mp4',                                     data: { production_year: '2000', drive: 'FF',  power: '216', weight: '1310', length: '4250', worth: '48.110 Credits' } },
            { name: 'Panda Super i.E.',                                 src: 'cars/Fiat/Panda_1990_Super_i.e..mp4',                                     data: { production_year: '1990', drive: 'FF',  power: '45',  weight: '730',  length: '3405', worth: '~5.100 Credits' } },
            { name: 'Punto HGT Abarth',                                 src: 'cars/Fiat/Punto_2000_HGT_Abarth.mp4',                                     data: { production_year: '2000', drive: 'FF',  power: '131', weight: '1100', length: '3820', worth: '30.030 Credits' } },
        ],
    },
    ford: {
        manufacturer: 'Ford', country: 'Amerika',                       // 18
        cars: [
            { name: 'Escort Rally Car',                                 src: 'cars/Ford/Escort_1998_Rally_Car.mp4',                                     data: { production_year: '1998', drive: '4WD', power: '304', weight: '1230', length: '4221', worth: 'Tahiti - Normal' } },
            { name: 'Falcon XR8',                                       src: 'cars/Ford/Falcon_2000_XR8.mp4',                                           data: { production_year: '2000', drive: 'FR',  power: '608', weight: '1349', length: '4970', worth: '450.000 Credits' } },
            { name: 'Focus Rally Car',                                  src: 'cars/Ford/Focus_1999_Rally_Car.mp4',                                      data: { production_year: '1999', drive: '4WD', power: '304', weight: '1230', length: '4152', worth: '#7 Driving School' } },
            { name: 'Focus RS',                                         src: 'cars/Ford/Focus_2002_RS.mp4',                                             data: { production_year: '2002', drive: 'FF',  power: '220', weight: '1051', length: '4602', worth: '41.410 Credits' } },
            { name: 'Focus ST',                                         src: 'cars/Ford/Focus_2003_ST_170.mp4',                                         data: { production_year: '2003', drive: 'FF',  power: '173', weight: '1241', length: '4602', worth: '32.750 Credits' } },
            { name: 'GT40 Race Car',                                    src: 'cars/Ford/GT_1969_40_Race_Car.mp4',                                       data: { production_year: '1969', drive: 'MR',  power: '500', weight: '998',  length: '4602', worth: 'Laguna Seca 200 Meilen' } },
            { name: 'GT Concept',                                       src: 'cars/Ford/GT_2002.mp4',                                                   data: { production_year: '2002', drive: 'MR',  power: '507', weight: '1451', length: '4602', worth: 'Tsukuba - Schwer' } },
            { name: 'GT Concept LM Race Car',                           src: 'cars/Ford/GT_2002_LM_Race_Car.mp4',                                       data: { production_year: '2002', drive: 'MR',  power: '615', weight: '1139', length: '4602', worth: 'Infineon Ausdauer-Rennen' } },
            { name: 'GT LM Race Car Spec II',                           src: 'cars/Ford/GT_2004_LM_Race_Car_Spec_II.mp4',                               data: { production_year: '2004', drive: 'MR',  power: '615', weight: '1130', length: '4613', worth: 'GT World Championship' } },
            { name: 'GT',                                               src: 'cars/Ford/GT_2005.mp4',                                                   data: { production_year: '2005', drive: 'MR',  power: '558', weight: '1451', length: '4643', worth: '149.880 Credits' } },
            { name: 'Ka',                                               src: 'cars/Ford/Ka_2001.mp4',                                                   data: { production_year: '2001', drive: 'FF',  power: '62',  weight: '965',  length: '3620', worth: '12.920 Credits' } },
            { name: 'Model T Tourer',                                   src: 'cars/Ford/Model_T_1915_Tourer.mp4',                                       data: { production_year: '1915', drive: 'FR',  power: '20',  weight: '635',  length: '4000', worth: 'Alle Lizenzen in Gold' } },
            { name: 'Mustang SVT Cobra R',                              src: 'cars/Ford/Mustang_2000_SVT_Cobra_R.mp4',                                  data: { production_year: '2000', drive: 'FR',  power: '372', weight: '1628', length: '4000', worth: '~44.000 Credits' } },
            { name: 'Mustang GT',                                       src: 'cars/Ford/Mustang_2005_GT.mp4',                                           data: { production_year: '2005', drive: 'FR',  power: '300', weight: '1569', length: '4765', worth: '25.950 Credits' } },
            { name: 'RS 200',                                           src: 'cars/Ford/RS_1984_200.mp4',                                               data: { production_year: '1984', drive: '4WD', power: '250', weight: '1179', length: '4152', worth: 'Grand Canyon - Leicht' } },
            { name: 'RS 200 Rally Car',                                 src: 'cars/Ford/RS_1985_200_Rally_Car.mp4',                                     data: { production_year: '1985', drive: '4WD', power: '427', weight: '980',  length: '4152', worth: 'Capri Rally - Schwer' } },
            { name: 'SVT F-150 Lightning',                              src: 'cars/Ford/SVT_2003_F-150_Lightning.mp4',                                  data: { production_year: '2003', drive: 'FR',  power: '385', weight: '2132', length: '5283', worth: '35.050 Credits' } },
            { name: 'Taurus SHO',                                       src: 'cars/Ford/Taurus_1998_SHO.mp4',                                           data: { production_year: '1998', drive: 'FF',  power: '238', weight: '1509', length: '5039', worth: '~17.000 Credits' } },
        ],
    },
    fpv: {
        manufacturer: 'FPV', country: 'Australien',                     // 2
        cars: [
            { name: 'F6 Typhoon',                                       src: 'cars/FPV/F6_2004_Typhoon.mp4',                                            data: { production_year: '2004', drive: 'FR',  power: '367', weight: '1776', length: '4954', worth: '46.740 Credits' } },
            { name: 'GT',                                               src: 'cars/FPV/GT_2004.mp4',                                                    data: { production_year: '2004', drive: 'FR',  power: '394', weight: '1826', length: '4954', worth: '48.640 Credits' } },
        ],
    },
    gillet: {
        manufacturer: 'Gillet', country: 'Belgien',                     // 1
        cars: [
            { name: 'Vertigo Race Car',                                 src: 'cars/Gillet/Vertigo_2004_Race_Car.mp4',                                   data: { production_year: '2004', drive: 'FR',  power: '901', weight: '780',  length: '3980', worth: '1.000.000 Credits' } },
        ],
    },
    ginetta: {
        manufacturer: 'Ginetta', country: 'Grossbritannien',            // 1
        cars: [
            { name: 'G4',                                               src: 'cars/Ginetta/G4_1964.mp4',                                                data: { production_year: '1964', drive: 'FR',  power: '91',  weight: '454',  length: '3353', worth: 'Leichtgewicht K-Cup' } },
        ],
    },
    hks: {
        manufacturer: 'HKS', country: 'Japan',                          // 1
        cars: [
            { name: 'Genki Hyper Silvia',                               src: 'cars/HKS/Silvia_2004_Genki_Hyper_RS2.mp4',                                data: { production_year: '2004', drive: 'FR',  power: '483', weight: '1130', length: '4000', worth: '200.000 Credits' } },
        ],
    },
    holden: {
        manufacturer: 'Holden', country: 'Australien',                  // 2
        cars: [
            { name: 'Commodore SS',                                     src: 'cars/Holden/Commodore_2004_SS.mp4',                                       data: { production_year: '2004', drive: 'FR',  power: '333', weight: '1658', length: '4868', worth: '40.430 Credits' } },
            { name: 'Monaro CV8',                                       src: 'cars/Holden/Monaro_2004_CV8.mp4',                                         data: { production_year: '2004', drive: 'FR',  power: '333', weight: '1658', length: '4868', worth: '47.960 Credits' } },
        ],
    },
    hommell: {
        manufacturer: 'Hommell', country: 'Frankreich',                 // 1
        cars: [
            { name: 'Berlinette R/S Coupe',                             src: 'cars/Hommel/Berlinette_1999_RS_Coupe.mp4',                                data: { production_year: '1999', drive: 'MR',  power: '167', weight: '950',  length: '4120', worth: '47.360 Credits' } },
        ],
    },
    honda: {
        manufacturer: 'Honda', country: 'Japan',                        // 62
        cars: [
            { name: '1300 Coupe 9 S',                                   src: 'cars/Honda/1300_1970_Coupe_9_S.mp4',                                      data: { production_year: '1970', drive: 'FF',  power: '110', weight: '900',  length: '4140', worth: '~12.800 Credits' } },
            { name: 'Accord Coupe Import Edition',                      src: 'cars/Honda/Accord_1988_Coupe_Import_Edition.mp4',                         data: { production_year: '1988', drive: 'FF',  power: '120', weight: '1219', length: '4565', worth: '~9.000 Credits' } },
            { name: 'Accord Euro R',                                    src: 'cars/Honda/Accord_2000_Euro_R.mp4',                                       data: { production_year: '2000', drive: 'FF',  power: '220', weight: '1330', length: '4680', worth: '~16.000 Credits' } },
            { name: 'Accord Euro R',                                    src: 'cars/Honda/Accord_2002_Euro_R.mp4',                                       data: { production_year: '2002', drive: 'FF',  power: '220', weight: '1390', length: '4680', worth: '25.300 Credits' } },
            { name: 'Accord Coupe Import Edition',                      src: 'cars/Honda/Accord_2003_Coupe_Import_Edition.mp4',                         data: { production_year: '2003', drive: 'FF',  power: '243', weight: '1481', length: '4765', worth: '27.480 Credits' } },
            { name: 'Beat',                                             src: 'cars/Honda/Beat_1991.mp4',                                                data: { production_year: '1991', drive: 'MR',  power: '64',  weight: '760',  length: '3295', worth: '~5.000 Credits' } },
            { name: 'Beat Version F',                                   src: 'cars/Honda/Beat_1992_Version_F.mp4',                                      data: { production_year: '1992', drive: 'MR',  power: '64',  weight: '760',  length: '3295', worth: '~5.000 Credits' } },
            { name: 'Beat Version Z',                                   src: 'cars/Honda/Beat_1993_Version_Z.mp4',                                      data: { production_year: '1993', drive: 'MR',  power: '64',  weight: '760',  length: '3295', worth: '~7.000 Credits' } },
            { name: 'City Turbo II',                                    src: 'cars/Honda/City_1983_Turbo_II.mp4',                                       data: { production_year: '1983', drive: 'FF',  power: '110', weight: '735',  length: '3380', worth: '~4.000 Credits' } },
            { name: 'Civic CX',                                         src: 'cars/Honda/Civic_1979.mp4',                                               data: { production_year: '1979', drive: 'FF',  power: '85',  weight: '780',  length: '3870', worth: '9.570 Credits' } },
            { name: 'Civic 25i',                                        src: 'cars/Honda/Civic_1983.mp4',                                               data: { production_year: '1983', drive: 'FF',  power: '100',  weight: '815',  length: '3810', worth: '~4.000 Credits' } },
            { name: 'Civic Motul Race Car',                             src: 'cars/Honda/Civic_1987_Motul_Race_Car.mp4',                                data: { production_year: '1987', drive: 'FF',  power: '225', weight: '890',  length: '4000', worth: 'Civic Race' } },
            { name: 'Civic SiR II',                                     src: 'cars/Honda/Civic_1991_SIR_II.mp4',                                        data: { production_year: '1991', drive: 'FF',  power: '166', weight: '1040', length: '4069', worth: '~6.000 Credits' } },
            { name: 'Civic SiR II',                                     src: 'cars/Honda/Civic_1992_SIR_II.mp4',                                        data: { production_year: '1992', drive: 'FF',  power: '167', weight: '1040', length: '4069', worth: '~6.000 Credits' } },
            { name: 'Civic SiR II',                                     src: 'cars/Honda/Civic_1993_SIR_II.mp4',                                        data: { production_year: '1993', drive: 'FF',  power: '167', weight: '1040', length: '4069', worth: '~6.000 Credits' } },
            { name: 'Civic SiR II',                                     src: 'cars/Honda/Civic_1995_SIR_II.mp4',                                        data: { production_year: '1995', drive: 'FF',  power: '169', weight: '1040', length: '4069', worth: '~6.000 Credits' } },
            { name: 'Civic Type R',                                     src: 'cars/Honda/Civic_1997_Type_R.mp4',                                        data: { production_year: '1997', drive: 'FF',  power: '180', weight: '1050', length: '4180', worth: '~10.000 Credits' } },
            { name: 'Civic Gathers Race Car',                           src: 'cars/Honda/Civic_1998_Gathers_Race_Car.mp4',                              data: { production_year: '1998', drive: 'FF',  power: '185', weight: '930',  length: '4180', worth: '450.000 Credits' } },
            { name: 'Civic Type R',                                     src: 'cars/Honda/Civic_1998_Type_R.mp4',                                        data: { production_year: '1998', drive: 'FF',  power: '183', weight: '1050', length: '4180', worth: '~10.000 Credits' } },
            { name: 'Civic Type R',                                     src: 'cars/Honda/Civic_2001_Type_R.mp4',                                        data: { production_year: '2001', drive: 'FF',  power: '201', weight: '1191', length: '4135', worth: '~15.000 Credits' } },
            { name: 'Civic Type R',                                     src: 'cars/Honda/Civic_2004_Type_R.mp4',                                        data: { production_year: '2004', drive: 'FF',  power: '218', weight: '1191', length: '4135', worth: '23.310 Credits' } },
            { name: 'CR-X Ballade Sports 1.5i',                         src: 'cars/Honda/CR-X_1983_1.5i.mp4',                                           data: { production_year: '1983', drive: 'FF',  power: '110', weight: '815',  length: '4000', worth: '~4.000 Credits' } },
            { name: 'CR-X SiR',                                         src: 'cars/Honda/CR-X_1990_SIR.mp4',                                            data: { production_year: '1990', drive: 'FF',  power: '160', weight: '986',  length: '4000', worth: '~5.000 Credits' } },
            { name: 'CR-X Del Sol SiR',                                 src: 'cars/Honda/CR-X_1992_Del_Sol_SIR.mp4',                                    data: { production_year: '1992', drive: 'FF',  power: '169', weight: '1100', length: '3995', worth: '~6.000 Credits' } },
            { name: 'Dualnote',                                         src: 'cars/Honda/Dualnote_2001.mp4',                                            data: { production_year: '2001', drive: '4WD', power: '395', weight: '1399', length: '4400', worth: 'Silber Internationale A-Lizenz' } },
            { name: 'Element',                                          src: 'cars/Honda/Element_2003.mp4',                                             data: { production_year: '2003', drive: '4WD', power: '161', weight: '1560', length: '4300', worth: '25.900 Credits' } },
            { name: 'HSC',                                              src: 'cars/Honda/HSC_2003.mp4',                                                 data: { production_year: '2003', drive: 'MR',  power: '330', weight: '1149', length: '4240', worth: 'Type-R Treffen' } },
            { name: 'Insight',                                          src: 'cars/Honda/Insight_1999.mp4',                                             data: { production_year: '1999', drive: 'FF',  power: '83',  weight: '820',  length: '3940', worth: '21.000 Credits' } },
            { name: 'Integra Type R',                                   src: 'cars/Honda/Integra_1995_Type_R.mp4',                                      data: { production_year: '1995', drive: 'FF',  power: '200', weight: '1059', length: '4380', worth: '~11.000 Credits' } },
            { name: 'Integra Type R',                                   src: 'cars/Honda/Integra_1998_Type_R.mp4',                                      data: { production_year: '1998', drive: 'FF',  power: '202', weight: '1059', length: '4380', worth: '~11.000 Credits' } },
            { name: 'Integra Type R',                                   src: 'cars/Honda/Integra_1999_Type_R.mp4',                                      data: { production_year: '1999', drive: 'FF',  power: '203', weight: '1059', length: '4380', worth: '~11.000 Credits' } },
            { name: 'Integra Type R Touring Car',                       src: 'cars/Honda/Integra_2002_Type_R_Touring_Car.mp4',                          data: { production_year: '2002', drive: 'FF',  power: '310', weight: '1050', length: '4385', worth: '450.000 Credits' } },
            { name: 'Integra Type R',                                   src: 'cars/Honda/Integra_2003_Type_R.mp4',                                      data: { production_year: '2003', drive: 'FF',  power: '225', weight: '1170', length: '4380', worth: '25.900 Credits' } },
            { name: 'Jazz 1.4 DSi SE',                                  src: 'cars/Honda/Jazz_2001_1.4_DSI_SE_Sport.mp4',                               data: { production_year: '2001', drive: 'FF',  power: '100', weight: '990',  length: '3828', worth: '12.600 Credits' } },
            { name: 'Life Step Van',                                    src: 'cars/Honda/Life_1972_Step_Van.mp4',                                       data: { production_year: '1972', drive: 'FF',  power: '31',  weight: '606',  length: '2995', worth: 'Japanische Kompaktwagen-Meisterschaft' } },
            { name: 'N 360',                                            src: 'cars/Honda/N_1967_360.mp4',                                               data: { production_year: '1967', drive: 'FF',  power: '31',  weight: '474',  length: '2995', worth: '~12.000 Credits' } },
            { name: 'NSX',                                              src: 'cars/Honda/NSX_1990.mp4',                                                 data: { production_year: '1990', drive: 'MR',  power: '278', weight: '1350', length: '4430', worth: '~28.000 Credits' } },
            { name: 'NSX Type R',                                       src: 'cars/Honda/NSX_1992_R.mp4',                                               data: { production_year: '1992', drive: 'MR',  power: '288', weight: '1230', length: '4430', worth: '~42.000 Credits' } },
            { name: 'NSX',                                              src: 'cars/Honda/NSX_1993.mp4',                                                 data: { production_year: '1993', drive: 'MR',  power: '278', weight: '1350', length: '4430', worth: '~28.000 Credits' } },
            { name: 'NSX',                                              src: 'cars/Honda/NSX_1995.mp4',                                                 data: { production_year: '1995', drive: 'MR',  power: '278', weight: '1350', length: '4430', worth: '~28.000 Credits' } },
            { name: 'NSX',                                              src: 'cars/Honda/NSX_1997.mp4',                                                 data: { production_year: '1997', drive: 'MR',  power: '281', weight: '1350', length: '4430', worth: '~28.000 Credits' } },
            { name: 'NSX Type S',                                       src: 'cars/Honda/NSX_1997_S.mp4',                                               data: { production_year: '1997', drive: 'MR',  power: '281', weight: '1320', length: '4430', worth: '~48.000 Credits' } },
            { name: 'NSX Type S Zero',                                  src: 'cars/Honda/NSX_1997_S_Zero.mp4',                                          data: { production_year: '1997', drive: 'MR',  power: '289', weight: '1270', length: '4430', worth: '~35.000 Credits' } },
            { name: 'NSX',                                              src: 'cars/Honda/NSX_1999.mp4',                                                 data: { production_year: '1999', drive: 'MR',  power: '281', weight: '1350', length: '4430', worth: '~28.000 Credits' } },
            { name: 'NSX Type S',                                       src: 'cars/Honda/NSX_1999_S.mp4',                                               data: { production_year: '1999', drive: 'MR',  power: '281', weight: '1320', length: '4430', worth: '~48.000 Credits' } },
            { name: 'NSX Type S Zero',                                  src: 'cars/Honda/NSX_1999_S_Zero.mp4',                                          data: { production_year: '1999', drive: 'MR',  power: '289', weight: '1270', length: '4430', worth: '~35.000 Credits' } },
            { name: 'NSX Arta',                                         src: 'cars/Honda/NSX_2000_Arta.mp4',                                            data: { production_year: '2000', drive: 'MR',  power: '489', weight: '1150', length: '4430', worth: '1.350.000 Credits' } },
            { name: 'NSX Castrol',                                      src: 'cars/Honda/NSX_2000_Castrol.mp4',                                         data: { production_year: '2000', drive: 'MR',  power: '489', weight: '1150', length: '4430', worth: '1.350.000 Credits' } },
            { name: 'NSX Raybrig',                                      src: 'cars/Honda/NSX_2000_Raybrig.mp4',                                         data: { production_year: '2000', drive: 'MR',  power: '489', weight: '1150', length: '4430', worth: '1.350.000 Credits' } },
            { name: 'NSX',                                              src: 'cars/Honda/NSX_2001.mp4',                                                 data: { production_year: '2001', drive: 'MR',  power: '281', weight: '1340', length: '4430', worth: '92.070 Credits' } },
            { name: 'NSX Loctite',                                      src: 'cars/Honda/NSX_2001_Loctite.mp4',                                         data: { production_year: '2001', drive: 'MR',  power: '492', weight: '1150', length: '4430', worth: '1.350.000 Credits' } },
            { name: 'NSX Mobil 1',                                      src: 'cars/Honda/NSX_2001_Mobil_1.mp4',                                         data: { production_year: '2001', drive: 'MR',  power: '492', weight: '1150', length: '4430', worth: '1.350.000 Credits' } },
            { name: 'NSX Type R Concept',                               src: 'cars/Honda/NSX_2001_R_Concept.mp4',                                       data: { production_year: '2001', drive: 'MR',  power: '290', weight: '1269', length: '4430', worth: 'NA Meisterschaft' } },
            { name: 'NSX Type S',                                       src: 'cars/Honda/NSX_2001_S.mp4',                                               data: { production_year: '2001', drive: 'MR',  power: '281', weight: '1320', length: '4430', worth: '103.570 Credits' } },
            { name: 'NSX Type R',                                       src: 'cars/Honda/NSX_2002_R.mp4',                                               data: { production_year: '2002', drive: 'MR',  power: '295', weight: '1270', length: '4430', worth: '119.570 Credits' } },
            { name: 'NSX Type R Race Car',                              src: 'cars/Honda/NSX_2002_R_LM_Race_Car.mp4',                                   data: { production_year: '2002', drive: 'MR',  power: '519', weight: '1121', length: '4430', worth: '150 Meilen Super Speedway' } },
            { name: 'NSX Type R Road Car',                              src: 'cars/Honda/NSX_2002_R_LM_Road_Car.mp4',                                   data: { production_year: '2002', drive: 'MR',  power: '553', weight: '1229', length: '4430', worth: '8 Stunden Motegi' } },
            { name: 'NSX Takata',                                       src: 'cars/Honda/NSX_2003_Takata.mp4',                                          data: { production_year: '2003', drive: 'MR',  power: '494', weight: '1170', length: '4430', worth: '1.350.000 Credits' } },
            { name: 'Odyssey',                                          src: 'cars/Honda/Odyssey_2003.mp4',                                             data: { production_year: '2003', drive: '4WD', power: '160', weight: '1701', length: '4765', worth: '28.650 Credits' } },
            { name: 'Prelude Si VTEC',                                  src: 'cars/Honda/Prelude_1991_SI_VTEC.mp4',                                     data: { production_year: '1991', drive: 'FF',  power: '215', weight: '1280', length: '4440', worth: '~8.000 Credits' } },
            { name: 'Prelude SiR',                                      src: 'cars/Honda/Prelude_1996_SIR.mp4',                                         data: { production_year: '1996', drive: 'FF',  power: '196', weight: '1261', length: '4520', worth: '~8.000 Credits' } },
            { name: 'Prelude Type S',                                   src: 'cars/Honda/Prelude_1996_Type_S.mp4',                                      data: { production_year: '1996', drive: 'FF',  power: '217', weight: '1310', length: '4520', worth: '~13.000 Credits' } },
            { name: 'Prelude SiR S SPEC',                               src: 'cars/Honda/Prelude_1998_SIR_S_SPEC.mp4',                                  data: { production_year: '1998', drive: 'FF',  power: '217', weight: '1270', length: '4520', worth: '~11.000 Credits' } },
            { name: 'Prelude Type S',                                   src: 'cars/Honda/Prelude_1998_Type_S.mp4',                                      data: { production_year: '1998', drive: 'FF',  power: '217', weight: '1310', length: '4520', worth: '~13.000 Credits' } },
            { name: 'S 500',                                            src: 'cars/Honda/S500_1963.mp4',                                                data: { production_year: '1963', drive: 'FR',  power: '44',  weight: '674',  length: '3300', worth: '~20.000 Credits | Gold Nationale B-Lizenz' } },
            { name: 'S 600',                                            src: 'cars/Honda/S600_1964.mp4',                                                data: { production_year: '1964', drive: 'FR',  power: '57',  weight: '714',  length: '3300', worth: '~21.000 Credits' } },
            { name: 'S 800',                                            src: 'cars/Honda/S800_1966.mp4',                                                data: { production_year: '1966', drive: 'FR',  power: '70',  weight: '720',  length: '3335', worth: '~20.000 Credits' } },
            { name: 'S 800 RSC Race Car',                               src: 'cars/Honda/S800_1968_RSC_Race_Car.mp4',                                   data: { production_year: '1968', drive: 'FR',  power: '100', weight: '660',  length: '3355', worth: 'Kompaktwagen-Weltmeisterschaft' } },
            { name: 'S 2000',                                           src: 'cars/Honda/S2000_1999.mp4',                                               data: { production_year: '1999', drive: 'FR',  power: '247', weight: '1240', length: '4135', worth: '~23.000 Credits' } },
            { name: 'S 2000 Type V',                                    src: 'cars/Honda/S2000_2000_Type_V.mp4',                                        data: { production_year: '2000', drive: 'FR',  power: '247', weight: '1260', length: '4135', worth: '~20.000 Credits' } },
            { name: 'S 2000',                                           src: 'cars/Honda/S2000_2001.mp4',                                               data: { production_year: '2001', drive: 'FR',  power: '247', weight: '1240', length: '4135', worth: '35.000 Credits' } },
            { name: 'S 2000 LM Race Car',                               src: 'cars/Honda/S2000_2001_LM_Race_Car.mp4',                                   data: { production_year: '2001', drive: 'FR',  power: '320', weight: '1050', length: '4285', worth: '450.000 Credits' } },
            { name: 'S 2000 Type V',                                    src: 'cars/Honda/S2000_2001_Type_V.mp4',                                        data: { production_year: '2001', drive: 'FR',  power: '247', weight: '1260', length: '4135', worth: '~20.000 Credits' } },
            { name: 'S 2000',                                           src: 'cars/Honda/S2000_2003.mp4',                                               data: { production_year: '2003', drive: 'FR',  power: '247', weight: '1240', length: '4135', worth: '35.000 Credits' } },
            { name: 'S 2000 Type V',                                    src: 'cars/Honda/S2000_2003_Type_V.mp4',                                        data: { production_year: '2003', drive: 'FR',  power: '245', weight: '1270', length: '4135', worth: '37.000 Credits' } },
            { name: 'Today G',                                          src: 'cars/Honda/Today_1985_G.mp4',                                             data: { production_year: '1985', drive: 'FF',  power: '31',  weight: '550',  length: '3195', worth: '~2.000 Credits' } },
            { name: 'Z Act',                                            src: 'cars/Honda/Z_1970_Act.mp4',                                               data: { production_year: '1970', drive: 'FF',  power: '31',  weight: '595',  length: '3125', worth: '~5.000 Credits' } },
        ],
    },
    hpa: {
        manufacturer: 'HPA', country: 'Kanada',                         // 1
        cars: [
            { name: 'Stage II R32',                                     src: 'cars/HPA/Stage_II_R32_2004.mp4',                                          data: { production_year: '2004', drive: '4WD', power: '530', weight: '1484', length: '4189', worth: '31.870 Credits' } },
        ],
    },
    hyundai: {
        manufacturer: 'Hyundai', country: 'Südkorea',                   // 4
        cars: [
            { name: 'Accent Rally Car',                                 src: 'cars/Hyundai/Accent_2001_Rally_Car.mp4',                                  data: { production_year: '2001', drive: '4WD', power: '304', weight: '1031', length: '4200', worth: '750.000 Credits' } },
            { name: 'Clix',                                             src: 'cars/Hyundai/Clix_2001.mp4',                                              data: { production_year: '2001', drive: '4WD', power: '305', weight: '1320', length: '3959', worth: 'Hyundai Sport Festival' } },
            { name: 'Coupe FX',                                         src: 'cars/Hyundai/Coupe_2001.mp4',                                             data: { production_year: '2001', drive: 'FF',  power: '176', weight: '1341', length: '4395', worth: '33.020 Credits' } },
            { name: 'HCD6 Concept',                                     src: 'cars/Hyundai/HCD6_2001.mp4',                                              data: { production_year: '2001', drive: 'MR',  power: '219', weight: '1500', length: '4039', worth: 'Yosemite-Rallye II - Leicht' } },
        ],
    },
    infiniti: {
        manufacturer: 'Infiniti', country: 'Amerika',                   // 2
        cars: [
            { name: 'FX45 Concept',                                     src: 'cars/Infiniti/FX45_2002_Concept.mp4',                                     data: { production_year: '2002', drive: '4WD', power: '345', weight: '1499', length: '4788', worth: 'Charmonix-Rally - Leicht' } },
            { name: 'G35',                                              src: 'cars/Infiniti/G35_2003_Sedan.mp4',                                        data: { production_year: '2003', drive: 'FR',  power: '262', weight: '1513', length: '4737', worth: '30.720 Credits' } },
        ],
    },
    isuzu: {
        manufacturer: 'Isuzu', country: 'Japan',                        // 3
        cars: [
            { name: 'Bellet 1600 GT-R',                                 src: 'cars/Isuzu/Bellett_1969_1600_GT-R.mp4',                                   data: { production_year: '1969', drive: 'FR',  power: '120', weight: '970',  length: '4015', worth: '~15.000 Credits' } },
            { name: '117 Coupe',                                        src: 'cars/Isuzu/117_1968_Coupe.mp4',                                           data: { production_year: '1968', drive: 'FR',  power: '120', weight: '1050', length: '4280', worth: '~13.000 Credits | Isuzu Sport Classics' } },
            { name: 'Piazza XE',                                        src: 'cars/Isuzu/Piazza_1981_XE.mp4',                                           data: { production_year: '1981', drive: 'FR',  power: '135', weight: '1189', length: '4310', worth: '~9.000 Credits' } },
        ],
    },
    jaguar: {
        manufacturer: 'Jaguar', country: 'Grossbritannien',             // 7
        cars: [
            { name: 'E-Type Coupe',                                     src: 'cars/Jaguar/E-Type_1961_Coupe.mp4',                                       data: { production_year: '1961', drive: 'FR',  power: '269', weight: '1300', length: '4440', worth: 'Britische GT-Serie' } },
            { name: 'S-Type R',                                         src: 'cars/Jaguar/S-Type_2002_R.mp4',                                           data: { production_year: '2002', drive: 'FR',  power: '405', weight: '1798', length: '4877', worth: '92.130 Credits' } },
            { name: 'XJ220',                                            src: 'cars/Jaguar/XJ220_1992.mp4',                                              data: { production_year: '1992', drive: 'MR',  power: '524', weight: '1372', length: '4860', worth: '749.140 Credits' } },
            { name: 'XJ220 LM Race Car',                                src: 'cars/Jaguar/XJ220_2001_LM_Race_Car.mp4',                                  data: { production_year: '2001', drive: 'MR',  power: '550', weight: '1375', length: '4860', worth: 'Paneuropäische Meisterschaft' } },
            { name: 'XJR-9 Race Car',                                   src: 'cars/Jaguar/XJR_1988_9_Race_Car.mp4',                                     data: { production_year: '1988', drive: 'MR',  power: '928', weight: '894',  length: '4800', worth: '3.500.000 Credits | 50% Spielfortschritt' } },
            { name: 'XKR',                                              src: 'cars/Jaguar/XKR_1999_Coupe.mp4',                                          data: { production_year: '1999', drive: 'FR',  power: '385', weight: '1640', length: '4760', worth: '~64.000 Credits' } },
            { name: 'XKR R',                                            src: 'cars/Jaguar/XKR_2002_R-Performance.mp4',                                  data: { production_year: '2002', drive: 'FR',  power: '395', weight: '1735', length: '4760', worth: '118.450 Credits' } },
        ],
    },
    jay_leno: {
        manufacturer: 'Jay Leno', country: 'Amerika',                   // 1
        cars: [
            { name: 'Tank Car',                                         src: 'cars/Jay_Leno/Tank_Car_2003.mp4',                                         data: { production_year: '2003', drive: 'FR',  power: '901', weight: '4309', length: '6400', worth: 'Fahrmissionen 11-20' } },
        ],
    },
    jensen_healey: {
        manufacturer: 'Jensen Healey', country: 'Grossbritannien',      // 1
        cars: [
            { name: 'Interceptor III',                                  src: 'cars/Jensen_Healey/Interceptor_1974_III.mp4',                             data: { production_year: '1974', drive: 'FR',  power: '390', weight: '1814', length: '4724', worth: '~30.000 Credits | Gold Internationale B-Lizenz' } },
        ],
    },
    lancia: {
        manufacturer: 'Lancia', country: 'Italien',                     // 5
        cars: [
            { name: 'Lancia Delta HF Integrale',                        src: 'cars/Lancia/Delta_HF_1991_Integrale_Evoluzione.mp4',                      data: { production_year: '1991', drive: '4WD', power: '213', weight: '1350', length: '3900', worth: '~23.000 Credits' } },
            { name: 'Lancia Delta HF Integrale Rally Car',              src: 'cars/Lancia/Delta_HF_1992_Integrale_Rally_Car.mp4',                       data: { production_year: '1992', drive: '4WD', power: '300', weight: '1120', length: '3900', worth: 'Umbria Rally Mittel' } },
            { name: 'Delta S4 Rally Car',                               src: 'cars/Lancia/Delta_S4_1985_Rally_Car.mp4',                                 data: { production_year: '1985', drive: '4WD', power: '456', weight: '890',  length: '4000', worth: 'Umbria Rally Schwer' } },
            { name: 'Stratos',                                          src: 'cars/Lancia/Stratos_1973.mp4',                                            data: { production_year: '1973', drive: 'MR',  power: '189', weight: '980',  length: '3710', worth: '133.970 Credits' } },
            { name: 'Stratos Rally Car',                                src: 'cars/Lancia/Stratos_1977_Rally_Car.mp4',                                  data: { production_year: '1977', drive: 'MR',  power: '277', weight: '880',  length: '4000', worth: 'Charmonix Rally Schwer' } },
        ],
    },
    land_rover: {
        manufacturer: 'Land Rover', country: 'Grossbritannien',         // 1
        cars: [
            { name: 'Range Stormer Concept',                            src: 'cars/Land_Rover/Range_Stormer_2004_Concept.mp4',                          data: { production_year: '2004', drive: '4WD', power: '350', weight: '2500', length: '4725', worth: 'Yosemite Rally I Leicht' } },
        ],
    },
    lexus: {
        manufacturer: 'Lexus', country: 'Japan',                        // 8
        cars: [
            { name: 'GS 300',                                           src: 'cars/Lexus/GS_300_1991.mp4',                                              data: { production_year: '1991', drive: 'FR',  power: '292', weight: '1679', length: '4865', worth: '~16.000 Credits' } },
            { name: 'GS 300',                                           src: 'cars/Lexus/GS_300_2000.mp4',                                              data: { production_year: '2000', drive: 'FR',  power: '290', weight: '1679', length: '4805', worth: '44.200 Credits' } },
            { name: 'GS 300 Vertex Edition',                            src: 'cars/Lexus/GS_300_2000_Vertex_Edition.mp4',                               data: { production_year: '2000', drive: 'FR',  power: '290', weight: '1679', length: '4805', worth: '45.500 Credits' } },
            { name: 'IS 200',                                           src: 'cars/Lexus/IS_200_1998.mp4',                                              data: { production_year: '1998', drive: 'FR',  power: '160', weight: '1310', length: '4400', worth: '20.700 Credits' } },
            { name: 'IS 200 J',                                         src: 'cars/Lexus/IS_200_1998_J.mp4',                                            data: { production_year: '1998', drive: 'FR',  power: '209', weight: '1340', length: '4000', worth: '24.000 Credits' } },
            { name: 'IS 300',                                           src: 'cars/Lexus/IS_300_2001_Sport_Cross.mp4',                                  data: { production_year: '2001', drive: 'FR',  power: '220', weight: '1471', length: '4415', worth: '27.600 Credits' } },
            { name: 'SC 300',                                           src: 'cars/Lexus/SC_300_1997.mp4',                                              data: { production_year: '1997', drive: 'FR',  power: '280', weight: '1560', length: '4900', worth: '~17.000 Credits' } },
            { name: 'SC 430',                                           src: 'cars/Lexus/SC_430_2001.mp4',                                              data: { production_year: '2001', drive: 'FR',  power: '279', weight: '1730', length: '4516', worth: '60.000 Credits' } },
        ],
    },
    lister: {
        manufacturer: 'Lister', country: 'Grossbritannien',             // 1
        cars: [
            { name: 'Storm V12 Race Car',                               src: 'cars/Lister/Storm_V12_1999_Race_Car.mp4',                                 data: { production_year: '1999', drive: 'FR',  power: '602', weight: '1438', length: '4547', worth: '1000 km Suzuka' } },
        ],
    },
    lotus: {
        manufacturer: 'Lotus', country: 'Grossbritannien',              // 14
        cars: [
            { name: 'Carlton',                                          src: 'cars/Lotus/Carlton_1990.mp4',                                             data: { production_year: '1990', drive: 'FR',  power: '382', weight: '1654', length: '4763', worth: '~29.000 Credits' } },
            { name: 'Elan S1',                                          src: 'cars/Lotus/Elan_1962_S1.mp4',                                             data: { production_year: '1962', drive: 'FR',  power: '106', weight: '639',  length: '3683', worth: 'Lotus Classics' } },
            { name: 'Elise Sport 190',                                  src: 'cars/Lotus/Elise_1998_Sport_190.mp4',                                     data: { production_year: '1998', drive: 'MR',  power: '190', weight: '670',  length: '3726', worth: '~42.000 Credits' } },
            { name: 'Motor Sport Elise',                                src: 'cars/Lotus/Elise_1999_Motor_Sport.mp4',                                   data: { production_year: '1999', drive: 'MR',  power: '204', weight: '700',  length: '4000', worth: '97.180 Credits' } },
            { name: 'Elise',                                            src: 'cars/Lotus/Elise_2000.mp4',                                               data: { production_year: '2000', drive: 'MR',  power: '122', weight: '714',  length: '3785', worth: '41.060 Credits' } },
            { name: 'Elise Type 72',                                    src: 'cars/Lotus/Elise_2001_Type_72.mp4',                                       data: { production_year: '2001', drive: 'MR',  power: '122', weight: '756',  length: '3785', worth: 'Elise-Trophy' } },
            { name: 'Elise 111S',                                       src: 'cars/Lotus/Elise_2003_111S.mp4',                                          data: { production_year: '2003', drive: 'MR',  power: '156', weight: '806',  length: '3785', worth: '51.680 Credits' } },
            { name: 'Elise 111R',                                       src: 'cars/Lotus/Elise_2004_111R.mp4',                                          data: { production_year: '2004', drive: 'MR',  power: '192', weight: '860',  length: '3785', worth: '54.410 Credits' } },
            { name: 'Esprit Turbo HC',                                  src: 'cars/Lotus/Esprit_1987_Turbo_HC.mp4',                                     data: { production_year: '1987', drive: 'MR',  power: '218', weight: '1145', length: '4191', worth: 'MR Challenge' } },
            { name: 'Esprit V8 GT',                                     src: 'cars/Lotus/Esprit_1998_V8_GT.mp4',                                        data: { production_year: '1998', drive: 'MR',  power: '358', weight: '1324', length: '4369', worth: '~63.000 Credits' } },
            { name: 'Esprit V8 SE',                                     src: 'cars/Lotus/Esprit_1998_V8_SE.mp4',                                        data: { production_year: '1998', drive: 'MR',  power: '358', weight: '1380', length: '4369', worth: '~66.000 Credits' } },
            { name: 'Esprit Sport 350',                                 src: 'cars/Lotus/Esprit_2000_Sport_350.mp4',                                    data: { production_year: '2000', drive: 'MR',  power: '358', weight: '1300', length: '4369', worth: '126.240 Credits' } },
            { name: 'Esprit V8',                                        src: 'cars/Lotus/Esprit_2002_V8.mp4',                                           data: { production_year: '2002', drive: 'MR',  power: '358', weight: '1379', length: '4369', worth: '116.520 Credits' } },
            { name: 'Europa Special',                                   src: 'cars/Lotus/Europa_Special_1971.mp4',                                      data: { production_year: '1971', drive: 'MR',  power: '128', weight: '730',  length: '4064', worth: 'Britische Leichtgewicht-Serie' } },
        ],
    },
    marcos: {
        manufacturer: 'Marcos', country: 'Grossbritannien',             // 1
        cars: [
            { name: 'Mini GT',                                          src: 'cars/Marcos/Mini_1970_GT.mp4',                                            data: { production_year: '1970', drive: 'FF',  power: '77',  weight: '559',  length: '3470', worth: 'Mini Sports Meeting' } },
        ],
    },
    mazda: {
        manufacturer: 'Mazda', country: 'Japan',                        // 44
        cars: [
            { name: '110 S L10 A',                                      src: 'cars/Mazda/110_1967_S_L10A.mp4',                                          data: { production_year: '1967', drive: 'FR',  power: '111', weight: '940',  length: '4140', worth: 'Club "RE"' } },
            { name: '110 S L10 B',                                      src: 'cars/Mazda/110_1968_S_L10B.mp4',                                          data: { production_year: '1968', drive: 'FR',  power: '128', weight: '959',  length: '4140', worth: '~25.000 Credits' } },
            { name: '2',                                                src: 'cars/Mazda/2_2003.mp4',                                                   data: { production_year: '2003', drive: 'FF',  power: '113', weight: '1080', length: '3925', worth: '14.500 Credits' } },
            { name: '323 F',                                            src: 'cars/Mazda/323_1993_F.mp4',                                               data: { production_year: '1993', drive: 'FF',  power: '176', weight: '1241', length: '4245', worth: '~7.000 Credits' } },
            { name: '6 Concept',                                        src: 'cars/Mazda/6_2001_Concept.mp4',                                           data: { production_year: '2001', drive: 'FF',  power: '178', weight: '1300', length: '4670', worth: 'FF Herausforderung' } },
            { name: '6 Touring Car',                                    src: 'cars/Mazda/6_2002_Touring_Car.mp4',                                       data: { production_year: '2002', drive: '4WD', power: '310', weight: '1070', length: '4670', worth: 'Tsukuba Regen-Rennen Normal' } },
            { name: '6',                                                src: 'cars/Mazda/6_2003.mp4',                                                   data: { production_year: '2003', drive: 'FF',  power: '178', weight: '1390', length: '4670', worth: '23.500 Credits' } },
            { name: '6 MPS',                                            src: 'cars/Mazda/6_2005_MPS.mp4',                                               data: { production_year: '2005', drive: '4WD', power: '272', weight: '1500', length: '4690', worth: 'Clubman Cup' } },
            { name: '787 B Race Car',                                   src: 'cars/Mazda/787_1991_B_Race_Car.mp4',                                      data: { production_year: '1991', drive: 'MR',  power: '803', weight: '830',  length: '4782', worth: '3.500.000 Credits' } },
            { name: '787 B Race Car Black Edition',                     src: 'cars/Mazda/787_1991_B_Race_Car_Black_Edition.mp4',                        data: { production_year: '1991', drive: 'MR',  power: '803', weight: '830',  length: '4782', worth: '~1.500.000 Credits' } },
            { name: 'Autozam AZ-1',                                     src: 'cars/Mazda/Autozam_1992_AZ-1.mp4',                                        data: { production_year: '1992', drive: 'MR',  power: '64',  weight: '720',  length: '3295', worth: '~8.000 Credits' } },
            { name: 'Carol 360 Deluxe',                                 src: 'cars/Mazda/Carol_1962_360_Deluxe.mp4',                                    data: { production_year: '1962', drive: 'RR',  power: '20',  weight: '560',  length: '2990', worth: '~13.000 Credits' } },
            { name: 'Demio',                                            src: 'cars/Mazda/Demio_1999.mp4',                                               data: { production_year: '1999', drive: 'FF',  power: '100', weight: '960',  length: '3800', worth: '~8.000 Credits' } },
            { name: 'Familia Sport 20',                                 src: 'cars/Mazda/Familia_2002_Sport_20.mp4',                                    data: { production_year: '2002', drive: 'FF',  power: '165', weight: '1170', length: '4380', worth: '18.980 Credits' } },
            { name: 'Kusabi',                                           src: 'cars/Mazda/Kusabi_2003.mp4',                                              data: { production_year: '2003', drive: 'FF',  power: '150', weight: '900',  length: '3800', worth: 'Silber Nationale B-Lizenz' } },
            { name: 'MX-Crossport Concept',                             src: 'cars/Mazda/MX_Crossport_2005_Concept.mp4',                                data: { production_year: '2005', drive: '4WD', power: '260', weight: '1600', length: '4630', worth: 'NR-A Roadster Cup' } },
            { name: 'MX-5',                                             src: 'cars/Mazda/MX-5_1989.mp4',                                                data: { production_year: '1989', drive: 'FR',  power: '120', weight: '940',  length: '3970', worth: '~9.000 Credits' } },
            { name: 'MX-5 J-Limited I',                                 src: 'cars/Mazda/MX-5_1991_J-Limited_I.mp4',                                    data: { production_year: '1991', drive: 'FR',  power: '120', weight: '950',  length: '3970', worth: '~9.000 Credits' } },
            { name: 'MX-5 J-Limited II',                                src: 'cars/Mazda/MX-5_1993_J-Limited_II.mp4',                                   data: { production_year: '1993', drive: 'FR',  power: '132', weight: '990',  length: '3950', worth: '~7.000 Credits' } },
            { name: 'MX-5 V-Special II',                                src: 'cars/Mazda/MX-5_1993_V-Special_Type_II.mp4',                              data: { production_year: '1993', drive: 'FR',  power: '132', weight: '1000', length: '3950', worth: '~9.000 Credits' } },
            { name: 'MX-5 S-Special I',                                 src: 'cars/Mazda/MX-5_1995_S-Special_Type_I.mp4',                               data: { production_year: '1995', drive: 'FR',  power: '132', weight: '990',  length: '3950', worth: '~10.000 Credits' } },
            { name: 'MX-5 VR-Limited',                                  src: 'cars/Mazda/MX-5_1995_VR-Limited.mp4',                                     data: { production_year: '1995', drive: 'FR',  power: '132', weight: '990',  length: '3950', worth: '~10.000 Credits' } },
            { name: 'MX-5 SR-Limited',                                  src: 'cars/Mazda/MX-5_1997_SR-Limited.mp4',                                     data: { production_year: '1997', drive: 'FR',  power: '132', weight: '1000', length: '3950', worth: '~12.000 Credits' } },
            { name: 'MX-5 1.8 RS',                                      src: 'cars/Mazda/MX-5_1998_1.8_RS.mp4',                                         data: { production_year: '1998', drive: 'FR',  power: '145', weight: '1030', length: '3955', worth: '~12.000 Credits' } },
            { name: 'MX-5 1800 RS',                                     src: 'cars/Mazda/MX-5_2000_1800_RS.mp4',                                        data: { production_year: '2000', drive: 'FR',  power: '163', weight: '1070', length: '3955', worth: '~12.000 Credits' } },
            { name: 'MX-5 1800 RS',                                     src: 'cars/Mazda/MX-5_2004_1800_RS.mp4',                                        data: { production_year: '2004', drive: 'FR',  power: '163', weight: '1080', length: '3955', worth: '23.500 Credits' } },
            { name: 'RX-7 GT-Limited',                                  src: 'cars/Mazda/RX-7_1985_GT-Limited.mp4',                                     data: { production_year: '1985', drive: 'FR',  power: '185', weight: '1280', length: '4290', worth: '~6.000 Credits' } },
            { name: 'RX-7 GT-X',                                        src: 'cars/Mazda/RX-7_1990_GT-X.mp4',                                           data: { production_year: '1990', drive: 'FR',  power: '207', weight: '1251', length: '4335', worth: '~8.000 Credits' } },
            { name: 'RX-7 Infini III',                                  src: 'cars/Mazda/RX-7_1990_Infini_III.mp4',                                     data: { production_year: '1990', drive: 'FR',  power: '212', weight: '1230', length: '4335', worth: '~10.000 Credits' } },
            { name: 'RX-7 Type R',                                      src: 'cars/Mazda/RX-7_1991_Type_R.mp4',                                         data: { production_year: '1991', drive: 'FR',  power: '256', weight: '1260', length: '4280', worth: '~14.000 Credits' } },
            { name: 'RX-7 Type RZ',                                     src: 'cars/Mazda/RX-7_1992_Type_RZ.mp4',                                        data: { production_year: '1992', drive: 'FR',  power: '256', weight: '1230', length: '4280', worth: '~14.000 Credits' } },
            { name: 'RX-7 Type R-S',                                    src: 'cars/Mazda/RX-7_1995_Type_R-S.mp4',                                       data: { production_year: '1995', drive: 'FR',  power: '256', weight: '1260', length: '4280', worth: '~19.000 Credits' } },
            { name: 'RX-7 Type RS',                                     src: 'cars/Mazda/RX-7_1996_Type_RS.mp4',                                        data: { production_year: '1996', drive: 'FR',  power: '266', weight: '1280', length: '4280', worth: '~18.000 Credits' } },
            { name: 'RX-7 Type RS-R',                                   src: 'cars/Mazda/RX-7_1997_Type_RS-R.mp4',                                      data: { production_year: '1997', drive: 'FR',  power: '266', weight: '1280', length: '4285', worth: '~18.000 Credits' } },
            { name: 'RX-7 LM Race Car',                                 src: 'cars/Mazda/RX-7_2001_LM_Race_Car.mp4',                                    data: { production_year: '2001', drive: 'FR',  power: '508', weight: '1080', length: '4000', worth: '4 Stunden Roadster Langstrecke' } },
            { name: 'RX-7 Type R Bathurst R',                           src: 'cars/Mazda/RX-7_2001_Type_R_Bathurst_R.mp4',                              data: { production_year: '2001', drive: 'FR',  power: '294', weight: '1260', length: '4285', worth: '~25.000 Credits' } },
            { name: 'RX-7 Spirit R Type A',                             src: 'cars/Mazda/RX-7_2002_Spirit_R_Type_A.mp4',                                data: { production_year: '2002', drive: 'FR',  power: '297', weight: '1270', length: '4285', worth: '39.980 Credits' } },
            { name: 'RX-7 BP Falken',                                   src: 'cars/Mazda/RX-7_2003_BP_Falken.mp4',                                      data: { production_year: '2003', drive: 'FR',  power: '410', weight: '1229', length: '4335', worth: '200.000 Credits' } },
            { name: 'RX-8 Concept',                                     src: 'cars/Mazda/RX-8_2001_Concept_I.mp4',                                      data: { production_year: '2001', drive: 'FR',  power: '285', weight: '1200', length: '4326', worth: 'Tsukuba Regen-Rennen Leicht' } },
            { name: 'RX-8 Concept LM Race Car',                         src: 'cars/Mazda/RX-8_2001_Concept_LM_Race_Car.mp4',                            data: { production_year: '2001', drive: 'FR',  power: '508', weight: '1100', length: '4000', worth: 'RX-8 Cup' } },
            { name: 'RX-8',                                             src: 'cars/Mazda/RX-8_2003.mp4',                                                data: { production_year: '2003', drive: 'FR',  power: '210', weight: '1310', length: '4425', worth: '24.000 Credits' } },
            { name: 'RX-8 Type E',                                      src: 'cars/Mazda/RX-8_2003_Type_E.mp4',                                         data: { production_year: '2003', drive: 'FR',  power: '210', weight: '1330', length: '4425', worth: '27.500 Credits' } },
            { name: 'RX-8 Type S',                                      src: 'cars/Mazda/RX-8_2003_Type_S.mp4',                                         data: { production_year: '2003', drive: 'FR',  power: '285', weight: '1310', length: '4425', worth: '27.500 Credits' } },
        ],
    },
    mercedes_benz: {
        manufacturer: 'Mercedes-Benz', country: 'Deutschland',          // 20
        cars: [
            { name: 'A 160 Avantgarde',                                 src: 'cars/Mercedes-Benz/A_1998_160_Avantgarde.mp4',                            data: { production_year: '1998', drive: 'FF',  power: '102', weight: '1114', length: '3575', worth: '~16.000 Credits' } },
            { name: 'C9 Sauber Race Car',                               src: 'cars/Mercedes-Benz/C_1989_9_Race_Car.mp4',                                data: { production_year: '1989', drive: 'MR',  power: '940', weight: '893',  length: '4700', worth: 'Formula GT Weltmeisterschaft | 300 km Grand Valley' } },
            { name: 'CL 600',                                           src: 'cars/Mercedes-Benz/CL_2000_600.mp4',                                      data: { production_year: '2000', drive: 'FR',  power: '367', weight: '1955', length: '4000', worth: '177.850 Credits' } },
            { name: 'CLK GTR Race Car',                                 src: 'cars/Mercedes-Benz/CLK_1998_GTR_Race_Car.mp4',                            data: { production_year: '1998', drive: 'MR',  power: '797', weight: '939',  length: '4900', worth: 'Deutsche Tourenwagen Meisterschaft' } },
            { name: 'CLK 55 AMG',                                       src: 'cars/Mercedes-Benz/CLK_2000_55.mp4',                                      data: { production_year: '2000', drive: 'FR',  power: '352', weight: '1620', length: '4000', worth: '147.770 Credits' } },
            { name: 'CLK DTM Touring Car',                              src: 'cars/Mercedes-Benz/CLK_2000_Touring_Car.mp4',                             data: { production_year: '2000', drive: 'FR',  power: '450', weight: '1000', length: '4655', worth: 'Legende der Silberpfeile' } },
            { name: 'E 190 2.5 Evolution II',                           src: 'cars/Mercedes-Benz/E_190_1991_2.5_16_Evolution_II.mp4',                   data: { production_year: '1991', drive: 'FR',  power: '235', weight: '1340', length: '4544', worth: '67.910 Credits' } },
            { name: 'E 190 2.5 Evolution II Touring Car',               src: 'cars/Mercedes-Benz/E_190_1992_2.5_16_Evolution_II_Touring_Car.mp4',       data: { production_year: '1992', drive: 'FR',  power: '382', weight: '979',  length: '4544', worth: 'Schwarzwald Liga B' } },
            { name: 'E 55 AMG',                                         src: 'cars/Mercedes-Benz/E_2002_55.mp4',                                        data: { production_year: '2002', drive: 'FR',  power: '476', weight: '1910', length: '4834', worth: '105.330 Credits' } },
            { name: 'Motor Carriage',                                   src: 'cars/Mercedes-Benz/Motor_Carriage_1886.mp4',                              data: { production_year: '1886', drive: 'MR',  power: '1',   weight: '290',  length: '2530', worth: 'Welt-Klassik-Meisterschaft' } },
            { name: 'Motor Wagen',                                      src: 'cars/Mercedes-Benz/Motor_Wagen_1886.mp4',                                 data: { production_year: '1886', drive: 'RR',  power: '1',   weight: '265',  length: '4000', worth: 'Europa-Klassik-Meisterschaft' } },
            { name: 'SL 300 Coupe',                                     src: 'cars/Mercedes-Benz/SL_1954_300_Coupe.mp4',                                data: { production_year: '1954', drive: 'FR',  power: '215', weight: '1295', length: '4520', worth: 'SL Herausforderung' } },
            { name: 'SL 500',                                           src: 'cars/Mercedes-Benz/SL_1998_500.mp4',                                      data: { production_year: '1998', drive: 'FR',  power: '306', weight: '1799', length: '4500', worth: '~110.000 Credits' } },
            { name: 'SL 600',                                           src: 'cars/Mercedes-Benz/SL_1998_600.mp4',                                      data: { production_year: '1998', drive: 'FR',  power: '394', weight: '2029', length: '4499', worth: '~136.000 Credits' } },
            { name: 'SL 500',                                           src: 'cars/Mercedes-Benz/SL_2002_500.mp4',                                      data: { production_year: '2002', drive: 'FR',  power: '306', weight: '1839', length: '4535', worth: '127.620 Credits' } },
            { name: 'SL 55 AMG',                                        src: 'cars/Mercedes-Benz/SL_2002_550.mp4',                                      data: { production_year: '2002', drive: 'FR',  power: '500', weight: '1970', length: '4535', worth: '168.120 Credits' } },
            { name: 'SL 600',                                           src: 'cars/Mercedes-Benz/SL_2004_600.mp4',                                      data: { production_year: '2004', drive: 'FR',  power: '500', weight: '2025', length: '4535', worth: '177.700 Credits' } },
            { name: 'SL 65 AMG',                                        src: 'cars/Mercedes-Benz/SL_2004_650.mp4',                                      data: { production_year: '2004', drive: 'FR',  power: '613', weight: '2028', length: '4535', worth: '190.700 Credits' } },
            { name: 'SLK 230 Kompressor',                               src: 'cars/Mercedes-Benz/SLK_1998_230_Kompressor.mp4',                          data: { production_year: '1998', drive: 'FR',  power: '195', weight: '1325', length: '3995', worth: '~27.000 Credits' } },
            { name: 'SLR McLaren',                                      src: 'cars/Mercedes-Benz/SLR_2003_McLaren.mp4',                                 data: { production_year: '2003', drive: 'FR',  power: '625', weight: '1768', length: '4656', worth: '610.000 Credits' } },
        ],
    },
    mercury: {
        manufacturer: 'Mercury', country: 'Amerika',                    // 1
        cars: [
            { name: 'Cougar XR-7',                                      src: 'cars/Mercury/Cougar_1967_XR-7.mp4',                                       data: { production_year: '1976', drive: 'FR',  power: '325', weight: '1598', length: '4824', worth: '~30.000 Credits | Bronze S-Lizenz' } },
        ],
    },
    mg: {
        manufacturer: 'MG', country: 'Grossbritannien',                 // 2
        cars: [
            { name: 'MGF',                                              src: 'cars/MG/MGF_1997.mp4',                                                    data: { production_year: '1997', drive: 'MR',  power: '146', weight: '1070', length: '3909', worth: '~21.000 Credits | MG-Festival' } },
            { name: 'TF 160',                                           src: 'cars/MG/TF_2003_160.mp4',                                                 data: { production_year: '2003', drive: 'MR',  power: '161', weight: '1150', length: '3962', worth: '38.860 Credits' } },
        ],
    },
    mines: {
        manufacturer: "Mine's", country: 'Japan',                       // 2
        cars: [
            { name: 'Lancer Evo 6',                                     src: 'cars/Mines/Lancer_2000_Evo_6.mp4',                                        data: { production_year: '2000', drive: '4WD', power: '400', weight: '1210', length: '4350', worth: '150.000 Credits' } },
        { name: 'Skyline GT-R N1 V-Spec',                               src: 'cars/Mines/Skyline_2000_GT-R_N1_V-Spec.mp4',                              data: { production_year: '2000', drive: '4WD', power: '600', weight: '1540', length: '4600', worth: '200.000 Credits' } },
        ],
    },
    mini: {
        manufacturer: 'Mini', country: 'Grossbritannien',               // 3
        cars: [
            { name: 'Mini One',                                         src: 'cars/Mini/One_2002.mp4',                                                  data: { production_year: '2002', drive: 'FF',  power: '90',  weight: '1125', length: '3626', worth: '19.620 Credits' } },
            { name: 'Mini One Cooper',                                  src: 'cars/Mini/One_2002_Cooper.mp4',                                           data: { production_year: '2002', drive: 'FF',  power: '115', weight: '1115', length: '3626', worth: '22.190 Credits' } },
            { name: 'Mini One Cooper S',                                src: 'cars/Mini/One_2002_Cooper_S.mp4',                                         data: { production_year: '2002', drive: 'FF',  power: '163', weight: '1120', length: '3626', worth: '26.760 Credits' } },
        ],
    },
    mitsubishi: {
        manufacturer: 'Mitsubishi', country: 'Japan',                   // 40
        cars: [
            { name: '3000GT MR',                                        src: 'cars/Mitsubishi/3000GT_1995_MR.mp4',                                      data: { production_year: '1995', drive: '4WD', power: '295', weight: '1680', length: '4600', worth: '~20.000 Credits' } },
            { name: '3000GT SR',                                        src: 'cars/Mitsubishi/3000GT_1995_SR.mp4',                                      data: { production_year: '1995', drive: '4WD', power: '221', weight: '1610', length: '4575', worth: '~15.000 Credits' } },
            { name: '3000GT VR-4',                                      src: 'cars/Mitsubishi/3000GT_1995_VR-4.mp4',                                    data: { production_year: '1995', drive: '4WD', power: '310', weight: '1710', length: '4600', worth: '~15.000 Credits' } },
            { name: '3000GT SR',                                        src: 'cars/Mitsubishi/3000GT_1996_SR.mp4',                                      data: { production_year: '1996', drive: '4WD', power: '221', weight: '1610', length: '4575', worth: '~15.000 Credits' } },
            { name: '3000GT VR-4',                                      src: 'cars/Mitsubishi/3000GT_1996_VR-4.mp4',                                    data: { production_year: '1996', drive: '4WD', power: '310', weight: '1710', length: '4600', worth: '~15.000 Credits' } },
            { name: '3000GT MR',                                        src: 'cars/Mitsubishi/3000GT_1998_MR.mp4',                                      data: { production_year: '1998', drive: '4WD', power: '295', weight: '1680', length: '4600', worth: '~20.000 Credits' } },
            { name: '3000GT SR',                                        src: 'cars/Mitsubishi/3000GT_1998_SR.mp4',                                      data: { production_year: '1998', drive: '4WD', power: '221', weight: '1610', length: '4575', worth: '~15.000 Credits' } },
            { name: '3000GT VR-4',                                      src: 'cars/Mitsubishi/3000GT_1998_VR-4.mp4',                                    data: { production_year: '1998', drive: '4WD', power: '310', weight: '1710', length: '4600', worth: '~15.000 Credits' } },
            { name: 'Airtrek Turbo-R',                                  src: 'cars/Mitsubishi/Airtrek_2002_Turbo-R.mp4',                                data: { production_year: '2002', drive: '4WD', power: '236', weight: '1520', length: '4465', worth: '22.950 Credits' } },
            { name: 'Colt 1.5 Sport X',                                 src: 'cars/Mitsubishi/Colt_2002_1.5_Sport_X_Version.mp4',                       data: { production_year: '2002', drive: 'FF',  power: '97',  weight: '1030', length: '3870', worth: '14.950 Credits' } },
            { name: 'CZ-3 Tarmac',                                      src: 'cars/Mitsubishi/CZ-3_2001_Tarmac.mp4',                                    data: { production_year: '2001', drive: '4WD', power: '218', weight: '1200', length: '4000', worth: 'Schweizer Alpen Einfach' } },
            { name: 'CZ-3 Tarmac Rally Car',                            src: 'cars/Mitsubishi/CZ-3_2002_Tarmac_Rally_Car.mp4',                          data: { production_year: '2002', drive: '4WD', power: '335', weight: '1200', length: '4000', worth: 'Grand Canyon Normal' } },
            { name: 'Eclipse GT',                                       src: 'cars/Mitsubishi/Eclipse_1995_GT.mp4',                                     data: { production_year: '1995', drive: 'FF',  power: '210', weight: '1330', length: '4370', worth: '~7.000 Credits' } },
            { name: 'Eclipse GTS Spyder',                               src: 'cars/Mitsubishi/Eclipse_2003_GTS_Spyder.mp4',                             data: { production_year: '2003', drive: 'FF',  power: '210', weight: '1510', length: '4455', worth: '26.780 Credits' } },
            { name: 'Eclipse GT',                                       src: 'cars/Mitsubishi/Eclipse_2006_GT.mp4',                                     data: { production_year: '2006', drive: 'FF',  power: '263', weight: '1575', length: '4564', worth: '25.000 Credits' } },
            { name: 'FTO GPX',                                          src: 'cars/Mitsubishi/FTO_1994_GPX.mp4',                                        data: { production_year: '1994', drive: 'FF',  power: '197', weight: '1150', length: '4365', worth: '~14.000 Credits' } },
            { name: 'FTO GR',                                           src: 'cars/Mitsubishi/FTO_1994_GR.mp4',                                         data: { production_year: '1994', drive: 'FF',  power: '197', weight: '1150', length: '4365', worth: '~14.000 Credits' } },
            { name: 'FTO GPR',                                          src: 'cars/Mitsubishi/FTO_1997_GPR.mp4',                                        data: { production_year: '1997', drive: 'FF',  power: '197', weight: '1150', length: '4365', worth: '~14.000 Credits' } },
            { name: 'FTO GPX',                                          src: 'cars/Mitsubishi/FTO_1997_GPX.mp4',                                        data: { production_year: '1997', drive: 'FF',  power: '197', weight: '1150', length: '4365', worth: '~14.000 Credits' } },
            { name: 'FTO GR',                                           src: 'cars/Mitsubishi/FTO_1997_GR.mp4',                                         data: { production_year: '1997', drive: 'FF',  power: '197', weight: '1150', length: '4365', worth: '~14.000 Credits' } },
            { name: 'FTO Super Touring Car',                            src: 'cars/Mitsubishi/FTO_1997_Super_Touring_Car.mp4',                          data: { production_year: '1997', drive: 'FF',  power: '197', weight: '1150', length: '4365', worth: '~14.000 Credits' } },
            { name: 'FTO GPR',                                          src: 'cars/Mitsubishi/FTO_1999_GPR.mp4',                                        data: { production_year: '1999', drive: 'FF',  power: '197', weight: '1150', length: '4365', worth: '~14.000 Credits' } },
            { name: 'FTO GPX',                                          src: 'cars/Mitsubishi/FTO_1999_GPX.mp4',                                        data: { production_year: '1999', drive: 'FF',  power: '197', weight: '1150', length: '4365', worth: '~14.000 Credits' } },
            { name: 'Galant GTO MR',                                    src: 'cars/Mitsubishi/Galant_1970_GTO_MR.mp4',                                  data: { production_year: '1970', drive: 'FR',  power: '118', weight: '980',  length: '4080', worth: '21.800 Credits | ~7.000 Credits' } },
            { name: 'Galant 2.0 DOHC Turbo VR-4',                       src: 'cars/Mitsubishi/Galant_1989_2.0_DOHC_Turbo_VR-4.mp4',                     data: { production_year: '1989', drive: '4WD', power: '202', weight: '1340', length: '4560', worth: '~9.000 Credits' } },
            { name: 'i Concept',                                        src: 'cars/Mitsubishi/i_2003_Concept.mp4',                                      data: { production_year: '2003', drive: 'MR',  power: '67',  weight: '790',  length: '3516', worth: 'Mirage Cup' } },
            { name: 'HSRII Concept',                                    src: 'cars/Mitsubishi/HSR_1989_2_Concept.mp4',                                  data: { production_year: '1989', drive: '4WD', power: '350', weight: '790',  length: '3516', worth: 'Mirage Cup' } },
            { name: 'Lancer 1600 GSR',                                  src: 'cars/Mitsubishi/Lancer_1973_1600_GSR.mp4',                                data: { production_year: '1973', drive: 'FR',  power: '108', weight: '825',  length: '4000', worth: '14.200 Credits' } },
            { name: 'Lancer 1600 GSR Rally Car',                        src: 'cars/Mitsubishi/Lancer_1974_1600_GSR_Rally_Car.mp4',                      data: { production_year: '1974', drive: 'FR',  power: '160', weight: '825',  length: '3965', worth: 'Evolution Meeting' } },
            { name: 'Lancer EX 1800 GSR IC Turbo',                      src: 'cars/Mitsubishi/Lancer_1983_EX_1800_GSR_IC_Turbo.mp4',                    data: { production_year: '1983', drive: 'FR',  power: '152', weight: '1085', length: '4000', worth: '~9.000 Credits' } },
            { name: 'Lancer Evolution I GSR',                           src: 'cars/Mitsubishi/Lancer_1992_Evolution_1_GSR.mp4',                         data: { production_year: '1992', drive: '4WD', power: '238', weight: '1240', length: '4310', worth: '~12.000 Credits' } },
            { name: 'Lancer Evolution II GSR',                          src: 'cars/Mitsubishi/Lancer_1994_Evolution_2_GSR.mp4',                         data: { production_year: '1994', drive: '4WD', power: '254', weight: '1250', length: '4310', worth: '~14.000 Credits' } },
            { name: 'Lancer Evolution III',                             src: 'cars/Mitsubishi/Lancer_1995_Evolution_3.mp4',                             data: { production_year: '1995', drive: '4WD', power: '264', weight: '1260', length: '4310', worth: '~11.000 Credits' } },
            { name: 'Lancer Evolution IV',                              src: 'cars/Mitsubishi/Lancer_1996_Evolution_4.mp4',                             data: { production_year: '1996', drive: '4WD', power: '273', weight: '1350', length: '4330', worth: '~11.000 Credits' } },
            { name: 'Lancer Evolution IV Rally Car',                    src: 'cars/Mitsubishi/Lancer_1997_Evolution_4_Rally_Car.mp4',                   data: { production_year: '1997', drive: '4WD', power: '289', weight: '1230', length: '4330', worth: 'Eisrennen Mittel' } },
            { name: 'Lancer Evolution V GSR',                           src: 'cars/Mitsubishi/Lancer_1998_Evolution_5_GSR.mp4',                         data: { production_year: '1998', drive: '4WD', power: '306', weight: '1360', length: '4350', worth: '~21.000 Credits' } },
            { name: 'Lancer Evolution VI GSR',                          src: 'cars/Mitsubishi/Lancer_1999_Evolution_6_GSR.mp4',                         data: { production_year: '1999', drive: '4WD', power: '302', weight: '1360', length: '4350', worth: '~21.000 Credits' } },
            { name: 'Lancer Evolution VI Rally Car',                    src: 'cars/Mitsubishi/Lancer_1999_Evolution_6_Rally_Car.mp4',                   data: { production_year: '1999', drive: '4WD', power: '291', weight: '1230', length: '4350', worth: '750.000 Credits' } },
            { name: 'Lancer Evolution VI RS',                           src: 'cars/Mitsubishi/Lancer_1999_Evolution_6_RS.mp4',                          data: { production_year: '1999', drive: '4WD', power: '302', weight: '1260', length: '4350', worth: '~17.000 Credits' } },
            { name: 'Lancer Evolution VI GSR Tommi Makinen Edition',    src: 'cars/Mitsubishi/Lancer_2000_Evolution_6_GSR_Tommi_Makinen_Edition.mp4',   data: { production_year: '2000', drive: '4WD', power: '294', weight: '1360', length: '4350', worth: '~16.000 Credits' } },
            { name: 'Lancer Evolution VI RS Tommi Makinen Edition',     src: 'cars/Mitsubishi/Lancer_2000_Evolution_6_RS_Tommi_Makinen_Edition.mp4',    data: { production_year: '2000', drive: '4WD', power: '294', weight: '1360', length: '4350', worth: '~16.000 Credits' } },
            { name: 'Lancer Evolution VII GSR',                         src: 'cars/Mitsubishi/Lancer_2001_Evolution_7_GSR.mp4',                         data: { production_year: '2001', drive: '4WD', power: '305', weight: '1400', length: '4455', worth: '~20.000 Credits' } },
            { name: 'Lancer Evolution VII RS',                          src: 'cars/Mitsubishi/Lancer_2001_Evolution_7_RS.mp4',                          data: { production_year: '2001', drive: '4WD', power: '305', weight: '1400', length: '4455', worth: '~20.000 Credits' } },
            { name: 'Lancer Evolution VII GT-A',                        src: 'cars/Mitsubishi/Lancer_2002_Evolution_7_GT-A.mp4',                        data: { production_year: '2002', drive: '4WD', power: '302', weight: '1480', length: '4455', worth: '~21.000 Credits' } },
            { name: 'Lancer Evolution VIII GSR',                        src: 'cars/Mitsubishi/Lancer_2003_Evolution_8_GSR.mp4',                         data: { production_year: '2003', drive: '4WD', power: '306', weight: '1410', length: '4490', worth: '32.980 Credits' } },
            { name: 'Lancer Evolution VIII Rally Car',                  src: 'cars/Mitsubishi/Lancer_2003_Evolution_8_Rally_Car.mp4',                   data: { production_year: '2003', drive: '4WD', power: '312', weight: '1230', length: '4490', worth: '1.250.000 Credits' } },
            { name: 'Lancer Evolution VIII RS',                         src: 'cars/Mitsubishi/Lancer_2003_Evolution_8_RS.mp4',                          data: { production_year: '2003', drive: '4WD', power: '305', weight: '1320', length: '4490', worth: '31.600 Credits' } },
            { name: 'Lancer Evolution VIII MR GSR',                     src: 'cars/Mitsubishi/Lancer_2004_Evolution_8_MR_GSR.mp4',                      data: { production_year: '2004', drive: '4WD', power: '304', weight: '1400', length: '4490', worth: '33.980 Credits' } },
            { name: 'Legnum VR-4 Type V',                               src: 'cars/Mitsubishi/Legnum_1998_VR-4.mp4',                                    data: { production_year: '1998', drive: '4WD', power: '276', weight: '1550', length: '4740', worth: '~18.000 Credits' } },
            { name: 'Minica Dangan ZZ',                                 src: 'cars/Mitsubishi/Minica_1989_Dangan_ZZ.mp4',                               data: { production_year: '1989', drive: 'FF',  power: '60',  weight: '640',  length: '3195', worth: '~3.000 Credits' } },
            { name: 'Mirage 1400 GLX',                                  src: 'cars/Mitsubishi/Mirage_1978_1400_GLX.mp4',                                data: { production_year: '1978', drive: 'FF',  power: '80',  weight: '795',  length: '3790', worth: '9.220 Credits' } },
            { name: 'Mirage Cyborg ZR',                                 src: 'cars/Mitsubishi/Mirage_1997_Cyborg_ZR.mp4',                               data: { production_year: '1997', drive: 'FF',  power: '166', weight: '1060', length: '3890', worth: '~7.000 Credits' } },
            { name: 'Pajero Rally Raid Car',                            src: 'cars/Mitsubishi/Pajero_1985_Rally_Raid_Car.mp4',                          data: { production_year: '1985', drive: '4WD', power: '230', weight: '1202', length: '3920', worth: 'Tahiti Schwer' } },
            { name: 'Pajero Rally Raid Car',                            src: 'cars/Mitsubishi/Pajero_2003_Rally_Raid_Car.mp4',                          data: { production_year: '2003', drive: '4WD', power: '272', weight: '1825', length: '4223', worth: 'Yosemite Rally II Schwer' } },
            { name: 'Starion 4WD Rally Car',                            src: 'cars/Mitsubishi/Starion_1984_4WD_Rally_Car.mp4',                          data: { production_year: '1984', drive: '4WD', power: '360', weight: '1250', length: '4000', worth: 'Grand Canyon Schwer' } },
        ],
    },
    mugen: {
        manufacturer: 'Mugen', country: 'Japan',                        // 1
        cars: [
            { name: 'S 2000',                                           src: 'cars/Mugen/S2000_2000.mp4',                                               data: { production_year: '2000', drive: 'FR',  power: '247', weight: '1240', length: '4178', worth: '75.000 Credits' } },
        ],
    },
    nike: {
        manufacturer: 'Nike', country: 'Amerika',                       // 1
        cars: [
            { name: 'One',                                              src: 'cars/Nike/One_2022.mp4',                                                  data: { production_year: '2022', drive: '4WD', power: '259', weight: '760',  length: '4000', worth: 'Internationale B-Lizenz | Saleen S7 Club' } },
        ],
    },
    nismo: {
        manufacturer: 'Nismo', country: 'Japan',                        // 7
        cars: [
            { name: '350 Z S-Tune',                                     src: 'cars/Nismo/350_Z_2002_S-Tune.mp4',                                        data: { production_year: '2002', drive: 'FR',  power: '278', weight: '1320', length: '4000', worth: '55.000 Credits' } },
            { name: '350 Z Z-Tune',                                     src: 'cars/Nismo/350_Z_2003_Z-Tune.mp4',                                        data: { production_year: '2003', drive: 'FR',  power: '390', weight: '1250', length: '4000', worth: '150.000 Credits' } },
            { name: 'Silvia 270 R',                                     src: 'cars/Nismo/Silvia_1994_270_R.mp4',                                        data: { production_year: '1994', drive: 'FR',  power: '270', weight: '1240', length: '4000', worth: 'Bronze Internationale A-Lizenz' } },
            { name: 'Skyline LM',                                       src: 'cars/Nismo/Skyline_1995_LM.mp4',                                          data: { production_year: '1995', drive: '4WD', power: '300', weight: '1580', length: '4675', worth: 'Rotes "R"-Emblem' } },
            { name: 'Skyline 400 R',                                    src: 'cars/Nismo/Skyline_1996_400_R.mp4',                                       data: { production_year: '1996', drive: '4WD', power: '394', weight: '1550', length: '4675', worth: 'Japanische 90er-Rennen' } },
            { name: 'Skyline R-Tune',                                   src: 'cars/Nismo/Skyline_1999_R-Tune.mp4',                                      data: { production_year: '1999', drive: '4WD', power: '458', weight: '1560', length: '4600', worth: '125.000 Credits' } },
            { name: 'Skyline S-Tune',                                   src: 'cars/Nismo/Skyline_2000_S-Tune.mp4',                                      data: { production_year: '2000', drive: '4WD', power: '394', weight: '1500', length: '4675', worth: '90.000 Credits' } },
        ],
    },
    nissan: {
        manufacturer: 'Nissan', country: 'Japan',                       // 84
        cars: [
            { name: '200 SX',                                           src: 'cars/Nissan/200_SX_1996.mp4',                                             data: { production_year: '1996', drive: 'FR',  power: '203', weight: '1220', length: '4520', worth: '12.500 Credits' } },
            { name: '200 SX S14',                                       src: 'cars/Nissan/200_SX_S14_1996.mp4',                                         data: { production_year: '1996', drive: 'FR',  power: '216', weight: '1250', length: '4520', worth: '~12.000 Credits' } },
            { name: '240 ZG',                                           src: 'cars/Nissan/240_1971_ZG.mp4',                                             data: { production_year: '1971', drive: 'FR',  power: '147', weight: '1010', length: '4305', worth: 'Club "Z"' } },
            { name: '240 RS',                                           src: 'cars/Nissan/240_1985_RS.mp4',                                             data: { production_year: '1983', drive: 'FR',  power: '220', weight: '970',  length: '4000', worth: '~25.000 Credits' } },
            { name: '240 RS Rally Car',                                 src: 'cars/Nissan/240_1985_RS_Rally_Car.mp4',                                   data: { production_year: '1985', drive: 'FR',  power: '240', weight: '970',  length: '4000', worth: 'Schweizer Alpen Schwer' } },
            { name: '280 Z-L',                                          src: 'cars/Nissan/280_1978_Z-L.mp4',                                            data: { production_year: '1978', drive: 'FR',  power: '138', weight: '1225', length: '4000', worth: '38.000 Credits' } },
            { name: '300 ZX',                                           src: 'cars/Nissan/300_ZX_1983.mp4',                                             data: { production_year: '1983', drive: 'FR',  power: '230', weight: '1380', length: '4335', worth: '~12.000 Credits' } },
            { name: '300 ZX 2-Seater',                                  src: 'cars/Nissan/300_ZX_1989_2-Seater.mp4',                                    data: { production_year: '1989', drive: 'FR',  power: '276', weight: '1510', length: '4310', worth: '13.800 Credits' } },
            { name: '300 ZX 2by2',                                      src: 'cars/Nissan/300_ZX_1998_2_by_2.mp4',                                      data: { production_year: '1998', drive: 'FR',  power: '276', weight: '1580', length: '4310', worth: '~22.000 Credits' } },
            { name: '350 Z Version ST',                                 src: 'cars/Nissan/350_Z_2002_Version_ST.mp4',                                   data: { production_year: '2002', drive: 'FR',  power: '273', weight: '1450', length: '4310', worth: '36.000 Credits' } },
            { name: '350 Z',                                            src: 'cars/Nissan/350_Z_2003.mp4',                                              data: { production_year: '2003', drive: 'FR',  power: '276', weight: '1440', length: '4310', worth: '33.000 Credits' } },
            { name: '350 Z Roadster',                                   src: 'cars/Nissan/350_Z_2003_Roadster.mp4',                                     data: { production_year: '2003', drive: 'FR',  power: '276', weight: '1550', length: '4310', worth: '36.000 Credits' } },
            { name: '350 Z Motul Pitwork',                              src: 'cars/Nissan/350_Z_2004_Motul_Pitwork.mp4',                                data: { production_year: '2004', drive: 'FR',  power: '485', weight: '1080', length: '4350', worth: '1.350.000 Credits | Japanische GT-Meisterschaft' } },
            { name: '350 Z Option Stream',                              src: 'cars/Nissan/350_Z_2004_Option_Stream.mp4',                                data: { production_year: '2004', drive: 'FR',  power: '769', weight: '1440', length: '4350', worth: 'Tuning-Grand-Prix' } },
            { name: '350 Z Limited Edition',                            src: 'cars/Nissan/350_Z_2005_Limited_Edition.mp4',                              data: { production_year: '2005', drive: 'FR',  power: '286', weight: '1440', length: '4310', worth: '36.000 Credits' } },
            { name: '2000',                                             src: 'cars/Nissan/2000_1968.mp4',                                               data: { production_year: '1968', drive: 'FR',  power: '137', weight: '930',  length: '3910', worth: '~19.000 Credits' } },
            { name: 'Be-1',                                             src: 'cars/Nissan/Be-1_1987.mp4',                                               data: { production_year: '1987', drive: 'FF',  power: '51',  weight: '670',  length: '4000', worth: '~5.000 Credits' } },
            { name: 'Bluebird 1600 Deluxe',                             src: 'cars/Nissan/Bluebird_1969_1600_Deluxe.mp4',                               data: { production_year: '1969', drive: 'FR',  power: '88',  weight: '930',  length: '4000', worth: '~9.000 Credits' } },
            { name: 'Bluebird 1600 Rally Car',                          src: 'cars/Nissan/Bluebird_1969_1600_Rally_Car.mp4',                            data: { production_year: '1969', drive: 'FR',  power: '131', weight: '965',  length: '4000', worth: 'Whistler Eis-Rennen Schwer' } },
            { name: 'Bluebird 1800 SSS',                                src: 'cars/Nissan/Bluebird_1979_1800_SSS.mp4',                                  data: { production_year: '1979', drive: 'FR',  power: '94',  weight: '1050', length: '4000', worth: '~5.000 Credits' } },
            { name: 'Cube',                                             src: 'cars/Nissan/Cube_1998.mp4',                                               data: { production_year: '1998', drive: 'FF',  power: '84',  weight: '970',  length: '3750', worth: '~7.000 Credits' } },
            { name: 'Cube',                                             src: 'cars/Nissan/Cube_2002.mp4',                                               data: { production_year: '2002', drive: 'FF',  power: '96',  weight: '1070', length: '3730', worth: '14.420 Credits' } },
            { name: 'EXA L.A. Version Type S',                          src: 'cars/Nissan/EXA_1988_LA_Version_Type_S.mp4',                              data: { production_year: '1988', drive: 'FF',  power: '118', weight: '1070', length: '4000', worth: '~5.000 Credits' } },
            { name: 'March G#',                                         src: 'cars/Nissan/March_1999_G.mp4',                                            data: { production_year: '1999', drive: 'FF',  power: '79',  weight: '830',  length: '3720', worth: '~9.000 Credits' } },
            { name: 'Micra 12c',                                        src: 'cars/Nissan/Micra_2003_12c.mp4',                                          data: { production_year: '2003', drive: 'FF',  power: '88',  weight: '910',  length: '3690', worth: '10.950 Credits' } },
            { name: 'MM-R Cup Car',                                     src: 'cars/Nissan/MM-R_2001_Cup_Car.mp4',                                       data: { production_year: '2001', drive: 'FF',  power: '140', weight: '672',  length: '3695', worth: 'Micra Brothers' } },
            { name: 'Pao',                                              src: 'cars/Nissan/Pao_1989.mp4',                                                data: { production_year: '1989', drive: 'FF',  power: '47',  weight: '730',  length: '4000', worth: '~5.000 Credits' } },
            { name: 'Primera 2.0 TE',                                   src: 'cars/Nissan/Primera_1990_2.0_TE.mp4',                                     data: { production_year: '1990', drive: 'FF',  power: '144', weight: '1170', length: '4000', worth: '~8.000 Credits' } },
            { name: 'Primera 20V',                                      src: 'cars/Nissan/Primera_2001_20V.mp4',                                        data: { production_year: '2001', drive: 'FF',  power: '201', weight: '1320', length: '4000', worth: '23.900 Credits' } },
            { name: 'R89C Race Car',                                    src: 'cars/Nissan/R89C_1989_Race_Car.mp4',                                      data: { production_year: '1989', drive: 'MR',  power: '922', weight: '900',  length: '4800', worth: 'Fahrmissionen 30-34' } },
            { name: 'R92CP Race Car',                                   src: 'cars/Nissan/R92CP_1992_Race_Car.mp4',                                     data: { production_year: '1992', drive: 'MR',  power: '788', weight: '900',  length: '4800', worth: '1.224.999 Credits | Fuji 1000 km' } },
            { name: 'R92CP Race Car Black Edition',                     src: 'cars/Nissan/R92CP_1992_Race_Car_Black_Edition.mp4',                       data: { production_year: '1992', drive: 'MR',  power: '788', weight: '900',  length: '4800', worth: '~3.500.000 Credits' } },
            { name: 'R 390 GT1 Road Car',                               src: 'cars/Nissan/R390_1998_GT1.mp4',                                           data: { production_year: '1998', drive: 'MR',  power: '345', weight: '1179', length: '4720', worth: '1.000.000 Credits' } },
            { name: 'R 390 GT1 Race Car',                               src: 'cars/Nissan/R390_1998_GT1_Race_Car.mp4',                                  data: { production_year: '1998', drive: 'MR',  power: '800', weight: '1000', length: '4720', worth: '4.500.000 Credits' } },
            { name: 'R 390 GT1 Race Car Black Edition',                 src: 'cars/Nissan/R390_1998_GT1_Race_Car_Black_Edition.mp4',                    data: { production_year: '1998', drive: 'MR',  power: '800', weight: '1000', length: '4720', worth: '~3.500.000 Credits' } },
            { name: 'Sileighty',                                        src: 'cars/Nissan/Sileighty_1998.mp4',                                          data: { production_year: '1998', drive: 'FR',  power: '203', weight: '1170', length: '4470', worth: '~12.000 Credits | Silvia Sisters' } },
            { name: 'Silvia',                                           src: 'cars/Nissan/Silvia_1965.mp4',                                             data: { production_year: '1965', drive: 'FR',  power: '88',  weight: '980',  length: '4000', worth: '~16.000 Credits' } },
            { name: "Silvia Q's 1800",                                  src: 'cars/Nissan/Silvia_1988_Q_1800.mp4',                                      data: { production_year: '1988', drive: 'FR',  power: '132', weight: '1090', length: '4470', worth: '5.400 Credits' } },
            { name: "Silvia K's Aero",                                  src: 'cars/Nissan/Silvia_1993_K_Aero.mp4',                                      data: { production_year: '1993', drive: 'FR',  power: '196', weight: '1220', length: '4000', worth: '~13.000 Credits' } },
            { name: 'Silvia Spec R Aero',                               src: 'cars/Nissan/Silvia_1999_Spec-R_Aero.mp4',                                 data: { production_year: '1999', drive: 'FR',  power: '246', weight: '1240', length: '4445', worth: '~12.000 Credits' } },
            { name: 'Silvia Spec S Aero',                               src: 'cars/Nissan/Silvia_1999_Spec-S_Aero.mp4',                                 data: { production_year: '1999', drive: 'FR',  power: '158', weight: '1200', length: '4445', worth: '~13.000 Credits' } },
            { name: 'Silvia Varietta',                                  src: 'cars/Nissan/Silvia_2000_Varietta.mp4',                                    data: { production_year: '2000', drive: 'FR',  power: '157', weight: '1330', length: '4445', worth: '~17.000 Credits' } },
            { name: 'Silvia C-West',                                    src: 'cars/Nissan/Silvia_2001_C-West.mp4',                                      data: { production_year: '2001', drive: 'FR',  power: '300', weight: '1300', length: '4520', worth: '500.000 Credits' } },
            { name: 'Skyline Sport',                                    src: 'cars/Nissan/Skyline_1962_Sport.mp4',                                      data: { production_year: '1962', drive: 'FR',  power: '89',  weight: '1350', length: '4650', worth: '320.000 Credits' } },
            { name: 'Skyline 1500 Deluxe',                              src: 'cars/Nissan/Skyline_1963_1500_Deluxe.mp4',                                data: { production_year: '1963', drive: 'FR',  power: '66',  weight: '960',  length: '4000', worth: '~30.000 Credits' } },
            { name: 'Skyline 2000 GT-B',                                src: 'cars/Nissan/Skyline_1967_2000_GT-B.mp4',                                  data: { production_year: '1967', drive: 'FR',  power: '119', weight: '1095', length: '4000', worth: 'FR Herausforderung' } },
            { name: 'Skyline 2000 GT-R Hardtop',                        src: 'cars/Nissan/Skyline_1970_2000_GT-R_Hardtop.mp4',                          data: { production_year: '1970', drive: 'FR',  power: '157', weight: '1100', length: '4330', worth: 'Japanische 70er-Herausforderung' } },
            { name: 'Skyline 2000 GT-R',                                src: 'cars/Nissan/Skyline_1973_2000_GT-R.mp4',                                  data: { production_year: '1973', drive: 'FR',  power: '157', weight: '1145', length: '4460', worth: '~30.000 Credits' } },
            { name: 'Skyline Turbo RS',                                 src: 'cars/Nissan/Skyline_1983_Turbo_RS.mp4',                                   data: { production_year: '1983', drive: 'FR',  power: '187', weight: '1175', length: '4000', worth: '~9.000 Credits' } },
            { name: 'Skyline Turbo RS-X',                               src: 'cars/Nissan/Skyline_1984_Turbo_RS-X.mp4',                                 data: { production_year: '1984', drive: 'FR',  power: '202', weight: '1250', length: '4000', worth: '~10.000 Credits' } },
            { name: 'Skyline GTS-R',                                    src: 'cars/Nissan/Skyline_1987_GTS-R.mp4',                                      data: { production_year: '1987', drive: 'FR',  power: '207', weight: '1340', length: '4660', worth: '~12.000 Credits' } },
            { name: 'Skyline GT-R',                                     src: 'cars/Nissan/Skyline_1989_GT-R.mp4',                                       data: { production_year: '1989', drive: '4WD', power: '276', weight: '1430', length: '4545', worth: '~16.000 Credits' } },
            { name: 'Skyline GTS-T Type M',                             src: 'cars/Nissan/Skyline_1989_GTS-T_Type_M.mp4',                               data: { production_year: '1989', drive: 'FR',  power: '212', weight: '1260', length: '4545', worth: '~9.000 Credits' } },
            { name: 'Skyline GT-R N1',                                  src: 'cars/Nissan/Skyline_1991_GT-R_N1.mp4',                                    data: { production_year: '1991', drive: '4WD', power: '276', weight: '1470', length: '4545', worth: '~15.000 Credits' } },
            { name: 'Skyline GT-S 25 Type S',                           src: 'cars/Nissan/Skyline_1991_GT-S_25_Type_S.mp4',                             data: { production_year: '1991', drive: 'FR',  power: '187', weight: '1320', length: '4545', worth: '~12.000 Credits' } },
            { name: 'Skyline GT-R Calsonic',                            src: 'cars/Nissan/Skyline_1993_GT-R_Calsonic.mp4',                              data: { production_year: '1993', drive: '4WD', power: '550', weight: '1260', length: '4545', worth: 'Tsukuba 9 Stunden' } },
            { name: 'Skyline GT-R V-Spec',                              src: 'cars/Nissan/Skyline_1993_GT-R_V-Spec.mp4',                                data: { production_year: '1993', drive: '4WD', power: '276', weight: '1500', length: '4545', worth: '~19.000 Credits' } },
            { name: 'Skyline GT-R V-Spec N1',                           src: 'cars/Nissan/Skyline_1993_GT-R_V-Spec_N1.mp4',                             data: { production_year: '1993', drive: '4WD', power: '276', weight: '1470', length: '4545', worth: '~25.000 Credits' } },
            { name: 'Skyline GT-R V-Spec 2',                            src: 'cars/Nissan/Skyline_1994_GT-R_V-Spec_2.mp4',                              data: { production_year: '1994', drive: '4WD', power: '276', weight: '1500', length: '4545', worth: 'Driving School #27' } },
            { name: 'Skyline GT-R',                                     src: 'cars/Nissan/Skyline_1995_GT-R.mp4',                                       data: { production_year: '1995', drive: '4WD', power: '276', weight: '1530', length: '4575', worth: '~17.000 Credits' } },
            { name: 'Skyline GT-R N1',                                  src: 'cars/Nissan/Skyline_1995_GT-R_N1.mp4',                                    data: { production_year: '1995', drive: '4WD', power: '309', weight: '1540', length: '4675', worth: '~21.000 Credits' } },
            { name: 'Skyline GT-R Pennzoil',                            src: 'cars/Nissan/Skyline_1999_GT-R_Pennzoil.mp4',                              data: { production_year: '1999', drive: 'FR',  power: '498', weight: '1200', length: '4600', worth: '1.350.000 Credits' } },
            { name: 'Skyline GT-R MNP 2',                               src: 'cars/Nissan/Skyline_1999_GT-R_Special_Color_Midnight_Purple_2.mp4',       data: { production_year: '1999', drive: '4WD', power: '308', weight: '1550', length: '4600', worth: '~33.000 Credits' } },
            { name: 'Skyline GT-R V-Spec',                              src: 'cars/Nissan/Skyline_1999_GT-R_V-Spec.mp4',                                data: { production_year: '1999', drive: '4WD', power: '320', weight: '1560', length: '4600', worth: '~35.000 Credits' } },
            { name: 'Skyline GT-R',                                     src: 'cars/Nissan/Skyline_2000_GT-R.mp4',                                       data: { production_year: '2000', drive: '4WD', power: '308', weight: '1540', length: '4600', worth: '~50.000 Credits' } },
            { name: 'Skyline GT-R Calsonic',                            src: 'cars/Nissan/Skyline_2000_GT-R_Calsonic.mp4',                              data: { production_year: '2000', drive: '4WD', power: '550', weight: '1260', length: '4545', worth: 'Tsukuba 9 Stunden' } },
            { name: 'Skyline GT-R Loctite',                             src: 'cars/Nissan/Skyline_2000_GT-R_Loctite.mp4',                               data: { production_year: '2000', drive: 'FR',  power: '476', weight: '1100', length: '4600', worth: '1.350.000 Credits' } },
            { name: 'Skyline GT-R MNP 3',                               src: 'cars/Nissan/Skyline_2000_GT-R_Special_Color_Midnight_Purple_3.mp4',       data: { production_year: '2001', drive: '4WD', power: '308', weight: '1550', length: '4600', worth: '51.480 Credits' } },
            { name: 'Skyline GT-R V-Spec 2',                            src: 'cars/Nissan/Skyline_2000_GT-R_V-Spec_2.mp4',                              data: { production_year: '2000', drive: '4WD', power: '320', weight: '1560', length: '4600', worth: '57.480 Credits' } },
            { name: 'Skyline GT-R V-Spec 2 N1',                         src: 'cars/Nissan/Skyline_2000_GT-R_V-Spec_2_N1.mp4',                           data: { production_year: '2000', drive: '4WD', power: '276', weight: '1550', length: '4600', worth: '60.980 Credits' } },
            { name: 'Skyline 300 GT',                                   src: 'cars/Nissan/Skyline_2001_300_GT.mp4',                                     data: { production_year: '2001', drive: 'FR',  power: '256', weight: '1490', length: '4675', worth: '32.500 Credits' } },
            { name: 'Skyline GT-R Concept',                             src: 'cars/Nissan/Skyline_2001_GT-R_Concept.mp4',                               data: { production_year: '2001', drive: '4WD', power: '455', weight: '1560', length: '4600', worth: 'Silber Internationale A-Lizenz' } },
            { name: 'Skyline GT-R M-Spec',                              src: 'cars/Nissan/Skyline_2001_GT-R_M-Spec.mp4',                                data: { production_year: '2001', drive: '4WD', power: '320', weight: '1560', length: '4600', worth: '59.500 Credits' } },
            { name: 'Skyline GT-R Pennzoil',                            src: 'cars/Nissan/Skyline_2001_GT-R_Pennzoil.mp4',                              data: { production_year: '2001', drive: 'FR',  power: '481', weight: '1100', length: '4600', worth: '1.350.000 Credits' } },
            { name: 'Skyline GT-R Xanavi',                              src: 'cars/Nissan/Skyline_2001_GT-R_Xanavi.mp4',                                data: { production_year: '2001', drive: 'FR',  power: '481', weight: '1100', length: '4600', worth: '1.350.000 Credits' } },
            { name: 'Skyline 350 GT-8',                                 src: 'cars/Nissan/Skyline_2002_350_GT-8.mp4',                                   data: { production_year: '2002', drive: 'FR',  power: '258', weight: '1550', length: '4675', worth: '36.600 Credits' } },
            { name: 'Skyline GT-R Concept LM Race Car',                 src: 'cars/Nissan/Skyline_2002_GT-R_Concept_LM_Race_Car.mp4',                   data: { production_year: '2002', drive: 'FR',  power: '510', weight: '1089', length: '4773', worth: 'Traumwagen-Meisterschaft' } },
            { name: 'Skyline GT-R M-Spec Nür',                          src: 'cars/Nissan/Skyline_2002_GT-R_M-Spec_Nür.mp4',                            data: { production_year: '2002', drive: '4WD', power: '276', weight: '1580', length: '4600', worth: '63.000 Credits' } },
            { name: 'Skyline GT-R V-Spec 2 Nür',                        src: 'cars/Nissan/Skyline_2002_GT-R_V-Spec_2_Nür.mp4',                          data: { production_year: '2002', drive: '4WD', power: '336', weight: '1560', length: '4600', worth: '61.000 Credits' } },
            { name: 'Skyline 350 GT Coupe',                             src: 'cars/Nissan/Skyline_2003_350_GT_Coupe.mp4',                               data: { production_year: '2003', drive: 'FR',  power: '276', weight: '1530', length: '4640', worth: '33.900 Credits' } },
            { name: 'Skyline GT-R Xanavi',                              src: 'cars/Nissan/Skyline_2003_GT-R_Xanavi.mp4',                                data: { production_year: '2003', drive: 'FR',  power: '492', weight: '1080', length: '4600', worth: '1.350.000 Credits' } },
            { name: 'Skyline GT-R Falken',                              src: 'cars/Nissan/Skyline_2004_GT-R_Falken.mp4',                                data: { production_year: '2004', drive: '4WD', power: '508', weight: '1360', length: '4600', worth: '550.000 Credits' } },
            { name: 'Stagea Autech 260 RS',                             src: 'cars/Nissan/Stagea_1998_Autech_260_RS.mp4',                               data: { production_year: '1998', drive: '4WD', power: '276', weight: '1720', length: '4880', worth: '~30.000 Credits' } },
            { name: 'Stagea RS Four S',                                 src: 'cars/Nissan/Stagea_1998_RS_Four_S.mp4',                                   data: { production_year: '1998', drive: '4WD', power: '269', weight: '1650', length: '4800', worth: '~21.000 Credits' } },
        ],
    },
    opel: {
        manufacturer: 'Opel', country: 'Deutschland',                   // 7
        cars: [
            { name: 'Astra Touring Car',                                src: 'cars/Opel/Astra_2000_Touring_Car.mp4',                                    data: { production_year: '2000', drive: 'FR',  power: '460', weight: '1000', length: '4400', worth: '550.000 Credits' } },
            { name: 'Calibra Touring Car',                              src: 'cars/Opel/Calibra_1994_Touring_Car.mp4',                                  data: { production_year: '1994', drive: '4WD', power: '427', weight: '1059', length: '4400', worth: 'Speedster Trophy' } },
            { name: 'Corsa Comfort 1.4i',                               src: 'cars/Opel/Corsa_2001_Comfort_1.4i.mp4',                                   data: { production_year: '2001', drive: 'FF',  power: '88',  weight: '998',  length: '4000', worth: '17.960 Credits' } },
            { name: 'Speedster',                                        src: 'cars/Opel/Speedster_2000.mp4',                                            data: { production_year: '2000', drive: 'MR',  power: '145', weight: '850',  length: '3790', worth: '44.690 Credits' } },
            { name: 'Speedster Turbo',                                  src: 'cars/Opel/Speedster_2000_Turbo.mp4',                                      data: { production_year: '2000', drive: 'MR',  power: '197', weight: '1005', length: '3786', worth: '49.550 Credits' } },
            { name: 'Tigra 1.6i',                                       src: 'cars/Opel/Tigra_1999_1.6i.mp4',                                           data: { production_year: '1999', drive: 'FF',  power: '104', weight: '1032', length: '3922', worth: '~19.000 Credits' } },
            { name: 'Vectra 3.2 V6',                                    src: 'cars/Opel/Vectra_2003_3.2_V6.mp4',                                        data: { production_year: '2003', drive: 'FF',  power: '211', weight: '1510', length: '4400', worth: '36.530 Credits' } },
        ],
    },
    opera_performance: {
        manufacturer: 'Opera Performance', country: 'Japan',            // 2
        cars: [
            { name: '350 Z',                                            src: 'cars/Opera_Performance/350_Z_2004.mp4',                                   data: { production_year: '2004', drive: 'FR',  power: '350', weight: '1340', length: '4000', worth: '70.000 Credits' } },
            { name: 'S2000',                                            src: 'cars/Opera_Performance/S2000_2004.mp4',                                   data: { production_year: '2004', drive: 'FR',  power: '274', weight: '930',  length: '4000', worth: '150.000 Credits' } },
        ],
    },
    pagani: {
        manufacturer: 'Pagani', country: 'Italien',                     // 4
        cars: [
            { name: 'Zonda C12',                                        src: 'cars/Pagani/Zonda_2000_C12.mp4',                                          data: { production_year: '2000', drive: 'MR',  power: '394', weight: '1251', length: '4345', worth: '388.720 Credits' } },
            { name: 'Zonda C12S',                                       src: 'cars/Pagani/Zonda_2000_C12S.mp4',                                         data: { production_year: '2000', drive: 'MR',  power: '550', weight: '1351', length: '4395', worth: '450.040 Credits' } },
            { name: 'Zonda LM Race Car',                                src: 'cars/Pagani/Zonda_2001_LM_Race_Car.mp4',                                  data: { production_year: '2001', drive: 'MR',  power: '660', weight: '1150', length: '4395', worth: 'Fahrmissionen 21-24' } },
            { name: 'Zonda C12S 7.3',                                   src: 'cars/Pagani/Zonda_2002_C12S_7.3.mp4',                                     data: { production_year: '2002', drive: 'MR',  power: '556', weight: '1250', length: '4395', worth: '631.680 Credits' } },
        ],
    },
    panoz: {
        manufacturer: 'Panoz', country: 'Amerika',                      // 1
        cars: [
            { name: 'Esperante GTR-1 Race Car',                         src: 'cars/Panoz/Esperante_1998_GTR-1_Race_Car.mp4',                            data: { production_year: '1998', drive: 'FR',  power: '750', weight: '1149', length: '4000', worth: '4.500.000 Credits' } },
        ],
    },
    pescarolo_sport: {
        manufacturer: 'Pescarolo Sport', country: 'Frankreich',         // 2
        cars: [
            { name: 'C60 Courage Race Car',                             src: 'cars/Pescarolo/C60_2003_Courage_Race_Car.mp4',                            data: { production_year: '2003', drive: 'MR',  power: '800', weight: '900',  length: '4000', worth: '4.500.000 Credits' } },
            { name: 'C60 PlayStation Race Car',                         src: 'cars/Pescarolo/C60_2004_PlayStation_Race_Car.mp4',                        data: { production_year: '2004', drive: 'MR',  power: '805', weight: '900',  length: '4000', worth: '4.500.000 Credits' } },
        ],
    },
    peugeot: {
        manufacturer: 'Peugeot', country: 'Frankreich',                 // 12
        cars: [
            { name: '106 Rallye',                                       src: 'cars/Peugeot/106_2003_Rallye.mp4',                                        data: { production_year: '2003', drive: 'FF',  power: '98',  weight: '890',  length: '4000', worth: '12.630 Credits' } },
            { name: '106 S16',                                          src: 'cars/Peugeot/106_2003_S16.mp4',                                           data: { production_year: '2003', drive: 'FF',  power: '116', weight: '960',  length: '4000', worth: '18.810 Credits' } },
            { name: '205 Turbo 16',                                     src: 'cars/Peugeot/205_1985_Turbo_16.mp4',                                      data: { production_year: '1985', drive: '4WD', power: '188', weight: '1145', length: '3820', worth: '~28.000 Credits | Tag 421-427 & 449-455 (alle 700 Tage)' } },
            { name: '205 Turbo 16 Rally Car',                           src: 'cars/Peugeot/205_1985_Turbo_16_Rally_Car.mp4',                            data: { production_year: '1985', drive: '4WD', power: '350', weight: '940',  length: '3820', worth: '206 Cup' } },
            { name: '205 Turbo 16 Rally Car Evo 2',                     src: 'cars/Peugeot/205_1986_Turbo_16_Rally_Car_Evo_2.mp4',                      data: { production_year: '1986', drive: '4WD', power: '448', weight: '910',  length: '3820', worth: 'George V Rally Schwer' } },
            { name: '206 Rally Car',                                    src: 'cars/Peugeot/206_1999_Rally_Car.mp4',                                     data: { production_year: '1999', drive: '4WD', power: '305', weight: '1230', length: '4005', worth: '750.000 Credits' } },
            { name: '206 S16',                                          src: 'cars/Peugeot/206_1999_S16.mp4',                                           data: { production_year: '1999', drive: 'FF',  power: '138', weight: '1079', length: '3835', worth: '~15.000 Credits' } },
            { name: '206 CC',                                           src: 'cars/Peugeot/206_2001_CC.mp4',                                            data: { production_year: '2001', drive: 'FF',  power: '134', weight: '1190', length: '4000', worth: '26.520 Credits' } },
            { name: '206 RC',                                           src: 'cars/Peugeot/206_2003_RC.mp4',                                            data: { production_year: '2003', drive: 'FF',  power: '168', weight: '1110', length: '4000', worth: '29.090 Credits' } },
            { name: '307 XSi',                                          src: 'cars/Peugeot/307_2004_XSi.mp4',                                           data: { production_year: '2004', drive: 'FF',  power: '133', weight: '1260', length: '4210', worth: '27.940 Credits' } },
            { name: '406 3.0 V6 Coupe',                                 src: 'cars/Peugeot/406_1998_3.0_V6_Coupe.mp4',                                  data: { production_year: '1998', drive: 'FF',  power: '204', weight: '1560', length: '4620', worth: '~23.000 Credits' } },
            { name: '905 Race Car',                                     src: 'cars/Peugeot/905_1992_Race_Car.mp4',                                      data: { production_year: '1992', drive: 'MR',  power: '810', weight: '750',  length: '4800', worth: '3.500.000 Credits' } },
        ],
    },
    plymouth: {
        manufacturer: 'Plymouth', country: 'Amerika',                   // 2
        cars: [
            { name: 'Cuda 440 Six-Pack',                                src: 'cars/Plymouth/Cuda_1971_440_Six_Pack.mp4',                                data: { production_year: '1971', drive: 'FR',  power: '390', weight: '1576', length: '4740', worth: '58.360 Credits' } },
            { name: 'Super Bird',                                       src: 'cars/Plymouth/Super_Bird_1970.mp4',                                       data: { production_year: '1970', drive: 'FR',  power: '425', weight: '1755', length: '5588', worth: 'Muscle-Car Wettkampf' } },
        ],
    },
    polyphony_digital: {
        manufacturer: 'Polyphony Digital', country: 'Japan',            // 2
        cars: [
            { name: 'Formula Gran Turismo',                             src: 'cars/Polyphony_Digital/Formula_Gran_Turismo_2004.mp4',                    data: { production_year: '2004', drive: 'MR',  power: '904', weight: '550',  length: '4000', worth: 'Nürburgring 24 Stunden' } },
            { name: 'Formula Gran Turismo Black Edition',               src: 'cars/Polyphony_Digital/Formula_Gran_Turismo_2004_Black_Edition.mp4',      data: { production_year: '2004', drive: 'MR',  power: '904', weight: '550',  length: '4000', worth: '100% Spielfortschritt' } },
        ],
    },
    pontiac: {
        manufacturer: 'Pontiac', country: 'Amerika',                    // 5
        cars: [
            { name: 'GTO Tempest Le Mans',                              src: 'cars/Pontiac/GTO_1964_Tempest_Le_Mans.mp4',                               data: { production_year: '1964', drive: 'FR',  power: '332', weight: '1420', length: '4000', worth: '52.600 Credits' } },
            { name: 'GTO 5.7 Coupe',                                    src: 'cars/Pontiac/GTO_2004_5.7_Coupe.mp4',                                     data: { production_year: '2004', drive: 'FR',  power: '357', weight: '1690', length: '4000', worth: '34.490 Credits' } },
            { name: 'Solstice Concept Coupe',                           src: 'cars/Pontiac/Solstice_2002_Concept_Coupe.mp4',                            data: { production_year: '2002', drive: 'FR',  power: '239', weight: '1318', length: '4000', worth: 'S-Lizenz Silber' } },
            { name: 'Sunfire GXP Concept',                              src: 'cars/Pontiac/Sunfire_2002_GXP_Concept.mp4',                               data: { production_year: '2002', drive: 'FF',  power: '180', weight: '1257', length: '4000', worth: 'A-Lizenz Bronze' } },
            { name: 'Vibe GT',                                          src: 'cars/Pontiac/Vibe_2003_GT.mp4',                                           data: { production_year: '2003', drive: 'FF',  power: '174', weight: '1273', length: '4365', worth: '21.120 Credits' } },
        ],
    },
    proto_motors: {
        manufacturer: 'Proto Motors', country: 'Südkorea',              // 1
        cars: [
            { name: 'Spirra 4.6 V8',                                    src: 'cars/Proto_Motors/Spirra_2004_4.6_V8.mp4',                                data: { production_year: '2004', drive: 'MR',  power: '324', weight: '1205', length: '4318', worth: '80.000 Credits' } },
        ],
    },
    re_amemiya: {
        manufacturer: 'RE Amemiya', country: 'Japan',                   // 1
        cars: [
            { name: 'RX-7 Asparadrink',                                 src: 'cars/RE_Amemiya/RX-7_2004_Asparadrink.mp4',                               data: { production_year: '2004', drive: 'FR',  power: '324', weight: '1100', length: '4000', worth: '500.000 Credits' } },
        ],
    },
    renault: {
        manufacturer: 'Renault', country: 'Frankreich',                 // 9
        cars: [
            { name: '5 Turbo',                                          src: 'cars/Renault/5_1980_Turbo.mp4',                                           data: { production_year: '1980', drive: 'MR',  power: '159', weight: '970',  length: '3665', worth: '74.500 Credits | Tahiti Tour Leicht' } },
            { name: '5 Maxi Turbo Rally Car',                           src: 'cars/Renault/5_1985_Maxi_Turbo_Rally_Car.mp4',                            data: { production_year: '1985', drive: 'MR',  power: '355', weight: '905',  length: '3600', worth: 'George V Rally Mittel' } },
            { name: 'Avantime',                                         src: 'cars/Renault/Avantime_2002.mp4',                                          data: { production_year: '2002', drive: 'FF',  power: '208', weight: '1741', length: '4642', worth: '52.570 Credits' } },
            { name: 'Clio V6 24V',                                      src: 'cars/Renault/Clio_2000_V6_24V.mp4',                                       data: { production_year: '2000', drive: 'MR',  power: '241', weight: '1335', length: '3803', worth: '~33.000 Credits' } },
            { name: 'Clio V6 24V Race Car',                             src: 'cars/Renault/Clio_2000_V6_24V_Race_Car.mp4',                              data: { production_year: '2000', drive: 'MR',  power: '294', weight: '1149', length: '3805', worth: 'Clio Trophy' } },
            { name: 'Clio Sport',                                       src: 'cars/Renault/Clio_2002_Sport.mp4',                                        data: { production_year: '2002', drive: 'FF',  power: '169', weight: '1035', length: '3841', worth: '29.700 Credits' } },
            { name: 'Clio V6 Phase 2',                                  src: 'cars/Renault/Clio_2003_V6_Phase_2.mp4',                                   data: { production_year: '2003', drive: 'MR',  power: '248', weight: '1400', length: '3841', worth: '53.720 Credits' } },
            { name: 'Megane IDE Coupe',                                 src: 'cars/Renault/Megane_2000_IDE_Coupe.mp4',                                  data: { production_year: '2000', drive: 'FF',  power: '139', weight: '1135', length: '3987', worth: '~14.000 Credits' } },
            { name: 'Megane 16V',                                       src: 'cars/Renault/Megane_2003_16V.mp4',                                        data: { production_year: '2003', drive: 'FF',  power: '131', weight: '1230', length: '4000', worth: '26.390 Credits' } },
        ],
    },
    ruf: {
        manufacturer: 'RUF', country: 'Deutschland',                    // 5
        cars: [
            { name: '3400 S',                                           src: 'cars/Ruf/3400_2000_S.mp4',                                                data: { production_year: '2000', drive: 'MR',  power: '310', weight: '1300', length: '4000', worth: '76.740 Credits | Deutsche Tourenwagenmeisterschaft' } },
            { name: 'BTR',                                              src: 'cars/Ruf/BTR_1986.mp4',                                                   data: { production_year: '1986', drive: 'RR',  power: '375', weight: '1180', length: '4000', worth: '112.480 Credits' } },
            { name: 'CTR Yellow Bird',                                  src: 'cars/Ruf/CTR_1987_Yellow_Bird.mp4',                                       data: { production_year: '1987', drive: 'RR',  power: '469', weight: '1150', length: '4290', worth: 'Boxer Spirit' } },
            { name: 'CTR 2',                                            src: 'cars/Ruf/CTR_1996_2.mp4',                                                 data: { production_year: '1996', drive: '4WD', power: '520', weight: '1379', length: '4290', worth: '297.110 Credits' } },
            { name: 'RGT',                                              src: 'cars/Ruf/RGT_2000.mp4',                                                   data: { production_year: '2000', drive: 'RR',  power: '380', weight: '1329', length: '4000', worth: '143.250 Credits' } },
        ],
    },
    saleen: {
        manufacturer: 'Saleen', country: 'Amerika',                     // 1
        cars: [
            { name: 'S7',                                               src: 'cars/Saleen/S7_2002.mp4',                                                 data: { production_year: '2002', drive: 'MR',  power: '558', weight: '1250', length: '4774', worth: '419.130 Credits' } },
        ],
    },
    seat: {
        manufacturer: 'Seat', country: 'Spanien',                       // 1
        cars: [
            { name: 'Ibiza Cupra',                                      src: 'cars/Seat/Ibiza_2004_Cupra.mp4',                                          data: { production_year: '2004', drive: 'FF',  power: '169', weight: '1177', length: '3953', worth: '24.980 Credits' } },
        ],
    },
    shelby: {
        manufacturer: 'Shelby', country: 'Amerika',                     // 3
        cars: [
            { name: 'Cobra 427',                                        src: 'cars/Shelby/Cobra_1967_427.mp4',                                          data: { production_year: '1967', drive: 'FR',  power: '484', weight: '1068', length: '3962', worth: '530.550 Credits' } },
            { name: 'Mustang GT 350R',                                  src: 'cars/Shelby/Mustang_1965_GT_350R.mp4',                                    data: { production_year: '1965', drive: 'FR',  power: '311', weight: '1268', length: '4613', worth: 'Shelby Cobra Cup' } },
            { name: 'Series 1',                                         src: 'cars/Shelby/Series_1_2003_Super_Charged.mp4',                             data: { production_year: '2003', drive: 'FR',  power: '324', weight: '1202', length: '4292', worth: '184.630 Credits' } },
        ],
    },
    spoon: {
        manufacturer: 'Spoon', country: 'Japan',                        // 5
        cars: [
            { name: 'Civic Type R',                                     src: 'cars/Spoon/Civic_2000_Type_R.mp4',                                        data: { production_year: '2000', drive: 'FF',  power: '217', weight: '820',  length: '4185', worth: '75.000 Credits' } },
            { name: 'Fit Race Car',                                     src: 'cars/Spoon/Fit_2003_Race_Car.mp4',                                        data: { production_year: '2003', drive: 'FF',  power: '124', weight: '990',  length: '3830', worth: '50.000 Credits' } },
            { name: 'Integra Type R',                                   src: 'cars/Spoon/Integra_1999_Type_R.mp4',                                      data: { production_year: '1999', drive: 'FF',  power: '220', weight: '1080', length: '4380', worth: '75.000 Credits' } },
            { name: 'S2000',                                            src: 'cars/Spoon/S2000_2000.mp4',                                               data: { production_year: '2000', drive: 'FR',  power: '274', weight: '1100', length: '4135', worth: '85.000 Credits' } },
            { name: 'S2000 Race Car',                                   src: 'cars/Spoon/S2000_2000_Race_Car.mp4',                                      data: { production_year: '2000', drive: 'FR',  power: '316', weight: '1050', length: '4135', worth: '200.000 Credits' } },
        ],
    },
    spyker: {
        manufacturer: 'Spyker', country: 'Niederlande',                 // 1
        cars: [
            { name: 'C8 Laviolette',                                    src: 'cars/Spyker/C8_2002_Laviolette.mp4',                                      data: { production_year: '2002', drive: 'MR',  power: '456', weight: '1070', length: '4000', worth: '254.660 Credits' } },
        ],
    },
    subaru: {
        manufacturer: 'Subaru', country: 'Japan',                       // 27
        cars: [
            { name: '360',                                              src: 'cars/Subaru/360_1958.mp4',                                                data: { production_year: '1958', drive: 'RR',  power: '16',  weight: '385',  length: '2990', worth: '36.000 Credits | 360 Rennen' } },
            { name: 'Impreza Sedan WRX STi',                            src: 'cars/Subaru/Impreza_1994_Sedan_WRX_STi.mp4',                              data: { production_year: '1994', drive: '4WD', power: '258', weight: '1230', length: '4340', worth: '~14.000 Credits' } },
            { name: 'Impreza Sedan WRX STi Version 2',                  src: 'cars/Subaru/Impreza_1995_Sedan_WRX_STi_Version_2.mp4',                    data: { production_year: '1995', drive: '4WD', power: '263', weight: '1240', length: '4340', worth: '~14.000 Credits' } },
            { name: 'Impreza Sedan WRX STi Version 3',                  src: 'cars/Subaru/Impreza_1996_Sedan_WRX_STi_Version_3.mp4',                    data: { production_year: '1996', drive: '4WD', power: '270', weight: '1250', length: '4340', worth: '~15.000 Credits' } },
            { name: 'Impreza Sedan WRX STi Version 4',                  src: 'cars/Subaru/Impreza_1997_Sedan_WRX_STi_Version_4.mp4',                    data: { production_year: '1997', drive: '4WD', power: '276', weight: '1250', length: '4340', worth: '~15.000 Credits' } },
            { name: 'Impreza Coupe 22B STi Version',                    src: 'cars/Subaru/Impreza_1998_Coupe_22B_STi_Version.mp4',                      data: { production_year: '1998', drive: '4WD', power: '290', weight: '1271', length: '4365', worth: '~25.000 Credits' } },
            { name: 'Impreza Sedan WRX STi Version 5',                  src: 'cars/Subaru/Impreza_1998_Sedan_WRX_STi_Version_5.mp4',                    data: { production_year: '1998', drive: '4WD', power: '276', weight: '1270', length: '4365', worth: '~19.000 Credits' } },
            { name: 'Impreza Coupe WRX STi Version 6',                  src: 'cars/Subaru/Impreza_1999_Coupe_WRX_STi_Version_6.mp4',                    data: { production_year: '1999', drive: '4WD', power: '276', weight: '1270', length: '4350', worth: '~19.000 Credits' } },
            { name: 'Impreza Rally Car',                                src: 'cars/Subaru/Impreza_1999_Rally_Car.mp4',                                  data: { production_year: '1999', drive: '4WD', power: '290', weight: '1229', length: '4340', worth: 'Cathedral Rocks Trail 1 Normal' } },
            { name: 'Impreza Sedan WRX STi Version 6',                  src: 'cars/Subaru/Impreza_1999_Sedan_WRX_STi_Version_6.mp4',                    data: { production_year: '1999', drive: '4WD', power: '276', weight: '1270', length: '4350', worth: '~19.000 Credits' } },
            { name: 'Impreza Sports Wagon STi',                         src: 'cars/Subaru/Impreza_2000_Sports_Wagon_STi.mp4',                           data: { production_year: '2000', drive: '4WD', power: '276', weight: '1431', length: '4000', worth: '~19.000 Credits' } },
            { name: 'Impreza Rally Car',                                src: 'cars/Subaru/Impreza_2001_Rally_Car.mp4',                                  data: { production_year: '2001', drive: '4WD', power: '291', weight: '1230', length: '4000', worth: 'Charmonix Rally Normal' } },
            { name: 'Impreza Rally Car Prototype',                      src: 'cars/Subaru/Impreza_2001_Rally_Car_Prototype.mp4',                        data: { production_year: '2001', drive: '4WD', power: '305', weight: '1229', length: '4000', worth: 'Capri Rally Normal' } },
            { name: 'Impreza STi ProDrive Style',                       src: 'cars/Subaru/Impreza_2001_STi_ProDrive_Style.mp4',                         data: { production_year: '2001', drive: '4WD', power: '276', weight: '1430', length: '4415', worth: '~25.000 Credits' } },
            { name: 'Impreza Sedan WRX STi GD Type 2',                  src: 'cars/Subaru/Impreza_2002_Sedan_WRX_STi_GD_Type_2.mp4',                    data: { production_year: '2002', drive: '4WD', power: '282', weight: '1440', length: '4415', worth: '28.950 Credits' } },
            { name: 'Impreza Cusco Advan',                              src: 'cars/Subaru/Impreza_2003_Cusco_Advan.mp4',                                data: { production_year: '2003', drive: 'FR',  power: '508', weight: '1100', length: '4000', worth: '500.000 Credits' } },
            { name: 'Impreza Rally Car',                                src: 'cars/Subaru/Impreza_2003_Rally_Car.mp4',                                  data: { production_year: '2003', drive: '4WD', power: '351', weight: '1230', length: '4000', worth: '750.000 Credits' } },
            { name: 'Impreza Sedan WRX STi Spec C GD Type 2',           src: 'cars/Subaru/Impreza_2004_Sedan_WRX_STi_Spec_C_GD_Type_2.mp4',             data: { production_year: '2004', drive: '4WD', power: '282', weight: '1370', length: '4000', worth: '33.920 Credits' } },
            { name: 'Legacy Touring Wagon GT-B',                        src: 'cars/Subaru/Legacy_1996_Touring_Wagon_GT-B.mp4',                          data: { production_year: '1996', drive: '4WD', power: '276', weight: '1431', length: '4680', worth: '~14.000 Credits' } },
            { name: 'Legacy B4 RSK',                                    src: 'cars/Subaru/Legacy_2000_B4_Blitzen.mp4',                                  data: { production_year: '1998', drive: '4WD', power: '285', weight: '1440', length: '4000', worth: '~15.000 Credits' } },
            { name: 'Legacy B4 Blitzen',                                src: 'cars/Subaru/Legacy_2000_B4_Blitzen.mp4',                                  data: { production_year: '2000', drive: '4WD', power: '276', weight: '1450', length: '4000', worth: '~15.000 Credits' } },
            { name: 'Legacy B4 2.0 GT',                                 src: 'cars/Subaru/Legacy_2003_B4_2.0_GT.mp4',                                   data: { production_year: '2003', drive: '4WD', power: '269', weight: '1410', length: '4000', worth: '27.300 Credits' } },
            { name: 'Legacy B4 2.0 GT Spec B',                          src: 'cars/Subaru/Legacy_2003_B4_2.0_GT_Spec_B.mp4',                            data: { production_year: '2003', drive: '4WD', power: '269', weight: '1430', length: '4000', worth: '28.800 Credits' } },
            { name: 'Legacy B4 3.0 R',                                  src: 'cars/Subaru/Legacy_2003_B4_3.0_R.mp4',                                    data: { production_year: '2003', drive: '4WD', power: '245', weight: '1460', length: '4000', worth: '28.500 Credits' } },
            { name: 'Legacy Touring Wagon 2.0 GT',                      src: 'cars/Subaru/Legacy_2003_Touring_Wagon_2.0_GT.mp4',                        data: { production_year: '2003', drive: '4WD', power: '269', weight: '1430', length: '4000', worth: '28.800 Credits' } },
            { name: 'Legacy Touring Wagon 2.0 GT Spec B',               src: 'cars/Subaru/Legacy_2003_Touring_Wagon_2.0_GT_Spec_B.mp4',                 data: { production_year: '2003', drive: '4WD', power: '269', weight: '1450', length: '4000', worth: '30.300 Credits' } },
            { name: 'Legacy Touring Wagon 3.0 R',                       src: 'cars/Subaru/Legacy_2003_Touring_Wagon_3.0_R.mp4',                         data: { production_year: '2003', drive: '4WD', power: '238', weight: '1480', length: '4000', worth: '30.000 Credits' } },
        ],
    },
    suzuki: {
        manufacturer: 'Suzuki', country: 'Japan',                       // 11
        cars: [
            { name: 'Alto Works Limited',                               src: 'cars/Suzuki/Alto_1997_Works_Limited.mp4',                                 data: { production_year: '1997', drive: '4WD', power: '63',  weight: '710',  length: '3295', worth: '~5.000 Credits' } },
            { name: 'Alto Works RS-Z',                                  src: 'cars/Suzuki/Alto_1997_Works_RS-Z.mp4',                                    data: { production_year: '1997', drive: '4WD', power: '61',  weight: '710',  length: '3295', worth: '~6.000 Credits' } },
            { name: 'Alto Lapin Turbo',                                 src: 'cars/Suzuki/Alto_2002_Lapin_Turbo.mp4',                                   data: { production_year: '2002', drive: '4WD', power: '57',  weight: '840',  length: '3395', worth: '12.400 Credits' } },
            { name: 'Cappucino EA11R',                                  src: 'cars/Suzuki/Cappuccino_1991_EA11R.mp4',                                   data: { production_year: '1991', drive: 'FR',  power: '60',  weight: '700',  length: '3295', worth: '~5.000 Credits' } },
            { name: 'Cappucino EA21R',                                  src: 'cars/Suzuki/Cappuccino_1995_EA21R.mp4',                                   data: { production_year: '1995', drive: 'FR',  power: '61',  weight: '690',  length: '3295', worth: '~7.000 Credits' } },
            { name: 'Escudo Dirt Trial Car',                            src: 'cars/Suzuki/Escudo_1998_Dirt_Trial_Car.mp4',                              data: { production_year: '1998', drive: '4WD', power: '981', weight: '800',  length: '5050', worth: 'Yosemite Rally Schwer' } },
            { name: 'GSX-R4',                                           src: 'cars/Suzuki/GSX-R4_2001.mp4',                                             data: { production_year: '2001', drive: 'MR',  power: '175', weight: '640',  length: '3550', worth: 'Suzuki Concept Race' } },
            { name: 'Kei Works',                                        src: 'cars/Suzuki/Kei_2002_Works.mp4',                                          data: { production_year: '2002', drive: '4WD', power: '60',  weight: '820',  length: '4000', worth: '14.140 Credits' } },
            { name: 'MR Wagon Sport',                                   src: 'cars/Suzuki/MR_2004_Wagon_Sport.mp4',                                     data: { production_year: '2004', drive: 'FF',  power: '63',  weight: '860',  length: '3395', worth: '12.800 Credits' } },
            { name: 'S2 Concept',                                       src: 'cars/Suzuki/S2_2003_Concept.mp4',                                         data: { production_year: '2003', drive: 'FF',  power: '180', weight: '1000', length: '3695', worth: 'Suzuki K-Car Cup' } },
            { name: 'Wagon R RR',                                       src: 'cars/Suzuki/Wagon_1998_R_RR.mp4',                                         data: { production_year: '1998', drive: '4WD', power: '61',  weight: '820',  length: '3395', worth: '~6.000 Credits' } },
        ],
    },
    toms: {
        manufacturer: "Tom's", country: 'Japan',                        // 1
        cars: [
            { name: 'X540 Chaser',                                      src: 'cars/Toms/X540_2000_Chaser.mp4',                                          data: { production_year: '2000', drive: 'FR',  power: '320', weight: '1491', length: '4000', worth: '50.000 Credits' } },
        ],
    },
    tommy_kaira: {
        manufacturer: 'Tommy Kaira', country: 'Japan',                  // 2
        cars: [
            { name: 'ZZ-S',                                             src: 'cars/Tommy_Kaira/ZZ-S_2000.mp4',                                          data: { production_year: '2000', drive: 'MR',  power: '192', weight: '689',  length: '3630', worth: '59.500 Credits' } },
            { name: 'ZZII',                                             src: 'cars/Tommy_Kaira/ZZII_2000.mp4',                                          data: { production_year: '2000', drive: '4WD', power: '542', weight: '999',  length: '4300', worth: '500.000 Credits' } },
        ],
    },
    toyota: {
        manufacturer: 'Toyota', country: 'Japan',                       // 58
        cars: [
            { name: '7 Race Car',                                       src: 'cars/Toyota/7_1970_Race_Car.mp4',                                         data: { production_year: '1970', drive: 'MR',  power: '800', weight: '620',  length: '3750', worth: 'Fahrmissionen 25-29' } },
            { name: '88C-V Minolta Race Car',                           src: 'cars/Toyota/88C-V_1989_Minolta_Race_Car.mp4',                             data: { production_year: '1989', drive: 'MR',  power: '919', weight: '850',  length: '4000', worth: 'El Capitan 200 Meilen' } },
            { name: '2000 GT',                                          src: 'cars/Toyota/2000_1967_GT.mp4',                                            data: { production_year: '1967', drive: 'FR',  power: '153', weight: '1120', length: '4000', worth: '160.000 Credits' } },
            { name: 'Altezza Touring Car',                              src: 'cars/Toyota/Altezza_2001_Touring_Car.mp4',                                data: { production_year: '2001', drive: 'FR',  power: '306', weight: '1000', length: '4500', worth: 'Altezza Race' } },
            { name: 'bB 1.5 Z',                                         src: 'cars/Toyota/bB_2000_1.5_Z.mp4',                                           data: { production_year: '2000', drive: 'FF',  power: '105', weight: '1050', length: '3845', worth: '15.780 Credits' } },
            { name: 'Caldina GT-Four',                                  src: 'cars/Toyota/Caldina_2002_GT-Four.mp4',                                    data: { production_year: '2002', drive: '4WD', power: '247', weight: '1480', length: '4000', worth: '27.100 Credits' } },
            { name: 'Carina ED 2.0 X 4WS',                              src: 'cars/Toyota/Carina_1989_ED_2.0_X_4WS.mp4',                                data: { production_year: '1989', drive: 'FF',  power: '119', weight: '1200', length: '4485', worth: '~6.000 Credits' } },
            { name: 'Celica 1600 GT',                                   src: 'cars/Toyota/Celica_1970_1600_GT.mp4',                                     data: { production_year: '1970', drive: 'FR',  power: '110', weight: '940',  length: '4000', worth: '~8.000 Credits' } },
            { name: 'Celica 2800 GT XX',                                src: 'cars/Toyota/Celica_1981_2800_GT_XX.mp4',                                  data: { production_year: '1981', drive: 'FR',  power: '161', weight: '1235', length: '4660', worth: '~8.000 Credits' } },
            { name: 'Celica 2000 GT-R',                                 src: 'cars/Toyota/Celica_1986_2000_GT-R.mp4',                                   data: { production_year: '1986', drive: 'FF',  power: '151', weight: '1130', length: '4410', worth: '~7.000 Credits' } },
            { name: 'Celica GT-Four RC',                                src: 'cars/Toyota/Celica_1991_GT-Four_RC.mp4',                                  data: { production_year: '1991', drive: '4WD', power: '224', weight: '1460', length: '4410', worth: '~10.000 Credits' } },
            { name: 'Celica GT-R',                                      src: 'cars/Toyota/Celica_1991_GT-R.mp4',                                        data: { production_year: '1991', drive: 'FF',  power: '158', weight: '1310', length: '4410', worth: '~8.000 Credits' } },
            { name: 'Celica GT-Four Rally Car',                         src: 'cars/Toyota/Celica_1995_GT-Four_Rally_Car_ST185.mp4',                     data: { production_year: '1995', drive: '4WD', power: '316', weight: '1200', length: '4000', worth: 'Yosemite Rally II Mittel' } },
            { name: 'Celica GT-Four Rally Car',                         src: 'cars/Toyota/Celica_1995_GT-Four_Rally_Car_ST205.mp4',                     data: { production_year: '1995', drive: '4WD', power: '298', weight: '1200', length: '4424', worth: 'Swiss Alps Normal' } },
            { name: 'Celica SS2',                                       src: 'cars/Toyota/Celica_1997_SS2.mp4',                                         data: { production_year: '1997', drive: 'FF',  power: '197', weight: '1200', length: '4000', worth: '~11.000 Credits' } },
            { name: 'Celica GT-Four',                                   src: 'cars/Toyota/Celica_1998_GT-Four.mp4',                                     data: { production_year: '1998', drive: '4WD', power: '236', weight: '1390', length: '4000', worth: '~18.000 Credits' } },
            { name: 'Celica SS2',                                       src: 'cars/Toyota/Celica_1999_SS2.mp4',                                         data: { production_year: '1999', drive: 'FF',  power: '179', weight: '1140', length: '4330', worth: '~14.000 Credits' } },
            { name: 'Celica Wedssport',                                 src: 'cars/Toyota/Celica_2003_Wedssport.mp4',                                   data: { production_year: '2003', drive: 'FR',  power: '311', weight: '1050', length: '4340', worth: '500.000 Credits' } },
            { name: 'Corolla Levin GT Apex',                            src: 'cars/Toyota/Corolla_1983_Levin_1600_GT_Apex.mp4',                         data: { production_year: '1983', drive: 'FR',  power: '127', weight: '940',  length: '4180', worth: '~5.000 Credits' } },
            { name: 'Corolla Levin BZ-R',                               src: 'cars/Toyota/Corolla_1998_Levin_BZ-R.mp4',                                 data: { production_year: '1998', drive: 'FF',  power: '172', weight: '1080', length: '4305', worth: '12.200 Credits' } },
            { name: 'Corolla Rally Car',                                src: 'cars/Toyota/Corolla_1998_Rally_Car.mp4',                                  data: { production_year: '1998', drive: '4WD', power: '300', weight: '1229', length: '4100', worth: '750.000 Credits' } },
            { name: 'Corolla RunX Aero Tourer',                         src: 'cars/Toyota/Corolla_2002_RunX_Aero_Tourer.mp4',                           data: { production_year: '2002', drive: 'FF',  power: '187', weight: '1160', length: '4175', worth: '20.080 Credits' } },
            { name: 'GT-One Race Car',                                  src: 'cars/Toyota/GT-One_1999_Race_Car.mp4',                                    data: { production_year: '1999', drive: 'MR',  power: '764', weight: '900',  length: '4840', worth: '4.500.000 Credits' } },
            { name: 'GT-One Race Car Black Edition',                    src: 'cars/Toyota/GT-One_1999_Race_Car_Black_Edition.mp4',                      data: { production_year: '1999', drive: 'MR',  power: '764', weight: '900',  length: '4840', worth: '~4.500.000 Credits' } },
            { name: 'ist 1.5 S',                                        src: 'cars/Toyota/ist_2002_1.5_S.mp4',                                          data: { production_year: '2002', drive: 'FF',  power: '107', weight: '1020', length: '3855', worth: '16.000 Credits' } },
            { name: 'MR2 G',                                            src: 'cars/Toyota/MR2_1986_G.mp4',                                              data: { production_year: '1986', drive: 'MR',  power: '128', weight: '1120', length: '3925', worth: '~6.000 Credits' } },
            { name: 'MR2 G-Limited Super Charger',                      src: 'cars/Toyota/MR2_1986_G-Limited_Super_Charger.mp4',                        data: { production_year: '1986', drive: 'MR',  power: '143', weight: '1120', length: '3925', worth: '~6.000 Credits' } },
            { name: 'MR2 G-Limited',                                    src: 'cars/Toyota/MR2_1997_G-Limited.mp4',                                      data: { production_year: '1997', drive: 'MR',  power: '197', weight: '1211', length: '4170', worth: '~15.000 Credits' } },
            { name: 'MR2 GT-S',                                         src: 'cars/Toyota/MR2_1997_GT-S.mp4',                                           data: { production_year: '1997', drive: 'MR',  power: '241', weight: '1270', length: '4170', worth: '~14.000 Credits' } },
            { name: 'MR2 S Edition',                                    src: 'cars/Toyota/MR2_1999_S_Edition.mp4',                                      data: { production_year: '1999', drive: 'MR',  power: '138', weight: '970',  length: '3895', worth: '~13.000 Credits' } },
            { name: 'MR2 Super Autobacs Apex',                          src: 'cars/Toyota/MR2_2000_Super_Autobacs_Apex.mp4',                            data: { production_year: '2000', drive: 'MR',  power: '300', weight: '1125', length: '3885', worth: '500.000 Credits' } },
            { name: 'MR2 V Edition',                                    src: 'cars/Toyota/MR2_2002_V_Edition.mp4',                                      data: { production_year: '2002', drive: 'MR',  power: '137', weight: '980',  length: '3895', worth: '21.800 Credits' } },
            { name: 'MTRC',                                             src: 'cars/Toyota/MTRC_2004.mp4',                                               data: { production_year: '2004', drive: '4WD', power: '266', weight: '1200', length: '4060', worth: '4WD-Challenge' } },
            { name: 'Prius G',                                          src: 'cars/Toyota/Prius_2002_G.mp4',                                            data: { production_year: '2002', drive: 'FF',  power: '71',  weight: '1220', length: '4310', worth: '~17.000 Credits' } },
            { name: 'Prius G Touring Selection',                        src: 'cars/Toyota/Prius_2003_G_Touring_Selection.mp4',                          data: { production_year: '2003', drive: 'FF',  power: '75',  weight: '1290', length: '4445', worth: '25.700 Credits' } },
            { name: 'RSC',                                              src: 'cars/Toyota/RSC_2001.mp4',                                                data: { production_year: '2001', drive: '4WD', power: '267', weight: '1349', length: '4115', worth: 'Whistler Eis-Rennen Leicht' } },
            { name: 'RSC Rally Raid Car',                               src: 'cars/Toyota/RSC_2002_Rally_Raid_Car.mp4',                                 data: { production_year: '2002', drive: '4WD', power: '423', weight: '1000', length: '4115', worth: 'Capri Rally Leicht' } },
            { name: 'Sera',                                             src: 'cars/Toyota/Sera_1992.mp4',                                               data: { production_year: '1992', drive: 'FF',  power: '110', weight: '910',  length: '3860', worth: '~10.000 Credits' } },
            { name: 'Sports 800',                                       src: 'cars/Toyota/Sports_1965_800.mp4',                                         data: { production_year: '1965', drive: 'FR',  power: '43',  weight: '580',  length: '3610', worth: '32.000 Credits' } },
            { name: 'Sprinter Trueno BZ-R',                             src: 'cars/Toyota/Sprinter_Trueno_1998_BZ-R.mp4',                               data: { production_year: '1998', drive: 'FF',  power: '172', weight: '1080', length: '4305', worth: '~12.000 Credits' } },
            { name: 'Starlet Glanza V',                                 src: 'cars/Toyota/Starlet_1997_Glanza_V.mp4',                                   data: { production_year: '1997', drive: 'FF',  power: '133', weight: '920',  length: '3790', worth: '~5.000 Credits' } },
            { name: 'Supra 3.0 GT',                                     src: 'cars/Toyota/Supra_1988_3.0_GT_Turbo_A.mp4',                               data: { production_year: '1988', drive: 'FR',  power: '266', weight: '1530', length: '4620', worth: '~14.000 Credits' } },
            { name: 'Supra 2.5 GT Twin Turbo',                          src: 'cars/Toyota/Supra_1990_2.5_GT_Twin_Turbo_R.mp4',                          data: { production_year: '1990', drive: 'FR',  power: '272', weight: '1520', length: '4620', worth: '~12.000 Credits' } },
            { name: 'Supra RZ',                                         src: 'cars/Toyota/Supra_1997_RZ.mp4',                                           data: { production_year: '1997', drive: 'FR',  power: '325', weight: '1510', length: '4520', worth: '~22.000 Credits' } },
            { name: 'Supra SZ-R',                                       src: 'cars/Toyota/Supra_1997_SZ-R.mp4',                                         data: { production_year: '1997', drive: 'FR',  power: '221', weight: '1451', length: '4520', worth: '~12.000 Credits' } },
            { name: "Supra Castrol Tom's",                              src: 'cars/Toyota/Supra_2000_Castrol_Toms.mp4',                                 data: { production_year: '2000', drive: 'FR',  power: '470', weight: '1100', length: '4520', worth: '1.350.000 Credits' } },
            { name: 'Supra Denso Sard',                                 src: 'cars/Toyota/Supra_2000_Denso_Sard.mp4',                                   data: { production_year: '2000', drive: 'FR',  power: '470', weight: '1100', length: '4520', worth: '1.350.000 Credits' } },
            { name: 'Supra Au Cerumo',                                  src: 'cars/Toyota/Supra_2001_Au_Cerumo.mp4',                                    data: { production_year: '2001', drive: 'FR',  power: '471', weight: '1100', length: '4520', worth: '1.350.000 Credits' } },
            { name: "Supra Castrol Tom's",                              src: 'cars/Toyota/Supra_2001_Castrol_Toms.mp4',                                 data: { production_year: '2001', drive: 'FR',  power: '471', weight: '1100', length: '4520', worth: '1.350.000 Credits' } },
            { name: 'Supra Esso Ultraflo',                              src: 'cars/Toyota/Supra_2001_Esso_Ultraflo.mp4',                                data: { production_year: '2001', drive: 'FR',  power: '495', weight: '1100', length: '4520', worth: '1.350.000 Credits' } },
            { name: "Supra Woodone Tom's",                              src: 'cars/Toyota/Supra_2003_Woodone_Toms.mp4',                                 data: { production_year: '2003', drive: 'FR',  power: '503', weight: '1100', length: '4520', worth: '1.350.000 Credits' } },
            { name: 'Tacoma X-Runner',                                  src: 'cars/Toyota/Tacoma_2004_X-Runner.mp4',                                    data: { production_year: '2004', drive: 'FR',  power: '245', weight: '1687', length: '5285', worth: '24.520 Credits' } },
            { name: 'Voltz S',                                          src: 'cars/Toyota/Voltz_2002_S.mp4',                                            data: { production_year: '2002', drive: 'FF',  power: '127', weight: '1250', length: '4000', worth: '17.880 Credits' } },
            { name: 'Will VS',                                          src: 'cars/Toyota/Will_2001_VS.mp4',                                            data: { production_year: '2001', drive: 'FF',  power: '187', weight: '1190', length: '4385', worth: '20.500 Credits' } },
            { name: 'Yaris F',                                          src: 'cars/Toyota/Yaris_1999_F.mp4',                                            data: { production_year: '1999', drive: 'FF',  power: '69',  weight: '920',  length: '3790', worth: '~6.000 Credits' } },
            { name: 'Yaris RS 1.5',                                     src: 'cars/Toyota/Yaris_2000_RS_1.5.mp4',                                       data: { production_year: '2000', drive: 'FF',  power: '108', weight: '940',  length: '3630', worth: '14.530 Credits' } },
            { name: 'Yaris RS Turbo',                                   src: 'cars/Toyota/Yaris_2000_RS_Turbo.mp4',                                     data: { production_year: '2000', drive: 'FF',  power: '133', weight: '980',  length: '3630', worth: '18.880 Credits' } },
            { name: 'Yaris U Euro',                                     src: 'cars/Toyota/Yaris_2000_U_Euro.mp4',                                       data: { production_year: '2000', drive: 'FF',  power: '84',  weight: '850',  length: '3630', worth: '~6.000 Credits' } },
        ],
    },
    trd: {
        manufacturer: 'TRD', country: 'Japan',                          // 1
        cars: [
            { name: 'Celica Modellista Sports M',                       src: 'cars/TRD/Celica_2000_Modellista_Sports_M.mp4',                            data: { production_year: '2000', drive: 'FF',  power: '200', weight: '1141', length: '4335', worth: '25.500 Credits' } },
        ],
    },
    trial: {
        manufacturer: 'Trial', country: 'Japan',                        // 1
        cars: [
            { name: 'Celica SS-II',                                     src: 'cars/Trial/Celica_2003_SS-II.mp4',                                        data: { production_year: '2003', drive: 'FF',  power: '285', weight: '1140', length: '4335', worth: '100.000 Credits' } },
        ],
    },
    triumph: {
        manufacturer: 'Triumph', country: 'Grossbritannien',            // 1
        cars: [
            { name: 'Spitfire 1500',                                    src: 'cars/Triumph/Spitfire_1974_1500.mp4',                                     data: { production_year: '1974', drive: 'FR',  power: '72',  weight: '809',  length: '3780', worth: '17.200 Credits' } },
        ],
    },
    tvr: {
        manufacturer: 'TVR', country: 'Grossbritannien',                // 7
        cars: [
            { name: 'Cerbera Speed 6',                                  src: 'cars/TVR/Cerbera_1997_Speed_6.mp4',                                       data: { production_year: '1997', drive: 'FR',  power: '355', weight: '1130', length: '4000', worth: '~40.000 Credits' } },
            { name: 'Cerbera Speed 12',                                 src: 'cars/TVR/Cerbera_2000_Speed_12.mp4',                                      data: { production_year: '2000', drive: 'FR',  power: '809', weight: '1021', length: '4620', worth: '259.970 Credits' } },
            { name: 'Griffith 500',                                     src: 'cars/TVR/Griffith_1994_500.mp4',                                          data: { production_year: '1994', drive: 'FR',  power: '330', weight: '1059', length: '3892', worth: '~21.000 Credits' } },
            { name: 'T350 C',                                           src: 'cars/TVR/T350_2003_C.mp4',                                                data: { production_year: '2003', drive: 'FR',  power: '350', weight: '1187', length: '3920', worth: '74.830 Credits' } },
            { name: 'Tamora',                                           src: 'cars/TVR/Tamora_2002.mp4',                                                data: { production_year: '2002', drive: 'FR',  power: '334', weight: '1060', length: '3925', worth: '70.940 Credits' } },
            { name: 'Tuscan Speed 6',                                   src: 'cars/TVR/Tuscan_2000_Speed_6.mp4',                                        data: { production_year: '2000', drive: 'FR',  power: '360', weight: '1100', length: '4235', worth: '94.050 Credits' } },
            { name: 'V8 S',                                             src: 'cars/TVR/V8_1991_S.mp4',                                                  data: { production_year: '1991', drive: 'FR',  power: '246', weight: '1050', length: '4000', worth: '~21.000 Credits' } },
        ],
    },
    vauxhall: {
        manufacturer: 'Vauxhall', country: 'Grossbritannien',           // 7
        cars: [
            { name: 'Astra Touring Car',                                src: 'cars/Vauxhall/Astra_2000_Touring_Car.mp4',                                data: { production_year: '2000', drive: 'FR',  power: '460', weight: '1000', length: '4000', worth: '550.000 Credits' } },
            { name: 'Calibra Touring Car',                              src: 'cars/Vauxhall/Calibra_1994_Touring_Car.mp4',                              data: { production_year: '1994', drive: '4WD', power: '427', weight: '1059', length: '4000', worth: '1.750.000 Credits' } },
            { name: 'Corsa Comfort 1.4i',                               src: 'cars/Vauxhall/Corsa_2001_Comfort_1.4i.mp4',                               data: { production_year: '2001', drive: 'FF',  power: '84',  weight: '998',  length: '4000', worth: '17.960 Credits' } },
            { name: 'Tigra 1.6i',                                       src: 'cars/Vauxhall/Tigra_1999_1.6i.mp4',                                       data: { production_year: '1999', drive: 'FF',  power: '104', weight: '1032', length: '4000', worth: '29.140 Credits | ~11.000 Credits' } },
            { name: 'Vectra 3.2 V6',                                    src: 'cars/Vauxhall/Vectra_2003_3.2_V6.mp4',                                    data: { production_year: '2003', drive: 'FF',  power: '211', weight: '1510', length: '4610', worth: '36.530 Credits' } },
            { name: 'VX220',                                            src: 'cars/Vauxhall/VX220_2000.mp4',                                            data: { production_year: '2000', drive: 'MR',  power: '145', weight: '850',  length: '3790', worth: '44.690 Credits' } },
            { name: 'VX220 Turbo',                                      src: 'cars/Vauxhall/VX220_2000_Turbo.mp4',                                      data: { production_year: '2000', drive: 'MR',  power: '197', weight: '1005', length: '3796', worth: '49.550 Credits' } },
        ],
    },
    volkswagen: {
        manufacturer: 'Volkswagen', country: 'Deutschland',             // 16
        cars: [
            { name: 'Beetle 1100',                                      src: 'cars/Volkswagen/Beetle_1949_1100.mp4',                                    data: { production_year: '1949', drive: 'RR',  power: '25',  weight: '720',  length: '4070', worth: 'Beetle Cup' } },
            { name: 'Beetle 2.0',                                       src: 'cars/Volkswagen/Beetle_2000_2.0.mp4',                                     data: { production_year: '2000', drive: 'FF',  power: '115', weight: '1228', length: '4081', worth: '25.980 Credits' } },
            { name: 'Beetle Cup Car',                                   src: 'cars/Volkswagen/Beetle_2000_Cup_Car.mp4',                                 data: { production_year: '2000', drive: 'FF',  power: '195', weight: '1169', length: '4081', worth: '50.000 Credits' } },
            { name: 'Beetle RSi',                                       src: 'cars/Volkswagen/Beetle_2000_RSi.mp4',                                     data: { production_year: '2000', drive: '4WD', power: '229', weight: '1515', length: '4081', worth: '94.050 Credits' } },
            { name: 'Bora V6 4Motion',                                  src: 'cars/Volkswagen/Bora_2001_V6_4Motion.mp4',                                data: { production_year: '2001', drive: '4WD', power: '204', weight: '1540', length: '4000', worth: '38.910 Credits' } },
            { name: 'Golf 1 GTI',                                       src: 'cars/Volkswagen/Golf_1976_1_GTI.mp4',                                     data: { production_year: '1976', drive: 'FF',  power: '110', weight: '820',  length: '4000', worth: 'GTI Cup' } },
            { name: 'Golf 4 GTI',                                       src: 'cars/Volkswagen/Golf_2001_4_GTI.mp4',                                     data: { production_year: '2001', drive: 'FF',  power: '136', weight: '1280', length: '4149', worth: '~21.000 Credits' } },
            { name: 'Golf 4 R32',                                       src: 'cars/Volkswagen/Golf_2003_4_R32.mp4',                                     data: { production_year: '2003', drive: '4WD', power: '241', weight: '1460', length: '4165', worth: '43.240 Credits' } },
            { name: 'Golf 5 GTI',                                       src: 'cars/Volkswagen/Golf_2005_5_GTI.mp4',                                     data: { production_year: '2005', drive: 'FF',  power: '204', weight: '1336', length: '4204', worth: '32.750 Credits' } },
            { name: 'Karmann Ghia Coupe',                               src: 'cars/Volkswagen/Karmann_1968_Ghia_Coupe.mp4',                             data: { production_year: '1968', drive: 'RR',  power: '44',  weight: '840',  length: '4140', worth: 'Lupo Cup' } },
            { name: 'Lupo Cup Car',                                     src: 'cars/Volkswagen/Lupo_2000_Cup_Car.mp4',                                   data: { production_year: '2000', drive: 'FF',  power: '119', weight: '839',  length: '4000', worth: '50.000 Credits' } },
            { name: 'Lupo GTI',                                         src: 'cars/Volkswagen/Lupo_2001_GTI.mp4',                                       data: { production_year: '2001', drive: 'FF',  power: '116', weight: '975',  length: '4000', worth: '24.160 Credits' } },
            { name: 'Lupo 1.4',                                         src: 'cars/Volkswagen/Lupo_2002_1.4.mp4',                                       data: { production_year: '2002', drive: 'FF',  power: '100', weight: '933',  length: '4000', worth: '15.490 Credits' } },
            { name: 'Lupo GTI Cup Car',                                 src: 'cars/Volkswagen/Lupo_2003_GTI_Cup_Car.mp4',                               data: { production_year: '2003', drive: 'FF',  power: '135', weight: '1010', length: '4000', worth: '50.000 Credits' } },
            { name: 'Polo 4 GTI',                                       src: 'cars/Volkswagen/Polo_2001_4_GTI.mp4',                                     data: { production_year: '2001', drive: 'FF',  power: '116', weight: '1090', length: '4000', worth: '26.720 Credits' } },
            { name: 'W12 Nardo Concept',                                src: 'cars/Volkswagen/W12_2001_Nardo_Concept.mp4',                              data: { production_year: '2001', drive: 'MR',  power: '600', weight: '1300', length: '4400', worth: 'Like The Wind' } },
        ],
    },
    volvo: {
        manufacturer: 'Volvo', country: 'Schweden',                     // 2
        cars: [
            { name: '240 GLT Estate',                                   src: 'cars/Volvo/240_1988_GLT_Estate.mp4',                                      data: { production_year: '1988', drive: 'FR',  power: '118', weight: '1890', length: '4790', worth: '~6.000 Credits | Euro Hot Hatch Liga' } },
            { name: 'S60 T5 Sport',                                     src: 'cars/Volvo/S60_2003_T5_Sport.mp4',                                        data: { production_year: '2003', drive: 'FF',  power: '230', weight: '1550', length: '4575', worth: '35.580 Credits' } },
        ],
    },
};

const showroom_items = document.querySelectorAll('.showroom_item');
const videoContainer = document.getElementById('showroom_videos');
let currentIndex = 0;
let currentBrand = null;
let carSelect = 1;
let carAmount = 0;

showroom_items.forEach(logo => {
    logo.addEventListener('click', () => {
        showroom_items.forEach(l => l.classList.remove('active'));
        logo.classList.add('active');
        carSelect = 1;
        const image = logo.querySelector('img');
        currentBrand = image.getAttribute('data-brand');
        const brandData = showroomVideos[currentBrand];
        const cars = brandData ? brandData.cars : [];
        carAmount = cars.length;
        if (cars.length > 0) {
            currentIndex = 0;
            renderSlider();
        } else {
            videoContainer.innerHTML = '<p>Für diese Marke sind noch keine Fahrzeuge verfügbar.</p>';
        }
    });
});

function renderSlider() {
    const cars = showroomVideos[currentBrand].cars;
    const car = cars[currentIndex];

    videoContainer.innerHTML = `
    <div class='slider-container'>
        <div class='car_index' id='carCounter'>${carSelect} / ${carAmount}</div>
        <div class='car_manufacturer'>${showroomVideos[currentBrand].manufacturer}</div>
        <div class='slider-video-wrapper'>
            <video id="slider_video" class='slider-video' loop autoplay muted>
                <source id="slider_video_src" src='${car.src}' type='video/mp4'>
                Dein Browser unterstützt kein HTML5 Video.
            </video>
            <div class='video-overlay active' id='video_overlay'></div>
            ${cars.length > 1 ? `
                <div class='slider-btn left' onclick='prevCar()'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                        <path d='M15 18l-6-6 6-6' fill='none' stroke='#000000' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/>
                        <path d='M15 18l-6-6 6-6' fill='none' stroke='#aaaaaa' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/>
                    </svg>
                </div>
                <div class='slider-btn right' onclick='nextCar()'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                        <path d='M9 6l6 6-6 6' fill='none' stroke='#000000' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/>
                        <path d='M9 6l6 6-6 6' fill='none' stroke='#aaaaaa' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/>
                    </svg>
                </div>
            ` : ''}
        </div>
        <div class='car_name' id='car_name'>${car.name}</div>
        <div class='slider-details' id="car_details"></div>
    </div>
    `;
    updateDetails(car);const videoOverlay = document.getElementById('video_overlay');setTimeout(() => {videoOverlay.classList.remove('active');}, 100);
}

function updateDetails(car) {
    const psofkg = (car.data.power / car.data.weight).toFixed(2);
    const details = document.getElementById("car_details");
    details.innerHTML = `
        <table class='car_info_table'>
            <tr><td class='car_info_1'>Land:</td><td class='car_info_2'>${showroomVideos[currentBrand].country}</td></tr>
            <tr><td class='car_info_1'>Baujahr:</td><td class='car_info_2'>${car.data.production_year}</td></tr>
            <tr><td class='car_info_1'>Antrieb:</td><td class='car_info_2'>${car.data.drive}</td></tr>
            <tr><td class='car_info_1'>Leistung:</td><td class='car_info_2'>${car.data.power} PS - ${psofkg} PS pro Kg</td></tr>
            <tr><td class='car_info_1'>Gewicht:</td><td class='car_info_2'>${car.data.weight} kg</td></tr>
            <tr><td class='car_info_1'>Länge:</td><td class='car_info_2'>${car.data.length} mm</td></tr>
            <tr><td class='car_info_1'>Preis:</td><td class='car_info_2'>${car.data.worth}</td></tr>
        </table>
    `;
}

function switch_video() {
    const cars = showroomVideos[currentBrand].cars;
    const car = cars[currentIndex];

    const videoOverlay = document.getElementById("video_overlay");
    const video = document.getElementById("slider_video");
    const videoSrc = document.getElementById("slider_video_src");
    const carName = document.getElementById("car_name");

    // Overlay einblenden (Fade-Out)
    videoOverlay.classList.add("active");

    setTimeout(() => {
        // Videoquelle und Details wechseln
        carName.innerHTML = car.name;
        videoSrc.src = car.src;
        video.load();
        video.play();
        updateDetails(car);

        // Overlay ausblenden (Fade-In)
        setTimeout(() => {
            videoOverlay.classList.remove("active");document.getElementById('carCounter').innerHTML = carSelect + ' / ' +cars.length;
        }, 0); 
        
    }, 1000); // Dauer entspricht CSS transition
}

function prevCar() {
    const cars = showroomVideos[currentBrand].cars;
    currentIndex = (currentIndex - 1 + cars.length) % cars.length;
    carSelect = currentIndex + 1;
    switch_video();
}

function nextCar() {
    const cars = showroomVideos[currentBrand].cars;
    currentIndex = (currentIndex + 1) % cars.length;
    carSelect = currentIndex + 1;
    switch_video();
}

function scrollShowroom(direction) {const showroom = document.getElementById('showroom');const scrollAmount = 200;showroom.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });}