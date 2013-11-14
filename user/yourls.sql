CREATE DATABASE yourls_upc;
USE yourls_upc;
/*
 */




SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for yourls_log
-- ----------------------------
DROP TABLE IF EXISTS `yourls_log`;
CREATE TABLE `yourls_log` (
  `click_id` int(11) NOT NULL AUTO_INCREMENT,
  `click_time` datetime NOT NULL,
  `shorturl` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `referrer` varchar(200) NOT NULL,
  `user_agent` varchar(255) NOT NULL,
  `ip_address` varchar(41) NOT NULL,
  `country_code` char(2) NOT NULL,
  PRIMARY KEY (`click_id`),
  KEY `shorturl` (`shorturl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yourls_log
-- ----------------------------

-- ----------------------------
-- Table structure for yourls_options
-- ----------------------------
DROP TABLE IF EXISTS `yourls_options`;
CREATE TABLE `yourls_options` (
  `option_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `option_name` varchar(64) NOT NULL DEFAULT '',
  `option_value` longtext NOT NULL,
  PRIMARY KEY (`option_id`,`option_name`),
  KEY `option_name` (`option_name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yourls_options
-- ----------------------------
INSERT INTO `yourls_options` VALUES ('1', 'version', '1.7-alpha');
INSERT INTO `yourls_options` VALUES ('2', 'db_version', '482');
INSERT INTO `yourls_options` VALUES ('3', 'next_id', '2');
INSERT INTO `yourls_options` VALUES ('4', 'active_plugins', 'a:6:{i:0;s:20:\"random-bg/plugin.php\";i:1;s:18:\"authmgr/plugin.php\";i:2;s:25:\"random-keyword/plugin.php\";i:3;s:18:\"qr-code/plugin.php\";i:4;s:24:\"Popular-Links/plugin.php\";i:5;s:35:\"google-analytics-oxicode/plugin.php\";}');
INSERT INTO `yourls_options` VALUES ('5', 'test_option', '6');
INSERT INTO `yourls_options` VALUES ('6', 'add_to_form', 'yes');
INSERT INTO `yourls_options` VALUES ('7', 'analytics_defaults', 'a:5:{s:10:\"utm_source\";s:6:\"upc.pe\";s:10:\"utm_medium\";s:12:\"urlshortener\";s:12:\"utm_campaign\";s:0:\"\";s:8:\"utm_term\";s:0:\"\";s:11:\"utm_content\";s:0:\"\";}');

-- ----------------------------
-- Table structure for yourls_url
-- ----------------------------
DROP TABLE IF EXISTS `yourls_url`;
CREATE TABLE `yourls_url` (
  `keyword` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `url` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `real` double DEFAULT NULL,
  `title` text,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ip` varchar(41) NOT NULL,
  `clicks` int(10) unsigned NOT NULL,
  PRIMARY KEY (`keyword`),
  KEY `timestamp` (`timestamp`),
  KEY `ip` (`ip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yourls_url
-- ----------------------------
