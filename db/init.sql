create table houses (
    id serial primary key
    , name varchar(30)
    , address varchar(100)
    , city varchar(100)
    , state varchar(2)
    , zip integer
); 

insert into houses (name, address, city, state, zip)
    values ('Desert Dream Home', '1234 E Cactus Rd', 'Scottsdale', 'AZ', 85251)
    , ('Island Villa','546 Playa Bonita Dr','Culebra','PR', 00775);

select * from houses;

-- alter table houses
    -- add column img text;
    -- add column mortgage decimal;
    -- add column rent decimal;