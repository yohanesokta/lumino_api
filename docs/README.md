---
title: Api kurson serve v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->


Base URLs:

* <a href="http://localhost:3000">http://localhost:3000</a>

Email: <a href="mailto:admin@yohancloud.biz.id">support</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

- HTTP Authentication, scheme: bearer Token ini berisi jwt barrier yang dikirimkan melalui user login baik normal maupun oauth2 

<h1 id="api-kurson-serve-default">Default</h1>

Default user previlage

## get__default_user

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/default/user \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET http://localhost:3000/default/user HTTP/1.1
Host: localhost:3000

```

```javascript

const headers = {
  'Authorization':'Bearer {access-token}'
};

fetch('http://localhost:3000/default/user',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/default/user',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/default/user', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/default/user', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/default/user");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/default/user", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /default/user`

*get user data*

<h3 id="get__default_user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put__default

> Code samples

```shell
# You can also use wget
curl -X PUT http://localhost:3000/default \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT http://localhost:3000/default HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "username": "string",
  "user_email": "string",
  "bio": "string",
  "gender": "string",
  "organisasi": "string",
  "location": "string",
  "birthday": "string",
  "profile_picture_url": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('http://localhost:3000/default',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'http://localhost:3000/default',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.put('http://localhost:3000/default', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://localhost:3000/default', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/default");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:3000/default", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /default`

*edit user data*

> Body parameter

```json
{
  "username": "string",
  "user_email": "string",
  "bio": "string",
  "gender": "string",
  "organisasi": "string",
  "location": "string",
  "birthday": "string",
  "profile_picture_url": "string"
}
```

<h3 id="put__default-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» username|body|string|false|none|
|» user_email|body|string|false|none|
|» bio|body|string|false|none|
|» gender|body|string|false|none|
|» organisasi|body|string|false|none|
|» location|body|string|false|none|
|» birthday|body|string|false|none|
|» profile_picture_url|body|string|false|none|

<h3 id="put__default-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="api-kurson-serve-authtentication">Authtentication</h1>

for login,signup & user authorization 

## get__auth_google_

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/auth/google/

```

```http
GET http://localhost:3000/auth/google/ HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/auth/google/',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/auth/google/',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/auth/google/')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/auth/google/', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/auth/google/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/auth/google/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /auth/google/`

*authentication using oauth2 google*

<b>Route</b> ini hanya dapat digunakan dengan me redirect nya ke path ini , contohnya dari halaman lain di redirect ke route ini tapi dengan memberikan parameter query 'redirect' sebagai callback ketika keadaan login selesai 

<h3 id="get__auth_google_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|redirect|query|string|false|none|

<h3 id="get__auth_google_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|kurangnya atribut redirect pada query url|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__auth_register

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/auth/register \
  -H 'Content-Type: application/json'

```

```http
POST http://localhost:3000/auth/register HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "username": "string",
  "user_email": "string",
  "user_password": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/auth/register',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/auth/register',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://localhost:3000/auth/register', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/auth/register', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/auth/register");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/auth/register", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /auth/register`

*create new user*

> Body parameter

```json
{
  "username": "string",
  "user_email": "string",
  "user_password": "string"
}
```

<h3 id="post__auth_register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» username|body|string|false|none|
|» user_email|body|string|false|none|
|» user_password|body|string|false|none|

<h3 id="post__auth_register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__auth_login

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/auth/login \
  -H 'Content-Type: application/json'

```

```http
POST http://localhost:3000/auth/login HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "user_email": "string",
  "user_password": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/auth/login',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/auth/login',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://localhost:3000/auth/login', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/auth/login', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/auth/login");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/auth/login", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /auth/login`

*login user authentication*

> Body parameter

```json
{
  "user_email": "string",
  "user_password": "string"
}
```

<h3 id="post__auth_login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» user_email|body|string|false|none|
|» user_password|body|string|false|none|

<h3 id="post__auth_login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__auth_logout

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/auth/logout \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST http://localhost:3000/auth/logout HTTP/1.1
Host: localhost:3000

```

```javascript

const headers = {
  'Authorization':'Bearer {access-token}'
};

fetch('http://localhost:3000/auth/logout',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'http://localhost:3000/auth/logout',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('http://localhost:3000/auth/logout', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/auth/logout', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/auth/logout");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/auth/logout", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /auth/logout`

*logout & deleted user session*

<h3 id="post__auth_logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|unauthorize|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="api-kurson-serve-callback">Callback</h1>

Callback function

## get__auth_google_callback

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/auth/google/callback

```

```http
GET http://localhost:3000/auth/google/callback HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/auth/google/callback',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/auth/google/callback',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/auth/google/callback')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/auth/google/callback', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/auth/google/callback");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/auth/google/callback", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /auth/google/callback`

*callback oauth2 google*

<h3 id="get__auth_google_callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-kurson-serve-admin">Admin</h1>

Admin user previlage

## post__admin_mentor

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/admin/mentor \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST http://localhost:3000/admin/mentor HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "username": "string",
  "user_email": "string",
  "user_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('http://localhost:3000/admin/mentor',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'http://localhost:3000/admin/mentor',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('http://localhost:3000/admin/mentor', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/admin/mentor', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/admin/mentor");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/admin/mentor", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /admin/mentor`

*create mentor account*

cuman admin yang dapat membuat user untuk mentor, dan harus terverifikasi

> Body parameter

```json
{
  "username": "string",
  "user_email": "string",
  "user_password": "string"
}
```

<h3 id="post__admin_mentor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» username|body|string|false|none|
|» user_email|body|string|false|none|
|» user_password|body|string|false|none|

<h3 id="post__admin_mentor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete__admin_mentor

> Code samples

```shell
# You can also use wget
curl -X DELETE http://localhost:3000/admin/mentor?mentor_id=string \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE http://localhost:3000/admin/mentor?mentor_id=string HTTP/1.1
Host: localhost:3000

```

```javascript

const headers = {
  'Authorization':'Bearer {access-token}'
};

fetch('http://localhost:3000/admin/mentor?mentor_id=string',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'http://localhost:3000/admin/mentor',
  params: {
  'mentor_id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('http://localhost:3000/admin/mentor', params={
  'mentor_id': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost:3000/admin/mentor', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/admin/mentor?mentor_id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:3000/admin/mentor", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /admin/mentor`

*deleting mentor account*

menghapus mentor user dari pihak admin , admin yang terverifikasi dapat menghapus mentor dan sesuai aturan. Untuk menghapus hanya perlu id mentor untuk melakukanya

<h3 id="delete__admin_mentor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mentor_id|query|string|true|none|

<h3 id="delete__admin_mentor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|mentor account deleted successfully|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|bad request, missing or invalid mentor_id|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put__admin_mentor

> Code samples

```shell
# You can also use wget
curl -X PUT http://localhost:3000/admin/mentor \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT http://localhost:3000/admin/mentor HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "mentor_id": "require!",
  "username": "string",
  "user_email": "string",
  "profile_picture_url": "string",
  "bio": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('http://localhost:3000/admin/mentor',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'http://localhost:3000/admin/mentor',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.put('http://localhost:3000/admin/mentor', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://localhost:3000/admin/mentor', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/admin/mentor");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:3000/admin/mentor", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /admin/mentor`

*Updating mentor user profile*

Admin dapat mengubah user profile mentor. ini berlaku jika ada kesalahan data maupun lainya. data yang dapat diubah antara lain <b> [ username , user_email , profile_picture_url , bio ] </b>. <br> Perlu diingat bahwa request yang wajib ada adalah mentor_id dan salah satu di antara field yang akan di ubah

> Body parameter

```json
{
  "mentor_id": "require!",
  "username": "string",
  "user_email": "string",
  "profile_picture_url": "string",
  "bio": "string"
}
```

<h3 id="put__admin_mentor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» mentor_id|body|string|false|none|
|» username|body|string|false|none|
|» user_email|body|string|false|none|
|» profile_picture_url|body|string|false|none|
|» bio|body|string|false|none|

<h3 id="put__admin_mentor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|mentor profile updated successfully|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|bad request, missing required fields|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__admin_mentor

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/admin/mentor?mentor_id=string \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET http://localhost:3000/admin/mentor?mentor_id=string HTTP/1.1
Host: localhost:3000

```

```javascript

const headers = {
  'Authorization':'Bearer {access-token}'
};

fetch('http://localhost:3000/admin/mentor?mentor_id=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/admin/mentor',
  params: {
  'mentor_id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/admin/mentor', params={
  'mentor_id': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/admin/mentor', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/admin/mentor?mentor_id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/admin/mentor", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /admin/mentor`

*Get mentor details*

Mengambil detail mentor berdasarkan mentor_id. Hanya admin yang dapat mengakses.

<h3 id="get__admin_mentor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mentor_id|query|string|true|ID dari mentor yang ingin diambil detailnya.|

<h3 id="get__admin_mentor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Mentor details retrieved successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__admin_mentors

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/admin/mentors?max=string \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET http://localhost:3000/admin/mentors?max=string HTTP/1.1
Host: localhost:3000

```

```javascript

const headers = {
  'Authorization':'Bearer {access-token}'
};

fetch('http://localhost:3000/admin/mentors?max=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/admin/mentors',
  params: {
  'max' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/admin/mentors', params={
  'max': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/admin/mentors', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/admin/mentors?max=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/admin/mentors", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /admin/mentors`

*Get mentor details*

Mengambil detail mentor berdasarkan mentor_id. Hanya admin yang dapat mengakses.

<h3 id="get__admin_mentors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max|query|string|true|Max data yang diambil di data|
|pageof|query|string|false|Sekarang adalah page ke berapa ( dimulai dari 0 )|

<h3 id="get__admin_mentors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Mentor details retrieved successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="api-kurson-serve-mentor">Mentor</h1>

Mentor data, info, .etc

## post__mentor_class

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/mentor/class \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST http://localhost:3000/mentor/class HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "category_id": 1,
  "price": 100000,
  "duration": 36000
}';
const headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('http://localhost:3000/mentor/class',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'http://localhost:3000/mentor/class',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('http://localhost:3000/mentor/class', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/mentor/class', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/mentor/class");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/mentor/class", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /mentor/class`

*create new product ( class )*

Create New Class

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "category_id": 1,
  "price": 100000,
  "duration": 36000
}
```

<h3 id="post__mentor_class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|false|none|
|» description|body|string|false|none|
|» category_id|body|number|false|none|
|» price|body|number|false|none|
|» duration|body|number|false|none|

<h3 id="post__mentor_class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get-mentor-class

<a id="opIdget-mentor-class"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/mentor/class

```

```http
GET http://localhost:3000/mentor/class HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/mentor/class',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/mentor/class',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/mentor/class')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/mentor/class', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/mentor/class");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/mentor/class", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /mentor/class`

*Getting Data Class*

<h3 id="get-mentor-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class_id|query|string|false|Using class id for search spesific class|

<h3 id="get-mentor-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|

<aside class="success">
This operation does not require authentication
</aside>

## post__mentor_class_category

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/mentor/class/category \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST http://localhost:3000/mentor/class/category HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "slug": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('http://localhost:3000/mentor/class/category',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'http://localhost:3000/mentor/class/category',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('http://localhost:3000/mentor/class/category', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/mentor/class/category', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/mentor/class/category");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/mentor/class/category", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /mentor/class/category`

*create new category product*

Create New category

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "slug": "string"
}
```

<h3 id="post__mentor_class_category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|false|none|
|» description|body|string|false|none|
|» slug|body|string|false|none|

<h3 id="post__mentor_class_category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get-mentor-class-category-all

<a id="opIdget-mentor-class-category-all"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/mentor/class/category

```

```http
GET http://localhost:3000/mentor/class/category HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/mentor/class/category',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/mentor/class/category',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/mentor/class/category')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/mentor/class/category', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/mentor/class/category");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/mentor/class/category", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /mentor/class/category`

*Getting All Class Category*

<h3 id="get-mentor-class-category-all-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|

<aside class="success">
This operation does not require authentication
</aside>

## post-mentor-class-content

<a id="opIdpost-mentor-class-content"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/mentor/class/content \
  -H 'Content-Type: application/json'

```

```http
POST http://localhost:3000/mentor/class/content HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "class_id": "string",
  "content_type": "string",
  "content_title": "string",
  "content_dataa": "string",
  "instructor_id": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/mentor/class/content',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/mentor/class/content',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://localhost:3000/mentor/class/content', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/mentor/class/content', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/mentor/class/content");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/mentor/class/content", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /mentor/class/content`

*Creating Content in class*

> Body parameter

```json
{
  "class_id": "string",
  "content_type": "string",
  "content_title": "string",
  "content_dataa": "string",
  "instructor_id": "string"
}
```

<h3 id="post-mentor-class-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» class_id|body|string|false|none|
|» content_type|body|string|false|none|
|» content_title|body|string|false|none|
|» content_dataa|body|string|false|none|
|» instructor_id|body|string|false|none|

<h3 id="post-mentor-class-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-kurson-serve-user">User</h1>

User data, info, .etc

## get__user

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/user \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET http://localhost:3000/user HTTP/1.1
Host: localhost:3000

```

```javascript

const headers = {
  'Authorization':'Bearer {access-token}'
};

fetch('http://localhost:3000/user',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/user',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/user', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/user', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/user");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/user", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /user`

*getting info user data ( one )*

<h3 id="get__user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|unauthorize|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

