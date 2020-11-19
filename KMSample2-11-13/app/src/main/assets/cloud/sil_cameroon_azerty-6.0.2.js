if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_sil_cameroon_azerty());
}
function Keyboard_sil_cameroon_azerty()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this.KI="Keyboard_sil_cameroon_azerty";
  this.KN="Cameroon AZERTY";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Andika Afr"',K102:1};
  this.KV.KLS={
    "rightalt": ["²","¹","","%","{","[","|","◌̀","\\","^","@","]","}","","","","ɛ","…","ə","◌","œ","ƴ","ʉ","ɨ","ɔ","ø","","◌̄","*","","","","—","“","ɗ","æ","ʼ","α","←","↓","→","ù","◌᷅","","","","","","«","ẅ","‹","◌̧","ꞌ","ɓ","ŋ","","´","◌̣","!","","","","","",""],
    "rightalt-shift": ["³","‘","’","«","»","#","◌̈","","◌⃖","","","","±","","","","Ɛ","†","Ə","®","Œ","Ƴ","Ʉ","Ɨ","Ɔ","Ø","","◌̍","¤","","","","–","”","Ɗ","Æ","Ꞌ","Ɑ","™","↑","£","µ","◌᷄","","","","","","»","Ẅ","›","©","Ꞌ","Ɓ","Ŋ","×","","","","","","","","",""],
    "leftctrl": ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""," "],
    "default": ["$","&","é","\"","'","(","-","è","_","ç","à",")","","","","","a","z","e","r","t","y","u","i","o","p","◌́","◌̰","◌᷆","","","","q","s","d","f","g","h","j","k","l","m","◌̀","","","","","","<","w","x","c","v","b","n",",",";",":","CM","","","","","",""],
    "shift": ["€","1","2","3","4","5","6","7","8","9","0","°","+","","","","A","Z","E","R","T","Y","U","I","O","P","◌̌","◌̃","◌᷇","","","","Q","S","D","F","G","H","J","K","L","M","◌̂","","","","","",">","W","X","C","V","B","N","?",".","/","§","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH="Use the Cameroon key to access special characters.";
  this.KM=0;
  this.KBVER="6.0.2";
  this.KMBM=modCodes.LCTRL | modCodes.RCTRL | modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.NO_CAPS /* 0x031B */;
  this.KVKD="T_0030 T_0031 T_0032 T_0033 T_0034 T_0035 T_0036 T_0037 T_0038 T_0039 T_002C T_003F T_002E T_003B T_003A T_0021 T_CAM T_FCFA T_UPPER T_0300 T_0301 T_0302 T_0303 T_0304 T_0308 T_030C T_030D T_0327 T_0330 T_03B1 T_1DC4 T_1DC5 T_1DC6 T_1DC7";
  this.KVKL={
  "tablet": {
    "font": "Andika Afr",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "T_0300",
                "text": "\u25CC\u0300"
              },
              {
                "id": "T_0304",
                "text": "\u25CC\u0304"
              },
              {
                "id": "T_0301",
                "text": "\u25CC\u0301"
              },
              {
                "id": "T_030C",
                "text": "\u25CC\u030C"
              },
              {
                "id": "T_0302",
                "text": "\u25CC\u0302"
              },
              {
                "id": "T_0303",
                "text": "\u25CC\u0303"
              },
              {
                "id": "T_0308",
                "text": "\u25CC\u0308"
              },
              {
                "id": "T_0327",
                "text": "\u25CC\u0327"
              },
              {
                "id": "U_002D",
                "text": "-",
                "sk": [
                  {
                    "id": "U_005F",
                    "text": "_"
                  }
                ]
              },
              {
                "id": "T_0021",
                "text": "!"
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "text": "a",
                "sk": [
                  {
                    "id": "U_025B",
                    "text": "\u025B"
                  }
                ]
              },
              {
                "id": "K_W",
                "text": "z"
              },
              {
                "id": "K_E",
                "text": "e",
                "sk": [
                  {
                    "id": "U_0259",
                    "text": "\u0259"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t",
                "sk": [
                  {
                    "id": "U_0153",
                    "text": "\u0153"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "y",
                "sk": [
                  {
                    "id": "U_01B4",
                    "text": "\u01B4"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "u",
                "sk": [
                  {
                    "id": "U_0289",
                    "text": "\u0289"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "id": "U_0268",
                    "text": "\u0268"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "id": "U_0254",
                    "text": "\u0254"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_P",
                "text": "p",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00F8",
                    "text": "\u00F8"
                  }
                ]
              },
              {
                "id": "U_0027",
                "text": "'"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_A",
                "text": "q"
              },
              {
                "id": "K_S",
                "text": "s"
              },
              {
                "id": "K_D",
                "text": "d",
                "sk": [
                  {
                    "id": "U_0257",
                    "text": "\u0257"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "f",
                "sk": [
                  {
                    "id": "U_00E6",
                    "text": "\u00E6"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "g",
                "sk": [
                  {
                    "id": "U_02BC",
                    "text": "\u02BC"
                  }
                ]
              },
              {
                "id": "K_H",
                "text": "h",
                "sk": [
                  {
                    "id": "U_03B1",
                    "text": "\u03B1"
                  }
                ]
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "id": "K_COLON",
                "text": "m"
              },
              {
                "id": "U_0040",
                "text": "@"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "shift",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shifted*"
              },
              {
                "id": "K_Z",
                "text": "w",
                "sk": [
                  {
                    "id": "U_1E85",
                    "text": "\u1E85"
                  }
                ]
              },
              {
                "id": "K_X",
                "text": "x"
              },
              {
                "id": "K_C",
                "text": "c"
              },
              {
                "id": "K_V",
                "text": "v",
                "sk": [
                  {
                    "id": "U_A78C",
                    "text": "\uA78C"
                  }
                ]
              },
              {
                "id": "K_B",
                "text": "b",
                "sk": [
                  {
                    "id": "U_0253",
                    "text": "\u0253"
                  }
                ]
              },
              {
                "id": "K_N",
                "text": "n",
                "sk": [
                  {
                    "id": "U_014B",
                    "text": "\u014B"
                  }
                ]
              },
              {
                "id": "T_003F",
                "text": "?"
              },
              {
                "id": "T_002C",
                "text": ","
              },
              {
                "id": "T_002E",
                "text": "."
              },
              {
                "nextlayer": "shift",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "symbol",
                "id": "K_SYMBOLS",
                "sp": "1",
                "text": "*Symbol*"
              },
              {
                "width": "100",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "625",
                "id": "K_SPACE",
                "text": " "
              },
              {
                "nextlayer": "rightalt-nocaps",
                "fontsize": ".8em",
                "width": "150",
                "id": "T_CAM",
                "sp": "8",
                "text": "\u0259\u014B\u0254"
              },
              {
                "width": "155",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "T_1DC5",
                "text": "\u25CC\u1DC5"
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "T_1DC6",
                "text": "\u25CC\u1DC6"
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "T_1DC7",
                "text": "\u25CC\u1DC7"
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "T_1DC4",
                "text": "\u25CC\u1DC4"
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "T_030D",
                "text": "\u25CC\u030D"
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "T_0330",
                "text": "\u25CC\u0330"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10",
                "text": " "
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "U_005F",
                "text": "_"
              },
              {
                "sp": "10"
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_Q",
                "text": "A",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_0190",
                    "text": "\u0190"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_W",
                "text": "Z"
              },
              {
                "nextlayer": "default",
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "nextlayer": "default",
                    "layer": "default",
                    "id": "U_018F",
                    "text": "\u018F"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_R",
                "text": "R"
              },
              {
                "nextlayer": "default",
                "id": "K_T",
                "text": "T",
                "sk": [
                  {
                    "nextlayer": "default",
                    "layer": "default",
                    "id": "U_0152",
                    "text": "\u0152"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_Y",
                "text": "Y",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_01B3",
                    "text": "\u01B3"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_U",
                "text": "U",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_0244",
                    "text": "\u0244"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_I",
                "text": "I",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_0197",
                    "text": "\u0197"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_0186",
                    "text": "\u0186"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_P",
                "text": "P",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00D8",
                    "text": "\u00D8"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "U_0022",
                "text": "\""
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_A",
                "text": "Q"
              },
              {
                "nextlayer": "default",
                "id": "K_S",
                "text": "S"
              },
              {
                "nextlayer": "default",
                "id": "K_D",
                "text": "D",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_018A",
                    "text": "\u018A"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_F",
                "text": "F",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00C6",
                    "text": "\u00C6"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_G",
                "text": "G",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_A78B",
                    "text": "\uA78B"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_H",
                "text": "H",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_2C6D",
                    "text": "\u2C6D"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_J",
                "text": "J"
              },
              {
                "nextlayer": "default",
                "id": "K_K",
                "text": "K"
              },
              {
                "nextlayer": "default",
                "id": "K_L",
                "text": "L"
              },
              {
                "nextlayer": "default",
                "id": "K_COLON",
                "text": "M"
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "U_0023",
                "text": "#"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "nextlayer": "default",
                "id": "K_Z",
                "text": "W",
                "sk": [
                  {
                    "nextlayer": "default",
                    "layer": "default",
                    "id": "U_1E84",
                    "text": "\u1E84"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_X",
                "text": "X"
              },
              {
                "nextlayer": "default",
                "id": "K_C",
                "text": "C"
              },
              {
                "nextlayer": "default",
                "id": "K_V",
                "text": "V",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_A78B",
                    "text": "\uA78B"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_B",
                "text": "B",
                "sk": [
                  {
                    "layer": "default",
                    "id": "U_0181",
                    "text": "\u0181"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "K_N",
                "text": "N",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_014A",
                    "text": "\u014A"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "T_003F",
                "text": "?",
                "sk": [
                  {
                    "nextlayer": "default",
                    "layer": "default",
                    "id": "U_00BF",
                    "text": "\u00BF"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "T_003B",
                "text": ";"
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "T_003A",
                "text": ":"
              },
              {
                "nextlayer": "default",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "symbol",
                "id": "K_SYMBOLS",
                "sp": "1",
                "text": "*Symbol*"
              },
              {
                "width": "100",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "layer": "default",
                "width": "625",
                "id": "K_SPACE",
                "text": " "
              },
              {
                "nextlayer": "rightalt-shift-nocaps",
                "fontsize": ".8em",
                "width": "150",
                "id": "T_CAM",
                "sp": "8",
                "text": "\u018F\u014A\u0186"
              },
              {
                "width": "155",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "symbol",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "T_0031",
                "text": "1"
              },
              {
                "id": "T_0032",
                "text": "2"
              },
              {
                "id": "T_0033",
                "text": "3"
              },
              {
                "id": "T_0034",
                "text": "4"
              },
              {
                "id": "T_0035",
                "text": "5"
              },
              {
                "id": "T_0036",
                "text": "6"
              },
              {
                "id": "T_0037",
                "text": "7"
              },
              {
                "id": "T_0038",
                "text": "8"
              },
              {
                "id": "T_0039",
                "text": "9"
              },
              {
                "id": "T_0030",
                "text": "0"
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_002A",
                "text": "*"
              },
              {
                "id": "U_0023",
                "text": "#"
              },
              {
                "id": "U_0025",
                "text": "%"
              },
              {
                "nextlayer": "default",
                "id": "U_005F",
                "text": "_"
              },
              {
                "nextlayer": "default",
                "id": "U_0026",
                "text": "&"
              },
              {
                "id": "U_002D",
                "text": "-"
              },
              {
                "id": "U_002B",
                "text": "+"
              },
              {
                "id": "U_0028",
                "text": "(",
                "sk": [
                  {
                    "id": "U_005B",
                    "text": "["
                  },
                  {
                    "id": "U_007B",
                    "text": "{"
                  }
                ]
              },
              {
                "id": "U_0029",
                "text": ")",
                "sk": [
                  {
                    "id": "U_005D",
                    "text": "]"
                  },
                  {
                    "id": "U_007D",
                    "text": "}"
                  }
                ]
              },
              {
                "id": "U_003C",
                "text": "<"
              },
              {
                "id": "U_003E",
                "text": ">"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "id": "U_0040",
                "text": "@"
              },
              {
                "nextlayer": "default",
                "id": "U_0022",
                "text": "\"",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_201C",
                    "text": "\u201C"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_201D",
                    "text": "\u201D"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "U_0027",
                "text": "'",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_2018",
                    "text": "\u2018"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_2019",
                    "text": "\u2019"
                  }
                ]
              },
              {
                "layer": "default",
                "id": "T_003A",
                "text": ":"
              },
              {
                "layer": "default",
                "id": "T_003B",
                "text": ";"
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "T_0021",
                "text": "!",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00A1",
                    "text": "\u00A1"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "id": "T_003F",
                "text": "?",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00BF",
                    "text": "\u00BF"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "U_00AB",
                "text": "\u00AB",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_2039",
                    "text": "\u2039"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "U_00BB",
                "text": "\u00BB",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_203A",
                    "text": "\u203A"
                  }
                ]
              },
              {
                "id": "U_003D",
                "text": "="
              },
              {
                "nextlayer": "default",
                "id": "U_007C",
                "text": "|"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "U_007E",
                "text": "~"
              },
              {
                "nextlayer": "default",
                "id": "U_00A9",
                "text": "\u00A9",
                "sk": [
                  {
                    "id": "U_00AE",
                    "text": "\u00AE"
                  },
                  {
                    "id": "U_2122",
                    "text": "\u2122"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "id": "U_002F",
                "text": "/"
              },
              {
                "nextlayer": "default",
                "id": "U_005C",
                "text": "\\"
              },
              {
                "layer": "default",
                "id": "T_002C",
                "text": ","
              },
              {
                "id": "U_0024",
                "text": "$"
              },
              {
                "id": "U_20AC",
                "text": "\u20AC"
              },
              {
                "id": "U_00A3",
                "text": "\u00A3"
              },
              {
                "id": "U_00A5",
                "text": "\u00A5"
              },
              {
                "width": "205",
                "id": "T_FCFA",
                "text": "FCFA"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_LOWER",
                "sp": "2",
                "text": "*abc*"
              },
              {
                "width": "100",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "layer": "default",
                "width": "625",
                "id": "K_SPACE"
              },
              {
                "layer": "default",
                "width": "150",
                "id": "T_002E",
                "text": "."
              },
              {
                "width": "155",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "rightalt-nocaps",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "layer": "default",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_Q",
                "text": "\u025B"
              },
              {
                "sp": "10"
              },
              {
                "nextlayer": "default",
                "id": "K_E",
                "text": "\u0259"
              },
              {
                "sp": "10"
              },
              {
                "nextlayer": "default",
                "id": "K_T",
                "text": "\u0153"
              },
              {
                "nextlayer": "default",
                "id": "K_Y",
                "text": "\u01B4"
              },
              {
                "nextlayer": "default",
                "id": "K_U",
                "text": "\u0289"
              },
              {
                "nextlayer": "default",
                "id": "K_I",
                "text": "\u0268"
              },
              {
                "nextlayer": "default",
                "id": "K_O",
                "text": "\u0254"
              },
              {
                "nextlayer": "default",
                "id": "K_P",
                "text": "\u00F8"
              },
              {
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "nextlayer": "default",
                "id": "K_D",
                "text": "\u0257"
              },
              {
                "nextlayer": "default",
                "id": "K_F",
                "text": "\u00E6"
              },
              {
                "nextlayer": "default",
                "id": "K_G",
                "text": "\u02BC"
              },
              {
                "nextlayer": "default",
                "id": "K_H",
                "text": "\u03B1"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "rightalt-shift-nocaps",
                "layer": "default",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shifted*"
              },
              {
                "nextlayer": "default",
                "id": "K_Z",
                "text": "\u1E85"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "nextlayer": "default",
                "id": "K_V",
                "text": "\uA78C"
              },
              {
                "nextlayer": "default",
                "id": "K_B",
                "text": "\u0253"
              },
              {
                "nextlayer": "default",
                "id": "K_N",
                "text": "\u014B"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "nextlayer": "rightalt-shift-nocaps",
                "layer": "default",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "symbol",
                "layer": "default",
                "id": "K_SYMBOLS",
                "sp": "1",
                "text": "*Symbol*"
              },
              {
                "layer": "default",
                "width": "100",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "layer": "default",
                "width": "625",
                "id": "K_SPACE",
                "text": " "
              },
              {
                "nextlayer": "default",
                "layer": "default",
                "width": "150",
                "id": "K_LOWER",
                "sp": "2",
                "text": "abc"
              },
              {
                "layer": "default",
                "width": "155",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "rightalt-shift-nocaps",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "layer": "default",
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "layer": "default",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_Q",
                "text": "\u0190"
              },
              {
                "sp": "10"
              },
              {
                "nextlayer": "default",
                "id": "K_E",
                "text": "\u018F"
              },
              {
                "sp": "10"
              },
              {
                "nextlayer": "default",
                "id": "K_T",
                "text": "\u0152"
              },
              {
                "nextlayer": "default",
                "id": "K_Y",
                "text": "\u01B3"
              },
              {
                "nextlayer": "default",
                "id": "K_U",
                "text": "\u0244"
              },
              {
                "nextlayer": "default",
                "id": "K_I",
                "text": "\u0197"
              },
              {
                "nextlayer": "default",
                "id": "K_O",
                "text": "\u0186"
              },
              {
                "nextlayer": "default",
                "id": "K_P",
                "text": "\u00D8"
              },
              {
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "nextlayer": "default",
                "id": "K_D",
                "text": "\u018A"
              },
              {
                "nextlayer": "default",
                "id": "K_F",
                "text": "\u00C6"
              },
              {
                "sp": "10"
              },
              {
                "nextlayer": "default",
                "id": "K_H",
                "text": "\u2C6D"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "rightalt-nocaps",
                "layer": "default",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shifted*"
              },
              {
                "nextlayer": "default",
                "id": "K_Z",
                "text": "\u1E84"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "nextlayer": "default",
                "id": "K_V",
                "text": "\uA78B"
              },
              {
                "nextlayer": "default",
                "id": "K_B",
                "text": "\u0181"
              },
              {
                "nextlayer": "default",
                "id": "K_N",
                "text": "\u014A"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "sp": "10"
              },
              {
                "nextlayer": "rightalt-nocaps",
                "layer": "default",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "symbol",
                "layer": "default",
                "id": "K_SYMBOLS",
                "sp": "1",
                "text": "*Symbol*"
              },
              {
                "layer": "default",
                "width": "100",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "layer": "default",
                "width": "625",
                "id": "K_SPACE",
                "text": " "
              },
              {
                "nextlayer": "shift",
                "layer": "default",
                "width": "150",
                "id": "T_UPPER",
                "sp": "2",
                "text": "ABC"
              },
              {
                "layer": "default",
                "width": "155",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.KCSS="/***\n    Cameroon Azerty CSS\n    Copyright 2017 SIL International\n ***/\n \n  \n .phone.android .kmw-key.kmw-key-deadkey {background: #8c4646; color:#0F0;background:linear-gradient(to right, darkgreen 33%, darkred 33% , darkred 66%, #aaaa00 66%);border:2px solid #FFFFFF;} \n .phone.ios .kmw-key.kmw-key-deadkey {background: #8c4646; color:#0F0;background:linear-gradient(to right, darkgreen 33%, darkred 33% , darkred 66%, #aaaa00 66%);border:2px solid #FFFFFF;}\n .tablet.android .kmw-key.kmw-key-deadkey {background: #8c4646; color:#0F0;background:linear-gradient(to right, darkgreen 33%, darkred 33% , darkred 66%, #aaaa00 66%);border:2px solid #FFFFFF;} \n .tablet.ios .kmw-key.kmw-key-deadkey {background: #8c4646; color:#0F0;background:linear-gradient(to right, darkgreen 33%, darkred 33% , darkred 66%, #aaaa00 66%);border:2px solid #FFFFFF;} \n          \n \n /* Common key appearance styles (can override with form-factor styles if necessary) */\n .kmw-key-default{color:#000;background-color:#eee;}\n .kmw-key-shift{color:#aaa;background-color:#ddd;}     /*color was #88f (blue) */\n .kmw-key-shift-on{color:#88f;background-color:#ccf;}\n /* .kmw-key-deadkey{color:#0d0;background-color:#eee;}  */\n .kmw-key-deadkey{background: #8c4646; color:#0F0; background:linear-gradient(to right, darkgreen 33%, darkred 33% , darkred 66%, #aaaa00 66%);border:2px solid #FFFFFF;}\n .kmw-key-blank{color:#000;background-color:rgba(100,100,100,0.5);}\n .kmw-key-hidden{visibility:hidden;}\n .kmw-key-touched{background-color:#88f;}  \n \n /* Green Diacritics */\n .ios #default-T_0300,\n .ios #default-T_0304,\n .ios #default-T_0301,\n .ios #default-T_030C,\n .ios #default-T_0302,\n .ios #default-T_0303,\n .ios #default-T_0308,\n .ios #default-T_0327,\n .ios #shift-T_1DC5,\n .ios #shift-T_1DC6,\n .ios #shift-T_1DC7,\n .ios #shift-T_1DC4,\n .ios #shift-T_030D,\n .ios #shift-T_0330 { background: #598059; background: linear-gradient(#ffffff, #598059); }\n .android #default-T_0300,\n .android #default-T_0304,\n .android #default-T_0301,\n .android #default-T_030C,\n .android #default-T_0302,\n .android #default-T_0303,\n .android #default-T_0308,\n .android #default-T_0327,\n .android #shift-T_1DC5,\n .android #shift-T_1DC6,\n .android #shift-T_1DC7,\n .android #shift-T_1DC4,\n .android #shift-T_030D,\n .android #shift-T_0330 { background: #598059; background: linear-gradient(#7f7f7f, #598059); }\n /* #7f7f7f is 50% Grey, #598059 is 30% Green */\n /* #abab78 is 30% of #aaaa00 yellow */\n \n ";
  this.s_word=" aæɛbɓcdɗeəfgʼꞌhiɨjklmnŋoɔøœpqrstuʉvwẅxyƴzAÆƐBƁCDƊEƏFGʼꞋHIƗJKLMNŊOƆØŒPQRSTUɄVWẄXYƳZ◌-'̧̀̄́̌̂̃̈α̰̍";
  this.s_letter="aæɛbɓcdɗeəfgʼꞌhiɨjklmnŋoɔøœpqrstuʉvwẅxyƴzAÆƐBƁCDƊEƏFGʼꞋHIƗJKLMNŊOƆØŒPQRSTUɄVWẄXYƳZ◌";
  this.s_lc="aæɛbɓcdɗeəfgʼꞌhiɨjklmnŋoɔøœpqrstuʉvwẅxyƴz◌";
  this.s_uc="AÆƐBƁCDƊEƏFGʼꞋHIƗJKLMNŊOƆØŒPQRSTUɄVWẄXYƳZ◌";
  this.s_nfpunct="',:;";
  this.s_final="!?.";
  this.s_num="0123456789";
  this.s_diablock=" 0123456789?!;:'-_=<©®>.,[]{}\\\\/@°#$%^&*()«»‹›‘“’”€¥£èéçàùµ…†\"|";
  this.s_dia="̧̀̄́̌̂̃̈α̰̍";
  this.s_dkf007e=" aAnNoO";
  this.s_dkt007e="~ãÃñÑõÕ";
  this.s_dkf003d=" ̧̀̃̄̍̂́";
  this.s_dkt003d="=ˋ¸~ˉˈˆˊ";
  this.s_dkf00b4=[" ","E",{t:'d',d:0}];
  this.s_dkt00b4="´É´";
  this.s_dkf0060=" aAeEiIoOuU";
  this.s_dkt0060="`àÀèÈìÌòÒùÙ";
  this.s_dkf005e=" aAeEiIoOuU";
  this.s_dkt005e="^âÂêÊîÎôÔûÛ";
  this.s_dkf00a8=" aAeEiIoOuUy";
  this.s_dkt00a8="¨äÄëËïÏöÖüÜÿ";
  this.s_dkf0021=[" ","$","&","'","(",")","+","-","0","1","2","5","6","8",":","<","=",">","?","A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","m","n","o","p","q","r","s","t","u","v","w","x","y","z","à","̀","́","̂","̃","̰","᷇","᷆","€","3","4","\"","_","°",",",{t:'d',d:1},"/","j","k","K","l"];
  this.s_dkt0021=["!","²","¹","{","[","]","±","|","⃗","‘","’","#","̈","⃖","̣","«","}","»","×","Ɛ","Ɓ","©","Ɗ","Ə","Æ","Ꞌ","Ɑ","Ɨ","™","£","µ","Ŋ","Ɔ","Ø","–","®","”","Œ","Ʉ","Ꞌ","Ẅ","›","Ƴ","†","ɛ","ɓ","̧","ɗ","ə","æ","ʼ","α","ɨ","ù","ŋ","ɔ","ø","—","◌","“","œ","ʉ","ꞌ","ẅ","‹","ƴ","…","@","᷅","^","᷄","̍","̄","¤","*","³","«","»","%","\\",{t:'b'},{t:'b'},"}",{t:'b'},"←","↓","↑","→"];
  this.s39="touch";
  this.s40="shift";
  this.s41="touch";
  this.s42="shift";
  this.s43="default";
  this.KVER="13.0.115.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_6 /* 0x36 */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 105
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"̈");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_6 /* 0x36 */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 106
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"̈");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_C /* 0x43 */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 164
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"̧");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_C /* 0x43 */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 165
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 161
        k.KDC(0,t);
        k.KO(-1,t,"̧");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 423
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 415
        k.KDC(0,t);
        k.KO(-1,t,"̣");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 424
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 419
        k.KDC(0,t);
        k.KO(-1,t,"̣");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 481
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 473
        k.KDC(0,t);
        k.KO(-1,t,"̄");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 483
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 474
        k.KDC(0,t);
        k.KO(-1,t,"̍");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 485
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 477
        k.KDC(0,t);
        k.KO(-1,t,"̄");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 487
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 479
        k.KDC(0,t);
        k.KO(-1,t,"̍");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 498
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 490
        k.KDC(0,t);
        k.KO(-1,t,"᷅");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 500
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 492
        k.KDC(0,t);
        k.KO(-1,t,"᷄");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 502
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 494
        k.KDC(0,t);
        k.KO(-1,t,"᷅");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 504
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 496
        k.KDC(0,t);
        k.KO(-1,t,"᷄");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x113)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 520
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 521
        k.KDC(0,t);
        k.KO(-1,t,"̀");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x114)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 522
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 523
        k.KDC(0,t);
        k.KO(-1,t,"́");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x115)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 524
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 525
        k.KDC(0,t);
        k.KO(-1,t,"̂");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x116)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 526
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 527
        k.KDC(0,t);
        k.KO(-1,t,"̃");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x117)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 528
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 529
        k.KDC(0,t);
        k.KO(-1,t,"̄");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x118)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 530
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 531
        k.KDC(0,t);
        k.KO(-1,t,"̈");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x119)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 532
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 533
        k.KDC(0,t);
        k.KO(-1,t,"̌");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11A)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 534
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 535
        k.KDC(0,t);
        k.KO(-1,t,"̍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11B)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 536
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 537
        k.KDC(0,t);
        k.KO(-1,t,"̧");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11C)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 538
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 539
        k.KDC(0,t);
        k.KO(-1,t,"̰");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11D)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 540
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 541
        k.KDC(0,t);
        k.KO(-1,t,"α");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11E)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 542
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 543
        k.KDC(0,t);
        k.KO(-1,t,"᷄");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11F)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 544
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 545
        k.KDC(0,t);
        k.KO(-1,t,"᷅");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x120)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 546
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 547
        k.KDC(0,t);
        k.KO(-1,t,"᷆");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x121)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 548
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 549
        k.KDC(0,t);
        k.KO(-1,t,"᷇");
      }
    }
    else if(k.KKM(e, modCodes.LCTRL | modCodes.VIRTUAL_KEY /* 0x4001 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.RCTRL | modCodes.VIRTUAL_KEY /* 0x4002 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x100)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"‘");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"¹");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"¹");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"‘");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x101)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"’");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KDO(-1,t,2);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KDO(-1,t,2);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"’");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x102)) {
      if(1){
        r=m=1;   // Line 64
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"«");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"«");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x103)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"»");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KO(-1,t,"»");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x104)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x105)) {
      if(1){
        r=m=1;   // Line 94
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x106)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KDO(-1,t,3);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 113
        k.KDC(0,t);
        k.KDO(-1,t,3);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 115
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x107)) {
      if(1){
        r=m=1;   // Line 116
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 119
        k.KDC(0,t);
        k.KO(-1,t,"⃖");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 120
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 123
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 125
        k.KDC(0,t);
        k.KO(-1,t,"⃖");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x108)) {
      if(1){
        r=m=1;   // Line 126
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 129
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 130
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 133
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 135
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x109)) {
      if(1){
        r=m=1;   // Line 136
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 139
        k.KDC(0,t);
        k.KO(-1,t,"Ɛ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 141
        k.KDC(0,t);
        k.KO(-1,t,"ɛ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 143
        k.KDC(0,t);
        k.KO(-1,t,"ɛ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        k.KO(-1,t,"Ɛ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"ɓ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"ɓ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 153
        k.KDC(0,t);
        k.KO(-1,t,"Ɓ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 154
        k.KDC(0,t);
        k.KO(-1,t,"Ɓ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 157
        k.KDC(0,t);
        k.KO(-1,t,"©");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 163
        k.KDC(0,t);
        k.KO(-1,t,"©");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 171
        k.KDC(0,t);
        k.KO(-1,t,"ɗ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 172
        k.KDC(0,t);
        k.KO(-1,t,"ɗ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 173
        k.KDC(0,t);
        k.KO(-1,t,"Ɗ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 174
        k.KDC(0,t);
        k.KO(-1,t,"Ɗ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 180
        k.KDC(0,t);
        k.KO(-1,t,"ə");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 181
        k.KDC(0,t);
        k.KO(-1,t,"ə");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 182
        k.KDC(0,t);
        k.KO(-1,t,"Ə");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 183
        k.KDC(0,t);
        k.KO(-1,t,"Ə");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"Æ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 190
        k.KDC(0,t);
        k.KO(-1,t,"Æ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KO(-1,t,"æ");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"æ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 198
        k.KDC(0,t);
        k.KO(-1,t,"ʼ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 199
        k.KDC(0,t);
        k.KO(-1,t,"ʼ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 200
        k.KDC(0,t);
        k.KO(-1,t,"Ꞌ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 201
        k.KDC(0,t);
        k.KO(-1,t,"Ꞌ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 207
        k.KDC(0,t);
        k.KO(-1,t,"α");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 208
        k.KDC(0,t);
        k.KO(-1,t,"α");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 209
        k.KDC(0,t);
        k.KO(-1,t,"Ɑ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 210
        k.KDC(0,t);
        k.KO(-1,t,"Ɑ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 216
        k.KDC(0,t);
        k.KO(-1,t,"Ɨ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 217
        k.KDC(0,t);
        k.KO(-1,t,"Ɨ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 218
        k.KDC(0,t);
        k.KO(-1,t,"ɨ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 219
        k.KDC(0,t);
        k.KO(-1,t,"ɨ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 225
        k.KDC(0,t);
        k.KO(-1,t,"™");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 226
        k.KDC(0,t);
        k.KO(-1,t,"™");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 227
        k.KDC(0,t);
        k.KO(-1,t,"←");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 228
        k.KDC(0,t);
        k.KO(-1,t,"←");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 234
        k.KDC(0,t);
        k.KO(-1,t,"↑");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 235
        k.KDC(0,t);
        k.KO(-1,t,"↓");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 236
        k.KDC(0,t);
        k.KO(-1,t,"↓");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 237
        k.KDC(0,t);
        k.KO(-1,t,"↑");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 243
        k.KDC(0,t);
        k.KO(-1,t,"£");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 244
        k.KDC(0,t);
        k.KO(-1,t,"£");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 245
        k.KDC(0,t);
        k.KO(-1,t,"→");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 246
        k.KDC(0,t);
        k.KO(-1,t,"→");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 252
        k.KDC(0,t);
        k.KO(-1,t,"µ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 253
        k.KDC(0,t);
        k.KO(-1,t,"µ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 254
        k.KDC(0,t);
        k.KO(-1,t,"ù");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 255
        k.KDC(0,t);
        k.KO(-1,t,"ù");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 261
        k.KDC(0,t);
        k.KO(-1,t,"ŋ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 262
        k.KDC(0,t);
        k.KO(-1,t,"ŋ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 263
        k.KDC(0,t);
        k.KO(-1,t,"Ŋ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 264
        k.KDC(0,t);
        k.KO(-1,t,"Ŋ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 270
        k.KDC(0,t);
        k.KO(-1,t,"ɔ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 271
        k.KDC(0,t);
        k.KO(-1,t,"ɔ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 272
        k.KDC(0,t);
        k.KO(-1,t,"Ɔ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 273
        k.KDC(0,t);
        k.KO(-1,t,"Ɔ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 279
        k.KDC(0,t);
        k.KO(-1,t,"Ø");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 280
        k.KDC(0,t);
        k.KO(-1,t,"Ø");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 281
        k.KDC(0,t);
        k.KO(-1,t,"ø");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 282
        k.KDC(0,t);
        k.KO(-1,t,"ø");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 288
        k.KDC(0,t);
        k.KO(-1,t,"—");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 289
        k.KDC(0,t);
        k.KO(-1,t,"—");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 290
        k.KDC(0,t);
        k.KO(-1,t,"–");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 291
        k.KDC(0,t);
        k.KO(-1,t,"–");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 297
        k.KDC(0,t);
        k.KO(-1,t,"®");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 298
        k.KDC(0,t);
        k.KO(-1,t,"®");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 299
        k.KDC(0,t);
        k.KO(-1,t,"◌");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 300
        k.KDC(0,t);
        k.KO(-1,t,"◌");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 306
        k.KDC(0,t);
        k.KO(-1,t,"“");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 307
        k.KDC(0,t);
        k.KO(-1,t,"“");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 308
        k.KDC(0,t);
        k.KO(-1,t,"”");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 309
        k.KDC(0,t);
        k.KO(-1,t,"”");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 315
        k.KDC(0,t);
        k.KO(-1,t,"œ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 316
        k.KDC(0,t);
        k.KO(-1,t,"œ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 317
        k.KDC(0,t);
        k.KO(-1,t,"Œ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 318
        k.KDC(0,t);
        k.KO(-1,t,"Œ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 324
        k.KDC(0,t);
        k.KO(-1,t,"ʉ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 325
        k.KDC(0,t);
        k.KO(-1,t,"ʉ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 326
        k.KDC(0,t);
        k.KO(-1,t,"Ʉ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 327
        k.KDC(0,t);
        k.KO(-1,t,"Ʉ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 333
        k.KDC(0,t);
        k.KO(-1,t,"ꞌ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 334
        k.KDC(0,t);
        k.KO(-1,t,"ꞌ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 335
        k.KDC(0,t);
        k.KO(-1,t,"Ꞌ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 336
        k.KDC(0,t);
        k.KO(-1,t,"Ꞌ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 342
        k.KDC(0,t);
        k.KO(-1,t,"ẅ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 343
        k.KDC(0,t);
        k.KO(-1,t,"ẅ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 344
        k.KDC(0,t);
        k.KO(-1,t,"Ẅ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 345
        k.KDC(0,t);
        k.KO(-1,t,"Ẅ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 351
        k.KDC(0,t);
        k.KO(-1,t,"›");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 352
        k.KDC(0,t);
        k.KO(-1,t,"›");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 353
        k.KDC(0,t);
        k.KO(-1,t,"‹");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 354
        k.KDC(0,t);
        k.KO(-1,t,"‹");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 360
        k.KDC(0,t);
        k.KO(-1,t,"ƴ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 361
        k.KDC(0,t);
        k.KO(-1,t,"ƴ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 362
        k.KDC(0,t);
        k.KO(-1,t,"Ƴ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 363
        k.KDC(0,t);
        k.KO(-1,t,"Ƴ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 369
        k.KDC(0,t);
        k.KO(-1,t,"…");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 370
        k.KDC(0,t);
        k.KO(-1,t,"…");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 371
        k.KDC(0,t);
        k.KO(-1,t,"†");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 372
        k.KDC(0,t);
        k.KO(-1,t,"†");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 375
        k.KDC(0,t);
        k.KO(-1,t,"×");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 377
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 379
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 381
        k.KDC(0,t);
        k.KO(-1,t,"×");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10A)) {
      if(1){
        r=m=1;   // Line 382
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10B)) {
      if(1){
        r=m=1;   // Line 383
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 386
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 388
        k.KDC(0,t);
        k.KO(-1,t,"±");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 390
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 392
        k.KDC(0,t);
        k.KO(-1,t,"±");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 395
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 397
        k.KDC(0,t);
        k.KDO(-1,t,3);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 399
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 401
        k.KDC(0,t);
        k.KDO(-1,t,3);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10C)) {
      if(1){
        r=m=1;   // Line 402
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10D)) {
      if(1){
        r=m=1;   // Line 403
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 409
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 410
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 411
        k.KDC(0,t);
        k.KB(t);
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 412
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 417
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 421
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10E)) {
      if(1){
        r=m=1;   // Line 422
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10F)) {
      if(1){
        r=m=1;   // Line 431
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 432
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 433
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 434
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 435
        k.KDC(0,t);
        k.KB(t);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 441
        k.KDC(0,t);
        k.KO(-1,t,"²");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 442
        k.KDC(0,t);
        k.KO(-1,t,"²");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 443
        k.KDC(0,t);
        k.KO(-1,t,"³");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 444
        k.KDC(0,t);
        k.KO(-1,t,"³");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 447
        k.KDC(0,t);
        k.KDO(-1,t,5);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 449
        k.KDC(0,t);
        k.KDO(-1,t,6);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 451
        k.KDC(0,t);
        k.KDO(-1,t,5);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 453
        k.KDC(0,t);
        k.KDO(-1,t,6);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 460
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 462
        k.KDC(0,t);
        k.KO(-1,t,"¤");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 464
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 466
        k.KDC(0,t);
        k.KO(-1,t,"¤");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 506
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 507
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 508
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 509
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4208 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 510
        k.KDC(0,t);
        k.KO(-1,t,"«");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4108 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 511
        k.KDC(0,t);
        k.KO(-1,t,"«");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4218 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 512
        k.KDC(0,t);
        k.KO(-1,t,"»");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4118 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 513
        k.KDC(0,t);
        k.KO(-1,t,"»");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x110)) {
      if(1){
        r=m=1;   // Line 515
        k.KDC(0,t);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x111)) {
      if(1){
        r=m=1;   // Line 516
        k.KDC(0,t);
        k.KO(-1,t,"FCFA");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x112)) {
      if(1){
        r=m=1;   // Line 517
        k.KDC(0,t);
        k.KSETS(33,this.s43,t);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(k.KFCM(2,t,[{t:'a',a:this.s_word},{t:'a',a:this.s_final}])&&k.KIFS(31,this.s39,t)){
        r=m=1;   // Line 26
        k.KDC(2,t);
        k.KIO(-1,this.s_word,1,t);
        k.KIO(-1,this.s_final,2,t);
        k.KO(-1,t," ");
        k.KSETS(33,this.s40,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_word},' '])&&k.KIFS(31,this.s41,t)){
        r=m=1;   // Line 27
        k.KDC(2,t);
        k.KIO(-1,this.s_word,1,t);
        k.KO(-1,t,". ");
        k.KSETS(33,this.s42,t);
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 499
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 491
        k.KDC(0,t);
        k.KO(-1,t,"̂");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 503
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 495
        k.KDC(0,t);
        k.KO(-1,t,"̂");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"è");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 114
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 497
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 489
        k.KDC(0,t);
        k.KO(-1,t,"̀");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 501
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 493
        k.KDC(0,t);
        k.KO(-1,t,"̀");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        k.KO(-1,t,"ç");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 134
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"à");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 121
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 124
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 387
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 391
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 394
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 398
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 405
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 408
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 414
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 418
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 426
        k.KDC(0,t);
        k.KDO(-1,t,4);
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 427
        k.KDC(0,t);
        k.KDO(-1,t,4);
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 428
        k.KDC(0,t);
        k.KDO(-1,t,4);
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"à");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"é");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 66
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 80
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"è");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 118
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 122
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 128
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 132
        k.KDC(0,t);
        k.KO(-1,t,"ç");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 248
        k.KDC(0,t);
        k.KO(-1,t,"M");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 251
        k.KDC(0,t);
        k.KO(-1,t,"m");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 249
        k.KDC(0,t);
        k.KO(-1,t,"M");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 250
        k.KDC(0,t);
        k.KO(-1,t,"m");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 396
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 400
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 385
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 389
        k.KDC(0,t);
        k.KDO(-1,t,1);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 416
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 420
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 429
        k.KDC(0,t);
        k.KO(-1,t,"§");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 430
        k.KDC(0,t);
        k.KO(-1,t,"§");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"é");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 286
        k.KDC(0,t);
        k.KO(-1,t,"Q");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 287
        k.KDC(0,t);
        k.KO(-1,t,"Q");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 149
        k.KDC(0,t);
        k.KO(-1,t,"B");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 150
        k.KDC(0,t);
        k.KO(-1,t,"B");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 156
        k.KDC(0,t);
        k.KO(-1,t,"C");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 162
        k.KDC(0,t);
        k.KO(-1,t,"C");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 169
        k.KDC(0,t);
        k.KO(-1,t,"D");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 170
        k.KDC(0,t);
        k.KO(-1,t,"D");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 178
        k.KDC(0,t);
        k.KO(-1,t,"E");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 179
        k.KDC(0,t);
        k.KO(-1,t,"E");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"F");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"F");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"G");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 197
        k.KDC(0,t);
        k.KO(-1,t,"G");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 205
        k.KDC(0,t);
        k.KO(-1,t,"H");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 206
        k.KDC(0,t);
        k.KO(-1,t,"H");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 214
        k.KDC(0,t);
        k.KO(-1,t,"I");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 215
        k.KDC(0,t);
        k.KO(-1,t,"I");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 223
        k.KDC(0,t);
        k.KO(-1,t,"J");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 224
        k.KDC(0,t);
        k.KO(-1,t,"J");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"K");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"K");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 241
        k.KDC(0,t);
        k.KO(-1,t,"L");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 242
        k.KDC(0,t);
        k.KO(-1,t,"L");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 374
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 380
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 259
        k.KDC(0,t);
        k.KO(-1,t,"N");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"N");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 268
        k.KDC(0,t);
        k.KO(-1,t,"O");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 269
        k.KDC(0,t);
        k.KO(-1,t,"O");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 277
        k.KDC(0,t);
        k.KO(-1,t,"P");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 278
        k.KDC(0,t);
        k.KO(-1,t,"P");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 138
        k.KDC(0,t);
        k.KO(-1,t,"A");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 144
        k.KDC(0,t);
        k.KO(-1,t,"A");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 295
        k.KDC(0,t);
        k.KO(-1,t,"R");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 296
        k.KDC(0,t);
        k.KO(-1,t,"R");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 304
        k.KDC(0,t);
        k.KO(-1,t,"S");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 305
        k.KDC(0,t);
        k.KO(-1,t,"S");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 313
        k.KDC(0,t);
        k.KO(-1,t,"T");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 314
        k.KDC(0,t);
        k.KO(-1,t,"T");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 322
        k.KDC(0,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 323
        k.KDC(0,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 331
        k.KDC(0,t);
        k.KO(-1,t,"V");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 332
        k.KDC(0,t);
        k.KO(-1,t,"V");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 367
        k.KDC(0,t);
        k.KO(-1,t,"Z");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 368
        k.KDC(0,t);
        k.KO(-1,t,"Z");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 349
        k.KDC(0,t);
        k.KO(-1,t,"X");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 350
        k.KDC(0,t);
        k.KO(-1,t,"X");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 358
        k.KDC(0,t);
        k.KO(-1,t,"Y");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 359
        k.KDC(0,t);
        k.KO(-1,t,"Y");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 340
        k.KDC(0,t);
        k.KO(-1,t,"W");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 341
        k.KDC(0,t);
        k.KO(-1,t,"W");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 454
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 446
        k.KDC(0,t);
        k.KO(-1,t,"́");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 456
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 450
        k.KDC(0,t);
        k.KO(-1,t,"́");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 467
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 459
        k.KDC(0,t);
        k.KO(-1,t,"᷆");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 469
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 463
        k.KDC(0,t);
        k.KO(-1,t,"᷆");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 480
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 472
        k.KDC(0,t);
        k.KO(-1,t,"̰");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 484
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 476
        k.KDC(0,t);
        k.KO(-1,t,"̰");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 406
        k.KDC(0,t);
        k.KO(-1,t,"°");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 407
        k.KDC(0,t);
        k.KO(-1,t,"°");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 439
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 440
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 284
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 285
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 147
        k.KDC(0,t);
        k.KO(-1,t,"b");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 148
        k.KDC(0,t);
        k.KO(-1,t,"b");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"c");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"c");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 167
        k.KDC(0,t);
        k.KO(-1,t,"d");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 168
        k.KDC(0,t);
        k.KO(-1,t,"d");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 176
        k.KDC(0,t);
        k.KO(-1,t,"e");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 177
        k.KDC(0,t);
        k.KO(-1,t,"e");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 185
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"g");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"g");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 203
        k.KDC(0,t);
        k.KO(-1,t,"h");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 204
        k.KDC(0,t);
        k.KO(-1,t,"h");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 212
        k.KDC(0,t);
        k.KO(-1,t,"i");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 213
        k.KDC(0,t);
        k.KO(-1,t,"i");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 221
        k.KDC(0,t);
        k.KO(-1,t,"j");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 222
        k.KDC(0,t);
        k.KO(-1,t,"j");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 230
        k.KDC(0,t);
        k.KO(-1,t,"k");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"k");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 239
        k.KDC(0,t);
        k.KO(-1,t,"l");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 240
        k.KDC(0,t);
        k.KO(-1,t,"l");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 376
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 378
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 257
        k.KDC(0,t);
        k.KO(-1,t,"n");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 258
        k.KDC(0,t);
        k.KO(-1,t,"n");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 266
        k.KDC(0,t);
        k.KO(-1,t,"o");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 267
        k.KDC(0,t);
        k.KO(-1,t,"o");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 275
        k.KDC(0,t);
        k.KO(-1,t,"p");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 276
        k.KDC(0,t);
        k.KO(-1,t,"p");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 140
        k.KDC(0,t);
        k.KO(-1,t,"a");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 142
        k.KDC(0,t);
        k.KO(-1,t,"a");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 293
        k.KDC(0,t);
        k.KO(-1,t,"r");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 294
        k.KDC(0,t);
        k.KO(-1,t,"r");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 302
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 303
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 311
        k.KDC(0,t);
        k.KO(-1,t,"t");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 312
        k.KDC(0,t);
        k.KO(-1,t,"t");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 320
        k.KDC(0,t);
        k.KO(-1,t,"u");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 321
        k.KDC(0,t);
        k.KO(-1,t,"u");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 329
        k.KDC(0,t);
        k.KO(-1,t,"v");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 330
        k.KDC(0,t);
        k.KO(-1,t,"v");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 365
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 366
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 347
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 348
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 356
        k.KDC(0,t);
        k.KO(-1,t,"y");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 357
        k.KDC(0,t);
        k.KO(-1,t,"y");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 338
        k.KDC(0,t);
        k.KO(-1,t,"w");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 339
        k.KDC(0,t);
        k.KO(-1,t,"w");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 455
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 448
        k.KDC(0,t);
        k.KO(-1,t,"̌");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 457
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 452
        k.KDC(0,t);
        k.KO(-1,t,"̌");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 468
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 461
        k.KDC(0,t);
        k.KO(-1,t,"᷇");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 470
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 465
        k.KDC(0,t);
        k.KO(-1,t,"᷇");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 482
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 475
        k.KDC(0,t);
        k.KO(-1,t,"̃");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diablock}])){
        r=m=1;   // Line 486
        k.KDC(1,t);
        k.KIO(-1,this.s_diablock,1,t);
      }
      else if(1){
        r=m=1;   // Line 478
        k.KDC(0,t);
        k.KO(-1,t,"̃");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 437
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 438
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    if(m) {
    
      k.KDC(-1,t);
      r=this.g_deadkeys(t,e);
    }
    return r;
  };
  this.g_deadkeys=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
      if(k.KFCM(2,t,[{t:'d',d:4},'.'])){
        m=1;   // Line 555
        k.KDC(2,t);
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(2,t,[{t:'d',d:4},'è'])){
        m=1;   // Line 556
        k.KDC(2,t);
        k.KDO(-1,t,3);
      }
      else if(k.KFCM(2,t,[{t:'d',d:4},';'])){
        m=1;   // Line 557
        k.KDC(2,t);
        k.KDO(-1,t,0);
      }
      else if(k.KFCM(2,t,[{t:'d',d:4},'ç'])){
        m=1;   // Line 558
        k.KDC(2,t);
        k.KDO(-1,t,5);
      }
      else if(k.KFCM(2,t,[{t:'d',d:4},'é'])){
        m=1;   // Line 559
        k.KDC(2,t);
        k.KDO(-1,t,2);
      }
      else if(k.KFCM(2,t,[{t:'d',d:4},'̌'])){
        m=1;   // Line 560
        k.KDC(2,t);
        k.KDO(-1,t,6);
      }
      else if(k.KFCM(2,t,[{t:'d',d:4},{t:'d',d:4}])){
        m=1;   // Line 561
        k.KDC(2,t);
        k.KO(-1,t,"!");
      }
      else if(k.KFCM(2,t,[{t:'d',d:2},{t:'a',a:this.s_dkf007e}])){
        m=1;   // Line 565
        k.KDC(2,t);
        k.KIO(-1,this.s_dkt007e,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:1},{t:'a',a:this.s_dkf003d}])){
        m=1;   // Line 569
        k.KDC(2,t);
        k.KIO(-1,this.s_dkt003d,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:0},{t:'a',a:this.s_dkf00b4}])){
        m=1;   // Line 573
        k.KDC(2,t);
        k.KIO(-1,this.s_dkt00b4,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:3},{t:'a',a:this.s_dkf0060}])){
        m=1;   // Line 577
        k.KDC(2,t);
        k.KIO(-1,this.s_dkt0060,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:5},{t:'a',a:this.s_dkf005e}])){
        m=1;   // Line 581
        k.KDC(2,t);
        k.KIO(-1,this.s_dkt005e,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:6},{t:'a',a:this.s_dkf00a8}])){
        m=1;   // Line 585
        k.KDC(2,t);
        k.KIO(-1,this.s_dkt00a8,2,t);
      }
      else if(k.KFCM(2,t,[{t:'d',d:4},{t:'a',a:this.s_dkf0021}])){
        m=1;   // Line 589
        k.KDC(2,t);
        k.KIO(-1,this.s_dkt0021,2,t);
      }
    return r;
  };
}
