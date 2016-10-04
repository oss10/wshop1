-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Oct 04, 2016 at 11:34 AM
-- Server version: 5.7.15
-- PHP Version: 5.6.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `canapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `assiste`
--

CREATE TABLE `assiste` (
  `ass_id` int(11) NOT NULL,
  `ass_seance_id` int(11) NOT NULL,
  `ass_acc_user_id` int(11) NOT NULL,
  `ass_squ_user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `diffusion`
--

CREATE TABLE `diffusion` (
  `diff_id` int(11) NOT NULL,
  `diff_chaine` varchar(64) DEFAULT NULL,
  `diff_heure_deb` timestamp NULL DEFAULT NULL,
  `diff_heure_fin` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `emission`
--

CREATE TABLE `emission` (
  `em_id` int(11) NOT NULL,
  `em_nom` varchar(256) DEFAULT NULL,
  `em_resume` text,
  `em_photo` varchar(256) DEFAULT NULL,
  `em_note` int(11) DEFAULT NULL,
  `em_genre` varchar(256) DEFAULT NULL,
  `diff_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `seance`
--

CREATE TABLE `seance` (
  `seance_id` int(11) NOT NULL,
  `seance_nbplaces` int(11) NOT NULL,
  `seance_eviter` text NOT NULL,
  `seance_user_id` int(11) NOT NULL,
  `seance_diff_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_pseudo` varchar(32) NOT NULL,
  `user_mail` varchar(32) NOT NULL,
  `user_pass` varchar(16) NOT NULL,
  `user_adresse1` varchar(64) NOT NULL,
  `user_adresse2` varchar(64) NOT NULL,
  `user_cp` varchar(5) NOT NULL,
  `user_ville` varchar(32) NOT NULL,
  `user_gmaps` varchar(32) NOT NULL,
  `user_typetv` varchar(32) NOT NULL,
  `user_nom` varchar(32) NOT NULL,
  `user_prenom` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assiste`
--
ALTER TABLE `assiste`
  ADD PRIMARY KEY (`ass_id`);

--
-- Indexes for table `diffusion`
--
ALTER TABLE `diffusion`
  ADD PRIMARY KEY (`diff_id`);

--
-- Indexes for table `emission`
--
ALTER TABLE `emission`
  ADD PRIMARY KEY (`em_id`);

--
-- Indexes for table `seance`
--
ALTER TABLE `seance`
  ADD PRIMARY KEY (`seance_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assiste`
--
ALTER TABLE `assiste`
  MODIFY `ass_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `diffusion`
--
ALTER TABLE `diffusion`
  MODIFY `diff_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `emission`
--
ALTER TABLE `emission`
  MODIFY `em_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `seance`
--
ALTER TABLE `seance`
  MODIFY `seance_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
