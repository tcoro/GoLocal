-- MySQL dump 10.17  Distrib 10.3.25-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: waffel-eisen.net    Database: golocal_db
-- ------------------------------------------------------
-- Server version	10.3.23-MariaDB-0+deb10u1

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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stampCreated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `stampUpdated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `customerId` int(11) NOT NULL,
  `itemId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_eac3d1f269ffeb0999fbde0185` (`customerId`),
  CONSTRAINT `FK_eac3d1f269ffeb0999fbde0185b` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stampCreated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `stampUpdated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `userId` int(11) NOT NULL,
  `locationId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_3f62b42ed23958b120c235f74d` (`userId`),
  UNIQUE KEY `REL_425ad28170f12df522ea437815` (`locationId`),
  CONSTRAINT `FK_3f62b42ed23958b120c235f74df` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_425ad28170f12df522ea4378158` FOREIGN KEY (`locationId`) REFERENCES `location` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `farmer`
--

DROP TABLE IF EXISTS `farmer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `farmer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stampCreated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `stampUpdated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `userId` int(11) NOT NULL,
  `locationId` int(11) NOT NULL,
  `supplyId` int(11) DEFAULT NULL,
  `farmerLicence` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_28f886de43e41be7d29b08bd9d` (`userId`),
  UNIQUE KEY `REL_28ae57c780f3965dc5fb95abf5` (`locationId`),
  CONSTRAINT `FK_28ae57c780f3965dc5fb95abf57` FOREIGN KEY (`locationId`) REFERENCES `location` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_28f886de43e41be7d29b08bd9d7` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmer`
--

LOCK TABLES `farmer` WRITE;
/*!40000 ALTER TABLE `farmer` DISABLE KEYS */;
INSERT INTO `farmer` VALUES (5,'2020-11-29 22:10:11.262075','2020-11-29 22:10:11.262075',2,1,0,123456),(6,'2020-11-29 22:10:45.439272','2020-11-29 22:10:45.439272',3,2,0,645321),(7,'2020-11-29 22:10:45.468920','2020-11-29 22:10:45.468920',4,3,0,453434);
/*!40000 ALTER TABLE `farmer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stampCreated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `stampUpdated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `itemtypeId` int(11) NOT NULL,
  `wishlistId` int(11) DEFAULT NULL,
  `cartId` int(11) DEFAULT NULL,
  `price` float NOT NULL,
  `name` varchar(255) NOT NULL,
  `farmerId` int(11) NOT NULL,
  `purchasetypeId` int(11) NOT NULL,
  `isVegan` tinyint(4) DEFAULT NULL,
  `isBio` tinyint(4) DEFAULT NULL,
  `isVegetarian` tinyint(4) DEFAULT NULL,
  `expiryDate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_199934dd87578010b5d8ad9cee4` (`wishlistId`),
  KEY `FK_5937c09766ad9957408c84a29d1` (`cartId`),
  KEY `FK_6db7075478e9da28bc2b2afad85` (`itemtypeId`),
  KEY `FK_a75aad2d2c0ab0e32d371ee13fc` (`farmerId`),
  KEY `FK_adb179e42df1f882e3846e12d80` (`purchasetypeId`),
  CONSTRAINT `FK_199934dd87578010b5d8ad9cee4` FOREIGN KEY (`wishlistId`) REFERENCES `wishlist` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_5937c09766ad9957408c84a29d1` FOREIGN KEY (`cartId`) REFERENCES `cart` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_6db7075478e9da28bc2b2afad85` FOREIGN KEY (`itemtypeId`) REFERENCES `itemtype` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_a75aad2d2c0ab0e32d371ee13fc` FOREIGN KEY (`farmerId`) REFERENCES `farmer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_adb179e42df1f882e3846e12d80` FOREIGN KEY (`purchasetypeId`) REFERENCES `purchasetype` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (4,'2020-11-29 22:29:08.362226','2020-11-29 22:29:08.362226',1,NULL,NULL,7.5,'Steak',5,1,NULL,NULL,NULL,'2020-12-07 00:00:00'),(5,'2020-11-29 22:30:13.821793','2020-11-29 22:30:13.821793',2,NULL,NULL,1.36,'Joghurt',5,2,NULL,NULL,1,'2020-12-11 00:00:00'),(6,'2020-11-29 22:30:49.604769','2020-11-29 22:30:49.604769',1,NULL,NULL,2.5,'Chickenwings',6,1,NULL,NULL,NULL,'2020-12-11 00:00:00'),(7,'2020-11-29 22:32:30.404369','2020-11-29 22:32:30.404369',3,NULL,NULL,2.3,'Eggs',6,2,NULL,1,NULL,'2020-12-15 00:00:00'),(8,'2020-11-29 22:32:30.445503','2020-11-29 22:32:30.445503',4,NULL,NULL,2,'Tomatoes',7,1,1,NULL,1,'2020-12-15 00:00:00'),(9,'2020-11-29 22:32:30.471781','2020-11-29 22:32:30.471781',4,NULL,NULL,2.58,'Potatoes',7,1,1,NULL,1,'2020-12-15 00:00:00');
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itemtype`
--

DROP TABLE IF EXISTS `itemtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `itemtype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stampCreated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `stampUpdated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itemtype`
--

LOCK TABLES `itemtype` WRITE;
/*!40000 ALTER TABLE `itemtype` DISABLE KEYS */;
INSERT INTO `itemtype` VALUES (1,'2020-11-29 21:53:37.927469','2020-11-29 21:53:37.927469','meat'),(2,'2020-11-29 21:53:37.957219','2020-11-29 21:53:37.957219','milk'),(3,'2020-11-29 21:53:37.997754','2020-11-29 21:53:37.997754','eggs'),(4,'2020-11-29 21:53:38.025159','2020-11-29 21:53:38.025159','vegetables');
/*!40000 ALTER TABLE `itemtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stampCreated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `stampUpdated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `zip` int(11) NOT NULL,
  `city` varchar(100) NOT NULL,
  `street` varchar(150) NOT NULL,
  `housenr` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'2020-11-29 21:49:25.863777','2020-11-29 21:49:25.863777',24969,'Kiel','Musterweg','73'),(2,'2020-11-29 21:50:04.090492','2020-11-29 21:50:04.090492',30696,'Kaff','Am Erdloch','8'),(3,'2020-11-29 21:50:29.883182','2020-11-29 21:50:29.883182',96874,'Horst','Actionstraße','5');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchasetype`
--

DROP TABLE IF EXISTS `purchasetype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchasetype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stampCreated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `stampUpdated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchasetype`
--

LOCK TABLES `purchasetype` WRITE;
/*!40000 ALTER TABLE `purchasetype` DISABLE KEYS */;
INSERT INTO `purchasetype` VALUES (1,'2020-11-29 21:51:41.337779','2020-11-29 21:51:41.337779','pickup'),(2,'2020-11-29 21:51:41.402117','2020-11-29 21:51:41.402117','delivery');
/*!40000 ALTER TABLE `purchasetype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secret`
--

DROP TABLE IF EXISTS `secret`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `secret` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stampCreated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `stampUpdated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `hash` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secret`
--

LOCK TABLES `secret` WRITE;
/*!40000 ALTER TABLE `secret` DISABLE KEYS */;
INSERT INTO `secret` VALUES (1,'2020-11-29 21:44:59.258128','2020-11-29 21:44:59.258128','Hallo'),(2,'2020-11-29 21:44:59.289859','2020-11-29 21:44:59.289859','Welt'),(3,'2020-11-29 21:44:59.318070','2020-11-29 21:44:59.318070','Bla'),(4,'2020-11-29 21:44:59.344093','2020-11-29 21:44:59.344093','Ahoi!');
/*!40000 ALTER TABLE `secret` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stampCreated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `stampUpdated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `usertypeId` int(11) NOT NULL,
  `secretId` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_d1459002673c3d4b23638260c2` (`secretId`),
  KEY `FK_1f2145f713be80d37823a93d476` (`usertypeId`),
  CONSTRAINT `FK_1f2145f713be80d37823a93d476` FOREIGN KEY (`usertypeId`) REFERENCES `usertype` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_d1459002673c3d4b23638260c2d` FOREIGN KEY (`secretId`) REFERENCES `secret` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'2020-11-29 21:46:45.354300','2020-11-29 21:46:45.354300',1,1,'greinholdsen@bla.com','Gernhart','Reinholdssen'),(3,'2020-11-29 21:47:38.107209','2020-11-29 21:47:38.107209',1,2,'lball@aol.com','Lassma','Ballernsson'),(4,'2020-11-29 21:47:54.995618','2020-11-29 21:47:54.995618',1,3,'lbluten@mail.de','Lasse','Bluten');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertype`
--

DROP TABLE IF EXISTS `usertype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usertype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stampCreated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `stampUpdated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `usertype` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertype`
--

LOCK TABLES `usertype` WRITE;
/*!40000 ALTER TABLE `usertype` DISABLE KEYS */;
INSERT INTO `usertype` VALUES (1,'2020-11-29 21:46:40.357757','2020-11-29 21:46:40.357757','farmer'),(2,'2020-11-29 21:46:40.391119','2020-11-29 21:46:40.391119','customer'),(3,'2020-11-29 21:46:40.654641','2020-11-29 21:46:40.654641','admin');
/*!40000 ALTER TABLE `usertype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wishlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stampCreated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `stampUpdated` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `customerId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_e0cb3d07cc2e5a632af0fade79` (`customerId`),
  CONSTRAINT `FK_e0cb3d07cc2e5a632af0fade798` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-29 22:57:21
