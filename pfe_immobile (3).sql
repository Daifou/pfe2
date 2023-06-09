-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 09, 2023 at 12:47 AM
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
('720bfc55-7ed8-4d25-8511-d9f578958ca2', 'LPP - Bloc 1 - Etage 1 - Appartement 1', '1b2ce49c-d118-4477-9916-010547d01623', '3443ff21-6c4d-4ab5-8225-385de15bcaa7', 200000, 0, 5, 150, 'terr', 'F5');

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
('48ffc517-f035-49e7-934e-1a57dac90e36', 'LPP - Bloc 1', '0e91ce27-0a32-425b-bf86-6117911fd761');

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
('3443ff21-6c4d-4ab5-8225-385de15bcaa7', 'BENEDDRA', 'MOHAMED', '+213540912120', 'Kharouba', 'acheteur', '0e91ce27-0a32-425b-bf86-6117911fd761', 1, '2023-06-09', 100);

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
('975c1028-b66f-43b0-8beb-1b1d0d476415', 'uploads/pdf/Examen Corrigé IDM , Univ Bejaia 2019.pdf', '0e91ce27-0a32-425b-bf86-6117911fd761');

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
('1b2ce49c-d118-4477-9916-010547d01623', 'LPP - Bloc 1 - Etage 1', '48ffc517-f035-49e7-934e-1a57dac90e36');

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
('313500ad-c390-4b8f-9d9d-5077e8570e54', 'uploads/img/351558999_778998947028149_8328468940036771999_n.jpg', '0e91ce27-0a32-425b-bf86-6117911fd761');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `project_id` varchar(255) NOT NULL,
  `project_name` varchar(255) NOT NULL,
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

INSERT INTO `project` (`project_id`, `project_name`, `project_desc`, `project_status`, `user_id`, `f2_price`, `f3_price`, `f4_price`, `f5_price`) VALUES
('0e91ce27-0a32-425b-bf86-6117911fd761', 'LPP', 'khalil', 'En Cours', 1, 50000, 100000, 150000, 200000);

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
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `type`) VALUES
(1, 'John Doe', 'khalil@example.com', '1234', 'Promoteur'),
(2, 'khalil bnd', 'beneddrakhalil@gmail.com', '159632', 'Promoteur'),
(3, 'daifou', 'daifou@gmail.com', '1234', 'Client'),
(4, 'khalil bnd', 'bnd@bnd.com', '123456', 'Client'),
(5, 'khalil bnd', 'mehadjimoh@gmail.com', '8888', 'Promoteur');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
