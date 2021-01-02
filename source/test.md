# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Hello markdown!

Line 1
Line 2 same paragraph

**this is bold**

*this is italic*

~~This is stricked through~~

[This links to google](https://www.google.com/)

[This links to index.html](/index.html)

![this should be an image](img/logo-icon.svg)

> this is a quote

This is an `in-line codeblock`

```
this is a
multiline codeblock
```

---

```lua
--Ellipses Demo By Rami Sabbagh
--@RamiLego4Game

Controls("none")

local ww = 6 --Wave width
local speed = 1 --Speed

local ww2 = ww*2
local ww0 = ww/2

local function ellip(x,y,r)
    if (x+y)%2 == 0 then r = r+ww0/2 end
    local r = r%ww
 
    local rx = math.sin((r/ww0)*math.pi)*9
    local ry = math.cos((r/ww0)*math.pi)*9
    rx = math.abs(rx)
    ry = math.abs(ry)
 
 
    ellipse(x*16+8,y*16+8,rx+1,ry+1)
end

local sw, sh = screenSize()
local cw, ch = sw/16, sh/16

local t = ww-1

function _update(dt)
    t = t + dt*speed
    if t > ww2 then t = t -ww2 end
    clear()
    for y=0,ch-1 do
        for x=0,cw-1 do
            color(7+(x+y)%8)
            ellip(x,y,t)
        end
    end
end
```
