---
title: Markdown Test
description: A page for testing markdown features.
author: Rami Sabbagh
---

> This page exists only for testing porposes, and has no actual useful content.

[/index.html](/index.html)

[img/logo-icon.svg](../../assets/img/logo-icon.svg)

![this should be an image](../../assets/img/logo-icon.svg)

<img src="../../assets/img/logo-icon.svg" width=128 height=128>

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
