# upcScanner

A UPC scanner app that scans upc codes to check if product exists in database

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Other parts of this project:

[upc-server](https://github.com/eyao06/upc-server)

[upc-website](https://github.com/eyao06/upc-website)

### Prerequisites

* Latest version of npm
* A computer (I used Windows)
* A Android device with 6.0 or higher
* Make sure your Android device has USB Debug is on 
* MongoDB (Database)
* Express
* React and React-Native
* Node.js (Most Current Version)

### Installing

* Download project 
* Extract project
* Make sure to run server and database (Go to [upc-server](https://github.com/eyao06/upc-server) project for further instructions) 
* Open command line in project directory
* Install dependencies 
```
npm install
```
*	Change ipAddress to your localhosts IPv4 Address in file (upcScanner/app/redux.js) line: 4
```
IPv4 Address can be found via command line with the command ipconfig
```
* Replace the old IP Address with the one just found
*	Plug android device with Android OS 6.0 or higher to computer
*	Make sure USB Debugging is on
* Run application 
```
react-native run-android
```
*	Make sure android is plugged and connected to the computer
*	Make sure the USB debugger is on
*	Try cleaning the gradlew
```
cd android 
gradlew clean 
cd ..
```
*	Or try uninstall any previous versions of the application 
*	Then try running the application again
* Once the app is running you can scan UPC codes 
* If the product exists in database a message would pop up saying that it exists
* Otherwise it will say it does not





## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
