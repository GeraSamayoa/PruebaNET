CREATE DATABASE  IF NOT EXISTS `be5a0lkqtqj1evoi4wyh` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `be5a0lkqtqj1evoi4wyh`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: be5a0lkqtqj1evoi4wyh-mysql.services.clever-cloud.com    Database: be5a0lkqtqj1evoi4wyh
-- ------------------------------------------------------
-- Server version	8.0.15-5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'f41d366d-91e5-11e9-8525-cecd028ee826:1-138309441';

--
-- Table structure for table `Alumnos`
--

DROP TABLE IF EXISTS `Alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Alumnos` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `NombrePadre` varchar(100) NOT NULL,
  `NombreMadre` varchar(100) NOT NULL,
  `Grado` varchar(25) NOT NULL,
  `Seccion` char(1) NOT NULL,
  `FechaIngreso` date NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Alumnos`
--

LOCK TABLES `Alumnos` WRITE;
/*!40000 ALTER TABLE `Alumnos` DISABLE KEYS */;
INSERT INTO `Alumnos` VALUES (1,'Juan Garcia','2002-03-03','Miguel Garcia','Maria Martinez','Segundo','A','2023-03-01'),(2,'Ana Lopez','1998-07-03','Javier Lopez','Carmen Rodriguez','Tercero','B','2020-09-02'),(3,'Carlos Martinez','2003-09-02','Pedro Martinez','Laura Sanchez','Primero','A','2024-02-01'),(4,'Maria Rodriguez','1993-09-03','Antonio Rodriguez','Isabel Gomez','Sexto','C','2014-02-02'),(5,'Laura Perez','1996-03-09','Manuel Perez','Rosa Fernandez','Cuarto','B','2020-11-03'),(6,'David Fernandez','2004-09-02','Luis Fernandez','Patricia Jimenez','Primero','A','2024-01-01'),(7,'Elena Gomez','1999-03-08','Juan Gomez','Ana Ruiz','Cuarto','A','2021-03-03'),(8,'Sergio Ruiz','2000-09-30','Francisco Ruiz','Elena Martinez','Quinto','A','2017-04-01'),(9,'Marta Sanchez','2001-12-31','Jose Sanchez','Maria Perez','Tercero','A','2022-02-02'),(10,'Daniel Jimenez','2000-06-03','Alberto Jimenez','Nuria Lopez','Tercero','B','2020-04-02'),(11,'Isabel Ramos','2005-08-03','Andres Ramos','Marta Garcia','Primero','B','2024-04-02'),(12,'Pablo Ramirez','2007-03-09','Juan Ramirez','Laura Perez','Primero','B','2024-02-01'),(13,'Sonia Diaz','2006-08-03','Rafael Diaz','Camen Moreno','Segundo','A','2022-02-03'),(14,'Raul Morena','2002-09-18','Ricardo Moreno','Sonia Sanchez','Sexto','A','2012-02-01');
/*!40000 ALTER TABLE `Alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `__EFMigrationsHistory`
--

DROP TABLE IF EXISTS `__EFMigrationsHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `__EFMigrationsHistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL,
  PRIMARY KEY (`MigrationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `__EFMigrationsHistory`
--

LOCK TABLES `__EFMigrationsHistory` WRITE;
/*!40000 ALTER TABLE `__EFMigrationsHistory` DISABLE KEYS */;
INSERT INTO `__EFMigrationsHistory` VALUES ('20240316061938_Initial','8.0.3');
/*!40000 ALTER TABLE `__EFMigrationsHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'be5a0lkqtqj1evoi4wyh'
--

--
-- Dumping routines for database 'be5a0lkqtqj1evoi4wyh'
--
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-17 11:46:39
