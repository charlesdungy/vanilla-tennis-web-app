DELIMITER $$ DROP PROCEDURE IF EXISTS GetPlayer;
CREATE PROCEDURE GetPlayer(IN In_PlayerId INT) BEGIN
SELECT PlayerId,
  FirstName,
  LastName,
  CurrentRank,
  Titles2022,
  TIMESTAMPDIFF(YEAR, BirthDate, CURDATE()) AS Age,
  Country,
  CONCAT(Wins2022, "-", Losses2022) AS Record2022,
  FORMAT(Earnings, 0) as Earnings,
  CONCAT(FirstServePercent, "%") AS FirstServePercent,
  CONCAT(FirstServePointsWonPercent, "%") AS FirstServePointsWonPercent,
  CONCAT(SecondServePointsWonPercent, "%") AS SecondServePointsWonPercent,
  CONCAT(ServiceGamesWonPercent, "%") AS ServiceGamesWonPercent
FROM TennisApp.Player
WHERE PlayerId = In_PlayerId;
END $$ DELIMITER;


DELIMITER $$ DROP PROCEDURE IF EXISTS GetPlayers;
CREATE PROCEDURE GetPlayers(IN OrderBy VARCHAR(255)) BEGIN
DECLARE SQLStatement VARCHAR(255);
SET @SQLStatement = CONCAT(
    'SELECT PlayerId, FirstName, LastName, ',
    'CurrentRank, Titles2022, Country, Points ',
    'FROM TennisApp.Player ORDER BY ',
    OrderBy
  );
PREPARE ThisStmt
FROM @SQLStatement;
EXECUTE ThisStmt;
END $$ DELIMITER;