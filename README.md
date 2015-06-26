---
title: XFlagable
---

### Initialization

-   Just wrap any js object you like.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
xflabable(riot);
xflabable({});
xflabable(document);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

### Usage

1.  First create a promise of the flag.

2.  Second toggle the flag keys at some time.

3.  Last, take advantage of the callbacks.

 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var myObject = {};
xflagable(myObject);
myObject.$flag('create','myFlag',['key1','key2'],function(){
    console.log('My flag is rised!');
});
console.log('Turning key 1');
myObject.$flag('set','myFlag','key1',true);
console.log('Turning key 2');
myObject.$flag('set','myFlag','key2',true);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

 

### Api

 

+----------------------+-------------------------------+----------------------------------------------------------+---------+
| Action               | Description                   | Parameters                                               | Return  |
+----------------------+-------------------------------+----------------------------------------------------------+---------+
| create               | Creates a flag                | (action,flagName,arrayOfKeys[],callback or               | nothing |
|                      |                               | arrayOfCallbacks[])                                      |         |
+----------------------+-------------------------------+----------------------------------------------------------+---------+
| createFromArray      | Creates a flag                | (action,flagName,arrayOfObjects,propNameOfObjectInArray, | nothing |
|                      |                               | callback or arrayOfCallbacks[])                          |         |
+----------------------+-------------------------------+----------------------------------------------------------+---------+
| set                  | Setter for flag key           | (action,flagName,keyName,keyValue)                       | nothing |
+----------------------+-------------------------------+----------------------------------------------------------+---------+
| cb                   | Setter for callbacks          | (action,flagName,callback or arrayOfCallbacks[])         | nothing |
+----------------------+-------------------------------+----------------------------------------------------------+---------+
| rised or ok or ready | Getter for All Flag Keys true | (action,flagName)                                        | boolean |
+----------------------+-------------------------------+----------------------------------------------------------+---------+

 
