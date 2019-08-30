# Free eBay Template Web App

![alt text](https://github.com/juanmartinez890/freeebaytemplates/raw/master/img/live_preview.png)
![alt text](http://juanjmartinez.me/img/ebay3.png)
![alt text](http://juanjmartinez.me/img/ebay2.png)

## Getting Started

Have you seen other eBay actions using some fancy html templates and you want to do the same but you do not know how to do it? Well, I have a B.S. in Computer Science and I can tell you something, it is pretty boring and time consuming to write HTML and CSS. That is why I created a pretty useful tool that generates free eBay Templates. If you want to use it right now, you can Login here. If you are clueless on how add html to your eBay listing description, please keep reading.
Live Demo:
[juanjmartinez.com/freeebaytemplates/app/](http://juanjmartinez.me/freeebaytemplates/app/)
Learn More:
[juanjmartinez.com/freeebaytemplates/](http://juanjmartinez.me/freeebaytemplates/)

### Prerequisites

LAMP, MAMP or WAMP Enviroment

### Installing

3. clone the repo

git clone https://github.com/juanmartinez890/free-ebay-templates.git

2. create a database and the user table open sql and run:

--
-- Database: `freeebaytemplates`
--

-- --------------------------------------------------------

--
-- Table structure for table `USERS`
--

CREATE TABLE `USERS` (
  `Uid` int(10) NOT NULL,
  `Uemail` varchar(25) NOT NULL,
  `Upassword` varchar(50) NOT NULL,
  `Utype` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `USERS` (`Uid`, `Uemail`, `Upassword`, `Utype`) VALUES
(1, 'demo@email.com', 'demo', 3);

--
-- Indexes for table `USERS`
--
ALTER TABLE `USERS`
  ADD PRIMARY KEY (`Uid`);

--
-- AUTO_INCREMENT for table `USERS`
--
ALTER TABLE `USERS`
  MODIFY `Uid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
  
  3.Then, modify the config.php file

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [AngularJS](https://angularjs.org) - JavaScript-based open-source front-end web application framework
* [PHP](http://www.php.net/) - PHP is a popular general-purpose scripting language that is especially suited to web development.
* [Bootstrap](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.
* [Bootswatch](https://bootswatch.com/)
* [clipboard.js](https://clipboardjs.com/) - Copy to clipboard without flash
* [Trix js](https://github.com/basecamp/trix) - Trix is a WYSIWYG editor for writing messages, comments, articles, and lists



## Authors

* **Juan J. Martinez**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Coded with 
