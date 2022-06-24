-- MySQL dump 10.19  Distrib 10.3.34-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: inwork
-- ------------------------------------------------------
-- Server version	10.3.34-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ba_search_trends`
--
USE inworkapp;
DROP TABLE IF EXISTS `ba_search_trends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ba_search_trends` (
  `id` varchar(255) NOT NULL,
  `times` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ba_search_trends`
--

LOCK TABLES `ba_search_trends` WRITE;
/*!40000 ALTER TABLE `ba_search_trends` DISABLE KEYS */;
INSERT INTO `ba_search_trends` VALUES ('microsoft@outlook.es',179),('assistant.evercode@gmail.com',7),('business1@gmail.com',7),('digio@gmail.com',25),('eskdas@gmail.com',1),('asdas@gmail.com',2);
/*!40000 ALTER TABLE `ba_search_trends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_accounts`
--

DROP TABLE IF EXISTS `business_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `business_accounts` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `business_name` varchar(255) NOT NULL,
  `business_password` varchar(255) NOT NULL,
  `business_pic` varchar(255) DEFAULT 'default-business-pic.png',
  `business_banner` varchar(255) DEFAULT 'default-business-banner.png',
  `email` varchar(255) NOT NULL,
  `profession` varchar(255) DEFAULT 'Marketing',
  `stars` int(11) DEFAULT 0,
  `biography` varchar(999) NOT NULL DEFAULT 'Hello, my business is using inWork!',
  `location` varchar(255) NOT NULL DEFAULT 'New Zealand, Auckland',
  `type` varchar(255) DEFAULT 'business',
  PRIMARY KEY (`email`),
  UNIQUE KEY `ID` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_accounts`
--

LOCK TABLES `business_accounts` WRITE;
/*!40000 ALTER TABLE `business_accounts` DISABLE KEYS */;
INSERT INTO `business_accounts` VALUES (9,'asdasda','$2a$15$nlFHwUY82fCALHX54enpZ.6DCzfTSUYFIbzs9MmiReO5p5dXV0gPG','default-business-pic.png','default-business-banner.png','adsasd@gmail.cd','EVERCODE',0,'Hello, my business is using inWork!','New Zealand, Auckland','business'),(11,'asdasda','$2a$15$xqkEUjSIbS5EzQLiQYbFsuatow20NboIHGciQDgYlAz4Dd4d11Drq','default-business-pic.png','default-business-banner.png','adsassd@gmail.cd','EVERCODE',0,'Hello, my business is using inWork!','New Zealand, Auckland','business'),(3,'ADV','$2a$15$mgaEeBiUfzClgi695dhb5.ssDjsdZJTDNqLmKC4cFEHY7yzTiEJ4G','default-business-pic.png','default-business-banner.png','adv@gmail.com','EVERCODE',0,'Hello, my business is using inWork!','New Zealand, Auckland','business'),(5,'business','$2a$15$xzbkK5IyiQW8kZbm9dA6T.5DX7nUBrfpEI6BM6yUH5wQT6Vggsl1m','default-business-pic.png','default-business-banner.png','asdas@gmail.com','EVERCODE',0,'Hello, my business is using inWork!','New Zealand, Auckland','business'),(8,'asdkasd@gmail.com','$2a$15$pWCk4Yrx74VVyGXSyyHwcesmVuB547g5F..iAl8P1BFYgKRD9F1uq','default-business-pic.png','default-business-banner.png','asdasda@gmail.com','EVERCODE',0,'Hello, my business is using inWork!','New Zealand, Auckland','business'),(7,'business','$2a$15$sdPCmdo/xf/eAzAQ6PmTeums8E24W3N3Hu2C5XB9XzzKd2lCdQg6S','default-business-pic.png','default-business-banner.png','asdass@gmail.com','EVERCODE',0,'Hello, my business is using inWork!','New Zealand, Auckland','business'),(13,'EVERCODE','$2a$15$a9022SZ7etbZO1ze9SmMuuXgy19xgJAk9qzXExxjnULuPDEYOfcwm','1649441000400_inwork_Screenshot from 2022-04-08 13-57-15 copy.png','1649440467638_inwork_evercode-logo.png','assistant.evercode@gmail.com','inWork',0,'Founders at inWork platform.<br/>we hope you enjoy this project and found the work that you have been searching!<br/>','Spain, Madrid','business'),(14,'business1','$2a$15$HE6SVkWBloZR5PKptB5RzuQIgtH9z64854koNXOM1C5pGS4C8GPke','default-business-pic.png','default-business-banner.png','business1@gmail.com','Marketing',1,'Hello, my business is using inWork!','New Zealand, Auckland','business'),(15,'DigIo','$2a$15$4lVF4twK0LkXLn64Qh4sROcGSFuFTGj300HCJ7m.NQ3j8/tzSxAPW','1649513206543_inwork_logodigio-1024x1024.png','1650111834925_inwork_pexels-guillaume-meurice-1591447.jpg','digio@gmail.com','Development Solutions',0,'DigIo Development Solutions is recruiting for personal!','New Zealand, Auckland','business'),(12,'Digio Solutions','$2a$15$ECNVrEFlzu582sGtXor3bOAjWJ4idnI3f5DKjBWgLuH1bZ9UtLy/6','default-business-pic.png','default-business-banner.png','digiosol@gmail.com','EVERCODE',0,'Hello, my business is using inWork!','New Zealand, Auckland','business'),(1,'Mini Market','$2a$15$NzRIqDxkrtZQbzu9QkyXxOtjUFW7D8xfgNs8kmZ/fPZbP4kBwE9SK','default-business-pic.png','default-business-banner.png','eskdas@gmail.com','Sellers',0,'Hello, welcome to our mini market!','New Zealand, Auckland','business'),(2,'AbsOlute','$2a$15$3KyYBwd3qHoJJUFpjXAPPeEq8fW9C3Brq3Gk3WHY5mgH7MNkyUe2q','1649449770732_inwork_17b913f67b8b5cabd274604e7b610b65.jpg','1648744888454_inwork_k4TE9f.jpg','microsoft@outlook.es','Platform Designs',5,'Creators of Abstract Platforms, AbsOlute Solutions!<br/>Creators of Abstract Platforms, AbsOlute Solutions!<br/>Creators of Abstract Platforms, AbsOlute Solutions!<br/>Creators of Abstract Platforms, AbsOlute Solutions!<br/>Creators of Abstract Platforms, AbsOlute Solutions!<br/>Creators of Abstract Platforms, AbsOlute Solutions!','Spain, Madrid','business'),(4,'Project L','$2a$15$OfMNRja8Ejj.bWCBexZilesM4h.oftVi1bKtC.i48w6kxB3qCfVxy','default-business-pic.png','default-business-banner.png','projectl@gmail.com','EVERCODE',0,'Hello, my business is using inWork!','New Zealand, Auckland','business');
/*!40000 ALTER TABLE `business_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_accounts_preferences`
--

DROP TABLE IF EXISTS `business_accounts_preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `business_accounts_preferences` (
  `email` varchar(255) NOT NULL,
  `searchingfor1` varchar(255) DEFAULT 'Web Developer',
  `searchingfor2` varchar(255) DEFAULT NULL,
  `searchingfor3` varchar(255) DEFAULT NULL,
  `searchingskill1` varchar(255) DEFAULT NULL,
  `searchingskill2` varchar(255) DEFAULT NULL,
  `searchingskill3` varchar(255) DEFAULT NULL,
  `fname` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT 'New Zealand, Auckland',
  `biography` varchar(999) DEFAULT NULL,
  `profession` varchar(255) DEFAULT 'EVERCODE',
  `pic` varchar(255) DEFAULT 'default-business-pic.png',
  `banner` varchar(255) DEFAULT 'default-business-banner.png',
  `id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_accounts_preferences`
--

LOCK TABLES `business_accounts_preferences` WRITE;
/*!40000 ALTER TABLE `business_accounts_preferences` DISABLE KEYS */;
INSERT INTO `business_accounts_preferences` VALUES ('microsoft@outlook.es','Android Developer','','Web Developer','IOS','','','AbsOlute','Spain, Madrid','Creators of Abstract Platforms, AbsOlute Solutions!<br/>Creators of Abstract Platforms, AbsOlute Solutions!<br/>Creators of Abstract Platforms, AbsOlute Solutions!<br/>Creators of Abstract Platforms, AbsOlute Solutions!<br/>Creators of Abstract Platforms, AbsOlute Solutions!<br/>Creators of Abstract Platforms, AbsOlute Solutions!','Platform Designs','1649449770732_inwork_17b913f67b8b5cabd274604e7b610b65.jpg','1648744888454_inwork_k4TE9f.jpg','2'),('adv@gmail.com','Web Developer','','Ios','Frontend','React','','ADV','New Zealand, Auckland','Hello, my business is using inWork!','EVERCODE','default-business-pic.png','default-business-banner.png',''),('projectl@gmail.com','Web Developer','Web Developer','Ios','Frontend','React','','Project L','New Zealand, Auckland','Hello, my business is using inWork!','EVERCODE','default-business-pic.png','default-business-banner.png',''),('digiosol@gmail.com','Web Developer',NULL,NULL,NULL,NULL,NULL,'Digio Solutions','New Zealand, Auckland',NULL,'EVERCODE','default-business-pic.png','default-business-banner.png','12'),('assistant.evercode@gmail.com','Web Developer',NULL,NULL,NULL,NULL,NULL,'EVERCODE','New Zealand, Auckland',NULL,'EVERCODE','default-business-pic.png','default-business-banner.png','13'),('business1@gmail.com','Web Developer','','Android Developer','Frontend Developer','','','business1','New Zealand, Auckland','Hello, my business is using inWork!','Marketing','default-business-pic.png','default-business-banner.png','14'),('digio@gmail.com','Android Developer','Web Developer','Ios Developer','','','','DigIo','New Zealand, Auckland','DigIo Development Solutions is recruiting for personal!','Development Solutions','1649513206543_inwork_logodigio-1024x1024.png','1649513206599_inwork_DigIOLogo-GPTW-Web.svg','15');
/*!40000 ALTER TABLE `business_accounts_preferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `change_password_requests`
--

DROP TABLE IF EXISTS `change_password_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `change_password_requests` (
  `email` varchar(255) NOT NULL,
  `verification_code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `change_password_requests`
--

LOCK TABLES `change_password_requests` WRITE;
/*!40000 ALTER TABLE `change_password_requests` DISABLE KEYS */;
INSERT INTO `change_password_requests` VALUES ('eskdas@gmail.com','595312'),('everituwebdevelopment@gmail.com','292611'),('everituwebdevelopment@gmail.com','282624');
/*!40000 ALTER TABLE `change_password_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `experience` (
  `experience_title` varchar(255) NOT NULL,
  `experience_description` varchar(999) NOT NULL,
  `experience_logo` varchar(999) DEFAULT 'nologo.png',
  `email` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience`
--

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */;
INSERT INTO `experience` VALUES ('Abstract Platform','Professional Android & Web App.','1648744725396_inwork_big-sur-4k-wp (1).jpg','microsoft@outlook.es',118),('Abstract II Platform','Professional Android & Web App.<br/>Second app, adding changes & new features!','1648744795591_inwork_peakpx.jpg','microsoft@outlook.es',119),('Developer At Microsoft','Developing new features to Microsoft, for being more specific i develop Microsoft Web Apps with React Native.','1648929599909_inwork_Microsoft-Logo-3.jpg','everituwebdevelopment@gmail.com',120),('Database Developer At Paypal','Managing multiple functions on paypal with MySQL & MongoDB','1648929644412_inwork_logo.png','everituwebdevelopment@gmail.com',121),('inWork','inWork Platform, used to join a business with someone good for your business!','1649441194796_inwork_Screenshot from 2022-04-08 13-57-15 copy.png','assistant.evercode@gmail.com',122);
/*!40000 ALTER TABLE `experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `languages` (
  `email` varchar(255) NOT NULL,
  `language` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `language_skill` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES ('microsoft@outlook.es','Spanish',8,'Native'),('microsoft@outlook.es','English',9,'Advanced'),('everituwebdevelopment@gmail.com','English',10,'Native'),('everituwebdevelopment@gmail.com','Spanish',11,'Beginner'),('everituwebdevelopment@gmail.com','French',12,'Advanced'),('assistant.evercode@gmail.com','English',13,'Native'),('assistant.evercode@gmail.com','Spanish',14,'Native');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `links`
--

DROP TABLE IF EXISTS `links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `links` (
  `link` varchar(999) NOT NULL,
  `email` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `links`
--

LOCK TABLES `links` WRITE;
/*!40000 ALTER TABLE `links` DISABLE KEYS */;
INSERT INTO `links` VALUES ('https://github.com/powfuu/inwork-web/tree/master','microsoft@outlook.es',12),('https://github.com/powfuu/conf-vim/tree/master','microsoft@outlook.es',13),('https://github.com/powfuu/inwork-web/tree/master','everituwebdevelopment@gmail.com',14),('https://github.com/powfuu/inwork-web/tree/master','everituwebdevelopment@gmail.com',15),('https://github.com/powfuu/inwork-web/tree/master','everituwebdevelopment@gmail.com',16);
/*!40000 ALTER TABLE `links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matches` (
  `idgroup` int(11) NOT NULL AUTO_INCREMENT,
  `usr1` varchar(255) NOT NULL,
  `usr2` varchar(255) NOT NULL,
  `usr1pic` varchar(255) NOT NULL,
  `usr2pic` varchar(255) NOT NULL,
  `usr1fname` varchar(255) NOT NULL,
  `usr2fname` varchar(255) NOT NULL,
  `usr1profession` varchar(255) NOT NULL,
  `usr2profession` varchar(255) NOT NULL,
  `usr1type` varchar(255) NOT NULL,
  `usr2type` varchar(255) NOT NULL,
  `usr1id` varchar(255) NOT NULL,
  `usr2id` varchar(255) NOT NULL,
  `usr2seen` tinyint(1) DEFAULT 1,
  `usr1seen` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`idgroup`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (86,'everituwebdevelopment@gmail.com','microsoft@outlook.es','1650297069207_inwork_1631205255821.jpeg','1649449770732_inwork_17b913f67b8b5cabd274604e7b610b65.jpg','Everit Molero','AbsOlute','Android Developer','Platform Designs','personal','business','9','2',0,1);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matchmaking`
--

DROP TABLE IF EXISTS `matchmaking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matchmaking` (
  `email` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `profession` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `sf1` varchar(255) DEFAULT NULL,
  `sf2` varchar(255) DEFAULT NULL,
  `sf3` varchar(255) DEFAULT NULL,
  `tag1` varchar(255) DEFAULT NULL,
  `tag2` varchar(255) DEFAULT NULL,
  `tag3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchmaking`
--

LOCK TABLES `matchmaking` WRITE;
/*!40000 ALTER TABLE `matchmaking` DISABLE KEYS */;
INSERT INTO `matchmaking` VALUES ('everituwebdevelopment@gmail.com','personal','1650297069207_inwork_1631205255821.jpeg','1648052099572_inwork_7698x4330-Night-Mountains-Summer-Illustration-8K-Wallpaper_-HD-Artist-4K-Wallpaper_-Image_-Photo-and-scaled.jpg','Android Developer','Ukraine, KievV','Everit Molero','9',NULL,NULL,NULL,'Mongodb','Javascript','Nodejs');
/*!40000 ALTER TABLE `matchmaking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mss`
--

DROP TABLE IF EXISTS `mss`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mss` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idgroup` int(11) NOT NULL,
  `sender` varchar(255) NOT NULL,
  `mss` varchar(999) NOT NULL,
  `date` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mss`
--

LOCK TABLES `mss` WRITE;
/*!40000 ALTER TABLE `mss` DISABLE KEYS */;
INSERT INTO `mss` VALUES (118,86,'microsoft@outlook.es','Hola Everit,<br/>Un gusto de parte de microsoft conectar contigo.','2022-04-18 10:29:5'),(119,86,'everituwebdevelopment@gmail.com','hola','2022-04-18 10:31:51'),(120,86,'everituwebdevelopment@gmail.com','vaale','2022-04-18 10:35:38'),(121,86,'everituwebdevelopment@gmail.com','vaale','2022-04-18 10:37:53'),(122,86,'everituwebdevelopment@gmail.com','??','2022-04-18 10:38:8'),(123,86,'everituwebdevelopment@gmail.com','sdasd','2022-04-18 10:40:31'),(124,86,'everituwebdevelopment@gmail.com','dasdsd','2022-04-18 10:44:23'),(125,86,'everituwebdevelopment@gmail.com','sdasd','2022-04-18 10:44:39'),(126,86,'everituwebdevelopment@gmail.com','xd','2022-04-18 10:59:27'),(127,86,'everituwebdevelopment@gmail.com','asdasd','2022-04-18 11:2:20'),(128,86,'everituwebdevelopment@gmail.com','sdasd','2022-04-18 11:2:29'),(129,86,'everituwebdevelopment@gmail.com','asdasd','2022-04-18 11:6:50'),(130,86,'microsoft@outlook.es','sdasds','2022-04-18 11:6:52'),(131,86,'everituwebdevelopment@gmail.com','sdads','2022-04-18 11:6:54'),(132,86,'microsoft@outlook.es','asdsd','2022-04-18 11:6:55'),(133,86,'microsoft@outlook.es','asdasd','2022-04-18 11:7:1'),(134,86,'everituwebdevelopment@gmail.com','asdasdfsdfas','2022-04-18 11:7:2'),(135,86,'everituwebdevelopment@gmail.com','xd','2022-04-18 11:8:14'),(136,86,'everituwebdevelopment@gmail.com','aaa','2022-04-18 11:8:20'),(137,86,'everituwebdevelopment@gmail.com','sdas','2022-04-18 11:9:6'),(138,86,'everituwebdevelopment@gmail.com','sdasd','2022-04-18 11:11:22'),(139,86,'microsoft@outlook.es','hey','2022-04-18 11:16:8'),(140,86,'everituwebdevelopment@gmail.com','dasdasda','2022-04-18 12:35:52'),(141,86,'everituwebdevelopment@gmail.com','sdasds','2022-04-18 12:36:56');
/*!40000 ALTER TABLE `mss` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `fname` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `notftitle` varchar(255) NOT NULL,
  `fr0m` varchar(255) NOT NULL,
  `t0` varchar(255) NOT NULL,
  `checked` tinyint(1) NOT NULL DEFAULT 0,
  `date` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=225 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES ('Jhon ','personal','1649513396659_inwork_1644908903825.jpeg','Jhon  has accepted your match request, now you can chat!','jhonlledo@gmail.com','digio@gmail.com',1,'2022-04-15 23:9:49',148),('AbsOlute','business','1649449770732_inwork_17b913f67b8b5cabd274604e7b610b65.jpg','AbsOlute has accepted your match request, now you can chat! (you may need restarting server)','microsoft@outlook.es','digio@gmail.com',1,'2022-04-15 23:31:2',163),('DigIo','business','1649513206543_inwork_logodigio-1024x1024.png','DigIo has accepted your match request, now you can chat! (you may need restarting server)','digio@gmail.com','everituwebdevelopment@gmail.com',1,'2022-04-16 12:0:47',187),('AbsOlute','business','1649449770732_inwork_17b913f67b8b5cabd274604e7b610b65.jpg','AbsOlute has accepted your match request, now you can chat!','microsoft@outlook.es','jhonlledo@gmail.com',0,'2022-04-17 20:21:31',211),('Everit Molero','personal','1650297069207_inwork_1631205255821.jpeg','Everit Molero has accepted your match request, now you can chat!','everituwebdevelopment@gmail.com','jhonlledo@gmail.com',0,'2022-04-17 20:21:48',213),('Everit Molero','personal','1650297069207_inwork_1631205255821.jpeg','Everit Molero has accepted your match request, now you can chat!','everituwebdevelopment@gmail.com','microsoft@outlook.es',1,'2022-04-18 10:22:48',216),('Everit Molero','personal','1650297069207_inwork_1631205255821.jpeg','Everit Molero has modify your stars.','everituwebdevelopment@gmail.com','microsoft@outlook.es',1,'2022-04-18 11:49:24',217),('Everit Molero','personal','1650297069207_inwork_1631205255821.jpeg','Everit Molero has modify your stars.','everituwebdevelopment@gmail.com','microsoft@outlook.es',0,'2022-04-18 14:41:0',218),('Everit Molero','personal','1650297069207_inwork_1631205255821.jpeg','Everit Molero has modify your stars.','everituwebdevelopment@gmail.com','microsoft@outlook.es',0,'2022-04-18 14:41:2',219),('Everit Molero','personal','1650297069207_inwork_1631205255821.jpeg','Everit Molero has modify your stars.','everituwebdevelopment@gmail.com','microsoft@outlook.es',0,'2022-04-18 14:41:3',220),('Everit Molero','personal','1650297069207_inwork_1631205255821.jpeg','Everit Molero has modify your stars.','everituwebdevelopment@gmail.com','microsoft@outlook.es',0,'2022-04-18 14:41:5',221),('Everit Molero','personal','1650297069207_inwork_1631205255821.jpeg','Everit Molero has modify your stars.','everituwebdevelopment@gmail.com','microsoft@outlook.es',0,'2022-04-18 14:41:6',222),('Everit Molero','personal','1650297069207_inwork_1631205255821.jpeg','Everit Molero has modify your stars.','everituwebdevelopment@gmail.com','microsoft@outlook.es',0,'2022-04-18 14:41:8',223),('Everit Molero','personal','1650297069207_inwork_1631205255821.jpeg','Everit Molero has modify your stars.','everituwebdevelopment@gmail.com','microsoft@outlook.es',0,'2022-04-18 14:41:10',224);
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pa_search_trends`
--

DROP TABLE IF EXISTS `pa_search_trends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pa_search_trends` (
  `id` varchar(255) NOT NULL,
  `times` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pa_search_trends`
--

LOCK TABLES `pa_search_trends` WRITE;
/*!40000 ALTER TABLE `pa_search_trends` DISABLE KEYS */;
INSERT INTO `pa_search_trends` VALUES ('everituwebdevelopment@gmail.com',169),('asd@gmail.com',3),('asdas2@gmail.com',2),('qwdas@gmail.com',3),('jhonlledo@gmail.com',12),('vander@gmail.com',4),('gdgs@gmail.com',4);
/*!40000 ALTER TABLE `pa_search_trends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_accounts`
--

DROP TABLE IF EXISTS `personal_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_accounts` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_pic` varchar(255) DEFAULT 'default-profile-pic.png',
  `profile_banner` varchar(255) DEFAULT 'default-profile-banner.png',
  `profession` varchar(999) NOT NULL DEFAULT 'Web Developer',
  `stars` int(11) DEFAULT 0,
  `biography` varchar(9999) DEFAULT 'Hello, i am using inWork!',
  `location` varchar(255) NOT NULL DEFAULT 'New Zealand, Auckland',
  `type` varchar(255) DEFAULT 'personal',
  PRIMARY KEY (`email`),
  UNIQUE KEY `ID` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_accounts`
--

LOCK TABLES `personal_accounts` WRITE;
/*!40000 ALTER TABLE `personal_accounts` DISABLE KEYS */;
INSERT INTO `personal_accounts` VALUES (1,'wfqsfas','dqwfasd','asd@gmail.com','$2a$15$w.Gv6vzE1.lSfxajciT5I.sS2ZAaADNP1qYQ1u/VZfB2EgC5UM9uu','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(2,'gasdfqw','gasda','asda@gmail.com','$2a$15$L7148E1OpsEHPeXTaNiHOeF6tWqhBjlNnoEXOoEKa4DGM9TR1Wbrq','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(16,'asdwasd','adasda','asdas2@gmail.com','$2a$15$FaM2gkGuzUjFc7tdojVBCuQKeaweVVzO7LXtx8qz0PhW3xB8WT5iK','default-profile-pic.png','default-profile-banner.png','Web Developer',1,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(17,'Erevit','Molero','asdas3@gmail.com','$2a$15$VDo/Vo.r/F/r98olK98NSuWj/LNSJ2CQCXoZuV9ybjBiSfBEMKehi','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using a;aanca<br/>cas;s','New Zealand, Auckland','personal'),(3,'xdasdasd','asdasd','asdasmd@gmail.com','$2a$15$ieaFxMPMZGqkNwAJ80sEyOPAx.1zIKSiFruObGfLE2Q5jm0Bu8lAu','default-profile-pic.png','default-profile-banner.png','React.Js Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(4,'qwfasd','wfasd','asf@gmail.com','$2a$15$0MmYe6KKgnaNcYRMdFJ1aOqeuFYDjN1IP7v.4VMRUrax0SDKJ7MQy','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(5,'fgasfqwd','afadasd','awgas@gmail.com','$2a$15$Y8eJwPIK2MFCuaeKRrfqAOiXX3dynvpsLrTCFi1RjwqE.uGjfJDNG','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(6,'KGIWO','gqwdsa','dfaqsfas@gmail.com','$2a$15$4gujnKZNbrxjbIWOkECxfehb7FgIdGShdifWtbKi3yDNpBdEzBqzW','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(7,'dsadwdas','qwdasdasd','eskdas2@gmail.com','$2a$15$XB2XH1jjNyWx4TlJU60dk.fXnDdcDzoihbx0IBIMWL5rfympxYFui','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(8,'asqewgdasg','qegwhqefq','eskdas3@gmail.com','$2a$15$Lja9PcG6dKpMhHEGP6LC8e8/013RMFJ4lCp7Zeuk9GIrsac9SSm3O','default-profile-pic.png','default-profile-banner.png','Ios Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(9,'Everit','Molero','everituwebdevelopment@gmail.com','$2a$15$U6Ph3eVaSIdyVOmBLzodDOm/Mj6rFS8Rih06mKlQ9tsi8wnfFu8wq','1650297069207_inwork_1631205255821.jpeg','1648052099572_inwork_7698x4330-Night-Mountains-Summer-Illustration-8K-Wallpaper_-HD-Artist-4K-Wallpaper_-Image_-Photo-and-scaled.jpg','Android Developer',10,'pomquesito pomequesito.<br/>es un pomquesito.<br/>muy divino','Ukraine, KievV','personal'),(10,'gasfa','gasdqwd','fgjgj@gmila.com','$2a$15$5xVQRKn.CrA2d0Xemwz.fux9AIdTL1XsuhxyHeq05eMhyEQbKYsDW','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(11,'qwfgfas','fqdwfasf1w','gdgs@gmail.com','$2a$15$Z6ey8a2vvr4rP5BnnhaISOBq9X8AkNeqzo0NVWjNgKcA287xoAOkO','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(18,'Jhon','','jhonlledo@gmail.com','$2a$15$dZgfSyVIPb/caWXJCpShpe1P22TBe6VoL3vEYsfyurNSJoTSdPvw.','1649513396659_inwork_1644908903825.jpeg','default-profile-banner.png','Web Developer',2,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(12,'fqwfas','fqefqdsd','qwdas@gmail.com','$2a$15$PAGFBomYKq7a4EFrM/zBNOkZob49AqhqSXKAwBSHo3D0lObHn.USG','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(13,'Reiner','Schazniwer','reinersw@gmail.com','$2a$15$q09jJCysDVhNO3jG8ooDdOOqdHUF895UPRK4lhdylKNzkPHi4Ps0e','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(14,'gsfa@gmail.com','asdasdasd','sadasdasd@gmail.com','$2a$15$SzWUr2hC6f1E1Hrjxb2MM.60hXqd1a.ivTG3VVXP4wIG52RSwq59y','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(19,'Akshan','vander','vander@gmail.com','$2a$15$rC3Tagdx.V1OH3QUvAONieXTwoDxVrhccHZSSzsPjyKyJXx8DVvVS','default-profile-pic.png','default-profile-banner.png','Web Developer',2,'Hello, i am using inWork!','New Zealand, Auckland','personal'),(15,'wefafweg','whehw','wdqwfas@gmail.com','$2a$15$FXw0ic2DUAdsJ8PKN72BUuT6xaMuAyXgs9Q1eBavWgXfl42ilaBL.','default-profile-pic.png','default-profile-banner.png','Web Developer',0,'Hello, i am using inWork!','New Zealand, Auckland','personal');
/*!40000 ALTER TABLE `personal_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requestmatch`
--

DROP TABLE IF EXISTS `requestmatch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `requestmatch` (
  `idrequestgroup` int(11) NOT NULL AUTO_INCREMENT,
  `srequest` varchar(255) NOT NULL,
  `grequest` varchar(255) NOT NULL,
  PRIMARY KEY (`idrequestgroup`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requestmatch`
--

LOCK TABLES `requestmatch` WRITE;
/*!40000 ALTER TABLE `requestmatch` DISABLE KEYS */;
/*!40000 ALTER TABLE `requestmatch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sgstars`
--

DROP TABLE IF EXISTS `sgstars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sgstars` (
  `sStar` varchar(255) NOT NULL,
  `gStar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sgstars`
--

LOCK TABLES `sgstars` WRITE;
/*!40000 ALTER TABLE `sgstars` DISABLE KEYS */;
INSERT INTO `sgstars` VALUES ('everituwebdevelopment@gmail.com','asdas2@gmail.com'),('asdas3@gmail.com','microsoft@outlook.es'),('asdas2@gmail.com','microsoft@outlook.es'),('everituwebdevelopment@gmail.com','business1@gmail.com'),('digio@gmail.com','jhonlledo@gmail.com'),('digio@gmail.com','vander@gmail.com'),('microsoft@outlook.es','vander@gmail.com'),('vander@gmail.com','microsoft@outlook.es'),('digio@gmail.com','everituwebdevelopment@gmail.com'),('jhonlledo@gmail.com','everituwebdevelopment@gmail.com'),('digio@gmail.com','microsoft@outlook.es'),('everituwebdevelopment@gmail.com','jhonlledo@gmail.com'),('microsoft@outlook.es','everituwebdevelopment@gmail.com'),('everituwebdevelopment@gmail.com','microsoft@outlook.es');
/*!40000 ALTER TABLE `sgstars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skilltags`
--

DROP TABLE IF EXISTS `skilltags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skilltags` (
  `email` varchar(999) NOT NULL,
  `tag` varchar(999) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skilltags`
--

LOCK TABLES `skilltags` WRITE;
/*!40000 ALTER TABLE `skilltags` DISABLE KEYS */;
INSERT INTO `skilltags` VALUES ('microsoft@outlook.es','Abstract',76,'business'),('microsoft@outlook.es','Webapps',77,'business'),('microsoft@outlook.es','Androidapps',78,'business'),('microsoft@outlook.es','Professionalbusiness',79,'business'),('everituwebdevelopment@gmail.com','Mongodb',81,'personal'),('everituwebdevelopment@gmail.com','Javascript',82,'personal'),('everituwebdevelopment@gmail.com','Nodejs',83,'personal'),('everituwebdevelopment@gmail.com','Github',84,'personal'),('assistant.evercode@gmail.com','Inwork',85,'business'),('assistant.evercode@gmail.com','Evercode',86,'business'),('everituwebdevelopment@gmail.com','Asdsd',87,'personal'),('everituwebdevelopment@gmail.com','Ok',88,'personal'),('everituwebdevelopment@gmail.com','A',89,'personal'),('everituwebdevelopment@gmail.com','A',90,'personal'),('everituwebdevelopment@gmail.com','Asdsdasd',91,'personal'),('everituwebdevelopment@gmail.com','Sdasd',92,'personal'),('everituwebdevelopment@gmail.com','Sdas',93,'personal'),('everituwebdevelopment@gmail.com','Qasd',94,'personal');
/*!40000 ALTER TABLE `skilltags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-19  9:31:21
