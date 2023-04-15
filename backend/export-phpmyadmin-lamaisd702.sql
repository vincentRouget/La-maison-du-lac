-- phpMyAdmin SQL Dump
-- version OVH
-- https://www.phpmyadmin.net/
--
-- Hôte : lamaisd702.mysql.db
-- Généré le : lun. 27 mars 2023 à 13:06
-- Version du serveur : 5.7.41-log
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `lamaisd702`
--

-- --------------------------------------------------------

--
-- Structure de la table `component`
--

CREATE TABLE `component` (
  `idcomponent` int(11) NOT NULL,
  `component_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `component`
--

INSERT INTO `component` (`idcomponent`, `component_name`) VALUES
(1, 'logo'),
(2, 'banniere'),
(3, 'introduction'),
(4, 'contenant1'),
(5, 'contenant2'),
(6, 'contenant3'),
(7, 'contenant4'),
(8, 'vignette1'),
(9, 'vignette2'),
(10, 'vignette3'),
(11, 'vignette4'),
(12, 'slider1'),
(13, 'slider2'),
(14, 'slider3'),
(15, 'slider4'),
(16, 'video1'),
(17, 'video2'),
(18, 'video3'),
(19, 'video4');

-- --------------------------------------------------------

--
-- Structure de la table `image`
--

CREATE TABLE `image` (
  `idimage` int(11) NOT NULL,
  `image_name` varchar(2048) NOT NULL,
  `component_idcomponent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `image`
--

INSERT INTO `image` (`idimage`, `image_name`, `component_idcomponent`) VALUES
(1, 'logo.jpg', 1),
(2, 'banniere.jpg', 2),
(3, 'commune2.jpg', 3),
(4, 'hiver3.jpg', 3),
(5, 'facade.jpg', 3),
(6, 'suite_parentale2.jpg', 3),
(7, 'salle2.jpg', 3),
(8, 'commune5.jpg', 3),
(9, 'chambre1-1.jpg', 4),
(10, 'chambre1-3.jpg', 4),
(11, 'chambre1-4.jpg', 4),
(12, 'chambre1-5.jpg', 4),
(13, 'chambre2-2.jpg', 4),
(14, 'chambre2-1.jpg', 4),
(15, 'chambre2-3.jpg', 4),
(16, 'suite_parentale2.jpg', 5),
(17, 'suite_parentale9.jpg', 5),
(18, 'suite_parentale10.jpg', 5),
(19, 'suite_parentale5.jpg', 5),
(20, 'twin1.jpg', 6),
(21, 'twin2.jpg', 6),
(22, 'twin3.jpg', 6),
(23, 'twin4.jpg', 6),
(24, 'facade.jpg', 6),
(25, 'suite_parentale2.jpg', 7),
(26, 'suite_parentale1.jpg', 7),
(27, 'suite_parentale7.jpg', 7),
(28, 'suite_parentale5.jpg', 7),
(29, 'suite_parentale3.jpg', 7),
(30, 'commune2.jpg', 12),
(31, 'commune6.jpg', 12),
(32, 'commune5.jpg', 12),
(33, 'chambre2-1.jpg', 12),
(34, 'suite_parentale1.jpg', 12),
(35, 'suite_parentale5.jpg', 12),
(36, 'suite_parentale9.jpg', 12),
(37, 'commune1.jpg', 12),
(38, 'suite_parentale7.jpg', 12),
(39, 'salle1.jpg', 12),
(40, 'commune4.jpg', 12),
(41, 'facade.jpg', 13),
(42, 'ete1.jpg', 13),
(43, 'hiver3.jpg', 13),
(44, 'hiver4.jpg', 13),
(45, 'hiver1.jpg', 13),
(46, 'hiver2.jpg', 13),
(47, 'salle2.jpg', 14),
(48, 'salle3.jpg', 14),
(49, 'salle4.jpg', 14);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `firstname` varchar(124) NOT NULL,
  `lastname` varchar(124) NOT NULL,
  `email` varchar(248) NOT NULL,
  `password` varchar(1024) NOT NULL,
  `admin` tinyint(4) NOT NULL,
  `image_user` varchar(1024) NOT NULL,
  `date` varchar(124) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`iduser`, `firstname`, `lastname`, `email`, `password`, `admin`, `image_user`, `date`) VALUES
(1, 'Vincent', 'ROUGET', 'vincent.rouget86@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$hVXbi5Jyajd9A3YpBn45Qw$h4s4NYz5wHMUAhkJ9vkKaUadXnyzxUPuBTep34gEHsY', 1, 'black_hole.jpg', '2023/02/10');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `component`
--
ALTER TABLE `component`
  ADD PRIMARY KEY (`idcomponent`);

--
-- Index pour la table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`idimage`,`component_idcomponent`),
  ADD KEY `fk_image_component_idx` (`component_idcomponent`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `component`
--
ALTER TABLE `component`
  MODIFY `idcomponent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `image`
--
ALTER TABLE `image`
  MODIFY `idimage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `fk_image_component` FOREIGN KEY (`component_idcomponent`) REFERENCES `component` (`idcomponent`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
