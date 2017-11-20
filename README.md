# Thingify

An abstract language to describe physical objects.  The purpose is use in a context where only text is available to describe a configration of shapes.

This language has a base set of primative shapes (nouns), and preposition (above / under), adjectives (smaller , larger, green).  Definitions can be used inside other definitions once defined.

The language defines 'types' as a name, followed by an '=', followed by a definition enclosed in square brackets '[]'.

# Example

Define a pinetree shape as a green cone atop a brown cylinder

```
pinetree = [
   prickly large green taller by 3 cone above
   lumpy brown thinner by 2 cylinder
]
```

# Primatives

- Null (shape) -- the shape is not visible / it is used for arrangoing other items.
- Sphere
- \# sided Sphere (# of sides - i.e. 4 sided sphere - four sections around )
- Cube
- Box
- Cone
- \# sided Cone (# is the number of sides - i.e. 4 sided code is a pyramid)
- Toroid
- Cylinder
- \# sided Cylinder (# is the number of sides for the Cylinder - ie. 8 sided Cylinder is an octagonal) 
- Rope
- Fabric

# Preposition

If not specified, shapes are assumed to be touching

- Above  (first shape is directly above second shape)
- Below  (first shape is directly below second shape)
- Above Corners (repeat second shape abobe at just the top corners)
- Below Corners (repeat second shape below at just the bottom corners)
- At Corners (repeat second shape at every corner)
- At Top Corners (repeat second shape at just the top corners)
- At Bottom Corners (repeat second shape at just the bottom corners)
- At Sides (Duplicate along left/right side / mirroring on left).
- On Edges (Duplicate second shape at center of every edge).
- On Top Edges (Duplicate second shape at center of just the top edges).
- On Bottom Edges (Duplicate second shape at center of just the bottom edges).
- Above Edges (repeat second shape abobe at just the top edges)
- Below Edges (repeat second shape below at just the bottom edges)
- Left of (from shapes perspective, second shape is on left)
- Right of (from shapes perspective, second shape is on right)
- Behind (first shape is directly behind second shape)
- [in] front [of] (first shape is directly in front of second shape )
- Around (first shape is around the second shape)
- Inside (first shape is inside the second shape)
- Around Every # (duplicate the second shape in a circular pattern 'around' the first shape )
- Mirror (second shape is duplicated and flipped on the axis specified - i.e. left/right/front/behind)

# Modifiers

- [At] Normal (second rotated to extend at surface normal from first object)
- Perpendicular [to] (synonym for at normal)
- Deeply Embedded (In the the relation the second shape is \* 0.75 inside the first shape)
- Embedded (In the relation to the second shape is \* 0.5 inside the first shape)
- Shallowly Embedded (In the relation to the second shape is \* 0.25 inside the first shape)
- Nearer (In the the relation the second shape is \* 0.25 outside the first shape)
- Near (In the the relation the second shape is \* 0.5 outside the first shape)
- Far (In the the relation the second shape is \* 0.75 outside the first shape)
- Farther (In the the relation the second shape is \* 1.0 outside the first shape)
- Higher (Prefix to Left/Right/Behind/in front indictating vertical position is aligned with top)
- High  (... vertical position is between top and middle)
- Low   (... vertical position is between bottom and middle)
- Lower (... vertical position is at bottom)

# Adjectives and Pronouns

- Bigger by \# (all dimensions\*\#)
- Big     (all dimensions\*1.5)
- Small   (all dimensions\*0.75)
- Smaller by \#[/\#] (\* \# / \# | 1 / \#) 
- Thinner by \#[/\#] (width/depth\* \# / \# | 1 / \#)
- Thin    (width/depth\*0.75) 
- Fat     (width/depth\*1.5)  
- Fatter by \# (width/depth\*#)
- Narrower by \#[/\#] (width\*\# / \# | 1 / \#) 
- Narrow   (width\*0.75) 
- Wide     (width\*1.5)
- Wider    (width\*2.0)
- Shallower by \#[/\#] (depth\*\# / \# | 1 / \#)
- Shallow    (depth\*0.75)
- Deeper by \# (depth\*\#)
- Deep       (depth\*1.5)
- Shorter by \#[/\#] (height\*\# / \# | 1 / \#)
- Short    (height\*0.75)
- Taller by \#  (height\*\#)
- Tall     (height\*1.5)
- Long     (rope-length * 2)
- Longer by \#  (rope-length * \#)
- Flipped Horizontally (exchange x)
- Flipped Vertically (exchange z)
- Flipped Depth (exchange y)
- Tapered Up by \# [/\#] (narrower at top * \# / \# | 1 / \# )
- Tapered Down by \# [/\#] (narrower at bottom * \# / \# | 1 / \# )
- Tapered  \# [/\#] (narrower at top and bottom by \# / \# | 1 / \#)
- Tapered Up    (narrower at top * .5 )
- Tapered Down  (narrower at bottom * .5 )
- Tapered (narrower at top and bottom by .5)
- Flatten Depth  (depth\*0.1)
- Flatten Height (height\*0.1)
- Flatten Width  (width\*0.1) 

# Material Adjectives

Color and texture

- Any well known HTML color (used to shade the shape)
- Rounded
- Finer (features are closest together * .25)
- Fine  (features are closest together * .5)
- Coarse (features are farther apart * 2)
- Coarse (features are farther apart * 4)
- Bumps (Surface texture has bumps)
- Divoted (Surface texture has divots)
- Lumpy (Surface texture has lumps - i.e. divots and bumps)
- Vertical Bars (bars up & down)
- Horizontal Bars (bars across)
- Vertical Rings
- Horizontal Rings
- Prickly (has 'spines')
- Random (variable)
- Shrubby (fill 'plant' material)
- Packed (rings/bars are next to each other)
- Tighter (rings/bars are x 0.25 apart)
- Tight (rings/bars are x 0.5 apart)
- Loose (rings/bars are x 1.5 apart)
- Looser (rings/bars are x 2 apart)
- Smooth (implies slightly shiny)
- Very Smooth (implies shiny)
- Grainy (i.e. generative wood grain)
- Rusty (i.e. generative metal rust)
- Dirty (Add 'dirt' or 'dust')
- Rivets (edges have riveting)









