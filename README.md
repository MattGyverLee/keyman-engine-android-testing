# keman-engine-android-testing

## Overview
My Android app was based on KMSample2 and Keyman Engine 11, and I’m doing updates now. I tried to update to newer versions of Keyman Engine, 
but only Version 11 (with no online updates) fully worked. Secondary Keyboards don’t load properly in many cases below.

This is my minimal bug reproduction showing the problems in KMSample2 rather than my more-complex app. I have seen errors logged about "no keyboard stubs", but I'm not sure how to fix that.

## This setup is to test Globe options

I have 2 KM keyboards in a custom android app, and the user will have other input methods. I know that I can set the Globe Key action to several values (open menu, next KM keyboard, next input method, etc.)

In both KM engine 13 and 14, I can use:
GLOBE_KEY_ACTION_SHOW_MENU , GLOBE_KEY_ACTION_SWITCH_TO_NEXT_KEYBOARD , or GLOBE_KEY_ACTION_DO_NOTHING

In KMEngine 14 (see project KMSample2-14): the fourth option works well:
GLOBE_KEY_ACTION_ADVANCE_TO_NEXT_SYSTEM_KEYBOARD

In KMEngine 13 (see project KMSample2-11-13) when using GLOBE_KEY_ACTION_ADVANCE_TO_NEXT_SYSTEM_KEYBOARD, it still opens the menu, even though it has been instructed to switch to the next IME. The variable does get set, but it seems to ignore it.

In my “real” app, the user has an option to choose the keyboard, and any one user is unlikely to need both, so a simple next Input Method may be sufficient. Can you help me figure out why GLOBE_KEY_ACTION_ADVANCE_TO_NEXT_SYSTEM_KEYBOARD doesn’t work in KME 13 (KMSample2-11-13) or earlier. If it’s my mistake, great! If it is a bug, I guess you’ll have to decide whether to backport it to stable 13. I’m leaning toward submitting my next app version with 14 anyway, since everything I want works there now.

Eventually, if the user selects both KM keyboards, I may want the first KM keyboard’s globe to switch KM keyboards, and the second’s globe to switch Input methods. I have an idea how I would set up this in the KMmanager lifecycle.
