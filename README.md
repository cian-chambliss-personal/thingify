# Thingify

An abstract language to describe physical objects.  The purpose is use in a context where only text is available to describe a configration of shapes.

This language has a base set of primative shapes (nouns), and preposition (above / under), adjectives (smaller , larger, green).  Definitions can be used inside other definitions once defined.

The language defines 'types' as a name, followed by an '=', followed by a definition enclosed in square brackets '[]'.

# Example

Define a pinetree shape as a green cone atop a brown cylinder

```
pinetree = [
   cone (large,green) above - cylinder (thinner,brown)
]
```

# Primatives

- Null (placeholder)
- Sphere
- Cube
- Box
- Cone
- Pyramid
- Toroid
- Cylinder

# Preposition

If not specified, shapes are assumed to be touching

- Above  (first shape is directly above second shape)
- Below  (first shape is directly below second shape)
- Left of (from shapes perspective, second shape is on left)
- Right of (from shapes perspective, second shape is on right)
- Behind (first shape is directly behind second shape)
- [in] front [of] (first shape is directly in front of second shape )
- Around (first shape is around the second shape)
- Inside (first shape is inside the second shape)

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

- Bigger  (all dimensions\*2)
- Big     (all dimensions\*1.5)
- Small   (all dimensions\*0.75)
- Smaller (\*0x.5) 
- Thinner (width/depth\*0.5)
- Thin    (width/depth\*0.75) 
- Fat     (width/depth\*1.5)  
- Fatter  (width/depth\*2)
- Narrower  (width\*0.5) 
- Narrow   (width\*0.75) 
- Wide     (width\*1.5)
- Wider    (width\*2.0)
- Shallower  (depth\*0.5)
- Shallow    (depth\*0.75)
- Deep       (depth\*1.5)
- Deeper     (depth\*2)
- Shorter    (height\*0.5)
- Short    (height\*0.75)
- Tall     (height\*1.5)
- Taller   (height\*2.0)

# Material Adjectives

Color and texture

- Any well known HTML color (used to shade the shape)
- Rounded
- Very Lumpy (Surface texture has deep 'noise')
- Lumpy (Surface texture has shallow 'noise')
- Vertical Bars (bars up & down)
- Horizontal Bars (bars across)
- Vertical Rings
- Horizontal Rings
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









