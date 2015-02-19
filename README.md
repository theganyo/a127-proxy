Example of using Apigee-127 for a simple proxy
===============================================

Usage
-----

1. Change the `proxyBase` property in the [config/default.yaml]() file to the base of your prpxy target.

2. Start the app using `a127 project start`.

3. All requests sent to this proxy will be subjected to the Volos services you place on the proxy before being
forwarded, in total (including query params, headers, and body), to the target at the same path you used in the
original request.

4. Have fun!


### Important: Do not update the npm packages. This is using a customized version of swagger-tools.
