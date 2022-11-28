CREATE TABLE Player (
  PlayerId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  FirstName VARCHAR(255) NOT NULL,
  LastName VARCHAR(255) NOT NULL,
  CurrentRank INT,
  Titles2022 INT,
  BirthDate DATE NOT NULL,
  Country TINYTEXT,
  Wins2022 INT,
  Losses2022 INT,
  Points INT,
  Earnings TINYTEXT,
  FirstServePercent TINYTEXT,
  FirstServePointsWonPercent TINYTEXT,
  SecondServePointsWonPercent TINYTEXT,
  ServiceGamesWonPercent TINYTEXT,
  CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (FirstName, LastName, BirthDate)
);