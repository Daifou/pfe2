-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 10, 2023 at 08:52 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pfe_immobile`
--

-- --------------------------------------------------------

--
-- Table structure for table `appartement`
--

DROP TABLE IF EXISTS `appartement`;
CREATE TABLE IF NOT EXISTS `appartement` (
  `appartement_id` varchar(255) NOT NULL,
  `appartement_name` varchar(255) NOT NULL,
  `etage_id` varchar(255) NOT NULL,
  `purchased_by` varchar(255) DEFAULT NULL,
  `prix_total` int(11) NOT NULL,
  `prix_reste` int(11) NOT NULL,
  `etape_index` int(11) NOT NULL,
  `surface` int(11) NOT NULL,
  `lot` varchar(55) NOT NULL,
  `chambre` varchar(10) NOT NULL,
  PRIMARY KEY (`appartement_id`),
  KEY `etage_id` (`etage_id`),
  KEY `purchased_by` (`purchased_by`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appartement`
--

INSERT INTO `appartement` (`appartement_id`, `appartement_name`, `etage_id`, `purchased_by`, `prix_total`, `prix_reste`, `etape_index`, `surface`, `lot`, `chambre`) VALUES
('43903b06-e015-4235-86be-533501f4e8d0', 'LPP - Bloc 1 - Etage 2 - Appartement 2', '958a0c5e-44c4-4a34-b20d-4e189b4d4198', NULL, 0, 0, 0, 0, '0', '0'),
('63bb31d3-e05d-48f0-8cbf-ac89a148b7e6', 'LPP - Bloc 1 - Etage 2 - Appartement 3', '958a0c5e-44c4-4a34-b20d-4e189b4d4198', NULL, 0, 0, 0, 0, '0', '0'),
('87d85f81-f51c-4659-a1ef-9e54639f1673', 'LPP - Bloc 1 - Etage 3 - Appartement 1', 'c4fbaee6-37e6-4973-860a-090746582207', NULL, 0, 0, 0, 0, '0', '0'),
('e5fb3783-b7bd-48d8-b9eb-00e67dcafb72', 'LPP - Bloc 1 - Etage 3 - Appartement 2', 'c4fbaee6-37e6-4973-860a-090746582207', NULL, 0, 0, 0, 0, '0', '0'),
('10bdc37b-0cfe-4b32-8265-9f38cf779d7c', 'LPP - Bloc 1 - Etage 3 - Appartement 3', 'c4fbaee6-37e6-4973-860a-090746582207', NULL, 0, 0, 0, 0, '0', '0'),
('faaed662-711e-4aaa-9430-2954d5467528', 'LPP - Bloc 2 - Etage 1 - Appartement 1', '6940cbdd-daef-4f2a-963e-7d7d857b2f96', NULL, 0, 0, 0, 0, '0', '0'),
('cf07d982-03a5-4579-a80d-bf0fbba232a1', 'LPP - Bloc 2 - Etage 1 - Appartement 2', '6940cbdd-daef-4f2a-963e-7d7d857b2f96', NULL, 0, 0, 0, 0, '0', '0'),
('e7dc6e9b-ad77-43c4-9df7-d6a72aba33aa', 'LPP - Bloc 2 - Etage 1 - Appartement 3', '6940cbdd-daef-4f2a-963e-7d7d857b2f96', NULL, 0, 0, 0, 0, '0', '0'),
('a96c77fc-b5de-47bd-9a06-22e649ab5de3', 'LPP - Bloc 2 - Etage 2 - Appartement 1', 'dafb6dc7-0cf3-4258-b317-0188a4b3d0d9', NULL, 0, 0, 0, 0, '0', '0'),
('0083e73f-e29c-48e9-b246-a8fb7be83012', 'LPP - Bloc 2 - Etage 2 - Appartement 2', 'dafb6dc7-0cf3-4258-b317-0188a4b3d0d9', NULL, 0, 0, 0, 0, '0', '0'),
('38627041-24f4-4abd-b69c-a9ade9b9308b', 'LPP - Bloc 2 - Etage 2 - Appartement 3', 'dafb6dc7-0cf3-4258-b317-0188a4b3d0d9', NULL, 0, 0, 0, 0, '0', '0'),
('bc759234-fe4e-4ff7-8797-97e88b6e68be', 'LPP - Bloc 2 - Etage 3 - Appartement 1', '4eacb6cc-c872-4407-9b81-cdab5a356f38', NULL, 0, 0, 0, 0, '0', '0'),
('cf5da3db-a626-4372-8460-bf92347c7b32', 'LPP - Bloc 2 - Etage 3 - Appartement 2', '4eacb6cc-c872-4407-9b81-cdab5a356f38', NULL, 0, 0, 0, 0, '0', '0'),
('ac31fe11-3024-48a8-a597-85c132f7d902', 'LPP - Bloc 2 - Etage 3 - Appartement 3', '4eacb6cc-c872-4407-9b81-cdab5a356f38', NULL, 0, 0, 0, 0, '0', '0'),
('00ebd3cd-3767-4825-8dc2-d9de41850341', 'LPP - Bloc 3 - Etage 1 - Appartement 1', 'b171d010-dc83-4969-aff3-0516416c5650', NULL, 0, 0, 0, 0, '0', '0'),
('8705ab4e-7ec0-43f7-8e31-eee1a2b8b22a', 'LPP - Bloc 3 - Etage 1 - Appartement 2', 'b171d010-dc83-4969-aff3-0516416c5650', NULL, 0, 0, 0, 0, '0', '0'),
('e8ea1488-abd0-4260-ab64-46a10836d705', 'LPP - Bloc 3 - Etage 1 - Appartement 3', 'b171d010-dc83-4969-aff3-0516416c5650', NULL, 0, 0, 0, 0, '0', '0'),
('fabf566a-f33b-49fd-aae8-99e0ace7b477', 'LPP - Bloc 3 - Etage 2 - Appartement 1', 'afe428b7-2117-4ac3-8474-b1b533074beb', NULL, 0, 0, 0, 0, '0', '0'),
('69f41494-4fa1-48b3-a5c8-f0ac532e7cc2', 'LPP - Bloc 3 - Etage 2 - Appartement 2', 'afe428b7-2117-4ac3-8474-b1b533074beb', NULL, 0, 0, 0, 0, '0', '0'),
('f4a89de6-0fea-4cc0-8dc3-3aa3330a5fab', 'LPP - Bloc 3 - Etage 2 - Appartement 3', 'afe428b7-2117-4ac3-8474-b1b533074beb', NULL, 0, 0, 0, 0, '0', '0'),
('c360e4dc-9854-4387-b254-11a9d794d8d2', 'LPP - Bloc 3 - Etage 3 - Appartement 1', '80708768-a69e-4add-92af-5ae437bef2cb', NULL, 0, 0, 0, 0, '0', '0'),
('8d3ec5ad-4a4c-4c07-9c85-88b1ace914f9', 'LPP - Bloc 3 - Etage 3 - Appartement 2', '80708768-a69e-4add-92af-5ae437bef2cb', NULL, 0, 0, 0, 0, '0', '0'),
('f45b2c99-ee4d-49aa-a503-6466b43fd1ed', 'LPP - Bloc 3 - Etage 3 - Appartement 3', '80708768-a69e-4add-92af-5ae437bef2cb', NULL, 0, 0, 0, 0, '0', '0'),
('9a7e9089-499f-44e9-b2f4-2906e5dd079e', 'LPP - Bloc 1 - Etage 2 - Appartement 1', '958a0c5e-44c4-4a34-b20d-4e189b4d4198', NULL, 0, 0, 0, 0, '0', '0'),
('6da1f64b-0ff4-43a7-a895-a6071d9ef69f', 'LPP - Bloc 1 - Etage 1 - Appartement 3', 'e4f6b671-8b88-4c52-a26f-5f63a480d83d', NULL, 0, 0, 0, 0, '0', '0'),
('2b89d4c3-bb03-4f81-b97b-f571338bfa9e', 'LPP - Bloc 1 - Etage 1 - Appartement 1', 'e4f6b671-8b88-4c52-a26f-5f63a480d83d', NULL, 0, 0, 0, 0, '0', '0'),
('c805c785-4feb-48e1-acbe-9ed1024efa2f', 'LPP - Bloc 1 - Etage 1 - Appartement 2', 'e4f6b671-8b88-4c52-a26f-5f63a480d83d', NULL, 0, 0, 0, 0, '0', '0'),
('e5d07351-6998-4b19-9b1b-46b8b275c17b', 'ADL - Bloc 1 - Etage 1 - Appartement 1', '991c9bb0-1429-44d0-af7c-d5bfdd2bf48b', '0009fbe2-50bc-4083-92e0-a4b5e6a7a720', 5000, 750, 1, 150, 'TERR', 'F2'),
('a7d1649a-0d5a-40c2-b7f8-7f3dc6f2f4b9', 'MOHAMED EL KHALIL BENEDDRA - Bloc 1 - Etage 1 - Appartement 1', 'c9a91e22-34e5-4d4e-985a-c42ca94b9682', NULL, 0, 0, 0, 0, '0', '0');

-- --------------------------------------------------------

--
-- Table structure for table `bloc`
--

DROP TABLE IF EXISTS `bloc`;
CREATE TABLE IF NOT EXISTS `bloc` (
  `bloc_id` varchar(255) NOT NULL,
  `bloc_name` varchar(255) NOT NULL,
  `project_id` varchar(255) NOT NULL,
  PRIMARY KEY (`bloc_id`),
  KEY `project_id` (`project_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bloc`
--

INSERT INTO `bloc` (`bloc_id`, `bloc_name`, `project_id`) VALUES
('61e8e4b4-7f2f-4920-8738-ea6dffd77f86', 'LPP - Bloc 3', '2c7ec130-e9cd-4b25-9b83-cf6a7692d69a'),
('8a778eaa-6315-469f-a70c-64995ac13681', 'LPP - Bloc 2', '2c7ec130-e9cd-4b25-9b83-cf6a7692d69a'),
('1f619972-1ff6-4347-811a-af71852d3047', 'LPP - Bloc 1', '2c7ec130-e9cd-4b25-9b83-cf6a7692d69a'),
('022fb956-6852-40b3-ad67-f0c6621ed99e', 'MOHAMED EL KHALIL BENEDDRA - Bloc 1', '69831cff-2735-4823-856b-30fdf20e8989'),
('19f915e3-a8d7-4a6f-bf26-f3d6cf9008d8', 'ADL - Bloc 1', 'a2f04fc9-228a-4142-a77d-b45824e4df13');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `client_id` varchar(255) NOT NULL,
  `client_nom` varchar(255) NOT NULL,
  `client_prenom` varchar(255) NOT NULL,
  `client_phone` varchar(255) NOT NULL,
  `client_adresse` varchar(255) NOT NULL,
  `client_type` varchar(255) NOT NULL,
  `project_id` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `etape_versement` int(11) NOT NULL,
  PRIMARY KEY (`client_id`),
  KEY `project_id` (`project_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`client_id`, `client_nom`, `client_prenom`, `client_phone`, `client_adresse`, `client_type`, `project_id`, `user_id`, `date`, `etape_versement`) VALUES
('0009fbe2-50bc-4083-92e0-a4b5e6a7a720', 'BENEDDRA', 'MOHAMED EL Khalil', '+213540912120', 'Kharouba', 'acheteur', 'a2f04fc9-228a-4142-a77d-b45824e4df13', 1, '2023-06-10', 20);

-- --------------------------------------------------------

--
-- Table structure for table `commercial`
--

DROP TABLE IF EXISTS `commercial`;
CREATE TABLE IF NOT EXISTS `commercial` (
  `commercial_id` varchar(255) NOT NULL,
  `width` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `user_id` varchar(25) NOT NULL,
  PRIMARY KEY (`commercial_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `commercial_local`
--

DROP TABLE IF EXISTS `commercial_local`;
CREATE TABLE IF NOT EXISTS `commercial_local` (
  `commercial_local_id` varchar(255) NOT NULL,
  `client_id` varchar(255) DEFAULT NULL,
  `commercial_id` varchar(255) NOT NULL,
  KEY `commercial_id` (`commercial_id`),
  KEY `client_id` (`client_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

DROP TABLE IF EXISTS `document`;
CREATE TABLE IF NOT EXISTS `document` (
  `doc_id` varchar(255) NOT NULL,
  `doc_url` varchar(255) NOT NULL,
  `project_id` varchar(255) NOT NULL,
  PRIMARY KEY (`doc_id`),
  KEY `project_id` (`project_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `document`
--

INSERT INTO `document` (`doc_id`, `doc_url`, `project_id`) VALUES
('a3d73734-87c7-417f-be6c-d2cce812c4b8', 'uploads/pdf/Examen Corrigé IDM , Univ Bejaia 2019.pdf', '2c7ec130-e9cd-4b25-9b83-cf6a7692d69a'),
('b8942999-5f67-4316-8997-6cf5f182f1b5', 'uploads/pdf/Examen Corrigé IDM , Univ Bejaia 2019.pdf', 'a2f04fc9-228a-4142-a77d-b45824e4df13'),
('efb27435-f57c-4634-9204-6ae8247d83a6', 'uploads/pdf/Examen Corrigé IDM , Univ Bejaia 2019.pdf', '69831cff-2735-4823-856b-30fdf20e8989');

-- --------------------------------------------------------

--
-- Table structure for table `etage`
--

DROP TABLE IF EXISTS `etage`;
CREATE TABLE IF NOT EXISTS `etage` (
  `etage_id` varchar(255) NOT NULL,
  `etage_name` varchar(255) NOT NULL,
  `bloc_id` varchar(255) NOT NULL,
  PRIMARY KEY (`etage_id`),
  KEY `bloc_id` (`bloc_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `etage`
--

INSERT INTO `etage` (`etage_id`, `etage_name`, `bloc_id`) VALUES
('80708768-a69e-4add-92af-5ae437bef2cb', 'LPP - Bloc 3 - Etage 3', '61e8e4b4-7f2f-4920-8738-ea6dffd77f86'),
('afe428b7-2117-4ac3-8474-b1b533074beb', 'LPP - Bloc 3 - Etage 2', '61e8e4b4-7f2f-4920-8738-ea6dffd77f86'),
('b171d010-dc83-4969-aff3-0516416c5650', 'LPP - Bloc 3 - Etage 1', '61e8e4b4-7f2f-4920-8738-ea6dffd77f86'),
('4eacb6cc-c872-4407-9b81-cdab5a356f38', 'LPP - Bloc 2 - Etage 3', '8a778eaa-6315-469f-a70c-64995ac13681'),
('dafb6dc7-0cf3-4258-b317-0188a4b3d0d9', 'LPP - Bloc 2 - Etage 2', '8a778eaa-6315-469f-a70c-64995ac13681'),
('c4fbaee6-37e6-4973-860a-090746582207', 'LPP - Bloc 1 - Etage 3', '1f619972-1ff6-4347-811a-af71852d3047'),
('6940cbdd-daef-4f2a-963e-7d7d857b2f96', 'LPP - Bloc 2 - Etage 1', '8a778eaa-6315-469f-a70c-64995ac13681'),
('958a0c5e-44c4-4a34-b20d-4e189b4d4198', 'LPP - Bloc 1 - Etage 2', '1f619972-1ff6-4347-811a-af71852d3047'),
('e4f6b671-8b88-4c52-a26f-5f63a480d83d', 'LPP - Bloc 1 - Etage 1', '1f619972-1ff6-4347-811a-af71852d3047'),
('c9a91e22-34e5-4d4e-985a-c42ca94b9682', 'MOHAMED EL KHALIL BENEDDRA - Bloc 1 - Etage 1', '022fb956-6852-40b3-ad67-f0c6621ed99e'),
('991c9bb0-1429-44d0-af7c-d5bfdd2bf48b', 'ADL - Bloc 1 - Etage 1', '19f915e3-a8d7-4a6f-bf26-f3d6cf9008d8');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `id` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `project_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `project_id` (`project_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `image_url`, `project_id`) VALUES
('da822c21-fdd7-40b4-aed7-0f6c9d3d3cce', 'uploads/img/most-expensive-houses-in-the-world-reviews-luxe-digital.png', '2c7ec130-e9cd-4b25-9b83-cf6a7692d69a'),
('aa976b3d-b1c0-409e-82cd-c78b8a530271', 'uploads/img/photo-1564013799919-ab600027ffc6.png', '2c7ec130-e9cd-4b25-9b83-cf6a7692d69a'),
('3d6a1093-8151-4362-a00a-adef2308a40c', 'uploads/img/pexels-binyamin-mellish-186077.png', '2c7ec130-e9cd-4b25-9b83-cf6a7692d69a'),
('3e443990-2a1b-4017-99d4-467ff22241b8', 'uploads/img/photo-1564013799919-ab600027ffc6.jpg', '69831cff-2735-4823-856b-30fdf20e8989'),
('3c2bfd1f-a0f6-40d8-af73-e4779cab6024', 'uploads/img/106758801-1603459526384-picture-perfect-beautiful-house-on-the-island-of-coronado-in-sunny-california-beautifully-landscaped_t20_6lJOrv.jpg', '69831cff-2735-4823-856b-30fdf20e8989'),
('182d68d1-5ebe-4c15-ab90-53ad04c0f599', 'uploads/img/9727700_26837.jpg', 'a2f04fc9-228a-4142-a77d-b45824e4df13'),
('75d40461-c6e7-4bef-923f-a133234f405e', 'uploads/img/most-expensive-houses-in-the-world-reviews-luxe-digital.jpg', '69831cff-2735-4823-856b-30fdf20e8989'),
('8ece4ec9-df88-450f-ba5d-0c9e65fbcecc', 'uploads/img/IMG-20230601-WA0003.jpg', 'a2f04fc9-228a-4142-a77d-b45824e4df13'),
('a1abdf2c-897e-4991-a074-6a7ee4fb51a6', 'uploads/img/IMG20230601182321.jpg', 'a2f04fc9-228a-4142-a77d-b45824e4df13');

-- --------------------------------------------------------

--
-- Table structure for table `parking`
--

DROP TABLE IF EXISTS `parking`;
CREATE TABLE IF NOT EXISTS `parking` (
  `parking_id` varchar(255) NOT NULL,
  `parking_number` int(11) NOT NULL,
  `client_id` varchar(255) NOT NULL,
  `parking_prix` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`parking_id`),
  KEY `client_id` (`client_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `project_id` varchar(255) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `project_ville` varchar(255) NOT NULL,
  `project_desc` varchar(255) NOT NULL,
  `project_status` varchar(15) NOT NULL,
  `user_id` int(11) NOT NULL,
  `f2_price` int(11) NOT NULL,
  `f3_price` int(11) NOT NULL,
  `f4_price` int(11) NOT NULL,
  `f5_price` int(11) NOT NULL,
  PRIMARY KEY (`project_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_id`, `project_name`, `project_ville`, `project_desc`, `project_status`, `user_id`, `f2_price`, `f3_price`, `f4_price`, `f5_price`) VALUES
('69831cff-2735-4823-856b-30fdf20e8989', 'MOHAMED EL KHALIL BENEDDRA', 'Kharouba', 'dfgdfgdfgfdg', 'En Cours', 1, 15552, 422442, 200000, 42424224),
('a2f04fc9-228a-4142-a77d-b45824e4df13', 'ADL', 'MOSTA', 'DFSFSFSFSF', 'En Cours', 1, 5000, 10000, 20000, 30000),
('2c7ec130-e9cd-4b25-9b83-cf6a7692d69a', 'LPP', 'Kharouba', 'DSQQSDQDQSD', 'Fini', 1, 15552, 125252, 125252, 30000);

-- --------------------------------------------------------

--
-- Table structure for table `todolist`
--

DROP TABLE IF EXISTS `todolist`;
CREATE TABLE IF NOT EXISTS `todolist` (
  `todo_id` varchar(255) NOT NULL,
  `todo_content` varchar(255) NOT NULL,
  `todo_state` varchar(20) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `todolist`
--

INSERT INTO `todolist` (`todo_id`, `todo_content`, `todo_state`, `user_id`) VALUES
('a5854dc5-8998-4720-9ecb-94bcca102099', 'make plans', 'En cours', '1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(15) NOT NULL,
  `type` varchar(15) NOT NULL,
  `telephone` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `type`, `telephone`) VALUES
(1, 'John Doe', 'khalil@example.com', '1234', 'Promoteur', '0'),
(2, 'khalil bnd', 'beneddrakhalil@gmail.com', '159632', 'Promoteur', '0'),
(3, 'daifou', 'daifou@gmail.com', '1234', 'Client', '0'),
(4, 'khalil bnd', 'bnd@bnd.com', '123456', 'Client', '0'),
(5, 'khalil bnd', 'mehadjimoh@gmail.com', '8888', 'Promoteur', '0'),
(6, 'khalil bnd', 'beneddra3@outlook.fr', '1234', 'Promoteur', '0'),
(7, 'khalil bnd', 'fdggfd@gdsdf.com', '123', 'Client', '0'),
(8, 'CLIENT', 'client@example.com', '1234', 'Client', '0'),
(9, 'MOHAMED EL KHALIL BENEDDRA', 'hey@hey.com', '1234', 'Promoteur', '+213540912120');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
