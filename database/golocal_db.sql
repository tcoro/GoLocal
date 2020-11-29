-- MySQL dump 10.17  Distrib 10.3.25-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: golocal_db
-- ------------------------------------------------------
-- Server version	10.3.25-MariaDB-0ubuntu0.20.04.1

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
  `stamp_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `customer_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_FK` (`customer_id`),
  KEY `cart_FK_1` (`item_id`),
  CONSTRAINT `cart_FK` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `cart_FK_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `stamp_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `farmer_FK` (`user_id`) USING BTREE,
  KEY `farmer_FK_1` (`location_id`) USING BTREE,
  CONSTRAINT `customer_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `customer_FK_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `stamp_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `farmer_FK` (`user_id`),
  KEY `farmer_FK_1` (`location_id`),
  CONSTRAINT `farmer_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `farmer_FK_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmer`
--

LOCK TABLES `farmer` WRITE;
/*!40000 ALTER TABLE `farmer` DISABLE KEYS */;
INSERT INTO `farmer` VALUES (1,'2020-11-28 13:16:20','2020-11-28 13:16:20',8,1);
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
  `stamp_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `is_vegan` tinyint(1) DEFAULT NULL,
  `is_vegetarian` tinyint(1) DEFAULT NULL,
  `is_bio` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_FK` (`type_id`),
  CONSTRAINT `item_FK` FOREIGN KEY (`type_id`) REFERENCES `item_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'2020-11-28 13:01:34','2020-11-28 13:01:34','Rumpsteak',4,10,0,0,1);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_type`
--

DROP TABLE IF EXISTS `item_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stamp_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_type`
--

LOCK TABLES `item_type` WRITE;
/*!40000 ALTER TABLE `item_type` DISABLE KEYS */;
INSERT INTO `item_type` VALUES (4,'2020-11-28 12:35:21','2020-11-28 12:35:21','Meat'),(5,'2020-11-28 12:35:32','2020-11-28 12:35:32','Fish'),(6,'2020-11-28 12:35:38','2020-11-28 12:35:38','Milk'),(7,'2020-11-28 12:35:50','2020-11-28 12:35:50','Vegetables');
/*!40000 ALTER TABLE `item_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stamp_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ZIP` int(5) NOT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `housenr` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'2020-11-28 13:15:37','2020-11-28 13:15:37',24105,'Kiel','Forstweg','79A');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_type`
--

DROP TABLE IF EXISTS `purchase_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stamp_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_type`
--

LOCK TABLES `purchase_type` WRITE;
/*!40000 ALTER TABLE `purchase_type` DISABLE KEYS */;
INSERT INTO `purchase_type` VALUES (6,'2020-11-28 12:41:07','2020-11-28 12:41:07','pickup'),(7,'2020-11-28 12:41:07','2020-11-28 12:41:07','delivery');
/*!40000 ALTER TABLE `purchase_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secret`
--

DROP TABLE IF EXISTS `secret`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `secret` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stamp_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `hash` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reset_pend` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secret`
--

LOCK TABLES `secret` WRITE;
/*!40000 ALTER TABLE `secret` DISABLE KEYS */;
INSERT INTO `secret` VALUES (1,'2020-11-28 12:56:54','2020-11-28 13:08:24','$2y$12$K/9JLFEyj2L5pjnfHDCLYuqP.xrg0nCvPvFPbYG7oHhKAK8aYF9dG',0),(2,'2020-11-28 13:08:24','2020-11-28 13:08:24','$2y$12$K/9JLFEyj2L5pjnfHDCLYuqP.xrg0nCvPvFPbYG7oHhKAK8aYF9dG',0);
/*!40000 ALTER TABLE `secret` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supply`
--

DROP TABLE IF EXISTS `supply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `supply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stamp_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `farmer_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `purchase_type_id` int(11) NOT NULL,
  `expiry_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `supply_FK` (`purchase_type_id`),
  KEY `supply_FK_1` (`item_id`),
  KEY `supply_FK_2` (`farmer_id`),
  CONSTRAINT `supply_FK` FOREIGN KEY (`purchase_type_id`) REFERENCES `purchase_type` (`id`),
  CONSTRAINT `supply_FK_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`),
  CONSTRAINT `supply_FK_2` FOREIGN KEY (`farmer_id`) REFERENCES `farmer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supply`
--

LOCK TABLES `supply` WRITE;
/*!40000 ALTER TABLE `supply` DISABLE KEYS */;
INSERT INTO `supply` VALUES (1,'2020-11-28 13:22:12','2020-11-28 13:22:12',1,1,6,'2020-11-28');
/*!40000 ALTER TABLE `supply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL,
  `secret_id` int(11) NOT NULL,
  `stamp_created` datetime NOT NULL,
  `stamp_updated` datetime NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (7,1,1,'0000-00-00 00:00:00','0000-00-00 00:00:00','','',''),(8,2,2,'0000-00-00 00:00:00','0000-00-00 00:00:00','','','');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stamp_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` VALUES (1,'2020-11-28 12:41:50','2020-11-28 12:41:50','admin'),(2,'2020-11-28 12:41:50','2020-11-28 12:41:50','farmer'),(3,'2020-11-28 12:41:50','2020-11-28 12:41:50','customer');
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wishlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stamp_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `customer_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `wishlist_FK` (`item_id`),
  KEY `wishlist_FK_1` (`customer_id`),
  CONSTRAINT `wishlist_FK` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`),
  CONSTRAINT `wishlist_FK_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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

-- Dump completed on 2020-11-29 11:03:02
