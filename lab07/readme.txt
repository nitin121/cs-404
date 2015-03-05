#Comment from Mark A. Yoder

# Demo       5
# ReadMe.txt 5
# Fritzing   5
# Code       10
# Web page   +4 - Your html has the wrong .js file name.


Grade:  29/25

================================================


Date:13/10/2015
 
  To   :Mark Yoder
  From :KARRE NITIN
        B13125
  Subject:lab07


Gyroscope.js and gyroscope2.js
 		data is sent in form of an array of length 14 with each element of data 8 bits each. The elements from 0 to 5 corresponds to accelorometer readings, 6 and 7, temperature sensor and 8 to 13 correspond to gyroscope readings. The gyroscope sends data in 8 bits each. Afer shifting by 8 bits and adding the corresponding elements together, we get the respective values of acceleration, temperature and gyroscope. But we need to propogate 32 bit data. so we perform sign extension by forwarding and backwarding the 16 bit data by 16 bits, thus sending a 32 bit data with the same value

webpage.js,webpage.html 
used to display readings on a webpage
