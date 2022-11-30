DELIMITER $$ DROP PROCEDURE IF EXISTS GetPlayerAsset;
CREATE PROCEDURE GetPlayerAsset(IN In_PlayerId INT) BEGIN
SELECT PlayerId,
  FlagImgPath,
  PlayerImgPath
FROM TennisApp.PlayerAsset
WHERE PlayerId = In_PlayerId;
END $$ DELIMITER;