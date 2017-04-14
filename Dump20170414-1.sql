CREATE DATABASE  IF NOT EXISTS `sonparam_pasticipantes` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `sonparam_pasticipantes`;
-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: localhost    Database: sonparam_pasticipantes
-- ------------------------------------------------------
-- Server version	5.7.17-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lugares`
--

DROP TABLE IF EXISTS `lugares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lugares` (
  `id` varchar(10) NOT NULL,
  `participante` varchar(255) DEFAULT NULL,
  `precio` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_participantesLugares` (`participante`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lugares`
--

LOCK TABLES `lugares` WRITE;
/*!40000 ALTER TABLE `lugares` DISABLE KEYS */;
INSERT INTO `lugares` VALUES ('AA1','7PH54HLB',3000),('AA2','0QR07GZB',3000),('AA3','0QR07GZB',3000),('AA4','0AS07ZFM',3000),('AA5',NULL,3000),('AA6','6UM58KBK',3000),('AA7','4UO88JIS',3000),('AA8','3TF25INB',3000),('AA9','f106b9de',3000),('AA10',NULL,3000),('AA11',NULL,3000),('AA12',NULL,3000),('AA13',NULL,3000),('AA14',NULL,3000),('AA15','5BL65OYQ',3000),('AA16',NULL,3000),('AA17',NULL,3000),('AA18',NULL,3000),('AA19','1TM90EHJ',3000),('AA20',NULL,3000),('AA21','9PW52WVQ',3000),('AA22',NULL,3000),('AA23',NULL,3000),('AA24','9BW90BVF',3000),('AA25',NULL,3400),('AA26','4YK38SJF',3400),('AA27',NULL,3400),('AA28','4VX61ASN',3400),('AA29',NULL,3400),('AA30',NULL,3400),('AA31',NULL,3400),('AA32',NULL,3400),('AA33',NULL,3400),('AA34',NULL,3400),('AA35',NULL,3400),('AA36',NULL,3400),('AA37',NULL,3400),('AA38',NULL,3400),('AA39',NULL,3400),('AA40',NULL,3400),('AA41',NULL,3400),('AA42',NULL,3400),('AA43',NULL,3400),('AA44','2DO08GJC',3400),('AA45',NULL,3400),('AA46','8LF21XJS',3400),('AA47',NULL,3400),('AA48','6BN85OGQ',3400),('AA49',NULL,3800),('AA50',NULL,3800),('AA51',NULL,3800),('AA52','3FC52PED',3800),('AA53',NULL,3800),('AA54',NULL,3800),('AA55',NULL,3800),('AA56','9LR88LHL',3800),('AA57',NULL,3800),('AA58',NULL,3800),('AA59',NULL,3800),('AA60',NULL,3800),('AA61',NULL,3800),('AA62',NULL,3800),('AA63',NULL,3800),('AA64',NULL,3800),('AA65',NULL,3800),('AA66',NULL,3800),('AA67',NULL,3800),('AA68',NULL,3800),('AA69',NULL,3800),('AA70',NULL,3800),('AA71',NULL,3800),('AA72','7GD49LXJ',3800),('AA73',NULL,3800),('AA74','6GW15VKZ',3800),('AA75','2VS71MWY',3800),('AA76',NULL,3800),('AA77',NULL,3800),('AA78',NULL,3800),('AA79',NULL,3800),('AA80',NULL,3800),('AB1','9UO59IRF',3000),('AB2',NULL,3000),('AB3','3BJ23MEZ',3000),('AB4','5BC44JIE',3000),('AB5',NULL,3000),('AB6',NULL,3000),('AB7',NULL,3000),('AB8','3PB85SOH',3000),('AB9','9HA55WGU',3000),('AB10',NULL,3000),('AB11','7TU87YDK',3000),('AB12',NULL,3000),('AB13',NULL,3000),('AB14','1VP64GYP',3000),('AB15','1GY44QWG',3000),('AB16',NULL,3000),('AB17',NULL,3000),('AB18',NULL,3000),('AB19',NULL,3000),('AB20',NULL,3000),('AB21',NULL,3000),('AB22',NULL,3000),('AB23',NULL,3000),('AB24',NULL,3000),('AB25','6TQ38TAG',3400),('AB26','2CS91EFQ',3400),('AB27',NULL,3400),('AB28',NULL,3400),('AB29',NULL,3400),('AB30','7NJ42RKM',3400),('AB31',NULL,3400),('AB32',NULL,3400),('AB33',NULL,3400),('AB34','8QA01LDV',3400),('AB35','1EM49IHN',3400),('AB36','0UG50QFD',3400),('AB37',NULL,3400),('AB38',NULL,3400),('AB39',NULL,3400),('AB40',NULL,3400),('AB41','9TZ80POZ',3400),('AB42',NULL,3400),('AB43',NULL,3400),('AB44',NULL,3400),('AB45',NULL,3400),('AB46',NULL,3400),('AB47',NULL,3400),('AB48',NULL,3400),('AB49',NULL,3800),('AB50',NULL,3800),('AB51',NULL,3800),('AB52',NULL,3800),('AB53',NULL,3800),('AB54',NULL,3800),('AB55',NULL,3800),('AB56',NULL,3800),('AB57','612ef7dc',3800),('AB58','9SE39ZCJ',3800),('AB59','3FF01OBB',3800),('AB60',NULL,3800),('AB61',NULL,3800),('AB62',NULL,3800),('AB63',NULL,3800),('AB64','3CF14EKK',3800),('AB65',NULL,3800),('AB66',NULL,3800),('AB67',NULL,3800),('AB68','4OG40AKV',3800),('AB69',NULL,3800),('AB70',NULL,3800),('AB71','7EH36LNN',3800),('AB72','5VC28ZQM',3800),('AB73','8FI10PIU',3800),('AB74',NULL,3800),('AB75','3MI29LKN',3800),('AB76','0BQ28EDK',3800),('AB77',NULL,3800),('AB78',NULL,3800),('AB79','8BW77BCH',3800),('AB80',NULL,3800),('GA1','1BM65KBT',3000),('GA2',NULL,3000),('GA3',NULL,3000),('GA4',NULL,3000),('GA5',NULL,3400),('GA6',NULL,3400),('GA7','6GC11CFY',3400),('GA8',NULL,3400),('GA9',NULL,3400),('GA10',NULL,3800),('GA11',NULL,3800),('GA12',NULL,3800),('GA13',NULL,3800),('GA14',NULL,3800),('GA15','2EO22COX',3000),('GA16',NULL,3000),('GA17',NULL,3000),('GA18','f106b9de',3000),('GA19','8MT29HCW',3400),('GA20',NULL,3400),('GA21',NULL,3400),('GA22','5FP67JNF',3400),('GA23',NULL,3400),('GA24',NULL,3800),('GA25','3BQ95BZJ',3800),('GA26',NULL,3800),('GA27',NULL,3800),('GA28','5XT34KCM',3800),('GA29',NULL,3000),('GA30',NULL,3000),('GA31',NULL,3000),('GA32',NULL,3000),('GA33',NULL,3400),('GA34','7ZC62HZL',3400),('GA35',NULL,3400),('GA36',NULL,3400),('GA37',NULL,3400),('GA38','7WY68QAJ',3800),('GA39','8BS60NGF',3800),('GA40',NULL,3800),('GA41',NULL,3800),('GA42',NULL,3800),('GA43',NULL,3000),('GA44',NULL,3000),('GA45','5KA61VVQ',3000),('GA46',NULL,3000),('GA47',NULL,3400),('GA48','8FC10LHE',3400),('GA49','4RF20WJH',3400),('GA50',NULL,3400),('GA51',NULL,3400),('GA52','9TU65WQT',3800),('GA53',NULL,3800),('GA54',NULL,3800),('GA55',NULL,3800),('GA56',NULL,3800),('GB1',NULL,3800),('GB2',NULL,3800),('GB3',NULL,3800),('GB4','2PB49ZJO',3800),('GB5',NULL,3800),('GB6','9GE74KJT',3800),('GB7','4JW72UFC',3800),('GB8','3LQ03ILE',3800),('GB9',NULL,3800),('GB10',NULL,3800),('GB11',NULL,3800),('GB12',NULL,3800),('GB13',NULL,3800),('GB14',NULL,3800),('GB15',NULL,3800),('GB16',NULL,3800),('GB17','6PI30JBD',3800),('GB18',NULL,3800),('GB19',NULL,3800),('GB20',NULL,3800),('GB21',NULL,3800),('GB22',NULL,3800),('GB23',NULL,3800),('GB24','9UY21BKY',3800),('GC1','1FA10UIX',3800),('GC2','5UZ53MEP',3800),('GC3',NULL,3800),('GC4',NULL,3800),('GC5',NULL,3800),('GC6',NULL,3800),('GC7',NULL,3800),('GC8',NULL,3800),('GC9',NULL,3800),('GC10','8RK54NGU',3800),('GC11',NULL,3800),('GC12',NULL,3800),('GC13','3RG21LKS',3800),('GC14',NULL,3800),('GC15',NULL,3800),('GC16',NULL,3800),('GC17',NULL,3800),('GC18',NULL,3800),('GC19',NULL,3800),('GC20',NULL,3800),('GC21','3BY41APQ',3800),('GC22',NULL,3800),('GC23','1VY15NVQ',3800),('GC24',NULL,3800),('GD1','9QQ02LQH',3800),('GD2','0JJ65FUT',3800),('GD3',NULL,3800),('GD4',NULL,3800),('GD5','9XU97ELY',3400),('GD6','1HN49CQM',3400),('GD7',NULL,3400),('GD8','0XS96ZMD',3000),('GD9',NULL,3000),('GD10',NULL,3000),('GD11',NULL,3800),('GD12',NULL,3800),('GD13',NULL,3800),('GD14',NULL,3800),('GD15',NULL,3400),('GD16',NULL,3400),('GD17',NULL,3400),('GD18',NULL,3000),('GD19',NULL,3000),('GD20','6MH40KKJ',3000),('GE1','1SV00YXW',3800),('GE2','2MF24JST',3800),('GE3',NULL,3800),('GE4','0YT48BNW',3800),('GE5','5NW05RSB',3400),('GE6',NULL,3400),('GE7','4NU80CRT',3400),('GE8',NULL,3000),('GE9',NULL,3000),('GE10','0QR07GZB',3000),('GE11',NULL,3800),('GE12','5PU98YKI',3800),('GE13',NULL,3800),('GE14',NULL,3800),('GE15','0UZ13MSL',3400),('GE16','8FW13XLS',3400),('GE17',NULL,3400),('GE18',NULL,3000),('GE19','7NV29IQQ',3000),('GE20','1GW33SLA',3000);
/*!40000 ALTER TABLE `lugares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participantes`
--

DROP TABLE IF EXISTS `participantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `participantes` (
  `id` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `appaterno` varchar(255) NOT NULL,
  `apmaterno` varchar(255) NOT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `correo` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `confirmacion` tinyint(1) DEFAULT '0',
  `fechaReg` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comentario` text,
  `productoDescrip` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participantes`
--

LOCK TABLES `participantes` WRITE;
/*!40000 ALTER TABLE `participantes` DISABLE KEYS */;
INSERT INTO `participantes` VALUES ('612ef7dc','jhenny','Arcos','Ayal','11111111','a@b.com','Gastronomo','DF',0,'2017-03-27 05:16:43',NULL,NULL),('f106b9de','Jonathan','Arcos','Ayala','Celular 5511537443,Casa 58583600','jonathan.aarcos@gmail.com','Artezano','Ciudad de Mexico',0,'2017-04-14 19:49:09','Prueba de concepto y validaciÃƒÂ³n','Pepitas'),('0AS07ZFM','Quinn','Morgan','Petty','1-759-641-9270','nascetur.ridiculus@miAliquamgravida.org','Artesano','Daly',0,'2017-03-28 06:16:44',NULL,NULL),('5FU81ZJQ','Bevis','Strong','Ewing','1-760-401-1117','Mauris.vestibulum.neque@afeugiat.org','Gastronomo','Hornsea',0,'2017-03-28 06:16:44',NULL,NULL),('0QR07GZB','Duncan','Mcmahon','Shelton','1-441-551-0340','nec.malesuada.ut@acmetusvitae.org','Gastronomo','Cressa',0,'2017-03-28 06:16:44',NULL,NULL),('4JW72UFC','Cade','Haley','Guerrero','1-145-638-8458','penatibus@vestibulumnec.edu','Artesano','Steendorp',0,'2017-03-28 06:16:44',NULL,NULL),('8BS60NGF','Marsden','Leblanc','Harris','1-562-882-2110','Mauris.molestie@quam.org','Artesano','Kuringen',0,'2017-03-28 06:16:44',NULL,NULL),('3TF25INB','Brynne','Henry','Salinas','1-325-319-4821','rutrum@Nulla.org','Gastronomo','Santa Cesarea Terme',0,'2017-03-28 06:16:44',NULL,NULL),('1SV00YXW','Victor','Holcomb','Stevens','1-754-777-5343','dolor.sit@famesac.net','Gastronomo','Delhi',0,'2017-03-28 06:16:44',NULL,NULL),('5UZ53MEP','Drew','Whitney','Stout','1-589-305-1873','magna.nec@ipsum.net','Gastronomo','Gooik',0,'2017-03-28 06:16:44',NULL,NULL),('2MF24JST','Fletcher','Randall','Williams','1-163-388-0208','molestie.tellus.Aenean@ametloremsemper.org','Artesano','Paulista',0,'2017-03-28 06:16:44',NULL,NULL),('4RF20WJH','Logan','Briggs','Berger','1-329-157-6890','dolor.dolor@et.ca','Gastronomo','Purén',0,'2017-03-28 06:16:44',NULL,NULL),('6PI30JBD','Jeremy','Wallace','Clements','1-772-534-2413','ac.arcu@posuere.co.uk','Artesano','Gooik',0,'2017-03-28 06:16:44',NULL,NULL),('6GC11CFY','Jason','Benson','Campos','1-369-907-5674','elit.pede@lacinia.co.uk','Gastronomo','Yeotmal',0,'2017-03-28 06:16:44',NULL,NULL),('8QA01LDV','Ferdinand','Camacho','Brock','1-431-669-5955','sagittis.Nullam@augueporttitorinterdum.edu','Gastronomo','Essex',0,'2017-03-28 06:16:44',NULL,NULL),('5XT34KCM','Vaughan','Daugherty','Montoya','1-869-627-3438','Phasellus.libero@metus.ca','Gastronomo','Neuwied',0,'2017-03-28 06:16:44',NULL,NULL),('0JJ65FUT','Hammett','Curtis','Ellison','1-348-740-9034','nec.eleifend@Duiscursus.edu','Gastronomo','Lauro de Freitas',0,'2017-03-28 06:16:44',NULL,NULL),('5FP67JNF','Idola','Bullock','Pugh','1-509-911-5386','nonummy@magna.org','Artesano','Alajuela',0,'2017-03-28 06:16:44',NULL,NULL),('8FI10PIU','Cullen','Salazar','Padilla','1-611-751-1595','Sed@pede.com','Gastronomo','Ambleside',0,'2017-03-28 06:16:44',NULL,NULL),('2EO22COX','Cameran','Nolan','Burton','1-409-789-6009','dictum@nonummy.edu','Artesano','Waiuku',0,'2017-03-28 06:16:44',NULL,NULL),('8FC10LHE','Reed','Cole','Duke','1-463-572-3442','nunc@Crassed.edu','Gastronomo','Henley-on-Thames',0,'2017-03-28 06:16:44',NULL,NULL),('3BJ23MEZ','Roth','Byers','Hoover','1-180-761-4208','ac.orci.Ut@odioPhasellus.edu','Gastronomo','Gulfport',0,'2017-03-28 06:16:44',NULL,NULL),('1FA10UIX','Chase','Owen','Greene','1-561-468-1771','urna@egetmetusIn.org','Artesano','Solesino',0,'2017-03-28 06:16:44',NULL,NULL),('3CF14EKK','Susan','Padilla','Parker','1-132-436-1653','mauris.Suspendisse@egetipsum.co.uk','Artesano','Nicolosi',0,'2017-03-28 06:16:44',NULL,NULL),('3FF01OBB','Stella','Rush','Kerr','1-304-148-1893','Sed@atpretiumaliquet.org','Gastronomo','Walhain-Saint-Paul',0,'2017-03-28 06:16:44',NULL,NULL),('1TM90EHJ','Noelani','Jackson','Waters','1-254-956-7857','Quisque.nonummy@erat.ca','Artesano','Vremde',0,'2017-03-28 06:16:44',NULL,NULL),('4NU80CRT','Kibo','Harrell','Edwards','1-242-820-4037','dictum.cursus.Nunc@ultrices.net','Gastronomo','Mazzano Romano',0,'2017-03-28 06:16:44',NULL,NULL),('1KZ18HNO','Blossom','Webster','Carney','1-293-370-0756','vel.est.tempor@iaculisneceleifend.ca','Artesano','Iqaluit',0,'2017-03-28 06:16:44',NULL,NULL),('3UM73YBP','Wynne','Mccarthy','Lester','1-248-545-5411','nunc@semegestas.co.uk','Artesano','Raymond',0,'2017-03-28 06:16:44',NULL,NULL),('1GY44QWG','Erica','Hendrix','Palmer','1-232-296-3937','pede.ac@dapibusquamquis.org','Artesano','Lichfield',0,'2017-03-28 06:16:44',NULL,NULL),('2PB49ZJO','Bernard','Thomas','Zimmerman','1-822-843-0671','sagittis.augue@turpisegestasFusce.co.uk','Artesano','Arbre',0,'2017-03-28 06:16:44',NULL,NULL),('6TQ38TAG','Isaac','Dotson','Jimenez','1-414-867-4215','nulla@necurna.org','Gastronomo','Liers',0,'2017-03-28 06:16:44',NULL,NULL),('5NW05RSB','Miriam','Davenport','Harris','1-563-359-1798','urna.nec.luctus@ultrices.edu','Artesano','Alacant',0,'2017-03-28 06:16:44',NULL,NULL),('2DO08GJC','Scott','Haynes','Hooper','1-470-914-6583','vitae@utmi.net','Artesano','Pont-de-Loup',0,'2017-03-28 06:16:44',NULL,NULL),('8FW13XLS','Audrey','Terrell','Chang','1-603-820-3021','Fusce.aliquet.magna@mollisInteger.net','Artesano','Birmingham',0,'2017-03-28 06:16:44',NULL,NULL),('1AV00III','Angela','Rose','Martinez','1-541-525-3248','Suspendisse.eleifend@felisDonec.com','Gastronomo','Guildford',0,'2017-03-28 06:16:44',NULL,NULL),('1VY15NVQ','Rooney','Drake','Dudley','1-788-381-1019','Donec.porttitor.tellus@vitaenibh.net','Gastronomo','Palagano',0,'2017-03-28 06:16:44',NULL,NULL),('4UO88JIS','Alexis','Cohen','Tanner','1-444-780-2863','euismod@enimsitamet.net','Artesano','Porpetto',0,'2017-03-28 06:16:44',NULL,NULL),('5PU98YKI','Ray','Case','Montgomery','1-394-134-0412','orci@Vivamusnisi.com','Gastronomo','Bedford',0,'2017-03-28 06:16:44',NULL,NULL),('9UO59IRF','Craig','Eaton','Cameron','1-433-931-1916','Nulla@arcu.org','Gastronomo','Breton',0,'2017-03-28 06:16:44',NULL,NULL),('4VX61ASN','Nadine','Higgins','Strong','1-375-773-0288','eget.ipsum@Donec.com','Gastronomo','Lunel',0,'2017-03-28 06:16:44',NULL,NULL),('7GD49LXJ','Herman','Perez','Little','1-520-358-7249','libero.Donec@quislectus.net','Artesano','Friedrichshafen',0,'2017-03-28 06:16:44',NULL,NULL),('6UM58KBK','Hoyt','Mcmahon','Watson','1-287-635-4837','Nulla.semper@ligulaAeneangravida.com','Artesano','Warspite',0,'2017-03-28 06:16:44',NULL,NULL),('1GW33SLA','Susan','Flowers','Kramer','1-531-925-8792','sagittis@nostraperinceptos.edu','Artesano','Marsciano',0,'2017-03-28 06:16:44',NULL,NULL),('7NJ42RKM','Kylynn','Wilkins','Rowland','1-438-208-5060','vehicula.aliquet@vehicula.org','Gastronomo','South Bend',0,'2017-03-28 06:16:44',NULL,NULL),('7EH36LNN','Angela','Lowe','Gross','1-327-951-0689','tempor.diam.dictum@facilisis.edu','Gastronomo','Liberchies',0,'2017-03-28 06:16:44',NULL,NULL),('9GE74KJT','Yolanda','Lyons','Pruitt','1-451-277-5660','aliquet.libero@tellusnon.org','Artesano','Malle',0,'2017-03-28 06:16:44',NULL,NULL),('5BL65OYQ','Hamilton','Baker','Shields','1-974-560-5503','semper.et.lacinia@ligula.co.uk','Artesano','Thunder Bay',0,'2017-03-28 06:16:44',NULL,NULL),('9UY21BKY','Amethyst','Pitts','Farley','1-695-202-0091','sapien.Cras@rutrum.edu','Gastronomo','Premeno',0,'2017-03-28 06:16:44',NULL,NULL),('7PH54HLB','Neville','Morrison','Henry','1-137-176-3542','cursus.luctus.ipsum@necurnasuscipit.com','Gastronomo','Stintino',0,'2017-03-28 06:16:44',NULL,NULL),('8RK54NGU','Lawrence','Suarez','Hill','1-765-501-8708','in.molestie@Crasvulputate.co.uk','Artesano','Ila',0,'2017-03-28 06:16:44',NULL,NULL),('7NV29IQQ','Ramona','Powell','Foster','1-533-536-4630','Duis.risus@quamvelsapien.net','Artesano','Te Puke',0,'2017-03-28 06:16:44',NULL,NULL),('9BW90BVF','Ali','Gates','Bryant','1-870-987-9708','malesuada.augue.ut@elit.edu','Gastronomo','Philadelphia',0,'2017-03-28 06:16:44',NULL,NULL),('2KT71VDQ','Ryder','Walker','Wise','1-191-530-9959','netus.et.malesuada@pharetraNam.net','Gastronomo','Hull',0,'2017-03-28 06:16:44',NULL,NULL),('9TZ80POZ','Hyacinth','Delgado','Brennan','1-617-953-6295','conubia@rutrummagnaCras.net','Gastronomo','Oetingen',0,'2017-03-28 06:16:44',NULL,NULL),('5BC44JIE','Caldwell','Morris','Bray','1-262-793-8267','fermentum@Utsemperpretium.org','Gastronomo','Chile Chico',0,'2017-03-28 06:16:44',NULL,NULL),('9QQ02LQH','Rashad','Kent','Potts','1-656-979-4810','Morbi@commodotinciduntnibh.com','Gastronomo','Rimouski',0,'2017-03-28 06:16:44',NULL,NULL),('3RG21LKS','Hiram','Morales','Sharp','1-848-567-1925','consequat@lacusEtiam.co.uk','Artesano','Las Cabras',0,'2017-03-28 06:16:44',NULL,NULL),('1VP64GYP','Emery','Vaughan','Morris','1-858-215-7269','Quisque@NullafacilisiSed.org','Artesano','Cork',0,'2017-03-28 06:16:44',NULL,NULL),('8MT29HCW','Colby','Nelson','Lott','1-624-975-6321','non.magna.Nam@Aliquamgravida.org','Artesano','Siegendorf',0,'2017-03-28 06:16:44',NULL,NULL),('3TD17QSW','Signe','Brooks','Lynch','1-992-789-2257','lacus.varius.et@sociisnatoque.co.uk','Gastronomo','Argenteuil',0,'2017-03-28 06:16:44',NULL,NULL),('9XU97ELY','Gwendolyn','Noble','Justice','1-244-637-2609','Nunc@semper.net','Artesano','Rionero in Vulture',0,'2017-03-28 06:16:44',NULL,NULL),('0BQ28EDK','Stacey','Hendricks','Cote','1-591-541-2855','eros@dolor.ca','Gastronomo','Lautaro',0,'2017-03-28 06:16:44',NULL,NULL),('0XS96ZMD','Kiona','Bennett','Odom','1-775-867-3476','arcu.Vivamus.sit@loremipsum.com','Artesano','Wanneroo',0,'2017-03-28 06:16:44',NULL,NULL),('7ZC62HZL','Robert','Carr','Talley','1-948-919-8205','imperdiet.ullamcorper@nequeIn.com','Artesano','Tiltil',0,'2017-03-28 06:16:44',NULL,NULL),('2CF63AWB','Ivory','Foster','Head','1-251-494-2085','elit@Donecdignissimmagna.edu','Gastronomo','Saint-Laurent',0,'2017-03-28 06:16:44',NULL,NULL),('6GW15VKZ','Hedda','Delgado','Reilly','1-651-768-7130','et@tellusidnunc.edu','Artesano','Sacramento',0,'2017-03-28 06:16:44',NULL,NULL),('1EM49IHN','Michelle','Watkins','Fox','1-413-427-6405','sodales.Mauris.blandit@sitamet.ca','Artesano','Walhain-Saint-Paul',0,'2017-03-28 06:16:44',NULL,NULL),('7WY68QAJ','Shelby','Wagner','Mcneil','1-230-579-3554','arcu.Aliquam.ultrices@Mauris.co.uk','Gastronomo','Fraser Lake',0,'2017-03-28 06:16:44',NULL,NULL),('2CS91EFQ','Idola','Wilcox','Hicks','1-335-691-9167','ipsum.Curabitur.consequat@liberoestcongue.org','Gastronomo','Ribeirão Preto',0,'2017-03-28 06:16:44',NULL,NULL),('5KA61VVQ','Cadman','Sanchez','Luna','1-692-462-7921','Sed.neque@Lorem.co.uk','Artesano','Norderstedt',0,'2017-03-28 06:16:44',NULL,NULL),('1BM65KBT','Nita','Fletcher','Forbes','1-543-433-1306','feugiat@antedictum.edu','Artesano','Runcorn',0,'2017-03-28 06:16:44',NULL,NULL),('3BQ95BZJ','Oscar','Lawrence','Olsen','1-911-716-5528','eget.varius.ultrices@aliquet.edu','Gastronomo','Nova Iguaçu',0,'2017-03-28 06:16:44',NULL,NULL),('9HA55WGU','Harlan','Santiago','Villarreal','1-585-268-5992','ipsum.porta@egestas.edu','Gastronomo','Tongue',0,'2017-03-28 06:16:44',NULL,NULL),('9PW52WVQ','Vanna','Pena','Clay','1-532-902-6657','gravida.mauris@Aliquamadipiscinglobortis.net','Artesano','Paupisi',0,'2017-03-28 06:16:44',NULL,NULL),('1WQ89XLB','Maxwell','Delaney','Skinner','1-737-276-8301','netus.et@afelisullamcorper.co.uk','Artesano','Le Havre',0,'2017-03-28 06:16:44',NULL,NULL),('4YK38SJF','Stewart','Blackwell','Santiago','1-739-576-5336','nascetur.ridiculus.mus@non.ca','Gastronomo','Gelsenkirchen',0,'2017-03-28 06:16:44',NULL,NULL),('3LQ03ILE','Tanya','Woodard','Reyes','1-499-723-0563','felis.adipiscing.fringilla@at.com','Gastronomo','Moorsel',0,'2017-03-28 06:16:44',NULL,NULL),('5VC28ZQM','Urielle','Oliver','Leon','1-163-643-6808','dolor.tempus.non@Morbinequetellus.net','Gastronomo','Wunstorf',0,'2017-03-28 06:16:44',NULL,NULL),('4OG40AKV','Macon','Gilliam','Frank','1-315-230-7017','vitae.velit@eleifendegestas.ca','Gastronomo','Eindhoven',0,'2017-03-28 06:16:44',NULL,NULL),('4FP34SYO','Flynn','Snider','Mckay','1-743-384-6788','ut.lacus.Nulla@Morbi.edu','Artesano','Tarbes',0,'2017-03-28 06:16:44',NULL,NULL),('6MH40KKJ','Christopher','Richards','Kline','1-913-714-7886','at.pretium.aliquet@lorem.org','Gastronomo','Oostkerke',0,'2017-03-28 06:16:44',NULL,NULL),('0YT48BNW','Leonard','Ruiz','Howard','1-592-278-1930','malesuada@Quisque.co.uk','Artesano','Narbonne',0,'2017-03-28 06:16:44',NULL,NULL),('1HN49CQM','Yvonne','Leblanc','Tanner','1-411-981-3238','Nullam.nisl.Maecenas@Cumsociisnatoque.co.uk','Artesano','Avin',0,'2017-03-28 06:16:44',NULL,NULL),('1VS48RZD','Scarlett','Stephens','Barton','1-203-944-8814','diam@euismodet.com','Artesano','Bahraich',0,'2017-03-28 06:16:44',NULL,NULL),('3MI29LKN','Sage','Brewer','Mcknight','1-353-873-9773','urna.nec.luctus@libero.edu','Gastronomo','Bidar',0,'2017-03-28 06:16:44',NULL,NULL),('6BN85OGQ','Linda','Ray','Wooten','1-133-368-3900','bibendum.sed.est@elementumategestas.co.uk','Artesano','Richmond',0,'2017-03-28 06:16:44',NULL,NULL),('9SE39ZCJ','Clayton','Wagner','Dennis','1-480-497-0662','Quisque.fringilla.euismod@maurissapiencursus.ca','Gastronomo','Taber',0,'2017-03-28 06:16:44',NULL,NULL),('3BB09QCO','Samantha','Dudley','Brock','1-894-361-8141','risus.a@malesuadafringilla.co.uk','Gastronomo','Opgrimbie',0,'2017-03-28 06:16:44',NULL,NULL),('3FC52PED','Daria','Simmons','Garza','1-958-341-0418','risus@ornarelectus.edu','Artesano','Canterbury',0,'2017-03-28 06:16:44',NULL,NULL),('2VS71MWY','April','Kerr','Hoffman','1-582-578-7025','et.ultrices@CuraePhasellusornare.edu','Gastronomo','Columbia',0,'2017-03-28 06:16:44',NULL,NULL),('8BW77BCH','Cameran','Sullivan','Delaney','1-336-527-3290','ac@Loremipsumdolor.org','Artesano','Sellano',0,'2017-03-28 06:16:44',NULL,NULL),('9LR88LHL','Jana','Brown','Noble','1-669-621-7965','primis@aclibero.net','Gastronomo','Lampertheim',0,'2017-03-28 06:16:44',NULL,NULL),('3PB85SOH','Brenna','Skinner','Buckner','1-129-492-8933','Donec@tellusPhasellus.net','Gastronomo','Tongue',0,'2017-03-28 06:16:44',NULL,NULL),('3NC88XMM','Channing','Mcmillan','Conner','1-162-134-5176','nec@eratvolutpat.com','Artesano','Launceston',0,'2017-03-28 06:16:44',NULL,NULL),('0UG50QFD','Lareina','Hall','Hughes','1-303-659-9720','egestas.rhoncus.Proin@Aliquam.co.uk','Artesano','Carstairs',0,'2017-03-28 06:16:44',NULL,NULL),('3BY41APQ','Ulysses','Cotton','Sanford','1-833-541-8568','posuere.cubilia@Curabitur.net','Gastronomo','Turgutlu',0,'2017-03-28 06:16:44',NULL,NULL),('9TU65WQT','Evelyn','Haley','Key','1-376-343-5040','luctus@eratsemperrutrum.net','Gastronomo','Middlesbrough',0,'2017-03-28 06:16:44',NULL,NULL),('7TU87YDK','Austin','Ballard','Hyde','1-484-798-9797','Sed.eu@vulputate.edu','Artesano','Owen Sound',0,'2017-03-28 06:16:44',NULL,NULL),('0UZ13MSL','Katelyn','Beasley','Torres','1-305-201-5100','imperdiet.nec.leo@egestas.co.uk','Gastronomo','Aiseau-Presles',0,'2017-03-28 06:16:44',NULL,NULL),('8LF21XJS','Clayton','Woods','Rodgers','1-151-492-4432','bibendum.fermentum.metus@montesnascetur.com','Artesano','Vagli Sotto',0,'2017-03-28 06:16:44',NULL,NULL),('2LR75PCX','Michael','Bass','Conner','1-471-752-7307','augue.porttitor.interdum@Nunclaoreet.net','Artesano','Goiânia',0,'2017-03-28 06:16:44',NULL,NULL);
/*!40000 ALTER TABLE `participantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`nombre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES ('Ámbar de Chiapas'),('Arroz del estado de Morelos'),('Bacanora'),('Café de Chiapas'),('Café de Grijalva'),('Charanda'),('Chile habanero'),('Comida Oaxaquea2'),('Comida Oaxaqueña'),('Comida Oaxaqueña2'),('El cacao Grijalva'),('Mango Ataúlfo'),('Mezcal'),('Olinalá'),('pepitas1'),('Sotol'),('Talavera'),('Tequila'),('Vainilla de Papantla');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_participante`
--

DROP TABLE IF EXISTS `producto_participante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto_participante` (
  `idProducto` varchar(255) NOT NULL,
  `idParticipante` varchar(255) NOT NULL,
  PRIMARY KEY (`idProducto`,`idParticipante`),
  KEY `FK_Participante` (`idParticipante`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_participante`
--

LOCK TABLES `producto_participante` WRITE;
/*!40000 ALTER TABLE `producto_participante` DISABLE KEYS */;
INSERT INTO `producto_participante` VALUES ('Ámbar de Chiapas','0QR07GZB'),('Ámbar de Chiapas','3FC52PED'),('Ámbar de Chiapas','4NU80CRT'),('Ámbar de Chiapas','5KA61VVQ'),('Ámbar de Chiapas','8BS60NGF'),('Arroz del estado de Morelos','4JW72UFC'),('Arroz del estado de Morelos','612ef7dc'),('Arroz del estado de Morelos','6BN85OGQ'),('Arroz del estado de Morelos','6TQ38TAG'),('Arroz del estado de Morelos','7NV29IQQ'),('Arroz del estado de Morelos','7ZC62HZL'),('Bacanora','1VY15NVQ'),('Bacanora','2MF24JST'),('Bacanora','3UM73YBP'),('Bacanora','4OG40AKV'),('Bacanora','4RF20WJH'),('Bacanora','5PU98YKI'),('Bacanora','9HA55WGU'),('Bacanora','9TU65WQT'),('Café de Chiapas','0AS07ZFM'),('Café de Chiapas','1SV00YXW'),('Café de Chiapas','3CF14EKK'),('Café de Chiapas','3NC88XMM'),('Café de Chiapas','8FI10PIU'),('Café de Chiapas','9GE74KJT'),('Café de Chiapas','f106b9de'),('Café de Grijalva','0BQ28EDK'),('Café de Grijalva','6MH40KKJ'),('Café de Grijalva','9BW90BVF'),('Charanda','1BM65KBT'),('Charanda','3PB85SOH'),('Charanda','4VX61ASN'),('Charanda','5FP67JNF'),('Charanda','6GC11CFY'),('Charanda','8FW13XLS'),('Charanda','9XU97ELY'),('Chile habanero','0YT48BNW'),('Chile habanero','1FA10UIX'),('Chile habanero','1GY44QWG'),('Chile habanero','3FF01OBB'),('Chile habanero','4FP34SYO'),('Comida Oaxaquea2','1HN49CQM'),('Comida Oaxaquea2','1KZ18HNO'),('Comida Oaxaquea2','1VP64GYP'),('Comida Oaxaquea2','4UO88JIS'),('Comida Oaxaquea2','7WY68QAJ'),('Comida Oaxaquea2','f106b9de'),('Comida Oaxaqueña','0QR07GZB'),('Comida Oaxaqueña','0UG50QFD'),('Comida Oaxaqueña','2KT71VDQ'),('Comida Oaxaqueña','3TF25INB'),('Comida Oaxaqueña','8BW77BCH'),('Comida Oaxaqueña','8QA01LDV'),('Comida Oaxaqueña2','0QR07GZB'),('Comida Oaxaqueña2','0XS96ZMD'),('Comida Oaxaqueña2','1AV00III'),('Comida Oaxaqueña2','2CF63AWB'),('Comida Oaxaqueña2','5FU81ZJQ'),('Comida Oaxaqueña2','9LR88LHL'),('El cacao Grijalva','1TM90EHJ'),('El cacao Grijalva','6UM58KBK'),('El cacao Grijalva','9PW52WVQ'),('El cacao Grijalva','9QQ02LQH'),('Mango Ataúlfo','1EM49IHN'),('Mango Ataúlfo','2EO22COX'),('Mango Ataúlfo','7GD49LXJ'),('Mango Ataúlfo','7PH54HLB'),('Mango Ataúlfo','8MT29HCW'),('Mezcal','3BB09QCO'),('Mezcal','3RG21LKS'),('Mezcal','3TD17QSW'),('Mezcal','5XT34KCM'),('Mezcal','8FC10LHE'),('Mezcal','9TZ80POZ'),('Olinalá','0JJ65FUT'),('Olinalá','3LQ03ILE'),('pepitas1','0UZ13MSL'),('pepitas1','2DO08GJC'),('pepitas1','2LR75PCX'),('pepitas1','2PB49ZJO'),('pepitas1','3BQ95BZJ'),('pepitas1','3BY41APQ'),('pepitas1','6GW15VKZ'),('pepitas1','7TU87YDK'),('pepitas1','9SE39ZCJ'),('pepitas1','f106b9de'),('Sotol','1VS48RZD'),('Sotol','2CS91EFQ'),('Sotol','5BC44JIE'),('Sotol','9UY21BKY'),('Talavera','1GW33SLA'),('Talavera','1WQ89XLB'),('Talavera','4YK38SJF'),('Talavera','5UZ53MEP'),('Talavera','7NJ42RKM'),('Tequila','3MI29LKN'),('Tequila','5BL65OYQ'),('Tequila','7EH36LNN'),('Tequila','8LF21XJS'),('Vainilla de Papantla','2VS71MWY'),('Vainilla de Papantla','3BJ23MEZ'),('Vainilla de Papantla','5NW05RSB'),('Vainilla de Papantla','5VC28ZQM'),('Vainilla de Papantla','6PI30JBD'),('Vainilla de Papantla','8RK54NGU'),('Vainilla de Papantla','9UO59IRF');
/*!40000 ALTER TABLE `producto_participante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `pass` varchar(42) NOT NULL,
  PRIMARY KEY (`id`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'AdminMilo2017','*1D0AD73F41C3B3475FDD338FDCDBFD68A92359F6'),(2,'superAdmin','*3473BB1E9EC211F004D5F94E55888C7EFA48B172'),(3,'asd','*F6DD0C0AC75395CB5BFC12C46B8880CD156B4799');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-14 16:25:52
