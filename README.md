# mik-IoT-server

NodeJS v6.10.3

``` npm install ``` - run install
``` npm start ``` - run server

## API

**Show Socks**
----
  Returns data about a sock produced by machine.

* **URL**

  /sock/:machine

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `machine=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `9000`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `Machine XYZ not found`
