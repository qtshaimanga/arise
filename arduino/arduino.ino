#include "Adafruit_Thermal.h"
#include "logo_header.h"
#include <Bridge.h>
#include <YunClient.h>
#include <PubSubClient.h>
#include <Process.h>

#include "SoftwareSerial.h"
#define TX_PIN 2 // Arduino transmit  BLUE WIRE  labeled RX on printer
#define RX_PIN 3 // Arduino receive   GREEN WIRE   labeled TX on printer

char message_buff[100];

YunClient yun;
PubSubClient client;
Process date;

SoftwareSerial mySerial(RX_PIN, TX_PIN); // Declare SoftwareSerial obj first
Adafruit_Thermal printer(&mySerial);     // Pass addr to printer constructor

void setup() {
  Bridge.begin();
  client = PubSubClient("beeenj.fr", 1883, callback, yun);
  mySerial.begin(9600);  // Initialize SoftwareSerial
  //Serial.begin(9600);
  //while (!mySerial);
  printer.begin();        // Init printer (same regardless of serial type)
}

void loop() {

  if (!client.connected())
  {
    // clientID, username, MD5 encoded password
    client.connect("arise-test");
    //Serial.println("enter if - after connect");
    client.subscribe("arise");
    //Serial.println("conected to server and sub");
  }
  client.loop();

}

void callback(char* topic, byte* payload, unsigned int length) {
  int i = 0;

  // create character buffer with ending null terminator (string)
  for(i=0; i<length; i++) {
    message_buff[i] = payload[i];
  }
  message_buff[i] = '\0';

  String msgString = String(message_buff);
  //Serial.println(msgString);
  date.begin("/bin/date");
  date.addParameter("+%d/%m/%Y %T");
  date.run();
  
  // Print message on printer
  printer.justify('L');
  while (date.available()>0) {
    // print the results we got.
    printer.print(date.readString());
  }
  printer.println("");
  printer.println("");
  printer.justify('C');
  printer.println(msgString);
  printer.println("");
  printer.println("");
  printer.println("");
  printer.justify('C');
  printer.printBitmap(logo_header_width, logo_header_height, logo_header_data);
  printer.println("");
  printer.println("");
  printer.println("");
}

/*void printer_test() {
  // Test inverse on & off
  printer.inverseOn();
  printer.println(F("Inverse ON"));
  printer.inverseOff();

  // Test character double-height on & off
  printer.doubleHeightOn();
  printer.println(F("Double Height ON"));
  printer.doubleHeightOff();

  // Set text justification (right, center, left) -- accepts 'L', 'C', 'R'
  printer.justify('R');
  printer.println(F("Right justified"));
  printer.justify('C');
  printer.println(F("Center justified"));
  printer.justify('L');
  printer.println(F("Left justified"));

  // Test more styles
  printer.boldOn();
  printer.println(F("Bold text"));
  printer.boldOff();

  printer.underlineOn();
  printer.println(F("Underlined text"));
  printer.underlineOff();

  printer.setSize('L');        // Set type size, accepts 'S', 'M', 'L'
  printer.println(F("Large"));
  printer.setSize('M');
  printer.println(F("Medium"));
  printer.setSize('S');
  printer.println(F("Small"));

  printer.justify('C');
  printer.println(F("normal\nline\nspacing"));
  printer.setLineHeight(50);
  printer.println(F("Taller\nline\nspacing"));
  printer.setLineHeight(); // Reset to default
  printer.justify('L');

  // Barcode examples:
  // CODE39 is the most common alphanumeric barcode:
  printer.printBarcode("ADAFRUT", CODE39);
  printer.setBarcodeHeight(100);
  // Print UPC line on product barcodes:
  printer.printBarcode("123456789123", UPC_A);

  // Print the 75x75 pixel logo in adalogo.h:
  printer.printBitmap(adalogo_width, adalogo_height, adalogo_data);

  // Print the 135x135 pixel QR code in adaqrcode.h:
  printer.printBitmap(adaqrcode_width, adaqrcode_height, adaqrcode_data);
  printer.println(F("Adafruit!"));
  printer.feed(2);

  printer.sleep();      // Tell printer to sleep
  delay(3000L);         // Sleep for 3 seconds
  printer.wake();       // MUST wake() before printing again, even if reset
  printer.setDefault(); // Restore printer to defaults
  }*/
