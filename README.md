# keman-engine-android-testing

## Overview
My Android app was based on KMSample2 and Keyman Engine 11, and I’m doing updates now. I tried to update to newer versions of Keyman Engine, 
but only Version 11 (with no online updates) fully worked. Secondary Keyboards don’t load properly in many cases below.

This is my minimal bug reproduction showing the problems in KMSample2 rather than my more-complex app. I have seen errors logged about "no keyboard stubs", but I'm not sure how to fix that.

This testing procedure will require you to change or comment a couple of lines in the code for each setup:

Change line 32 in app/build.gradle to switch between the various versions of the KM Android engine.
- api `(name:'keyman-engine11', ext:'aar')`
- api `(name:'keyman-engine12', ext:'aar')`
- api `(name:'keyman-engine13', ext:'aar')`

Comment or Un-comment Line 36 in SystemKeyboard.java
- `KMManager.setShouldCheckKeyboardUpdates(false);`
- `// KMManager.setShouldCheckKeyboardUpdates(false);`

## Main Testing process for each case:
- Open the app in Android Studio (if not already open).
- Wipe the AVD's memory to insure no contamination.
- On line 32 of app/build.gradle, set the engine as directed in the test.
- Comment or un-comment the update line 36 of SystemKeyboard.java as directed.
- File>Sync Project with Gradle Files (to make sure it's using the new engine)
- Save, Build and Play in the emulator (I tested with Android 27 and 29)
- Authorize and Enable the KMSample2 keyboard.
- Close the app.
- Click on the Google bar to show the primary (Azerty) keyboard.
- Click on the Globe to switch to the Qwerty Keyboard.
- Test this Keyboard if possible.


## KMSample-11-13 Project (Hashmap versions)

### Test Case 1 - KME 11.0.2107, No Updates
- `api (name:'keyman-engine11', ext:'aar')`
- `KMManager.setShouldCheckKeyboardUpdates(false);`

Result: Works as Expected

### Test Case 2 - KME 11.0.2107, Updates
- `api (name:'keyman-engine11', ext:'aar')`
- `// KMManager.setShouldCheckKeyboardUpdates(false);`

Result: Qwerty works ONLY after Keyman checks the internet and fails. Why does it fail?

### Test Case 3 - KME 12.0.4215, No Updates
- `api (name:'keyman-engine12', ext:'aar')`
- `KMManager.setShouldCheckKeyboardUpdates(false);`

Result: Qwerty fails to load. Reverts to Primary keyboard.

### Test Case 4 - KME 12.0.4215, Updates
- `api (name:'keyman-engine12', ext:'aar')`
- `// KMManager.setShouldCheckKeyboardUpdates(false);`

Result: Qwerty fails to load. Reverts to Primary keyboard.

### Test Case 5 - KME 13.0.6060, No Updates
- `api (name:'keyman-engine13', ext:'aar')`
- `KMManager.setShouldCheckKeyboardUpdates(false);`

Result: Qwerty fails to load. Reverts to Primary keyboard.

### Test Case 6 - KME 13.0.6060, Updates
- `api (name:'keyman-engine13', ext:'aar')`
- `// KMManager.setShouldCheckKeyboardUpdates(false);`

Result: Qwerty fails to load. Reverts to Primary keyboard.

### Test Case 7 - Swap Primary Keyboard.
Go to line 179 of SystemKeyboard.java and replace
`int kbIndex = KMManager.getKeyboardIndex(this, "sil_cameroon_azerty", "ewo");`
with
`int kbIndex = KMManager.getKeyboardIndex(this, "sil_cameroon_qwerty", "ewo");`

Repeat testing.

Result: The Qwerty loads properly, but the non-primary keyboard (Azerty) won't load.
This seems to show that the issue is not with the Azerty Keyboard, but with the switching to any secondary.
 
## Project KMSample-14 with the new Keyboard Object.

### Test 8
Install KMSample-14 app in Android Studio and complete the same tests.

Result: Both keyboards show, swap, and work using KME 14, but I can’t figure out what directory should hold the font.

## Sidenote:
The version of app/build.gradle that ships with each engine is not readily buildable, as it expects a version.gradle file that doesn't exist in the zip.
One must set a version name, number, and several other variables manually to be able to build.
