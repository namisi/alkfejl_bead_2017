-- Users: (id from 1000)
INSERT INTO USERS (ID, VERSION, USERNAME, EMAIL, PASSWORD, ROLE) VALUES (1000, 0, 'admin', 'admin@gmail.com', 'admin', 'ADMIN');
INSERT INTO USERS (ID, VERSION, USERNAME, EMAIL, PASSWORD, ROLE) VALUES (1001, 0, 'user', 'petike@gmail.com', 'user', 'USER');

-- Vehicles: (id from 1500)
INSERT INTO VEHICLES(ID, VERSION, COST_PER_DAY, LICENSE_PLATE_NR, MANUFACTURE_DATE, MANUFACTURER, TYPE) VALUES (1500, 0, 1500, 'DEL001', 2008, 'Old', 'Car');
INSERT INTO VEHICLES(ID, VERSION, COST_PER_DAY, LICENSE_PLATE_NR, MANUFACTURE_DATE, MANUFACTURER, TYPE) VALUES (1501, 0, 20000, 'TES202', 2016, 'Tesla', 'Model S');
INSERT INTO VEHICLES(ID, VERSION, COST_PER_DAY, LICENSE_PLATE_NR, MANUFACTURE_DATE, MANUFACTURER, TYPE) VALUES (1502, 0, 15000, 'TES203', 2018, 'Tesla', 'Model 3');
INSERT INTO VEHICLES(ID, VERSION, COST_PER_DAY, LICENSE_PLATE_NR, MANUFACTURE_DATE, MANUFACTURER, TYPE) VALUES (1503, 0, 30000, 'TES303', 2017, 'Tesla', 'Model X');

-- Vehicles with reservations: (id from 2000)
INSERT INTO VEHICLES(ID, VERSION, COST_PER_DAY, LICENSE_PLATE_NR, MANUFACTURE_DATE, MANUFACTURER, TYPE) VALUES (2000, 0, 12000, 'ASD123', 2012, 'Ford', 'Mustang');
INSERT INTO VEHICLES(ID, VERSION, COST_PER_DAY, LICENSE_PLATE_NR, MANUFACTURE_DATE, MANUFACTURER, TYPE) VALUES (2001, 0, 3000, 'SUZ111', 2010, 'Suzuki', 'Swift');

-- Rentings: (id auto incrementing from 0)
INSERT INTO RENTINGS(ID, VERSION, START_DATE, END_DATE, USER_ID, VEHICLE_ID) VALUES (HIBERNATE_SEQUENCE.nextVal, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1000, 2000);
INSERT INTO RENTINGS(ID, VERSION, START_DATE, END_DATE, USER_ID, VEHICLE_ID) VALUES (HIBERNATE_SEQUENCE.nextVal, 0, CURRENT_TIMESTAMP, null, 1001, 2001);
