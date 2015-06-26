XFlagable
=========

 

### Description

flagable is a small tool (2.8kb) that let you crete 'flags' (who has several
boolean properties, I call it buttons). You can toggle these 'buttons' over time
from anywhere until all buttons are true and then the flag is rised, calling all
callbacks you may register with.

 

Use Examples:

\- You need to toggle something, and you require N async operations to execute
before.

\- You need to execute something that require operations from several parts of
your app, some times hard from access due to frameworks complexity.

 

 

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

 

| Action               | Description                   | Parameters                                                                               | Return  |
|----------------------|-------------------------------|------------------------------------------------------------------------------------------|---------|
| create               | Creates a flag                | (action,flagName,arrayOfKeys[],callback or arrayOfCallbacks[])                           | nothing |
| createFromArray      | Creates a flag                | (action,flagName,arrayOfObjects,propNameOfObjectInArray, callback or arrayOfCallbacks[]) | nothing |
| set                  | Setter for flag key           | (action,flagName,keyName,keyValue)                                                       | nothing |
| cb                   | Setter for callbacks          | (action,flagName,callback or arrayOfCallbacks[])                                         | nothing |
| rised or ok or ready | Getter for All Flag Keys true | (action,flagName)                                                                        | boolean |

 
